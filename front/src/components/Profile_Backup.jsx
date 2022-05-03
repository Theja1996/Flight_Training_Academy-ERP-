import React, { useState } from "react";
import "../csscomonents/Profile.css";
import "../student/StudentsComponent/Students"
import "../student/StudentsComponent/StudentsG"
import { Collapse } from "antd";
import { Menu, Dropdown, Input } from "antd";
import { Select } from "antd";
import Logo from "../assets/Picture2.png";
import {
  CalendarOutlined,
  CheckOutlined,
  DownOutlined,
  ScanOutlined,
  CopyOutlined,
  MinusOutlined,
  WarningOutlined,
  MailOutlined,
  UserOutlined,
  RedoOutlined,
  EditOutlined,
  FileImageOutlined,
  LogoutOutlined,
  PhoneOutlined,
  SearchOutlined,
  SyncOutlined,
  HomeOutlined,
  FileTextOutlined,
  QuestionOutlined,
  LockOutlined,
  UnorderedListOutlined,
  PlusOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { Card } from "antd";
import { Space, Slider, Button } from "antd";
import { Table, Tag } from "antd";
import { Badge } from "antd";
import { useHistory } from "react-router-dom";
import Newprogramme from "./Addnewprgramme";

import { Upload, message } from "antd";

import reqwest from "reqwest";


const folderdata = [];

function Profile(props) {
  const { fileList, setfileList } = useState([]);
  const { uploading, setuploading } = useState(false);

  const handleUpload = () => {
    const { fileList } = fileList;
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });

    setuploading({
      uploading: true,
    });

    reqwest({
      url: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
      method: "post",
      processData: false,
      data: formData,
      success: () => {
        setfileList(fileList);
        setuploading(false);

        message.success("upload successfully.");
      },
      error: () => {
        setuploading(false);
        message.error("upload failed.");
      },
    });
  };

  const propss = {
    onRemove: (file) => {
      setfileList((fileList) => {
        const index = fileList.indexOf(file);
        const newFileList = fileList.slice();
        newFileList.splice(index, 1);
        return {
          fileList: newFileList,
        };
      });
    },
    beforeUpload: (file) => {
      setfileList([...fileList, file]);
      // setfileList((fileList) => ({
      //   fileList: [...fileList, file],
      // }));
      return false;
    },
    fileList,
  };
  const { Panel } = Collapse;
  const { Column, ColumnGroup } = Table;
  const { Option } = Select;
  const [size, setSize] = useState(8);
  const [normal, setnormal] = useState(true);
  const [prograss, setprograss] = useState(false);
  const [documents, setdocuments] = useState(false);
  const [certificates, setcertificates] = useState(false);
  const [bookings, setbookings] = useState(false);
  const [cancelbokking, setcancelbooking] = useState(false);
  const [createfolder, setcreatefolder] = useState(false);
  const [createdocument, setcreatedocument] = useState(false);
  const [foldername, setfoldername] = useState("");

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const history = useHistory();

  const showCancelbooking = () => {
    setcancelbooking(true);
    setprograss(false);
    setdocuments(false);
    setbookings(false);
    setcertificates(false);
    setcreatefolder(false);
    setcreatedocument(false);
  };

  const showBokking = () => {
    setbookings(true);
    setcertificates(false);
    setdocuments(false);
    setprograss(false);
    setcancelbooking(false);
    setcreatefolder(false);
    setcreatedocument(false);
  };

  const showCertificates = () => {
    setcertificates(true);
    setprograss(false);
    setdocuments(false);
    setbookings(false);
    setcancelbooking(false);
    setcreatefolder(false);
    setcreatedocument(false);
  };

  const showDocuments = () => {
    setdocuments(true);
    setprograss(false);
    setcertificates(false);
    setbookings(false);
    setcancelbooking(false);
    setcreatefolder(false);
    setcreatedocument(false);
  };

  const showPrograss = () => {
    setprograss(true);
    setdocuments(false);
    setcertificates(false);
    setbookings(false);
    setcancelbooking(false);
    setcreatefolder(false);
    setcreatedocument(false);
  };

  const doFolder = () => {
    setcreatefolder(true);
    setcreatedocument(false);
    setprograss(false);
    setdocuments(false);
    setcertificates(false);
    setbookings(false);
    setcancelbooking(false);
  };

  const doDocument = () => {
    setcreatedocument(true);
    setcreatefolder(false);
    setprograss(false);
    setdocuments(false);
    setcertificates(false);
    setbookings(false);
    setcancelbooking(false);
  };

  const dofolder = () => {
    if (foldername !== "") {
      const obj = {
        key: folderdata.length,
        firstName: (
          <>
            <i className="fas fa-folder-open"></i> {foldername}
          </>
        ),
        lastName: foldername && new Date().toString().slice(0, 24),
        icon: <i className="fas fa-ellipsis-v"></i>,
      };
      folderdata.push(obj);

      setcreatefolder(false);
      setdocuments(true);
    } else {
      alert("do a specific folder name");
    }
  };

  const foldermodify = () => (
    <div>
      <p>
        <i class="fas fa-bezier-curve"></i>
      </p>
      <p>
        <i class="fas fa-bezier-curve"></i>
      </p>
      <p>
        <i class="fas fa-pencil-alt"></i>
      </p>
      <p>
        <i class="fas fa-trash-alt"></i>
      </p>
    </div>
  );

  const doNormal = () => {
    setnormal(true);
  };

  const doEmargency = () => {
    setnormal(false);
  };

  const profilebooking = () => (
    <div style={{ marginLeft: 5 }}>
      <Menu>
        <Menu.Item key="0">
          <a onClick={showBokking}>
            <CalendarOutlined />
            Booking
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a onClick={showCancelbooking}>
            <ScanOutlined />
            Booking cancel
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );

  const profilereport = () => (
    <div style={{ marginLeft: 5 }}>
      <Menu>
        <Menu.Item key="0">
          <a href="/Income">
            <SearchOutlined />
            Income
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="/Rowdatafightreport">
            <SearchOutlined />
            Raw data-flight report
          </a>
        </Menu.Item>
        <Menu.Item key="0">
          <a href="/Logbook">
            <UnorderedListOutlined />
            Logbook
          </a>
        </Menu.Item>
        <Menu.Item key="0">
          <a href="">
            <SyncOutlined />
            Sync to Dropbox
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );

  const profilesetting = () => (
    <div style={{ marginLeft: 5 }}>
      <Menu>
        <Menu.Item key="0">
          <a href="/EditUser">
            <EditOutlined />
            Edit user
          </a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="/Editimage">
            <FileImageOutlined />
            Edit image
          </a>
        </Menu.Item>
        <Menu.Item key="0">
          <a href="/Editrequirments">
            <CopyOutlined />
            Requirments
          </a>
        </Menu.Item>
        <Menu.Item key="0">
          <a href="">
            <MinusOutlined />
            Deactive
          </a>
        </Menu.Item>
        <Menu.Item key="0">
          <a href="">
            <WarningOutlined />
            Block user
          </a>
        </Menu.Item>
        <Menu.Item key="0">
          <a href="/AdminPage">
            <WarningOutlined />
            Add Users
          </a>
        </Menu.Item>
      </Menu>
    </div>
  );

  function doLogout() {
    history.push("/Login");
  }

  const profileProgramms = () => (
    <Menu>
      <Menu.Item key="0">
        <Newprogramme />
        {/* <button className="addpost">
          <PlusOutlined />
          Add New Programms
        </button> */}
      </Menu.Item>
    </Menu>
  );

  const menu = () => (
    <Menu>
      <Menu.Item key="0">
        <a href="">Students</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="">class</a>
      </Menu.Item>

      <Menu.Item key="2">
        <a href="">instructers</a>
      </Menu.Item>
      <Menu.Item key="3">
        <a href="">crew</a>
      </Menu.Item>
      <Menu.Item key="4">
        <a href="">Staff</a>
      </Menu.Item>
      <Menu.Item key="5">
        <a href="">Administrators</a>
      </Menu.Item>
      <Menu.Item key="6">
        <a href="">Renders</a>
      </Menu.Item>
      <Menu.Item key="7">
        <a href="">Guests</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="sub-body">
  

      <div className="profile-body">
        <div className="body0"></div>
        <div className="body00"></div>
        <div className="profile-name">
          <h2>{localStorage.getItem("currentuser")}</h2>
        </div>
        <div className="profile-card">
          {normal ? (
            <div className="card-div1">
              <Card
                hoverable
                // style={{ width: 150 }}
                cover={
                  <img
                    style={{ height: 80 }}
                    src={Logo}
                    // src="https://flightlogger-production-eu.s3.eu-west-1.amazonaws.com/Account/93/logo/111870/small/Screen_Shot_2017-12-18_at_10.09.24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJMTPZPBV3SZQYZSA%2F20200902%2Feu-west-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20200902T041635Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=24987a1e6fadb833e4b31bf4ea5650fb4ff0811fcb8ff59a16a2beb09bd75d97"
                    alt="react"
                  />
                }
              ></Card>
              <div>
                <p>
                  <PhoneOutlined />{" "}
                </p>
                <p>
                  <MailOutlined />:<a href=""> rifli@live.com</a>
                </p>
                <p>
                  <HomeOutlined />
                </p>
                <p
                  style={{
                    textAlign: "right",
                  }}
                >
                  last Login
                </p>
              </div>
            </div>
          ) : (
            <div className="card-div2">
              <Card
                hoverable
                style={{ width: 200 }}
                cover={
                  <img
                    src="https://flightlogger-production-eu.s3.eu-west-1.amazonaws.com/Account/93/logo/111870/small/Screen_Shot_2017-12-18_at_10.09.24.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&amp;X-Amz-Credential=AKIAJMTPZPBV3SZQYZSA%2F20200902%2Feu-west-1%2Fs3%2Faws4_request&amp;X-Amz-Date=20200902T041635Z&amp;X-Amz-Expires=3600&amp;X-Amz-SignedHeaders=host&amp;X-Amz-Signature=24987a1e6fadb833e4b31bf4ea5650fb4ff0811fcb8ff59a16a2beb09bd75d97"
                    alt="react"
                  />
                }
              ></Card>
              <div>
                <p>
                  <UserOutlined />
                </p>
                <p>
                  <PhoneOutlined />{" "}
                </p>
                <p>
                  <MailOutlined />:<a href=""> rifli@live.com</a>
                </p>
                <p>
                  <HomeOutlined />
                </p>
              </div>
            </div>
          )}

          <div className="card-button" style={{ marginTop: 5, marginLeft: 10 }}>
            <React.Fragment>
              <Space size={size}>
                <Button type="primary" onClick={doNormal}>
                  Normal
                </Button>

                <Button type="dashed" onClick={doEmargency}>
                  Emergency
                </Button>
              </Space>
            </React.Fragment>
          </div>
        </div>
        <div className="profile-detaile">
          <div className="title" style={{ backgroundColor: "grey" }}>
            <ul>
              <li>
                <Dropdown overlay={profileProgramms} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Programms <i class="fas fa-caret-down"></i>
                  </a>
                </Dropdown>
              </li>

              <li>
                <a onClick={showCertificates}>certificates</a>
              </li>
              <li>
                <a onClick={showPrograss}>prograss</a>
              </li>
              <li>
                <a onClick={showDocuments}>Documents</a>
              </li>
              <li>
                <Dropdown overlay={profilebooking} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Booking <i class="fas fa-caret-down"></i>
                  </a>
                </Dropdown>
              </li>
              <li>
                <Dropdown overlay={profilereport} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Reports <i class="fas fa-caret-down"></i>
                  </a>
                </Dropdown>
              </li>
              <li>
                {" "}
                <Dropdown overlay={profilesetting} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Setting <i class="fas fa-caret-down"></i>
                  </a>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>

        {prograss ? (
          <div className="prograss-detaile">
            <h1>Prograss</h1>
            <div className="prograss-dropdown">
              <Select
                defaultValue="Choice a Programme"
                style={{ width: 500 }}
                onChange={handleChange}
              >
                <Option value="nomaches">No matches found</Option>
              </Select>
            </div>
          </div>
        ) : (
          ""
        )}

        {documents ? (
          <div className="prograss-documantation">
            <div>
              <Table dataSource={folderdata}>
                <ColumnGroup title="Documents">
                  <Column title="Name" dataIndex="firstName" key="firstName" />
                  <Column
                    title="Modified"
                    dataIndex="lastName"
                    key="lastName"
                  />

                  <Dropdown overlay={menu} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <Column
                        title=""
                        dataIndex="icon"
                        key="icon"
                        onClick={foldermodify}
                      ></Column>
                      Click me <DownOutlined />
                    </a>
                  </Dropdown>
                </ColumnGroup>
              </Table>
              {/* <h1>Documents</h1>
              <div className="documents-title">
                <div className="documents-name">
                  <h3>Name</h3>
                </div>
                <div className="documents-modified">
                  <h3>Modified</h3>
                </div>
              </div>
              <div className="documents-post">
                There are no documents yet {foldername}
              </div> */}
            </div>
            <div className="card-button">
              <React.Fragment>
                <Space size={size}>
                  <Button type="" onClick={doFolder}>
                    <PlusOutlined /> New Folder
                  </Button>

                  <Button type="dashed" onClick={doDocument}>
                    <PlusOutlined /> New Documents
                  </Button>
                </Space>
              </React.Fragment>
            </div>
          </div>
        ) : (
          ""
        )}

        {certificates ? (
          <div className="prograss-certificate">
            <div className="certificate1">
              <Table>
                <ColumnGroup title="Requiring Approvel">
                  <Column title="Name" dataIndex="Name" key="Name" />
                  <Column title="Expiry" dataIndex="Expiry" key="Expiry" />
                  <Column
                    title="Uploard By"
                    dataIndex="UploardBy"
                    key="UploardBy"
                  />
                </ColumnGroup>
              </Table>
            </div>
            <div className="certificate2">
              <Table>
                <ColumnGroup title="Current certificate">
                  <Column title="Name" dataIndex="Name" key="Name" />
                  <Column title="Expiry" dataIndex="Expiry" key="Expiry" />
                  <Column
                    title="Uploard By"
                    dataIndex="UploardBy"
                    key="UploardBy"
                  />
                  <Column
                    title="Approved By"
                    dataIndex="ApprovedBy"
                    key="ApprovedBy"
                  />
                </ColumnGroup>
              </Table>
            </div>

            <div className="certificate3">
              <Table>
                <ColumnGroup title="Previous certificate">
                  <Column title="Name" dataIndex="Name" key="Name" />
                  <Column title="Expiry" dataIndex="Expiry" key="Expiry" />
                  <Column
                    title="Uploard By"
                    dataIndex="UploardBy"
                    key="UploardBy"
                  />
                  <Column
                    title="Approved By"
                    dataIndex="ApprovedBy"
                    key="ApprovedBy"
                  />
                  <Column title="Reason" dataIndex="Reason" key="Reason" />
                </ColumnGroup>
              </Table>
              {/* <h2>Previous certificate</h2>
              <div className="approvel1">
                <h4>Name</h4>
              </div>
              <div className="approvel2">
                <h4>Expiry</h4>
              </div>
              <div className="approvel4">
                <h4>Uploard By</h4>
              </div>
              <div className="approvel5">
                <h4>Approved By</h4>
              </div>
              <div className="approvel6">
                <h4>Reason</h4>
              </div>
              <div className="approvel-post1">
                There are no previous certificate{" "}
              </div> */}
            </div>
          </div>
        ) : (
          ""
        )}

        {bookings ? (
          <div className="my-booking">
            <Table>
              <ColumnGroup title="My Booking"></ColumnGroup>
            </Table>
          </div>
        ) : (
          ""
        )}

        {cancelbokking ? (
          <div className="certificate3">
            <Table>
              <ColumnGroup title="Cancel Booking">
                <Column title="Date" dataIndex="firstName" key="firstName" />
                <Column
                  title="Instructor"
                  dataIndex="lastName"
                  key="lastName"
                />
                <Column title="Type" dataIndex="lastName" key="lastName" />
                <Column title="Reason" dataIndex="lastName" key="lastName" />
                <Column title="Comment" dataIndex="lastName" key="lastName" />
              </ColumnGroup>
            </Table>
            {/* <h2>Cancel Booking</h2>
            <div className="approvel1">
              <h4>Date</h4>
            </div>
            <div className="approvel2">
              <h4>Instructor</h4>
            </div>
            <div className="approvel4">
              <h4>Type </h4>
            </div>
            <div className="approvel5">
              <h4>Reason</h4>
            </div>
            <div className="approvel6">
              <h4>Comment</h4>
            </div>
            <div className="approvel-post1">No cancelled bokking</div> */}
          </div>
        ) : (
          ""
        )}

        {createdocument ? (
          <div className="document-create">
            <a onClick={showDocuments}>
              {" "}
              <h3 style={{ borderStyle: "outset", display: "flex" }}>
                Documents/
              </h3>
            </a>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <label htmlFor="">
                Name
                <Input
                  style={{ width: 400, marginLeft: 3, borderStyle: "outset" }}
                />
              </label>
            </div>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <table>
                <tr>
                  <td>
                    <React.Fragment>
                      <Upload {...propss}>
                        <Button icon={<UploadOutlined />}>Select File</Button>
                      </Upload>
                      {/* <Button
                        type="primary"
                        onClick={handleUpload}
                        loading={uploading}
                        style={{ marginTop: 16 }}
                      >
                        {uploading ? "Uploading" : ""}
                      </Button> */}
                    </React.Fragment>
                  </td>
                  <td></td>
                  <td>
                    <h2 style={{ borderStyle: "dashed" }}>drop here</h2>
                  </td>
                </tr>
              </table>
            </div>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <button type="primary">
                <CheckOutlined />
                create document
              </button>
            </div>
          </div>
        ) : (
          ""
        )}

        {createfolder ? (
          <div className="folder-create">
            <a onClick={showDocuments}>
              {" "}
              <h3 style={{ borderStyle: "outset", display: "flex" }}>
                Documents/
              </h3>
            </a>
            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <label htmlFor="">
                Name
                <Input
                  value={foldername}
                  onChange={(f) => setfoldername(f.target.value)}
                  style={{ width: 400, marginLeft: 3, borderStyle: "outset" }}
                />
              </label>
            </div>

            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <button type="primary" onClick={dofolder}>
                <CheckOutlined />
                Create Folder
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* 
        <Table dataSource={data}>
          <ColumnGroup title="Documents">
            <Column title="Name" dataIndex="firstName" key="firstName" />
            <Column title="Modified" dataIndex="lastName" key="lastName" />
          </ColumnGroup>
        </Table> */}
      </div>
    </div>
  );
}

export default Profile;
