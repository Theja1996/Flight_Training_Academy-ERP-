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

export default function RawDataTheoryReport(props) {
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");

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

  const columns_theory = [
    {
      title: "Account",
      dataIndex: "account",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Type of theory",
      dataIndex: "type_of_theory",
    },
    {
      title: "Theory course",
      dataIndex: "theory_course",
    },
    {
      title: "Theory category",
      dataIndex: "theory_category",
    },
    {
      title: "Theory subject",
      dataIndex: "theory_subject",
    },
    {
      title: "Class",
      dataIndex: "class",
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
      title: "Examiner",
      dataIndex: "examiner",
    },
    {
      title: "Examiner CAA ref.",
      dataIndex: "examinerCAA_ref.",
    },
    {
      title: "Examiner user ref.",
      dataIndex: "examiner_user_ref.",
    },
    {
      title: "Starts at ",
      dataIndex: "starts_at",
    },

    {
      title: "Ends at",
      dataIndex: "ends_at",
    },
    {
      title: "Duration",
      dataIndex: "	duration",
    },
    {
      title: "Status",
      dataIndex: "status",
    },

    {
      title: "Attended from	 ",
      dataIndex: "attended_from	",
    },
    {
      title: "Attended to	",
      dataIndex: "attended_to	",
    },

    {
      title: "Attendence",
      dataIndex: "attendence",
    },

    {
      title: "Grade",
      dataIndex: "grade",
    },
    {
      title: "Sitting number",
      dataIndex: "sitting_number",
    },
    {
      title: "Sitting starts at",
      dataIndex: "sitting_starts_at",
    },
    {
      title: "Sitting ends at",
      dataIndex: "sitting_ends_at",
    },

    {
      title: "	Ref. number",
      dataIndex: "ref._number",
    },
    {
      title: "Description	",
      dataIndex: "description	",
    },
    {
      title: "Student comment	",
      dataIndex: "student_comment	",
    },

    {
      title: "Comment",
      dataIndex: "comment",
    },
    {
      title: "Booking id",
      dataIndex: "booking_id",
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
      title: "Examiner id",
      dataIndex: "examiner_id",
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
              Theory report for
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
                <h3 style={{ fontWeight: "bold" }}>Theory</h3>
              </Row>
            </Header>
          )}
          columns={columns_theory}
          size="small"
          scroll={{ x: 1300 }}
        />
      </Row>
    </>
  );
}
