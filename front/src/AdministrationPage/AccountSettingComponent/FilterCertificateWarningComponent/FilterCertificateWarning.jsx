import React, { useState, useEffect } from "react";
import {
  Button,
  Dropdown,
  Table,
  Row,
  Col,
  Divider,
  Collapse,
  Tabs,
  Switch,
  Form,
  Input,
  Checkbox,
  Select,
  Card,
  Space,
} from "antd";
import { UserOutlined, LockOutlined, SaveFilled } from "@ant-design/icons";
import { getAll } from "../../../utils/APIUtils";

export default function FilterCertificateWarning() {
  const { Option, OptGroup } = Select;
  const [masterusersList, setmasterusersList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [cretificatesList, setcretificatesList] = useState([]);
  useEffect(() => {
    getAll("MasterCertificateList")
      .then((result) => setcretificatesList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getAll("users")
      .then((result) => setmasterusersList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  function handleChangeAll(value) {}

  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  function onChange(checkedValues) {
    console.log("checked = ", checkedValues);
  }
  const options = [
    { label: "Renter ", value: "renter" },
    { label: "Student", value: "student" },
    { label: "Staff", value: "staff" },
    { label: "Crew ", value: "crew" },
    { label: "Instructor", value: "instructor" },
    { label: "Administrator", value: "administrator" },
  ];

  const StatusOptions = [
    { label: "Missing", value: "missing" },
    { label: "Requiring approval", value: "requiring" },
    { label: " Expired", value: "expired" },
    { label: " Expiry Warning ", value: "Warning " },
    { label: "Current ", value: "current" },
  ];

  return (
    <>
      <Row justify="space-around" style={{ marginTop: "10px" }}>
        <Space direction="horizontal">
          {" "}
          <Col span={24}>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginTop: "15px",
                textAlign: "start",
              }}
            >
              Certificate warning - common filters
            </h1>
          </Col>
          <Col>
            <Space>
              <div>
                <Select
                  showSearch
                  style={{ width: 200, marginLeft: "300px", marginTop: "25px" }}
                  defaultValue={["All "]}
                >
                  <OptGroup label="common">
                    <Option value="All">All</Option>
                    <Option value="All">Current</Option>
                    <Option value="All">Expaired</Option>
                    <Option value="All">Expairy Warnings</Option>
                    <Option value="All">Missing</Option>
                    <Option value="All">To approvel</Option>
                    <Option value="">
                      <a href="">[Add new filter]</a>{" "}
                    </Option>
                  </OptGroup>
                </Select>
              </div>
            </Space>
          </Col>
        </Space>
      </Row>

      <Row justify="center">
        <Card
          style={{ width: 750, marginTop: "15px", backgroundColor: "#d2eaf0" }}
          title="Filter definition"
        >
          <Form
            style={{ display: "flex", flexDirection: "column", gap: 15 }}
            name="horizontal_login"
            layout="inline"
            onFinish={onFinish}
            initialValues={{
              renter: true,
              student: true,
              Staff: true,
              crew: true,
              instructor: true,
              administrator: true,
              Missing: true,
              Requiring: true,
              Expired: true,
              Expiry: true,
            }}
          >
            <Form.Item
              label="Filter name"
              name="name"
              style={{ paddingLeft: "46px" }}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Users"
              name="username"
              style={{ paddingLeft: "80px" }}
            >
              <Select
                showSearch
                style={{ width: "100%" }}
                defaultValue={["type to search"]}
              >
                {masterusersList.map((pl) => (
                  <Option value={pl.user_First_name}>
                    {pl.callsign}-{pl.user_First_name} {pl.user_Last_name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Roles"
              name="roles"
              style={{
                marginLeft: "80px",
              }}
            >
              <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
                <Row>
                  <Space>
                    {options.map((o) => (
                      <Checkbox value={o.value}>{o.label}</Checkbox>
                    ))}
                  </Space>
                </Row>{" "}
              </Checkbox.Group>{" "}
            </Form.Item>

            <Form.Item
              name="status"
              label="Status"
              style={{
                marginLeft: "75px",
              }}
            >
              {" "}
              <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
                {" "}
                <Row>
                  <Space>
                    {StatusOptions.map((o) => (
                      <Checkbox value={o.value}>{o.label}</Checkbox>
                    ))}
                  </Space>
                </Row>
              </Checkbox.Group>
            </Form.Item>

            <Form.Item
              label="Certificate Types"
              name="certificateTypes"
              style={{ paddingLeft: "10px" }}
            >
              <Select
                showSearch
                style={{ width: "100%" }}
                defaultValue={["type to search"]}
              >
                <OptGroup label="Active">
                  {cretificatesList.map((pl) => (
                    <Option value={pl.name}>{pl.name}</Option>
                  ))}
                </OptGroup>

                <OptGroup label="Disebled"></OptGroup>
              </Select>
            </Form.Item>

            <Form.Item
              name="status"
              label="Status"
              style={{
                marginLeft: "75px",
              }}
            >
              <Space direction="horizontal"    style={{
                marginLeft: "-153px",
              }}>
                <Select  style={{ width: 200 }}>
                  <Option value="First name">First name</Option>
                  <Option value="Last name">Last name</Option>
                  <Option value="Certificate Type">Certificate Type</Option>
                  <Option value="Status">Status</Option>
                  <Option value="Expiry">Expiry</Option>
                </Select>
                <Select  style={{ width: 200 }}>
                  <Option value="Ascending">Ascending</Option>
                  <Option value="Descending">Descending</Option>
                </Select>
              </Space>
            </Form.Item>
          </Form>
        
        </Card>
        {/* <Card
            className="card"
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
            type="inner"
            title="Filter definition"
          >
          
              <Form
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
                name="horizontal_login"
                layout="inline"
                onFinish={onFinish}
                initialValues={{
                  renter: true,
                  student: true,
                  Staff: true,
                  crew: true,
                  instructor: true,
                  administrator: true,
                  Missing: true,
                  Requiring: true,
                  Expired: true,
                  Expiry: true,
                }}
              >
                <Form.Item label="Filter name" name="username">
                  <Input placeholder="All" />
                </Form.Item>
                <Form.Item label="Users" name="username">
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="select one country"
                    defaultValue={["type to search"]}
                    // onChange={handleChangeStudent}
                    optionLabelProp="label"
                  >
                    <Option value="Amir">Amir- Aamir Saeed Ansari</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Roles" name="username">
                    <Form.Item name="renter" valuePropName="checked">
                      <Checkbox>renter</Checkbox>
                    </Form.Item>
                    <Form.Item name="student" valuePropName="checked">
                      <Checkbox>student</Checkbox>
                    </Form.Item>
                    <Form.Item name="Staff" valuePropName="checked">
                      <Checkbox>Staff</Checkbox>
                    </Form.Item>
                    <Form.Item name="crew" valuePropName="checked">
                      <Checkbox>crew</Checkbox>
                    </Form.Item>
                    <Form.Item name="instructor" valuePropName="checked">
                      <Checkbox>instructor</Checkbox>
                    </Form.Item>
                    <Form.Item name="administrator" valuePropName="checked">
                      <Checkbox>administrator</Checkbox>
                    </Form.Item>

                </Form.Item>
                <Form.Item label="Status" name="username">
                    <Form.Item name="Missing" valuePropName="checked">
                      <Checkbox>Missing</Checkbox>
                    </Form.Item>
                    <Form.Item name="Requiring" valuePropName="checked">
                      <Checkbox>Requiring approval</Checkbox>
                    </Form.Item>
                    <Form.Item name="Expired" valuePropName="checked">
                      <Checkbox>Expired</Checkbox>
                    </Form.Item>
                    <Form.Item name="Expiry" valuePropName="checked">
                      <Checkbox>Expiry Warning</Checkbox>
                    </Form.Item>
                    <Form.Item name="Current">
                      <Checkbox>Current</Checkbox>
                    </Form.Item>

                </Form.Item>
                <Form.Item label="Certificate types" name="username">
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="select one country"
                    defaultValue={["Select a certificate type"]}
                    // onChange={handleChangeStudent}
                    optionLabelProp="label"
                  >
                    <OptGroup label="Active">
                      <Option value="Amir">Airport pass</Option>
                      <Option value="Amir">CPL</Option>
                      <Option value="Amir">ELPC</Option>
                      <Option value="Amir">FI(A)</Option>
                      <Option value="Amir">I/R</Option>
                      <Option value="Amir">ME</Option>
                      <Option value="Amir">Medical</Option>
                      <Option value="Amir">PPC/SEP(12 month)</Option>
                      <Option value="Amir">SE</Option>
                    </OptGroup>
                    <OptGroup label="Disabled"></OptGroup>
                  </Select>
                </Form.Item>

                  <Form.Item label="Sort by" name="username">
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      placeholder="select one country"
                      defaultValue={["Status"]}
                      // onChange={handleChangeStudent}
                      optionLabelProp="label"
                    >
                      <Option value="Amir">First Name</Option>
                      <Option value="Amir">Last Name</Option>
                      <Option value="Amir">Certificate type</Option>
                      <Option value="Amir">Status</Option>
                      <Option value="Amir">Expairy</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item name="username">
                    <Select
                      showSearch
                      style={{ width: "100%" }}
                      placeholder="select one country"
                      defaultValue={["Desasanding"]}
                      // onChange={handleChangeStudent}
                      optionLabelProp="label"
                    >
                      <Option value="Amir">Ascending</Option>
                      <Option value="Amir">Descending</Option>
                    </Select>
                  </Form.Item>
              
                  <Button icon={<SaveFilled />}>Save Filters</Button>
              
              </Form>
          </Card> */}
      </Row>
    </>
  );
}
