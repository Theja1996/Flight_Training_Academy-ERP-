import React, { useEffect, useState } from "react";

import { Button, Col, Divider, Form, notification, Row, Tabs } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import Certificatereq from "../../../components/Certificatereq";
import { add, getAll, getMaxId } from "../../../utils/APIUtils";

export default function RenterRequirment() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { TabPane } = Tabs;
  

  function doUpdateRequirements(values) {
    setLoading(true);
    getMaxId("Certificate")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;

        add(v, "Certificate")
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
      <Row justify="center " style={{ marginTop: "10px" ,width:"100%"}}>
        <Col span={14} >
        <Tabs type="card">
            <TabPane
              tab={
                <tab style={{ color: "black" }}>Certificate requirements</tab>
              }
              key="1"
            />
          </Tabs> 
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "15px",
              textAlign: "start",
            }}
          >
            Create Program
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Form name="register" form={form} onFinish={doUpdateRequirements}>
    <Row justify="start">  <Form.Item>     <Certificatereq />    </Form.Item></Row> 
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
            <CheckOutlined /> Update Requirements
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
