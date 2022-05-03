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
  Table,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import { FaRegFileCode, FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";

export default function RawDataFlightrepot(props) {
  const [size, setSize] = useState(8);
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [tablerecords, settablerecords] = useState(false);

  const onShowtable = () => {
    settablerecords(true);
  };



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
        <FaRegFileCode /> XML
      </Button>
      <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFileExcel /> CSV (Excel)
      </Button>
    </Menu>
  );
  const columns_flights = [
    {
      title: "Flight ID",
      dataIndex: "flight_ID",
    },
    {
      title: "Account",
      dataIndex: "account",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Aircraft",
      dataIndex: "aircraft",
    },
    {
      title: "Aircraft type",
      dataIndex: "aircraft_type",
    },
    {
      title: "Type of activity",
      dataIndex: "Type_of_activity",
    },
    {
      title: "Kind of operation",
      dataIndex: "Kind_of_operation",
    },
    {
      title: "Program name",
      dataIndex: "program_name",
    },

    {
      title: "Program revision ID",
      dataIndex: "program_revision",
    },
    {
      title: "	PIC",
      dataIndex: "pic",
    },
    {
      title: "PIC CAA ref.",
      dataIndex: "pIC_CAA_ref.",
    },
    {
      title: "PIC user ref.",
      dataIndex: "pIC_user_ref.",
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
    },
    {
      title: "Instructor CAA ref.	",
      dataIndex: "instructor_CAA_ref.	",
    },
    {
      title: " Instructor user ref.",
      dataIndex: "instructor_user_ref.",
    },
    {
      title: "Student ",
      dataIndex: "student",
    },

    {
      title: "	Student CAA ref. ",
      dataIndex: "student_CAA_ref.",
    },
    {
      title: "Student user ref.",
      dataIndex: "Student_user_ref.",
    },
    {
      title: "Renter",
      dataIndex: "renter",
    },
    {
      title: "Renter CAA ref.",
      dataIndex: "renterCAA_ref.",
    },
    {
      title: "Renter user ref.",
      dataIndex: "Renter_user_ref.",
    },
    {
      title: "Crew ",
      dataIndex: "crew",
    },
    {
      title: "	Crew CAA ref.",
      dataIndex: "crew_CAA_ref.",
    },
    {
      title: "	Crew user ref. ",
      dataIndex: "crew_user_ref.",
    },

    {
      title: "Customer",
      dataIndex: "customer",
    },
    {
      title: "Departure",
      dataIndex: "departure",
    },
    {
      title: "Arrival",
      dataIndex: "arrival",
    },
    {
      title: "Off block",
      dataIndex: "off_block",
    },
    {
      title: "Takeoff ",
      dataIndex: "takeoff",
    },
    {
      title: "	Landing	",
      dataIndex: "landing	",
    },
    {
      title: "On block",
      dataIndex: "on_block",
    },
    {
      title: "Tacho start",
      dataIndex: "tacho_start",
    },

    {
      title: "Tacho finish ",
      dataIndex: "tacho_finish",
    },
    {
      title: "Block time",
      dataIndex: "block_time",
    },
    {
      title: "Airborne time",
      dataIndex: "airborne_time",
    },
    {
      title: "Tacho time",
      dataIndex: "tacho_time",
    },
    {
      title: "Fuel coefficient ",
      dataIndex: "fuel_coefficient",
    },
    {
      title: "Calculated fuel",
      dataIndex: "calculated_fuel",
    },
    {
      title: "Flight type",
      dataIndex: "flight_type	",
    },
    {
      title: "VFR",
      dataIndex: "vFR",
    },

    {
      title: "IFR",
      dataIndex: "iFR",
    },
    {
      title: "DAY",
      dataIndex: "day",
    },
    {
      title: "NIGHT",
      dataIndex: "night",
    },
    {
      title: "	Local",
      dataIndex: "local",
    },
    {
      title: "Cross country ",
      dataIndex: "cross_country",
    },
    {
      title: "Pilot flying",
      dataIndex: "pilot_flying",
    },
    {
      title: "Pilot monitoring",
      dataIndex: "pilot_monitoring",
    },
    {
      title: "IF time	",
      dataIndex: "if_time	",
    },

    {
      title: "Asymmetric time",
      dataIndex: "asymmetric time",
    },
    {
      title: "Full stop",
      dataIndex: "full_stop",
    },
    {
      title: "Touch and go",
      dataIndex: "touch_and_go",
    },
    {
      title: "Approach",
      dataIndex: "approach",
    },
    {
      title: "Go around",
      dataIndex: "go_around",
    },
    {
      title: "Lesson status",
      dataIndex: "lesson_status",
    },
    {
      title: "Booking id",
      dataIndex: "booking_id",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },

    {
      title: "Income invoice number",
      dataIndex: "income_invoice_number",
    },
    {
      title: "Expenses invoice number",
      dataIndex: "expenses_invoice_number",
    },
    {
      title: "Instructor id",
      dataIndex: "instructor_id",
    },
    {
      title: "User id",
      dataIndex: "user_id",
    },
    {
      title: "Customer id",
      dataIndex: "customer_id",
    },
  ];

  return (
    <>
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
            <h3 style={{ fontWeight: "bold", fontSize: "24px" }}>
              Flight report for
            </h3>
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
          </Space>
        </Col>

        <Col>
          <Space>
            <Dropdown overlay={pdf} trigger={["click"]}>
              <Button>
                <DownloadOutlined style={{ color: "#000000" }} />
                Export as <DownOutlined />
              </Button>
            </Dropdown>
          </Space>
        </Col>
      </Row>

      <Row>
        {" "}
        <Table
          title={() => (
            <Header
              style={{
                borderRadius: "4px",
                width: "100%",
                backgroundColor: " #E6E6E6",
                height: 35,
                border: " #ccc 1px solid",
                backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
              }}
            >
              <Row
                justify="space-between "
                style={{ marginTop: 5, width: "100%" }}
              >
                <h3 style={{ fontWeight: "bold" }}>Flights</h3>
              </Row>
            </Header>
          )}
          columns={columns_flights}
          size="small"
          scroll={{ x: 1300 }}
        />
      </Row>
      {/* <div
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
      )} */}
    </>
  );
}
