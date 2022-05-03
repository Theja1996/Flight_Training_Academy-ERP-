import React, { useState } from "react";




import {
  AlignLeftOutlined,
  CheckOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
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
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

import { add, getMaxId, uniqueCheck } from "../../utils/APIUtils";
import timeZoneList from "../../utils/TimeZone.json";

import "antd/dist/antd.css";

const { Panel } = Collapse;
const { Option } = Select;

function CreateStaff() {
  const [form] = Form.useForm();
  const [roles, setRoles] = useState(["Staff"]);
  const [emailStatus, setEmailStatus] = useState({ status: "", help: "" });
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState();

  const TimeList = (
    <div>
      <Form.Item
        label="Account & booking"
        name="account_booking"
        style={{ backgroundColor: "	#FFFFFF" }}
      >
        <Select defaultValue="(GMT+05:00) Karachi" style={{ width: 200 }}>
          {timeZoneList.map((tz) => (
            <option value={tz.text}>{tz.text}</option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Flight registration"
        name="flight_registration"
        style={{ backgroundColor: "	#FFFFFF", paddingLeft: "10px" }}
      >
        <Select defaultValue="(GMT+05:00) Karachi" style={{ width: 200 }}>
          {timeZoneList.map((tz) => (
            <option value={tz.text}>{tz.text}</option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item
        label="Theory registration"
        name="theory_registration"
        style={{ backgroundColor: "	#FFFFFF" }}
      >
        <Select defaultValue="(GMT+05:00) Karachi" style={{ width: 200 }}>
          {timeZoneList.map((tz) => (
            <option value={tz.text}>{tz.text}</option>
          ))}
        </Select>
      </Form.Item>
    </div>
  );

  const getBottomCheckBox = () => {
    const renterOptions = ["Simulator Renter", "Aircraft Renter"];

    const otherOptions = [
      "Need sign off administrator",
      "Booking administrator",
      "Rental administrator",
      "Repetition administrator",
      "Certificate administrator",
      "Maintenance administrator",
    ];
    let returnList = [];

    if (roles.includes("Renter")) {
      returnList.push(
        <Form.Item
          name="access"
          label={
            <label style={{ fontWeight: "bold" }}>Rental permissions</label>
          }
        >
          <Checkbox.Group>
            <Space align="start" direction="vertical">
              {renterOptions.map((op) => (
                <Checkbox value={op}>{op}</Checkbox>
              ))}
            </Space>
          </Checkbox.Group>
        </Form.Item>
      );
      if (roles.length > 2) {
        returnList.push(
          <Form.Item
            name="access"
            label={
              <label style={{ fontWeight: "bold" }}>
                Additional permissions
              </label>
            }
          >
            <Checkbox.Group>
              <Space align="start" direction="vertical">
                {otherOptions.map((op) => (
                  <Checkbox value={op}>{op}</Checkbox>
                ))}
              </Space>
            </Checkbox.Group>
          </Form.Item>
        );
      }
    } else if (roles.length > 0) {
      returnList.push(
        <Form.Item
          name="access"
          label={
            <label style={{ fontWeight: "bold" }}>Additional permissions</label>
          }
        >
          <Checkbox.Group>
            <Space align="start" direction="vertical">
              {otherOptions.map((op) => (
                <Checkbox value={op}>{op}</Checkbox>
              ))}
            </Space>
          </Checkbox.Group>
        </Form.Item>
      );
    }
    return returnList;
  };

  // ========================Emagencytable form start=====================

  const emagencytable = (
    // <React.Fragment   >
    <div
      style={{
        backgroundColor: "	#FFFFFF",
      }}
    >
      <Form.Item
        name="emergency_first_name"
        label={<label style={{ color: "	#FF0000" }}>First name</label>}
        rules={[{ required: true }]}
        style={{
          paddingLeft: "10px",
          color: "	#FF0000",
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="emergency_last_name"
        label={<label style={{ color: "	#FF0000" }}>Last name</label>}
        rules={[{ required: true }]}
        style={{
          paddingLeft: "10px",
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="emergency_email"
        label={<label style={{ color: "	#FF0000" }}>Email</label>}
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
        style={{
          paddingLeft: "40px",
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="emergency_phone"
        label={<label style={{ color: "red" }}>Phone</label>}
        rules={[{ required: true }]}
        style={{
          paddingLeft: "35px",
        }}
      >
        <PhoneInput flags={flags} value={value} onChange={setValue} />
      </Form.Item>

      <Form.Item
        name="emergency_address1"
        label={<label style={{ color: "	#FF0000" }}>Address</label>}
        rules={[{ required: true }]}
        style={{
          paddingLeft: "25px",
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="emergency_postcode"
        label={<label style={{ color: "	#FF0000" }}>Postcode</label>}
        rules={[{ required: true }]}
        style={{
          paddingLeft: "20px",
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="emergency_city"
        label={<label style={{ color: "	#FF0000" }}>City</label>}
        rules={[{ required: true }]}
        style={{
          paddingLeft: "50px",
        }}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="emergency_relationship"
        label={<label style={{ color: "	#FF0000" }}>Relationship</label>}
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <p style={{ fontSize:"10px",flex:1}}>
        Please ensure that the person you nominate above as being your emergency
        contact has provided their consent to you providing us with their
        information
      </p>
      {/* // </React.Fragment> */}
    </div>
  );
  // ========================Emagencytable form end=====================

  const primaryBottomCheckBoxOptions = [
    "Renter",
    "Students",
    "Staff",
    "Crew",
    "Instructor",
    "Administrator",
  ];

  function docreateStaff(values) {
    setLoading(true);
    getMaxId("FlightStaff")
      .then((id) => {
        console.log(id);
        let v = { ...values };
        v.key = id;
        v.staffImage = "1";
        add(v, "FlightStaff")
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

  function doCancel() {
    form.resetFields();
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
         <h1> New Staff</h1>
             
         <Divider style={{ marginTop: "-10px" }} />
      </Row>
      <Row>
        <Form
          style={{ width: "100%" }}
          name="register"
          form={form}
          onFinish={docreateStaff}
          scrollToFirstError
          initialValues={{
           
            roles: ["Staff"],
          
          }}
        >
          <Row justify="space-between">
            <Col style={{ width: "50%" }}>
              <Form.Item
                style={{
                  paddingLeft: "45px",
                }}
                label="Call sign"
                name="callsign"
                rules={[
                  {
                    required: true,
                    message: "Please input your call sign!",
                  },
                  {
                    validator: async (_, value) => {
                      let cs = { callsign: value };
                      let isUnique = await uniqueCheck(
                        cs,
                        "FlightStaff",
                        "callsign"
                      );

                      if (isUnique) {
                        return Promise.resolve();
                      } else {
                        return Promise.reject("Already exist");
                      }
                    },
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                style={{
                  paddingLeft: "60px",
                }}
                name="email"
                label="E-mail"
                // hasFeedback
                // validateStatus={emailStatus.status}
                // help={emailStatus.help}
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },

                  {
                    validator: async (_, value) => {
                      // setEmailStatus({status:"validating",help:"validating the email"})
                      let d = { email: value };
                      let isUnique = await uniqueCheck(
                        d,
                        "FlightStaff",
                        "email"
                      );

                      if (isUnique) {
                        // setEmailStatus({status:"success",help:"new user"})
                        return Promise.resolve();
                      } else {
                        // setEmailStatus({status:"error",help:"Already exist"})
                        return Promise.reject("Already exist");
                      }
                    },
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                style={{
                  paddingLeft: "5px",
                }}
                name="confirm"
                label="Confirm E-mail "
                dependencies={["email"]}
                rules={[
                  {
                    required: true,
                    message: "Please confirm your E-mail!",
                  },

                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("email") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two E-mail that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                style={{
                  paddingLeft: "35px",
                }}
                name="user_First_name"
                label="First name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                style={{
                  paddingLeft: "35px",
                }}
                name="user_Last_name"
                label="Last name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
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
                <PhoneInput flags={flags} value={value} onChange={setValue} 
                 />
              </Form.Item>
              <Form.Item
                style={{
                  paddingLeft: "45px",
                }}
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: "Please input your Address!",
                  },
                ]}
                hasFeedback
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                style={{
                  paddingLeft: "45px",
                }}
                label="Post code"
                name="post_code"
              >
                <Input />
              </Form.Item>
              <Form.Item
                style={{
                  paddingLeft: "80px",
                }}
                label="City"
                name="city"
              >
                <Input />
              </Form.Item>
              <Form.Item
                style={{
                  paddingLeft: "10px",
                }}
                label="User Referance"
                name="user_reference"
              >
                <Input />
              </Form.Item>
              <Form.Item label="CAA Ref.Number" name="caa_ref_number">
                <Input />
              </Form.Item>
              <Form.Item>
                <Collapse
                  bordered={false}
                  backgroundColor="	#FFFFFF"
                  ghost={true}
                  style={{ paddingLeft: "75px" }}
                  expandIcon={() => ""}
                  // className="site-collapse-custom-collapse"
                >
                  <Panel
                    header={
                      <Button
                        icon={
                          <MedicineBoxOutlined style={{ color: "	#FF0000" }} />
                        }
                        style={{ width: "360px" }}
                      >
                        Add emergency contact
                      </Button>
                    }
                    key="1"
                  >
                    {emagencytable}
                  </Panel>
                </Collapse>
              </Form.Item>
              <Form.Item>
                <Collapse
                  ghost={true}
                  bordered={false}
                  expandIcon={() => (
                    <Checkbox style={{ paddingLeft: "100px" }}></Checkbox>
                  )}
                  // className="site-collapse-custom-collapse"
                >
                  <Panel
                    header="Override time zone"
                    // key="1"

                    // className="site-collapse-custom-panel"
                  >
                    {TimeList}
                  </Panel>
                </Collapse>
              </Form.Item>
              <Row>
                <Col>
                  <Form.Item name="roles" label="User roles">
                    <Checkbox.Group
                      onChange={setRoles}
                      style={{ paddingLeft: "40px" }}
                    >
                      <Space align="start" direction="vertical">
                        {primaryBottomCheckBoxOptions.map((op) =>
                          op === "Staff" ? (
                            <Checkbox disabled={true} value={op}>
                              {op}
                            </Checkbox>
                          ) : (
                            <Checkbox value={op}>{op}</Checkbox>
                          )
                        )}
                      </Space>
                    </Checkbox.Group>
                  </Form.Item>
                </Col>
                <Col>{getBottomCheckBox()}</Col>
              </Row>

              <Form.Item shouldUpdate={true}>
                {() => (
                  <Button loading={loading} type="primary" htmlType="submit">
                    <CheckOutlined /> Create Staff
                  </Button>
                )}
              </Form.Item>
             
             
            </Col>
            <Col style={{ width: "40%" }}>
              
              <Form.Item
                style={{
                  paddingLeft: "25px",
                }}
                name="publicnote"
                label="Public Note"
                rules={[
                  {
                    message: "Please input !",
                  },
                ]}
                hasFeedback
              >
                <Input.TextArea />
              </Form.Item>
              <Form.Item
                style={{
                  paddingLeft: "20px",
                }}
                name="adminnote"
                label="Admin Note"
                rules={[
                  {
                    message: "",
                  },
                ]}
                hasFeedback
              >
                <Input.TextArea />
              </Form.Item>
             
              <Form.Item name="userImage"></Form.Item>
            </Col>
          </Row>
        </Form>
      </Row>
    </div>
  </>
);
}
export default CreateStaff;
