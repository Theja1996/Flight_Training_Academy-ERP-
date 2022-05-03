import React, { useState } from "react";
import {
  Card,
  Row,
  Select,
  Space,
  Form,
  InputNumber,
  Button,
  Tooltip,
  Col,
} from "antd";
import ColorPicker from "../../../../components/ColorPicker/ColorPicker";
import { PlusOutlined } from "@ant-design/icons";
import Checkbox from "antd/lib/checkbox/Checkbox";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Com() {
  const { Option } = Select;

  const [visible, setVisible] = useState(true);
  const [visible_next, setVisible_next] = useState(true);

  const handleClose = (e) => {
    console.log(e);
    setVisible(false);
  };

  const handleClose_next = (e) => {
    console.log(e);
    setVisible_next(false);
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  return (
    <>
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
            name="level"
            label="Level"
            rules={[
              {
                required: true,
              },
            ]}
            style={{
              marginLeft: "50px",
            }}
          >
            <Select
              defaultValue="1"
              style={{ width: 100, marginLeft: "-650px" }}
            >
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="lapl">LAPL</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label={
              <label style={{ fontWeight: "bold" }}>
                A colored warning will appear when a certificate is:
              </label>
            }
          ></Form.Item>
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
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gab: 10,
                }}
              >
                <label style={{ fontWeight: "bold" }}> Expired</label>
                <Form.Item name="ex_color">
                  <ColorPicker value="#f2dede" />{" "}
                </Form.Item>
              </div>
            </Col>
            <Col>
              {" "}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gab: 10,
                }}
              >
                <label style={{ fontWeight: "bold" }}>Requiring approval</label>
                <Form.Item name="req_color">
                  <ColorPicker value="#f2dede" />{" "}
                </Form.Item>
              </div>
            </Col>
          </Row>

          <Row justify="center" style={{ fontWeight: "bold" }}>
            Date warnings
          </Row>

          <Row justify="center">
            <Space direction="vertical" size="small">
              {visible ? (
                <Card
                  style={{
                    width: "300px",
                    height: "75%",
                    backgroundColor: "#caeafa",
                    display: "flex",
                  }}
                >
                  <Space direction="horizontal" size="middle">
                    <Form.Item name="input-number">
                      <InputNumber
                        min={1}
                        max={31}
                        style={{
                          width: 50,
                        }}
                      />
                    </Form.Item>
                    <Form.Item> days</Form.Item>
                    <Form.Item name="color">
                      <ColorPicker value="#f2dede" />{" "}
                    </Form.Item>
                    <Form.Item>
                      <AiFillCloseCircle
                        style={{ color: "#c0392b", fontSize: "18px" }}
                        closable
                        onClick={handleClose}
                      ></AiFillCloseCircle>
                    </Form.Item>
                  </Space>
                </Card>
              ) : null}

              {visible_next ? (
                <Card
                  style={{
                    width: "300px",
                    height: "75%",
                    backgroundColor: "#caeafa",
                    display: "flex",
                  }}
                >
                  <Space direction="horizontal" size="middle">
                    <Form.Item name="input-number">
                      <InputNumber
                        min={1}
                        max={31}
                        style={{
                          width: 50,
                        }}
                      />
                    </Form.Item>
                    <Form.Item> days</Form.Item>
                    <Form.Item name="color">
                      <ColorPicker value="#f2dede" />{" "}
                    </Form.Item>
                    <Form.Item>
                      <AiFillCloseCircle
                        style={{ color: "#c0392b", fontSize: "18px" }}
                        closable
                        onClick={handleClose_next}
                      ></AiFillCloseCircle>
                    </Form.Item>
                  </Space>
                </Card>
              ) : null}

              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, fieldKey, ...restField }) => (
                      <Space
                        key={key}
                        style={{ display: "flex", marginBottom: 8 }}
                        align="baseline"
                      >
                        {fields.length > 0 ? (
                          <Card
                            style={{
                              width: "300px",
                              height: "75%",
                              backgroundColor: "#caeafa",
                              display: "flex",
                            }}
                          >
                            <Row>
                              <Space direction="horizontal" size="middle">
                                <Form.Item name="input-number2" {...restField}>
                                  <InputNumber
                                    min={1}
                                    max={31}
                                    style={{
                                      width: 50,
                                    }}
                                  />
                                </Form.Item>
                                <Form.Item> days</Form.Item>
                                <Form.Item name="color">
                                  <ColorPicker value="#f2dede" />{" "}
                                </Form.Item>
                                <Form.Item>
                                  <AiFillCloseCircle
                                    style={{
                                      color: "#c0392b",
                                      fontSize: "18px",
                                    }}
                                    closable
                                    onClick={() => remove(name)}
                                  ></AiFillCloseCircle>
                                </Form.Item>
                              </Space>
                            </Row>
                          </Card>
                        ) : null}
                      </Space>
                    ))}

                    <Form.Item>
                      <Button
                        onClick={() => add()}
                        style={{
                          borderRadius: "4px",
                        }}
                      >
                        <PlusOutlined style={{ color: "#5cb85c" }} />
                        Add Warnings
                      </Button>
                    </Form.Item>
                  </>
                )}
              </Form.List>
              <Row>
                <Space direction="horizontal">
                  <Form.Item
                    nam="notify_email"
                    label="Notify via email"
                    style={{
                      marginLeft: "-240px",
                    }}
                  >
                    <Tooltip title="If checked,daily emails will be sent when date warnings are active.">
                      <Checkbox
                        onChange={onChange}
                        style={{
                          marginLeft: "-100px",
                        }}
                      />
                    </Tooltip>
                  </Form.Item>
                </Space>
              </Row>
            </Space>
          </Row>
        </Card>
      </Row>
    </>
  );
}
