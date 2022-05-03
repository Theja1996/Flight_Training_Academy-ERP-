import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Table, Switch, Tabs } from "antd";
import { edit, getAll } from "../../../utils/APIUtils";
import { FaArrowsAltV, FaPencilAlt } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

export default function CancelReason() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [getCancelReason, setgetCancelReason] = useState([]);
  const { TabPane } = Tabs;

  function onChange(record) {
    setLoading(true);
    record.active = !record.active;
    alert(
      "Are you sure, that you want to deactivate cancellation reason:" +
        record.name +
        "?"
    );

    edit(record, "CancelReason", record.key).then(() => {
      getAll("CancelReason").then(
        (result) => setgetCancelReason(result),
        setLoading(false)
      );
    });
  }
  function handleEdit(data) {
    history.push({
      pathname:"/CancelReasons/" + data.key + "/edit",
    state: { detail: data },
  });}
  function handleCreate(data) {
    history.push({
      pathname: "/CancelReasons/new",
      state: { detail: data },
    });
  }

  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
    getAll("CancelReason")
      .then((result) => {
        

        let alloptions=["schoolFlight","operation","rental","classTheory","progressTest","theoryRelease","exam","typeQuestionnaire","extraTheory"]
        result.forEach(r=>{
          alloptions.forEach(k=>{
            if(r.roles?.includes(k)){
              r[k]=true
            }
            else{
              r[k]=false
            }
          })
        })
        
        setgetCancelReason(result)
        setLoading(false)
      })
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
      title: "School flight",
      dataIndex: "schoolFlight",
    
      render: (text, record) => 
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
      
    },

    {
      title: "Operation",
      dataIndex: "operation",

      render: (text, record) => 
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
      
    },

    {
      title: "Rental",
      dataIndex: "rental",

      render: (text, record) => 
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
      
    },
    {
      title: "Class theory",
      dataIndex: "classTheory",

      render: (text, record) => 
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
      
    },
    {
      title: "Progress test",
      dataIndex: "progressTest",

      render: (text, record) => 
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
      
    },
    {
      title: "Theory release",
      dataIndex: "theoryRelease",

      render: (text, record) => 
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
      
    },
    {
      title: "Exam",
      dataIndex: "exam",

      render: (text, record) => 
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
      
    },
    {
      title: "Type questionnaire",
      dataIndex: "typeQuestionnaire",

      render: (text, record) => 
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
      
    },
    {
      title: "Extra theory",
      dataIndex: "extraTheory",

      render: (text, record) => 
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
      
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
          //   onClick={() => handleEdit(record)}
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
      title: "School flight",
      dataIndex: "schoolFlight",

      render: (text, record) =>
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
    },

    {
      title: "Operation",
      dataIndex: "operation",

      render: (text, record) =>
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
    },

    {
      title: "Rental",
      dataIndex: "rental",

      render: (text, record) =>
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
    },
    {
      title: "Class theory",
      dataIndex: "classTheory",

      render: (text, record) =>
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
    },
    {
      title: "Progress test",
      dataIndex: "progressTest",

      render: (text, record) =>
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
    },
    {
      title: "Theory release",
      dataIndex: "theoryRelease",

      render: (text, record) =>
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
    },
    {
      title: "Exam",
      dataIndex: "exam",

      render: (text, record) =>
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
    },
    {
      title: "Type questionnaire",
      dataIndex: "typeQuestionnaire",

      render: (text, record) =>
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
    },
    {
      title: "Extra theory",
      dataIndex: "extraTheory",
      render: (text, record) =>
        text ? <TiTick style={{ color: "#0dbe16", fontSize: "24px" }} /> : "",
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
              <PlusOutlined style={{ color: "green" }} /> Create Cancellation
              reason
            </Button>
          </Space>
        </Col>
      </Row>

      <Row
        style={{
          fontWeight: "bold",
          marginLeft: "315px",
          marginTop: "15px",
          fontSize: "18px",
        }}
      >
        Cancellation reason
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
                dataSource={getCancelReason.filter((d) => d.active)}
                size="small"
              />
            </TabPane>
            <TabPane tab="Deactivated" key="2">
              <Table
                columns={Decolumns}
                pagination={false}
                dataSource={getCancelReason.filter((d) => !d.active)}
                size="small"
              />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
