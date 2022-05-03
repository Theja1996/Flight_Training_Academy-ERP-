import React, { useEffect, useState } from "react";
import "../student/StudentsComponent/Students";
import "../student/StudentsComponent/StudentsG";
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
  FaEnvelope,
  FaGraduationCap,
  FaHome,
  FaPencilAlt,
  FaPhone,
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
} from "react-icons/fa";

import { BsImage } from "react-icons/bs";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import Modal from "antd/lib/modal/Modal";
import Classtheory from "./Theory/ClassTheory/Classtheory";
import { get, getAll } from "../utils/APIUtils";
import Syllabus from "./Programs/Syllabus";
import Certificates from "../Profile/Certificates";
import Progress from "../Profile/Progress";
import Documents from "../Profile/Documents";
import Syllabus_cpl_ir_a from "./Programs/ProgramsList/Syllabus_cpl_ir_a";
import Syllabus_fi_a from "./Programs/ProgramsList/Syllabus_fi_a";
import Syllabus_mcaa_ass from "./Programs/ProgramsList/Syllabus_mcaa_ass";
import Syllabus_me_cpl from "./Programs/ProgramsList/Syllabus_me_cpl";
import Syllabus_cpl_ir_renewal from "./Programs/ProgramsList/Syllabus_cpl_ir_renewal";
import Syllabus_cpl_renewal from "./Programs/ProgramsList/Syllabus_cpl_renewal";
import Syllabus_fi_a_bridged from "./Programs/ProgramsList/Syllabus_fi_a_bridged";
import Syllabus_ir_revalidation from "./Programs/ProgramsList/Syllabus_ir_revalidation";
import Syllabus_me from "./Programs/ProgramsList/Syllabus_me";
import Syllabus_me_ir_dgca from "./Programs/ProgramsList/Syllabus_me_ir_dgca";
import ProgressTests from "./Theory/ProgressTests/ProgressTests";
import TheoryReleases from "./Theory/TheoryReleases/TheoryReleases";
import Exams from "./Theory/Exams/Exams";
import Extratheory from "./Theory/ExtraTheory/Extratheory";
import TypeQuestionnaire from "./Theory/TypeQuestionnaire/TypeQuestionnaire";

export default function Profile(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [show, setShow] = React.useState(true);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [normal, setnormal] = useState(true);
  const [bookings, setbookings] = useState(false);
  const [classtheory, setClasstheory] = useState(false);
  const [progressTests, setProgressTests] = useState(false);
  const [theoryReleases, setTheoryReleases] = useState(false);
  const [exams, setExams] = useState(false);
  const [extratheory, setExtratheory] = useState(false);
  const [typeQuestionnaire, setTypeQuestionnaire] = useState(false);
  
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
  const showClasstheory = () => {
    setClasstheory(true);
  };
  const showProgressTests = () => {
    setProgressTests(true);
  };
  const showTheoryReleases = () => {
    setTheoryReleases(true);
  };
  const showExams = () => {
    setExams(true);
  };
  const showExtratheory = () => {
    setExtratheory(true);
  };
  const showstypeQuestionnaire = () => {
    setTypeQuestionnaire(true);
  };
  
  const doNormal = () => {
    setnormal(true);
  };

  const doEmargency = () => {
    setnormal(false);
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
      title: "Instructor",
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

  function handleIncome(data) {
    history.push({
      pathname: "/Income",
      state: { detail: data },
    });
  }
  function handleRawdata_flight(data) {
    history.push({
      pathname: "/RawDataFlightrepot",
      state: { detail: data },
    });
  }

  function handleRawdata_theory(data) {
    history.push({
      pathname: "/RawDataTheoryReport",
      state: { detail: data },
    });
  }

  function handleLogbook(data) {
    history.push({
      pathname: "/Logbook",
      state: { detail: data },
    });
  }

  function handleNewProgramme(data) {
    // history.push("/users/"+ data.key +"/user_programs/new");
    history.push("/Newprogramme/" + userData.key);
  }

  function handleEdit(data) {
    history.push("/user/" + key + "/edit");
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
 

  const programs = (
    <Menu>
      <Button
        style={{
          width: "100%",
          textAlign: "left",
          fontSize: "11px",
          fontWeight: "bold",
          color: "#adacac",
        }}
        type="text"
      >
        Active
      </Button>
      <br></br>
      {masterList
        .filter((v) => userData.programme.includes(v.key))
        .map((pl) => (
          <Tag
            closable
            onClose={log}
            type="text"
            color="processing"
            style={{ width: "100%" }}
          >
            {pl.name}
          </Tag>
        ))}
      <Button
        style={{
          width: "100%",
          textAlign: "left",
          fontSize: "11px",
          fontWeight: "bold",
          color: "#adacac",
        }}
        type="text"
      >
        Completed
      </Button>
      <br></br>
      <Tag
        closable
        onClose={log}
        type="text"
        color="processing"
        style={{ width: "100%" }}
      >
        BAK
      </Tag>
      <br></br>
      <Button
        onClick={() => handleNewProgramme()}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <PlusOutlined style={{ color: "green" }} /> Add new program
      </Button>
      <br></br>
    </Menu>
  );
  const theory = (
    <Menu style={{ borderRadius: "6px" }}>
      <Button
        style={{ width: "100%", textAlign: "left" }}
        type="text"
        onClick={showClasstheory}
      >
        Class theory
      </Button>
      <br></br>
      <Button
        style={{ width: "100%", textAlign: "left" }}
        type="text"
        onClick={showProgressTests}
      >
        Progress tests
      </Button>
      <br></br>
      <Button
        style={{ width: "100%", textAlign: "left" }}
        type="text"
        onClick={showTheoryReleases}
      >
        Theory releases
      </Button>
      <br></br>
      <Button
        style={{ width: "100%", textAlign: "left" }}
        type="text"
        onClick={showExams}
      >
        Exams
      </Button>
      <Divider style={{ marginTop: "2px", marginBottom: "2px" }} />
      <Button
        style={{ width: "100%", textAlign: "left" }}
        type="text"
        onClick={showExtratheory}
      >
        Extra theory
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text" onClick={showstypeQuestionnaire} >
       Type questionnaires
      </Button>
    </Menu>
  );

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
        onClick={() => handleIncome()}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <FaSearch /> Income
      </Button>
      <br></br>
      <Button
        onClick={() => handleRawdata_flight()}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <FaSearch /> Raw data - flight report
      </Button>
      <br></br>
      <Button
        onClick={() => handleRawdata_theory()}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <FaSearch /> Raw data - theory report
      </Button>
      <br></br>
      <Button
        onClick={() => handleLogbook()}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <FaThList /> Logbook
      </Button>
      <br></br>
      <Button
        onClick={showModal}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <FaRegFilePdf /> Report generator
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
        <FaPencilAlt /> Edit user
      </Button>
      <br></br>

      <Button
        onClick={() => handleEditImage()}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <BsImage /> Edit image
      </Button>
      <br></br>
      <Button
        onClick={() => handleRequirements()}
        style={{ width: "100%", textAlign: "left" }}
        type="text"
      >
        <FaRegCopy /> Requirements
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <FaUserLock />
        Block user
      </Button>
      <br></br>
      <Button style={{ width: "100%", textAlign: "left" }} type="text">
        <FaRegEnvelope /> Resend login email
      </Button>
    </Menu>
  );

  // if (loading) {
  //   return "...Loading";
  // }

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
        title={
          userData.callsign +
          "-" +
          userData.user_First_name +
          " " +
          userData.user_Last_name
        }
      >
        <Row justify="center " style={{ marginTop: "15px" }}>
          <h3 style={{ fontWeight: "bold", fontSize: "24px" }}>
            {userData.callsign +
              "-" +
              userData.user_First_name +
              " " +
              userData.user_Last_name}
          </h3>
        </Row>
      </Header>
      <Divider style={{ marginTop: "1px" }} />

      <Row justify="center ">
        <Col span={7}>
          <Row style={{ backgroundColor: "#f0eeee", borderRadius: "5px" }}>
            <Card style={gridStyle}>{/* defaul profile picture */}</Card>
            {normal ? (
              <Col
                style={{
                  width: "67%",
                  backgroundColor: "#f0eeee",
                  textAlign: "left",
                  marginLeft: "2px",
                }}
              >
                <Space direction="vertical">
                  <Row>
                    <Space>
                      <FaPhone />
                      <Link href="tel:{userData.phone}">{userData.phone}</Link>
                    </Space>
                  </Row>
                  <Row>
                    <Space>
                      <FaEnvelope />
                      <Link href="email">{userData.email}</Link>
                    </Space>
                  </Row>
                  <Row>
                    <Space>
                      <FaHome />
                      {userData.address}
                    </Space>
                  </Row>
                  <Row>
                    <Space>
                      <FaTag style={{ color: "#f1c40f" }} />
                      {userData.user_reference}
                    </Space>
                  </Row>
                </Space>
                <p
                  style={{
                    textAlign: "right",
                    marginTop: "55px",
                    fontSize: "11px",
                  }}
                >
                  Last login:
                </p>
              </Col>
            ) : (
              <Col
                style={{
                  width: "67%",
                  backgroundColor: " #f0eeee",
                  textAlign: "left",
                  marginLeft: "2px",
                }}
              >
                <Space direction="vertical">
                  <Row>
                    <Space>
                      <FaUserAlt style={{ color: "#E74C3C" }} />
                      {userData.emergency_first_name}
                      {userData.emergency_last_name}
                    </Space>
                  </Row>
                  <Row>
                    <Space>
                      <FaPhone style={{ color: "#E74C3C" }} />
                      <Link>{userData.emergency_phone}</Link>
                    </Space>
                  </Row>
                  <Row>
                    <Space>
                      <FaEnvelope style={{ color: "#E74C3C" }} />
                      <Link href="email">{userData.emergency_email}</Link>
                    </Space>
                  </Row>
                  <Row>
                    <Space>
                      <FaHome style={{ color: "#E74C3C" }} />
                      {userData.emergency_address1}
                    </Space>
                  </Row>
                </Space>
              </Col>
            )}
          </Row>

          <Row>
            <Button type="ghost" onClick={doNormal}>
              Normal
            </Button>

            <Button type="text" onClick={doEmargency}>
              Emergency
            </Button>
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
        <div className="card-container">
          <Tabs type="card">
            <TabPane
              key="1"
              onClick={() => setViewmod("view")}
              tab={
                <Dropdown trigger={["click"]} overlay={programs}>
                  <Button
                    type="text"
                    style={{ color: "#08c", fontSize: "14px", width: "100%" }}
                  >
                    <Space>
                      Programs <FaCaretDown style={{ color: "#8cccec" }} />
                    </Space>
                  </Button>
                </Dropdown>
              }
            >
              {/* <Row>{viewmod === "view" ? <Syllabus /> : null}</Row> */}
              {/* <Row>{viewmod === "view" ? <Syllabus_cpl_ir_a /> : null}</Row> */}
              {/* <Row>{viewmod === "view" ? <Syllabus_fi_a /> : null}</Row> */}
              {/* <Row>{viewmod === "view" ? <Syllabus_mcaa_ass /> : null}</Row> */}
              {/* <Row>{viewmod === "view" ? <Syllabus_me_cpl /> : null}</Row> */}
              {/* <Row>{viewmod === "view" ? <Syllabus_cpl_ir_renewal /> : null}</Row> */}
              {/* <Row>{viewmod === "view" ? <Syllabus_cpl_renewal /> : null}</Row> */}
              {/* <Row>{viewmod === "view" ? <Syllabus_fi_a_bridged /> : null}</Row> */}
              {/* <Row>{viewmod === "view" ? <Syllabus_ir_revalidation /> : null}</Row> */}
              {/* <Row>{viewmod === "view" ? <Syllabus_me /> : null}</Row> */}
              <Row>{viewmod === "view" ? <Syllabus_me_ir_dgca /> : null}</Row>
            </TabPane>

            <TabPane
              key="2"
              tab={
                <Dropdown trigger={["click"]} overlay={theory}>
                  <Button
                    type="text"
                    style={{ color: "#08c", fontSize: "14px", width: "100%" }}
                  >
                    <Space>
                      Theory <FaCaretDown style={{ color: "#8cccec" }} />
                    </Space>
                  </Button>
                </Dropdown>
              }
            >
              {classtheory ? (
                <Classtheory />
              ) : progressTests ? (
                <ProgressTests />
              ) : theoryReleases ? (
                <TheoryReleases />
              ) : exams ? (
                <Exams />
              ) : extratheory ? (
                <Extratheory />
              ): typeQuestionnaire ? (
                <TypeQuestionnaire />
              ): (
                ""
              )}
            </TabPane>
            <TabPane
              tab={<tab style={{ color: "#08c" }}>Certificates</tab>}
              key="3"
              onClick={() => setViewmod("view")}
            >
              <Row>{viewmod === "view" ? <Certificates /> : null}</Row>
            </TabPane>
            <TabPane
              tab={<tab style={{ color: "#08c" }}>Progress</tab>}
              key="4"
              onClick={() => setViewmod("view")}
            >
              <Row>{viewmod === "view" ? <Progress /> : null}</Row>
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
              ) : (
                ""
              )}
              {cancelbokking ? (
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
      </Row>
    </>
  );
}
