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
  
 
  
  export default function UpdateAirport() {
    let { key } = useParams();
  
  
  
    const [loading, setLoading] = useState(true);
  
    const [form] = Form.useForm();
 
    const [data, setData] = useState({});
  
    useEffect(() => {
      get("Airport", key)
        .then((d) => {
          setData(d);
          form.setFieldsValue(d);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
  
    const doupdateAirport = (values) => {
      setLoading(true);
  
      let v = { ...values };
      v.key = data.key;
      v.active = data.active;

      edit(v, "Airport", key)
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
  
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const onFinish = (values) => {
      console.log("Success:", values);
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
              Update Airport
            </h1>
            <Divider style={{ marginTop: "-10px" }} />
          </Col>
        </Row>
        <Row justify="start">
          <Col>
            <Form
              form={form}
              name="register"
              onFinish={doupdateAirport}
              onFinishFailed={onFinishFailed}
            >
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
  
           
  
              <Form.Item  >
                <Button
                loading={loading}
                htmlType="submit"
                  style={{
                    backgroundColor: "#5cb85c",
                    color: "white",
                    borderRadius: "4px",
                    marginTop: "10px",
                    marginLeft: "430px",
                  }}
                
                >
                  <CheckOutlined /> Update Airport
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      
      </>
    );
  }
  