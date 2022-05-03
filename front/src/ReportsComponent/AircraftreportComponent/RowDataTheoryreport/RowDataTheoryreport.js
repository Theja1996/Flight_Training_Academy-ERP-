// import React from "react";
// import TitleBar from "../../../components/TitleBar";
// import "../../../ReportsComponent/AircraftreportComponent/RowDataTheoryreport/RowDataTheoryreport.css";
// import {
//   CaretDownOutlined,
//   DownloadOutlined,
//   FileExcelOutlined,
//   FilePdfOutlined,
//   FileTextOutlined,
//   SearchOutlined,
// } from "@ant-design/icons";
// import {
//   Button,
//   Col,
//   DatePicker,
//   Dropdown,
//   Menu,
//   Row,
//   Select,
//   Space,
//   Divider,
// } from "antd";
// import { useState } from "react";

// const { Option } = Select;

// const { RangePicker } = DatePicker;

// const dateFormat = "YYYY/MM/DD";
// const monthFormat = "YYYY/MM";

// const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

// export default function RowDataTheoryreport() {
//   const [size, setsize] = useState();
//   const [optionvalue, setoptionvalue] = useState();
//   const [startdate, setstartdate] = useState("");
//   const [enddate, setenddate] = useState("");

//   function onstartdate(date, dateString) {
//     setstartdate(dateString);
//     console.log(date, dateString, startdate);
//   }

//   function onenddate(date, dateString) {
//     setenddate(dateString);
//     console.log(date, dateString);
//   }

//   const pdf = () => (
//     <Menu>
//       <Menu.Item key="0">
//         <Button>
//           <FilePdfOutlined />
//           PDF..
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="1">
//         <Button>
//           <FileExcelOutlined />
//           XML
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="2">
//         <Button>
//           <FileTextOutlined />
//           CSV (Excel)
//         </Button>
//       </Menu.Item>
//     </Menu>
//   );

//   return (
//     <div>
//       <TitleBar></TitleBar>
//       <Row gutter={[16, 16]}>
//         <Col span={16} offset={4}>
//           <h3 style={{ fontWeight: "bold" }}>
//             Theory report for {startdate.concat(" - ")}
//             {enddate}
//           </h3>
//         </Col>
//       </Row>
//       <Divider></Divider>
//       <Row style={{ marginTop: 10 }}>
//         <Col span={16} offset={4}>
//           <Row gutter={16} justify="space-between">
//             <div style={{ display: "flex" }}>
//               <Col>
//                 <DatePicker onChange={onstartdate} />
//               </Col>
//               <Col>
//                 <DatePicker onChange={onenddate} />
//               </Col>

//               <Col>
//                 <Button style={{ borderStyle: "outset" }}>
//                   <SearchOutlined />
//                   Find report
//                 </Button>
//               </Col>
//             </div>
//             <Col>
//               <React.Fragment>
//                 <Space size={size}>
//                   <Button
//                     type="dashed"
//                     style={{ borderStyle: "outset", backgroundColor: "grey" }}
//                   >
//                     <Dropdown overlay={pdf} trigger={["click"]}>
//                       <a
//                         className="ant-dropdown-link"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         <DownloadOutlined /> Export as <CaretDownOutlined />
//                       </a>
//                     </Dropdown>
//                   </Button>
//                 </Space>
//               </React.Fragment>
//             </Col>
//           </Row>
//         </Col>
//       </Row>
//       <Row style={{ marginTop: 10 }}>
//         <Col style={{ overflow: "auto" }} span={20} offset={2}>
//           <table className="table table-condensed">
//             <thead>
//               <tr>
//                 <th colSpan={20}>Theory</th>
//               </tr>
//               <tr>
//                 <th>Account</th>
//                 <th>Date</th>
//                 <th>Type of theory</th>
//                 <th>Theory course</th>
//                 <th>Theory category</th>
//                 <th>Theory subject</th>
//                 <th>Class</th>
//                 <th>Student</th>
//                 <th>Student CAA ref.</th>
//                 <th>Student user ref.</th>
//                 <th>Instructor</th>
//                 <th>Instructor CAA ref.</th>
//                 <th>Instructor user ref.</th>
//                 <th>Examiner</th>
//                 <th>Examiner CAA ref.</th>
//                 <th>Examiner user ref.</th>
//                 <th>Starts at</th>
//                 <th>Ends at</th>
//                 <th>Duration</th>
//                 <th>Status</th>
//                 <th>Attended from</th>
//                 <th>Attended to</th>
//                 <th>Attendence</th>
//                 <th>Grade</th>
//                 <th>Sitting number</th>
//                 <th>Sitting starts at</th>
//                 <th>Sitting ends at</th>
//                 <th>Ref. number</th>
//                 <th>Description</th>
//                 <th>Student comment</th>
//                 <th>Comment</th>
//                 <th>Booking id</th>
//                 <th>Income invoice number</th>
//                 <th>Expenses invoice number</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-01</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td />
//                 <td />
//                 <td>Isha </td>
//                 <td />
//                 <td>618</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2479920</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-01</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td />
//                 <td />
//                 <td>Nasru</td>
//                 <td />
//                 <td> 661</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2479920</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-01</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td />
//                 <td />
//                 <td>Sanyaan</td>
//                 <td />
//                 <td>649</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2479920</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-01</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td />
//                 <td />
//                 <td>Zareef</td>
//                 <td />
//                 <td>646</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2479920</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-02</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Cognition </td>
//                 <td />
//                 <td>Isha </td>
//                 <td />
//                 <td>618</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2482429</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-02</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Cognition </td>
//                 <td />
//                 <td>Nasru</td>
//                 <td />
//                 <td> 661</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2482429</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-02</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Cognition </td>
//                 <td />
//                 <td>Sanyaan</td>
//                 <td />
//                 <td>649</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2482429</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-02</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Cognition </td>
//                 <td />
//                 <td>Zareef</td>
//                 <td />
//                 <td>646</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2482429</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-06</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Revision and questions</td>
//                 <td />
//                 <td>Isha </td>
//                 <td />
//                 <td>618</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2490967</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-06</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Revision and questions</td>
//                 <td />
//                 <td>Nasru</td>
//                 <td />
//                 <td> 661</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2490967</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-06</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Revision and questions</td>
//                 <td />
//                 <td>Sanyaan</td>
//                 <td />
//                 <td>649</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2490967</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-06</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Revision and questions</td>
//                 <td />
//                 <td>Zareef</td>
//                 <td />
//                 <td>646</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2490967</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-06</td>
//                 <td>Class theory</td>
//                 <td>BAK</td>
//                 <td>Communications </td>
//                 <td />
//                 <td>2020 SEP-BAK Batch 01</td>
//                 <td>Nasru</td>
//                 <td />
//                 <td> 661</td>
//                 <td>MELVIN</td>
//                 <td>MV.FCL.CPL.1165</td>
//                 <td>498</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td>11:00</td>
//                 <td>12:15</td>
//                 <td>1:15</td>
//                 <td>Attended</td>
//                 <td>11:00</td>
//                 <td>12:15</td>
//                 <td>1:15</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2491257</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-06</td>
//                 <td>Class theory</td>
//                 <td>Briefing (IR)</td>
//                 <td>Enroute holds</td>
//                 <td />
//                 <td />
//                 <td>Rai</td>
//                 <td />
//                 <td>459</td>
//                 <td>BALA</td>
//                 <td>MV.FCL.CPL.970</td>
//                 <td>78</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:30</td>
//                 <td>14:30</td>
//                 <td>1:00</td>
//                 <td>Did not attend</td>
//                 <td>13:30</td>
//                 <td>14:30</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   Student mention as ops ask to give him the reason for not
//                   attending the previous briefing, so he haven’t given. So he
//                   thought that he’s not going to be scheduled for briefing and
//                   not checked the flight logger.
//                 </td>
//                 <td>
//                   <p />
//                 </td>
//                 <td>2491220</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-06</td>
//                 <td>Class theory</td>
//                 <td>Briefing (IR)</td>
//                 <td>Enroute holds</td>
//                 <td />
//                 <td />
//                 <td>Shauzoon</td>
//                 <td />
//                 <td>405</td>
//                 <td>BALA</td>
//                 <td>MV.FCL.CPL.970</td>
//                 <td>78</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:30</td>
//                 <td>14:30</td>
//                 <td>1:00</td>
//                 <td>Attended</td>
//                 <td>13:30</td>
//                 <td>14:30</td>
//                 <td>1:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2491220</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-07</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Revisions and Questions </td>
//                 <td />
//                 <td>Isha </td>
//                 <td />
//                 <td>618</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2493291</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-07</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Revisions and Questions </td>
//                 <td />
//                 <td>Nasru</td>
//                 <td />
//                 <td> 661</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2493291</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-07</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Revisions and Questions </td>
//                 <td />
//                 <td>Sanyaan</td>
//                 <td />
//                 <td>649</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2493291</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-07</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>Human Performance &amp; Limitations </td>
//                 <td>Revisions and Questions </td>
//                 <td />
//                 <td>Zareef</td>
//                 <td />
//                 <td>646</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2493291</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-07</td>
//                 <td>Class theory</td>
//                 <td>BAK</td>
//                 <td>Communications </td>
//                 <td />
//                 <td>2020 SEP-BAK Batch 01</td>
//                 <td>Nasru</td>
//                 <td />
//                 <td> 661</td>
//                 <td>MELVIN</td>
//                 <td>MV.FCL.CPL.1165</td>
//                 <td>498</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td>11:00</td>
//                 <td>11:45</td>
//                 <td>0:45</td>
//                 <td>Attended</td>
//                 <td>11:00</td>
//                 <td>11:45</td>
//                 <td>0:45</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2492702</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-08</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>General Navigation</td>
//                 <td>Introduction </td>
//                 <td />
//                 <td>Isha </td>
//                 <td />
//                 <td>618</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>14:15</td>
//                 <td>1:15</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>14:15</td>
//                 <td>1:15</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2494584</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-08</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>General Navigation</td>
//                 <td>Introduction </td>
//                 <td />
//                 <td>Nasru</td>
//                 <td />
//                 <td> 661</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>14:15</td>
//                 <td>1:15</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>14:15</td>
//                 <td>1:15</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2494584</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-08</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>General Navigation</td>
//                 <td>Introduction </td>
//                 <td />
//                 <td>Sanyaan</td>
//                 <td />
//                 <td>649</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>14:15</td>
//                 <td>1:15</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>14:15</td>
//                 <td>1:15</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2494584</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-08</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>General Navigation</td>
//                 <td>Introduction </td>
//                 <td />
//                 <td>Zareef</td>
//                 <td />
//                 <td>646</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>14:15</td>
//                 <td>1:15</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>14:15</td>
//                 <td>1:15</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2494584</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-09</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>General Navigation</td>
//                 <td />
//                 <td />
//                 <td>Isha </td>
//                 <td />
//                 <td>618</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2497895</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-09</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>General Navigation</td>
//                 <td />
//                 <td />
//                 <td>Nasru</td>
//                 <td />
//                 <td> 661</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2497895</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-09</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>General Navigation</td>
//                 <td />
//                 <td />
//                 <td>Sanyaan</td>
//                 <td />
//                 <td>649</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2497895</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-09</td>
//                 <td>Class theory</td>
//                 <td>ATPL(A)</td>
//                 <td>General Navigation</td>
//                 <td />
//                 <td />
//                 <td>Zareef</td>
//                 <td />
//                 <td>646</td>
//                 <td>HASHEL</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td>Attended</td>
//                 <td>13:00</td>
//                 <td>18:00</td>
//                 <td>5:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2497895</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="odd">
//                 <td>aaoa</td>
//                 <td>2020-12-12</td>
//                 <td>Class theory</td>
//                 <td>Briefing (IR)</td>
//                 <td>SID and STAR</td>
//                 <td />
//                 <td />
//                 <td> Dhaisam Sobah</td>
//                 <td />
//                 <td>433</td>
//                 <td>BALA</td>
//                 <td>MV.FCL.CPL.970</td>
//                 <td>78</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td>18:00</td>
//                 <td>19:00</td>
//                 <td>1:00</td>
//                 <td>Did not attend</td>
//                 <td>18:00</td>
//                 <td>19:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>Student haven’t answered the phone.</td>
//                 <td>
//                   <p />
//                 </td>
//                 <td>2505479</td>
//                 <td />
//                 <td />
//               </tr>
//               <tr className="even">
//                 <td>aaoa</td>
//                 <td>2020-12-12</td>
//                 <td>Class theory</td>
//                 <td>Briefing (IR)</td>
//                 <td>SID and STAR</td>
//                 <td />
//                 <td />
//                 <td>A.Haleem</td>
//                 <td />
//                 <td>603</td>
//                 <td>BALA</td>
//                 <td>MV.FCL.CPL.970</td>
//                 <td>78</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td>18:00</td>
//                 <td>19:00</td>
//                 <td>1:00</td>
//                 <td>Attended</td>
//                 <td>18:00</td>
//                 <td>19:00</td>
//                 <td>1:00</td>
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td />
//                 <td>
//                   <p />
//                 </td>
//                 <td>2505479</td>
//                 <td />
//                 <td />
//               </tr>
//             </tbody>
//           </table>
//         </Col>
//       </Row>
//     </div>
//   );
// }
