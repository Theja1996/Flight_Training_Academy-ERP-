import React, { useState } from "react";

import { Header } from "antd/lib/layout/layout";
import {
  Space,
  Button,
  Table,
  Tag,
  Row,
  Col,
  Typography,
  Modal,
  List,
} from "antd";
import { RiArrowUpSLine } from "react-icons/ri";
import { useHistory } from "react-router";
import { FaExternalLinkAlt, FaPencilAlt } from "react-icons/fa";

export default function ProgressTest(props) {
  const { Text } = Typography;
  const [isModalVisible, setIsModalVisible] = useState(false);

  let history = useHistory();

  function handleInstructorProfile(data) {
    history.push({
      pathname: "/FlightInstractor/" + data.key,
      state: { detail: data },
    });
  }
  function handleClassTheory(data) {
    history.push({
      //    pathname: "/user/" + data.key,
      state: { detail: data },
    });
  }
  function handleClass(data) {
    history.push({
      pathname: "/classs/" + data.key,
      state: { detail: data },
    });
  }
  function handleExternalLink(data) {
    history.push("/user/" + data.key + "/edit");
    //theory_lectures/97867
    //theory_lectures to do
  }
  function handleEdit(data) {
    history.push("/user/" + data.key + "/edit");
    //theory_lectures/97867/edit
    //Edit Class theory to do
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
      title: " Classroom",
      dataIndex: "classroom",
    },
    {
      title: "Instructor",
      dataIndex: " instructor",
    },
    {
      title: "Class",
      dataIndex: "class",
    },
    {
      title: "Course",
      dataIndex: "course",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Subject",
      dataIndex: "subject",
    },

    {
      title: "",
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
      title: " Classroom",
      dataIndex: "classroom",
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
      title: "Class",
      dataIndex: "class",
      render: (rData, record) => (
        <Button
          onClick={() => handleClass(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >
          {record.classs}
        </Button>
      ),
    },
    {
      title: "Course",
      dataIndex: "course",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Subject",
      dataIndex: "subject",
    },

    {
      title: "",
      render: (text, record) => (
        <div>
          <Button
            onClick={() => handleExternalLink(record)}
            type="text"
            icon={<FaExternalLinkAlt />}
          />
          <Button
            onClick={() => handleEdit(record)}
            type="text"
            icon={<FaPencilAlt />}
          />
        </div>
      ),
    },
  ];
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const data = [
    "Date",
    "Classroom",
    "Instructor",
    "Class",
    "Course",
    "Category",
    "Subject",
    "Passed",
    "Failed",

    "Comment",
    "Attachments",
  ];
  const dataD = [
    "Date",
    "Classroom",
    <Button
      onClick={() => handleInstructorProfile()}
      style={{ color: "#1394e4" }}
      type="link"
    >
      Instructor
    </Button>,
    <Button
      onClick={() => handleClass()}
      style={{ color: "#1394e4" }}
      type="link"
    >
      classs
    </Button>,
    "Course",
    "Category",
    "Subject",

    <Button
      // onClick={() => handleClass()}
      //link rental profile
      style={{ color: "#1394e4" }}
      type="link"
    >
      classs
    </Button>,
    "Failed",

    "Comment",
    "Attachments",
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
        //    dataSource={props.programList[pl]}

        columns={columns}
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
              <h3 style={{ fontWeight: "bold" }}> Completed progress tests</h3>
            </Row>
          </Header>
        )}
        columns={columnsnext}
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
    </>
  );
}
