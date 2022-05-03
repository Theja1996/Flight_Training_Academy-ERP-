import React, { useState } from "react";

import { Header } from "antd/lib/layout/layout";
import {
  Typography,
  Button,
  Table,
  Tag,
  Row,
  Col,
  Form,
  List,
  Descriptions,
  Space,
} from "antd";
import { RiArrowUpSLine } from "react-icons/ri";
import { FaCheckCircle, FaPencilAlt } from "react-icons/fa";
import { useHistory } from "react-router";
import Modal from "antd/lib/modal/Modal";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Training(props) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Text } = Typography;
  let history = useHistory();

  function handleEdit(data) {
    history.push("/user/" + data.key + "/edit");
    //   users/18907/user_programs/28967/user_lectures/3210335/edit
  }
  function handleAircraftProfile(data) {
    history.push({
      pathname: "/planes/" + data.key,
      state: { detail: data },
    });
  }
  function handleInstructorProfile(data) {
    history.push({
      pathname: "/FlightInstractor/" + data.key,
      state: { detail: data },
    });
  }
  function handleStudentProfile(data) {
    history.push({
      pathname: "/user/" + data.key,
      state: { detail: data },
    });
  }

  const columns = [
    {
      title: "Date",
      dataIndex: "date",

      render: (rData, record) => (
        <Button style={{ color: "#1394e4" }} type="link">
          <RiArrowUpSLine />
        </Button>
      ),
    },
    {
      title: " Aircraft",
      dataIndex: "aircraft",
      render: (rData, record) => (
        <Button
          onClick={() => handleAircraftProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >
          {record.callSign + "-" + record.class}
        </Button>
      ),
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
      render: (rData, record) => (
        <Button
          onClick={() => handleInstructorProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >
          {record.callSign}
        </Button>
      ),
    },
    {
      title: "Student",
      dataIndex: "student",
      render: (rData, record) => (
        <Button
          onClick={() => handleStudentProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >
          {" "}
          {record.callSign}
        </Button>
      ),
    },
    {
      title: "Lesson",
      dataIndex: "lesson",
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
      title: "",
      render: (rData, record) => (
        <Button
          onClick={() => handleStudentProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >
          Proceed
        </Button>
      ),
    },
  ];

  const columnsnext = [
    {
      title: "Date",
      dataIndex: "date",

      render: (rData, record) => (
        <Button style={{ color: "#1394e4" }} type="link">
          <RiArrowUpSLine />
        </Button>
      ),
    },
    {
      title: " Aircraft",
      dataIndex: "aircraft",
    },
    {
      title: "Instructor",
      dataIndex: "instructor",
    },
    {
      title: "Student",
      dataIndex: "student",
    },
    {
      title: "Lesson",
      dataIndex: "lesson",
    },
    {
      title: "Departure",
      dataIndex: "departure",
    },
    {
      title: "Block",
      dataIndex: "block",
    },
    {
      title: "	Airborne",
      dataIndex: "airborne",
    },
    {
      title: "Tacho",
      dataIndex: "tacho",
    },
    {
      title: "Arrival",
      dataIndex: "arrival",
    },
    {
      title: "Approved status",
      dataIndex: "approved_Status",
      render: (rData, record) => (
        <Button type="link">
          <FaCheckCircle
            style={{
              color: "#5cb85c",
              backgroundColor: "white",
              fontSize: "24px",
            }}
          />
        </Button>
      ),
    },
    {
      title: "",
      render: (text, record) => (
        <Button
          onClick={() => handleEdit(record)}
          type="text"
          icon={<FaPencilAlt style={{ color: "#1394e4" }} />}
        />
      ),
    },
  ];

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  function handleProfile(data) {
    history.push({
      pathname: "/planes/" + data.key,
      state: { detail: data },
    });
  }

  const data = [
    "Date",
    "Aircraft",
    "Instructor",
    "Student",
    "Lesson",
    "Departure",
    "Block",
    "Airborne",
    "Tacho",
    "Arrival",

    "Approved status",
    "Landings",
    "Briefing comment",
    "Student",
    "Attachments",
    "Debriefing comment",
  ];
  const dataD = [
    "Date",

    <Button
      onClick={() => handleProfile()}
      style={{ color: "#1394e4" }}
      type="link"
    >
      callSign
    </Button>,

    <Button
      onClick={() => handleProfile()}
      style={{ color: "#1394e4" }}
      type="link"
    >
      callSi
    </Button>,
    <Button
      onClick={() => handleProfile()}
      style={{ color: "#1394e4" }}
      type="link"
    >
      call
    </Button>,
    <Button
      onClick={() => handleProfile()}
      style={{ color: "#1394e4" }}
      type="link"
    >
      ca
    </Button>,
    "Departure",
    "Block",
    "Airborne",
    "Tacho",
    "Arrival",

    <Button type="link">
      <FaCheckCircle
        style={{
          color: "#5cb85c",
          backgroundColor: "white",
          fontSize: "24px",
        }}
      />
    </Button>,
    "Landings",
    "Briefing comment",
    "Student",
    "Attachments",
    "Debriefing comment",
  ];
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={false}
        title="Additional information"
      >
        <Row>
          <Space direction="horizontal" size="-10px">
            <Col>
              <List
                size="small"
                bordered
                dataSource={data}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Col>
            <Col>
              {" "}
              <List
                size="small"
                bordered
                dataSource={dataD}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Col>
          </Space>
        </Row>
      </Modal>

      <Table
        tableLayout="auto"
        style={{ width: "100%" }}
        pagination={false}
        size="small"
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
              <h3 style={{ fontWeight: "bold" }}>
                Bookings missing completion
              </h3>
            </Row>
          </Header>
        )}
        columns={columns}
        summary={(pageData) => {
          let totalplanned_Hours = 0;

          pageData.forEach(({ planned_Hours }) => {
            totalplanned_Hours += planned_Hours;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell>Total</Table.Summary.Cell>

                {/* <Table.Summary.Cell>
                  <Text type="danger">{totalplanned_Hours}</Text>
                </Table.Summary.Cell> */}
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

      <Table
        tableLayout="auto"
        style={{ width: "100%" }}
        pagination={false}
        size="small"
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
              <h3 style={{ fontWeight: "bold" }}>Completed training flights</h3>
            </Row>
          </Header>
        )}
        columns={columnsnext}
        summary={(pageData) => {
          let totalBlock = 0;
          let totalAirborne = 0;
          let totalTacho = 0;

          pageData.forEach(({ block, airborne, tacho }) => {
            totalBlock += block;
            totalAirborne += airborne;
            totalTacho += tacho;
          });
          return (
            <>
              <Table.Summary.Row>
                <Table.Summary.Cell>Total</Table.Summary.Cell>{" "}
                <Table.Summary.Cell></Table.Summary.Cell>
                <Table.Summary.Cell></Table.Summary.Cell>
                <Table.Summary.Cell></Table.Summary.Cell>
                <Table.Summary.Cell></Table.Summary.Cell>
                <Table.Summary.Cell></Table.Summary.Cell>
                <Table.Summary.Cell>
                  <Text type="danger">{totalBlock}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  <Text type="danger">{totalAirborne}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell>
                  <Text type="danger">{totalTacho}</Text>
                </Table.Summary.Cell>
                <Table.Summary.Cell></Table.Summary.Cell>
                <Table.Summary.Cell></Table.Summary.Cell>
                <Table.Summary.Cell></Table.Summary.Cell>
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </>
  );
}
