import { Col, Row, Input, Divider, Form, Button, notification } from "antd";
import React, { useState } from "react";
import { add, getMaxId } from "../../../../utils/APIUtils";
import { CheckOutlined } from "@ant-design/icons";

export default function CreateClassRoom() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  function doCreateClassRoom(values) {
    setLoading(true);
    getMaxId("Airport")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;
        v.active = true;

        add(v, "ClassRoom")
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
            Create Classroom
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row>
        <Form
          name="register"
          form={form}
          onFinish={doCreateClassRoom}
          style={{ width: "100%" }}
          scrollToFirstError
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

              <Form.Item>
                <Button
                  loading={loading}
                  htmlType="submit"
                  style={{
                    backgroundColor: "#5cb85c",
                    color: "white",
                    borderRadius: "4px",
                    marginTop: "10px",
                    marginLeft: "445px",
                  }}
                >
                  <CheckOutlined /> Create Classroom
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  );
}
