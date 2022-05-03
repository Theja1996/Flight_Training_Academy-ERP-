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
import TextArea from "antd/lib/input/TextArea";
  
 
  
  export default function UpdateOperations() {
    let { key } = useParams();
  
  
  
    const [loading, setLoading] = useState(true);
  
    const [form] = Form.useForm();
 
    const [data, setData] = useState({});
  
    useEffect(() => {
      get("Operations", key)
        .then((d) => {
          setData(d);
          form.setFieldsValue(d);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);
  
  
    const doupdateCustomers = (values) => {
      setLoading(true);
  
      let v = { ...values };
      v.key = data.key;
      v.active = data.active;
  
      edit(v, "Operations", key)
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
              Update Operations
            </h1>
            <Divider style={{ marginTop: "-10px" }} />
          </Col>
        </Row>
        <Row justify="start">
          <Col>
            <Form
              form={form}
              name="register"
              onFinish={doupdateCustomers}
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
                <Input   style={{
                 width:300,
                }} />
              </Form.Item>

              <Form.Item
                name="note"
                label="Note"
                style={{
                  marginLeft: "420px",
                }}
              >
             <TextArea rows={16} />
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
                    marginLeft: "335px",
                  }}
             
                >
                  <CheckOutlined /> Update Operations
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      
      </>
    );
  }
  