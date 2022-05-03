import { Row, Button, Table, Progress, Space, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { get, getAll } from "../../utils/APIUtils";
import { Header } from "antd/lib/layout/layout";
import { FaPlus } from "react-icons/fa";
import { useHistory, useParams } from "react-router";
import Text from "antd/lib/typography/Text";

export default function Syllabus() {
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
    history.push("/users/" + key + "/user_programs/user_lectures/new");
  }

  // function handleExtraLesson(data) {
  //   history.push({
  //     pathname: "/users/" + key + "/user_programs/user_custom_lectures/new",
  //     state: { detail: data },
  //   });
  // }
  function handleExtraLesson(data) {
    history.push({
      pathname: "/ExtraLesson",
      state: { detail: data },
    });
  }

  if (loading) {
    return "...Loading";
  }
  const columns_ppl_a = [
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
                  Syllabus <br></br> <Text type="secondary">Actual</Text>
                </Text>
              ),
              dataIndex: "syllabus",
            },
          ],
        },
      ],
    },

    {
      title: "IFR",
      dataIndex: "ifr",
      children: [
        {
          title: "Sim",
          dataIndex: "sim",
          children: [
            {
              title: (
                <Text>
                  5.00 <br></br> <Text type="secondary">0.00</Text>
                </Text>
              ),
              dataIndex: "sim_val",
            },
          ],
        },
      ],
    },
    {
      title: "",
      children: [
        {
          title: "STATUS",
          dataIndex: "status",
          children: [{ title: "0 DAYS", dataIndex: "days" }],
        },
        { title: "", children: [{ title: "0 LDG", dataIndex: "ldg" }] },
      ],
    },
  ];

  const columns_ppl_a_credit = [
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
              title: <Text>IR REVALIDATION</Text>,
              dataIndex: "syllabus",
            },
          ],
        },
      ],
    },

    {
      title: "IFR",
      dataIndex: "ifr",
      children: [
        {
          title: "Sim",
          dataIndex: "sim",
          children: [
            {
              title: (
                <Text>
                  5.00 <br></br> <Text type="secondary">(0.00)</Text>
                </Text>
              ),
              dataIndex: "sim_val",
            },
          ],
        },
      ],
    },
    {
      title: "",
      children: [
        {
          title: "XC",
          dataIndex: "xc",
          children: [
            {
              title: (
                <Text>
                  6.00 <br></br> <Text type="secondary">(0.00)</Text>
                </Text>
              ),
              dataIndex: "xc_val",
            },
          ],
        },
        {
          title: "IF",
          dataIndex: "if",
          children: [
            {
              title: (
                <Text>
                  0.00 <br></br> <Text type="secondary">(0.00)</Text>
                </Text>
              ),
              dataIndex: "if_val",
            },
          ],
        },
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
                    {" "}
                    IR REVALIDATION
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
            columns={columns_ppl_a}
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
            <Button onClick={() => handleExtraLesson()}>
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
            columns={columns_ppl_a_credit}
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
