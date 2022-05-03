import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Table, Switch, Tabs, Alert } from "antd";
import { edit, getAll } from "../../../utils/APIUtils";
import { FaPencilAlt, FaRegCalendarAlt } from "react-icons/fa";
import { IoIosSpeedometer } from "react-icons/io";
import { useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

export default function MasterMaintanenceList() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [getMasterMaintanenceList, setgetMasterMaintanenceList] = useState([]);

  const { TabPane } = Tabs;
  function onChange(record) {
    setLoading(true);
    record.active = !record.active;
    setShowAlert(true);
    alert(
      "Are you sure, that you want to disable the maintenance: " +
        record.name +
        "?"
    );
    edit(record, "MasterMaintanenceList", record.key).then(() => {
      getAll("MasterMaintanenceList").then(
        (result) => setgetMasterMaintanenceList(result),
        setLoading(false)
      );
    });
  }
  function handleEdit(data) {
    history.push("/maintenance_types/" + data.key + "/edit");
  }
  function handleCreate(data) {
    history.push({
      pathname: "/maintenance_types/new",
      state: { detail: data },
    });
  }

  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
    getAll("MasterMaintanenceList")
      .then((result) => setgetMasterMaintanenceList(result), setLoading(false))
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
      title: "Type",
      dataIndex: "type",

      render: (text, record) =>
      text ? <FaRegCalendarAlt style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",



      
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
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Type",
      dataIndex: "type",
      render: (text, record) => (
        <FaRegCalendarAlt style={{ fontSize: "24px" }} />
      ),
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
              <PlusOutlined style={{ color: "green" }} /> Create maintenance
              reason
            </Button>
          </Space>
        </Col>
      </Row>
      {showAlert ? (
        <Row justify="center" style={{ margin: 10 }}>
          <Alert
            message="The maintenance has been"
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
        Master maintenance list
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
                dataSource={getMasterMaintanenceList.filter((d) => d.active)}
                size="small"
              />
            </TabPane>
            <TabPane tab="Deactivated" key="2">
              <Table
                columns={Decolumns}
                pagination={false}
                dataSource={getMasterMaintanenceList.filter((d) => !d.active)}
                size="small"
              />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
