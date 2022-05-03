// import React, { useEffect, useState } from "react";
// import "../StudentsComponent/Student.css";
// import TitleBar from "../components/TitleBar";
// import { DownOutlined, UserOutlined } from "@ant-design/icons";
// import {
//   Button,
//   Dropdown,
//   Table,
//   Menu,
//   Modal,
//   Card,
//   Checkbox,
//   Divider,
//   Row,
//   Form,
//   Space,
//   Col,
// } from "antd";
// import { Link } from "react-router-dom";
// import { DownloadOutlined } from "@ant-design/icons";
// import {
//   SearchOutlined,
//   TableOutlined,
//   BarsOutlined,
//   PlusOutlined,
//   FilePdfOutlined,
//   FileExcelOutlined,
//   FileTextOutlined,
//   CaretDownOutlined,
// } from "@ant-design/icons";

// import { edit, getAll } from "../utils/APIUtils";

// export default function Students() {
//   // const [dataStudent, setdataStudent] = useState([]);
//   // const [stuData, setstuData] = useState([]);
//   // const [stuid, setstuid] = useState();

//   // const [studentfirstName, setstudentfirstName] = useState();
//   // const [studentlastName, setstudentlasttName] = useState();
//   // const [studentAddress, setstudentAddress] = useState();
//   // const [studentphonenumber, setstudentphonenumber] = useState();
//   // const [studentemail, setstudentemail] = useState();
//   // const [studentuserreferance, setstudentuserreferance] = useState();
//   // const [studentkey, setstudentkey] = useState();

//   const [getfilghtStudent, setgetflightstudent] = useState([]);

//   // const [visible, setvisible] = useState(false);
//   const [selectionType, setSelectionType] = useState("checkbox");
//   const [selectedrows, setSelectedrows] = useState([]);
//   // const [ selectedRowKeys, setselectedRowKeys] = useState([]);
//   // const [loading, setloading] = useState(false);

//   // const [loading, setloading] = useState(false);

//   // const start = () => {

//   //   setTimeout((e) => {
//   //     setSelectionType([]);
//   //   }, 1000);
//   // };
//   // const hasSelected = (e) =>
//   //   setselectedRowKeys({ selectedRowKeys: e.target.value.length > 0 });

//   // const showModal = () => {
//   //   setvisible(true);
//   // };

//   // const handleOk = (e) => {
//   //   console.log(e);
//   //   setvisible(false);
//   // };

//   // const handleCancel = (e) => {
//   //   console.log(e);
//   //   setvisible(false);
//   // };

//   useEffect(() => {
//     getAll("FlightStudent")
//       .then((result) => setgetflightstudent(result))
//       .catch((error) => console.log(error));
//   }, []);

//   useEffect(() => {
//     edit("FlightStudent")
//       .then((result) => setgetflightstudent(result))
//       .catch((error) => console.log(error));
//   }, []);

//   const menu = (
//     <Menu mode="horizontal">
//       <Menu.Item  key="1"  >
//         <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
//           1st menu itemttttttttttttttttttttttttttttttt
//         </a>
//       </Menu.Item>
//       <Menu.Item  key="1" >
//         <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
//           2nd menu itemttttttttttttttttttt
//         </a>
//       </Menu.Item>
//       <Menu.Item  key="1" >
//         <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
//           3rd menu itemtttttttttttttttttttttttt
//         </a>
//       </Menu.Item>
//     </Menu>
//   );

//   const pdf = () => (
//     <Menu>
//       <Menu.Item key="0">
//         <Button type="text">
//           <FilePdfOutlined />
//           PDF..
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="0">
//         <Button type="text">
//           <FileExcelOutlined />
//           XML
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="0">
//         <Button type="text">
//           <FileTextOutlined />
//           CSV (Excel)
//         </Button>
//       </Menu.Item>
//     </Menu>
//   );
//   const menu1 = (
//     <Menu>
//       <Menu.Item key="1">
//         <Button
//           type="text"
//           text={<a href="#" />}
//           icon={<i class="fas fa-graduation-cap"></i>}
//         >
//           Active students
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="2">
//         <Button
//           type="text"
//           text={<a href="#" />}
//           icon={<i class="fas fa-graduation-cap"></i>}
//         >
//           Standby students
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="3">
//         <Button
//           type="text"
//           text={<a href="#" />}
//           icon={<i class="fas fa-graduation-cap"></i>}
//         >
//           Completed students
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="4">
//         <Button
//           type="text"
//           text={<a href="#" />}
//           icon={<i class="fas fa-graduation-cap"></i>}
//         >
//           Discontinued students
//         </Button>
//       </Menu.Item>
//     </Menu>
//   );

//   const menu_settings = (
//     <Menu mode="vertical">
//       <Menu.Item key="1">
//         <Button
//           type="text"
//           text={<a href="#" />}
//           icon={<i class="fas fa-graduation-cap"></i>}
//         >
//           Standby
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="2">
//         <Button
//           type="text"
//           text={<a href="#" />}
//           icon={<i class="fas fa-graduation-cap"></i>}
//         >
//           Completed
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="3">
//         <Button
//           type="text"
//           text={<a href="#" />}
//           icon={<i class="fas fa-graduation-cap"></i>}
//         >
//           Discontinued
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="4">
//         <Button
//           type="text"
//           text={<a href="#" />}
//           icon={<i class="fas fa-lock"></i>}
//         >
//           Block
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="5">
//         <Button
//           type="text"
//           text={<a href="#" />}
//           icon={<i class="fas fa-unlock"></i>}
//         >
//           Unblock
//         </Button>
//       </Menu.Item>
//       <Menu.Item key="6">
//         <Button
//           type="text"
//           text={<a href="#" />}
//           icon={<i class="fas fa-envelope"></i>}
//         >
//           Resend Login email
//         </Button>
//       </Menu.Item>
//     </Menu>
//   );

//   let arrayDataBAk = [];
//   let result_BAK;
//   let arrayDataCPLIRA = [];
//   let result_CPLIRA;
//   let arrayDataFIA = [];
//   let result_FIA;
//   let arrayDataPPLA = [];
//   let result_PPLA;
//   let arrayDataWithout = [];
//   let result_Without;
//   let result;
//   const Studentdata = getfilghtStudent.map((item) => {
//     if (item.programme === "BAK") {
//       arrayDataBAk.push(item);
//       result_BAK = arrayDataBAk.length;
//     } else if (item.programme === "CPL IR(A)") {
//       arrayDataCPLIRA.push(item);
//       result_CPLIRA = arrayDataCPLIRA.length;
//     } else if (item.programme === "FI(A)") {
//       arrayDataFIA.push(item);
//       result_FIA = arrayDataFIA.length;
//     } else if (item.programme === "PPL(A)") {
//       arrayDataPPLA.push(item);
//       result_PPLA = arrayDataPPLA.length;
//     } else if (
//       item.programme !== "PPL(A)" ||
//       item.programme !== "FI(A)" ||
//       item.programme !== "CPL IR(A)" ||
//       item.programme !== "BAK"
//     ) {
//       arrayDataWithout.push(item);
//       result_Without = arrayDataWithout.length;
//     }
//     result =
//       arrayDataBAk.length +
//       arrayDataCPLIRA.length +
//       arrayDataFIA.length +
//       arrayDataPPLA.length +
//       arrayDataWithout.length;
//   });

//   // const doUpdateStudent = (item) => {
//   //   setstuid(item.id);
//   //   setstudentkey(item.key);
//   //   setstudentfirstName(item.user_First_name);
//   //   setstudentlasttName(item.user_Last_name);
//   //   setstudentAddress(item.address);
//   //   setstudentphonenumber(item.phone);
//   //   setstudentemail(item.email);
//   //   setstudentuserreferance(item.user_reference);

//   //   setvisible(true);
//   // };

//   // const studentdata = {
//   //   id: stuid,
//   //   key: studentkey,
//   //   user_First_name: studentfirstName,
//   //   user_Last_name: studentlastName,
//   //   address: studentAddress,
//   //   phone: studentphonenumber,
//   //   email: studentemail,
//   //   user_reference: studentuserreferance,
//   // };

//   // const doUpdateStudentData = () => {
//   //   try {
//   //     edit(studentdata, "FlightStudent", studentkey);
//   //     setstuid("");
//   //     setstudentkey("");
//   //     setstudentfirstName("");
//   //     setstudentlasttName("");
//   //     setstudentAddress("");
//   //     setstudentphonenumber("");
//   //     setstudentemail("");
//   //     setstudentuserreferance("");
//   //     //   setvisible(false);
//   //     window.location = "/Students";
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   const columns = [
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//       render: (text) => <a>{text}</a>,
//       //   sorter: (a, b) => {
//       //     a = a.name || '';
//       //     b = b.name || '';
//       //     return a.toString().localeCompare(b);
//       // }
//     },
//     {
//       title: "Address",
//       dataIndex: "address",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//     },

//     {
//       title: "Email",
//       dataIndex: "email",
//     },

//     {
//       title: "	User Reference",
//       dataIndex: "user_reference",
//     },

//     {
//       title: "	Warnings",
//       dataIndex: "warnings",
//     },

//     {
//       title: "",
//       dataIndex: "other",
//     },

//     {
//       title: "",
//       dataIndex: "edit",
//     },
//   ];

//   const cpliraDataq = arrayDataCPLIRA.map((item) => ({
//     key: item.key,

//     name: (
//       <a href="/users/44615#user_program:73472">
//         {item.user_First_name}-{item.user_Last_name}
//       </a>
//     ),

//     address: item.address,
//     phone: <a href="tel:+9607703319"> {item.phone}</a>,
//     email: <a href="mailto:isha.shareef@aaa-fta.com">{item.email}</a>,
//     user_reference: item.user_reference,
//     warnings: (
//       <i
//         className="far fa-copy notavailable booking-icon"
//         style={{ color: "rgb(222, 13, 13)" }}
//         aria-hidden="true"
//       >
//         {" "}
//       </i>
//     ),
//     edit: (
//       <a
//         href="/EditUser"
//         //  onClick={() => doUpdateStudent(item)}
//       >
//         <span className="fas fa-pencil-alt" aria-hidden="true" />
//       </a>
//     ),
//   }));

//   const BakData = arrayDataBAk.map((item) => ({
//     key: item.key,

//     name: (
//       <a href="/users/44615#user_program:73472">
//         {item.user_First_name}-{item.user_Last_name}
//       </a>
//     ),

//     address: item.address,
//     phone: <a href="tel:+9607703319"> {item.phone}</a>,
//     email: <a href="mailto:isha.shareef@aaa-fta.com">{item.email}</a>,
//     user_reference: item.user_reference,
//     warnings: (
//       <i
//         className="far fa-copy notavailable booking-icon"
//         style={{ color: "rgb(222, 13, 13)" }}
//         aria-hidden="true"
//       >
//         {" "}
//       </i>
//     ),
//     edit: (
//       <a
//         href="/EditUser"
//         //onClick={() => doUpdateStudent(item)}
//       >
//         <span className="fas fa-pencil-alt" aria-hidden="true" />
//       </a>
//     ),
//   }));
//   const WithoutProgramme = arrayDataWithout.map((item) => ({
//     key: item.key,

//     name: (
//       <a href="/users/44615#user_program:73472">
//         {item.user_First_name}-{item.user_Last_name}
//       </a>
//     ),

//     address: item.address,
//     phone: <a href="tel:+9607703319"> {item.phone}</a>,
//     email: <a href="mailto:isha.shareef@aaa-fta.com">{item.email}</a>,
//     user_reference: item.user_reference,
//     warnings: (
//       <i
//         className="far fa-copy notavailable booking-icon"
//         style={{ color: "rgb(222, 13, 13)" }}
//         aria-hidden="true"
//       >
//         {" "}
//       </i>
//     ),
//     edit: (
//       <a href="/EditUser">
//         <span className="fas fa-pencil-alt" aria-hidden="true" />
//       </a>
//     ),
//   }));

//   const pplaData = arrayDataPPLA.map((item) => ({
//     key: item.key,

//     name: (
//       <a href="/users/44615#user_program:73472">
//         {item.user_First_name}-{item.user_Last_name}
//       </a>
//     ),

//     address: item.address,
//     phone: <a href="tel:+9607703319"> {item.phone}</a>,
//     email: <a href="mailto:isha.shareef@aaa-fta.com">{item.email}</a>,
//     user_reference: item.user_reference,
//     warnings: (
//       <i
//         className="far fa-copy notavailable booking-icon"
//         style={{ color: "rgb(222, 13, 13)" }}
//         aria-hidden="true"
//       >
//         {" "}
//       </i>
//     ),
//     edit: (
//       <a href="/EditUser">
//         <span className="fas fa-pencil-alt" aria-hidden="true" />
//       </a>
//     ),
//   }));
//   const fiaData = arrayDataFIA.map((item) => ({
//     key: item.key,

//     name: (
//       <a href="/users/44615#user_program:73472">
//         {item.user_First_name}-{item.user_Last_name}
//       </a>
//     ),

//     address: item.address,
//     phone: <a href="tel:+9607703319"> {item.phone}</a>,
//     email: <a href="mailto:isha.shareef@aaa-fta.com">{item.email}</a>,
//     user_reference: item.user_reference,
//     warnings: (
//       <i
//         className="far fa-copy notavailable booking-icon"
//         style={{ color: "rgb(222, 13, 13)" }}
//         aria-hidden="true"
//       >
//         {" "}
//       </i>
//     ),

//     edit: (
//       <a href="/EditUser">
//         <span className="fas fa-pencil-alt" aria-hidden="true" />
//       </a>
//     ),
//   }));

//   const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//       setSelectedrows(selectedRows);
//       console.log(
//         `selectedRowKeys: ${selectedRowKeys}`,
//         "selectedRows: ",
//         selectedRows
//       );
//     },
//     getCheckboxProps: (record) => ({
//       disabled: record.name === "Disabled User",
//       //  Column configuration not to be checked

//       name: record.name,
//     }),
//   };

//   return (
//     <div>
//       <TitleBar />
//       {/* <Modal
//         title="Update Instractor Data"
//         visible={visible}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={null}
//         style={{
//           width: "940px",
//           marginTop: 30,
//           marginLeft: "auto",
//           marginRight: "auto",
//         }}
//       > */}
//       {/* <Card>
//           <div style={{ display: "flex", justifyContent: "space-around" }}>
//             <label>First Name</label>
//             <input
//               type="text"
//               value={studentfirstName}
//               onChange={(e) => {
//                 setstudentfirstName(e.target.value);
//               }}
//             />
//           </div>
//           <br />
//           <div style={{ display: "flex", justifyContent: "space-around" }}>
//             <label>Last Name</label>
//             <input
//               type="text"
//               value={studentlastName}
//               onChange={(e) => {
//                 setstudentlasttName(e.target.value);
//               }}
//             />
//           </div>
//           <br />
//           <div style={{ display: "flex", justifyContent: "space-around" }}>
//             <label>Address</label>
//             <input
//               type="text"
//               value={studentAddress}
//               onChange={(e) => {
//                 setstudentAddress(e.target.value);
//               }}
//             />
//           </div>
//           <br />
//           <div style={{ display: "flex", justifyContent: "space-around" }}>
//             <label>Pho.Number </label>
//             <input
//               type="text"
//               value={studentphonenumber}
//               onChange={(e) => {
//                 setstudentphonenumber(e.target.value);
//               }}
//             />
//           </div>
//           <br />
//           <div style={{ display: "flex", justifyContent: "space-around" }}>
//             <label> Email</label>
//             <input
//               type="text"
//               value={studentemail}
//               onChange={(e) => {
//                 setstudentemail(e.target.value);
//               }}
//             />
//           </div>
//           <br />
//           <div style={{ display: "flex", justifyContent: "space-around" }}>
//             <label>UserRefrence</label>
//             <input
//               type="text"
//               value={studentuserreferance}
//               onChange={(e) => {
//                 setstudentuserreferance(e.target.value);
//               }}
//             />
//           </div>
//           <br />
//           <div style={{ display: "flex", justifyContent: "right" }}>
//             <Button
//               type="primary"
//               htmlType="submit"
//               onClick={doUpdateStudentData}
//             >
//               Update Students
//             </Button>
//           </div>
//         </Card> */}
//       {/* </Modal> */}
//       <div className="header-head">
//         <div className="left"></div>
//         <div className="right"></div>
//         <div className="center">
//           <div className="center-contant">
//             <div
//               style={{
//                 marginLeft: "auto",
//                 marginRight: "auto",
//                 width: "1350px",
//                 alignItems: "center",
//               }}
//             >
//               <Space>
//                 <Button
//                   href="/CreateStudent"
//                   icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
//                 >
//                   Create students
//                 </Button>

//                 <Dropdown overlay={menu}>
//                   <Button
//                     className="ant-dropdown-link"
//                     text={<a href="#" />}
//                     icon={<i class="fas fa-graduation-cap"></i>}
//                   >
//                     Active students
//                     <DownOutlined />
//                   </Button>
//                 </Dropdown>

//                 <Button
//                   icon={
//                     <a href="/StudentsGrid">
//                       <TableOutlined />
//                     </a>
//                   }
//                 />
//                 <Button
//                   icon={
//                     <a href="/Students">
//                       <BarsOutlined />
//                     </a>
//                   }
//                 />
//                 <Button
//                   icon={
//                     <a href="/Search">
//                       <SearchOutlined />
//                     </a>
//                   }
//                 />

//                 {selectedrows.length > 0 ? (
//                   <Dropdown overlay={menu} placement="bottomLeft" arrow>
//                     <Button>bottomLeft</Button>
//                   </Dropdown>
//                 ) : null}
//               </Space>
//               <Space style={{ paddingLeft: "250px" }}>
//                 <Dropdown overlay={pdf}>
//                   <Button
//                     icon={
//                       <a>
//                         <DownloadOutlined style={{ color: "#000000" }} />
//                       </a>
//                     }
//                     className="ant-dropdown-link"
//                   >
//                     {" "}
//                     Export as <DownOutlined />{" "}
//                   </Button>
//                 </Dropdown>

//                 <span
//                   style={{
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Total: {result}
//                 </span>
//               </Space>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         className="table2"
//         style={{
//           marginLeft: "auto",
//           marginRight: "auto",
//           width: "920px",
//           alignItems: "center",
//           display: "block",
//         }}
//       >
//         <br></br>
//         <Row>
//           {" "}
//           <h2>
//             BAK{" "}
//             <span
//               style={{
//                 fontSize: "15px",
//                 marginLeft: "830px",
//                 alignItems: "flex-end",
//               }}
//             >
//               {" "}
//               {result_BAK}
//             </span>
//           </h2>
//         </Row>
//         <Divider style={{ marginTop: "-5px" }} />

//         <div>
//           <Table
//             rowSelection={{
//               type: selectionType,
//               ...rowSelection,
//             }}
//             columns={columns}
//             //  bordered

//             description={result_Without}
//             pagination={false}
//             dataSource={BakData}
//             size="small"
//           />
//         </div>
//       </div>
//       <div
//         className="table1"
//         style={{
//           marginLeft: "auto",
//           marginRight: "auto",
//           width: "900px",
//           alignItems: "center",
//           display: "block",
//         }}
//       >
//         <Row>
//           <h2>
//             CPL IR(A){" "}
//             <span
//               style={{
//                 fontSize: "15px",
//                 marginLeft: "780px",
//                 alignItems: "flex-end",
//               }}
//             >
//               {" "}
//               {result_CPLIRA}
//             </span>{" "}
//           </h2>
//         </Row>
//         <Divider style={{ marginTop: "-5px" }} />

//         <div>
//           <Table
//             rowSelection={{
//               type: selectionType,
//               ...rowSelection,
//             }}
//             columns={columns}
//             bordered
//             // title={() =>  'CPL IR(A) '

//             //   }

//             pagination={false}
//             dataSource={cpliraDataq}
//             size="small"
//           />
//         </div>
//       </div>
//       <div
//         className="table3"
//         style={{
//           marginLeft: "auto",
//           marginRight: "auto",
//           width: "900px",
//           alignItems: "center",
//           display: "block",
//         }}
//       >
//         <Row>
//           <h2>
//             FI(A)
//             <span
//               style={{
//                 fontSize: "15px",
//                 marginLeft: "830px",
//                 alignItems: "flex-end",
//               }}
//             >
//               {" "}
//               {result_FIA}
//             </span>{" "}
//           </h2>
//         </Row>
//         <Divider style={{ marginTop: "-5px" }} />

//         <div>
//           <Table
//             rowSelection={{
//               type: selectionType,
//               ...rowSelection,
//             }}
//             columns={columns}
//             bordered
//             // title={() =>  'CPL IR(A) '

//             //   }

//             pagination={false}
//             dataSource={fiaData}
//             size="small"
//           />
//         </div>
//       </div>
//       <div
//         className="table4"
//         style={{
//           marginLeft: "auto",
//           marginRight: "auto",
//           width: "900px",
//           alignItems: "center",
//           display: "block",
//         }}
//       >
//         <Row>
//           <h2>
//             PPL(A)
//             <span
//               style={{
//                 fontSize: "15px",
//                 marginLeft: "830px",
//                 alignItems: "flex-end",
//               }}
//             >
//               {" "}
//               {result_PPLA}
//             </span>{" "}
//           </h2>
//         </Row>
//         <Divider style={{ marginTop: "-5px" }} />

//         <div>
//           <Table
//             rowSelection={{
//               type: selectionType,
//               ...rowSelection,
//             }}
//             columns={columns}
//             bordered
//             // title={() =>  'CPL IR(A) '

//             //   }

//             pagination={false}
//             dataSource={pplaData}
//             size="small"
//           />
//         </div>

//         <div
//           className="table5"
//           style={{
//             marginLeft: "auto",
//             marginRight: "auto",
//             width: "900px",
//             alignItems: "center",
//             display: "block",
//           }}
//         >
//           <Row>
//             {" "}
//             <h2>
//               Without Programme{" "}
//               <span
//                 style={{
//                   fontSize: "15px",
//                   marginLeft: "650px",
//                   alignItems: "flex-end",
//                 }}
//               >
//                 {" "}
//                 {result_Without}
//               </span>{" "}
//             </h2>{" "}
//           </Row>
//           <Divider style={{ marginTop: "-5px" }} />

//           <div>
//             <Table
//               rowSelection={{
//                 type: selectionType,
//                 ...rowSelection,
//               }}
//               columns={columns}
//               bordered
//               // title={() =>  'CPL IR(A) '

//               //   }

//               pagination={false}
//               dataSource={WithoutProgramme}
//               size="small"
//             />
//           </div>
//         </div>
//       </div>
//       //{" "}
//     </div>
//   );
// }
