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
  Tooltip,
  notification,
} from "antd";
import React, { useEffect, useState } from "react";

import { add, getMaxId, remove_key } from "../../../../utils/APIUtils";
import { CheckOutlined, CloseOutlined, PlusOutlined } from "@ant-design/icons";

export default function CreateCustomers() {
  const [form] = Form.useForm();

  const [loading, setLoading] = useState(false);

  function doCreateCustomers(values) {
    setLoading(true);
    getMaxId("Customers")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;
        v.active = true;

        add(v, "Customers")
          .then(() => {
            setLoading(false);
            notification["success"]({
              message: "Added Successfully",
            });
            form.resetFields();
          })
          .catch((error) => {
            setLoading(false);
            notification["error"]({
              message: error,
            });
          });
      })
      .catch((error) => {
        setLoading(false);
        notification["error"]({
          message: error,
        });
      });
    console.log(values);
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
            Create Customers
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row>
        <Form
          name="register"
          form={form}
          onFinish={doCreateCustomers}
          style={{ width: "100%" }}
          scrollToFirstError
        >
          <Row justify="space-between">
            <Col>
              <Form.Item
                name="name"
                label="Company"
                style={{
                  marginLeft: "400px",
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="full_name"
                label="Full name"
                style={{
                  marginLeft: "400px",
                }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Phone number"
                style={{
                  marginLeft: "368px",
                }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                style={{
                  marginLeft: "420px",
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="address"
                label="Address"
                style={{
                  marginLeft: "410px",
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="postCode"
                label="Post code"
                style={{
                  marginLeft: "400px",
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="city"
                label="City"
                style={{
                  marginLeft: "438px",
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item>
                <Button
                  loading={loading}
                  htmlType="submit"
                  style={{
                    backgroundColor: "#5cb85c",
                    color: "white",
                    borderRadius: "4px",
                    marginTop: "10px",
                    marginLeft: "460px",
                  }}
                >
                  <CheckOutlined /> Create Customers
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  );
}
