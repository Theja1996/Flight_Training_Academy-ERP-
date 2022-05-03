import { Row, Button, Table, Progress, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";

import { Header } from "antd/lib/layout/layout";
import { FaPlus } from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import Text from "antd/lib/typography/Text";
import { get, getAll } from "../../../utils/APIUtils";

export default function Syllabus_cpl_renewal() {
  const [masterList, setMasterList] = useState([]);
  const [revision, setRevision] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState({});
  let { key } = useParams();

  let history = useHistory();

  useEffect(() => {
    get("users", key)
      .then((d) => {
        setUserData(d);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getAll("newPrograms")
      .then((result) => setMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getAll("Programs")
      .then((result) => setRevision(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  function handleCreate(data) {
    history.push({
      pathname: "/CustomLesson",
      state: { detail: data },
    });
  }
  if (loading) {
    return "...Loading";
  }
  const columns = [
    {
      title: (
        <Text>
          {userData.callsign +
            "-" +
            userData.user_First_name +
            " " +
            userData.user_Last_name}
        </Text>
      ),
      dataIndex: "name",
      children: [
        {
          title: "",
          dataIndex: "sections",
          children: [
            {
              title: (
                <Text>
                  Syllabus <br></br>  <Text type="secondary">Actual</Text>
                </Text>
              ),
              dataIndex: "syllabus",
            },
          ],
        },
      ],
    },
    {
      title: "VFR",
      dataIndex: "vfr",
      children: [
        {
          title: "Dual",
          dataIndex: "dual",
          children: [
            {
              title: (
                <Text>
          4:00 <br></br> <Text type="secondary">(7:12)</Text>
                </Text>
              ),
              dataIndex: "dual_val",
            },
          ],
        },
       
      ],
    },
   
    {
      title: "",
      children: [{title:"NT",  dataIndex: "nt",children:[{title:(
        <Text>
          0:00 <br></br> <Text type="secondary">(2.12)</Text>
        </Text>
      ),              dataIndex: "nt_cal",
    }]},
       
       
        {
          title: "STATUS",
          dataIndex: "status",
          children: [{ title: "0 DAYS", dataIndex: "days" }],
        },
        { title: "", children: [{ title: "0 LDG", dataIndex: "ldg" }] },
      ],
    },
  ];

  const columns_credit = [
    {
      title: (
        <Text>
          {userData.callsign +
            "-" +
            userData.user_First_name +
            " " +
            userData.user_Last_name}
        </Text>
      ),
      dataIndex: "name",
      children: [
        {
          title: "",
          dataIndex: "sections",
          children: [
            {
              title: (
                <Text>
                CPL RENEWAL

                </Text>
              ),
              dataIndex: "syllabus",
            },
          ],
        },
      ],
    },
    {
      title: "VFR",
      dataIndex: "vfr",
      children: [
        {
          title: "Dual",
          dataIndex: "dual",
          children: [
            {
              title: (
                <Text>
               4:00 <br></br> <Text type="secondary">(0:00)</Text>
                </Text>
              ),
              dataIndex: "dual_val",
            },
          ],
        },
      
      ],
    },
   
    {
      title: "",
      children: [{title:"NT",  dataIndex: "nt",children:[{title:(
         <Text type="secondary">(0:00)</Text>
       
      ),              dataIndex: "nt_cal",
    }]},
        
       
      ],
    },
  ];

  const dataSource = [
    {
      syllabus: "Air Experience",
      dual_val: 0.3,
      ldg: 32,
    },
    {
      syllabus: "First Solo",
      dual_val: 0.3,
      ldg: 32,
    },
  ];

  const columns_Hold_Item = [
    {
      title: "Lesson / Exercise",
      dataIndex: "lesson",
    },
    {
      title: "Completed / Grade",
      dataIndex: "grade",
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
    },
  ];
  const columns_Subgrades = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Lesson / Exercise",
      dataIndex: "exercise",
    },
    {
      title: "Grade / Comment",
      dataIndex: "comment",
    },
  ];
  return (
    <>
      <Space direction="vertical" style={{ marginTop: 5, width: "100%" }}>
        <Row justify="center " style={{ marginTop: 5, width: "100%" }}>
          <Table
            tableLayout="auto"
            style={{ width: "100%" }}
            pagination={false}
            size="small"
            title={() => (
              <Header
                style={{
                  borderRadius: "4px",
                  width: "100%",
                  backgroundColor: " #E6E6E6",
                  height: 75,
                  border: " #ccc 1px solid",
                  backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
                  float: "left",
                }}
              >
                <Row
                  justify="space-between "
                  style={{ marginTop: 5, width: "100%" }}
                >
                  {/* {masterList.filter(v=>userData.programme.includes(v.key)).map((pl) => ( */}
                  <h3 style={{ fontWeight: "bold" }}>
                    
                  CPL RENEWAL

                    {/* {pl.name} */}
                  </h3>
                  {/* ))} */}
                  <h5>
                    Program status
                    {revision.map((pl) => (
                      <p> {pl.active}</p>
                    ))}
                  </h5>

                  <Progress
                    strokeColor={{
                      "0%": "#108ee9",
                      "100%": "#87d068",
                    }}
                    percent={60}
                  />
                </Row>
              </Header>
            )}
            columns={columns}
            dataSource={dataSource}
            //scroll={{ y: 10 }}
          />
        </Row>
        <Row>
          <Space direction="horizontal">
            <Button onClick={() => handleCreate()}>
              <FaPlus style={{ color: "green" }} />
              Fly custom lesson
            </Button>
            <Button onClick={() => handleCreate()}>
              <FaPlus style={{ color: "green" }} />
              Add extra lesson
            </Button>
          </Space>
        </Row>

        <Row justify="space-between">
          <Space direction="horizontal" size="large">
            <Row style={{ width: "135%" }}>
              <Table
                tableLayout="auto"
                style={{ width: "100%" }}
                pagination={false}
                size="small"
                title={() => (
                  <Header
                    style={{
                      borderRadius: "4px",
                      width: "100%",
                      backgroundColor: " #E6E6E6",
                      height: 35,
                      border: " #ccc 1px solid",
                      backgroundImage:
                        "linear-gradient(white, white 25%, #e6e6e6)",
                      float: "left",
                    }}
                  >
                    <Row
                      justify="space-between "
                      style={{ marginTop: 5, width: "100%" }}
                    >
                      <h3 style={{ fontWeight: "bold" }}>Hold item list</h3>
                    </Row>
                  </Header>
                )}
                columns={columns_Hold_Item}
              />
            </Row>

            <Row style={{ width: "130%", marginLeft: "100px" }}>
              <Table
                tableLayout="auto"
                style={{ width: "100%" }}
                pagination={false}
                size="small"
                title={() => (
                  <Header
                    style={{
                      borderRadius: "4px",
                      width: "100%",
                      backgroundColor: " #E6E6E6",
                      height: 35,
                      border: " #ccc 1px solid",
                      backgroundImage:
                        "linear-gradient(white, white 25%, #e6e6e6)",
                      float: "left",
                    }}
                  >
                    <Row
                      justify="space-between "
                      style={{ marginTop: 5, width: "100%" }}
                    >
                      <h3 style={{ fontWeight: "bold" }}>Subgrades</h3>
                    </Row>
                  </Header>
                )}
                columns={columns_Subgrades}
              />
            </Row>
          </Space>
        </Row>

        <Row justify="center " style={{ marginTop: 5, width: "100%" }}>
          <Table
            tableLayout="auto"
            style={{ width: "100%" }}
            pagination={false}
            size="small"
            title={() => (
              <Header
                style={{
                  borderRadius: "4px",
                  width: "100%",
                  backgroundColor: " #E6E6E6",
                  height: 35,
                  border: " #ccc 1px solid",
                  backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
                  float: "left",
                }}
              >
                <Row
                  justify="space-between "
                  style={{ marginTop: 5, width: "100%" }}
                >
                  <h3 style={{ fontWeight: "bold" }}>Credited hours</h3>

                  <Progress
                    strokeColor={{
                      "0%": "#108ee9",
                      "100%": "#87d068",
                    }}
                    percent={60}
                  />
                </Row>
              </Header>
            )}
            columns={columns_credit}
          />
        </Row>
        <Row>
          <Button onClick={() => handleCreate()}>
            <FaPlus style={{ color: "green" }} />
            Amend credited hours{" "}
          </Button>
        </Row>
      </Space>
    </>
  );
}

