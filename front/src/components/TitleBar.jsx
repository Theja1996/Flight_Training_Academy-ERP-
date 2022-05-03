// import React from "react";
// import { useHistory } from "react-router-dom";

// import { Menu, Dropdown, Space, Button, Row, Col, Anchor  ,Link,} from "antd";

// import { Badge } from "antd";
// import {
//   FaCaretDown,
//   FaEnvelope,
//   FaFileInvoice,
//   FaLock,
//   FaPencilAlt,
//   FaRegImage,
//   FaRegQuestionCircle,
//   FaSyncAlt,
//   FaUserAlt,
// } from "react-icons/fa";
// import { FiLogOut } from "react-icons/fi";
// import Avatar from "antd/lib/avatar/avatar";


// function TitleBar() {
//   const history = useHistory();

//   function doLogout() {
//     history.push("/Login");
//   }

//   const uesrss = (
//     <Menu style={{ backgroundColor: "#144364", borderRadius: "6px" }}>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FaUserAlt style={{ color: "white" }} />
//           {/* <Anchor affix={false} > <Link href="/Profile" title=" My profile" style={{ color: "white", fontWeight: "bold" }} /> My profile</Anchor> */}
         
//            <a href="/Profile" style={{ color: "white", fontWeight: "bold" }}>
//             My profile
//           </a> 
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FaFileInvoice style={{ color: "white" }} />
//           <a href="#" style={{ color: "white", fontWeight: "bold" }}>
//             My logbook
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FaSyncAlt style={{ color: "white" }} />
//           <a href="#" style={{ color: "white", fontWeight: "bold" }}>
//             Sync with calender
//           </a>
//         </Space>
//       </Button>
//       <br></br> <Menu.Divider style={{ color: "white" }} />
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FaPencilAlt style={{ color: "white" }} />
//           <a href="#" style={{ color: "white", fontWeight: "bold" }}>
//             Edit info
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FaLock style={{ color: "white" }} />
//           <a href="#" style={{ color: "white", fontWeight: "bold" }}>
//             Edit password
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FaRegImage style={{ color: "white" }} />
//           <a href="#" style={{ color: "white", fontWeight: "bold" }}>
//             Edit image
//           </a>
//         </Space>
//       </Button>
//       <Menu.Divider />
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FiLogOut style={{ color: "white" }} />
//           <a
//             href="#"
//             onClick={doLogout}
//             style={{ color: "white", fontWeight: "bold" }}
//           >
//             Log out
//           </a>
//         </Space>
//       </Button>
//     </Menu>
//   );

//   const help = (
//     <Menu style={{ backgroundColor: "#144364", borderRadius: "6px" }}>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FaUserAlt style={{ color: "white" }} />
//           <a
//             href="#"
//             target="blank"
//             style={{ color: "white", fontWeight: "bold" }}
//           >
//             Help center
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FaFileInvoice style={{ color: "white" }} />
//           <a href="#" style={{ color: "white", fontWeight: "bold" }}>
//             Get support
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FaSyncAlt style={{ color: "white" }} />
//           <a href="#" style={{ color: "white", fontWeight: "bold" }}>
//             Refresher training
//           </a>
//         </Space>
//       </Button>
//       <br></br> <Menu.Divider style={{ color: "white" }} />
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <FaPencilAlt style={{ color: "white" }} />
//           <a href="#" style={{ color: "white", fontWeight: "bold" }}>
//             Software updates
//           </a>
//         </Space>
//       </Button>
//     </Menu>
//   );

//   const menu = (
//     <Menu style={{ backgroundColor: " #3277b3", borderRadius: "6px" }}>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Students" style={{ color: "white" }}>
//             Students
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Userclass" style={{ color: "white" }}>
//             Class
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Instructor" style={{ color: "white"}}>
//             Instructors
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Crew" style={{ color: "white"}}>
//             Crew
//           </a>
//         </Space>
//       </Button>
//       <br></br>{" "}
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Staff" style={{ color: "white"}}>
//             Staff
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/Administrator"
//             style={{ color: "white" }}
//           >
//             Administrators
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="Render" style={{ color: "white" }}>
//             Renters
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Guest" style={{ color: "white"}}>
//           Guests
//           </a>
//         </Space>
//       </Button>
//     </Menu>
//   );

//   const certificate = (
//     <Menu style={{ backgroundColor: " #3277b3", borderRadius: "6px" }}>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Userwarning" style={{ color: "white"}}>
//             Certificate warning..
//           </a>
//         </Space>
//       </Button>
//     </Menu>
//   );

//   const booking = () => (
//     <Menu style={{ backgroundColor: " #3277b3", borderRadius: "6px" }}>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/bookings" style={{ color: "white" }}>
//             create booking
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/overview" style={{ color: "white" }}>
//             Overview
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/overview" style={{ color: "white" }}>
//             weekly overview
//           </a>
//         </Space>
//       </Button>{" "}
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/overview" style={{ color: "white" }}>
//             monthly overview
//           </a>
//         </Space>
//       </Button>{" "}
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/overview" style={{ color: "white" }}>
//             Request aircraft rental
//           </a>
//         </Space>
//       </Button>{" "}
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/overview" style={{ color: "white" }}>
//             Approve aircraft rental
//           </a>
//         </Space>
//       </Button>{" "}
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/overview" style={{ color: "white" }}>
//             Request simulator rental
//           </a>
//         </Space>
//       </Button>{" "}
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/overview" style={{ color: "white" }}>
//             Approve simulator rental
//           </a>
//         </Space>
//       </Button>
//     </Menu>
//   );

//   const administration = (
//     <Menu style={{ backgroundColor: " #3277b3", borderRadius: "6px" }}>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/AccountSetting"
//             style={{ color: "white"}}
//           >
//             Account setting
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Aircraft" style={{ color: "white" }}>
//             Aircraft
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Airport " style={{ color: "white" }}>
//             Airports
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/CancelReason"
//             style={{ color: "white"}}
//           >
//             cancelation Reasons
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/ClassRoom" style={{ color: "white" }}>
//             classromms
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Customers" style={{ color: "white" }}>
//             customers
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/BookingFilter"
//             style={{ color: "white" }}
//           >
//             Filters-booking
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/FilterCertificateWarning"
//             style={{ color: "white"}}
//           >
//             Filters-certificate warnings
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/FiterGroundSchool"
//             style={{ color: "white" }}
//           >
//             Filters- Ground school warnings
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/FilterMaintanenceWarning"
//             style={{ color: "white" }}
//           >
//             maintanence warnings
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/MasterCertificateList"
//             style={{ color: "white"}}
//           >
//             Master certificate List
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/MasterMaintanenceList"
//             style={{ color: "white" }}
//           >
//             Master maintenance list
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Operations" style={{ color: "white" }}>
//             Opreations
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="/Programs" style={{ color: "white" }}>
//             Programms
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/RenterRequirment"
//             style={{ color: "white" }}
//           >
//             Renter Requiments
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/TheoryCourse"
//             style={{ color: "white" }}
//           >
//             Theory cources
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//     </Menu>
//   );

//   const repots = (
//     <Menu style={{ backgroundColor: " #3277b3", borderRadius: "6px" }}>
//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/AircraftReport"
//             style={{ color: "white"}}
//           >
//             Aircraft reports
//           </a>
//         </Space>
//       </Button>
//       <br></br>

//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/AirportReport"
//             style={{ color: "white"}}
//           >
//             Airports reports
//           </a>
//         </Space>
//       </Button>
//       <br></br>

//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/BookingStatistic"
//             style={{ color: "white" }}
//           >
//             Booking Statictics
//           </a>
//         </Space>
//       </Button>
//       <br></br>

//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/BookingCancel"
//             style={{ color: "white" }}
//           >
//             Cancelation Report
//           </a>
//         </Space>
//       </Button>
//       <br></br>

//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/FlightLoggerAnalitics"
//             style={{ color: "white" }}
//           >
//             FlightLogger Analitics
//           </a>
//         </Space>
//       </Button>
//       <br></br>

//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a href="FuelReport" style={{ color: "white" }}>
//             Fuel report
//           </a>
//         </Space>
//       </Button>
//       <br></br>

//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/InvoiceReport"
//             style={{ color: "white"}}
//           >
//             Invoice Report
//           </a>
//         </Space>
//       </Button>
//       <br></br>

//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/ProductionReport"
//             style={{ color: "white" }}
//           >
//             Production report
//           </a>
//         </Space>
//       </Button>
//       <br></br>

//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/RowDataFlightreport"
//             style={{ color: "white" }}
//           >
//             Raw-data flight report
//           </a>
//         </Space>
//       </Button>
//       <br></br>

//       <Button style={{ width: "100%", textAlign: "left" }} type="text">
//         <Space>
//           <a
//             href="/RowDataTheoryreport"
//             style={{ color: "white"}}
//           >
//             Raw-data theory report
//           </a>
//         </Space>
//       </Button>
//       <br></br>
//     </Menu>
//   );

//   return (
//     <>
//       <Row
//         style={{
//           backgroundColor: " #093A5D",
//           height: 45,

//           width: " 1700px",
//         }}
//       >
//         <Col span={12}>
//           <Button
//             justify="space-between "
//             style={{ fontSize: "20px" }}
//             type="text"
//           >
//             <a href="#" style={{ color: "white" }}>
//               Asian Academy of Aeronautics
//             </a>
//           </Button>
//         </Col>
//         <Col span={6} offset={4}>
//           <Space>
//           <Badge size="small" count={5}>
//             <FaEnvelope style={{ color: "white", fontSize: "19px" }} />
//             <a href="#" />
//           </Badge>
//           <Avatar  src="https://media-exp1.licdn.com/dms/image/C4D0BAQFvYxp0IqMV9A/company-logo_200_200/0/1519952520890?e=2159024400&v=beta&t=jNBNgJd3x3Y6X4pgToJzFOAFq3UGU7ykY3E08jtdedQ" size="small" />
//           <Dropdown overlay={uesrss} trigger={["click"]}>
//             <Button type="text">
//               <FaCaretDown style={{ color: "white" }} />
//             </Button>
//           </Dropdown>
//           </Space>
//           <Dropdown overlay={help} trigger={["click"]}>
//             <Button type="text">
//               <FaRegQuestionCircle
//                 style={{ color: "white", fontSize: "19px" }}
//               />
//             </Button>
//           </Dropdown>
        
//         </Col>
//       </Row>

//       <Row
//         style={{
//           backgroundColor: "  #3683C8 ",
//           height: 35,
//           width: " 1700px",
//         }}
//       >
//         <Col span={8} offset={4}>
//           <Space>
//             <Dropdown overlay={menu} trigger={["click"]}>
//               <Button type="text" style={{ color: "white", fontSize: "14px" }}>
//                 <Space>
//                   Users <FaCaretDown style={{ color: "#8cccec" }} />
//                 </Space>
//               </Button>
//             </Dropdown>
//             <Dropdown overlay={certificate} trigger={["click"]}>
//               <Button type="text" style={{ color: "white", fontSize: "14px" }}>
//                 <Space>
//                   warnings <FaCaretDown style={{ color: "#8cccec" }} />
//                 </Space>
//               </Button>
//             </Dropdown>
//             <Button type="text">
//               <Space>
//                 <a
//                   href="/Operation"
//                   style={{ color: "white", fontSize: "14px" }}
//                 >
//                   Activities
//                 </a>
//               </Space>
//             </Button>
//             <Dropdown overlay={booking} trigger={["click"]}>
//               <Button type="text" style={{ color: "white", fontSize: "14px" }}>
//                 <Space>
//                   Booking <FaCaretDown style={{ color: "#8cccec" }} />
//                 </Space>
//               </Button>
//             </Dropdown>
//             <Dropdown overlay={administration} trigger={["click"]}>
//               <Button type="text" style={{ color: "white", fontSize: "14px" }}>
//                 <Space>
//                   Administration
//                   <FaCaretDown style={{ color: "#8cccec" }} />
//                 </Space>
//               </Button>
//             </Dropdown>
//             <Dropdown overlay={repots} trigger={["click"]}>
//               <Button type="text" style={{ color: "white", fontSize: "14px" }}>
//                 <Space>
//                   Reports
//                   <FaCaretDown style={{ color: "#8cccec" }} />
//                 </Space>
//               </Button>
//             </Dropdown>
//             <Button type="text">
//               <Space>
//                 <a
//                   href="/HomeDocument"
//                   style={{ color: "white", fontSize: "14px" }}
//                 >
//                   {" "}
//                   Documants
//                 </a>
//               </Space>
//             </Button>
//           </Space>
//         </Col>
//       </Row>
//     </>
//   );
// }
// export default TitleBar;
