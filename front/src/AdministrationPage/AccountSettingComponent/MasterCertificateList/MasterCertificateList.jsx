import React, { useEffect, useState } from "react";

import { Button, Col, Row, Space, Table, Switch, Tabs } from "antd";

import { getAll } from "../../../utils/APIUtils";
import { FaFile, FaPencilAlt, FaRegCalendarAlt } from "react-icons/fa";

import { IoIosSpeedometer } from "react-icons/io";

import { useHistory } from "react-router-dom";
import { PlusOutlined } from "@ant-design/icons";

export default function MasterCertificateList() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);

  const [visible2, setvisible2] = useState(false);
  const [rowKey, setrowKey] = useState();

  const [getMasterCertificateList, setgetMasterCertificateList] = useState([]);

  const { TabPane } = Tabs;
  const certificationOptions = {
    medical_doc_cal: "Medical (include 1, 2 and LAPL)",
    radio_doc_cal: "Radio (include level 1-6)",
    certificate_doc_cal: "Certificate",
    certificate_doc: "Certificate",
    certificate_cal: "Certificate",
    certificate: "Certificate",
  };

  function onChange(deleteid) {
    setrowKey(deleteid);
    setvisible2(true);
    console.log(`switch to ${deleteid}`);
  }
  function handleEdit(data) {
    history.push("/MasterCertificateLists/" + data.key + "/edit");
  }
  function handleCreate(data) {
    history.push({
      pathname: "/MasterCertificateLists/new",
      state: { detail: data },
    });
  }

  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
    getAll("MasterCertificateList")
      .then((result) => setgetMasterCertificateList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  function getCertificationOptions(text) {

    if(text) {
  
      return (
        <>
          {certificationOptions[text]}
          {text.includes("_doc") ? <FaFile style={{ float: "right" }} /> : null}
          {text.includes("_cal") ? (
            <FaRegCalendarAlt style={{ float: "right" }} />
          ) : null}
        </>
      );
    }
    

  }

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
      dataIndex: "certificateType",
      key: "certificateType",
      render: text => getCertificationOptions(text),
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
          defaultChecked
          onChange={() => onChange(record.key)}
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
          onChange={() => onChange(record.key)}
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
              <PlusOutlined style={{ color: "green" }} /> Create Certificate
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
        Master certificate list
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
                dataSource={getMasterCertificateList}
                size="small"
              />
            </TabPane>
            <TabPane tab="Deactivated" key="2">
              <Table
                columns={Decolumns}
                pagination={false}
                dataSource={getMasterCertificateList}
                size="small"
              />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
