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
  
  
  export default function CreateTheory() {
    const [form] = Form.useForm();
  
  
    const [loading, setLoading] = useState(false);
  
    function doCreateAirport(values) {
      setLoading(true);
      getMaxId("TheoryCourse")
        .then((id) => {
          console.log(id);
          let v = { ...values };
          v.key = id;
          v.active = true;
  
          add(v, "TheoryCourse")
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
              Create Theory Course
            </h1>
            <Divider style={{ marginTop: "-10px" }} />
          </Col>
        </Row>
        <Row>
          <Form
            name="register"
            form={form}
            onFinish={doCreateAirport}
            style={{ width: "100%" }}
            scrollToFirstError
          >
            <Row justify="space-between">
            
              <Col>
                <Form.Item
                  name="name"
                  label="Name"

                  style={{
                    marginLeft: "400px",
                  }}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="max"
                  label="Max sittings"

                  style={{
                    marginLeft: "365px",
                  }}
                >
               <InputNumber min={0} 
                  style={{
                    marginLeft: "-100px",
                  }} />
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
                      marginLeft: "450px",
                    }}
                  >
                    <CheckOutlined /> Create Theory Course
                  </Button>
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
             Ground school warnings
            </h1>
            <Divider style={{ marginTop: "-10px" }} />
          </Col>
        </Row>
          </Form>
        </Row>
      </>
    );
  }
  