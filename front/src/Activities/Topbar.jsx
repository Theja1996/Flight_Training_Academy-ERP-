import React, { useState } from "react";

import { DownloadOutlined, DownOutlined } from "@ant-design/icons";

import { Space, Button, Switch, Form, DatePicker, Menu, Dropdown } from "antd";
import {
  FaRegFileCode,
  FaRegFileExcel,
  FaRegFilePdf,
  FaSearch,
} from "react-icons/fa";
import { GoDash } from "react-icons/go";

export default function Topbar(props) {
  function onChange(checked) {
    console.log(`switch to ${checked}`);
  }
  const [startdate, setstartdate] = useState("");
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
  return (
    <>
      <Space direction="horizontal">
        <Form.Item>
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <GoDash />
        </Form.Item>
        <Form.Item>
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <Button>
            <FaSearch /> Find report
          </Button>
        </Form.Item>
        <Form.Item>
          <Switch onChange={onChange} />
        </Form.Item>
        <Form.Item style={{ fontWeight: "bold" }}>Include all</Form.Item>
        <Form.Item style={{ marginLeft: "750px" }}>
          <Dropdown overlay={pdf} trigger={["click"]}>
            <Button>
              <DownloadOutlined style={{ color: "#000000" }} />
              Export as <DownOutlined />
            </Button>
          </Dropdown>{" "}
        </Form.Item>
      </Space>
    </>
  );
}
