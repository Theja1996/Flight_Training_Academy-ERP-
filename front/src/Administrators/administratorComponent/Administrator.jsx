import React, { useEffect, useState } from "react";
  import AdministratorList from "./AdministratorList";
   import AdministratorGrid from "./AdministratorGrid";

import {
  Button,
  Dropdown,
  Table,
  Menu,
  Modal,
  Card,
  Space,
  Divider,
  Row,
  Alert,
  Col,
} from "antd";
import { CheckOutlined, DownOutlined, PlusOutlined } from "@ant-design/icons";
import {
  SearchOutlined,
  TableOutlined,
  BarsOutlined,
  DownloadOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

import { addMany, getAll } from "../../utils/APIUtils";
import {
  FaEnvelope,
  FaLock,
  FaRegFileCode,
  FaRegFileExcel,
  FaRegFilePdf,
  FaUnlock,
  FaUserSlash,
  FaUserTie,
} from "react-icons/fa";

export default function Administrator() {
  const [getAdministratorfdata, setgetAdministratordata] = useState([]);

  const [selectionType, setSelectionType] = useState("checkbox");
  const [selectedrows, setSelectedrows] = useState([]);

  const [status, setstatus] = useState("deactive");
  const [selectedTablerows, setSelectedTablerows] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(true);
  const [viewmod, setViewmod] = useState("list");
  const [studentsByStatus, setStudentsByStatus] = useState([]);
  const [Administratordata, setAdministratordata] = useState([]);

  async function handleSetting(type) {
    let ar = await alert(
      "Are you sure you want to " + type + " the selected user(s)"
    );
    if (!ar) {
      let sl = [...selectedTablerows];
      sl.forEach((s) => {
        s.status = type;
      });
      addMany(sl, "FlightAdministrator")
        .then(() => {
          //    loadStudent();
          setShowAlert(true);
          setSelectedTablerows([]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const menu_settings = (
    <Menu mode="vertical" align="start">
      <Button
        onClick={() => handleSetting("deactive")}
        type="text"
        style={{ width: "100%", textAlign: "left" }}
      >
        <FaUserSlash /> Deactivate
      </Button>
      <br></br>
      <Button
        onClick={() => handleSetting(" block")}
        type="text"
        style={{ width: "100%", textAlign: "left" }}
      >
        <FaLock /> Block
      </Button>
      <br></br>
      <Button
        onClick={() => handleSetting(" unblock")}
        type="text"
        style={{ width: "100%", textAlign: "left" }}
      >
        <FaUnlock /> Unblock
      </Button>
      <br></br>
      <Button
        onClick={() => handleSetting("  resendLoginEmail")}
        type="text"
        style={{ width: "100%", textAlign: "left" }}
      >
        <FaEnvelope /> Resend Login email
      </Button>
      <br></br>
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

  useEffect(() => {
    getAll("FlightAdministrator")
      .then((result) => {
        setAdministratordata(result);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }

  return (
    <>
      <div style={{ margin: 20 }}>
        <Row>
          <Col span={6}>
            <Space>
              <Button href="/CreateAdministrator">
                <PlusOutlined style={{ color: "green" }} />
                Create Administrator
              </Button>
              <Button>
                <FaUserTie /> Deactivated Administrator
              </Button>
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
                <Dropdown overlay={menu_settings} trigger={["click"]}>
                  <Button className="ant-dropdown-link">
                    Settings <DownOutlined />
                  </Button>
                </Dropdown>
              ) : null}
            </Space>
          </Col>
          <Col span={6} offset={12}>
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
                  Total:{Administratordata.length}
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
          <AdministratorList
           
          
          Administratordata={Administratordata}
            selectedTablerows={selectedTablerows}
            setSelectedTablerows={setSelectedTablerows}
          />
        ) : (
          <AdministratorGrid  Administratordata={Administratordata} />
        )}
      </div>
   
    </>
  );
}
