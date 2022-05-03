import React, { useEffect, useState } from "react";

import { CheckOutlined, MedicineBoxOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  Collapse,
  Row,
  Col,
  Space,
  notification,
  Divider,
} from "antd";

import "react-phone-number-input/style.css";

import { edit } from "../utils/APIUtils";

import { useLocation } from "react-router-dom";

import "antd/dist/antd.css";



export default function EditClass() {
  const location = useLocation();
  const [form] = Form.useForm();
  const [classs, setclasss] = useState();
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue(location.state.detail);
  }, [location]);

 
 

  
 
  function doupdateClass(values) {
    setLoading(true);

    let v = { ...values };
    v.key = parseInt(location.state.detail.key);
    // v.programme = location.state.detail.programme;
     v.batch = location.state.detail.batch;
    // v.status = location.state.detail.status;
    v.classs = location.state.detail.classs;
    edit(v, "FlightClass", location.state.detail.key)
      .then(() => {
        setLoading(false);
        notification["success"]({
          message: "Updated Successfully",
        });
        // todo route to student profile
      })
      .catch((error) => {
        setLoading(false);
        notification["error"]({
          message: error,
        });
      });
  }

  return (
    <>
      <div
        style={{
          width: "940px",
          marginTop: 30,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Row
          justify="start"
          style={{
            marginTop: 5,
            marginBottom: 25,
          }}
        >
          <h1>Edit class</h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Row>
        <Row>
          <Form
            style={{ width: "100%" }}
            name="register"
            form={form}
            onFinish={doupdateClass}
            scrollToFirstError

             initialValues={{
           
            
           
            }}
          >
            <Row justify="start">
              <Col >
              

                <Form.Item
                 label="Name"
                name="name"
                 rules={[{ required: true }]}
              
                  style={{
                    paddingLeft: "35px",
                  }}
           
                >
                  <Input />
                </Form.Item>
               

                <Form.Item shouldUpdate={true}>
                  {() => (
                    <Button loading={loading}  style={{ backgroundColor: "#5cb85c", color: "white",marginLeft:"30px",
                    borderRadius: "4px",}}  htmlType="submit">
                      <CheckOutlined /> Save class
                    </Button>
                  )}
                </Form.Item>
              </Col>
             
            </Row>
          </Form>
        </Row>
      </div>
    </>
  );
}
