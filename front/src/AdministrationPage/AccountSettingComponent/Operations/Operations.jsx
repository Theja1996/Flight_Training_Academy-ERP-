import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Table, Switch, Tabs, Alert } from "antd";
import { edit, getAll } from "../../../utils/APIUtils";
import { FaPencilAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

export default function Operations() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [getOperations, setgetOperations] = useState([]);
  const { TabPane } = Tabs;

  function onChange(record) {
    setLoading(true);
    record.active = !record.active;
    alert(
      "Are you sure, that you want to deactivate operation: " +
        record.name +
        "?"
    );
    setShowAlert(true);
    edit(record, "Operations", record.key).then(() => {
      getAll("Operations").then(
        (result) => setgetOperations(result),
        setLoading(false)
      );
    });
  }
  function handleEdit(data) {
    history.push("/Operations/" + data.key + "/edit");
  }
  function handleCreate(data) {
    history.push({
      pathname: "/Operations/new",
      state: { detail: data },
    });
  }

  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
    getAll("Operations")
      .then((result) => setgetOperations(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "Name",
      render: (text) => <a>{text}</a>,
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

  const Decolumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "Name",
      render: (text) => <a>{text}</a>,
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
            <Button onClick={() => handleCreate()}>
              <PlusOutlined style={{ color: "green" }} /> Create Operations
            </Button>
          </Space>
        </Col>
      </Row>
      {showAlert ? (
        <Row justify="center" style={{ margin: 10 }}>
          <Alert
            message="The Operations has been "
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
        Operations
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
                dataSource={getOperations.filter((d) => d.active)}
                size="small"
              />
            </TabPane>
            <TabPane tab="Deactivated" key="2">
              <Table
                columns={Decolumns}
                pagination={false}
                dataSource={getOperations.filter((d) => !d.active)}
                size="small"
              />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
