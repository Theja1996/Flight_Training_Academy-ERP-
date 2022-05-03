import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Table, Switch, Tabs, Alert } from "antd";
import { getAll,edit } from "../../../utils/APIUtils";
import { FaArrowsAltV, FaPencilAlt, FaSyncAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

export default function ClassRoom() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
const [getClassRoom, setgetClassRoom] = useState([]);
const [showAlert, setShowAlert] = useState(false);
const { TabPane } = Tabs;
  
function onChange(record) {
    setLoading(true);
    record.active = !record.active;
    setShowAlert(true);
    edit(record, "ClassRoom", record.key).then(() => {
      getAll("ClassRoom").then(
        (result) => setgetClassRoom(result),
        setLoading(false)
      );
    });
  }
  function handleEdit(data) {
    history.push("/classRooms/" + data.key + "/edit");
  }
  function handleCreate(data) {
    history.push({
      pathname: "/classRooms/new",
      state: { detail: data },
    });
  }

  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
    getAll("ClassRoom")
      .then((result) => setgetClassRoom(result), setLoading(false))
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
      dataIndex: "other",
      colSpan: 4,
      render: (text, record) => (
        <Button type="text" icon={<FaSyncAlt style={{ color: "#08c" }} />} />
      ),
    },
    {
      title: "",
      dataIndex: "edit",
      colSpan: 0,
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
          type="text"
          icon={<FaArrowsAltV style={{ color: "#1394e4" }} />}
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
      title: "",
      dataIndex: "other",
      colSpan: 4,
      render: (text, record) => (
        <Button
          //  onClick={() => handleEdit(record)}
          type="text"
          icon={<FaSyncAlt style={{ color: "#08c" }} />}
        />
      ),
    },
    {
      title: "",
      dataIndex: "edit",
      colSpan: 0,
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
          //   onClick={() => handleEdit(record)}
          type="text"
          icon={<FaArrowsAltV style={{ color: "#1394e4" }} />}
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
              <PlusOutlined style={{ color: "green" }} /> Create Classroom
            </Button>
          </Space>
        </Col>
      </Row>
      {showAlert ? (
        <Row justify="center" style={{ margin: 10 }}>
          <Alert
            message="The Classroom has been "
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
        Classrooms
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
                dataSource={getClassRoom.filter((d) => d.active)}
                size="small"
              />
            </TabPane>
            <TabPane tab="Deactivated" key="2">
              <Table
                columns={Decolumns}
                pagination={false}
                dataSource={getClassRoom.filter((d) => !d.active)}
                size="small"
              />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
