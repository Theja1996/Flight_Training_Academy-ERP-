import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { DownloadOutlined } from "@ant-design/icons";
import {
  Divider,
  Row,
  Space,
  Button,
  Menu,
  Dropdown,
  DatePicker,
  Col,
  Table,
  Typography,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Header } from "antd/lib/layout/layout";
import { FaRegFileCode, FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import { getAll } from "../../../utils/APIUtils";

export default function BookingCancel(props) {
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [reason, setReason] = useState([]);
  const [Loading, setLoading] = useState(true);
  const { Text } = Typography;
  useEffect(() => {
    getAll("CancelReason")
      .then((result) => setReason(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  function onstartdate(date, dateString) {
    setstartdate(dateString);
    console.log(date, dateString, startdate);
  }

  function onenddate(date, dateString) {
    setenddate(dateString);
    console.log(enddate, dateString);
  }

  const pdf = (
    <Menu>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFilePdf /> PDF
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

  const columns_Cancelled_Bookings = [
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Off block",
      dataIndex: "off_Block",
    },
    {
      title: "Planned Hours ",
      dataIndex: "planned_Hours",
    },
    {
      title: "Booking type",
      dataIndex: "booking_Type",
    },
    {
      title: "Activity",
      dataIndex: "activity",
    },
    {
      title: "Reason",
      dataIndex: "reason",
      render: (text, record) => {
        reason.filter(record.name);
      },
    },
    {
      title: "Resource",
      dataIndex: "resource",
    },

    {
      title: "Pilot",
      dataIndex: "pilot ",
    },

    {
      title: "Student/Class/Renter/Customer",
      dataIndex: "Student_Class_Renter_Customer",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
  ];
  if (Loading) {
    return <strong>Loading...</strong>;
  }
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
              Cancellation report for
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
      <Divider style={{ marginTop: "25px" }} />

      <Row justify="space-between" style={{ margin: "20px" }}>
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

      <Row justify="center">
        <Table
          style={{ width: "100%", margin: "20px", marginTop: "5px" }}
          title={() => "Header"}
          title={() => (
            <Header
              style={{
                borderRadius: "4px",
                width: "100%",
                backgroundColor: " #E6E6E6",
                height: 35,
                border: " #ccc 1px solid",
                backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
                float: "left",
              }}
            >
              <Row
                justify="space-between "
                style={{ marginTop: 5, width: "100%" }}
              >
                <h3 style={{ fontWeight: "bold" }}>Cancelled bookings</h3>
              </Row>
            </Header>
          )}
          columns={columns_Cancelled_Bookings}
          size="small"
          summary={(pageData) => {
            let totalplanned_Hours = 0;

            pageData.forEach(({ planned_Hours }) => {
              totalplanned_Hours += planned_Hours;
            });
            return (
              <>
                <Table.Summary.Row>
                  <Table.Summary.Cell>Total</Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell>
                    <Text type="danger">{totalplanned_Hours}</Text>
                  </Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                  <Table.Summary.Cell></Table.Summary.Cell>
                </Table.Summary.Row>
              </>
            );
          }}
        />
      </Row>
    </>
  );
}
