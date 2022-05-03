import React, { useEffect, useState } from "react";
import StudentsList from "./StudentsList";
import StudentsG from "./StudentsG";
import { Alert, Button, Col, Dropdown, Menu, Row, Select, Space } from "antd";
import {
  BarsOutlined,
  DownloadOutlined,
  DownOutlined,
  PlusOutlined,
  SearchOutlined,
  TableOutlined,
} from "@ant-design/icons";
import {
  FaGraduationCap,
  FaRegFileCode,
  FaRegFileExcel,
  FaRegFilePdf,
} from "react-icons/fa";
import { BiEnvelope, BiLock, BiLockOpen } from "react-icons/bi";
import { addMany, getAll } from "../../utils/APIUtils";
import { useHistory } from "react-router-dom";

const { Option } = Select;

export default function Students() {
  let history = useHistory();
  const [students, setStudents] = useState([]);
  const [studentsByStatus, setStudentsByStatus] = useState([]);
  const [programList, setProgrammeList] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedTablerows, setSelectedTablerows] = useState([]);
  const [status, setstatus] = useState("active");
  const [showAlert, setShowAlert] = useState(false);
  const [viewmod, setViewmod] = useState("list");

  function loadStudent(values) {
    getAll("users").then((sList) => {
      sList.forEach((sl) => {
        try {
          sl.key = sl.key.toString();
        } catch (err) {
          console.log(sl);
          console.log(err);
        }
      });
      setStudents(sList);
      let filteredStudentList = sList.filter((stu) => stu.status === status);
      setStudentsByStatus(filteredStudentList);

      let programmeObject = {};
      filteredStudentList.forEach((s) => {
        if (programmeObject[s.programme]) {
          let studentList = [...programmeObject[s.programme]];
          studentList.push(s);
          programmeObject[s.programme] = studentList;
        } else {
          programmeObject[s.programme] = [s];
        }
      });
      setProgrammeList(programmeObject);
      setLoading(false);
    });
  }

  useEffect(() => {
    loadStudent();
  }, []);

  async function handleSetting(type) {
    let ar = await alert(
      "Are you sure you want to " + type + " the selected user(s)"
    );
    if (!ar) {
      let sl = [...selectedTablerows];
      sl.forEach((s) => {
        s.status = type;
      });
      addMany(sl, "users")
        .then(() => {
          loadStudent();
          setShowAlert(true);
          setSelectedTablerows([]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const menu_setting = (
    <Menu>
      <Button
        onClick={() => handleSetting("active")}
        type="text"
        style={{ width: "100%", textAlign: "left" }}
      >
        Active
      </Button>
      <br></br>
      <Button
        type="text"
        onClick={() => handleSetting("standby")}
        style={{ width: "100%", textAlign: "left" }}
      >
        <Space>
          <FaGraduationCap style={{ fontSize: 18 }} />
          Standby
        </Space>
      </Button>
      <br></br>
      <Button
        onClick={() => handleSetting("completed")}
        type="text"
        style={{ width: "100%", textAlign: "left" }}
      >
        <Space>
          <FaGraduationCap style={{ fontSize: 18 }} />
          Completed
        </Space>
      </Button>
      <br></br>
      <Button
        onClick={() => handleSetting("discontinued")}
        type="text"
        style={{ width: "100%", textAlign: "left" }}
      >
        <Space>
          <FaGraduationCap style={{ fontSize: 18 }} />
          Discontinued
        </Space>
      </Button>
      <br></br>

      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <Space>
          <BiLock style={{ fontSize: 18 }} />
          Block
        </Space>
      </Button>
      <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <Space>
          <BiLockOpen style={{ fontSize: 18 }} />
          Unblock
        </Space>
      </Button>
      <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <Space>
          <BiEnvelope style={{ fontSize: 18 }} />
          Resend login email{" "}
        </Space>
      </Button>
    </Menu>
  );
  const pdf = (
    <Menu>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFilePdf /> PDF..
      </Button>
      <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFileCode /> XML
      </Button>
      <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFileExcel /> CSV (Excel)
      </Button>
    </Menu>
  );

  function handleStatus(value) {
    let filteredStudentList = students.filter((stu) => stu.status === value);
    setStudentsByStatus(filteredStudentList);
    let programmeObject = {};
    filteredStudentList.forEach((s) => {
      if (programmeObject[s.programme]) {
        let studentList = [...programmeObject[s.programme]];
        studentList.push(s);
        programmeObject[s.programme] = studentList;
      } else {
        programmeObject[s.programme] = [s];
      }
    });
    setProgrammeList(programmeObject);
    setstatus(value);
  }
  function handleCreate(data) {
    history.push({
      pathname: "/user/new",
      state: { detail: data },
    });
  }
  return (
    <>
      {loading ? (
        "Loading ..."
      ) : (
        <div style={{ margin: 20 }}>
          <Row>
            <Col span={8}>
              <Space>
                <Button onClick={() => handleCreate()}>
                  <PlusOutlined style={{ color: "green" }} />
                  Create students
                </Button>
                <Select
                  defaultValue="active"
                  style={{ width: 220 }}
                  onChange={handleStatus}
                >
                  <Option value="active">
                    <FaGraduationCap style={{ fontSize: 18 }} />
                    Active students
                  </Option>
                  <Option value="standby">
                    <FaGraduationCap style={{ fontSize: 18 }} />
                    Standby students
                  </Option>
                  <Option value="completed">
                    <FaGraduationCap style={{ fontSize: 18 }} />
                    Completed students
                  </Option>
                  <Option value="discontinued">
                    <FaGraduationCap style={{ fontSize: 18 }} />
                    Discontinued students
                  </Option>
                </Select>
                <div>
                  <Button
                    onClick={() => setViewmod("grid")}
                    icon={<TableOutlined />}
                  />
                </div>
                <Button
                  onClick={() => setViewmod("list")}
                  icon={<BarsOutlined />}
                />
                <Button
                  icon={
                    <a href="/Search">
                      <SearchOutlined />
                    </a>
                  }
                />
                {selectedTablerows.length > 0 ? (
                  <Dropdown overlay={menu_setting} trigger={["click"]}>
                    <Button className="ant-dropdown-link">
                      Settings <DownOutlined />
                    </Button>
                  </Dropdown>
                ) : null}
              </Space>
            </Col>
            <Col span={4} offset={12}>
              <Space>
                <div>
                  <Dropdown overlay={pdf} trigger={["click"]}>
                    <Button>
                      <DownloadOutlined style={{ color: "#000000" }} />
                      Export as <DownOutlined />
                    </Button>
                  </Dropdown>

                  <Button
                    type="text"
                    style={{
                      fontWeight: "bold",
                      fontSize: "17px",
                      pointerEvents: "none",
                    }}
                  >
                    Total:{studentsByStatus.length}
                  </Button>
                </div>
              </Space>
            </Col>
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

          {viewmod === "list" ? (
            <StudentsList
              programList={programList}
              selectedTablerows={selectedTablerows}
              setSelectedTablerows={setSelectedTablerows}
            />
          ) : (
            <StudentsG programList={programList} />
          )}
        </div>
      )}
    </>
  );
}
