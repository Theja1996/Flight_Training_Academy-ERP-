import {
  Col,
  Row,
  Input,
  Divider,
  Form,
  Button,
  Select,
  Checkbox,
  Collapse,
  Tabs,
  Card,
  Space,
  InputNumber,
  notification,
  Tooltip,
} from "antd";
import React, { useEffect, useState } from "react";
import { add, getMaxId, remove_key, edit, get } from "../../../utils/APIUtils";
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { useLocation, useParams } from "react-router-dom";
import Com from "./CreateCertificate/Com_Medi";
import ComRadio from "./CreateCertificate/Com_Radio";
import ComCertificate from "./CreateCertificate/Com_Certificate";
import { FaFile, FaRegCalendarAlt } from "react-icons/fa";
export default function UpdateMasterCertificateLists() {
  let { key } = useParams();
  const { Option } = Select;
  const [loading, setLoading] = useState(true);

  const [form] = Form.useForm();

  const [data, setData] = useState({});

  useEffect(() => {
    get("MasterCertificateList", key)
      .then((d) => {
        setData(d);
        form.setFieldsValue(d);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const doupdateMasterCertificateList = (values) => {
    setLoading(true);

    let v = { ...values };
    v.key = data.key;
    v.active = data.active;



    edit(v, "MasterCertificateList", key)
      .then(() => {
        setLoading(false);
        notification["success"]({
          message: "Updated Successfully",
        });
      })
      .catch((error) => {
        setLoading(false);
        notification["error"]({
          message: error,
        });
      });
  };

  if (loading) {
    return "loading ...";
  }

  return (
    <>
      <Row justify="center " style={{ marginTop: "10px" }}>
        <Col span={14}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "15px",
              textAlign: "start",
            }}
          >
            Update Maintenance
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row>
        <Form
          name="register"
          form={form}
          onFinish={doupdateMasterCertificateList}
          style={{ width: "100%" }}
          scrollToFirstError
          initialValues={{type:"1"}}
          onFinishFailed={onFinishFailed}

        >
          <Row justify="space-between">
            <Col>
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true }]}
                style={{
                  marginLeft: "400px",
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Type"
                name="type"
                rules={[{ required: true }]}
                style={{
                  marginLeft: "410px",
                }}
              >
                <Select
                  showSearch
                  style={{ width: 300 }}
                  // optionFilterProp="children"
                  // filterOption={(input, option) =>
                  //   option.children
                  //     .toLowerCase()
                  //     .indexOf(input.toLowerCase()) >= 0
                  // }
                  // filterSort={(optionA, optionB) =>
                  //   optionA.children
                  //     .toLowerCase()
                  //     .localeCompare(optionB.children.toLowerCase())
                  // }
                  
                >
                  <Option value="1">
                    Medical (include 1,2 and LAPL)
                    <FaFile style={{ float: "right" }} />{" "}
                    <FaRegCalendarAlt style={{ float: "right" }} />
                  </Option>
                  <Option value="2">
                    Radio (include level 1-6)
                    <FaFile style={{ float: "right" }} />{" "}
                    <FaRegCalendarAlt style={{ float: "right" }} />
                  </Option>
                  <Option value="3">
                    Certificate <FaFile style={{ float: "right" }} />{" "}
                    <FaRegCalendarAlt style={{ float: "right" }} />
                  </Option>
                  <Option value="4">
                    Certificate <FaRegCalendarAlt style={{ float: "right" }} />
                  </Option>
                  <Option value="5">
                    Certificate <FaFile style={{ float: "right" }} />
                  </Option>
                  <Option value="6">Certificate</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center " style={{ marginTop: "10px" }}>
            <Col span={14}>
              <h1
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "15px",
                  textAlign: "start",
                }}
              >
                Default warnings
              </h1>
              <Divider style={{ marginTop: "-10px" }} />
            </Col>
          </Row>
          {form.getFieldValue("1") ? (
            <Row justify="center">
              <Com />
            </Row>
          ) : null}

          {form.getFieldValue("2") ||
          form.getFieldValue("3") ||
          form.getFieldValue("4") ? (
            <Row justify="center">
              <ComRadio />
            </Row>
          ) : null}

          {form.getFieldValue("5") || form.getFieldValue("6") ? (
            <Row justify="center">
              <ComCertificate />
            </Row>
          ) : null}

          <Form.Item>
            <Button
              loading={loading}
              htmlType="submit"
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                borderRadius: "4px",
                marginTop: "40px",
              }}
            >
              <CheckOutlined /> Update Maintenance
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
}
