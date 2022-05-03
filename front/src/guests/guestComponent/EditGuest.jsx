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
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { edit } from "../../utils/APIUtils";
import timeZoneList from "../../utils/TimeZone.json";
import { useLocation } from "react-router-dom";

import "antd/dist/antd.css";

const { Panel } = Collapse;
const { Option } = Select;
export default function EditGuest() {
  const location = useLocation();
  const [form] = Form.useForm();
  const [roles, setRoles] = useState(["Guest"]);
  const [value, setValue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    form.setFieldsValue(location.state.detail);
  }, [location]);

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

//   const checkboxtext = (
//     <div style={{ textAlign: "start", justifySelf: "right" }}>
//       <h5>
//         Please take note that by unsubscribing from the FlightLogger
//         announcements, you will no longer get email notifications about
//         improvements or new features added to FligthLogger. This is not limited
//         to improvements that you may have specifically requested.
//       </h5>

//       <h5>
//         Furthermore, you will no longer receive email notifications when
//         FlightLogger is planning for downtime due to maintenance or in the rare
//         event we are experiencing operational issues.
//       </h5>

//       <h5>
//         Even though you will still receive all updates from us in your
//         FlightLogger inbox, we recommend that not all users unsubscribe from our
//         email announcements to ensure that important information is not
//         overlooked.
//       </h5>
//     </div>
//   );

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

  const getBottomCheckBox = () => {
    const renterOptions = [
        "Access to user programs(including progress and report generator)",
        "Access to user theory",
        "Access to user certificates(including certificate warnings)",
        "Access to user documents",
        "Access to user bookings",
      ];
  

  
    let returnList = [];

    if (roles.includes("Guest")) {
      returnList.push(
        <Form.Item
          name="roles"
          label={
            <label style={{ fontWeight: "bold" }}>Guest access settings</label>
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
    //   if (roles.length > 2) {
    //     returnList.push(
    //       <Form.Item
    //         name="access"
    //         label={
    //           <label style={{ fontWeight: "bold" }}>
    //             Additional permissions
    //           </label>
    //         }
    //       >
    //         <Checkbox.Group>
    //           <Space align="start" direction="vertical">
    //             {otherOptions.map((op) => (
    //               <Checkbox value={op}>{op}</Checkbox>
    //             ))}
    //           </Space>
    //         </Checkbox.Group>
    //       </Form.Item>
    //     );
    //   }
    // } else if (roles.length > 0) {
    //   returnList.push(
    //     <Form.Item
    //       name="access"
    //       label={
    //         <label style={{ fontWeight: "bold" }}>Additional permissions</label>
    //       }
    //     >
    //       <Checkbox.Group>
    //         <Space align="start" direction="vertical">
    //           {otherOptions.map((op) => (
    //             <Checkbox value={op}>{op}</Checkbox>
    //           ))}
    //         </Space>
    //       </Checkbox.Group>
    //     </Form.Item>
    //   );
    }
    return returnList;
  };

//   const primaryBottomCheckBoxOptions = [
//     "Renter",
//     "Student",
//     "Staff",
//     "Crew",
//     "Instructor",
//     "Administrator",
//   ];

  function doupdateGuest(values) {
    setLoading(true);

    let v = { ...values };
    v.key = parseInt(location.state.detail.key);
    v.programme = location.state.detail.programme;
    v.batch = location.state.detail.batch;
    v.status = location.state.detail.status;
    edit(v, "FlightGuest", location.state.detail.key)
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
          <h1>Edit User</h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Row>
        <Row>
          <Form
            style={{ width: "100%" }}
            name="register"
            form={form}
            onFinish={doupdateGuest}
            scrollToFirstError

             initialValues={{
           
              roles: ["Renter"],
           
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
                  
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={{
                    paddingLeft: "60px",
                  }}
                  name="email"
                  label="E-mail"
                 
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
                  <PhoneInput flags={flags} value={value} onChange={setValue} />
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
                  <Space direction="horizontal">
                  {/* <Col > */}
                    <Form.Item
                      name="roles"
                      label=" Guest user access "
                     
                    >
                      <h4
                        style={{
                          marginLeft: "120px",
                          textAlign: "left",
                        }}
                      >
                        Below you can give this guest access to one or multiple
                        users through a view-only mode.
                      </h4>
                      <Space direction="vertical">
                        <Select
                          showSearch
                          style={{ width: "475px", paddingLeft: "115px" }}
                          placeholder="None"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                          filterSort={(optionA, optionB) =>
                            optionA.children
                              .toLowerCase()
                              .localeCompare(optionB.children.toLowerCase())
                          }
                        >
                          <Option value="1">None</Option>
                          <Option value="2">Closed</Option>
                          <Option value="3">Communicated</Option>
                          <Option value="4">Identified</Option>
                          <Option value="5">Resolved</Option>
                        </Select>
                        <Form.Item style={{ paddingLeft: "115px" }}>
                          <Button style={{ width: "360px" }}>
                            Add user/class
                          </Button>
                        </Form.Item>
                      </Space>
                      <Divider />
                      <Form.Item
                        label=" Users added: "
                        style={{
                          paddingLeft: "30px",
                        }}
                      >
                        
                      </Form.Item> 
                    </Form.Item>
                    {/* </Col> */}
                {/* <Col> */}
                <Form.Item style={{ marginLeft: "100px" }} >
                <div style={{marginLeft:"50px"}}> {getBottomCheckBox()}</div>     
                    </Form.Item>
                 {/* </Col>  */}
                   </Space> 
                  {/* <Col style={{marginLeft:"10px"}}>{getBottomCheckBox()}</Col> */}
                </Row>

                <Form.Item shouldUpdate={true}>
                  {() => (
                    <Button loading={loading} type="primary" htmlType="submit">
                      <CheckOutlined /> Update
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
