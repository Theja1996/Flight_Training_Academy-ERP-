import React, { useEffect, useState } from "react";
import {
  Button,
  Space,
  Row,
  Alert,
  Col,
  Form,
  Select,
  Progress,
  Collapse,
  Table,
  Dropdown,
  Badge,
  Menu,
} from "antd";
import { CheckOutlined, DownOutlined, PlusOutlined } from "@ant-design/icons";
import { get, getAll } from "../../../utils/APIUtils";
import Modal from "antd/lib/modal/Modal";
import { useHistory, useParams } from "react-router";
import { Header } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";
//import {  Table } from 'semantic-ui-react'
export default function Classtheory(props) {
  const { Option } = Select;
  const [selectedTablerows, setSelectedTablerows] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewmod, setViewmod] = useState("list");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [instructordata, setinstructordata] = useState([]);
  const [userData, setUserData] = useState({});
  const { Panel } = Collapse;
  let { key } = useParams();
  let history = useHistory();
  useEffect(() => {
    get("Classtheory", key)
      .then((d) => {
        setUserData(d);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function handleTheory(data) {
    history.push("/teams/" + key + "/theory_lectures/new");
  }
  useEffect(() => {
    getAll("FlightInstructor")
      .then((result) => {
        setinstructordata(result);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }
  
  const expandedRowRender = () => {
    const columns = [
      { title: "Date", dataIndex: "date", key: "date" },
      { title: "Subject", dataIndex: "subject", key: "subject" },
      {
        title: "Student comment",
        key: "student_comment",
        
      },
      { title: "Inst.", dataIndex: "instructor", key: "instructor" },
      {
        title:<Text style={{float:"right"}}>Attendance / Duration</Text> ,
        dataIndex: "attendance",
        key: "attendance",
      
      },
    ];

    const data = [];
    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: "-12-24 23:12:00",
        subject: <Text>Stalling. Spinning. Flight limitations{userData.subject}</Text>,
        student_comment: <Text>{userData.comment}</Text>,
        instructor:<Text>{userData.instructor}</Text>,
        attendance:<Text>{userData.start_hours}</Text>
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} style={{width:"100%"}} />;
  };
  const columns = [
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "", dataIndex: "time", key: "time" },
    { title: <Text style={{float:"right"}}>Attendance</Text>, dataIndex: "attendance", key: "attendance" },
    
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      category: "Airframes, Principle of Flight",
      time: <Text style={{float:"right"}}>55658</Text>,
      attendance:  <Text style={{float:"right"}}>42.23</Text>,
     
    });
  }

  return (
    <>
      {/* <Modal
        width={600}
        title="Select a booking for your registration"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form>
          <Space direction="vertical">
            As an administrator you can switch between instructor to select the
            correct booking
            <Form.Item
              name=" instructor"
              label="Instructor"
              style={{ marginLeft: "80px" }}
              rules={[{ required: true }]}
            >
              <Select style={{ width: 200 }} placeholder="Select a person">
                {instructordata.map((pl) => (
                  <Option value={pl.key}>
                    {pl.callsign +
                      "-" +
                      pl.user_First_name +
                      " " +
                      pl.user_Last_name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label={
                <label style={{ fontWeight: "bold" }}>
                  There are no open bookings to choose
                </label>
              }
            ></Form.Item>
            <Button
              loading={loading}
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                borderRadius: "4px",
              }}
              htmlType="submit"
            >
              <CheckOutlined />
              Continue without a booking
            </Button>
          </Space>
        </Form>
      </Modal> */}
      <div style={{ margin: 20 }}>
        <Row>
          <Col span={6}>
            <Space>
              <div>
                <Button onClick={() => setViewmod("Atpl")}> ATPL(A) </Button>
              </div>
              <Button onClick={() => setViewmod("list")}>BAK</Button>
              <Button onClick={() => setViewmod("grid")}>
                Briefing (CPL & PPL)
              </Button>
              <Button onClick={() => setViewmod("grid")}>Briefing (IR) </Button>
            </Space>
          </Col>
        </Row>
        <Row>
          <Button
            //  onClick={showModal}
            onClick={() => handleTheory()}
            style={{
              marginTop: "20px",
            }}
          >
            <PlusOutlined style={{ color: "green" }} />
            Add class theory
          </Button>
        </Row>

        <Row>
          <Header
            style={{
              borderRadius: "4px",
              width: "100%",
              backgroundColor: " #E6E6E6",
              height: 90,
              border: " #ccc 1px solid",
              backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
              float: "left",
            }}
          >
            <Row justify="space-between " style={{ width: "100%" }}>
              {/* {masterList.filter(v=>userData.programme.includes(v.key)).map((pl) => ( */}
              <Text style={{ fontWeight: "bold" }}>
                IR REVALIDATION
                {/* {pl.name} */}
              </Text>

              <Text>TOTAL ATTENDANCE:</Text>

              <Progress
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
                percent={60}
                style={{ position: "relative" }}
              />
            </Row>
          </Header>

          <Table
            className="components-table-demo-nested"
            columns={columns}
            expandable={{ expandedRowRender }}
            dataSource={data}
            style={{ width:"100%" }}
            pagination={false}
          />
        </Row>

        {showAlert ? (
          <Row justify="center" style={{ margin: 10 }}>
            <Alert
              message="The user(s) has been "
              type="success"
              closable
              onClose={() => setShowAlert(false)}
              style={{ width: "100%" }}
            />
          </Row>
        ) : null}
      </div>
    </>
  );
}
