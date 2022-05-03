import React from "react";
import "../../../AdministrationPage/AccountSettingComponent/FilterCertificateWarningComponent/FilterCertificateWarning.css";

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
} from "antd";
import { UserOutlined, LockOutlined, SaveFilled } from "@ant-design/icons";

const { Option, OptGroup } = Select;

export default function FilterCertificateWarning() {
  function handleChangeAll(value) {}

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div>
    
    
      <Row style={{ marginTop: 20 }} offset={6}>
        <Col
          style={{ display: "flex", justifyContent: "space-between" }}
          span={18}
          offset={2}
        >
          <h3 style={{ fontWeight: "bold" }}>
            Certificate warning - common filters
          </h3>
          <Select
            // style={{ width: "100%" }}
            showSearch
            style={{ width: 200 }}
            placeholder="select one country"
            defaultValue={["All "]}
            onChange={handleChangeAll}
            optionLabelProp="label"
          >
            <OptGroup label="common">
              <Option value="All">All</Option>
              <Option value="All">Current</Option>
              <Option value="All">Expaired</Option>
              <Option value="All">Expairy Warnings</Option>
              <Option value="All">Missing</Option>
              <Option value="All">To approvel</Option>
              <Option value="">
                {" "}
                <a href="">[Add new filter]</a>{" "}
              </Option>
            </OptGroup>
          </Select>
        </Col>
        <Divider></Divider>
      </Row>

      <Row style={{ marginTop: 20 }} offset={6}>
        <Col
          style={{ borderStyle: "outset", justifyContent: "flex-end" }}
          span={12}
          offset={8}
        >
          <Card
            className="card"
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
            type="inner"
            title="Filter definition"
          >
            <div
              className="card-div"
              style={{ display: "flex", flexDirection: "column" }}
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
                  <div style={{ display: "flex", gap: 20 }}>
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
                  </div>
                </Form.Item>
                <Form.Item label="Status" name="username">
                  <div style={{ display: "flex", gap: 20 }}>
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
                  </div>
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
                <div style={{ display: "flex", gap: 20 }}>
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
                </div>
                <div>
                  <Button icon={<SaveFilled />}>Save Filters</Button>
                </div>
              </Form>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
