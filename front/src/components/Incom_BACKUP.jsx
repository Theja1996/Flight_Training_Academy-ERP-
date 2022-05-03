import React, { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";
import { FilePdfOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Space, Button, Menu, Dropdown } from "antd";
import { DatePicker } from "antd";
import { Checkbox } from "antd";
import moment from "moment";



function Income() {
  const [size, setSize] = useState(8);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");

  const { RangePicker } = DatePicker;

  const dateFormat = "YYYY/MM/DD";

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

  const pdf = () => (
    <Menu>
      <Menu.Item key="0">
        <Button>
          <FilePdfOutlined />
          PDF..
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="income-body">
    

      <div
        className="date-name"
        style={{ borderStyle: "outset", marginTop: 10, display: "flex" }}
      >
        {localStorage.getItem("currentuser")} {startdate.concat(" - ")}
        {enddate}
      </div>
      <div className="date-report">
        <div
          className="report"
          style={{ display: "flex", gap: 5, marginLeft: 20 }}
        >
          <React.Fragment>
            <Space direction="vertical">
              <DatePicker onChange={onstartdate} />
            </Space>
            -
            <Space direction="vertical">
              <DatePicker onChange={onenddate} />
            </Space>
            <Checkbox onChange={oncheckbox}>Only show not in</Checkbox>
            <Space size={size}>
              <Button
                style={{ borderStyle: "outset", backgroundColor: "grey" }}
              >
                <SearchOutlined />
                Find report
              </Button>
            </Space>
          </React.Fragment>
        </div>
        <div className="export-pdf" style={{ marginRight: 20 }}>
          <React.Fragment>
            <Space size={size}>
              <Button
                style={{ borderStyle: "outset", backgroundColor: "grey" }}
              >
                <CheckOutlined />
                Mark all
              </Button>

              <Button
                type="dashed"
                style={{ borderStyle: "outset", backgroundColor: "grey" }}
              >
                <Dropdown overlay={pdf} trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <DownloadOutlined /> Export as <CaretDownOutlined />
                  </a>
                </Dropdown>
              </Button>
            </Space>
          </React.Fragment>
        </div>
      </div>
    </div>
  );
}
export default Income;
