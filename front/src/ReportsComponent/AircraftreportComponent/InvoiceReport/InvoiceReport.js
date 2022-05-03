import React from "react";

import "../../../ReportsComponent/AircraftreportComponent/InvoiceReport/InvoiceReport.css";
import {
  CaretDownOutlined,
  DownloadOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileTextOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Menu,
  Row,
  Select,
  Space,
  Divider,
  Checkbox,
} from "antd";
import { useState } from "react";

const { Option } = Select;

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

export default function InvoiceReport() {
  const [size, setsize] = useState();
  const [optionvalue, setoptionvalue] = useState();
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");

  function onstartdate(date, dateString) {
    setstartdate(dateString);
    console.log(date, dateString, startdate);
  }

  function onenddate(date, dateString) {
    setenddate(dateString);
    console.log(date, dateString);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const pdf = () => (
    <Menu>
      <Menu.Item key="0">
        <Button>
          <FilePdfOutlined />
          PDF..
        </Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Button>
          <FileExcelOutlined />
          XML
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button>
          <FileTextOutlined />
          CSV (Excel)
        </Button>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
     
      <div>
        <Row gutter={[16, 16]}>
          <Col span={16} offset={4}>
            <h3 style={{ fontWeight: "bold" }}>
              Invoice report{startdate.concat(" - ")}
              {enddate}
            </h3>
          </Col>
        </Row>
        <Divider></Divider>
        <Row style={{ marginTop: 10 }}>
          <Col span={16} offset={4}>
            <Row gutter={16} justify="space-between">
              <div style={{ display: "flex" }}>
                <Col>
                  <DatePicker onChange={onstartdate} />
                </Col>
                <Col>
                  <DatePicker onChange={onenddate} />
                </Col>
                <Col>
                  <Select
                    defaultValue="Income"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="Income">Income</Option>
                    <Option value="lucy">Expences</Option>
                  </Select>
                </Col>
                <Col>
                  <Checkbox onChange={onChange}>
                    Only show not invoiced
                  </Checkbox>
                </Col>
                <Col>
                  <Button style={{ borderStyle: "outset" }}>
                    <SearchOutlined />
                    Find report
                  </Button>
                </Col>
              </div>
              <Col>
                <React.Fragment>
                  <Space size={size}>
                    <Button
                      type="dashed"
                      style={{ borderStyle: "outset", backgroundColor: "grey" }}
                    >
                      <Dropdown overlay={pdf} trigger={["click"]}>
                        <a
                          className="ant-dropdown-link"
                          onClick={(e) => e.preventDefault()}
                        >
                          <DownloadOutlined /> Export as <CaretDownOutlined />
                        </a>
                      </Dropdown>
                    </Button>
                  </Space>
                </React.Fragment>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col span={16} offset={4}>
            <table className="table table-condensed">
              <thead>
                <tr>
                  <th colSpan={13}>Students and Renters</th>
                </tr>
                <tr>
                  <th>Name</th>
                  <th>School flights</th>
                  <th>Landings</th>
                  <th>Extra theory</th>
                  <th>Class theory</th>
                  <th>Rentals</th>
                  <th>Cancellations</th>
                </tr>
              </thead>
              <tbody>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16958/income?from=01.12.2020&to=17.12.2020"
                    >
                      {" "}
                      Dhaisam Sobah - Mohamed Dhaisam Sobah
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/26710/income?from=01.12.2020&to=17.12.2020"
                    >
                      A.Haleem - Ahmed Haleem
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16930/income?from=01.12.2020&to=17.12.2020"
                    >
                      A.Haris - Abdulla Haris
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:06</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>2</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16933/income?from=01.12.2020&to=17.12.2020"
                    >
                      A.MAISH - Ali Maish
                    </a>
                  </td>
                  <td>
                    0:00 /<b>2:54</b>
                  </td>
                  <td>
                    0 /<b>7</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>1</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/22076/income?from=01.12.2020&to=17.12.2020"
                    >
                      Ahmeem - Ahmeem Ahmed
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:30</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>1</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/23714/income?from=01.12.2020&to=17.12.2020"
                    >
                      Ahula - Ahula Shareef{" "}
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>1</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17928/income?from=01.12.2020&to=17.12.2020"
                    >
                      Aiman - Aiman Saaim
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:06</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16884/income?from=01.12.2020&to=17.12.2020"
                    >
                      ALI AMEER - Ali Ameer Mohamed
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:54</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/22071/income?from=01.12.2020&to=17.12.2020"
                    >
                      Ali Rasheed Moosa - Rasheed Moosa{" "}
                    </a>
                  </td>
                  <td>
                    0:00 /<b>3:30</b>
                  </td>
                  <td>
                    0 /<b>4</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/19975/income?from=01.12.2020&to=17.12.2020"
                    >
                      Allam - Mohamed Allam
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17927/income?from=01.12.2020&to=17.12.2020"
                    >
                      Amanathulla - Amanathulla Jameel{" "}
                    </a>
                  </td>
                  <td>
                    0:00 /<b>3:30</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/23713/income?from=01.12.2020&to=17.12.2020"
                    >
                      Anfaal - Anfaal Naeem
                    </a>
                  </td>
                  <td>
                    0:00 /<b>4:54</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td>
                    0 /<b>1</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16984/income?from=01.12.2020&to=17.12.2020"
                    >
                      ASFAAG - Asfaag Abdul Sathaar
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16831/income?from=01.12.2020&to=17.12.2020"
                    >
                      AZRA - Azra Hussain
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:48</b>
                  </td>
                  <td>
                    0 /<b>2</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16955/income?from=01.12.2020&to=17.12.2020"
                    >
                      badheeu - Badheeu Mohamed
                    </a>
                  </td>
                  <td>
                    0:00 /<b>3:18</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/22079/income?from=01.12.2020&to=17.12.2020"
                    >
                      Eman - Eman Mohamed{" "}
                    </a>
                  </td>
                  <td>
                    0:00 /<b>2:30</b>
                  </td>
                  <td>
                    0 /<b>2</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16942/income?from=01.12.2020&to=17.12.2020"
                    >
                      EYMAAN - Eymaan Ibrahim
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:30</b>
                  </td>
                  <td>
                    0 /<b>2</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/23702/income?from=01.12.2020&to=17.12.2020"
                    >
                      Failam - Mohamed Failam Shafeeu
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:12</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/28399/income?from=01.12.2020&to=17.12.2020"
                    >
                      Ferdous - Shah Ferdous Momand
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:30</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16899/income?from=01.12.2020&to=17.12.2020"
                    >
                      H.Abdullah - Hassan Abdullah
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:54</b>
                  </td>
                  <td>
                    0 /<b>2</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16989/income?from=01.12.2020&to=17.12.2020"
                    >
                      H.Naish - Hussain Naish
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:42</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16951/income?from=01.12.2020&to=17.12.2020"
                    >
                      HAFIZ - Moosa Hafiz
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:48</b>
                  </td>
                  <td>
                    0 /<b>5</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/26704/income?from=01.12.2020&to=17.12.2020"
                    >
                      Haidary - Abadullah Haidary
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:36</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/23711/income?from=01.12.2020&to=17.12.2020"
                    >
                      Hamdhan - Hamdhan Abdul Azeez
                    </a>
                  </td>
                  <td>
                    0:00 /<b>2:12</b>
                  </td>
                  <td>
                    0 /<b>3</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/23701/income?from=01.12.2020&to=17.12.2020"
                    >
                      Humaid - Yaish Mohamed Humaid
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:54</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17932/income?from=01.12.2020&to=17.12.2020"
                    >
                      Ibrahim Ameer - Ibrahim Ameer{" "}
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>2</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16991/income?from=01.12.2020&to=17.12.2020"
                    >
                      ILHAM - Ilham Mahmood
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:06</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17938/income?from=01.12.2020&to=17.12.2020"
                    >
                      Irufan - Mohamed Irufan
                    </a>
                  </td>
                  <td>
                    0:00 /<b>4:30</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/44615/income?from=01.12.2020&to=17.12.2020"
                    >
                      Isha - Mariyam Isha Shareef
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>46:15</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16962/income?from=01.12.2020&to=17.12.2020"
                    >
                      JAISH - Umar Jaish Ibrahim
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:12</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/26705/income?from=01.12.2020&to=17.12.2020"
                    >
                      Jandadi - Mujeebullah Jandadi
                    </a>
                  </td>
                  <td>
                    0:00 /<b>5:12</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17937/income?from=01.12.2020&to=17.12.2020"
                    >
                      Laafir - Laafir Mohammed{" "}
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:06</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17939/income?from=01.12.2020&to=17.12.2020"
                    >
                      M.Hussain - Mohamed Hussain{" "}
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17930/income?from=01.12.2020&to=17.12.2020"
                    >
                      M.Khalid - Mohamed Khalid{" "}
                    </a>
                  </td>
                  <td>
                    0:00 /<b>4:24</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16948/income?from=01.12.2020&to=17.12.2020"
                    >
                      MANNAU - Mohamed Mannau Hamid
                    </a>
                  </td>
                  <td>
                    0:00 /<b>5:53</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/23698/income?from=01.12.2020&to=17.12.2020"
                    >
                      Nadhees - Ibrahim Nadhees Abdulla
                    </a>
                  </td>
                  <td>
                    0:00 /<b>5:42</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/44614/income?from=01.12.2020&to=17.12.2020"
                    >
                      Nasru - Ibrahim Nasru Ali
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>48:15</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16993/income?from=01.12.2020&to=17.12.2020"
                    >
                      Rai - Mohamed Rai Shareef
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/22073/income?from=01.12.2020&to=17.12.2020"
                    >
                      Rasheed Ibrahim - ​Abdul Rasheed Ibrahim
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:42</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>4</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16947/income?from=01.12.2020&to=17.12.2020"
                    >
                      RAYAH - Rayah Rasheed
                    </a>
                  </td>
                  <td>
                    0:00 /<b>2:30</b>
                  </td>
                  <td>
                    0 /<b>2</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>1</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16894/income?from=01.12.2020&to=17.12.2020"
                    >
                      Razeen - Mohamed Razeen
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:54</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16878/income?from=01.12.2020&to=17.12.2020"
                    >
                      RAZZAN - Mohamed Razzan
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td>
                    0 /<b>2</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>2</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17933/income?from=01.12.2020&to=17.12.2020"
                    >
                      Reem - Fathimath Reem{" "}
                    </a>
                  </td>
                  <td>
                    0:00 /<b>2:18</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>4</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16959/income?from=01.12.2020&to=17.12.2020"
                    >
                      RIFGA - Rifga Nasheed
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:42</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16845/income?from=01.12.2020&to=17.12.2020"
                    >
                      ROOHUL - Ahmed Roohul Ameen
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:36</b>
                  </td>
                  <td>
                    0 /<b>2</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17926/income?from=01.12.2020&to=17.12.2020"
                    >
                      Saeed - Saneeh Saeed
                    </a>
                  </td>
                  <td>
                    0:00 /<b>2:06</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>1</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16985/income?from=01.12.2020&to=17.12.2020"
                    >
                      SAMHA FAHUMY - Samha Mohamed Fahumy
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:12</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/37685/income?from=01.12.2020&to=17.12.2020"
                    >
                      Sanyaan - Ahmed Sanyaan Shameel
                    </a>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>46:15</b>
                  </td>
                  <td></td>
                  <td>
                    0 /<b>4</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/18905/income?from=01.12.2020&to=17.12.2020"
                    >
                      Sarumadh - Sarumadh Naseem
                    </a>
                  </td>
                  <td>
                    0:00 /<b>6:00</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/19977/income?from=01.12.2020&to=17.12.2020"
                    >
                      Sayyaf - Ibrahim Ibrahim Sayyaf Mohamed
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:42</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16843/income?from=01.12.2020&to=17.12.2020"
                    >
                      Shahdhan - Shahdhan Habeeb
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:30</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>5</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/24985/income?from=01.12.2020&to=17.12.2020"
                    >
                      Shain - Shain Ageel
                    </a>
                  </td>
                  <td>
                    0:00 /<b>3:12</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17922/income?from=01.12.2020&to=17.12.2020"
                    >
                      Shauf Minthaz - Shauf Minthaz
                    </a>
                  </td>
                  <td>
                    0:00 /<b>2:18</b>
                  </td>
                  <td>
                    0 /<b>2</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/18906/income?from=01.12.2020&to=17.12.2020"
                    >
                      Shauzoon - Shauzoon Razzag
                    </a>
                  </td>
                  <td>
                    0:00 /<b>4:42</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/18907/income?from=01.12.2020&to=17.12.2020"
                    >
                      Thalib - Thalib Khalid{" "}
                    </a>
                  </td>
                  <td>
                    0:00 /<b>2:06</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>3</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16902/income?from=01.12.2020&to=17.12.2020"
                    >
                      TMA Basith - Abdul Basith - TMA Basith
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:06</b>
                  </td>
                  <td>
                    0 /<b>1</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/19980/income?from=01.12.2020&to=17.12.2020"
                    >
                      Umaru - Umaru Ahzab Mohamed
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:48</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16859/income?from=01.12.2020&to=17.12.2020"
                    >
                      Vifaau - Mohamed Vifaau
                    </a>
                  </td>
                  <td>
                    0:00 /<b>4:54</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    0 /<b>1</b>
                  </td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/17925/income?from=01.12.2020&to=17.12.2020"
                    >
                      Yaaniu - Yaaniu Hussain{" "}
                    </a>
                  </td>
                  <td>
                    0:00 /<b>4:48</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/26708/income?from=01.12.2020&to=17.12.2020"
                    >
                      Yasaar - Ali Yasaar
                    </a>
                  </td>
                  <td>
                    0:00 /<b>1:54</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td>
                    0:00 /<b>1:00</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/16944/income?from=01.12.2020&to=17.12.2020"
                    >
                      ZAHID - Ahmed Zahid
                    </a>
                  </td>
                  <td>
                    0:00 /<b>0:54</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/37683/income?from=01.12.2020&to=17.12.2020"
                    >
                      Zareef - Mohamed Dhaisam Zareef
                    </a>
                  </td>
                  <td>
                    0:00 /<b>2:30</b>
                  </td>
                  <td>
                    0 /<b>10</b>
                  </td>
                  <td></td>
                  <td>
                    0:00 /<b>46:15</b>
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className>
                  <td>
                    <a
                      target="blank"
                      href="/users/22070/income?from=01.12.2020&to=17.12.2020"
                    >
                      ​Rafhan - ​Rafhan Riyaz
                    </a>
                  </td>
                  <td>
                    0:00 /<b>2:24</b>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="total">
                  <td>Total</td>
                  <td>
                    0:00 /<b>120:11</b>
                  </td>
                  <td>
                    0 /<b>58</b>
                  </td>
                  <td></td>
                  <td>
                    0:00 /<b>199:00</b>
                  </td>
                  <td></td>
                  <td>
                    0 /<b>33</b>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col span={16} offset={4}>
            <table
              className="table table-condensed customers"
              style={{ tableLayout: "auto", minWidth: 940 }}
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Flights</th>
                  <th>Cancellations</th>
                </tr>
              </thead>
              <colgroup>
                <col style={{ width: 492 }} />
                <col style={{ width: "194.4px" }} />
                <col style={{ width: "252.8px" }} />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <a
                      target="blank"
                      href="/customers/5216/report?from=01.12.2020&to=17.12.2020"
                    >
                      Asian Academy of Aeronautics
                    </a>
                  </td>
                  <td>
                    0:00 /<b>3:18</b>
                  </td>
                  <td></td>
                </tr>
                <tr className="total">
                  <td>Total</td>
                  <td>
                    0:00 /<b>3:18</b>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  );
}
