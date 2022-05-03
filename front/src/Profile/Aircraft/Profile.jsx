import React, { useEffect, useState } from "react";
//import "../student/StudentsComponent/Students";
//import "../student/StudentsComponent/StudentsG";
import {
  Col,
  Collapse,
  Row,
  Menu,
  Card,
  Space,
  Button,
  Table,
  Tag,
  Badge,
  Divider,
  Tabs,
  Dropdown,
  Form,
  Checkbox,
  Select,
} from "antd";

import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";

import {
  FaCaretDown,
  FaTachometerAlt,
  FaGraduationCap,
  FaWrench,
  FaPencilAlt,
  FaPhone,
  FaPlane,
  FaRegCalendarMinus,
  FaRegCopy,
  FaRegEnvelope,
  FaRegFilePdf,
  FaRegMinusSquare,
  FaSearch,
  FaTag,
  FaThList,
  FaUserAlt,
  FaUserLock,
  FaGasPump,
  FaRoad,
} from "react-icons/fa";

import { BsImage } from "react-icons/bs";
import { ImLocation } from "react-icons/im";
import { useHistory, useLocation, useParams } from "react-router-dom";
import Modal from "antd/lib/modal/Modal";

import Documents from "../../Profile/Aircraft/Documents";
import Maintenance from "../../Profile/Aircraft/Maintenance";

import { get, getAll } from "../../utils/APIUtils";
import { MdTimer } from "react-icons/md";


export default function ProfileAircraft(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [show, setShow] = React.useState(true);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [bookings, setbookings] = useState(false);
  const [cancelbokking, setcancelbooking] = useState(false);
  const [loadingBtn, setLoadingBtn] = useState(false);
  const [masterList, setMasterList] = useState([]);
  const [viewmod, setViewmod] = useState("view");

  let { key } = useParams();
  const { TabPane } = Tabs;
  const { Panel } = Collapse;
  const { Option, OptGroup } = Select;
  const history = useHistory();

  useEffect(() => {
    get("Aircraft", key)
      .then((d) => {
        setUserData(d);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    getAll("Programs")
      .then((result) => setMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
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

  function log(e) {
    console.log(e);
  }

  const showCancelbooking = () => {
    setcancelbooking(true);
  };

  const showBokking = () => {
    setbookings(true);
  };

  const gridStyle = {
    width: "140px",
    textAlign: "center",
    background:
      "url(https://media-exp1.licdn.com/dms/image/C4D0BAQFvYxp0IqMV9A/company-logo_200_200/0/1519952520890?e=2159024400&v=beta&t=jNBNgJd3x3Y6X4pgToJzFOAFq3UGU7ykY3E08jtdedQ)",
    color: "white",
    margin: "2px",
    position: "relative",
    display: " block",
    lineHeight: 1,
    height: "180px",
    objectFit: "cover",
    verticalAlign: "top",
    border: "true",
    backgroundColor: "#fff",
  };

  const columns_Cancelled_bookings = [
    {
      title: " Date",
      dataIndex: " date",
    },
    {
      title: "Instructor/Crew/Renter",
      dataIndex: "instructor",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Reason",
      dataIndex: "reason",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
  ];

  function handleAircraftReport(data) {
    history.push({
        pathname: "/planess/" + key + "/aircraft_report/",
        state: { detail: data },
      });
  }
  
 
  function handleEdit(data) {
    history.push("/plane/" + key + "/edit");
  }
  function handleEditImage(data) {
    history.push("/user/" + key + "/avatar/new");
  }
  function handleRequirements(data) {
    history.push("/user/" + key + "/certificate/edit");
  }

  function handleAddCertificate(data) {
    history.push({
      pathname: "/AddCertificate",
      state: { detail: data },
    });
  }

  const booking = (
    <Menu>
      <Button
        style={{ width: "100%", textAlign: "left" }}
        type="text"
        onClick={showBokking}
      >
        <FaRegCalendarMinus /> Bookings
      </Button>
      <br></br>
      <Button
        style={{ width: "100%", textAlign: "left" }}
        type="text"
        onClick={showCancelbooking}
      >
        <FaRegMinusSquare /> Cancelled bookings
      </Button>
    </Menu>
  );

  const reports = (
    <Menu>
      <Button
        onClick={() => handleAircraftReport()}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <FaSearch /> Aircraft Report
      </Button>
    </Menu>
  );

  const settings = (
    <Menu>
      <Button
        onClick={(data) => handleEdit(data)}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <FaPencilAlt /> Edit Aircraft
      </Button>
      <br></br>

      <Button
        onClick={() => handleEditImage()}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <BsImage /> Update image
      </Button>
      <br></br>
      <Button
        onClick={() => handleRequirements()}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <FaWrench /> Requirements
      </Button>
      
    </Menu>
  );

  if (loading) {
    return "...Loading";
  }

  return (
    <>
      <Row>{/* the program have been added */}</Row>

      <Modal
        width={600}
        title="Report generator"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form>
          <Space direction="vertical">
            <Checkbox>Program report</Checkbox>

            <Form.Item
              name="Course "
              label="Course"
              style={{ marginLeft: "80px" }}
            >
              <Select defaultValue="CPL(IR)" style={{ width: 200 }}>
                <OptGroup label="All" />
                <OptGroup label="Active">
                  <Option value="cpl">CPL(IR)</Option>
                </OptGroup>
                <OptGroup label="Completed">
                  <Option value="bak">BAK</Option>
                </OptGroup>
              </Select>
            </Form.Item>

            <Form.Item
              name="include "
              label="Include"
              style={{ marginLeft: "80px" }}
            >
              <Space direction="vertical">
                Please select at least one <Checkbox>Program folder</Checkbox>
                <Checkbox>Flight time</Checkbox>
              </Space>
            </Form.Item>
          </Space>

          <Space direction="vertical">
            <Checkbox>Theory report</Checkbox>
            <Form.Item
              name="Course "
              label="Course"
              style={{ marginLeft: "80px" }}
            >
              <Select defaultValue="All" style={{ width: 200 }}>
                <Option value="cpl">CPL(IR)</Option>

                <Option value="bak">BAK</Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="include "
              label="Include"
              style={{ marginLeft: "80px" }}
            >
              <Space direction="vertical">
                Please select at least one{" "}
                <Checkbox>
                  Class theory, Progress tests, Theory releases, Exams
                </Checkbox>{" "}
                <Checkbox>Extra theory</Checkbox>
                <Checkbox>Type questionnairs</Checkbox>
              </Space>
            </Form.Item>

            <Button
              loading={loadingBtn}
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                borderRadius: "4px",
              }}
              htmlType="submit"
            >
              <CheckOutlined /> Generate
            </Button>
          </Space>
        </Form>
      </Modal>

      <Header
        style={{
          width: "55%",
          backgroundColor: " #ffffff",
          height: 35,
          marginTop: "20px",
        }}
        title={userData.callSign}
      >
        <Row justify="center " style={{ marginTop: "15px" }}>
          <h3 style={{ fontWeight: "bold", fontSize: "24px" }}>
            {userData.callSign}
          </h3>
        </Row>
      </Header>
      <Divider style={{ marginTop: "1px" }} />

      <Row justify="center ">
        <Col span={6}>
          <Row style={{ backgroundColor: "#f0eeee", borderRadius: "5px" }}>
            <Card style={gridStyle}>{/* defaul profile picture */}</Card>

            <Col
              style={{
                width: "57%",
                backgroundColor: "#f0eeee",
                textAlign: "left",
                marginLeft: "2px",
              }}
            >
              <Space direction="vertical">
                <Row>
                  <Space>
                    <FaPlane />
                    {userData.callSign}
                  </Space>
                </Row>
                <Row>
                  <Space>
                    <FaGasPump />
                    {userData.email}
                  </Space>
                </Row>
                <Row>
                  <Space>
                    <FaTachometerAlt />
                    {userData.address}
                  </Space>
                </Row>
                <Row>
                  <Space>
                    <MdTimer />
                    {userData.user_reference}
                  </Space>
                </Row>
                <Row>
                  <Space>
                    <FaRoad />
                    {userData.user_reference}
                  </Space>
                </Row>
                <Row>
                  <Space>
                    <ImLocation />
                    {userData.home}
                  </Space>
                </Row>
              </Space>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
          <Collapse style={{ marginLeft: "20px" }}>
            <Panel
              header={
                <header
                  style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    fontSize: "18px",
                    marginTop: -5,
                  }}
                >
                  Certificate warnings
                  <Badge
                    style={{
                      marginLeft: "380px",
                      marginTop: -40,
                      backgroundColor: "gray",
                    }}
                    count={show ? 25 : 0}
                  />
                </header>
              }
              //  header="Certificate warnings"
              key="1"
              style={{
                borderRadius: "4px",
                backgroundColor: " #E6E6E6",
                //  border: " #ccc 1px solid",
                backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
                height: "40px",
              }}
            >
              <div
                style={{
                  backgroundColor: " #f5cfd8",
                  textAlign: "left",
                  borderRadius: "4px",
                  width: "100%",
                }}
              >
                <Space direction="horizontal">
                  <Col>
                    <p style={{ fontSize: "14px", fontWeight: "bold" }}>
                      Airport Pass
                    </p>
                    <p style={{ fontSize: "14px" }}>Expired:</p>
                  </Col>
                  <Col
                    style={{
                      textAlign: "right",
                      marginLeft: "300px",
                      marginTop: "5px",
                    }}
                  >
                    <Space direction="vertical">
                      <Button
                        size="small"
                        style={{ borderRadius: "3px" }}
                        onClick={() => handleAddCertificate()}
                      >
                        <PlusOutlined /> Add
                      </Button>
                      <FaGraduationCap />
                    </Space>
                  </Col>
                </Space>
              </div>
            </Panel>
          </Collapse>
        </Col>
      </Row>
      <br></br>
      <Row justify="center">
        <Col span={14}>
          <div className="card-container">
            <Tabs type="card">
              <TabPane
                tab={<tab style={{ color: "#08c" }}>Maintenance</tab>}
                key="4"
                onClick={() => setViewmod("view")}
              >
                <Row>{viewmod === "view" ? <Maintenance /> : null}</Row>
              </TabPane>

              <TabPane
                tab={<tab style={{ color: "#08c" }}>Documents</tab>}
                key="5"
                onClick={() => setViewmod("view")}
              >
                <Row>{viewmod === "view" ? <Documents /> : null}</Row>
              </TabPane>
              <TabPane
                key="6"
                tab={
                  <Dropdown trigger={["click"]} overlay={booking}>
                    <Button
                      type="text"
                      style={{ color: "#08c", fontSize: "14px", width: "100%" }}
                    >
                      <Space>
                        Booking <FaCaretDown style={{ color: "#8cccec" }} />
                      </Space>
                    </Button>
                  </Dropdown>
                }
              >
                {bookings ? (
                  <>
                    <Collapse style={{ width: "50%" }}>
                      <Panel
                        header={
                          <header
                            style={{
                              fontWeight: "bold",
                              textAlign: "left",
                              fontSize: "18px",
                              marginTop: -5,
                            }}
                          >
                            My bookings
                          </header>
                        }
                        //  header="Certificate warnings"
                        key="1"
                        style={{
                          borderRadius: "4px",
                          backgroundColor: " #E6E6E6",
                          //  border: " #ccc 1px solid",
                          backgroundImage:
                            "linear-gradient(white, white 25%, #e6e6e6)",
                          height: "40px",
                        }}
                      >
                        <p>There are no booking yet</p>
                      </Panel>
                    </Collapse>
                  </>
                ) : cancelbokking ? (
                  <Table
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
                        }}
                      >
                        <Row
                          justify="space-between "
                          style={{ marginTop: 5, width: "100%" }}
                        >
                          <h3 style={{ fontWeight: "bold" }}>
                            Cancelled bookings
                          </h3>
                        </Row>
                      </Header>
                    )}
                    columns={columns_Cancelled_bookings}
                    size="small"
                  />
                ) : (
                  ""
                )}
              </TabPane>
              <TabPane
                key="7"
                tab={
                  <Dropdown trigger={["click"]} overlay={reports}>
                    <Button
                      type="text"
                      style={{ color: "#08c", fontSize: "14px", width: "100%" }}
                    >
                      <Space>
                        Reports <FaCaretDown style={{ color: "#8cccec" }} />
                      </Space>
                    </Button>
                  </Dropdown>
                }
              />

              <TabPane
                key="8"
                tab={
                  <Dropdown trigger={["click"]} overlay={settings}>
                    <Button
                      type="text"
                      style={{ color: "#08c", fontSize: "14px", width: "100%" }}
                    >
                      <Space>
                        Settings <FaCaretDown style={{ color: "#8cccec" }} />
                      </Space>
                    </Button>
                  </Dropdown>
                }
              >
                dfgjhrfffffffffffffff
              </TabPane>
            </Tabs>
          </div>
        </Col>
      </Row>
    </>
  );
}
