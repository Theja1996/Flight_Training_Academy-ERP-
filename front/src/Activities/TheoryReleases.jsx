import React, { useState } from "react";

import { Header } from "antd/lib/layout/layout";
import { Space, Button, Table, Tag, Row, Col, Form, Tabs } from "antd";
import { RiArrowUpSLine } from "react-icons/ri";

export default function TheoryReleases(props) {
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
              <h3 style={{ fontWeight: "bold" }}> Completed theory releases</h3>
            </Row>
          </Header>
        )}
        //    dataSource={props.programList[pl]}

        columns={columnsnext}
      />
    </>
  );
}
