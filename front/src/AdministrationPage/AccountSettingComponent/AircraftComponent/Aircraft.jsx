import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Table, Switch, Tabs, Alert,Form } from "antd";
import { edit, getAll } from "../../../utils/APIUtils";
import { FaArrowsAltV, FaPencilAlt, FaSyncAlt } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

export default function Aircraft() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [getAircraft, setgetAircraft] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const { TabPane } = Tabs;
  const [form] = Form.useForm();
  function onChange(record) {
    setLoading(true);
    record.active = !record.active;
    setShowAlert(true);
    edit(record, "Aircraft", record.key).then(() => {
      getAll("Aircraft").then(
        (result) => setgetAircraft(result),
        setLoading(false)
      );
    });
  }
  function handleEdit(data) {
    history.push("/plane/" + data.key + "/edit");
  }
  function handleCreate(data) {
    history.push({
      pathname: "/planes/new",
      state: { detail: data },
    });
  }
  function handleProfile(data) {
    history.push({
      pathname: "/planes/" + data.key,
      state: { detail: data },
    });
  }
  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
    getAll("Aircraft")
      .then((result) => setgetAircraft(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }
  const columns = [
    {
      title: "Call sign",
      dataIndex: "callSign",
      key: "callSign",

      render: (rData, record) => (
        <Button
          onClick={() => handleProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >  {record.callSign}
      </Button>)
    },
    {
      title: "Aircraft model",
      dataIndex: "model",
    },
    {
      title: "Available for rental",
      dataIndex: "rental",
      render:(text,record)=><p>{record?.rental?"Yes":"No"}</p>
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

  const Decolumns = [
    {
      title: "Call sign",
      dataIndex: "callSign",
      key: "callSign",
      render: (rData, record) => (
        <Button
          onClick={() => handleProfile(record)}
          style={{ color: "#1394e4" }}
          type="link"
        >  {record.callsign}
      </Button>)
    },
    {
      title: "Aircraft model",
      dataIndex: "model",
    },
    {
      title: "Available for rental",
      dataIndex: "rental",
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
              <PlusOutlined style={{ color: "green" }} /> Create Aircraft
            </Button>
          </Space>
        </Col>
      </Row>
      {showAlert ?(
       <Row justify="center" style={{ margin: 10 }}>
       <Alert
            message="The Aircraft has been"
            closable
            onClose={() => setShowAlert(false)}
            style={{ width: "60%" , marginRight:"150px"}}
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
        Aircraft
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
                dataSource={getAircraft.filter((d) => d.active)}
                size="small"
              />
            </TabPane>
            <TabPane tab="Deactivated" key="2">
              <Table
                columns={Decolumns}
                pagination={false}
                dataSource={getAircraft.filter((d) => !d.active)}
                size="small"
              />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
