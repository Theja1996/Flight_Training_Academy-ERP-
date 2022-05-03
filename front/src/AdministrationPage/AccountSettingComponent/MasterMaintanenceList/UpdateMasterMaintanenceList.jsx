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
import { FaCalendar, FaFile, FaHashtag, FaRegCalendarAlt, FaRoad } from "react-icons/fa";
import ColorPicker from "../../../components/ColorPicker/ColorPicker";
import { IoIosSpeedometer } from "react-icons/io";
import { MdTimer } from "react-icons/md";
export default function UpdateMasterMaintanenceList() {
  let { key } = useParams();

  const [loading, setLoading] = useState(true);
  const { Option } = Select;
  const [form] = Form.useForm();
 // const [roles, setroles] = useState();
  const [roles, setRoles] = useState([]);
  const [data, setData] = useState({});
  const [theory, setTheory] = useState([]);
  const [color, setcolor] = useState();
  const [colorvalue2, setcolorvalue2] = useState();
  const [colorvalue3, setcolorvalue3] = useState();

  useEffect(() => {
    get("MasterMaintanenceList", key)
      .then((d) => {
        setData(d);
        form.setFieldsValue(d);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const doupdateMasterMaintanenceList = (values) => {
    setLoading(true);

    let v = { ...values };
    v.key = data.key;
    v.active =data.active;

    edit(v, "MasterMaintanenceList", key)
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

  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
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
        Update Maintenance
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row>
        <Form
          name="register"
          form={form}
          onFinish={doupdateMasterMaintanenceList}
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
                    <Form.Item name="expiresDate">
                      <Checkbox   onChange={setRoles}>
                        <FaRegCalendarAlt /> Expires on date
                      </Checkbox>
                    </Form.Item>

                    <Form.Item name="expiresTime">
                      <Checkbox onChange={onChange}> Expires on time</Checkbox>
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
                  marginTop: "40px",
                }}
                //   onClick={doUpdateProgram}
              >
                <CheckOutlined /> Update Maintenance
              </Button>
            </Form.Item>
        </Form>
      </Row>

    </>
  );
}
