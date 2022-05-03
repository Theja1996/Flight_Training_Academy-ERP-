import React, { useEffect, useState } from "react";
//import "../../../AdministrationPage/AccountSettingComponent/BookingFilterComponent/BookingFilter.css";

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
  Space,
} from "antd";
import { UserOutlined, LockOutlined, SaveFilled } from "@ant-design/icons";
import { getAll } from "../../../utils/APIUtils";
import { FaPencilAlt } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const { Option, OptGroup } = Select;

export default function BookingFilter() {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState(); // To disable submit button at the beginning.
  const [masterClassList, setMasterClassList] = useState([]);
  const [masterusersList, setmasterusersList] = useState([]);
  const [cretificatesList, setcretificatesList] = useState([]);
  const [InstructorList, setInstructorList] = useState([]);
  const [aircraftList, setaircraftList] = useState([]);
 const [loading, setLoading] = useState(false);
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  function handleChangeFilter(value) {
    console.log(`selected ${value}`);
  }

  function handleChangeAircraft(value) {
    console.log(`selected ${value}`);
  }

  function handleChangeINSTcrew(value) {
    console.log(`selected ${value}`);
  }
  function handleChangeClassroom(value) {
    console.log(`selected ${value}`);
  }

  function handleChangeStudent(value) {
    console.log(`selected ${value}`);
  }
  useEffect(() => {
    getAll("ClassRoom")
      .then((result) => setMasterClassList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getAll("users")
      .then((result) => setmasterusersList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getAll("MasterCertificateList")
      .then((result) => setcretificatesList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getAll("FlightInstructor")
      .then((result) => setInstructorList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getAll("Aircraft")
      .then((result) => setaircraftList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  function ondelete(key) {
    alert("Are you sure you want to delete this filter?");
    console.log(key);
  }
  return (
    <div>
      <Row style={{ marginTop: 20 }} offset={6}>
        <Col style={{ display: "flex" }} span={12} offset={6}>
          <h3 style={{ fontWeight: "bold", fontSize: "24px" }}>
            Booking - common filters
          </h3>
        </Col>
        <Divider></Divider>
      </Row>

      <Row style={{ marginTop: 20 }} offset={6}>
        <Col style={{ display: "flex" }} span={12} offset={6}>
          <div style={{ display: "flex", flexDirection: "column", gab: 10 }}>
            <label style={{ fontWeight: "bold" ,marginLeft:"-80px"}}>Filters</label>
            <Space direction="horizontal">
              <Select style={{ width: 200 }} onChange={handleChangeFilter}>
                <OptGroup label="Commen Filters">
                  <Option value="All">All</Option>
                  <Option value="Available">Available and Current</Option>
                </OptGroup>
              </Select>
              <FaPencilAlt style={{ fontSize: "18px" }} />
              <MdClose
                style={{ fontSize: "20px", fontWeight: "bold" }}
                onClick={ondelete}
              />
            </Space>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: 40 }} offset={6}>
        <Col style={{ display: "flex", gap: 20 }} span={12} offset={6}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gab: 10,

              width: 200,
            }}
          >
            <label style={{ fontWeight: "bold" }}>Aircraft</label>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="select one country"
              defaultValue={["All active"]}
              onChange={handleChangeAircraft}
              optionLabelProp="label"
            >
              <OptGroup label="Class">
                {aircraftList.map((pl) => (
                  <Option value={pl.class}>{pl.class}</Option>
                ))}
              </OptGroup>
              <OptGroup label="Current Airport">
                {aircraftList.map((pl) => (
                  <Option value={pl.current}>{pl.current}</Option>
                ))}
              </OptGroup>

              <OptGroup label="Home Airport">
                {aircraftList.map((pl) => (
                  <Option value={pl.home}>{pl.home}</Option>
                ))}
              </OptGroup>

              <OptGroup label="Maintanence">
                <Option value="Maintanence">Maintanence current</Option>
              </OptGroup>
              <OptGroup label="CallSign">
                {aircraftList.map((pl) => (
                  <Option value={pl.callSign}>{pl.callSign}</Option>
                ))}
              </OptGroup>
            </Select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gab: 10,

              width: 200,
            }}
          >
            <label style={{ fontWeight: "bold" }}>Inst. & crew</label>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="select one country"
              defaultValue={["All active"]}
              onChange={handleChangeINSTcrew}
              optionLabelProp="label"
            >
              <OptGroup label="callSign">
                {InstructorList.map((pl) => (
                  <Option value={pl.callsign}>
                    {pl.callsign}-{pl.user_First_name} {pl.user_Last_name}
                  </Option>
                ))}
              </OptGroup>
              <OptGroup label="Certificates">
                <Option value="Certificatescurrent">
                  Certificates current
                </Option>
                <Option value="Airportpass(current)">
                  Airport pass(current)
                </Option>
                <Option value="CPL(current)">CPL(current)</Option>
                <Option value="ELPC(current)">ELPC(current)</Option>
                <Option value="FI(A)(current)">FI(A)(current)</Option>
                <Option value="I/R(current)">I/R(current)</Option>
                <Option value="ME(current)">ME(current)</Option>
                <Option value="Medical(current)">Medical(current)</Option>
                <Option value="PPC(current)">
                  PPC/SEP(12 months)(current)
                </Option>
                <Option value="SE(current)">SE(current)</Option>
              </OptGroup>

              <OptGroup label="Roles">
                <Option value="Renter">Renter</Option>
                <Option value="Students">Students</Option>
                <Option value="Staff">Staff</Option>
                <Option value="Crew">Crew</Option>
                <Option value="Instructor">Instructor</Option>
                <Option value="Administrator">Administrator</Option>
              </OptGroup>
            </Select>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gab: 10,

              width: 200,
            }}
          >
            <label style={{ fontWeight: "bold" }}>Classrooms</label>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="select one country"
              defaultValue={["All active"]}
              onChange={handleChangeClassroom}
              optionLabelProp="label"
            >
              <OptGroup label="Name">
                {masterClassList.map((pl) => (
                  <Option value={pl.name}>{pl.name}</Option>
                ))}
              </OptGroup>
            </Select>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gab: 10,

              width: 200,
            }}
          >
            <label style={{ fontWeight: "bold" }}>Students</label>
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="select one country"
              defaultValue={["All active"]}
              onChange={handleChangeStudent}
              optionLabelProp="label"
            >
              <OptGroup label="callSign">
                {masterusersList.map((pl) => (
                  <Option value={pl.user_First_name}>
                    {pl.callsign}-{pl.user_First_name} {pl.user_Last_name}
                  </Option>
                ))}
              </OptGroup>
              <OptGroup label="Cretificates">
                {cretificatesList.map((pl) => (
                  <Option value={pl.name}>{pl.name}</Option>
                ))}
              </OptGroup>
              <OptGroup label="Classes">
                {masterusersList.map((pl) => (
                  <Option value={pl.batch}>{pl.batch}</Option>
                ))}
              </OptGroup>
              <OptGroup label="Programs">
                {masterusersList.map((pl) => (
                  <Option value={pl.programme}>{pl.programme}</Option>
                ))}
              </OptGroup>
            </Select>
          </div>
        </Col>
      </Row>

      <Row style={{ marginTop: 40 }} offset={6}>
        <Col style={{ display: "flex", gap: 20 }} span={12} offset={6}>
          <Form
            form={form}
            name="horizontal_login"
            layout="inline"
            onFinish={onFinish}
          >
            {" "}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gab: 10,

                width: 200,
              }}
            >
              <label style={{ fontWeight: "bold" }}>Filter name</label>
              <Form.Item name="username">
                <Input />
              </Form.Item>
            </div>
            <Form.Item shouldUpdate={true}>
              {() => (
                <Button
                  icon={<SaveFilled />}
                  type="primary"
                  htmlType="submit"
                  disabled={
                    !form.isFieldsTouched(true) ||
                    form.getFieldsError().filter(({ errors }) => errors.length)
                      .length
                  }
                  style={{ marginTop: "22px" }}
                >
                  Save Filter
                </Button>
              )}
            </Form.Item>
            <Form.Item shouldUpdate={true}>
              {() => (
                <Button
                  icon={<SaveFilled />}
                  type="primary"
                  htmlType="submit"
                  style={{ marginTop: "22px" }}
                >
                  Update filter
                </Button>
              )}
            </Form.Item>
            <Form.Item shouldUpdate={true}>
              {() => (
                <Button
                  icon={<MdClose style={{ fontSize: "18px" }} />}
                  htmlType="submit"
                  style={{ marginTop: "22px" }}
                >
                  Cancel edit filter
                </Button>
              )}
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
