import React, { useState } from "react";

import { Header } from "antd/lib/layout/layout";
import { Space, Button, Table, Tag, Row, Col, Form, Tabs } from "antd";
import { RiArrowUpSLine } from "react-icons/ri";

export default function ExtraTheories(props) {
  
  const columns = [
    {
      title: "Date",
      dataIndex: "Date",

      render: (rData, record) => (
        <Button style={{ color: "#1394e4" }} type="link">
          <RiArrowUpSLine />
        </Button>
      ),
    },
    {
      title: " Classroom",
      dataIndex: "Classroom",
    },
    {
      title: "Instructor",
      dataIndex: " Instructor",
    },
    {
      title: "Student",
      dataIndex: "student",
    },
    {
      title: "Comment",
      dataIndex: "comment",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
   

    {
      title: "",
    },
  ];

  const columnsnext = [
    {
      title: "Date",
      dataIndex: "Date",

      render: (rData, record) => (
        <Button style={{ color: "#1394e4" }} type="link">
          <RiArrowUpSLine />
        </Button>
      ),
    },
    {
      title: " Classroom",
      dataIndex: "Classroom",
    },
    {
      title: "Instructor",
      dataIndex: " Instructor",
    },
    {
      title: "Student",
      dataIndex: "student",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    

    {
      title: "",
    },
  ];

  return (
    <>
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
              <h3 style={{ fontWeight: "bold" }}> Completed extra theories</h3>
            </Row>
          </Header>
        )}
        //    dataSource={props.programList[pl]}

        columns={columnsnext}
      />
    </>
  );
}
