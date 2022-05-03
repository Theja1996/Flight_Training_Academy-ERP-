import React, { useEffect, useState } from "react";
import { CheckOutlined } from "@ant-design/icons";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Tabs, Divider, Tooltip } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { Form,  InputNumber, Space, Card, Col, Row } from "antd";
import { AiFillCloseCircle } from "react-icons/ai";
import Checkbox from "antd/lib/checkbox/Checkbox";
import ColorPicker from "../../components/ColorPicker/ColorPicker";
import { getAll } from "../../utils/APIUtils";


export default function Editrequirments() {
  const { Option } = Select;
  const [visible, setVisible] = useState(true);
  const [visible_card, setVisible_card] = useState(true);
  const [visible_master, setVisible_master] = useState(true);
  const [visible_next_master, setVisible_next_master] = useState(true);
const [visible_next, setVisible_next] = useState(true);
  const [masterList, setMasterList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAll("MasterCertificateList")
      .then((result) => setMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);


  const handleClose = (e) => {
    console.log(e);
    setVisible(false);
    setVisible_card(false);
    setVisible_master(false);
    setVisible_next_master(false);
  };
  const handleClose_next = (e) => {
    console.log(e);
    setVisible_next(false);
  };

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }

  const { TabPane } = Tabs;
  return (
    <>
      <Row justify="center" style={{ marginTop: "10px" }}>
        <Col span={14}>
          <Tabs type="card">
            <TabPane
              tab={
                <tab style={{ color: "black" }}>Certificate requirements</tab>
              }
              key="1"
            />
          </Tabs>

          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "15px",
              textAlign: "start",
            }}
          >
            Certificate requirements
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "10px" }}>
        <Form>
          {visible_card ? (
            <Card
              style={{
                width: 700,
                backgroundColor: " #ececec",
                marginBottom: "10px",
              }}
            >
              <CloseOutlined
                style={{float:"right" }}
                onClick={handleClose}
              ></CloseOutlined>

              <Form.Item
                name="certificate"
                label="Certificate"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select
                  showSearch
                  style={{ width: "50%", marginLeft: "-280px" }}
                  placeholder="Search to Select"
                  optionFilterProp="Airport pass"
                  filterOption={(input, option) =>
                    option.Airportpass.toLowerCase().indexOf(
                      input.toLowerCase()
                    ) >= 0
                  }
                  filterSort={(optionA, optionB) =>
                    optionA.Airportpass.toLowerCase().localeCompare(
                      optionB.Airportpass.toLowerCase()
                    )
                  }
                >
                     {masterList.map((pl) => (
                  <Option value={pl.key}>{pl.name}</Option>
                ))}
                 
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
               
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gab: 10,
                    }}
                  >
                    <label style={{ fontWeight: "bold" }}>
                      Requiring approval
                    </label>
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
                  {visible_master ? (
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
                            style={{
                              color: "#c0392b",
                              fontSize: "18px",
                            }}
                            closable
                            onClick={handleClose}
                          ></AiFillCloseCircle>
                        </Form.Item>
                      </Space>
                    </Card>
                  ) : null}

                  {visible_next_master ? (
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
                            style={{
                              color: "#c0392b",
                              fontSize: "18px",
                            }}
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
                            style={{
                              display: "flex",
                              marginBottom: 8,
                            }}
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
                                    <Form.Item name="input-number2">
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
                          marginLeft: "-180px",
                        }}
                      >
                        <Tooltip title="If checked,daily emails will be sent when date warnings are active.">
                          <Checkbox
                            onChange={onChange}
                            style={{
                              marginLeft: "-30px",
                            }}
                          />
                        </Tooltip>
                      </Form.Item>
                    </Space>
                  </Row>
                </Space>
              </Row>
            </Card>
          ) : null}

          <div>
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
                          style={{ width: 700, backgroundColor: " #ececec" }}
                        >
                          <CloseOutlined
                            style={{ marginLeft: "620px" }}
                            //    onClick={handleCancel}
                            onClick={() => remove(name)}
                          ></CloseOutlined>

                          <Form.Item
                            name="certificate"
                            label="Certificate"
                            rules={[
                              {
                                required: true,
                              },
                            ]}
                          >
                            <Select
                              showSearch
                              style={{ width: "50%", marginLeft: "-280px" }}
                              placeholder="Search to Select"
                              optionFilterProp="Airport pass"
                              filterOption={(input, option) =>
                                option.Airportpass.toLowerCase().indexOf(
                                  input.toLowerCase()
                                ) >= 0
                              }
                              filterSort={(optionA, optionB) =>
                                optionA.Airportpass.toLowerCase().localeCompare(
                                  optionB.Airportpass.toLowerCase()
                                )
                              }
                            >
                            
                     {masterList.map((pl) => (
                  <Option value={pl.key}>{pl.name}</Option>
                ))}
                 
                            </Select>
                          </Form.Item>

                          <Form.Item
                            label={
                              <label style={{ fontWeight: "bold" }}>
                                A colored warning will appear when a certificate
                                is:
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
                                <label style={{ fontWeight: "bold" }}>
                                  {" "}
                                  Missing
                                </label>
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
                                }}
                              >
                                <label style={{ fontWeight: "bold" }}>
                                  {" "}
                                  Expired
                                </label>
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
                                <label style={{ fontWeight: "bold" }}>
                                  Requiring approval
                                </label>
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
                                        style={{
                                          color: "#c0392b",
                                          fontSize: "18px",
                                        }}
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
                                        style={{
                                          color: "#c0392b",
                                          fontSize: "18px",
                                        }}
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
                                    {fields.map(
                                      ({
                                        key,
                                        name,
                                        fieldKey,
                                        ...restField
                                      }) => (
                                        <Space
                                          key={key}
                                          style={{
                                            display: "flex",
                                            marginBottom: 8,
                                          }}
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
                                                <Space
                                                  direction="horizontal"
                                                  size="middle"
                                                >
                                                  <Form.Item
                                                    name="input-number2"
                                                    {...restField}
                                                  >
                                                    <InputNumber
                                                      min={1}
                                                      max={31}
                                                      style={{
                                                        width: 50,
                                                      }}
                                                    />
                                                  </Form.Item>
                                                  <Form.Item> days</Form.Item>
                                                  <Form.Item
                                                    name="color"
                                                    {...restField}
                                                  >
                                                    <ColorPicker value="#f2dede" />{" "}
                                                  </Form.Item>
                                                  <Form.Item>
                                                    <AiFillCloseCircle
                                                      style={{
                                                        color: "#c0392b",
                                                        fontSize: "18px",
                                                      }}
                                                      closable
                                                      onClick={() =>
                                                        remove(name)
                                                      }
                                                    ></AiFillCloseCircle>
                                                  </Form.Item>
                                                </Space>
                                              </Row>
                                            </Card>
                                          ) : null}
                                        </Space>
                                      )
                                    )}

                                    <Form.Item>
                                      <Button
                                        onClick={() => add()}
                                        style={{
                                          borderRadius: "4px",
                                        }}
                                      >
                                        <PlusOutlined
                                          style={{ color: "#5cb85c" }}
                                        />
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
                                      marginLeft: "-180px",
                                    }}
                                  >
                                    <Tooltip title="If checked,daily emails will be sent when date warnings are active.">
                                      <Checkbox
                                        onChange={onChange}
                                        style={{
                                          marginLeft: "-30px",
                                        }}
                                      />
                                    </Tooltip>
                                  </Form.Item>
                                </Space>
                              </Row>
                            </Space>
                          </Row>
                        </Card>
                      ) : null}
                    </Space>
                  ))}
                  <Form.Item>
                    <Button
                      onClick={() => add()}
                      type="text"
                      style={{
                        backgroundColor: "#5cb85c",
                        color: "white",
                        borderRadius: "4px",
                        marginLeft: "410px",
                        marginTop: "25px",
                      }}
                    >
                      <PlusOutlined />
                      Add certificate Requirments
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </div>
          <Form.Item>
           
            <Button
              type="text"
              style={{
                backgroundColor: "#5cb85c",
                color: "white",
                borderRadius: "4px",

                marginTop: "25px",
              }}
            >
              <CheckOutlined />
              Update requirments
            </Button>{" "}
          </Form.Item>
        </Form>
      </Row>
   
    </>
  );
}
