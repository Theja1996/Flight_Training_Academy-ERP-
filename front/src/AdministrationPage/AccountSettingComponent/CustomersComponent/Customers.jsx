import React, { useEffect, useState } from "react";

import {
  Button,
  Col,
  Row,
  Space,
  Table,
  Switch,
  Tabs,
  Menu,
  Dropdown,
} from "antd";
import { edit, getAll } from "../../../utils/APIUtils";
import {
  FaPencilAlt,
  FaRegFileCode,
  FaRegFileExcel,
  FaRegFilePdf,
} from "react-icons/fa";
import { useHistory } from "react-router-dom";
import {
  DownloadOutlined,
  DownOutlined,
  PlusOutlined,
} from "@ant-design/icons";

export default function Customers() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);
  const [getCustomers, setgetCustomers] = useState([]);
  const { TabPane } = Tabs;

  function onChange(record) {
    setLoading(true);
    record.active = !record.active;
    alert(
      "Are you sure, that you would like to deactivate customer:"+" "+ record.name +" ?"
    );
    edit(record, "Customers", record.key).then(() => {
      getAll("Customers").then(
        (result) => setgetCustomers(result),
        setLoading(false)
      );
    });
  }
  function handleEdit(data) {
    history.push("/Customers/" + data.key + "/edit");
  }
  function handleCreate(data) {
    history.push({
      pathname: "/Customers/new",
      state: { detail: data },
    });
  }

  function callback(key) {
    console.log(key);
  }

  useEffect(() => {
    getAll("Customers")
      .then((result) => setgetCustomers(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }
  const columns = [
    {
      title: "Company / Full name",
      dataIndex: "name",
      key: "Name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Phone number",
      dataIndex: "phone",
      key: "phone",
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
      title: "Company / Full name",
      dataIndex: "name",
      key: "Name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Phone number",
      dataIndex: "phone",
      key: "phone",
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
  const datacom = getCustomers.map((item) => ({
    key: item.key,

    name: item.name,
    phone: item.phone,
  }));
  const pdf = (
    <Menu>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFilePdf /> PDF..
      </Button>
      <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFileCode /> XML
      </Button>
      <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaRegFileExcel /> CSV (Excel)
      </Button>
    </Menu>
  );
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
              <PlusOutlined style={{ color: "green" }} /> Create Customers
            </Button>
          </Space>
        </Col>

        <Col span={6} offset={8}>
          <Space>
            <div>
              <Dropdown overlay={pdf} trigger={["click"]}>
                <Button>
                  <DownloadOutlined style={{ color: "#000000" }} />
                  Export as <DownOutlined />
                </Button>
              </Dropdown>

              <Button
                type="text"
                style={{
                  fontWeight: "bold",
                  fontSize: "17px",
                  pointerEvents: "none",
                }}
              ></Button>
            </div>
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
        Customers
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
                dataSource={getCustomers.filter((d) => d.active)}
                size="small"
              />
            </TabPane>
            <TabPane tab="Deactivated" key="2">
              <Table
                columns={Decolumns}
                pagination={false}
                dataSource={getCustomers.filter((d) => !d.active)}
                size="small"
              />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </>
  );
}
