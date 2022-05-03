import React, { useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";
import { FileExcelOutlined } from "@ant-design/icons";
import { FileTextOutlined } from "@ant-design/icons";

import { Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Space, Button, Menu, Dropdown } from "antd";
import { Table, Tag } from "antd";
import { DatePicker } from "antd";
import { Checkbox } from "antd";
import moment from "moment";

import "../csscomonents/Rawdata.css";


export default  function Rowdata() {
  const [size, setSize] = useState(8);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [tablerecords, settablerecords] = useState(false);

  const onShowtable = () => {
    settablerecords(true);
  };

  const { Column, ColumnGroup } = Table;

  const data = [
    // {
    //   key: "1",
    //   firstName: "John",
    //   lastName: "Brown",
    //   age: 32,
    //   address: "New York No. 1 Lake Park",
    //   tags: ["nice", "developer"],
    // },
    // {
    //   key: "2",
    //   firstName: "Jim",
    //   lastName: "Green",
    //   age: 42,
    //   address: "London No. 1 Lake Park",
    //   tags: ["loser"],
    // },
    // {
    //   key: "3",
    //   firstName: "Joe",
    //   lastName: "Black",
    //   age: 32,
    //   address: "Sidney No. 1 Lake Park",
    //   tags: ["cool", "teacher"],
    // },
  ];

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
          <FileExcelOutlined />
          XML
        </Button>
      </Menu.Item>
      <Menu.Item key="0">
        <Button>
          <FileTextOutlined />
          CSV (Excel)
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
        Flight Report for {localStorage.getItem("currentuser")}
        {startdate.concat(" - ")}
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
            <Space size={size}>
              <Button
                onClick={onShowtable}
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

      {tablerecords ? (
        <div className="search-record">
          <div className="record-table">
            <Table dataSource={data}>
              <ColumnGroup title="Flights">
                <Column
                  title="Flight id"
                  dataIndex="Flight id"
                  key="Flight id"
                />
              </ColumnGroup>
              <ColumnGroup>
                <Column title="Account" dataIndex="Account" key="Account" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Date" dataIndex="Date" key="Date" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Aircraft" dataIndex="Aircraft" key="Aircraft" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Aircraft type"
                  dataIndex="Aircraft type"
                  key="Aircraft type"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="kind of operation"
                  dataIndex="kind of operation"
                  key="kind of operation"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="programe name"
                  dataIndex="programe name"
                  key="programe name"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="PIC" dataIndex="PIC" key="PIC" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="PIC CAA ref"
                  dataIndex="PIC CAA ref"
                  key="PIC CAA ref"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="PIC user ref"
                  dataIndex="PIC user ref"
                  key="PIC user ref"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Instructor"
                  dataIndex="Instructor"
                  key="Instructor"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Instructor CAA ref"
                  dataIndex="Instructor CAA ref"
                  key="Instructor CAA ref"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Instructor user ref"
                  dataIndex="Instructor user ref"
                  key="Instructor user ref"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Student" dataIndex="Student" key="Student" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Student CAA ref"
                  dataIndex="Student CAA ref"
                  key="Student CAA ref"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Student user ref"
                  dataIndex="Student user ref"
                  key="Student user ref"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Renter" dataIndex="Renter" key="Renter" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Renter CAA ref"
                  dataIndex="Renter CAA ref"
                  key="Renter CAA ref"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Renter user ref"
                  dataIndex="Renter user ref"
                  key="Renter user ref"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Crew" dataIndex="Crew" key="Crew" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Crew CAA ref"
                  dataIndex="Crew CAA ref"
                  key="Crew CAA ref"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Crew user ref"
                  dataIndex="Crew user ref"
                  key="Crew user ref"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Customer" dataIndex="Customer" key="Customer" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Departure"
                  dataIndex="Departure"
                  key="Departure"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Arrival" dataIndex="Arrival" key="Arrival" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Off block"
                  dataIndex="Off block"
                  key="Off block"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Takeoff" dataIndex="Takeoff" key="Takeoff" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Landing" dataIndex="Landing" key="Landing" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Onblock" dataIndex="Onblock" key="Onblock" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Tacho start"
                  dataIndex="Tacho start"
                  key="Tacho start"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Tacho finish"
                  dataIndex="Tacho finish"
                  key="Tacho finish"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Block time"
                  dataIndex="Block time"
                  key="Block time"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Airbone time"
                  dataIndex="Airbone time"
                  key="Airbone time"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Techo time"
                  dataIndex="Techo time"
                  key="Techo time"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Fuel coefficient"
                  dataIndex="Fuel coefficient"
                  key="Fuel coefficient"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Fuel" dataIndex="Fuel" key="Fuel" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Flight type"
                  dataIndex="Flight type"
                  key="Flight type"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="VFR" dataIndex="VFR" key="VFR" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="IFR" dataIndex="IFR" key="IFR" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="DAY" dataIndex="DAY" key="DAY" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="NIGHT" dataIndex="NIGHT" key="NIGHT" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="LOCAL" dataIndex="LOCAL" key="LOCAL" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Cross country"
                  dataIndex="Cross country"
                  key="Cross country"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Pilot fling"
                  dataIndex="Pilot fling"
                  key="Pilot fling"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Pilot monitoring"
                  dataIndex="Pilot monitoring"
                  key="Pilot monitoring"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="IF time" dataIndex="IF time" key="IF time" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Asymmmetric time"
                  dataIndex="Asymmmetric time"
                  key="Asymmmetric time"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Full stop"
                  dataIndex="Full stop"
                  key="Full stop"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Touch and go"
                  dataIndex="Touch and go"
                  key="Touch and go"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Approach" dataIndex="Approach" key="Approach" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Go arround"
                  dataIndex="Go arround"
                  key="Go arround"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Lesson status"
                  dataIndex="Lesson status"
                  key="Lesson status"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Booking id"
                  dataIndex="Booking id"
                  key="Booking id"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Comment" dataIndex="Comment" key="Comment" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Income invoice number"
                  dataIndex="Income invoice number"
                  key="Income invoice number"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Expences invoice number"
                  dataIndex="Expences invoice number"
                  key="Expences invoice number"
                />
              </ColumnGroup>
            </Table>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

