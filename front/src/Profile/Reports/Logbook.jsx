import React, { useState } from "react";
import { CheckOutlined, DownOutlined, PlusOutlined } from "@ant-design/icons";
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
  Radio,
  Table,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import { FaRegFileCode, FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";

export default function Logbook(props) {
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [tablerecords, settablerecords] = useState(false);
  const [name, setname] = useState("");
  const [loading, setLoading] = useState(false);

  const onShowtable = () => {
    settablerecords(true);
  };

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

  const columns_entry = [
    {
      title: "Key",
      dataIndex: " key",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Departure",
      dataIndex: "departure",
    },
    {
      title: "Off block",
      dataIndex: "offblock",
    },
    {
      title: "Arrival",
      dataIndex: "arrival",
    },

    {
      title: "On block",
      dataIndex: "onblock",
    },
    {
      title: "Aircraf ttype",
      dataIndex: "aircrafttype",
    },
    {
      title: "Registration",
      dataIndex: "registration",
    },
    {
      title: "Name of pilotin command",
      dataIndex: "nameofpilotincommand",
    },
    {
      title: "Total",
      dataIndex: "total",
    },

    {
      title: "Night",
      dataIndex: "night",
    },
    {
      title: "Single engine vfr",
      dataIndex: "singleenginevfr",
    },
    {
      title: "Single engine ifr",
      dataIndex: "singleengineifr",
    },
    {
      title: "Multi engine vfr",
      dataIndex: "multienginevfr",
    },
    {
      title: "Multi engine ifr",
      dataIndex: "multiengineifr",
    },

    {
      title: "Pilot in command",
      dataIndex: "pilotincommand",
    },
    {
      title: "Co-pilot",
      dataIndex: "copilot",
    },
    {
      title: "Multi-pilot",
      dataIndex: "multipilot",
    },
    {
      title: "Flight instructor",
      dataIndex: "flightinstructor",
    },
    {
      title: "Dual",
      dataIndex: "dual",
    },

    {
      title: "IF",
      dataIndex: " if",
    },
    {
      title: "Synthetic training",
      dataIndex: "synthetictraining",
    },
    {
      title: "Landing days",
      dataIndex: "landingdays",
    },
    {
      title: "Landing night",
      dataIndex: "landingnight",
    },
    {
      title: "Remarks and endorsements",
      dataIndex: " Remarks_and_endorsements",
    },
    {
      title: "",
    },
  ];
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
      <Row justify="space-between" style={{ margin: "15px" }}>
        <Col>
          <Space size="small" direction="horizontal">
            <Space direction="vertical">
              <DatePicker onChange={onstartdate} placeholder="Start date" />
            </Space>
            -
            <Space direction="vertical">
              <DatePicker onChange={onenddate} placeholder="End date" />
            </Space>
            <Button type="default">
              <SearchOutlined />
              Find report
            </Button>
            <Radio.Group>
              <Radio.Button value="All">All</Radio.Button>
              <Radio.Button value="FlightLogger entries">
                FlightLogger entries
              </Radio.Button>
              <Radio.Button value="Manual entries">Manual entries</Radio.Button>
            </Radio.Group>
          </Space>
        </Col>

        <Col>
          <Space>
            <Button type="default" onClick={onShowtable}>
              <PlusOutlined style={{ color: "green" }} />
              Add entry
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

      <Header
        style={{
          backgroundColor: " #ffffff",
          height: 35,
          marginTop: "20px",
          width: "100%",
        }}
        title={props.firstName}
      >
        <Row style={{ marginTop: "15px" }}>
          <Col>
            <h3 style={{ fontSize: "24px" }}>
              rilfi rilfi {name.concat("'s logbook for")}
            </h3>
          </Col>
          <Col span={6}>
            <h3 style={{ fontSize: "20px" }}>
              {localStorage.getItem("currentuser")} {startdate.concat(" - ")}
              {enddate}
            </h3>
          </Col>
        </Row>
      </Header>

      {tablerecords ? (
        <Row>
          <Table
            columns={columns_entry}
            size="small"
            scroll={{ x: 1300 }}
            pagination={false}
          />

          <Row style={{ marginLeft: "1370px" }}>
            {" "}
            <Button
              loading={loading}
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                borderRadius: "4px",
              }}
              htmlType="submit"
            >
              <CheckOutlined /> Update logbook
            </Button>
          </Row>
        </Row>
      ) : (
        ""
      )}

      {/* {tablerecords ? (
        <div className="search-record">
          <div className="record-table">
            <Table dataSource={data}>
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
      ) : (
        ""
      )} */}
    </>
  );
}
