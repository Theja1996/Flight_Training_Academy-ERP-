import React from "react";


import "../../../ReportsComponent/AircraftreportComponent/FuelReportComponent/FuelReport.css";
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
} from "antd";
import { useState } from "react";

const { Option } = Select;

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

export default function FuelReport() {
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
              Fuel report from {startdate.concat(" - ")}
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
          <Col span={20} offset={2}>
            <table className="table table-condensed">
              <thead>
                <tr>
                  <th colSpan={13}>Fuel report</th>
                </tr>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Aircraft</th>
                  <th>Departure</th>
                  <th>Ins/Crew</th>
                  <th>Stu/Ren/Cus</th>
                  <th>Block</th>
                  <th>Airborne</th>
                  <th>Tacho</th>
                  <th>Arrival</th>
                  <th>Flight ID</th>
                  <th>Fuel coefficient</th>
                  <th>Calculated fuel</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd">
                  <td>
                    <a target="_blank" href="/activities/738/trips/79990/edit">
                      01.12.2020
                    </a>
                  </td>
                  <td>Operation</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/17232">
                      MAINTENANCE - AAA AIRCRAFT MAINTENANCE{" "}
                    </a>
                  </td>
                  <td>Asian Academy of Aeronautics</td>
                  <td>0:12</td>
                  <td />
                  <td>0.2</td>
                  <td className="arrival">VRMG</td>
                  <td>1308838</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>1.2</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/23711/user_programs/37893/user_lectures/1507372/edit?return_to=%2Fplanes%2F1483"
                    >
                      01.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/23711">
                      Hamdhan - Hamdhan Abdul Azeez
                    </a>
                  </td>
                  <td>1:06</td>
                  <td>0:56</td>
                  <td>1.1</td>
                  <td className="arrival">VRMG</td>
                  <td>1308820</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/22071/user_programs/34601/user_lectures/1397244/edit?return_to=%2Fplanes%2F1483"
                    >
                      01.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/22071">
                      Ali Rasheed Moosa - Rasheed Moosa{" "}
                    </a>
                  </td>
                  <td>1:18</td>
                  <td>1:08</td>
                  <td>1.3</td>
                  <td className="arrival">VRMG</td>
                  <td>1308849</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>7.8</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16962/user_programs/23697/user_lectures/2915701/edit?return_to=%2Fplanes%2F1483"
                    >
                      01.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16962">
                      JAISH - Umar Jaish Ibrahim
                    </a>
                  </td>
                  <td>1:12</td>
                  <td>1:02</td>
                  <td>1.2</td>
                  <td className="arrival">VRMG</td>
                  <td>1309690</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>7.2</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16899/user_programs/23634/user_lectures/2838457/edit?return_to=%2Fplanes%2F1483"
                    >
                      01.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16899">
                      H.Abdullah - Hassan Abdullah
                    </a>
                  </td>
                  <td>0:54</td>
                  <td>0:44</td>
                  <td>0.9</td>
                  <td className="arrival">VRMG</td>
                  <td>1309695</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>5.4</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16878/user_programs/23613/user_lectures/2174509/edit?return_to=%2Fplanes%2F1483"
                    >
                      01.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16878">
                      RAZZAN - Mohamed Razzan
                    </a>
                  </td>
                  <td>1:00</td>
                  <td>0:50</td>
                  <td>1.0</td>
                  <td className="arrival">VRMG</td>
                  <td>1309276</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16930/user_programs/23665/user_lectures/935888/edit?return_to=%2Fplanes%2F1483"
                    >
                      01.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16930">
                      A.Haris - Abdulla Haris
                    </a>
                  </td>
                  <td>1:06</td>
                  <td>0:56</td>
                  <td>1.1</td>
                  <td className="arrival">VRMG</td>
                  <td>1309400</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/17922/user_programs/27662/user_lectures/1093260/edit?return_to=%2Fplanes%2F1483"
                    >
                      02.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/17922">
                      Shauf Minthaz - Shauf Minthaz
                    </a>
                  </td>
                  <td>1:12</td>
                  <td>1:02</td>
                  <td>1.2</td>
                  <td className="arrival">VRMG</td>
                  <td>1309990</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>7.2</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16985/user_programs/23720/user_lectures/2915621/edit?return_to=%2Fplanes%2F1483"
                    >
                      02.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16985">
                      SAMHA FAHUMY - Samha Mohamed Fahumy
                    </a>
                  </td>
                  <td>1:12</td>
                  <td>1:02</td>
                  <td>1.2</td>
                  <td className="arrival">VRMG</td>
                  <td>1312526</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>7.2</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/17937/user_programs/27621/user_lectures/1090439/edit?return_to=%2Fplanes%2F1483"
                    >
                      02.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/17937">
                      Laafir - Laafir Mohammed{" "}
                    </a>
                  </td>
                  <td>1:06</td>
                  <td>0:56</td>
                  <td>1.1</td>
                  <td className="arrival">VRMG</td>
                  <td>1313032</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16845/user_programs/23580/user_lectures/922783/edit?return_to=%2Fplanes%2F1483"
                    >
                      02.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16845">
                      ROOHUL - Ahmed Roohul Ameen
                    </a>
                  </td>
                  <td>1:36</td>
                  <td>1:26</td>
                  <td>1.6</td>
                  <td className="arrival">VRMG</td>
                  <td>1310294</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>9.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16902/user_programs/23637/user_lectures/931603/edit?return_to=%2Fplanes%2F1483"
                    >
                      02.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16902">
                      TMA Basith - Abdul Basith - TMA Basith
                    </a>
                  </td>
                  <td>1:06</td>
                  <td>0:56</td>
                  <td>1.1</td>
                  <td className="arrival">VRMG</td>
                  <td>1310566</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/37683/user_programs/61545/user_lectures/2340793/edit?return_to=%2Fplanes%2F1483"
                    >
                      05.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/37683">
                      Zareef - Mohamed Dhaisam Zareef
                    </a>
                  </td>
                  <td>0:36</td>
                  <td>0:26</td>
                  <td>0.6</td>
                  <td className="arrival">VRMG</td>
                  <td>1312989</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>3.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/37683/user_programs/61545/user_lectures/2340793/edit?return_to=%2Fplanes%2F1483"
                    >
                      05.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/37683">
                      Zareef - Mohamed Dhaisam Zareef
                    </a>
                  </td>
                  <td>0:30</td>
                  <td>0:20</td>
                  <td>0.5</td>
                  <td className="arrival">VRMG</td>
                  <td>1312990</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>3.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a target="_blank" href="/activities/822/trips/80202/edit">
                      05.12.2020
                    </a>
                  </td>
                  <td>Operation</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>Asian Academy of Aeronautics</td>
                  <td>1:00</td>
                  <td>0:50</td>
                  <td>1.0</td>
                  <td className="arrival">VRMG</td>
                  <td>1313262</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/22079/user_programs/34596/user_lectures/1396373/edit?return_to=%2Fplanes%2F1483"
                    >
                      06.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/22079">
                      Eman - Eman Mohamed{" "}
                    </a>
                  </td>
                  <td>1:18</td>
                  <td>1:08</td>
                  <td>1.3</td>
                  <td className="arrival">VRMG</td>
                  <td>1313665</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>7.8</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/22071/user_programs/34601/user_lectures/1397177/edit?return_to=%2Fplanes%2F1483"
                    >
                      07.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/22071">
                      Ali Rasheed Moosa - Rasheed Moosa{" "}
                    </a>
                  </td>
                  <td>1:06</td>
                  <td>0:56</td>
                  <td>1.1</td>
                  <td className="arrival">VRMG</td>
                  <td>1314218</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/17922/user_programs/27662/user_lectures/1093247/edit?return_to=%2Fplanes%2F1483"
                    >
                      08.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/17922">
                      Shauf Minthaz - Shauf Minthaz
                    </a>
                  </td>
                  <td>1:06</td>
                  <td>0:56</td>
                  <td>1.1</td>
                  <td className="arrival">VRMG</td>
                  <td>1315035</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a target="_blank" href="/activities/738/trips/80314/edit">
                      08.12.2020
                    </a>
                  </td>
                  <td>Operation</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/17232">
                      MAINTENANCE - AAA AIRCRAFT MAINTENANCE{" "}
                    </a>
                  </td>
                  <td>Asian Academy of Aeronautics</td>
                  <td>0:06</td>
                  <td />
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1316180</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>2.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a target="_blank" href="/activities/736/trips/80313/edit">
                      08.12.2020
                    </a>
                  </td>
                  <td>Operation</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16792">
                      JOEL - Joel Samuel
                    </a>
                  </td>
                  <td>Asian Academy of Aeronautics</td>
                  <td>0:42</td>
                  <td>0:32</td>
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1316178</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>14.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/23711/user_programs/37893/user_lectures/1507373/edit?return_to=%2Fplanes%2F1483"
                    >
                      09.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/23711">
                      Hamdhan - Hamdhan Abdul Azeez
                    </a>
                  </td>
                  <td>1:06</td>
                  <td>0:56</td>
                  <td>1.1</td>
                  <td className="arrival">VRMG</td>
                  <td>1316212</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/18907/user_programs/28967/user_lectures/1138885/edit?return_to=%2Fplanes%2F1483"
                    >
                      09.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/18907">
                      Thalib - Thalib Khalid{" "}
                    </a>
                  </td>
                  <td>0:54</td>
                  <td>0:44</td>
                  <td>0.9</td>
                  <td className="arrival">VRMG</td>
                  <td>1316269</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>5.4</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a target="_blank" href="/activities/822/trips/80321/edit">
                      09.12.2020
                    </a>
                  </td>
                  <td>Operation</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16792">
                      JOEL - Joel Samuel
                    </a>
                  </td>
                  <td>Asian Academy of Aeronautics</td>
                  <td>0:42</td>
                  <td>0:32</td>
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1316351</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>14.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a target="_blank" href="/activities/822/trips/80322/edit">
                      09.12.2020
                    </a>
                  </td>
                  <td>Operation</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16792">
                      JOEL - Joel Samuel
                    </a>
                  </td>
                  <td>Asian Academy of Aeronautics</td>
                  <td>0:36</td>
                  <td>0:26</td>
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1316352</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>12.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/17928/user_programs/27627/user_lectures/1091322/edit?return_to=%2Fplanes%2F1483"
                    >
                      12.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/17928">
                      Aiman - Aiman Saaim
                    </a>
                  </td>
                  <td>1:06</td>
                  <td>0:56</td>
                  <td>1.1</td>
                  <td className="arrival">VRMG</td>
                  <td>1319395</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/17933/user_programs/27626/user_lectures/1091206/edit?return_to=%2Fplanes%2F1483"
                    >
                      12.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/17933">
                      Reem - Fathimath Reem{" "}
                    </a>
                  </td>
                  <td>1:12</td>
                  <td>1:02</td>
                  <td>1.2</td>
                  <td className="arrival">VRMG</td>
                  <td>1319468</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>7.2</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16933/user_programs/59706/user_lectures/2266748/edit?return_to=%2Fplanes%2F1484"
                    >
                      12.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16933">
                      A.MAISH - Ali Maish
                    </a>
                  </td>
                  <td>0:48</td>
                  <td>0:38</td>
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1319766</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>16.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16951/user_programs/59702/user_lectures/2265564/edit?return_to=%2Fplanes%2F1484"
                    >
                      12.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16951">
                      HAFIZ - Moosa Hafiz
                    </a>
                  </td>
                  <td>0:48</td>
                  <td>0:38</td>
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1319777</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>16.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/23702/user_programs/37892/user_lectures/1507419/edit?return_to=%2Fplanes%2F1483"
                    >
                      12.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/23702">
                      Failam - Mohamed Failam Shafeeu
                    </a>
                  </td>
                  <td>1:12</td>
                  <td>1:02</td>
                  <td>1.2</td>
                  <td className="arrival">VRMG</td>
                  <td>1319547</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>7.2</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/22073/user_programs/34600/user_lectures/1397230/edit?return_to=%2Fplanes%2F1483"
                    >
                      12.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/22073">
                      Rasheed Ibrahim - ​Abdul Rasheed Ibrahim
                    </a>
                  </td>
                  <td>0:54</td>
                  <td>0:44</td>
                  <td>0.9</td>
                  <td className="arrival">VRMG</td>
                  <td>1319624</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>5.4</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/37683/user_programs/61545/user_lectures/2340792/edit?return_to=%2Fplanes%2F1483"
                    >
                      13.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/37683">
                      Zareef - Mohamed Dhaisam Zareef
                    </a>
                  </td>
                  <td>0:36</td>
                  <td>0:26</td>
                  <td>0.6</td>
                  <td className="arrival">VRMG</td>
                  <td>1319885</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>3.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16951/user_programs/59702/user_lectures/2265570/edit?return_to=%2Fplanes%2F1484"
                    >
                      13.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16951">
                      HAFIZ - Moosa Hafiz
                    </a>
                  </td>
                  <td>1:00</td>
                  <td>0:50</td>
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1320352</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>20.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/37683/user_programs/61545/user_lectures/2340792/edit?return_to=%2Fplanes%2F1483"
                    >
                      13.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/37683">
                      Zareef - Mohamed Dhaisam Zareef
                    </a>
                  </td>
                  <td>0:48</td>
                  <td>0:38</td>
                  <td>0.8</td>
                  <td className="arrival">VRMG</td>
                  <td>1319886</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>4.8</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/22071/user_programs/34601/user_lectures/1397241/edit?return_to=%2Fplanes%2F1483"
                    >
                      13.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/22071">
                      Ali Rasheed Moosa - Rasheed Moosa{" "}
                    </a>
                  </td>
                  <td>1:06</td>
                  <td>0:56</td>
                  <td>1.1</td>
                  <td className="arrival">VRMG</td>
                  <td>1319904</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>6.6</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16843/user_programs/23578/user_lectures/922476/edit?return_to=%2Fplanes%2F1483"
                    >
                      13.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16843">
                      Shahdhan - Shahdhan Habeeb
                    </a>
                  </td>
                  <td>0:30</td>
                  <td>0:20</td>
                  <td>0.5</td>
                  <td className="arrival">VRMG</td>
                  <td>1320465</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>3.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16933/user_programs/59706/user_lectures/2265619/edit?return_to=%2Fplanes%2F1484"
                    >
                      14.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16933">
                      A.MAISH - Ali Maish
                    </a>
                  </td>
                  <td>0:54</td>
                  <td>0:44</td>
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1321058</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>18.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/22079/user_programs/34596/user_lectures/1396322/edit?return_to=%2Fplanes%2F1483"
                    >
                      14.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/28232">
                      Rehan - Rehan Rauf
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/22079">
                      Eman - Eman Mohamed{" "}
                    </a>
                  </td>
                  <td>1:12</td>
                  <td>1:02</td>
                  <td>1.2</td>
                  <td className="arrival">VRMG</td>
                  <td>1320412</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>7.2</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16831/user_programs/79982/user_lectures/2949776/edit?return_to=%2Fplanes%2F1484"
                    >
                      14.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16831">
                      AZRA - Azra Hussain
                    </a>
                  </td>
                  <td>0:48</td>
                  <td>0:38</td>
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1321081</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>16.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16947/user_programs/23682/user_lectures/938530/edit?return_to=%2Fplanes%2F1483"
                    >
                      14.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16947">
                      RAYAH - Rayah Rasheed
                    </a>
                  </td>
                  <td>0:48</td>
                  <td>0:38</td>
                  <td>0.8</td>
                  <td className="arrival">VRMG</td>
                  <td>1320541</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>4.8</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16942/user_programs/23677/user_lectures/937753/edit?return_to=%2Fplanes%2F1483"
                    >
                      14.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16942">
                      EYMAAN - Eymaan Ibrahim
                    </a>
                  </td>
                  <td>1:30</td>
                  <td>1:20</td>
                  <td>1.5</td>
                  <td className="arrival">VRMG</td>
                  <td>1320691</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>9.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/22076/user_programs/34594/user_lectures/1396432/edit?return_to=%2Fplanes%2F1483"
                    >
                      14.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAF</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16817">
                      AMIR - Aamir Saeed Ansari
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/22076">
                      Ahmeem - Ahmeem Ahmed
                    </a>
                  </td>
                  <td>0:30</td>
                  <td>0:20</td>
                  <td>0.5</td>
                  <td className="arrival">VRMG</td>
                  <td>1322323</td>
                  <td className="fuel_coefficient">
                    <span>6.0</span>
                    <span>L/Tacho</span>
                  </td>
                  <td className="fuel">
                    <span>3.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="even">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16933/user_programs/59706/user_lectures/2265607/edit?return_to=%2Fplanes%2F1484"
                    >
                      15.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16933">
                      A.MAISH - Ali Maish
                    </a>
                  </td>
                  <td>1:12</td>
                  <td>1:02</td>
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1322089</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>24.0</span>
                    <span>L</span>
                  </td>
                </tr>
                <tr className="odd">
                  <td>
                    <a
                      target="_blank"
                      href="/users/16894/user_programs/80020/user_lectures/2950649/edit?return_to=%2Fplanes%2F1484"
                    >
                      15.12.2020
                    </a>
                  </td>
                  <td>School flight</td>
                  <td className="aircraft">8Q-GAG</td>
                  <td className="departure">VRMG</td>
                  <td>
                    <a target="_blank" href="/users/16809">
                      BALA - Bala Thanupriyan
                    </a>
                  </td>
                  <td>
                    <a target="_blank" href="/users/16894">
                      Razeen - Mohamed Razeen
                    </a>
                  </td>
                  <td>0:54</td>
                  <td>0:44</td>
                  <td>-</td>
                  <td className="arrival">VRMG</td>
                  <td>1322072</td>
                  <td className="fuel_coefficient">
                    <span>20.0</span>
                    <span>L/Block</span>
                  </td>
                  <td className="fuel">
                    <span>18.0</span>
                    <span>L</span>
                  </td>
                </tr>
              </tbody>
              <tbody>
                <tr className="total">
                  <td>Total</td>
                  <td />
                  <td />
                  <td />
                  <td />
                  <td />
                  <td className="total_block_val">40:30</td>
                  <td className="total_airborne_val">33:22</td>
                  <td className="total_tacho_val">32.0</td>
                  <td />
                  <td />
                  <td className="fuel_coefficient" />
                  <td className="total_calculated">
                    <span>362.0 L</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  );
}
