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

export default function UpdateCancelReason() {
  let { key } = useParams();

  const [loading, setLoading] = useState(true);

  const [form] = Form.useForm();
  
  const [data, setData] = useState({});
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  useEffect(() => {
    get("CancelReason", key)
      .then((d) => {
        setData(d);
        form.setFieldsValue(d);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const doupdateCancelReason = (values) => {
    setLoading(true);

    let v = { ...values };
    v.key = data.key;
    v.active = data.active;
    v.active = data.active;
v.schoolFlight = data.schoolFlight;
v.operation = data.operation;
v.rental = data.rental;
v.classTheory = data.classTheory;
v.progressTest = data.progressTest;
v.theoryRelease = data.theoryRelease;
v.exam = data.exam;
v.typeQuestionnaire = data.typeQuestionnaire;
v.extraTheory = data.extraTheory;

    let alloptions=["schoolFlight","operation","rental","classTheory","progressTest","theoryRelease","exam","typeQuestionnaire","extraTheory"]
    alloptions.forEach(o=>{
      if(values.roles.includes(o)){
        v[o]=true
      }
      else{
        v[o]=false
      }
    })
//    delete data.roles  




    edit(v, "CancelReason", key)
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
  const options = [
    { label: "School flight", value: "schoolFlight" },
    { label: "Operation", value: "operation" },
    { label: "Rental", value: "rental" },
  ];
  const theoryOptions = [
    { label: "Class theory", value: "classTheory" },
    { label: "Progress test", value: "progressTest" },
    { label: "Theory release", value: "theoryRelease" },
    { label: "Exam", value: "exam" },
    { label: "Type questionnaire", value: "typeQuestionnaire" },
    { label: "Extra theory", value: "extraTheory" },
  ];
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
            Update Cancellation reason
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row justify="start">
        <Col>
          <Form
            form={form}
            name="register"
            onFinish={doupdateCancelReason}
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

            <Form.Item
              name="name"
              label={
                <label style={{ fontWeight: "bold" }}>
                  Appears when cancelling bookings of type:
                </label>
              }
              style={{
                marginLeft: "460px",
              }}
            ></Form.Item>

<Form.Item
                name="roles"
                style={{
                  marginLeft: "460px",
                }}
              >
                <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
                <Space direction="vertical" size="large">
                  <Row>
                    <Space>{options.map(o=><Checkbox value={o.value}>{o.label}</Checkbox>)}</Space>
                  </Row>
                  <Row>
                    <Space>{theoryOptions.map(o=><Checkbox value={o.value}>{o.label}</Checkbox>)}</Space>
                  </Row></Space>
                </Checkbox.Group>
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
                }}
              >
                <CheckOutlined /> Update Cancellation reason
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
}
