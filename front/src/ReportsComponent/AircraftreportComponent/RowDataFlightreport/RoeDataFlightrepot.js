import React from "react";
import TitleBar from "../../../components/TitleBar";
import "../../../ReportsComponent/AircraftreportComponent/RowDataFlightreport/RowDataFlightreport.css";
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

export default function RowDataFlightreport() {
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
      <TitleBar></TitleBar>
      <Row gutter={[16, 16]}>
        <Col span={16} offset={4}>
          <h3 style={{ fontWeight: "bold" }}>
            Flight report for {startdate.concat(" - ")}
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
        <Col style={{ overflow: "auto" }} span={20} offset={2}>
          <table className="table table-condensed">
            <thead>
              <tr>
                <th colSpan={20}>Flights</th>
              </tr>
              <tr>
                <th>Flight ID</th>
                <th>Account</th>
                <th>Date</th>
                <th>Aircraft</th>
                <th>Aircraft type</th>
                <th>Type of activity</th>
                <th>Kind of operation</th>
                <th>Program name</th>
                <th>Program revision</th>
                <th>PIC</th>
                <th>PIC CAA ref.</th>
                <th>PIC user ref.</th>
                <th>Instructor</th>
                <th>Instructor CAA ref.</th>
                <th>Instructor user ref.</th>
                <th>Student</th>
                <th>Student CAA ref.</th>
                <th>Student user ref.</th>
                <th>Renter</th>
                <th>Renter CAA ref.</th>
                <th>Renter user ref.</th>
                <th>Crew</th>
                <th>Crew CAA ref.</th>
                <th>Crew user ref.</th>
                <th>Customer</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Off block</th>
                <th>Takeoff</th>
                <th>Landing</th>
                <th>On block</th>
                <th>Tacho start</th>
                <th>Tacho finish</th>
                <th>Block time</th>
                <th>Airborne time</th>
                <th>Tacho time</th>
                <th>Fuel coefficient</th>
                <th>Calculated fuel</th>
                <th>Flight type</th>
                <th>VFR</th>
                <th>IFR</th>
                <th>DAY</th>
                <th>NIGHT</th>
                <th>Local</th>
                <th>Cross country</th>
                <th>Pilot flying</th>
                <th>Pilot monitoring</th>
                <th>IF time</th>
                <th>Asymmetric time</th>
                <th>Full stop</th>
                <th>Touch and go</th>
                <th>Approach</th>
                <th>Go around</th>
                <th>Lesson status</th>
                <th>Booking id</th>
                <th>Comment</th>
                <th>Income invoice number</th>
                <th>Expenses invoice number</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd">
                <td>1308838</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Operation</td>
                <td>Ground run</td>
                <td />
                <td />
                <td>MAINTENANCE </td>
                <td />
                <td>S10002</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>Asian Academy of Aeronautics</td>
                <td>VRMG</td>
                <td>VRMG</td>
                <td>07:00</td>
                <td>07:00</td>
                <td>07:00</td>
                <td>07:12</td>
                <td>5444.0</td>
                <td>5444.2</td>
                <td>0:12</td>
                <td>0:00</td>
                <td>0.2</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>1.2 L</td>
                <td>Dual</td>
                <td>0:12</td>
                <td>0:00</td>
                <td>0:12</td>
                <td>0:00</td>
                <td>0:12</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td />
                <td />
                <td>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1308801</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 1</td>
                <td />
                <td />
                <td />
                <td>MELVIN</td>
                <td>MV.FCL.CPL.1165</td>
                <td>498</td>
                <td>Haidary</td>
                <td />
                <td>595</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>07:45</td>
                <td>07:45</td>
                <td>08:33</td>
                <td>08:33</td>
                <td />
                <td />
                <td>0:48</td>
                <td>0:48</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>0:48</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Repetition lesson needed</td>
                <td>2480393</td>
                <td>
                  <p />
                  <p>Disregard grading</p>
                  <p>
                    <br />
                  </p>
                  <p>Theory:</p>
                  <p>
                    Know the how and why to the pressure instrument and variable
                    pitch prop.
                  </p>
                  <p>
                    If student doesn’t send answers needed at given time, will
                    be grounded.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Set com before doing radio calls.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Do the taxi and line up checks as mentioned in the check
                    list
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Learn the 300ft checks and callout for gear up and don’t
                    forget pwr settings.{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Do T scan as briefed.</p>
                  <p>
                    <br />
                  </p>
                  <p>Rate turn : fair</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Timed turns: don’t look at time every time. Only look at
                    time when reached HDG.{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Pattern A: callout the HDG, time and direction of turn to
                    avoid confusion.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Be prepared for Pattern A and interceptions. </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1308820</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>18 Navigation / cross-country</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>Rehan </td>
                <td />
                <td>606</td>
                <td>Hamdhan</td>
                <td />
                <td>576</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>08:40</td>
                <td>08:45</td>
                <td>09:41</td>
                <td>09:46</td>
                <td>5444.2</td>
                <td>5445.3</td>
                <td>1:06</td>
                <td>0:56</td>
                <td>1.1</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>6.6 L</td>
                <td>Solo</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2480368</td>
                <td>
                  <p />
                  <p>
                    Transition to Wing low method at 200 ft. Student keeps crab
                    until just before touchdown.
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1308825</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 1</td>
                <td />
                <td />
                <td />
                <td>MELVIN</td>
                <td>MV.FCL.CPL.1165</td>
                <td>498</td>
                <td>Yasaar</td>
                <td />
                <td>601</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>08:57</td>
                <td>08:57</td>
                <td>09:51</td>
                <td>09:51</td>
                <td />
                <td />
                <td>0:54</td>
                <td>0:54</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>0:54</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Repetition lesson needed</td>
                <td>2480395</td>
                <td>
                  <p />
                  <p>Disregard grading </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    When leveling off after climb need more fwd pressure to
                    prevent climb.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Ob R070: fair</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    P turn: revise procedure. Student confused in calculation
                    and procedures.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Enroute Hld (SE ): entry fair</p>
                  <p>mention the 90deg HDG before Ib leg.</p>
                  <p>
                    <br />
                  </p>
                  <p>Repositioned for IB int: fair(R330)</p>
                  <p>
                    <br />
                  </p>
                  <p>Ovd Hld: entry(teardrop): fair</p>
                  <p>
                    When turning from Ob to Ib leg, you have to rollout or
                    increase AOB, the HDG of the Ob leg should be corrected for
                    wind.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    ZApp: configure early FAF - 0.5dme. Because of this delay
                    was the aircraft was high through the final approach CRS.{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Do not forget flaps at prescribed dme.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Work on more efficient T scan and better time management as
                    briefed.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1308849</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>18 Navigation / cross-country</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>Rehan </td>
                <td />
                <td>606</td>
                <td>Ali Rasheed Moosa </td>
                <td />
                <td>510</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>10:15</td>
                <td>10:20</td>
                <td>11:28</td>
                <td>11:33</td>
                <td>5445.3</td>
                <td>5446.6</td>
                <td>1:18</td>
                <td>1:08</td>
                <td>1.3</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>7.8 L</td>
                <td>Solo</td>
                <td>1:18</td>
                <td>0:00</td>
                <td>1:18</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>1:18</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2480375</td>
                <td>
                  <p />
                  <p>SP - Rehan Rauf</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Practiced diversion from 5 NM outbound VRMR to Hithadhoo
                  </p>
                  <p>Calculating heading, groundspeed and times as briefed.</p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1308862</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 1</td>
                <td />
                <td />
                <td />
                <td>MELVIN</td>
                <td>MV.FCL.CPL.1165</td>
                <td>498</td>
                <td>Jandadi</td>
                <td />
                <td>598</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>10:21</td>
                <td>10:21</td>
                <td>11:33</td>
                <td>11:33</td>
                <td />
                <td />
                <td>1:12</td>
                <td>1:12</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>1:12</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2480396</td>
                <td>
                  <p />
                  <p>Disregard grading</p>
                  <p>
                    <br />
                  </p>
                  <p>Do line up checks from checklist properly.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Call out +ive rate of climb before brake test and gear up.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Ob R320: fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Pturn right : fair.</p>
                  <p>
                    <br />
                  </p>
                  <p>Enroute Hld: (NE): entry fair</p>
                  <p>
                    for full scale deflection on Ob leg turn towards the needle:
                    away from radial due to reverse sensing.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>OVD Hld: direct entry had to brief </p>
                  <p>talked through Z app</p>
                  <p>Be ahead of aircraft and do not descend below minimum.</p>
                  <p>
                    <br />
                  </p>
                  <p>Do wind correction on hold as briefed</p>
                  <p>Be more prepared for the Z approach. </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1308968</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>MELVIN</td>
                <td>MV.FCL.CPL.1165</td>
                <td>498</td>
                <td>Saeed</td>
                <td />
                <td>384</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>11:59</td>
                <td>11:59</td>
                <td>13:05</td>
                <td>13:05</td>
                <td />
                <td />
                <td>1:06</td>
                <td>1:06</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Repetition lesson needed</td>
                <td>2480399</td>
                <td>
                  <p />
                  <p>Disregard grading</p>
                  <p>
                    <br />
                  </p>
                  <p>Ob R120: fair</p>
                  <p>
                    <br />
                  </p>
                  <p>P turn: fair</p>
                  <p> </p>
                  <p>Repositioned for Ib int: fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Enroute Hld : fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Ovd Hld: teardrop entry: fair.</p>
                  <p>timing: fair.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    VOR Z APP: be ahead of the aircraft. Configuring the
                    aircraft late caused it to be too high throughout the
                    approach.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Missed App: Do not go below MDA and keep note of MAP.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1309690</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>19 Instrument Flying</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>AMIR</td>
                <td>MV.FCL.CPL.1167</td>
                <td>531</td>
                <td>JAISH</td>
                <td />
                <td>441</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>12:05</td>
                <td>12:10</td>
                <td>13:12</td>
                <td>13:17</td>
                <td>5446.6</td>
                <td>5447.8</td>
                <td>1:12</td>
                <td>1:02</td>
                <td>1.2</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>7.2 L</td>
                <td>Dual</td>
                <td>1:12</td>
                <td>0:00</td>
                <td>1:12</td>
                <td>0:00</td>
                <td>1:12</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:30</td>
                <td>00:00</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2480379</td>
                <td>
                  <p />
                  <p>Ground procedure fair </p>
                  <p>radio call fair </p>
                  <p>taxi fair </p>
                  <p>
                    <br />
                  </p>
                  <p>pfl </p>
                  <p>clearing engine - dnt forget </p>
                  <p>radio call - report position in area and request pfl</p>
                  <p>made the field</p>
                  <p>go around - retract flaps 20-10 immediately</p>
                  <p>go around - re trim </p>
                  <p>
                    <br />
                  </p>
                  <p>stalls </p>
                  <p>
                    <br />
                  </p>
                  <p>without flaps </p>
                  <p>
                    <br />
                  </p>
                  <p>clearing turn as discussed</p>
                  <p>
                    at recovery bring attitude to climbing to regain altitude
                    loss{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>with flaps</p>
                  <p>
                    <br />
                  </p>
                  <p>flaps 20 - power idle straight away </p>
                  <p>
                    <br />
                  </p>
                  <p>outbound intcp fair</p>
                  <p>proc turn fair</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    enroute hold - wings level at 90 degrees when needle not
                    alive{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>vor z appch 28 </p>
                  <p>
                    <br />
                  </p>
                  <p>roll out 90 degrees final appch course </p>
                  <p>speed 75 kts if flaps less </p>
                  <p>fly the correct speed and correct ROD </p>
                  <p>dist and altitude will follow automatically </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1309695</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>19 Instrument Flying</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>AMIR</td>
                <td>MV.FCL.CPL.1167</td>
                <td>531</td>
                <td>H.Abdullah</td>
                <td />
                <td>310</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>14:50</td>
                <td>14:55</td>
                <td>15:39</td>
                <td>15:44</td>
                <td>5447.8</td>
                <td>5448.7</td>
                <td>0:54</td>
                <td>0:44</td>
                <td>0.9</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>5.4 L</td>
                <td>Dual</td>
                <td>0:54</td>
                <td>0:00</td>
                <td>0:54</td>
                <td>0:00</td>
                <td>0:54</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:24</td>
                <td>00:00</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2480381</td>
                <td>
                  <p />
                  <p>Practiced stalls </p>
                  <p>
                    <br />
                  </p>
                  <p>prepare pfls next flight</p>
                  <p>
                    <br />
                  </p>
                  <p>need to improve </p>
                  <p>heading maint </p>
                  <p>altitude maint </p>
                  <p>
                    <br />
                  </p>
                  <p>outbound intcp fair </p>
                  <p>proc turn fair </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    procedures are fair but the flying with accuracy is lacking{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>accuracy in handling needs to improve over all </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1309276</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>21 General Handling</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>BALA</td>
                <td>MV.FCL.CPL.970</td>
                <td>78</td>
                <td>RAZZAN</td>
                <td />
                <td>249</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>16:29</td>
                <td>16:34</td>
                <td>17:24</td>
                <td>17:29</td>
                <td>5448.7</td>
                <td>5449.7</td>
                <td>1:00</td>
                <td>0:50</td>
                <td>1.0</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>6.0 L</td>
                <td>Solo</td>
                <td>1:00</td>
                <td>0:00</td>
                <td>1:00</td>
                <td>0:00</td>
                <td>1:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2480385</td>
                <td>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1309204</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>AMIR</td>
                <td>MV.FCL.CPL.1167</td>
                <td>531</td>
                <td>Nadhees </td>
                <td />
                <td>562</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>17:12</td>
                <td>17:12</td>
                <td>18:06</td>
                <td>18:06</td>
                <td />
                <td />
                <td>0:54</td>
                <td>0:54</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>0:54</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2480402</td>
                <td>
                  <p />
                  <p>Vcbi 04 vor dme</p>
                  <p>
                    <br />
                  </p>
                  <p>Ground set up fair</p>
                  <p>
                    <br />
                  </p>
                  <p>After take off proc fair</p>
                  <p>
                    <br />
                  </p>
                  <p>300 ft checks fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Power reduction fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Climb speed maintainence fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Outbiund intcp fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Radio calls fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Level off at 3500 - fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Proc turn fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Inbound intcp different radial fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Decreasing radial Dme arc initiated - 5 dme - fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Dme maintainence fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Outbound interception from dme arc - fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Proc turn - fair </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Ovhd hold request - first establish contact - then report
                    position{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Plate briefing fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Entry identified - parallel - correct</p>
                  <p>
                    <br />
                  </p>
                  <p>Forgot to twist - dont forget</p>
                  <p>Dont miss out 1 min timing during entry</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    When doing parallel entry dont turn outbound at the flag,
                    wait to change to-from then start turn{" "}
                  </p>
                  <p>
                    This will help you intercept inbound course easier and well
                    before reaching ovhd{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Re check prop rpm</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Did roll out while intcp final appch course but at wrong
                    heading{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Forgot to give base turn complete call</p>
                  <p>
                    <br />
                  </p>
                  <p>Configured for approach fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Reduce power slightly to make speed </p>
                  <p>
                    <br />
                  </p>
                  <p>Forgot radio calls</p>
                  <p>Forgot 300 ft checks </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1309306</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>AMIR</td>
                <td>MV.FCL.CPL.1167</td>
                <td>531</td>
                <td>Amanathulla </td>
                <td />
                <td>385</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>18:33</td>
                <td>18:33</td>
                <td>19:09</td>
                <td>19:09</td>
                <td />
                <td />
                <td>0:36</td>
                <td>0:36</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>0:36</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Repetition lesson needed</td>
                <td>2480405</td>
                <td>
                  <p />
                  <p>Vrmg rwy 28 vor z app @ 250/07kts </p>
                  <p>
                    <br />
                  </p>
                  <p>Ground proc fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Take off proc fair</p>
                  <p>
                    <br />
                  </p>
                  <p>300 ft checks fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Power reduction- cross check always </p>
                  <p>
                    <br />
                  </p>
                  <p>Level off - wait for speed to build up </p>
                  <p>
                    <br />
                  </p>
                  <p>Altitude more than 100 - need to improve </p>
                  <p>
                    <br />
                  </p>
                  <p>Dme arc fair</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Inbound intcp from dme arc - did not turn to correct heading
                    to intcp the radial - need to improve{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Establish contact - then position report - the rquest
                    approach or hold{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Altitude maintainence need to improve </p>
                  <p>
                    <br />
                  </p>
                  <p>Be attentive to vor needle movements </p>
                  <p>
                    <br />
                  </p>
                  <p>5 dme ok</p>
                  <p>4 dme high</p>
                  <p>3 dme high</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    When taking flaps pitch down to maintain constant rate of
                    desend{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>2 dme - forgot flaps</p>
                  <p>
                    <br />
                  </p>
                  <p>For vrmg 3 dme flaps 10 and 2 dme flaps 20</p>
                  <p>Anywhere else 1000 ft flaps 10 and 500 ft flaps 20</p>
                  <p>
                    <br />
                  </p>
                  <p>Forgot 300 final checks </p>
                  <p>
                    <br />
                  </p>
                  <p>Follow checklist properly</p>
                  <p>
                    <br />
                  </p>
                  <p>Repeat the vor z appch 28</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1309400</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>20 Night flying- XC</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>BALA</td>
                <td>MV.FCL.CPL.970</td>
                <td>78</td>
                <td>A.Haris</td>
                <td />
                <td>419</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>19:01</td>
                <td>19:06</td>
                <td>20:02</td>
                <td>20:07</td>
                <td>5449.7</td>
                <td>5450.8</td>
                <td>1:06</td>
                <td>0:56</td>
                <td>1.1</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>6.6 L</td>
                <td>Dual</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2480386</td>
                <td>
                  <p />
                  <p>us- not practiced </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1309642</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>BALA</td>
                <td>MV.FCL.CPL.970</td>
                <td>78</td>
                <td>MANNAU</td>
                <td />
                <td>448</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>21:00</td>
                <td>21:00</td>
                <td>22:00</td>
                <td>22:00</td>
                <td />
                <td />
                <td>1:00</td>
                <td>1:00</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>1:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2480408</td>
                <td>
                  <p />
                  <p>Vcbi r/w 22</p>
                  <p>Do not forgot the DME identification.</p>
                  <p>
                    Altitude maintenance can improve, student +/-100ft try to be
                    with in 50ft.
                  </p>
                  <p>O/b dme arc fair, Enroute hold fair.</p>
                  <p>
                    <br />
                  </p>
                  <p>Reposition for I/b arc and approach,</p>
                  <p>
                    Student lost - calculation, distance, altitude maintenance.
                    Student couldn’t able to get in to the arc.&nbsp;
                  </p>
                  <p>Guided through.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Student not able to fly and brief the plate, talked through
                    and helped for briefing.
                  </p>
                  <p>ILS approach with winds guided through.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1309650</td>
                <td>aaoa</td>
                <td>2020-12-01</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>BALA</td>
                <td>MV.FCL.CPL.970</td>
                <td>78</td>
                <td>M.Hussain </td>
                <td />
                <td>397</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>22:45</td>
                <td>22:45</td>
                <td>23:45</td>
                <td>23:45</td>
                <td />
                <td />
                <td>1:00</td>
                <td>1:00</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>1:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2480409</td>
                <td>
                  <p />
                  <p>Practiced VRMG 28</p>
                  <p>Student haven’t selected xpdr on alt for departure.</p>
                  <p>
                    <br />
                  </p>
                  <p>O/b, procedure turn, overhead hold and approach.</p>
                  <p>
                    <br />
                  </p>
                  <p>Interception and procedure turn fair.</p>
                  <p>
                    <br />
                  </p>
                  <p>Overhead hold&nbsp;</p>
                  <p>I/b on r280 student briefed as parallel entry.</p>
                  <p>Mentioned and corrected to direct entry.</p>
                  <p>Student entered the hold with the direct entry.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    While turning I/b on the 2nd hold student kept turning with
                    out needle alive at 90 degrees, student mention as he forgot
                    it.
                  </p>
                  <p>From that time student couldn’t get 1min I/b.</p>
                  <p>
                    Continue to the vor z approach- stable approach compared to
                    last session.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Final check need to be done before reaching 300ft not at
                    250ft.
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1309990</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>18 Navigation / cross-country</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>Rehan </td>
                <td />
                <td>606</td>
                <td>Shauf Minthaz</td>
                <td />
                <td>380</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>07:35</td>
                <td>07:40</td>
                <td>08:42</td>
                <td>08:47</td>
                <td>5450.8</td>
                <td>5452.0</td>
                <td>1:12</td>
                <td>1:02</td>
                <td>1.2</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>7.2 L</td>
                <td>Solo</td>
                <td>1:12</td>
                <td>0:00</td>
                <td>1:12</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>1:12</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2482691</td>
                <td>
                  <p />
                  <p> </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1310005</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>MELVIN</td>
                <td>MV.FCL.CPL.1165</td>
                <td>498</td>
                <td>​Rafhan</td>
                <td />
                <td>509</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>07:50</td>
                <td>07:50</td>
                <td>08:38</td>
                <td>08:38</td>
                <td />
                <td />
                <td>0:48</td>
                <td>0:48</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>0:48</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2482694</td>
                <td>
                  <p />
                  <p>Disregard grading</p>
                  <p>
                    <br />
                  </p>
                  <p>Theory: variable pitch prop.</p>
                  <p>Slant height</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Do not forget to checks in checklist. Hurrying up will only
                    increase mistakes.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Ob R310: fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Pturn left: fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Enroute Hld: </p>
                  <p>
                    direct entry: needs to be more attentive. Student mention
                    the correct entry and Hld pattern but went for teardrop
                    entry.{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    OVH Hld: briefing of plate: student disoriented and said
                    Inbound from SE when actually inbound from NW.{" "}
                  </p>
                  <p>Paused and talked through to re-orientate.</p>
                  <p>timings : fair</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Z app: student did base turn to the right instead of left,
                    inspite saying left turn. Need to be more attentive to avoid
                    these kinda of mistake.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p> </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1310048</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>MELVIN</td>
                <td>MV.FCL.CPL.1165</td>
                <td>498</td>
                <td>M.Khalid </td>
                <td />
                <td>388</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>09:01</td>
                <td>09:01</td>
                <td>10:07</td>
                <td>10:07</td>
                <td />
                <td />
                <td>1:06</td>
                <td>1:06</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2482695</td>
                <td>
                  <p />
                  <p>Disregard grading</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Dont forget to switch transponder To ALT on RWY. Be more
                    attentive with checklist.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    After T/O brake on off check only after confirming +ive rate
                    of climb.{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>300ft checks need to be more thorough.</p>
                  <p>
                    <br />
                  </p>
                  <p> Need to maintain runway HDG after take off.</p>
                  <p>
                    <br />
                  </p>
                  <p>O/b R110: fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Pturn: need to faster with mental calculation </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Enroute Hld: with winds, need to be more aware of the
                    aircraft is effected and how to counter as briefed.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Be more prepared for Ovd Hld and enroute Hld for next sim.
                    Student didn’t know the direction for Ovd entries.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Student will be asked about the types of entries and how to
                    enter the hold before the sim session.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1310080</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>MELVIN</td>
                <td>MV.FCL.CPL.1165</td>
                <td>498</td>
                <td>RAYAH</td>
                <td />
                <td>462</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>10:51</td>
                <td>10:51</td>
                <td>11:51</td>
                <td>11:51</td>
                <td />
                <td />
                <td>1:00</td>
                <td>1:00</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>1:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Repetition lesson needed</td>
                <td>2482697</td>
                <td>
                  <p />
                  <p>Disregard grading</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>OB R060: fair </p>
                  <p>
                    <br />
                  </p>
                  <p>P turn: double check the calculation to avoid errors.</p>
                  <p>
                    <br />
                  </p>
                  <p>Ovd Hld: direct entry: fair</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    ILS Y RWY 04: needs to be ahead of the aircraft and need to
                    talk to avoid errors
                  </p>
                  <p>
                    Know how the winds are going to effect the aircraft to
                    counter.
                  </p>
                  <p>
                    When time available talk what needs to be done ahead and
                    then do,{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Do not forget to the RT when needed. </p>
                  <p>When flaps down, nose down to avoid losing glide slope.</p>
                  <p>
                    <br />
                  </p>
                  <p>Be more prepared of ILS VCBI next sim. </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1312526</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>19 Instrument Flying</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>AMIR</td>
                <td>MV.FCL.CPL.1167</td>
                <td>531</td>
                <td>SAMHA FAHUMY</td>
                <td />
                <td>466</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>11:30</td>
                <td>11:35</td>
                <td>12:37</td>
                <td>12:42</td>
                <td>5452.0</td>
                <td>5453.2</td>
                <td>1:12</td>
                <td>1:02</td>
                <td>1.2</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>7.2 L</td>
                <td>Dual</td>
                <td>1:12</td>
                <td>0:00</td>
                <td>1:12</td>
                <td>0:00</td>
                <td>1:12</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:24</td>
                <td>00:00</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2482701</td>
                <td>
                  <p />
                  <p>ground work and proc after start fair</p>
                  <p>
                    <br />
                  </p>
                  <p>GAF DME remember how to say if dme ident is not working</p>
                  <p>
                    <br />
                  </p>
                  <p>taxi fair </p>
                  <p>
                    <br />
                  </p>
                  <p>ailerons according to wind</p>
                  <p>
                    <br />
                  </p>
                  <p>deprature and after dep proc fair </p>
                  <p>
                    <br />
                  </p>
                  <p>visual flying </p>
                  <p>
                    <br />
                  </p>
                  <p>pfl </p>
                  <p>
                    <br />
                  </p>
                  <p>Clear engine </p>
                  <p>
                    <br />
                  </p>
                  <p>position your aircraft properly </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    initiate shallow turn after immediate checks - be clever{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    dont just perform procedure but fly and judge situation
                    aswell{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>low on the approach </p>
                  <p>
                    <br />
                  </p>
                  <p>stalls </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    perform as I demonstrate to you in accordance with air
                    excercise plan
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>clearing turn dnt forget</p>
                  <p>
                    <br />
                  </p>
                  <p>instrument flying</p>
                  <p>
                    <br />
                  </p>
                  <p>outbound intcp fair </p>
                  <p>
                    <br />
                  </p>
                  <p>proc turn fair </p>
                  <p>
                    <br />
                  </p>
                  <p>vor z appch fair</p>
                  <p>
                    <br />
                  </p>
                  <p>plate briefing should be full</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    when inbound dnt let needle go off the centre while briefing{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>keep power speed and altitude under check at all cost </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    you are flying but you are capable of more accuracy and
                    lesser errors{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>touchdown flat, nose needs to be slightly above </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1310135</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>MELVIN</td>
                <td>MV.FCL.CPL.1165</td>
                <td>498</td>
                <td>Vifaau</td>
                <td />
                <td>185</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>12:38</td>
                <td>12:38</td>
                <td>13:26</td>
                <td>13:26</td>
                <td />
                <td />
                <td>0:48</td>
                <td>0:48</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>0:48</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Repetition lesson needed</td>
                <td>2482699</td>
                <td>
                  <p />
                  <p>Disregard grading </p>
                  <p>
                    <br />
                  </p>
                  <p>Ob R130: fair</p>
                  <p>
                    <br />
                  </p>
                  <p>P turn: double check the mental maths to avoid errors.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    IB int after reposition: double check the mental maths to
                    avoid errors.
                  </p>
                  <p>look at HSI to determine the best direction to turn.</p>
                  <p>
                    <br />
                  </p>
                  <p>Ovd Hld: Direct entry: fair</p>
                  <p>Do wind correction on OB leg early to be effective.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Z App: when flaps down, nose should go down to maintain the
                    descent profile. This is the reason why the aircraft was
                    high on approach and was not MDA by MAP.
                  </p>
                  <p>
                    On the 2nd approach got excited of seeing rwy and forgot to
                    do 300ft checks.{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Missed approach: don’t forget to retract gear and do 300ft
                    checks.
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1313032</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>19 Instrument Flying</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>AMIR</td>
                <td>MV.FCL.CPL.1167</td>
                <td>531</td>
                <td>Laafir </td>
                <td />
                <td>395</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>13:25</td>
                <td>13:30</td>
                <td>14:26</td>
                <td>14:31</td>
                <td>5453.2</td>
                <td>5454.3</td>
                <td>1:06</td>
                <td>0:56</td>
                <td>1.1</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>6.6 L</td>
                <td>Dual</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:30</td>
                <td>00:00</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2482702</td>
                <td>
                  <p />
                  <p>Outbound intcp fair </p>
                  <p>proc turn fair </p>
                  <p>dme arc fair </p>
                  <p>inbound intcp from dme arc - talked through</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Enroute holding - check the quadrant based on your radial
                    and not the heading - talked through
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    vor z appch : talked through over speed and rate of desend{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>stall- recovery can improve more </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1310183</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>MELVIN</td>
                <td>MV.FCL.CPL.1165</td>
                <td>498</td>
                <td>Yaaniu </td>
                <td />
                <td>383</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>14:16</td>
                <td>14:16</td>
                <td>15:04</td>
                <td>15:04</td>
                <td />
                <td />
                <td>0:48</td>
                <td>0:48</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>0:48</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Repetition lesson needed</td>
                <td>2482700</td>
                <td>
                  <p />
                  <p>Disregard grading </p>
                  <p>
                    <br />
                  </p>
                  <p>SID(GOKAM 2A): fair</p>
                  <p>
                    <br />
                  </p>
                  <p>STAR (MUGBA 2A): fair</p>
                  <p>
                    <br />
                  </p>
                  <p>ILS Z RWY 36: talked through the approach. </p>
                  <p>Flap down, nose down; else glide slope will be lost.</p>
                  <p>
                    <br />
                  </p>
                  <p>Be prepared for ILS 36 with SID RWY 18 for next sim</p>
                  <p>
                    <br />
                  </p>
                  <p>Altitude maintenance needs to be +/-50ft.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1310294</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>21 General Handling</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>BALA</td>
                <td>MV.FCL.CPL.970</td>
                <td>78</td>
                <td>ROOHUL</td>
                <td />
                <td>173</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>15:26</td>
                <td>15:31</td>
                <td>16:57</td>
                <td>17:02</td>
                <td>5454.3</td>
                <td>5455.9</td>
                <td>1:36</td>
                <td>1:26</td>
                <td>1.6</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>9.6 L</td>
                <td>Solo</td>
                <td>1:36</td>
                <td>0:00</td>
                <td>1:36</td>
                <td>0:00</td>
                <td>1:36</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>1</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2482703</td>
                <td>
                  <p />
                  <p>Pfl check list and procedure go through.</p>
                  <p>
                    recovery student lost with full power nose down trim and
                    haven’t done anything.
                  </p>
                  <p>took over control and recover.</p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1310259</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>AMIR</td>
                <td>MV.FCL.CPL.1167</td>
                <td>531</td>
                <td>Rasheed Ibrahim</td>
                <td />
                <td>512</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>15:47</td>
                <td>15:47</td>
                <td>16:35</td>
                <td>16:35</td>
                <td />
                <td />
                <td>0:48</td>
                <td>0:48</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>0:48</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2482747</td>
                <td>
                  <p />
                  <p>Vrmg 28 </p>
                  <p>300/09 kts</p>
                  <p>
                    <br />
                  </p>
                  <p>Ground proc fair</p>
                  <p>After take off proc fair</p>
                  <p>300 ft checks fair </p>
                  <p>Power reduction to climb fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Outbound intcp fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Level off fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Decreasing radial dme arc 6 dme </p>
                  <p>From radial 265 minus 10 will be 255 , you set 250</p>
                  <p>Rest of the dme arc fair</p>
                  <p>
                    Distance error 0.1 dme but student corrected the distance{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Radial 170 was to be intcp but student set 160 - dnt do
                    silly mistakes{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Dont give correction with looking at DI give correction with
                    checking the OBI becaue off set is with respect to the
                    radial, radial is primary
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Enroute hold fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Proc turn right fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Radio call fir vor z app fair</p>
                  <p>
                    <br />
                  </p>
                  <p>Did not brief the plate - </p>
                  <p>
                    <br />
                  </p>
                  <p>Acft config fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Desend </p>
                  <p>5 dme low rod too high</p>
                  <p>4 dme low </p>
                  <p>3 dme low</p>
                  <p>
                    <br />
                  </p>
                  <p>2 dme low </p>
                  <p>
                    <br />
                  </p>
                  <p>Flaps 20 you did not reduce speed </p>
                  <p>
                    <br />
                  </p>
                  <p>Control speed quickly along with flaps </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Fly proper speed and rod altitude at dme dist will come
                    automatically
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p> </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1310352</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>AMIR</td>
                <td>MV.FCL.CPL.1167</td>
                <td>531</td>
                <td>Anfaal</td>
                <td />
                <td>578</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>17:12</td>
                <td>17:12</td>
                <td>17:48</td>
                <td>17:48</td>
                <td />
                <td />
                <td>0:36</td>
                <td>0:36</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>0:36</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2482748</td>
                <td>
                  <p />
                  <p>Vor z 28 </p>
                  <p>300/09kts</p>
                  <p>
                    <br />
                  </p>
                  <p>Ground proc fair </p>
                  <p>
                    <br />
                  </p>
                  <p>After take off fair </p>
                  <p>
                    <br />
                  </p>
                  <p>300 feet fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Power reduction fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Climb speed fair </p>
                  <p>
                    <br />
                  </p>
                  <p>Outbound intcp dair </p>
                  <p>
                    <br />
                  </p>
                  <p>Dont use word "roger" give proper read back </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Levelling off without setting attitude first - dnt bring
                    power back unless you have settled attitude and speed comes
                    to 115 kts{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Missed the distance to start turn for dme arc by o.3 dme{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Student lost the distance during dme arc and did not give
                    corrections{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Practiced dme arc again talked through</p>
                  <p>
                    <br />
                  </p>
                  <p>Practiced inbound intcp on a dme arc - talked through </p>
                  <p>
                    <br />
                  </p>
                  <p>First establish contact </p>
                  <p>
                    <br />
                  </p>
                  <p>Then report position amd request vor z appch 28 </p>
                  <p>
                    <br />
                  </p>
                  <p>Initated the plate briefing - good </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Hit the station and start turning outbound with desending
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Config acft fair </p>
                  <p>
                    <br />
                  </p>
                  <p>5 dme high</p>
                  <p>4 dme high</p>
                  <p>3 dme high</p>
                  <p>2 dme high</p>
                  <p>
                    <br />
                  </p>
                  <p>Not flying correct speed </p>
                  <p>Rod fluctuation is high</p>
                  <p>
                    <br />
                  </p>
                  <p>Forgot 300 ft checks before landing </p>
                  <p>
                    <br />
                  </p>
                  <p>Student briefed in detail </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1310566</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>8Q-GAF</td>
                <td>C150</td>
                <td>Lesson</td>
                <td>20 Night flying- XC</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>BALA</td>
                <td>MV.FCL.CPL.970</td>
                <td>78</td>
                <td>TMA Basith</td>
                <td />
                <td>415</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>VRMG</td>
                <td>VRMG</td>
                <td>19:05</td>
                <td>19:10</td>
                <td>20:06</td>
                <td>20:11</td>
                <td>5455.9</td>
                <td>5457.0</td>
                <td>1:06</td>
                <td>0:56</td>
                <td>1.1</td>
                <td className="fuel_coefficient">6.0 L/Tacho</td>
                <td>6.6 L</td>
                <td>Dual</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>1</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Passed</td>
                <td>2482708</td>
                <td>
                  <p />
                  <p>Us not practiced </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1311175</td>
                <td>aaoa</td>
                <td>2020-12-02</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>BALA</td>
                <td>MV.FCL.CPL.970</td>
                <td>78</td>
                <td>Sarumadh</td>
                <td />
                <td>404</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>21:00</td>
                <td>21:00</td>
                <td>22:00</td>
                <td>22:00</td>
                <td />
                <td />
                <td>1:00</td>
                <td>1:00</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>1:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Repetition lesson needed</td>
                <td>2482751</td>
                <td>
                  <p />
                  <p>vcbi practiced </p>
                  <p>fair performance on arc, overhead hold.</p>
                  <p>
                    vor approach need to improve, speed maintenance and
                    coordinating with altitude, improve your power management.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="odd">
                <td>1312977</td>
                <td>aaoa</td>
                <td>2020-12-05</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>BALA</td>
                <td>MV.FCL.CPL.970</td>
                <td>78</td>
                <td>Nadhees </td>
                <td />
                <td>562</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>06:20</td>
                <td>06:20</td>
                <td>07:20</td>
                <td>07:20</td>
                <td />
                <td />
                <td>1:00</td>
                <td>1:00</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>1:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Repetition lesson needed</td>
                <td>2489737</td>
                <td>
                  <p />
                  <p>Climb and level off good.</p>
                  <p>Interception fair.</p>
                  <p>
                    <br />
                  </p>
                  <p>Enroute hold fair- wind correction good.</p>
                  <p>
                    <br />
                  </p>
                  <p>I/b on r060 for overhead hold.</p>
                  <p>
                    Briefed hold procedures fair, vor z approach procedure
                    briefing guided through.
                  </p>
                  <p>Speeds need to be followed on approach.</p>
                  <p>
                    Vor z approach can improve, specially the distance with
                    altitude.
                  </p>
                  <p>Work on your power management&nbsp;</p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
              <tr className="even">
                <td>1313260</td>
                <td>aaoa</td>
                <td>2020-12-05</td>
                <td>ELITE FNPT 2 - single</td>
                <td>ELITE FNPT 2 SINGLE </td>
                <td>Lesson</td>
                <td>19 Instrument Flying-FTD</td>
                <td>CPL IR(A)</td>
                <td>Revision 0</td>
                <td />
                <td />
                <td />
                <td>BALA</td>
                <td>MV.FCL.CPL.970</td>
                <td>78</td>
                <td>badheeu</td>
                <td />
                <td>431</td>
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td />
                <td>07:45</td>
                <td>07:45</td>
                <td>08:51</td>
                <td>08:51</td>
                <td />
                <td />
                <td>1:06</td>
                <td>1:06</td>
                <td>0.0</td>
                <td className="fuel_coefficient">0.0 L/Block</td>
                <td>0.0 L</td>
                <td>Sim</td>
                <td>0:00</td>
                <td>1:06</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>0:00</td>
                <td>00:00</td>
                <td>00:00</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>Repetition lesson needed</td>
                <td>2489742</td>
                <td>
                  <p />
                  <p>Aileron into the wind for roll.</p>
                  <p>Student haven’t completed the power setting at 300ft.</p>
                  <p>And climbing.</p>
                  <p>Level off power 22MAP 2200RPM.</p>
                  <p>Level off need to improve, A-S-P-T.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    O/b on r160 procedure turn to the right, student calculating
                    to the left, once mentioned it’s wrong student calculating
                    to the right.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>Enroute hold</p>
                  <p>
                    Calculation for teardrop entry, student mention as 60
                    degrees. Work on your calculation go go through the
                    procedure,m. Every time can’t make a mistake.
                  </p>
                  <p>
                    90 degrees position need to be calculated while turning I/b,
                    then only can be checked the needle alive or not.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Reposition and I/b interception student lost, need to
                    improve I/b interception.
                  </p>
                  <p>Go through your procedure before coming for the sim.</p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Overhead hold, entry fair and performed parallel
                    entry,&nbsp;
                  </p>
                  <p>
                    Completing the 2nd hold student lost the times and haven’t
                    noticed.
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>come prepare for next sim and cut your hair.</p>
                  <p />
                </td>
                <td />
                <td />
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </div>
  );
}
