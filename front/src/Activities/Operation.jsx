import React, { useState } from "react";

import { Header } from "antd/lib/layout/layout";
import { Space, Button, Table, Tag, Row, Col, Form, Tabs, Typography } from "antd";
import { RiArrowUpSLine } from "react-icons/ri";
import { useHistory } from "react-router";
import { FaPencilAlt } from "react-icons/fa";

export default function Operationtab(props) {
  let history = useHistory();
  const { Text } = Typography;
  function handleAircraftProfile(data) {
    history.push({
      pathname: "/planes/" + data.key,
      state: { detail: data },
    });
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
      title: "PIC",
      dataIndex: "pic",
      render: (rData, record) => (
        <Button
          //  onClick={() => handleAircraftProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >
          {record.callSign + "-" + record.class}
        </Button>
      ),
    },
    {
      title: "Crew",
      dataIndex: "crew",
      render: (rData, record) => (
        <Button
          //      onClick={() => handleAircraftProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >
          {record.callSign + "-" + record.class}
        </Button>
      ),
    },
    {
      title: "Customer",
      dataIndex: "customer",
      render: (rData, record) => (
        <Button
          //  onClick={() => handleAircraftProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >
          {record.callSign + "-" + record.class}
        </Button>
      ),
    },
    {
      title: "Operation",
      dataIndex: "operation",
      render: (rData, record) => (
        <Button
          //  onClick={() => handleAircraftProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >
          {record.callSign + "-" + record.class}
        </Button>
      ),
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
      title: "PIC",
      dataIndex: "pic",
    },
    {
      title: "Crew",
      dataIndex: "crew",
    },
    {
      title: "Customer",
      dataIndex: "customer",
    },
    {
      title: "Operation",
      dataIndex: "operation",
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
      render: (text, record) => (
        <Button
          onClick={() => handleEdit(record)}
          type="text"
          icon={<FaPencilAlt />}
        />
      ),
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
                <Table.Summary.Cell></Table.Summary.Cell>
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
              <h3 style={{ fontWeight: "bold" }}>
               
                Completed operation flights
              </h3>
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
              
              </Table.Summary.Row>
            </>
          );
        }}
      />
    </>
  );
}
