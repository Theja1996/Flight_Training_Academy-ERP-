import React, { useEffect, useState } from "react";

import { Button, Col, Row, Space, Table, Switch, Tabs, Alert } from "antd";

import { edit, getAll } from "../../../utils/APIUtils";
import { FaPencilAlt, FaRegClone } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

export default function Programs() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [getflightPrograms, setgetflightPrograms] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const { TabPane } = Tabs;

  function onChange(record) {
    setLoading(true);
    record.active = !record.active;
    setShowAlert(true);
    edit(record, "Programs", record.key).then(() => {
      getAll("Programs").then(
        (result) => setgetflightPrograms(result),
        setLoading(false)
      );
    });
  }
  function handleEdit(data) {
    history.push("/programs/" + data.key + "/edit");
  }

  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
    getAll("Programs")
      .then((result) => setgetflightPrograms(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Active revision",
      dataIndex: "revision",
    },
    {
      title: "Students (active/all)",
      dataIndex: "Students (active/all)",
    },
    {
      title: "",
      dataIndex: "edit",
      colSpan: 3,
      render: (text, record) => (
        <Button
          onClick={() => handleEdit(record)}
          type="text"
          icon={<FaPencilAlt style={{ color: "#1394e4" }} />}
        />
      ),
    },

    {
      title: "",
      dataIndex: "other",
      colSpan: 0,
      render: (text, record) => (
        <Switch
          size="small"
          style={{ width: 20, color: "lightgreen" }}
          checked={record.active}
          onChange={() => onChange(record)}
        />
      ),
    },

    {
      title: "",
      dataIndex: "other",
      colSpan: 0,
      render: (text, record) => (
        <Button
          onClick={() => handleEdit(record)}
          type="text"
          icon={<FaRegClone style={{ color: "#f39c12" }} />}
        />
      ),
    },
  ];

  const Decolumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Active revision",
      dataIndex: "revision",
    },
    {
      title: "Students (active/all)",
      dataIndex: "Students (active/all)",
    },
    {
      title: "",
      dataIndex: "edit",
      colSpan: 2,
      render: (text, record) => (
        <Button
          onClick={() => handleEdit(record)}
          type="text"
          icon={<FaPencilAlt style={{ color: "#1394e4" }} />}
        />
      ),
    },

    {
      title: "",
      dataIndex: "other",
      colSpan: 0,
      render: (text, record) => (
        <Switch
          size="small"
          style={{ width: 20, color: "lightgreen" }}
          checked={record.active}
          onChange={() => onChange(record)}
        />
      ),
    },
  ];

  return (
    <>
      <Row style={{ marginTop: "15px" }} justify="start">
        <Col
          style={{
            marginLeft: "315px",
          }}
        >
          <Space>
            <Button href="/CreatePrograms">
              <PlusOutlined style={{ color: "green" }} /> Create Program
            </Button>
          </Space>
        </Col>
      </Row>
      {showAlert ? (
        <Row justify="center" style={{ margin: 10 }}>
          <Alert
            message="The Program has been "
            type="success"
            closable
            onClose={() => setShowAlert(false)}
            style={{ width: "60%" }}
          />
        </Row>
      ) : null}

      <Row
        style={{
          fontWeight: "bold",
          marginLeft: "315px",
          marginTop: "15px",
          fontSize: "18px",
        }}
      >
        Programs
      </Row>
      <Row
        style={{
          marginLeft: "315px",
          marginTop: "15px",
        }}
      >
        <Col span={18}>
          <Tabs onChange={callback} type="card">
            <TabPane tab="Active" key="1">
              <Table
                columns={columns}
                pagination={false}
                dataSource={getflightPrograms.filter((d) => d.active)}
                size="small"
              />
            </TabPane>
            <TabPane tab="Deactivated" key="2">
              <Table
                columns={Decolumns}
                pagination={false}
                dataSource={getflightPrograms.filter((d) => !d.active)}
                size="small"
              />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
