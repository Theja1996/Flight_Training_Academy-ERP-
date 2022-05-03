import React, { useEffect, useState } from "react";
import { Button, Col, Row, Space, Table, Switch, Tabs, Alert } from "antd";
import { edit, getAll } from "../../../utils/APIUtils";
import { FaArrowsAltV, FaPencilAlt, FaRegClone } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

export default function TheoryCourse() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [getAirport, setgetAirport] = useState([]);
  const [showAlert, setShowAlert] = useState(false);
  const { TabPane } = Tabs;
  const [masterClassList, setMasterClassList] = useState([]);

  function onChange(record) {
    setLoading(true);
    record.active = !record.active;
    setShowAlert(true);
    edit(record, "TheoryCourse", record.key).then(() => {
      getAll("TheoryCourse").then(
        (result) => setgetAirport(result),
        setLoading(false)
      );
    });
  }
  function handleEdit(data) {
    history.push("/theory_courses/" + data.key + "/edit");
  }
  function handleCreate(data) {
    history.push({
      pathname: "/theory_courses/new",
      state: { detail: data },
    });
  }
  function handleCreatecategory(data) {
    history.push({
      pathname: "/theory_courses/subject_categories/new",
      state: { detail: data },
    });
  }
  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
    getAll("TheoryCourse")
      .then((result) => setgetAirport(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }

  const renderContent = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  };
  //   useEffect(() => {
  //     getAll("TheoryCourse")
  //       .then((result) => setMasterClassList(result), setLoading(false))
  //       .catch((error) => console.log(error));
  //   }, []);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      bordered: false,
  
    },
    {
      title: (
        <Button
          onClick={(record) => handleEdit(record)}
          type="text"
          icon={<FaRegClone style={{ color: "#f39c12" }} />}
        />
      ),
      dataIndex: "other",
       
      render: (text, record) => (
        <Button
          onClick={() => handleEdit(record)}
          type="text"
          icon={<FaRegClone style={{ color: "#f39c12" }} />}
        />
      ),
          
    },
    {
      title:(text, record) => (
        <Switch
          size="small"
          style={{ width: 20, color: "lightgreen" }}
            checked
          onChange={() => onChange(record)}
        />
      ),
      dataIndex: "other",
        
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
      title: (
        <Button
          onClick={(record) => handleEdit(record)}
          type="text"
          icon={<FaPencilAlt style={{ color: "#1394e4" }} />}
        />
      ),
      dataIndex: "edit",
      // colSpan: 2,
      render: (text, record) => (
        <Button
          onClick={() => handleEdit(record)}
          type="text"
          icon={<FaPencilAlt style={{ color: "#1394e4" }} />}
        />
      ),
    },
    {
      title: (
        <Button
          type="text"
          icon={<FaArrowsAltV style={{ color: "#1394e4" }} />}
        />
      ),
      dataIndex: "other",
      //     colSpan: 0,
      render: (text, record) => (
        <Button
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
              <PlusOutlined style={{ color: "green" }} /> Create Theory Course
            </Button>
          </Space>
        </Col>
      </Row>
      {showAlert ? (
        <Row justify="center" style={{ margin: 10 }}>
          <Alert
            message="The Theory Course has been "
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
        Theory Course
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
                dataSource={getAirport.filter((d) => d.active)}
                size="small"
                draggable={true}
              />
            </TabPane>
            <TabPane tab="Deactivated" key="2">
              <Table
                columns={columns}
                pagination={false}
                dataSource={getAirport.filter((d) => !d.active)}
                size="small"
              />
            </TabPane>
          </Tabs>
        </Col>
        
       
      </Row>
      <Row> <Button onClick={() => handleCreatecategory()}  style={{
            marginLeft: "315px",
          }}>
              <PlusOutlined style={{ color: "green" }} /> Create Theory category in 'PPL(A)'
            </Button></Row>
    </>
  );
}
