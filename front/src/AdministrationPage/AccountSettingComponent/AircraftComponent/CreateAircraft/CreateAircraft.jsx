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
  Card,
  Space,
  InputNumber,
  notification,
} from "antd";
import React, { useEffect, useState } from "react";

import { add, getMaxId } from "../../../../utils/APIUtils";
import { CheckOutlined } from "@ant-design/icons";
import { GoDash } from "react-icons/go";
import { BiDotsVerticalRounded } from "react-icons/bi";

export default function CreateAircraft() {
  const [form] = Form.useForm();

  const { Option } = Select;
  const { Panel } = Collapse;
  const [loading, setLoading] = useState(false);
  const [change, setChange] = useState(false);

  useEffect(() => {
    form.setFieldsValue({ rental: true, PFvalue:"pilot Flying",enable_taxi_time: true ,warning:10, taxiOut:10,taxiIn:5 ,airborne_val:0,landings:0,airborne:0,fuelSingle:0.0,fuelSingle_type:"L",fuelSingle_time:"Block",home:"VRMG",current:"VRMG"});
    setChange(!change);
  }, []);

  function doCreateAircraft(values) {
    Object.keys(values).forEach((k) => {
      if (!values[k]) {
        values[k] = false;
      }
    });
    setLoading(true);
    getMaxId("Aircraft")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;
        v.active = true;
        add(v, "Aircraft")
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
            Create Aircraft
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row>
        <Form
          name="register"
          form={form}
          onFinish={doCreateAircraft}
          style={{ width: "100%" }}
          scrollToFirstError
          onFieldsChange={() => setChange(!change)}
          // initialValues={{"rental":true,"enable_taxi_time":true}}

          //     onValuesChange={handleFormChange}
        >
          <Row justify="space-between">
            <Col>
              <Form.Item
                name="callSign"
                label="Callsign"
                rules={[{ required: true }]}
                style={{
                  marginLeft: "400px",
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="model"
                label="Model"
                rules={[{ required: true }]}
                style={{
                  marginLeft: "410px",
                }}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="type"
                label="Type"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  marginLeft: "420px",
                }}
              >
                <Select allowClear>
                  <Option value=""></Option>
                  <Option value="airplane">Airplane</Option>
                  <Option value="helicopter">Helicopter</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="className"
                label="Class"
                rules={[
                  {
                    required: true,
                  },
                ]}
                style={{
                  marginLeft: "420px",
                }}
              >
                <Select allowClear>
                  <Option value=""></Option>
                  <Option value="Single-engine">Single-engine</Option>
                  <Option value="Multi-engine">Multi-engine</Option>
                  <Option value="Simulator">Simulator</Option>
                </Select>
              </Form.Item>
              {form.getFieldValue("className") === "Single-engine" ||
              form.getFieldValue("className") === "Multi-engine" ? (
                <Row>
                  <Space direction="horizontal">
                    <Form.Item
                      name="fuelSingle"
                      label="Fuel coefficient"
                      style={{
                        marginLeft: "370px",
                      }}
                    >
                      <InputNumber
                        style={{ width: 75 }}
                        //      step="0.0"
                      />
                    </Form.Item>
                    <Form.Item name="fuelSingle_type">
                      <Select
                        allowClear
                        style={{ width: 75 }}
                      >
                        <Option value="L">L</Option>
                        <Option value="USG">USG</Option>
                      </Select>
                      per
                    </Form.Item>

                    <Form.Item name="fuelSingle_time">
                      <Select
                        allowClear
                        style={{ width: 100 }}
                       defaultValue="Block"
                      >
                        <Option value="Airborne">Airborne</Option>
                        <Option value="Block">Block</Option>
                      </Select>
                      hour
                    </Form.Item>
                  </Space>
                </Row>
              ) : null}

              <Form.Item
                name="enable_taxi_time"
                label="Enable taxi time"
                style={{
                  marginLeft: "365px",
                }}
                valuePropName="checked"
              >
                <Checkbox
                  style={{
                    marginLeft: "-165px",
                  }}
                />
              </Form.Item>
              {form.getFieldValue("enable_taxi_time") ? (
                <>
                  <Form.Item
                    name="taxiOut"
                    label="Default taxi out"
                    style={{ marginLeft: "360px", display: "flex" }}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      max={20}
                      style={{ marginLeft: "-135px", width: 50 }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="taxiIn"
                    label="Default taxi in"
                    style={{ marginLeft: "370px" }}
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber
                      min={0}
                      max={20}
                      style={{ marginLeft: "-135px", width: 50 }}
                    />
                  </Form.Item>
                </>
              ) : null}

              {form.getFieldValue("className") === "Simulator" ? (
                <Form.Item
                  name="rentalSlots"
                  label="Enable rental slots"
                  style={{
                    marginLeft: "350px",
                  }}
                >
                  <Checkbox
                    style={{
                      marginLeft: "-165px",
                    }}
                  />
                </Form.Item>
              ) : null}

              <Form.Item
                name="rental"
                label="Enable rental"
                valuePropName="checked"
                style={{
                  marginLeft: "385px",
                }}
              >
                <Checkbox
                  style={{
                    marginLeft: "-165px",
                  }}
                />
              </Form.Item>
              <Form.Item
                name="enable_PM_PF"
                label="Enable PM/PF"
                valuePropName="checked"

                style={{
                  marginLeft: "380px",
                }}
              >
                <Checkbox
                  style={{
                    marginLeft: "-165px",
                  }}
                />
              </Form.Item>
              {form.getFieldValue("enable_PM_PF") ? (
                <Form.Item
                  name="PM/PFvalue"
                  label="Default PM/PF value"
                  style={{ marginLeft: "340px" }}
                >
                  <Select allowClear>
                    <Option value="pilot Flying">Pilot Flying</Option>
                    <Option value="pilot Monitoring">Pilot Monitoring</Option>
                    <Option value="notSpecified">Not specified</Option>
                  </Select>
                </Form.Item>
              ) : null}

              {form.getFieldValue("className") === "Simulator" ? (
                <Form.Item
                  name="SE/MEvalue"
                  label="Default SE/ME value"
                  style={{
                    marginLeft: "345px",
                  }}
                >
                  <Select allowClear>
                    <Option value="single-engine">Single-engine</Option>
                    <Option value="multi-engine">Multi-engine</Option>
                  </Select>
                </Form.Item>
              ) : null}

              {form.getFieldValue("className") === "Single-engine" ||
              form.getFieldValue("className") === "Multi-engine" ||
              form.getFieldValue("className") === "Simulator" ? (
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
                    <CheckOutlined /> Create Aircraft
                  </Button>
                </Form.Item>
              ) : null}
            </Col>
            <Col style={{ width: "45%" }}>
              <Card bordered style={{ width: 500 }}>
                <Form.Item
                  name="enable_tacho"
                  label=" Enable tacho"
                  valuePropName="checked"

                  style={{
                    marginLeft: "20px",
                  }}
                  >
                  <Checkbox
                    style={{
                      marginRight: "321px",
                    }}
                  />
                </Form.Item>
                {form.getFieldValue("enable_tacho") ? (
                  <Row style={{ marginTop: "10px" }}>
                    <Space direction="horizontal">
                      <Form.Item
                        name="tacho"
                        label="Total tacho"
                        style={{ marginLeft: "30px" }}
                      >
                        <InputNumber
                          style={{ marginLeft: "px", width: 75 }}
                          defaultValue={0}
                        />
                      </Form.Item>
                      <Form.Item>
                        <GoDash />
                      </Form.Item>
                      <Form.Item name="warning" label="Tacho warning">
                        <InputNumber
                          min={0}
                          max={100}
                          style={{ width: 75 }}
                          formatter={(value) => `${value}%`}
                        //  defaultValue={10}
                        />
                      </Form.Item>
                    </Space>
                  </Row>
                ) : null}
<Row>
                <Space direction="horizontal">
                  <Row>
                    <Form.Item
                      name="airborne"
                      label="Total airborne"
                      style={{ marginLeft: "12px" }}
                    >
                      <InputNumber style={{ width: 100 }}  />
                    </Form.Item>
                    <Form.Item>
                      <BiDotsVerticalRounded />
                    </Form.Item>
                    <Form.Item name="airborne_val">
                      <InputNumber style={{ width: 50 }}  />
                    </Form.Item>
                  </Row>
                </Space>
</Row>
                {form.getFieldValue("className") === "Single-engine" ||
                form.getFieldValue("className") === "Multi-engine" ? (
                  <>
                    <Space direction="horizontal">
                      <Form.Item
                        name="landings"
                        label="Total landings"
                        style={{
                          marginLeft: "-80px",
                        }}
                      >
                        <InputNumber
                          style={{ marginLeft: "-2px", width: 100 }}
                        />
                      </Form.Item>
                      <Form.Item
                        name="status"
                        label="Show in A/C status"
                        valuePropName="checked"

                        style={{}}
                      >
                        <Checkbox />
                      </Form.Item>
                    </Space>
                    <Form.Item
                      name="home"
                      label="Home airport"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      style={{
                        marginLeft: "8px",
                      }}
                    >
                      <Select
                        allowClear
                        style={{ marginLeft: "-243px", width: 100 }}
                      >
                        <Option value=""></Option>
                        <Option value="VRMG">VRMG</Option>
                        <Option value="VRMO">VRMO</Option>
                        <Option value="VRMR">VRMR</Option>
                        <Option value="VRMT">VRMT</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="current"
                      label=" Current airport"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                      style={{
                        marginLeft: "1px",
                      }}
                    >
                      <Select
                        allowClear
                        style={{ marginLeft: "-245px", width: 100 }}
                      >
                        <Option value=""></Option>
                        <Option value="VRMG">VRMG</Option>
                        <Option value="VRMO">VRMO</Option>
                        <Option value="VRMR">VRMR</Option>
                        <Option value="VRMT">VRMT</Option>
                      </Select>
                    </Form.Item>
                  </>
                ) : null}
              </Card>
            </Col>
          </Row>
        </Form>
      </Row>
    </>
  );
}
