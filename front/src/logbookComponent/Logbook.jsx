import React, { useState } from "react";


import { DownloadOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";
import { FileExcelOutlined } from "@ant-design/icons";
import { FileTextOutlined } from "@ant-design/icons";
import { FilePdfOutlined } from "@ant-design/icons";

import { Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Space, Button, Menu, Dropdown } from "antd";
import { Table, Tag } from "antd";
import { DatePicker } from "antd";
import "../logbookComponent/Logbook.css";

export default function Logbookprofile() {
  const [size, setSize] = useState(8);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [tablerecords, settablerecords] = useState(false);

  const onShowtable = () => {
    settablerecords(true);
  };

  const { Column, ColumnGroup } = Table;

  const data = [
    {
      key: "1",
      Date: "Total",
      Departure: "",
      Offblock: "",
      Arrival: "",
      Onblock: "",
      Aircrafttype: "",
      Registration: "",
      Nameofpilotincommand: "",
      Total: "0:00",
      Night: "0:00",
      Singleenginevfr: "0:00",
      Singleengineifr: "0:00",
      Multienginevfr: "0:00",
      Multiengineifr: "0:00",
      Pilotincommand: "0:00",
      Copilot: "0:00",
      Multipilot: "0:00",
      Flightinstructor: "0:00",
      Dual: "0:00",
      IF: "0:00",
      Synthetictraining: "0:00",
      Landingdays: "0:00",
      Landingnight: "0:00",
    },
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
          <FilePdfOutlined />
          PDF..
        </Button>
      </Menu.Item>
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
    <div>
   
      <div className="income-body">
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

        <div className="search-record">
          <div className="record-table">
            <Table style={{ width: 50 }} dataSource={data}>
              <ColumnGroup title="Logbook for">
                <Column title="Date" dataIndex="Date" key="Date" />
              </ColumnGroup>
              <ColumnGroup title={startdate}>
                <Column
                  title="Departure"
                  dataIndex="Departure"
                  key="Departure"
                />
              </ColumnGroup>
              <ColumnGroup title={enddate}>
                {" "}
                <Column title="Off block" dataIndex="Offblock" key="Offblock" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Arrival" dataIndex="Arrival" key="Arrival" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="On block" dataIndex="Onblock" key="Onblock" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Aircraft type"
                  dataIndex="Aircrafttype"
                  key="Aircrafttype"
                />
              </ColumnGroup>

              <ColumnGroup>
                {" "}
                <Column
                  title="Registration"
                  dataIndex="Registration"
                  key="Registration"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Name of pilot in command"
                  dataIndex="Nameofpilotincommand"
                  key="Nameofpilotincommand"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Total" dataIndex="Total" key="Total" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Night" dataIndex="Night" key="Night" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Single engine vfr"
                  dataIndex="Singleenginevfr"
                  key="Singleenginevfr"
                />
              </ColumnGroup>

              <ColumnGroup>
                {" "}
                <Column
                  title="Single engine ifr"
                  dataIndex="Singleengineifr"
                  key="Singleengineifr"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Multi engine vfr"
                  dataIndex="Multienginevfr"
                  key="Multienginevfr"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Multi engine ifr"
                  dataIndex="Multiengineifr"
                  key="Multiengineifr"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Pilot in command"
                  dataIndex="Pilotincommand"
                  key="Pilotincommand"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Co-pilot" dataIndex="Copilot" key="Copilot" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Multi-pilot"
                  dataIndex="Multipilot"
                  key="Multipilot"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Flight instructor"
                  dataIndex="Flightinstructor"
                  key="Flightinstructor"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="Dual" dataIndex="Dual" key="Dual" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column title="IF" dataIndex="IF" key="IF" />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Synthetic training"
                  dataIndex="Synthetictraining"
                  key="Synthetictraining"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Landing days"
                  dataIndex="Landingdays"
                  key="Landingdays"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Landing night"
                  dataIndex="Landingnight"
                  key="Landingnight"
                />
              </ColumnGroup>
              <ColumnGroup>
                {" "}
                <Column
                  title="Remarks and endorsements"
                  dataIndex="Remarks and endorsements"
                  key="Remarks and endorsements"
                />
              </ColumnGroup>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
