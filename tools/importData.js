var convert = require('xml-js');
const fs = require('fs');
var parseString = require('xml2js').parseString;
const fetch = require("node-fetch");
const { red } = require('color-name');
const API_BASE_URL = "http://localhost:5555/";
const file_upload =  'http://localhost:80/';
const ACCESS_TOKEN = "accessToken";

const request = (options) => {

  
    // if(localStorage.getItem(ACCESS_TOKEN)) {
    //     headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    // }
  
    const defaults = { headers:  {
        Accept: 'application/json',
      } };
    options = Object.assign({}, defaults, options);
  
    if (options.formData) {
      options.headers['Content-Type'] = 'multipart/form-data';
      delete options.formData;
    }
  
    return fetch(options.url, options).then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        return json;
      }),
    );
  };

  function addMany(data, url) {
      let reData=JSON.stringify(data)
      reData=reData.replace(/\[/g, "").replace(/\]/g, "");
      reData=reData.replace(/\s+\"/g,'"')
      reData="["+reData+"]"
      fs.writeFile('users.json', reData, function (err) {
        if (err) return console.log(err);
      });
      
    //   reData=reData.replaceAll("[","")
    //   console.log(reData)
    return request({
      url: API_BASE_URL + url + '/list',
      method: 'POST',
      body:reData ,
    });
  }

var xml ='';

try {
    const data = fs.readFileSync('standby_students_list-2021_05_28_12_10_59.xml', 'utf8')
    xml=data
    // console.log(data)
  } catch (err) {
    console.error(err)
  }

  let userList=[]
  
  parseString(xml, function (err, result) {
      result.users.user.forEach(element => {
        //   console.log(element)
          userList.push(element)
          
      });
  });


if(Array.isArray(userList)){
    for(let i=1;i<userList.length+1;i++){
        let row=userList[i-1]
        row.key=i
    }

    // console.log(JSON.stringify(userList[0]))
    // console.log(userList[0])
    addMany(userList,"students")
}