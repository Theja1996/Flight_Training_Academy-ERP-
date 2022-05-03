import React, { useState } from "react";
import { Modal, Button, Row, Col } from "antd";

import TitleBar from "../components/TitleBar";
import "../AdminPage/AdminPage.css";

import { CheckOutlined , PlusOutlined } from "@ant-design/icons";
import { FaMedrt } from "react-icons/fa";
import { Collapse } from "antd";

import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Checkbox,
  AutoComplete,
} from "antd";
import { Label } from "semantic-ui-react";
import Addlinkuser from "../components/Addlinkuser";
import Adminlinkuser from "../components/Adminlinkuser";

export default function AdminPage() {
  const [visible1, setvisible1] = useState(false);
  const [visible2, setvisible2] = useState(false);
  const [visible3, setvisible3] = useState(false);
  const [visible4, setvisible4] = useState(false);
  const [visible5, setvisible5] = useState(false);
  const [visible6, setvisible6] = useState(false);

  const showModal1 = () => {
    setvisible1(true);
  };

  const showModal2 = () => {
    setvisible2(true);
  };
  const showModal3 = () => {
    setvisible3(true);
  };
  const showModal4 = () => {
    setvisible4(true);
  };
  const showModal5 = () => {
    setvisible5(true);
  };
  const showModal6 = () => {
    setvisible6(true);
  };

  const handleOk1 = (e) => {
    console.log(e);
    setvisible1(false);
  };

  const handleCancel1 = (e) => {
    console.log(e);
    setvisible1(false);
  };

  const handleOk2 = (e) => {
    console.log(e);
    setvisible2(false);
  };

  const handleCancel2 = (e) => {
    console.log(e);
    setvisible2(false);
  };

  const handleOk3 = (e) => {
    console.log(e);
    setvisible3(false);
  };

  const handleCancel3 = (e) => {
    console.log(e);
    setvisible3(false);
  };

  const handleOk4 = (e) => {
    console.log(e);
    setvisible4(false);
  };

  const handleCancel4 = (e) => {
    console.log(e);
    setvisible4(false);
  };

  const handleOk5 = (e) => {
    console.log(e);
    setvisible5(false);
  };

  const handleCancel5 = (e) => {
    console.log(e);
    setvisible5(false);
  };

  const handleOk6 = (e) => {
    console.log(e);
    setvisible6(false);
  };

  const handleCancel6 = (e) => {
    console.log(e);
    setvisible6(false);
  };

  const { Panel } = Collapse;
  const { Option } = Select;
  const [visible, setvisible] = useState(false);
  const [clickcheckbox, setclickcheckbox] = useState(true);
  const [renterrole, setrenterrole] = useState(false);
  const [otherroleadmin, setotherroleadmin] = useState(false);
  const [otherroleadmin1, setotherroleadmin1] = useState(false);
  const [otherroleadmin2, setotherroleadmin2] = useState(false);
  const [otherroleadmin3, setotherroleadmin3] = useState(false);
  const [link, setLink] = useState("http://");
  const [adminlink, setadminlink] = useState("http://");

  const AutoCompleteOption = AutoComplete.Option;
  const style = { background: "#0092ff", padding: "8px 0" };
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const doCheckbox = () => {
    setclickcheckbox(!clickcheckbox);
  };

  const onChange1 = () => {
    setrenterrole(!renterrole);
  };

  const onChange2 = () => {
    setotherroleadmin(!otherroleadmin);
  };

  const onChange3 = () => {
    setotherroleadmin1(!otherroleadmin1);
  };

  const onChange4 = () => {
    setotherroleadmin2(!otherroleadmin2);
  };

  const onChange5 = () => {
    setotherroleadmin3(!otherroleadmin3);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const TimeList = (
    <div>
      <Label>Time zone</Label>

      <Select
        defaultValue="(GMT+05:00) Karachi"
        style={{ width: 200 }}
        onChange={handleChange}
      >
        <option value="International Date Line West">
          (GMT-12:00) International Date Line West
        </option>
        <option value="American Samoa">(GMT-11:00) American Samoa</option>
        <option value="Midway Island">(GMT-11:00) Midway Island</option>
        <option value="Hawaii">(GMT-10:00) Hawaii</option>
        <option value="Alaska">(GMT-09:00) Alaska</option>
        <option value="Pacific Time (US &amp; Canada)">
          (GMT-08:00) Pacific Time (US &amp; Canada)
        </option>
        <option value="Tijuana">(GMT-08:00) Tijuana</option>
        <option value="Arizona">(GMT-07:00) Arizona</option>
        <option value="Chihuahua">(GMT-07:00) Chihuahua</option>
        <option value="Mazatlan">(GMT-07:00) Mazatlan</option>
        <option value="Mountain Time (US &amp; Canada)">
          (GMT-07:00) Mountain Time (US &amp; Canada)
        </option>
        <option value="Central America">(GMT-06:00) Central America</option>
        <option value="Central Time (US &amp; Canada)">
          (GMT-06:00) Central Time (US &amp; Canada)
        </option>
        <option value="Guadalajara">(GMT-06:00) Guadalajara</option>
        <option value="Mexico City">(GMT-06:00) Mexico City</option>
        <option value="Monterrey">(GMT-06:00) Monterrey</option>
        <option value="Saskatchewan">(GMT-06:00) Saskatchewan</option>
        <option value="Bogota">(GMT-05:00) Bogota</option>
        <option value="Eastern Time (US &amp; Canada)">
          (GMT-05:00) Eastern Time (US &amp; Canada)
        </option>
        <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
        <option value="Lima">(GMT-05:00) Lima</option>
        <option value="Quito">(GMT-05:00) Quito</option>
        <option value="Atlantic Time (Canada)">
          (GMT-04:00) Atlantic Time (Canada)
        </option>
        <option value="Caracas">(GMT-04:00) Caracas</option>
        <option value="Georgetown">(GMT-04:00) Georgetown</option>
        <option value="La Paz">(GMT-04:00) La Paz</option>
        <option value="Puerto Rico">(GMT-04:00) Puerto Rico</option>
        <option value="Santiago">(GMT-04:00) Santiago</option>
        <option value="Newfoundland">(GMT-03:30) Newfoundland</option>
        <option value="Brasilia">(GMT-03:00) Brasilia</option>
        <option value="Buenos Aires">(GMT-03:00) Buenos Aires</option>
        <option value="Greenland">(GMT-03:00) Greenland</option>
        <option value="Montevideo">(GMT-03:00) Montevideo</option>
        <option value="Mid-Atlantic">(GMT-02:00) Mid-Atlantic</option>
        <option value="Azores">(GMT-01:00) Azores</option>
        <option value="Cape Verde Is.">(GMT-01:00) Cape Verde Is.</option>
        <option value="Edinburgh">(GMT+00:00) Edinburgh</option>
        <option value="Lisbon">(GMT+00:00) Lisbon</option>
        <option value="London">(GMT+00:00) London</option>
        <option value="Monrovia">(GMT+00:00) Monrovia</option>
        <option value="UTC">(GMT+00:00) UTC</option>
        <option value="Amsterdam">(GMT+01:00) Amsterdam</option>
        <option value="Belgrade">(GMT+01:00) Belgrade</option>
        <option value="Berlin">(GMT+01:00) Berlin</option>
        <option value="Bern">(GMT+01:00) Bern</option>
        <option value="Bratislava">(GMT+01:00) Bratislava</option>
        <option value="Brussels">(GMT+01:00) Brussels</option>
        <option value="Budapest">(GMT+01:00) Budapest</option>
        <option value="Casablanca">(GMT+01:00) Casablanca</option>
        <option value="Copenhagen">(GMT+01:00) Copenhagen</option>
        <option value="Dublin">(GMT+01:00) Dublin</option>
        <option value="Ljubljana">(GMT+01:00) Ljubljana</option>
        <option value="Madrid">(GMT+01:00) Madrid</option>
        <option value="Paris">(GMT+01:00) Paris</option>
        <option value="Prague">(GMT+01:00) Prague</option>
        <option value="Rome">(GMT+01:00) Rome</option>
        <option value="Sarajevo">(GMT+01:00) Sarajevo</option>
        <option value="Skopje">(GMT+01:00) Skopje</option>
        <option value="Stockholm">(GMT+01:00) Stockholm</option>
        <option value="Vienna">(GMT+01:00) Vienna</option>
        <option value="Warsaw">(GMT+01:00) Warsaw</option>
        <option value="West Central Africa">
          (GMT+01:00) West Central Africa
        </option>
        <option value="Zagreb">(GMT+01:00) Zagreb</option>
        <option value="Zurich">(GMT+01:00) Zurich</option>
        <option value="Amman">(GMT+02:00) Amman</option>
        <option value="Athens">(GMT+02:00) Athens</option>
        <option value="Bucharest">(GMT+02:00) Bucharest</option>
        <option value="Cairo">(GMT+02:00) Cairo</option>
        <option value="Harare">(GMT+02:00) Harare</option>
        <option value="Helsinki">(GMT+02:00) Helsinki</option>
        <option value="Jerusalem">(GMT+02:00) Jerusalem</option>
        <option value="Kaliningrad">(GMT+02:00) Kaliningrad</option>
        <option value="Kyiv">(GMT+02:00) Kyiv</option>
        <option value="Pretoria">(GMT+02:00) Pretoria</option>
        <option value="Riga">(GMT+02:00) Riga</option>
        <option value="Sofia">(GMT+02:00) Sofia</option>
        <option value="Tallinn">(GMT+02:00) Tallinn</option>
        <option value="Vilnius">(GMT+02:00) Vilnius</option>
        <option value="Baghdad">(GMT+03:00) Baghdad</option>
        <option value="Istanbul">(GMT+03:00) Istanbul</option>
        <option value="Kuwait">(GMT+03:00) Kuwait</option>
        <option value="Minsk">(GMT+03:00) Minsk</option>
        <option value="Moscow">(GMT+03:00) Moscow</option>
        <option value="Nairobi">(GMT+03:00) Nairobi</option>
        <option value="Riyadh">(GMT+03:00) Riyadh</option>
        <option value="St. Petersburg">(GMT+03:00) St. Petersburg</option>
        <option value="Tehran">(GMT+03:30) Tehran</option>
        <option value="Abu Dhabi">(GMT+04:00) Abu Dhabi</option>
        <option value="Baku">(GMT+04:00) Baku</option>
        <option value="Muscat">(GMT+04:00) Muscat</option>
        <option value="Samara">(GMT+04:00) Samara</option>
        <option value="Tbilisi">(GMT+04:00) Tbilisi</option>
        <option value="Volgograd">(GMT+04:00) Volgograd</option>
        <option value="Yerevan">(GMT+04:00) Yerevan</option>
        <option value="Kabul">(GMT+04:30) Kabul</option>
        <option value="Ekaterinburg">(GMT+05:00) Ekaterinburg</option>
        <option value="Islamabad">(GMT+05:00) Islamabad</option>
        <option selected="selected" value="Karachi">
          (GMT+05:00) Karachi
        </option>
        <option value="Tashkent">(GMT+05:00) Tashkent</option>
        <option value="Chennai">(GMT+05:30) Chennai</option>
        <option value="Kolkata">(GMT+05:30) Kolkata</option>
        <option value="Mumbai">(GMT+05:30) Mumbai</option>
        <option value="New Delhi">(GMT+05:30) New Delhi</option>
        <option value="Sri Jayawardenepura">
          (GMT+05:30) Sri Jayawardenepura
        </option>
        <option value="Kathmandu">(GMT+05:45) Kathmandu</option>
        <option value="Almaty">(GMT+06:00) Almaty</option>
        <option value="Astana">(GMT+06:00) Astana</option>
        <option value="Dhaka">(GMT+06:00) Dhaka</option>
        <option value="Urumqi">(GMT+06:00) Urumqi</option>
        <option value="Rangoon">(GMT+06:30) Rangoon</option>
        <option value="Bangkok">(GMT+07:00) Bangkok</option>
        <option value="Hanoi">(GMT+07:00) Hanoi</option>
        <option value="Jakarta">(GMT+07:00) Jakarta</option>
        <option value="Krasnoyarsk">(GMT+07:00) Krasnoyarsk</option>
        <option value="Novosibirsk">(GMT+07:00) Novosibirsk</option>
        <option value="Beijing">(GMT+08:00) Beijing</option>
        <option value="Chongqing">(GMT+08:00) Chongqing</option>
        <option value="Hong Kong">(GMT+08:00) Hong Kong</option>
        <option value="Irkutsk">(GMT+08:00) Irkutsk</option>
        <option value="Kuala Lumpur">(GMT+08:00) Kuala Lumpur</option>
        <option value="Perth">(GMT+08:00) Perth</option>
        <option value="Singapore">(GMT+08:00) Singapore</option>
        <option value="Taipei">(GMT+08:00) Taipei</option>
        <option value="Ulaanbaatar">(GMT+08:00) Ulaanbaatar</option>
        <option value="Osaka">(GMT+09:00) Osaka</option>
        <option value="Sapporo">(GMT+09:00) Sapporo</option>
        <option value="Seoul">(GMT+09:00) Seoul</option>
        <option value="Tokyo">(GMT+09:00) Tokyo</option>
        <option value="Yakutsk">(GMT+09:00) Yakutsk</option>
        <option value="Adelaide">(GMT+09:30) Adelaide</option>
        <option value="Darwin">(GMT+09:30) Darwin</option>
        <option value="Brisbane">(GMT+10:00) Brisbane</option>
        <option value="Canberra">(GMT+10:00) Canberra</option>
        <option value="Guam">(GMT+10:00) Guam</option>
        <option value="Hobart">(GMT+10:00) Hobart</option>
        <option value="Melbourne">(GMT+10:00) Melbourne</option>
        <option value="Port Moresby">(GMT+10:00) Port Moresby</option>
        <option value="Sydney">(GMT+10:00) Sydney</option>
        <option value="Vladivostok">(GMT+10:00) Vladivostok</option>
        <option value="Magadan">(GMT+11:00) Magadan</option>
        <option value="New Caledonia">(GMT+11:00) New Caledonia</option>
        <option value="Solomon Is.">(GMT+11:00) Solomon Is.</option>
        <option value="Srednekolymsk">(GMT+11:00) Srednekolymsk</option>
        <option value="Auckland">(GMT+12:00) Auckland</option>
        <option value="Fiji">(GMT+12:00) Fiji</option>
        <option value="Kamchatka">(GMT+12:00) Kamchatka</option>
        <option value="Marshall Is.">(GMT+12:00) Marshall Is.</option>
        <option value="Wellington">(GMT+12:00) Wellington</option>
        <option value="Chatham Is.">(GMT+12:45) Chatham Is.</option>
        <option value="Nuku&#39;alofa">(GMT+13:00) Nuku&#39;alofa</option>
        <option value="Samoa">(GMT+13:00) Samoa</option>
        <option value="Tokelau Is.">(GMT+13:00) Tokelau Is.</option>
      </Select>
    </div>
  );

  const checkboxtext = (
    <div>
      <h4>
        Please take note that by unsubscribing from the FlightLogger
        announcements, you will no longer get email notifications about
        improvements or new features added to FligthLogger. This is not limited
        to improvements that you may have specifically requested.
      </h4>

      <h4>
        Furthermore, you will no longer receive email notifications when
        FlightLogger is planning for downtime due to maintenance or in the rare
        event we are experiencing operational issues.
      </h4>

      <h4>
        {" "}
        Even though you will still receive all updates from us in your
        FlightLogger inbox, we recommend that not all users unsubscribe from our
        email announcements to ensure that important information is not
        overlooked.
      </h4>
    </div>
  );

  const emagencytable = (
    <div>
      {" "}
      <Row>
        <Col span={24}>
          <Form.Item
            name={["First", "name"]}
            label="First name"
            type="danger"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name={["Last", "name"]}
            label="Last name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name="Email" label="Email" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name="Phone" label="Phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="Address"
            label="Address"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="Postcode"
            label="Postcode"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item name="City" label="City" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Form.Item
            name="Relationship"
            label="Relationship"
            rules={[{ required: true }]}
          >
            <Input />
            <p style={{ fontWeight: "bold" }}>
              Please ensure that the person you nominate above as being your
              emergency contact has provided their consent to you providing us
              with their information
            </p>
          </Form.Item>
        </Col>
      </Row>
    </div>
  );

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+94</Option>
        <Option value="87"></Option>
      </Select>
    </Form.Item>
  );

  const DemoBox = (props) => (
    <p className={`height-${props.value}`}>{props.children}</p>
  );

  return (
    <React.Fragment>
      <TitleBar />

      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 56 }}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Col>
          <button type="primary" className="addpost" onClick={showModal1}>
            <PlusOutlined />
            Add Student
          </button>
          <Modal
            title="Add New Programme"
            visible={visible1}
            onOk={handleOk1}
            onCancel={handleCancel1}
          >
            <div>
              <Row>
                <Col span={24}>
                  <Form
                    name="register"
                    form={form}
                    onFinish={onFinish}
                    scrollToFirstError
                  >
                    <Row>
                      <Col span={11}>
                        <div style={{ style }}>
                          <Form.Item
                            label="Call sign"
                            name="Callsign"
                            rules={[
                              {
                                required: true,
                                message: "Please input your call sign!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </div>
                      </Col>
                      <Col span={1}></Col>
                      <Col span={12}>
                        <div style={{ style }}>
                          <Form.Item
                            name="Publicnote"
                            label="Public Note"
                            rules={[
                              {
                                required: true,
                                message: "Please input !",
                              },
                            ]}
                            hasFeedback
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-around",
                              }}
                            >
                              <Button
                                style={{
                                  fontWeight: "bold",
                                  backgroundColor: "grey",
                                }}
                                type=""
                                htmlType="button"
                              >
                                Bold
                              </Button>{" "}
                              <Button
                                style={{
                                  fontStyle: "italic",
                                  backgroundColor: "grey",
                                }}
                                type=""
                                htmlType="button"
                              >
                                Italic
                              </Button>
                              <Button
                                style={{
                                  textDecoration: "underline",
                                  backgroundColor: "grey",
                                }}
                                type=""
                                htmlType="button"
                              >
                                Underline
                              </Button>
                              <Addlinkuser
                                link={link}
                                setLink={(value) => setLink(value)}
                              />
                            </div>
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={11}>
                        <div>
                          {" "}
                          <Form.Item
                            name="email"
                            label="E-mail"
                            rules={[
                              {
                                type: "email",
                                message: "The input is not valid E-mail!",
                              },
                              {
                                required: true,
                                message: "Please input your E-mail!",
                              },
                            ]}
                          >
                            <Input />
                          </Form.Item>
                        </div>
                      </Col>
                      <Col span={4}></Col>
                      <Col span={9}>
                        <DemoBox value={500}>
                          <Input.TextArea value={link} />
                        </DemoBox>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={11}>
                        <Form.Item
                          name={["user", "name"]}
                          label="First name"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={11}>
                        <Form.Item
                          name={["user", "name"]}
                          label="Last name"
                          rules={[{ required: true }]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={11}>
                        <Form.Item
                          name="phone"
                          label="Phone Number"
                          rules={[
                            {
                              required: true,
                              message: "Please input your phone number!",
                            },
                          ]}
                        >
                          <Input
                            addonBefore={prefixSelector}
                            style={{ width: "100%" }}
                          />
                        </Form.Item>
                      </Col>
                      <Col span={1}></Col>
                      <Col span={12}>
                        <div style={{ style }}>
                          <Form.Item
                            name="Adminnote"
                            label="Admin Note"
                            rules={[
                              {
                                required: true,
                                message: "",
                              },
                            ]}
                            hasFeedback
                          >
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-around",
                              }}
                            >
                              <Button
                                style={{
                                  fontWeight: "bold",
                                  backgroundColor: "grey",
                                }}
                                type=""
                                htmlType="button"
                              >
                                Bold
                              </Button>{" "}
                              <Button
                                style={{
                                  fontStyle: "italic",
                                  backgroundColor: "grey",
                                }}
                                type=""
                                htmlType="button"
                              >
                                Italic
                              </Button>
                              <Button
                                style={{
                                  textDecoration: "underline",
                                  backgroundColor: "grey",
                                }}
                                type=""
                                htmlType="button"
                              >
                                Underline
                              </Button>
                              {/* <Addlinkuser /> */}
                              <Adminlinkuser
                                adminlink={adminlink}
                                setadminlink={(value) => setadminlink(value)}
                              />
                            </div>
                          </Form.Item>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={11}>
                        <Form.Item
                          name="Address"
                          label="Address"
                          rules={[
                            {
                              required: true,
                              message: "Please input your Address!",
                            },
                          ]}
                          hasFeedback
                        >
                          <Input.TextArea value={adminlink} />
                        </Form.Item>
                      </Col>
                      <Col span={4}></Col>
                      <Col span={9}>
                        <Input.TextArea />
                      </Col>
                    </Row>

                    <Row>
                      <Col span={11}>
                        <Form.Item label="Post code">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={11}>
                        <Form.Item label="City">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={11}>
                        <Form.Item label="User Referance">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={11}>
                        <Form.Item label="CAA Ref.Number">
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={11}>
                        <Form.Item>
                          {/* <Button
                                onClick={doEmerganecy}
                                style={{
                                  borderStyle: "outset",
                                }}
                                type=""
                                htmlType="button"
                              >
                                <FaMedrt style={{ backgroundColor: "red" }} />
                                Add Emergency Contact
                              </Button> */}

                          <Collapse
                            bordered={false}
                            expandIcon={({ isActive }) => (
                              <FaMedrt style={{ backgroundColor: "red" }} />
                            )}
                            className="site-collapse-custom-collapse"
                          >
                            <Panel
                              header="Add Emergency Contact"
                              key="1"
                              className="site-collapse-custom-panel"
                            >
                              <p>{emagencytable}</p>
                            </Panel>
                          </Collapse>
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={12}>
                        <Form.Item>
                          <Collapse
                            bordered={false}
                            expandIcon={({ isActive }) => <Checkbox></Checkbox>}
                            className="site-collapse-custom-collapse"
                          >
                            <Panel
                              header="Override time zone"
                              key="1"
                              className="site-collapse-custom-panel"
                            >
                              {TimeList}
                            </Panel>
                          </Collapse>
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={12}>
                        <Form.Item>
                          <Collapse
                            bordered={false}
                            expandIcon={({ isActive }) => (
                              <Checkbox
                                onClick={doCheckbox}
                                checked={clickcheckbox}
                              ></Checkbox>
                            )}
                            className="site-collapse-custom-collapse"
                          >
                            <Panel
                              header="Receive email update announcements"
                              key="1"
                              className="site-collapse-custom-panel"
                            >
                              {!clickcheckbox && <p>{checkboxtext}</p>}
                            </Panel>
                          </Collapse>
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={24}>
                        <Form.Item>
                          <h3>User Roles</h3>
                          <div
                            style={{
                              display: "flex",

                              justifyContent: "space-between",
                              border: 2,
                            }}
                          >
                            <Col span={12}>
                              <div className="user-role">
                                <Checkbox
                                  onChange={onChange1}
                                  checked={renterrole}
                                >
                                  Renter
                                </Checkbox>
                                <Checkbox>Student</Checkbox>
                                <Checkbox
                                  onChange={onChange2}
                                  checked={otherroleadmin}
                                >
                                  Staff
                                </Checkbox>
                                <Checkbox
                                  onChange={onChange3}
                                  checked={otherroleadmin1}
                                >
                                  Crew
                                </Checkbox>
                                <Checkbox
                                  onChange={onChange4}
                                  checked={otherroleadmin2}
                                >
                                  Instructor
                                </Checkbox>
                                <Checkbox
                                  onChange={onChange5}
                                  checked={otherroleadmin3}
                                >
                                  Administrator
                                </Checkbox>
                              </div>
                            </Col>

                            <Col span={16}>
                              {renterrole ? (
                                <div className="user-role2">
                                  <h4>Rental Permission</h4>
                                  <Checkbox>Simulator Renter</Checkbox>
                                  <Checkbox>Aircraft Renter</Checkbox>
                                </div>
                              ) : (
                                ""
                              )}
                              {otherroleadmin ||
                              otherroleadmin1 ||
                              otherroleadmin2 ||
                              otherroleadmin3 ? (
                                <div>
                                  <div className="user-role3">
                                    <h4>Additional Permission</h4>
                                    <Checkbox>
                                      Need sign off administrator
                                    </Checkbox>
                                    <Checkbox>Rental administrator</Checkbox>
                                    <Checkbox>
                                      Certificate administrator
                                    </Checkbox>
                                    <Checkbox>Dropbox administrator</Checkbox>
                                    <Checkbox>
                                      Maintenance administrator
                                    </Checkbox>
                                    <Checkbox>cbta_admin</Checkbox>
                                    <Checkbox>master_list_admin</Checkbox>
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}
                            </Col>
                          </div>
                        </Form.Item>
                      </Col>
                    </Row>

                    <Row>
                      <Col span={24}>
                        <Form.Item shouldUpdate={true}>
                          {() => (
                            <Button
                              type="primary"
                              htmlType="submit"
                              // disabled={
                              //   !form.isFieldsTouched(true) ||
                              //   form
                              //     .getFieldsError()
                              //     .filter(({ errors }) => errors.length)
                              //     .length
                              // }
                            >
                              <CheckOutlined /> Submit
                            </Button>
                          )}
                        </Form.Item>
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </div>
          </Modal>
        </Col>
        <Col>
          {" "}
          <button type="primary" className="addpost" onClick={showModal2}>
            <PlusOutlined />
            Add Instrutor
          </button>
          <Modal
            title="Add New Programme"
            visible={visible2}
            onOk={handleOk2}
            onCancel={handleCancel2}
          ></Modal>
        </Col>
        <Col>
          <button type="primary" className="addpost" onClick={showModal3}>
            <PlusOutlined />
            Add Crew
          </button>
          <Modal
            title="Add New Programme"
            visible={visible3}
            onOk={handleOk3}
            onCancel={handleCancel3}
          ></Modal>
        </Col>
        <Col>
          <button type="primary" className="addpost" onClick={showModal4}>
            <PlusOutlined />
            Add Renter
          </button>
          <Modal
            title="Add New Programme"
            visible={visible4}
            onOk={handleOk4}
            onCancel={handleCancel4}
          ></Modal>
        </Col>
        <Col>
          {" "}
          <button type="primary" className="addpost" onClick={showModal5}>
            <PlusOutlined />
            Add Administrator
          </button>
          <Modal
            title="Add New Programme"
            visible={visible5}
            onOk={handleOk5}
            onCancel={handleCancel5}
          ></Modal>
        </Col>
        <Col>
          <button type="primary" className="addpost" onClick={showModal6}>
            <PlusOutlined />
            Add Guest
          </button>
          <Modal
            title="Add New Programme"
            visible={visible6}
            onOk={handleOk6}
            onCancel={handleCancel6}
          ></Modal>
        </Col>
      </Row>
    </React.Fragment>
  );
}
