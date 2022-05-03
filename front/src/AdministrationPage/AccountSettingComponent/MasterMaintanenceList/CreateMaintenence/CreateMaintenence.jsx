import {
  Col,
  Row,
  Input,
  Divider,
  Form,
  Button,
  Checkbox,
  notification,
  Card,
  Space,
  Select,
} from "antd";
import React, { useState } from "react";
import { add, getMaxId } from "../../../../utils/APIUtils";
import { CheckOutlined } from "@ant-design/icons";
import {
  FaCalendar,
  FaFile,
  FaHashtag,
  FaRegCalendarAlt,
  FaRoad,
} from "react-icons/fa";
import ColorPicker from "../../../../components/ColorPicker/ColorPicker";
import { MdTimer } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";

export default function CreateMaintenence() {
  const [form] = Form.useForm();
  const { Option } = Select;
  const [loading, setLoading] = useState(false);

  const [color, setcolor] = useState();
  const [colorvalue2, setcolorvalue2] = useState();
  const [colorvalue3, setcolorvalue3] = useState();
const [roles, setroles] = useState();


  function doCreateCreateMaintenence(values) {
    Object.keys(values).forEach(k=>{
      if(!values[k]){
        values[k]=false
      }
    })
    setLoading(true);
    getMaxId("MasterMaintanenceList")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;
        v.active = true;
    v.expiresDate = roles;
       

        add(v, "MasterMaintanenceList")
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

  // const options = [
  //   { label:(<><FaRegCalendarAlt /> Expires on date</>),value: "expiresDate",},
  //   { label: "Expires on time", value: "expiresTime" },
  //   { label: (<><FaRoad />  Expires on cycles</>), value: "expiresCycles" },
  // ];
  // const documentOptions = [
  //   { label:(<><FaFile />  Require upload of document</>) , value: "document" },
  //   { label:(<><FaHashtag />  Require serial number</>) , value: "serialNumber" },
  // ];
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
            Create maintenance
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row>
        <Form
          name="register"
          form={form}
          onFinish={doCreateCreateMaintenence}
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

              <Space direction="vertical" size="small">
                <Row
                  justify="center"
                  style={{
                    marginLeft: "400px",
                  }}
                >
                  <Space>
                    <Form.Item name="expiresDate"   >
                      <Checkbox  >
                        <FaRegCalendarAlt /> Expires on date
                      </Checkbox>
                    </Form.Item>

                    <Form.Item name="expiresTime">
                      <Checkbox > Expires on time</Checkbox>
                    </Form.Item>

                    <Form.Item name="expiresTime">
                      <Select style={{ width: 120 }}>
                        <Option value="airborne">
                          <MdTimer /> airborne
                        </Option>
                        <Option value="tacho">
                          <IoIosSpeedometer /> tacho
                        </Option>
                      </Select>
                    </Form.Item>

                    <Form.Item name="expiresDate">
                      <Checkbox onChange={onChange}>
                        <FaRoad /> Expires on cycles
                      </Checkbox>
                    </Form.Item>
                  </Space>
                </Row>
                <Row
                  style={{
                    marginLeft: "400px",
                  }}
                >
                  <Space>
                   
                    <Form.Item name="document">
                      <Checkbox onChange={onChange}>
                        <FaFile /> Require upload of document
                      </Checkbox>
                    </Form.Item>
                    <Form.Item name="serialNumber">
                      <Checkbox onChange={onChange}>
                        <FaHashtag /> Require serial number
                      </Checkbox>
                    </Form.Item>
                  </Space>
                </Row>
              </Space>

             
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
                Default warnings
              </h1>
              <Divider style={{ marginTop: "-10px" }} />
            </Col>
          </Row>

          <Row justify="center">
            <Card
              bordered={false}
              style={{
                width: 900,
                backgroundColor: " #ececec",
                height: "100%",
                display: "block",
              }}
            >
              <Form.Item
                label={
                  <label style={{ fontWeight: "bold" }}>
                    A colored warning will appear when a certificate is:
                  </label>
                }
              >
              
              </Form.Item>
              <Row justify="space-between">
          <Col>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gab: 10,
                justifySelf: "left",
              }}
            >
              <label style={{ fontWeight: "bold" }}> Missing</label>
              <Form.Item name="miss_color">
                <ColorPicker value="#f2dede" />{" "}
              </Form.Item>
            </div>
          </Col>
          <Col>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gab: 10,
                justifySelf: "left",
              }}
            >
              <label style={{ fontWeight: "bold" }}> Expired</label>
              <Form.Item name="miss_color">
                <ColorPicker value="#f2dede" />{" "}
              </Form.Item>
            </div>
          </Col>{" "}
          <Col>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gab: 10,
              }}
            >
              <label style={{ fontWeight: "bold" }}>Requiring approval</label>
              <Form.Item name="req_color">
                <ColorPicker value="#d9edf7" />{" "}
              </Form.Item>
            </div>
          </Col>
        </Row>
            </Card>
          </Row>
          <Form.Item>
            <Button
              loading={loading}
              htmlType="submit"
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                borderRadius: "4px",
                marginTop: "10px",
                marginLeft: "-30px",
              }}
            >
              <CheckOutlined style={{fontWeight:"bold"}} /> Create maintenance
            </Button>
          </Form.Item>
        </Form>
      </Row>
    </>
  );
}
