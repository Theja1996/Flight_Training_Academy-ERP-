import React, { useState } from "react";


import { Header } from "antd/lib/layout/layout";
import { Space, Button, Table, Tag, Row, Col, Form, Tabs } from "antd";
import { RiArrowUpSLine } from "react-icons/ri";

export default function Rental(props) {
  const columns = [
    {
      title: "Date",
      dataIndex: "date",

      render: (rData, record) => (
        <Button style={{ color: "#1394e4" }} type="link">
          {" "}
          <RiArrowUpSLine />
        </Button>
      ),
    },
    {
      title: " Aircraft",
      dataIndex: "aircraft",
    },
    {
      title: " Renter",
      dataIndex: "renter",
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
      title: "  Approval status",
      dataIndex: " approval status",
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
          {" "}
          <RiArrowUpSLine />
        </Button>
      ),
    },
    {
      title: " Aircraft",
      dataIndex: "aircraft",
    },
    {
        title: " Renter",
        dataIndex: "renter",
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
                {" "}
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
              <h3 style={{ fontWeight: "bold" }}>
                {" "}
                Completed operation flights
              </h3>
            </Row>
          </Header>
        )}
        //    dataSource={props.programList[pl]}

        columns={columnsnext}
      />
    </>
  );
}
