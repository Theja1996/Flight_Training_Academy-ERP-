import {
  Col,
  Row,
  Input,
  Divider,
  Form,
  Button,
  Checkbox,
  notification,
  Space,
} from "antd";
import React, { useState } from "react";
import { add, getMaxId } from "../../../../utils/APIUtils";
import { CheckOutlined } from "@ant-design/icons";

export default function CreateCancelReason() {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);


  function doCreateCancelReason(values) {
    setLoading(true);
    getMaxId("CancelReason")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;
        v.active = true;
        // let alloptions=["schoolFlight","operation","rental","classTheory","progressTest","theoryRelease","exam","typeQuestionnaire","extraTheory"]
        // alloptions.forEach(o=>{
        //   if(values.roles.includes(o)){
        //     v[o]=true
        //   }
        //   else{
        //     v[o]=false
        //   }
        // })

        add(v, "CancelReason")
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
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
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
            Create Cancellation reason
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row>
        <Form
          name="register"
          form={form}
          onFinish={doCreateCancelReason}
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
                    marginLeft: "-20px",
                  }}
                >
                  <CheckOutlined /> Create Cancellation reason
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  );
}
