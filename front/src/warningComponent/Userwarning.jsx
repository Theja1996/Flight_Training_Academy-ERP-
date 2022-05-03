import React, { useState } from "react";

import "../warningComponent/Userwarning.css";
import { Form, Input, Checkbox } from "antd";
import { Button, Dropdown, Table, Menu, Select, Row, Col } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import {
  SearchOutlined,
  TableOutlined,
  BarsOutlined,
  PlusOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
  FileTextOutlined,
  CaretDownOutlined,
  CopyOutlined,
} from "@ant-design/icons";
import userWarning from "../Datacomponents/warningData.json";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
import { FaGraduationCap, FaPlus, FaRegEnvelope } from "react-icons/fa";

const { Option } = Select;
const tailLayout = {
  wrapperCol: { offset: 0.5, span: 20 },
};
const submitlayout = {
  wrapperCol: { offset: 6, span: 20 },
};

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 18 },
};

export default function Userwarning() {
  const [dovisual, setdovisual] = useState(false);

  const visualForm = () => {
    setdovisual(!dovisual);
  };
  const handleChange = (value) => {
    console.log(`value = `, value);
  };
  // const columns = [
  //   {
  //     title: "First name",
  //     dataIndex: "firstName",
  //     key: "firstName",
  //     render: (text, render) => (
  //       <Row gutter={8}>
  //         <Col>
  //           <a href="">{text}</a>
  //         </Col>
  //       </Row>
  //     ),
  //   },
  //   {
  //     title: "Last name",
  //     dataIndex: "lastName",
  //     key: "lastName",
  //     render: (text, render) => (
  //       <Row gutter={8}>
  //         <Col>
  //           <a href="">{text}</a>
  //         </Col>
  //       </Row>
  //     ),
  //   },
  //   {
  //     title: "Certificate type",
  //     dataIndex: "Certificatetype",
  //     render: (text, render) => (
  //       <Row
  //         style={{
  //           display: "flex",
  //           justifyContent: "space-between",
  //           backgroundColor: "pink",
  //         }}
  //         gutter={8}
  //       >
  //         <Col>{text}</Col>
  //         <Col>{<FaGraduationCap />}</Col>
  //       </Row>
  //     ),
  //   },
  //   {
  //     title: "Status",
  //     dataIndex: "Status",
  //     key: "Status",
  //     render: (text, render) => (
  //       <Row gutter={8}>
  //         <Col style={{ fontWeight: "bold" }}>{text}</Col>
  //       </Row>
  //     ),
  //   },
  //   {
  //     title: "Expairy",
  //     dataIndex: "Expairy",
  //     key: "Expairy",
  //   },
  //   {
  //     title: "Action",
  //     render: (text, render) => (
  //       <Row
  //         style={{ display: "flex", justifyContent: "space-between" }}
  //         gutter={8}
  //       >
  //         <Col>
  //           <Button icon={<FaRegEnvelope />}></Button>
  //         </Col>
  //         <Col>
  //           <Button icon={<FaPlus />}>Add</Button>
  //         </Col>
  //       </Row>
  //     ),
  //   },
  // ];

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  // const warningform = (
  //   <div
  //     style={{
  //       width: 800,
  //       borderStyle: "outset",
  //       backgroundColor: "lightgray",
  //     }}
  //   >
  //     <h2>Filter definition</h2>
  //     <Form
  //       {...layout}
  //       name="basic"
  //       initialValues={{ remember: true }}
  //       onFinish={onFinish}
  //       onFinishFailed={onFinishFailed}
  //     >
  //       <Form.Item
  //         label="Filter name"
  //         name="username"
  //         rules={[{ required: true, message: "Please input your username!" }]}
  //       >
  //         <div style={{ display: "flex", gap: 10 }}>
  //           <Input placeholder="All" disabled />{" "}
  //           <Button
  //             style={{ borderStyle: "inset" }}
  //             icon={<CopyOutlined />}
  //           ></Button>
  //         </div>
  //       </Form.Item>

  //       <Form.Item
  //         label="users"
  //         name="password"
  //         rules={[{ required: true, message: "Please input your password!" }]}
  //       >
  //         <Select defaultValue="type to search" style={{ width: 600 }}>
  //           <Option value="Status">Status</Option>
  //           <Option value="Firstname">First name</Option>
  //           <Option value="Lastname">Last name</Option>
  //           <Option value="Certificatetype">Certificate type</Option>
  //           <Option value="Expairy">Expairy</Option>
  //         </Select>
  //       </Form.Item>

  //       <Form.Item
  //         {...tailLayout}
  //         label="Roles"
  //         name="remember"
  //         valuePropName="checked"
  //       >
  //         <Checkbox>Renter</Checkbox> <Checkbox>student</Checkbox>{" "}
  //         <Checkbox>staff</Checkbox>
  //         <Checkbox>crew</Checkbox> <Checkbox>instructor</Checkbox>
  //         <Checkbox>Adminsitrator</Checkbox>
  //       </Form.Item>

  //       <Form.Item
  //         {...tailLayout}
  //         label="Roles"
  //         name="remember"
  //         valuePropName="checked"
  //       >
  //         <Checkbox>Current</Checkbox> <Checkbox>Expaired</Checkbox>{" "}
  //         <Checkbox>Expairy warnings</Checkbox>
  //         <Checkbox>Missing</Checkbox>
  //         <Checkbox>Requiring aproval</Checkbox>
  //       </Form.Item>

  //       <Form.Item
  //         label="Certificate types"
  //         name="password"
  //         rules={[{ required: true, message: "Please input your password!" }]}
  //       >
  //         <Select
  //           defaultValue="select a certificate type"
  //           style={{ width: 600 }}
  //         >
  //           <Option value="Status">Airport pass</Option>
  //           <Option value="Firstname">CPL</Option>
  //           <Option value="Lastname">ELPC</Option>
  //           <Option value="Certificatetype">FI(A)</Option>
  //           <Option value="Expairy">I/R</Option>
  //           <Option value="Expairy">ME</Option>
  //           <Option value="Expairy">Medical</Option>
  //           <Option value="Expairy">PPC/SEP(12 months)</Option>
  //           <Option value="Expairy">SE</Option>
  //           <h2>Desabled</h2>
  //         </Select>
  //       </Form.Item>

  //       <Form.Item
  //         label="Sort by"
  //         name="password"
  //         rules={[{ required: true, message: "Please input your password!" }]}
  //       >
  //         <div style={{ display: "flex", gap: 10 }}>
  //           <Select defaultValue="Stutas" style={{ width: 180 }}>
  //             <Option value="Status">Status</Option>
  //             <Option value="Firstname">First name</Option>
  //             <Option value="Lastname">Last name</Option>
  //             <Option value="Certificatetype">Certificate type</Option>
  //             <Option value="Expairy">Expairy</Option>
  //           </Select>
  //           <Select defaultValue="All" style={{ width: 180 }}>
  //             <Option value="Assending">Assending</Option>
  //             <Option value="Dessending">Dessending</Option>
  //           </Select>
  //         </div>
  //       </Form.Item>

  //       <Form.Item {...submitlayout}>
  //         <Button
  //           style={{ borderStyle: "inset" }}
  //           type="primary"
  //           icon={<i class="fas fa-search"></i>}
  //         >
  //           Search
  //         </Button>
  //       </Form.Item>
  //     </Form>
  //   </div>
  // );

  const pdf = () => (
    <Menu>
      <Menu.Item key="0">
        <Button>
          <FilePdfOutlined />
          PDF..
        </Button>
      </Menu.Item>
      <Menu.Item key="0">
        <Button>
          <FileExcelOutlined />
          XML
        </Button>
      </Menu.Item>
      <Menu.Item key="0">
        <Button>
          <FileTextOutlined />
          CSV (Excel)
        </Button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
     

      <div className="title-card">
        <div
          style={{
            display: "flex",
            gap: 5,
          }}
        >
          <h3>Certificate Warnings</h3>
          <p style={{ color: "grey" }}>waring for selected filters:amount</p>
        </div>
        <div>
          <Button style={{ borderStyle: "inset" }} type="">
            <Dropdown overlay={pdf} trigger={["click"]}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                <DownloadOutlined /> Export as <CaretDownOutlined />
              </a>
            </Dropdown>
          </Button>
        </div>
        <div style={{ display: "flex", gap: 5 }}>
          <Select defaultValue="All" style={{ width: 180 }}>
            <div>
              <Input />
            </div>
            <div>
              <h3 style={{ fontWeight: "bold" }}>Common</h3>
            </div>
            <Option value="All">All</Option>
            <Option value="Current">Current</Option>
            <Option value="Expaired">Expaired</Option>
            <Option value="Expairy warnings">Expairy warnings</Option>
            <Option value="Missing">Missing</Option>
            <Option value="to approval">to approval</Option>
            <div>
              <h3 style={{ fontWeight: "bold" }}>Personol</h3>
            </div>
            <div>
              <a href="">
                <div>
                  <i class="fas fa-plus"></i>[Add new filters]
                </div>
              </a>
            </div>
          </Select>
          <Button
            style={{ borderStyle: "inset" }}
            type="primary"
            icon={<i class="fas fa-search"></i>}
          >
            Search
          </Button>
          {/* <Dropdown overlay={warningform} trigger={["click"]}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            > */}
          <Button
            style={{ borderStyle: "inset" }}
            type="primary"
            icon={
              <i class="fas fa-filter">
                <i class="fas fa-sort-down"></i>
              </i>
            }
            onClick={visualForm}
          ></Button>
          {/* </a>
          </Dropdown> */}
        </div>
      </div>

      {dovisual ? (
        <div
          style={{
            width: 800,
            borderStyle: "outset",
            backgroundColor: "lightgray",
            float: "right",
            marginTop: 20,
            marginBottom: 40,
            marginRight: 40,
          }}
        >
          <h2>Filter definition</h2>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Filter name"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <div style={{ display: "flex", gap: 10 }}>
                <Input placeholder="All" disabled />{" "}
                <Button
                  style={{ borderStyle: "inset" }}
                  icon={<CopyOutlined />}
                ></Button>
              </div>
            </Form.Item>

            <Form.Item label="users" name="user">
              <Input />
              {/* <Select
                defaultValue="type to search"
                style={{ width: 600 }}
                onChange={handleChange}
              >
                <Option value="Status">Status</Option>
                <Option value="Firstname">First name</Option>
                <Option value="Lastname">Last name</Option>
                <Option value="Certificatetype">Certificate type</Option>
                <Option value="Expairy">Expairy</Option>
              </Select> */}
            </Form.Item>

            <Form.Item
              {...tailLayout}
              label="Roles"
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Renter</Checkbox> <Checkbox>student</Checkbox>{" "}
              <Checkbox>staff</Checkbox>
              <Checkbox>crew</Checkbox> <Checkbox>instructor</Checkbox>
              <Checkbox>Adminsitrator</Checkbox>
            </Form.Item>

            <Form.Item
              {...tailLayout}
              label="Roles"
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>Current</Checkbox> <Checkbox>Expaired</Checkbox>{" "}
              <Checkbox>Expairy warnings</Checkbox>
              <Checkbox>Missing</Checkbox>
              <Checkbox>Requiring aproval</Checkbox>
            </Form.Item>

            <Form.Item label="Certificate types" name="certificate">
              <Select
                defaultValue="select a certificate type"
                style={{ width: 600 }}
              >
                <Option value="Status">Airport pass</Option>
                <Option value="Firstname">CPL</Option>
                <Option value="Lastname">ELPC</Option>
                <Option value="Certificatetype">FI(A)</Option>
                <Option value="Expairy">I/R</Option>
                <Option value="Expairy">ME</Option>
                <Option value="Expairy">Medical</Option>
                <Option value="Expairy">PPC/SEP(12 months)</Option>
                <Option value="Expairy">SE</Option>
                <h2>Desabled</h2>
              </Select>
            </Form.Item>

            <Form.Item label="Sort by" name="sort">
              <div style={{ display: "flex", gap: 10 }}>
                <Select defaultValue="Stutas" style={{ width: 180 }}>
                  <Option value="Status">Status</Option>
                  <Option value="Firstname">First name</Option>
                  <Option value="Lastname">Last name</Option>
                  <Option value="Certificatetype">Certificate type</Option>
                  <Option value="Expairy">Expairy</Option>
                </Select>
                <Select defaultValue="All" style={{ width: 180 }}>
                  <Option value="Assending">Assending</Option>
                  <Option value="Dessending">Dessending</Option>
                </Select>
              </div>
            </Form.Item>

            <Form.Item {...submitlayout}>
              <Button
                style={{ borderStyle: "inset" }}
                type="primary"
                icon={<i class="fas fa-search"></i>}
              >
                Search
              </Button>
            </Form.Item>
          </Form>
        </div>
      ) : (
        ""
      )}

      <div className="waring-table">
        {/* <Table columns={columns} dataSource={userWarning}>
        </Table> */}
        <Col span={22} offset={(1, 1)}>
          <div className="table0">
            <table>
              <thead>
                <tr>
                  <th>First name</th>
                  <th>Last name</th>
                  <th style={{ width: 300 }}>Certificate type</th>
                  <th>Status</th>
                  <th>Expairy</th>
                  <th></th>
                </tr>
              </thead>
              <tbody />
              <tbody>
                <tr className="odd">
                  <td>
                    <a>Hussain</a>
                  </td>
                  <td>
                    <a href="">Naish</a>
                  </td>
                  <td style={{ backgroundColor: "pink" }}>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      gutter={8}
                    >
                      <Col>Medical (1)</Col>
                      <Col>{<FaGraduationCap />}</Col>
                    </Row>
                  </td>
                  <td>Missing</td>
                  <td></td>
                  <td>
                    {" "}
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      gutter={8}
                    >
                      <Col>
                        <Button icon={<FaRegEnvelope />}></Button>
                      </Col>
                      <Col>
                        <Button icon={<FaPlus />}>Add</Button>
                      </Col>
                    </Row>
                  </td>
                </tr>

                <tr className="even">
                  <td>
                    <a>Hasitha</a>
                  </td>
                  <td>
                    <a href="">Mudalige</a>
                  </td>
                  <td style={{ backgroundColor: "pink" }}>
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      gutter={8}
                    >
                      <Col>Medical (1)</Col>
                      <Col>{<FaGraduationCap />}</Col>
                    </Row>
                  </td>
                  <td>Expired</td>
                  <td>07.12.2020</td>
                  <td>
                    {" "}
                    <Row
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      gutter={8}
                    >
                      <Col>
                        <Button icon={<FaRegEnvelope />}></Button>
                      </Col>
                      <Col>
                        <Button icon={<FaPlus />}>Add</Button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </div>
    </div>
  );
}
