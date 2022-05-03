const express = require('express');
const Firestore = require('@google-cloud/firestore');
var bodyParser = require('body-parser');
var cors = require('cors')
const fileUpload = require('express-fileupload');



const app = express();
const PROJECTID = 'flightlogger-erp-system';
const client = "aaa"
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


const firestore = new Firestore({
    projectId: PROJECTID,
    timestampsInSnapshots: true,
    keyFilename: './flightlogger-erp-system-21ed863e5aaf.json',
});

// const PORT = 4444;


// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

app.use('*', cors())
app.use(express.static('public'));
app.use(fileUpload());

// file upload api
app.post('/upload', (req, res) => {
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
    // accessing the file
    const myFile = req.files.file;
    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({ name: myFile.name, path: `/${myFile.name}` });
    });
})

app.post('/:entity', (req, res, next) => {
    console.log("req.body.key", req.body.key)

    firestore.collection("clients/" + client + "/" + req.params.entity).doc(req.body.key.toString())
        .set(req.body)
        .then(doc => {
            res.json({ ok: true });
        }).catch(err => {
            console.error(err);
            res.status(404).send({ error: 'unable to store', err });
        });
});


app.post('/:entity/list', (req, res, next) => {
    req.body.forEach(item => {
        firestore.collection("clients/" + client + "/" + req.params.entity).doc(item.key.toString())
            .set(item)
            .catch(err => {
                console.error(err);
                return res.status(404).send({ error: 'unable to store', err });
            });
        firestore.collection("clients/" + client + "/" + req.params.entity + "_key").doc(item.key.toString())
            .set({ "key": item.key })
            .catch(err => {
                console.error(err);
                return res.status(404).send({ error: 'unable to store', err });
            });
    })

    res.json({ ok: true });

});

app.get('/:entity/single/:id', (req, res, next) => {

    firestore.collection("clients/" + client + "/" + req.params.entity)
        .doc(req.params.id)
        .get()
        .then(doc => {
            res.json(doc.data());
        }).catch(err => {
            console.error(err);
            res.status(404).send({ error: 'unable to store', err });
        });
});
app.get('/:entity/all', (req, res, next) => {
    firestore.collection("clients/" + client + "/" + req.params.entity)
        .get()
        .then(snapshot => {
            let dataList = []
            snapshot.forEach(doc => {
                let data = doc.data()
                // data.key = doc.id
                dataList.push(data)
            });

            return res.json(dataList);
        }).catch(err => {
            console.error(err);
            res.status(404).send({ error: 'unable to store', err });
        });
});
app.put('/:entity/:id', (req, res, next) => {
    console.error(req.params.id)
    console.error(req.params.entity)
    console.log(req.body)

    firestore.collection("clients/" + client + "/" + req.params.entity).doc(req.params.id)
        .set(req.body)
        .then(doc => {
            return res.json({ ok: true });
        }).catch(err => {
            console.error(err);
            return res.status(404).send({ error: 'unable to store', err });
        });
});
async function deleteCollection(db, collectionPath, batchSize) {
    const collectionRef = db.collection(collectionPath);
    const query = collectionRef.orderBy('key').limit(batchSize);

    return new Promise((resolve, reject) => {
        deleteQueryBatch(db, query, resolve).catch(reject);
    });
}

async function deleteQueryBatch(db, query, resolve) {
    const snapshot = await query.get();

    const batchSize = snapshot.size;
    if (batchSize === 0) {
        // When there are no documents left, we are done
        resolve();
        return;
    }

    // Delete documents in a batch
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
    });
    await batch.commit();

    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
        deleteQueryBatch(db, query, resolve);
    });
}

app.delete('/:entity/all', async (req, res, next) => {

    deleteCollection(firestore, "clients/" + client + "/" + req.params.entity, 10)
        .then(() => {
            deleteCollection(firestore, "clients/" + client + "/" + req.params.entity + "_key", 10)
                .then(() => {
                    res.json({ ok: true });
                })
                .catch(err => {
                    console.error(err);
                    res.status(404).send({ error: 'unable to store', err });
                });
        })
        .catch(err => {
            console.error(err);
            res.status(404).send({ error: 'unable to store', err });
        });
});

app.delete('/:entity/:id', (req, res, next) => {

    firestore.collection("clients/" + client + "/" + req.params.entity).doc(req.params.id)
        .delete()
        .then(() => {
            return res.json({ ok: true });
        }).catch(err => {
            console.error(err);
            return res.status(404).send({ error: 'unable to store', err });
        });
});




app.get('/:entity/max', (req, res, next) => {
    firestore.collection("clients/" + client + "/" + req.params.entity + "_key").orderBy('key', 'desc').limit(1)
        .get()
        .then(snapshot => {
            let returnValue = 1000000
            if (snapshot.docs.length > 0) {
                returnValue = snapshot.docs[0].data().key + 1
            }
            firestore.collection("clients/" + client + "/" + req.params.entity + "_key").doc(returnValue.toString()).set({ key: returnValue })
                .then(() => res.json(returnValue))
                .catch(err => {
                    console.error(err);
                    res.status(404).send({ error: 'unable to store', err });
                })

        }).catch(err => {
            console.error(err);
            return res.status(404).send({ error: 'unable to store', err });
        });
});



app.post('/:entity/unique/:field', (req, res, next) => {

    firestore.collection("clients/" + client + "/" + req.params.entity).where(req.params.field, '==', req.body[req.params.field])
        .get()
        .then(snapshot => {
            if (snapshot.size === 0) {
                res.json(true)
            }
            else {
                res.json(false)
            }

        }).catch(err => {
            console.error(err);
            return res.status(404).send({ error: 'unable to store', err });
        });
});

app.post('/:entity/uniqueList/:field', (req, res, next) => {

    let count = 0;
    let isValid = true;
    while (count < req.body.length) {

        let dataList = req.body.slice(count, count + 10)

        firestore.collection("clients/" + client + "/" + req.params.entity).where(req.params.field, 'in', dataList)
            .get()
            .then(snapshot => {

                if (snapshot.size > 0) {
                    isValid = false;
                }


            }).catch(err => {
                console.error(err);
                return res.status(404).send({ error: 'unable to store', err });
            });
        if (!isValid) {
            break;
        }
        else {
            count = count + 10
        }

    }
    if (isValid) {
        res.json(true)
    }
    else {
        res.json(false)
    }
});



module.exports = {
    app
};
