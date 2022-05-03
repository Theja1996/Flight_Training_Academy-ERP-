import React from "react";
import "../../../AdministrationPage/AccountSettingComponent/FilterMaintanenceWarningComponent/FilterMaintanenceWarning.css";

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

export default function FilterMaintanenceWarning() {
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
            Maintenance warning - common filters
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
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              backgroundColor: "gray",
            }}
            type="inner"
            title="Filter definition"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: ["100%"],
              }}
            >
              <Form
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
                name="horizontal_login"
                layout="inline"
                onFinish={onFinish}
                initialValues={{
                  Plane: true,
                  Helicopter: true,
                  Simulater: true,
                  Single: true,
                  Multi: true,
                  Missing: true,
                  Requiring: true,
                  Expired: true,
                  Expiry: true,
                }}
              >
                <Form.Item label="Filter name" name="username">
                  <Input placeholder="All" />
                </Form.Item>
                <Form.Item label="Call sign" name="username">
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="select one country"
                    defaultValue={["Select a call sign"]}
                    // onChange={handleChangeStudent}
                    optionLabelProp="label"
                  >
                    <OptGroup label="CallSign">
                      <Option value="GAB">8Q-GAB</Option>
                      <Option value="GAE">8Q-GAE</Option>
                      <Option value="GAF">8Q-GAF</Option>
                      <Option value="GAH">8Q-GAH</Option>
                      <Option value="GAI">8Q-GAI</Option>
                      <Option value="GAK">8Q-GAK</Option>
                      <Option value="GAM">8Q-GAM</Option>
                      <Option value="GAL">8Q-GAL</Option>
                      <Option value="GAJ">8Q-GAJ</Option>
                      <Option value="GAD">8Q-GAD</Option>
                      <Option value="GAG">8Q-GAG</Option>

                      <Option value="ELITEFNPT(single)">
                        ELITE FNPT 2 - single
                      </Option>
                      <Option value="ELITEFNPT(twin)">
                        ELITE FNPT 2 - twin
                      </Option>
                      <Option value="FRASCA(single)">
                        FRASCA 141 - single
                      </Option>
                    </OptGroup>
                  </Select>
                </Form.Item>
                <Form.Item label="Model" name="username">
                  <Input placeholder="Search for a spesific model" />
                </Form.Item>
                <Form.Item label="Aircraft type" name="username">
                  <div style={{ display: "flex", gap: 20 }}>
                    <Form.Item name="Plane" valuePropName="checked">
                      <Checkbox>Plane</Checkbox>
                    </Form.Item>
                    <Form.Item name="Helicopter" valuePropName="checked">
                      <Checkbox>Helicopter</Checkbox>
                    </Form.Item>
                    <Form.Item name="Simulater" valuePropName="checked">
                      <Checkbox>Simulater</Checkbox>
                    </Form.Item>
                  </div>
                </Form.Item>
                <Form.Item label="Aircraft class" name="username">
                  <div style={{ display: "flex", gap: 20 }}>
                    <Form.Item name="Single" valuePropName="checked">
                      <Checkbox>Single-engine</Checkbox>
                    </Form.Item>
                    <Form.Item name="Multi" valuePropName="checked">
                      <Checkbox>Multi-engine</Checkbox>
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
                  </div>
                </Form.Item>

                <Form.Item label="Maintanence Part" name="username">
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    placeholder="select one country"
                    defaultValue={["Select a certificate type"]}
                    // onChange={handleChangeStudent}
                    optionLabelProp="label"
                  ></Select>
                </Form.Item>
                <div style={{ display: "flex", gap: 20 }}>
                  <Form.Item label="Sort by" name="username">
                    <Select
                      showSearch
                      style={{ width: 200 }}
                      placeholder="select one country"
                      defaultValue={["Status"]}
                      // onChange={handleChangeStudent}
                      optionLabelProp="label"
                    >
                      <Option value="Amir">Call sign</Option>
                      <Option value="Amir">Model</Option>
                      <Option value="Amir">Maintanence Part</Option>
                      <Option value="Amir">Days left</Option>
                      <Option value="Amir">Hours Left</Option>
                      <Option value="Amir">Cycles Left</Option>
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
