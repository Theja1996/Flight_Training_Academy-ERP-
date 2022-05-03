import React, { useEffect, useState } from "react";
import {
  Form,
  Space,
  Col,
  Row,
  Divider,
  Typography,
  DatePicker,
  Button,
} from "antd";
import { CheckOutlined } from "@ant-design/icons";

export default function AddSitting() {
  const { Title } = Typography;
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);
  const [change, setChange] = useState(false);

  return (
    <>
      <Row justify="center" style={{ marginTop: "10px" }}>
        <Col span={14}>
          <Row justify="space-between">
            <Space direction="horizontal">
              <Title
                style={{
                  fontSize: "24px",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                Add Sitting
              </Title>
              <Title
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginTop: "15px",
                  marginLeft: "640px",
                }}
              >
                (UTC+05:00)
              </Title>
            </Space>
          </Row>
          <Divider style={{ marginTop: "-10px" }} />

          <Form
            name="register"
            form={form}
            onFinish={(values) => console.log(values)}
            onFieldsChange={() => setChange(!change)}
          >
            <Row justify="start">
              <Space direction="vertical">
                <Form.Item label="Starts at" name="starts_at ">
                  <DatePicker />
                </Form.Item>

                <Form.Item label=" Ends at" name="ends_at">
                  <DatePicker />
                </Form.Item>
              </Space>
            </Row>

            <Form.Item style={{ float: "left", marginLeft: "60px" }}>
              <Button
                htmlType="submit"
                icon={
                  <CheckOutlined
                    style={{ color: "#5cb85c", fontWeight: "bold" }}
                  />
                }
              >
                Save Sitting
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
