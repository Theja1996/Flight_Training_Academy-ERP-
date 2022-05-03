import React, { useState } from "react";

import { Row, Table, Space } from "antd";
import { Header } from "antd/lib/layout/layout";

export default function Maintenance(props) {
  const [loading, setLoading] = useState(true);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
        title: "Serial #",
        dataIndex: "serial",
      },
    {
      title: "Expiry",
      dataIndex: "expiry",
    },
    {
      title: "Uploaded by",
      dataIndex: "uploaded by",
    },
    
  ];
  const columns_currentParts = [
    {
      title: "Name",

      dataIndex: "name",
    },
    {
        title: "Serial #",
        dataIndex: "serial",
      },
    {
      title: "Expiry",
      dataIndex: "expiry",
    },
    {
      title: "Uploaded by",
      dataIndex: "uploaded by",
    },
    {
      title: "Approved by",
      dataIndex: "Approved by",
    },
   
  ];
  const columns_PreviousParts = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
        title: "Serial #",
        dataIndex: "serial",
      },
    {
      title: "Expiry",
      dataIndex: "expiry",
    },
    {
      title: "Uploaded by",
      dataIndex: "uploaded by",
    },
    {
      title: "Approved by",
      dataIndex: "Approved by",
    },
    {
      title: "Reason",
      dataIndex: "reason",
    },
   
  ];

  // if (loading) {
  //   return "...Loading";
  // }

  return (
    <>
      <Row justify="center " style={{ marginTop: 5, width: "100%" }}>
          <Space direction="vertical" style={{  width: "100%" }}>
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
                float:"left"
              }}
            >
              <Row
                justify="space-between "
                style={{ marginTop: 5, width: "100%" }}
              >
                <h3 style={{ fontWeight: "bold" }}>Requiring approval</h3>
              </Row>
            </Header>
          )}
          columns={columns}
          size="small"
        />
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
                float:"left"

              }}
            >
              <Row
                justify="space-between "
                style={{ marginTop: 5, width: "100%" }}
              >
                <h3 style={{ fontWeight: "bold" }}>Current maintenance parts</h3>
              </Row>
            </Header>
          )}
          columns={columns_currentParts}
          size="small"
        />
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
                float:"left"

              }}
            >
              <Row
                justify="space-between "
                style={{ marginTop: 5, width: "100%" }}
              >
                <h3 style={{ fontWeight: "bold" }}>Previous maintenance parts</h3>
              </Row>
            </Header>
          )}
          columns={columns_PreviousParts}
          size="small"
        /></Space>
      </Row>
    </>
  );
}
