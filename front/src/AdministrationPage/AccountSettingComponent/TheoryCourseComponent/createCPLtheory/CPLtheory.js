import React from "react";

import "../../../AccountSettingComponent/TheoryCourseComponent/CreateATPLAtheory/ATPLAtheory.css";
import {
  Button,
  Dropdown,
  Table,
  Row,
  Col,
  Divider,
  Collapse,
  Tabs,
  Switch,
  Form,
  Input,
  Checkbox,
  Select,
} from "antd";

export default function CPLtheory() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
   
      <Row style={{ marginTop: 20 }}>
        <Col style={{ display: "flex" }} span={12} offset={6}>
          <h3 style={{ fontWeight: "bold" }}>Create Theory category</h3>
        </Col>
      </Row>
      <Divider></Divider>
      <Row style={{ marginTop: 20 }}>
        <Col style={{ display: "flex" }} span={12} offset={6}>
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label=""
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <p>Eg. Aerodynamics or meteorology</p>
            </Form.Item>

            <div style={{ display: "flex", gap: 20 }}>
              <Form.Item
                label="Total Time"
                name="hour"
                rules={[{ required: true, message: "Please input your max!" }]}
              >
                <Input style={{ width: 100 }} type="number" />:
              </Form.Item>

              <Form.Item
                label=""
                name="minitues"
                rules={[{ required: true, message: "Please input your max!" }]}
              >
                <Input style={{ width: 100 }} type="number" /> (hours:minutes)
              </Form.Item>
            </div>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create theory course
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
