import React, { useState } from "react";

import {
  UploadOutlined,
  CheckOutlined,
  PlusOutlined,
  InboxOutlined,
} from "@ant-design/icons";

import {
  Space,
  Button,
  Menu,
  Dropdown,
  Divider,
  Upload,
  Row,
  Col,
  Form,
  Select,
  DatePicker,
} from "antd";

const { Option } = Select;
export default function AddCertificate() {
  const [loading, setLoading] = useState(false);

  const fileList = [
    {
      uid: "1",
      name: "",
      status: "done",

      url:
        "https://d3pnebxvzlkgv3.cloudfront.net/Account/93/default_profile_image/111869/original/Screen_Shot_2017-12-18_at_10.09.31.png",
    },
  ];

  const normFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

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
            Create Certificate
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row justify="start">
        <Col
          //span={12}
          //   style={{
          //     marginLeft: "200px",
          //   }}
        >
          <Form>
            <Space direction="vertical">
              <Form.Item
                label="Certificate"
                name="certificate"
                rules={[{ required: true }]}
                style={{
                  marginLeft: "300px",
                }}
              >
                <Select
                  disabled
                  placeholder="Airport Pass"
                  // onChange={onCertificateChange}
                
                >
                  <Option value="male">Airport Pass</Option>
                </Select>
              </Form.Item>

              <Form.Item
               label="Expiration date"
                name="expirationdate"
                style={{
                  marginLeft: "285px",
                }}
              >
                <DatePicker  style={{
                  marginLeft: "-105px",
                }} />
              </Form.Item>
              <Space direction="horizontal">
                <Form.Item
                  name="upload"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                 
                >
                  <Upload name="logo" action="/upload.do" listType="picture">
                    <Button  style={{
                    marginLeft: "390px",
                  }}>
                     
                      <PlusOutlined style={{ color: "green" }} />
                      Add documents
                    </Button>
                  </Upload>
                </Form.Item>{" "}
                <Form.Item
                  name="dragger"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload.Dragger name="files" action="/upload.do">
                    <InboxOutlined />

                    <p>or drop here</p>
                  </Upload.Dragger>
                </Form.Item>
              </Space>
            </Space>
          </Form>
        </Col>
      </Row>
      <Row
        justify="start"
        style={{
          marginTop: "25px",
        }}
      >
        <Button
          loading={loading}
          style={{
            backgroundColor: "#5cb85c",
            color: "white",
            borderRadius: "4px",
            marginLeft: "390px",
            marginTop: "25px",
          }}
          htmlType="submit"
        >
          <CheckOutlined /> Create Certificate
        </Button>
      </Row>
    </>
  );
}
