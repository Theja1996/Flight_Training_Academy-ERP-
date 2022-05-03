
  
import React, { useState } from "react";
import { CheckOutlined, DownOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import {
  Divider,
  Row,
  Space,
  Button,
  Menu,
  Dropdown,
  DatePicker,
  Checkbox,
  Col,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import { FaRegFilePdf } from "react-icons/fa";




export default function Income(props) {
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");

  function oncheckbox(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  function onstartdate(date, dateString) {
    setstartdate(dateString);
    console.log(date, dateString, startdate);
  }

  function onenddate(date, dateString) {
    setenddate(dateString);
    console.log(date, dateString);
  }

  const pdf = (
    <Menu>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFilePdf /> PDF..
      </Button>
    </Menu>
  );

  return (
    <>
      <Header
        style={{
          backgroundColor: " #ffffff",
          height: 35,
          marginTop: "20px",
        }}
        title={props.firstName}
      >
        <Row justify="center " style={{ marginTop: "15px" }}>
          <Col span={8}>
            <a href="#">
              <h3
                style={{ fontWeight: "bold", fontSize: "24px", color: "#08c" }}
              >
                Afsah - Afsah Shafeeu
              </h3>
            </a>
          </Col>
          <Col span={6}>
            <h3 style={{ fontWeight: "bold", fontSize: "20px" }}>
              {localStorage.getItem("currentuser")} {startdate.concat(" - ")}
              {enddate}
            </h3>
          </Col>
        </Row>
      </Header>
      <Divider style={{ marginTop: "1px" }} />

      <Row justify="space-between" justify="start">
        <Col span={16}>
        <Space size="small"  direction="horizontal">
          <Space direction="vertical">
            <DatePicker onChange={onstartdate} placeholder="Start date" />
          </Space>
          -
          <Space direction="vertical">
            <DatePicker onChange={onenddate} placeholder="End date" />
          </Space>
         
            <Checkbox onChange={oncheckbox}>Only show not invoice</Checkbox>
         
            <Button type="default">
              <SearchOutlined />
              Find report
            </Button>
          </Space>
        </Col>

        <Col>
          <Space>
            <Button type="default">
              <CheckOutlined />
              Mark all
            </Button>
            <Dropdown overlay={pdf} trigger={["click"]}>
              <Button>
                <DownloadOutlined style={{ color: "#000000" }} />
                Export as <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Col>
      </Row>
    </>
  );
}
