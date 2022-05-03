import React, { useEffect, useState } from "react";
import "./Student.css";
import TitleBar from "../../components/TitleBar";
import { Button, Dropdown, Table, Menu, Modal, Card } from "antd";
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
} from "@ant-design/icons";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
import firebase from "../../Configue/Configue";
import { Item } from "semantic-ui-react";
import Axios from "axios";
import ButtonOne from "../../buttonComponents/ButtonOneComponent/ButtonOne";
import ButtonTwo from "../../buttonComponents/ButtontwoComponent/ButtonTwo";
import { edit, getAll } from "../../utils/APIUtils";

export default function Students() {
  const [dataStudent, setdataStudent] = useState([]);
  const [stuData, setstuData] = useState([]);
  const [stuid, setstuid] = useState();

  const [studentfirstName, setstudentfirstName] = useState();
  const [studentlastName, setstudentlasttName] = useState();
  const [studentAddress, setstudentAddress] = useState();
  const [studentphonenumber, setstudentphonenumber] = useState();
  const [studentemail, setstudentemail] = useState();
  const [studentuserreferance, setstudentuserreferance] = useState();
  const [studentkey, setstudentkey] = useState();

  const [getfilghtStudent, setgetflightstudent] = useState([]);

  const [visible, setvisible] = useState(false);
  const showModal = () => {
    setvisible(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setvisible(false);
  };

  const handleCancel = (e) => {
    console.log(e);
    setvisible(false);
  };

  useEffect(() => {
    getAll("FlightStudent")
      .then((result) => setgetflightstudent(result))
      .catch((error) => console.log(error));

    // const getData = async () => {
    //   try {
    //     const res = await Axios.get(
    //       "http://localhost:5000/api/studentDetailes"
    //     );
    //     res.data.map((item) => {
    //       console.log(item._fieldsProto);
    //     });
    //     setstuData(res.data);
    //     console.log(stuData);
    //     if (res.status === 201) {
    //       setstuData(res.data);
    //       console.log(res.data);
    //       console.log(stuData);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // firebase
    //   .database()
    //   .ref("StudentsTable")
    //   .on(
    //     "value",
    //     (snapshot) => {
    //       console.log(snapshot.toJSON());
    //       setdataStudent(Object.values(snapshot.toJSON()));
    //     },
    //     (e) => {
    //       if (e) {
    //         console.log(e);
    //       } else {
    //         console.log("success");
    //       }
    //     }
    //   );
    // getData();
  }, []);

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

  let arrayDataBAk = [];
  let arrayDataCPLIRA = [];
  let arrayDataFIA = [];
  let arrayDataPPLA = [];
  let arrayDataWithout = [];
  const Studentdata = getfilghtStudent.map((item) => {
    if (item.programme === "BAK") {
      arrayDataBAk.push(item);
    } else if (item.programme === "CPL IR(A)") {
      arrayDataCPLIRA.push(item);
    } else if (item.programme === "FI(A)") {
      arrayDataFIA.push(item);
    } else if (item.programme === "PPL(A)") {
      arrayDataPPLA.push(item);
    } else if (
      item.programme !== "PPL(A)" ||
      item.programme !== "FI(A)" ||
      item.programme !== "CPL IR(A)" ||
      item.programme !== "BAK"
    ) {
      arrayDataWithout.push(item);
    }

    // if (item._fieldsProto.programme.stringValue === "BAK") {
    //   arrayDataBAk.push(item);
    // } else if (item._fieldsProto.programme.stringValue === "CPL IR(A)") {
    //   arrayDataCPLIRA.push(item);
    // } else if (item._fieldsProto.programme.stringValue === "FI(A)") {
    //   arrayDataFIA.push(item);
    // } else if (item._fieldsProto.programme.stringValue === "PPL(A)") {
    //   arrayDataPPLA.push(item);
    // } else if (
    //   item._fieldsProto.programme.stringValue !== "PPL(A)" ||
    //   item._fieldsProto.programme.stringValue !== "FI(A)" ||
    //   item._fieldsProto.programme.stringValue !== "CPL IR(A)" ||
    //   item._fieldsProto.programme.stringValue !== "BAK"
    // ) {
    //   arrayDataWithout.push(item);
    // }
    // else if(item.programme===){}
    // else if(item.programme===){}
    // else if(item.programme===){}
    // else if(item.programme===){}
  });

  const doUpdateStudent = (item) => {
    setstuid(item.id);
    setstudentkey(item.key);
    setstudentfirstName(item.firstname);
    setstudentlasttName(item.lastname);
    setstudentAddress(item.address);
    setstudentphonenumber(item.phoneNumber);
    setstudentemail(item.email);
    setstudentuserreferance(item.userReferance);

    setvisible(true);
  };

  const studentdata = {
    id: stuid,
    key: studentkey,
    firstname: studentfirstName,
    lastname: studentlastName,
    address: studentAddress,
    phoneNumber: studentphonenumber,
    email: studentemail,
    userReferance: studentuserreferance,
  };

  const doUpdateStudentData = () => {
    try {
      edit(studentdata, "FlightStudent", studentkey);
      setstuid("");
      setstudentkey("");
      setstudentfirstName("");
      setstudentlasttName("");
      setstudentAddress("");
      setstudentphonenumber("");
      setstudentemail("");
      setstudentuserreferance("");
      setvisible(false);
      window.location = "/Students";
    } catch (error) {
      console.log(error);
    }
    // const res = Axios.put(
    //   "http://localhost:5000/api/updateStudentdata",
    //   studentdata
    // );
    // window.location = "/Students";
    // setvisible(false);
  };

  const BakData = arrayDataBAk.map((item) => (
    <tr key={item.id}>
      <td>
        <a href="/users/44615#user_program:73472">
          {item.firstname}-{item.lastname}
        </a>
      </td>
      <td>{item.address}</td>
      <td>
        <a href="tel:+9607703319"> {item.phoneNumber}</a>
      </td>
      <td>
        <a href="mailto:isha.shareef@aaa-fta.com">{item.email}</a>
      </td>
      <td>{item.userReferance}</td>
      <td className="certificate_status">
        <a
          data-user-id={44615}
          className="certificate-icon-status"
          href="/users/44615#certificates"
        >
          <i
            className="far fa-copy notavailable booking-icon"
            style={{ color: "rgb(222, 13, 13)" }}
            aria-hidden="true"
          >
            {" "}
          </i>
        </a>
      </td>
      <td>
        <a onClick={() => doUpdateStudent(item)}>
          <span className="fas fa-pencil-alt" aria-hidden="true" />
        </a>
      </td>
    </tr>
  ));

  // const BakData = arrayDataBAk.map((item) => (
  //   <tr key={item._fieldsProto.id.stringValue}>
  //     <td>
  //       <a href="/users/44615#user_program:73472">
  //         {item._fieldsProto.firstname.stringValue}-
  //         {item._fieldsProto.lastname.stringValue}
  //       </a>
  //     </td>
  //     <td>{item._fieldsProto.address.stringValue}</td>
  //     <td>
  //       <a href="tel:+9607703319">
  //         {" "}
  //         {item._fieldsProto.phoneNumber.stringValue}
  //       </a>
  //     </td>
  //     <td>
  //       <a href="mailto:isha.shareef@aaa-fta.com">
  //         {item._fieldsProto.email.stringValue}
  //       </a>
  //     </td>
  //     <td>{item._fieldsProto.userReferance.stringValue}</td>
  //     <td className="certificate_status">
  //       <a
  //         data-user-id={44615}
  //         className="certificate-icon-status"
  //         href="/users/44615#certificates"
  //       >
  //         <i
  //           className="far fa-copy notavailable booking-icon"
  //           style={{ color: "rgb(222, 13, 13)" }}
  //           aria-hidden="true"
  //         >
  //           {" "}
  //         </i>
  //       </a>
  //     </td>
  //     <td>
  //       <a onClick={() => doUpdateStudent(item._fieldsProto)}>
  //         <span className="fas fa-pencil-alt" aria-hidden="true" />
  //       </a>
  //     </td>
  //   </tr>
  // ));

  const WithoutProgramme = arrayDataWithout.map((item) => (
    <tr key={item.id}>
      <td>
        <a href="/users/44615#user_program:73472">
          {item.firstname}-{item.lastname}
        </a>
      </td>
      <td>{item.address}</td>
      <td>
        <a href="tel:+9607703319"> {item.phoneNumber}</a>
      </td>
      <td>
        <a href="mailto:isha.shareef@aaa-fta.com">{item.email}</a>
      </td>
      <td>{item.userReferance}</td>
      <td className="certificate_status">
        <a
          data-user-id={44615}
          className="certificate-icon-status"
          href="/users/44615#certificates"
        >
          <i
            className="far fa-copy notavailable booking-icon"
            style={{ color: "rgb(222, 13, 13)" }}
            aria-hidden="true"
          >
            {" "}
          </i>
        </a>
      </td>
      <td>
        <a onClick={() => doUpdateStudent(item)}>
          <span className="fas fa-pencil-alt" aria-hidden="true" />
        </a>
      </td>
    </tr>
  ));

  const pplaData = arrayDataPPLA.map((item) => (
    <tr key={item.id}>
      <td>
        <a href="/users/44615#user_program:73472">
          {item.firstname}-{item.lastname}
        </a>
      </td>
      <td>{item.address}</td>
      <td>
        <a href="tel:+9607703319"> {item.phoneNumber}</a>
      </td>
      <td>
        <a href="mailto:isha.shareef@aaa-fta.com">{item.email}</a>
      </td>
      <td>{item.userReferance}</td>
      <td className="certificate_status">
        <a
          data-user-id={44615}
          className="certificate-icon-status"
          href="/users/44615#certificates"
        >
          <i
            className="far fa-copy notavailable booking-icon"
            style={{ color: "rgb(222, 13, 13)" }}
            aria-hidden="true"
          >
            {" "}
          </i>
        </a>
      </td>
      <td>
        <a onClick={() => doUpdateStudent(item)}>
          <span className="fas fa-pencil-alt" aria-hidden="true" />
        </a>
      </td>
    </tr>
  ));

  const fiaData = arrayDataFIA.map((item) => (
    <tr key={item.id}>
      <td>
        <a href="/users/44615#user_program:73472">
          {item.firstname}-{item.lastname}
        </a>
      </td>
      <td>{item.address}</td>
      <td>
        <a href="tel:+9607703319"> {item.phoneNumber}</a>
      </td>
      <td>
        <a href="mailto:isha.shareef@aaa-fta.com">{item.email}</a>
      </td>
      <td>{item.userReferance}</td>
      <td className="certificate_status">
        <a
          data-user-id={44615}
          className="certificate-icon-status"
          href="/users/44615#certificates"
        >
          <i
            className="far fa-copy notavailable booking-icon"
            style={{ color: "rgb(222, 13, 13)" }}
            aria-hidden="true"
          >
            {" "}
          </i>
        </a>
      </td>
      <td>
        <a onClick={() => doUpdateStudent(item)}>
          <span className="fas fa-pencil-alt" aria-hidden="true" />
        </a>
      </td>
    </tr>
  ));

  const cpliraData = arrayDataCPLIRA.map((item) => (
    <tr key={item.id}>
      <td>
        <a href="/users/44615#user_program:73472">
          {item.firstname}-{item.lastname}
        </a>
      </td>
      <td>{item.address}</td>
      <td>
        <a href="tel:+9607703319"> {item.phoneNumber}</a>
      </td>
      <td>
        <a href="mailto:isha.shareef@aaa-fta.com">{item.email}</a>
      </td>
      <td>{item.userReferance}</td>
      <td className="certificate_status">
        <a
          data-user-id={44615}
          className="certificate-icon-status"
          href="/users/44615#certificates"
        >
          <i
            className="far fa-copy notavailable booking-icon"
            style={{ color: "rgb(222, 13, 13)" }}
            aria-hidden="true"
          >
            {" "}
          </i>
        </a>
      </td>
      <td>
        <a onClick={() => doUpdateStudent(item)}>
          <span className="fas fa-pencil-alt" aria-hidden="true" />
        </a>
      </td>
    </tr>
  ));

  return (
    <div>
      <TitleBar />

      <Modal
        title="Update Instractor Data"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Card>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label>First Name</label>
            <input
              type="text"
              value={studentfirstName}
              onChange={(e) => {
                setstudentfirstName(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label>Last Name</label>
            <input
              type="text"
              value={studentlastName}
              onChange={(e) => {
                setstudentlasttName(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label>Address</label>
            <input
              type="text"
              value={studentAddress}
              onChange={(e) => {
                setstudentAddress(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label>Pho.Number </label>
            <input
              type="text"
              value={studentphonenumber}
              onChange={(e) => {
                setstudentphonenumber(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label> Email</label>
            <input
              type="text"
              value={studentemail}
              onChange={(e) => {
                setstudentemail(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label>UserRefrence</label>
            <input
              type="text"
              value={studentuserreferance}
              onChange={(e) => {
                setstudentuserreferance(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button
              type="primary"
              htmlType="submit"
              onClick={doUpdateStudentData}
            >
              Update Student
            </Button>
          </div>
        </Card>
      </Modal>

      <div className="header-head">
        <div className="left"></div>
        <div className="right"></div>
        <div className="center">
          <div className="center-contant">
            {/* <Button style={{ borderStyle: "inset" }} icon={<PlusOutlined />}>
              <a href="/CreateStudent"> Create students</a>
            </Button> */}
            <ButtonOne
              text={<a href="/CreateStudent">Create students</a>}
              icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
            ></ButtonOne>
            <ButtonOne
              text={<a href="">Standby students</a>}
              icon={<i class="fas fa-graduation-cap"></i>}
            ></ButtonOne>
            {/* <Button
              style={{ borderStyle: "inset" }}
              icon={<i class="fas fa-graduation-cap"></i>}
            >
              Standby students
            </Button> */}
            <ButtonOne
              text={<a href="">Completed students</a>}
              icon={<i class="fas fa-graduation-cap"></i>}
            ></ButtonOne>
            {/* <Button
              style={{ borderStyle: "inset" }}
              icon={<i class="fas fa-graduation-cap"></i>}
            >
              Completed students
            </Button> */}
            {/* <Button
              style={{ borderStyle: "inset" }}
              type=""
              icon={<TableOutlined />}
            /> */}
            <ButtonTwo
              icon={
                <a href="">
                  <TableOutlined />
                </a>
              }
            />
            <ButtonTwo
              icon={
                <a href="">
                  <BarsOutlined />
                </a>
              }
            />
            <ButtonTwo
              icon={
                <a href="">
                  <SearchOutlined />
                </a>
              }
            />
            {/* <Button
              style={{ borderStyle: "inset" }}
              type=""
              icon={<BarsOutlined />}
            /> */}
            {/* <Button
              style={{ borderStyle: "inset" }}
              type=""
              icon={<SearchOutlined />}
            /> */}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              className="Export-btn"
              style={{ borderRadius: 3, backgroundColor: "lightgray" }}
              type=""
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

            <h3>Total</h3>
          </div>
        </div>

        <div className="table0">
          <h2>BAK</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>User reference</th>
                <th>Certificates</th>
                <th />
              </tr>
            </thead>
            <tbody />
            <tbody>
              {BakData}
              {/* <tr>
                <td>
                  <a href="/users/44615#user_program:73472">
                    Isha - Mariyam Isha Shareef
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607703319">+9607703319</a>
                </td>
                <td>
                  <a href="mailto:isha.shareef@aaa-fta.com">
                    isha.shareef@aaa-fta.com
                  </a>
                </td>
                <td>618</td>
                <td className="certificate_status">
                  <a
                    data-user-id={44615}
                    className="certificate-icon-status"
                    href="/users/44615#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/44615/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr> */}
              <tr>
                <td>
                  <a href="/users/44614#user_program:73468">
                    Nasru - Ibrahim Nasru Ali
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609804342">+9609804342</a>
                </td>
                <td>
                  <a href="mailto:ibrahim.nasru@aaa-fta.com">
                    ibrahim.nasru@aaa-fta.com
                  </a>
                </td>
                <td> 661</td>
                <td className="certificate_status">
                  <a
                    data-user-id={44614}
                    className="certificate-icon-status"
                    href="/users/44614#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/44614/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="table1">
          <p></p>
          <br />
          <br />
          <h2>CPL IR(A)</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>User reference</th>
                <th>Certificates</th>
                <th />
              </tr>
            </thead>
            <tbody />
            <tbody>
              {cpliraData}
              <tr>
                <td>
                  <a href="/users/26710#user_program:44541">
                    A.Haleem - Ahmed Haleem
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607589551">+9607589551</a>
                </td>
                <td>
                  <a href="mailto:Ahmed.Haleem@aaa-fta.com">
                    Ahmed.Haleem@aaa-fta.com
                  </a>
                </td>
                <td>603</td>
                <td className="certificate_status">
                  <a
                    data-user-id={26710}
                    className="certificate-icon-status"
                    href="/users/26710#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/26710/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <a href="/users/16930#user_program:23665">
                    A.Haris - Abdulla Haris
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9993855">9993855</a>
                </td>
                <td>
                  <a href="mailto:abdulla.haris@aaa-fta.com">
                    abdulla.haris@aaa-fta.com
                  </a>
                </td>
                <td>419</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16930}
                    className="certificate-icon-status"
                    href="/users/16930#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16930/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/22076#user_program:34594">
                    Ahmeem - Ahmeem Ahmed
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:​+9609673110">​+9609673110</a>
                </td>
                <td>
                  <a href="mailto:ahmeem.ahmed@aaa-fta.com">
                    ahmeem.ahmed@aaa-fta.com
                  </a>
                </td>
                <td>515</td>
                <td className="certificate_status">
                  <a
                    data-user-id={22076}
                    className="certificate-icon-status"
                    href="/users/22076#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/22076/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/23714#user_program:37889">
                    Ahula - Ahula Shareef
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609871978">+9609871978</a>
                </td>
                <td>
                  <a href="mailto:ahula.shareef@aaa-fta.com">
                    ahula.shareef@aaa-fta.com
                  </a>
                </td>
                <td>579</td>
                <td className="certificate_status">
                  <a
                    data-user-id={23714}
                    className="certificate-icon-status"
                    href="/users/23714#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/23714/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/17928#user_program:27627">
                    Aiman - Aiman Saaim
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7470238">7470238</a>
                </td>
                <td>
                  <a href="mailto:aiman.saaim@aaa-fta.com">
                    aiman.saaim@aaa-fta.com
                  </a>
                </td>
                <td>386</td>
                <td className="certificate_status">
                  <a
                    data-user-id={17928}
                    className="certificate-icon-status"
                    href="/users/17928#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/17928/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16940#user_program:23675">
                    AJMAL - Ibrahim Ajmal Fareed
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9997972">9997972</a>
                </td>
                <td>
                  <a href="mailto:ajmal.fareed@aaa-fta.com">
                    ajmal.fareed@aaa-fta.com
                  </a>
                </td>
                <td>421</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16940}
                    className="certificate-icon-status"
                    href="/users/16940#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(13, 152, 222)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16940/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16884#user_program:23619">
                    ALI AMEER - Ali Ameer Mohamed
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7964304">7964304</a>
                </td>
                <td>
                  <a href="mailto:ali.ameer.mohamed@aaa-fta.com">
                    ali.ameer.mohamed@aaa-fta.com
                  </a>
                </td>
                <td>274</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16884}
                    className="certificate-icon-status"
                    href="/users/16884#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(13, 152, 222)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16884/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/19975#user_program:31415">
                    Allam - Mohamed Allam
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607710728">+9607710728</a>
                </td>
                <td>
                  <a href="mailto:mohamed.allam@aaa-fta.com">
                    mohamed.allam@aaa-fta.com
                  </a>
                </td>
                <td>483</td>
                <td className="certificate_status">
                  <a
                    data-user-id={19975}
                    className="certificate-icon-status"
                    href="/users/19975#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/19975/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16916#user_program:23651">
                    ammaru - Ammaaru Ahmed Ibrahim
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7431318">7431318</a>
                </td>
                <td>
                  <a href="mailto:ammaaru.ibrahim@aaa-fta.com">
                    ammaaru.ibrahim@aaa-fta.com
                  </a>
                </td>
                <td>337</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16916}
                    className="certificate-icon-status"
                    href="/users/16916#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16916/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16875#user_program:23610">
                    ANAS - Anas Ibrahim
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9893030">9893030</a>
                </td>
                <td>
                  <a href="mailto:anas.ibrahim@aaa-fta.com">
                    anas.ibrahim@aaa-fta.com
                  </a>
                </td>
                <td>263</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16875}
                    className="certificate-icon-status"
                    href="/users/16875#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16875/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/23713#user_program:37891">
                    Anfaal - Anfaal Naeem
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607560777">+9607560777</a>
                </td>
                <td>
                  <a href="mailto:anfaal.naeem@aaa-fta.com">
                    anfaal.naeem@aaa-fta.com
                  </a>
                </td>
                <td>578</td>
                <td className="certificate_status">
                  <a
                    data-user-id={23713}
                    className="certificate-icon-status"
                    href="/users/23713#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/23713/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16903#user_program:23638">ANIF - Ali Anif</a>
                </td>
                <td />
                <td>
                  <a href="tel:7490696">7490696</a>
                </td>
                <td>
                  <a href="mailto:ali.anif@aaa-fta.com">ali.anif@aaa-fta.com</a>
                </td>
                <td>354</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16903}
                    className="certificate-icon-status"
                    href="/users/16903#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16903/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16927#user_program:23662">
                    ATHEEF - Mohamed Atheef
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9975361">9975361</a>
                </td>
                <td>
                  <a href="mailto:mohamed.atheef@aaa-fta.com">
                    mohamed.atheef@aaa-fta.com
                  </a>
                </td>
                <td>429</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16927}
                    className="certificate-icon-status"
                    href="/users/16927#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16927/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/31051#user_program:53393">
                    Ausam - Hassan Ausam Ali
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607342489">+9607342489</a>
                </td>
                <td>
                  <a href="mailto:ausam.ali@aaa-fta.com">
                    ausam.ali@aaa-fta.com
                  </a>
                </td>
                <td>617</td>
                <td className="certificate_status">
                  <a
                    data-user-id={31051}
                    className="certificate-icon-status"
                    href="/users/31051#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 187, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/31051/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16958#user_program:23693">
                    {" "}
                    Dhaisam Sobah - Mohamed Dhaisam Sobah
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7861986">7861986</a>
                </td>
                <td>
                  <a href="mailto:mohamed.dhaisam@aaa-fta.com">
                    mohamed.dhaisam@aaa-fta.com
                  </a>
                </td>
                <td>433</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16958}
                    className="certificate-icon-status"
                    href="/users/16958#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 187, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16958/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/22079#user_program:34596">
                    Eman - Eman Mohamed
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:​+9607787048">​+9607787048</a>
                </td>
                <td>
                  <a href="mailto:eman.mohamed@aaa-fta.com">
                    eman.mohamed@aaa-fta.com
                  </a>
                </td>
                <td>518</td>
                <td className="certificate_status">
                  <a
                    data-user-id={22079}
                    className="certificate-icon-status"
                    href="/users/22079#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/22079/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16942#user_program:23677">
                    EYMAAN - Eymaan Ibrahim
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9895995">9895995</a>
                </td>
                <td>
                  <a href="mailto:eymaan.ibrahim@aaa-fta.com">
                    eymaan.ibrahim@aaa-fta.com
                  </a>
                </td>
                <td>434</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16942}
                    className="certificate-icon-status"
                    href="/users/16942#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16942/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/23702#user_program:37892">
                    Failam - Mohamed Failam Shafeeu
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609904361">+9609904361</a>
                </td>
                <td>
                  <a href="mailto:failam.shafeeu@aaa-fta.com">
                    failam.shafeeu@aaa-fta.com
                  </a>
                </td>
                <td>567</td>
                <td className="certificate_status">
                  <a
                    data-user-id={23702}
                    className="certificate-icon-status"
                    href="/users/23702#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/23702/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/28399#user_program:44673">
                    Ferdous - Shah Ferdous Momand
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609986314">+9609986314</a>
                </td>
                <td>
                  <a href="mailto:shah.ferdous@aaa-fta.com">
                    shah.ferdous@aaa-fta.com
                  </a>
                </td>
                <td>609</td>
                <td className="certificate_status">
                  <a
                    data-user-id={28399}
                    className="certificate-icon-status"
                    href="/users/28399#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/28399/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/26704#user_program:44550">
                    Haidary - Abadullah Haidary
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7354882">7354882</a>
                </td>
                <td>
                  <a href="mailto:Abadullah.Haidary@aaa-fta.com">
                    Abadullah.Haidary@aaa-fta.com
                  </a>
                </td>
                <td>595</td>
                <td className="certificate_status">
                  <a
                    data-user-id={26704}
                    className="certificate-icon-status"
                    href="/users/26704#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/26704/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/23711#user_program:37893">
                    Hamdhan - Hamdhan Abdul Azeez
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607998384">+9607998384</a>
                </td>
                <td>
                  <a href="mailto:hamdhan.azeez@aaa-fta.com">
                    hamdhan.azeez@aaa-fta.com
                  </a>
                </td>
                <td>576</td>
                <td className="certificate_status">
                  <a
                    data-user-id={23711}
                    className="certificate-icon-status"
                    href="/users/23711#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/23711/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/35192#user_program:60001">
                    Hamdhoon - Hamdhoon Mahumoodh
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607906690">+9607906690</a>
                </td>
                <td>
                  <a href="mailto:hamdhoon.mahumoodh@aaa-fta.com">
                    hamdhoon.mahumoodh@aaa-fta.com
                  </a>
                </td>
                <td>636</td>
                <td className="certificate_status">
                  <a
                    data-user-id={35192}
                    className="certificate-icon-status"
                    href="/users/35192#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/35192/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16793#user_program:24108">
                    HEM - Hasitha Mudalige
                  </a>
                </td>
                <td>8/1 Rodney Street, Colombo 8</td>
                <td>
                  <a href="tel:9792040">9792040</a>
                </td>
                <td>
                  <a href="mailto:hasitha@aaa-fta.com">hasitha@aaa-fta.com</a>
                </td>
                <td>401</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16793}
                    className="certificate-icon-status"
                    href="/users/16793#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(180, 222, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16793/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/23701#user_program:37894">
                    Humaid - Yaish Mohamed Humaid
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607847440">+9607847440</a>
                </td>
                <td>
                  <a href="mailto:yaish.humaid@aaa-fta.com">
                    yaish.humaid@aaa-fta.com
                  </a>
                </td>
                <td>566</td>
                <td className="certificate_status">
                  <a
                    data-user-id={23701}
                    className="certificate-icon-status"
                    href="/users/23701#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/23701/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16919#user_program:23654">
                    Hunan - Ahmed Hunan Habeeb
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7609835">7609835</a>
                </td>
                <td>
                  <a href="mailto:hunan.habeeb@aaa-fta.com">
                    hunan.habeeb@aaa-fta.com
                  </a>
                </td>
                <td>339</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16919}
                    className="certificate-icon-status"
                    href="/users/16919#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16919/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16991#user_program:23726">
                    ILHAM - Ilham Mahmood
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9691431">9691431</a>
                </td>
                <td>
                  <a href="mailto:ilham.mahmood@aaa-fta.com">
                    ilham.mahmood@aaa-fta.com
                  </a>
                </td>
                <td>438</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16991}
                    className="certificate-icon-status"
                    href="/users/16991#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16991/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/35191#user_program:60002">
                    Izmeel - Izmeel Mahmoodh
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609555527">+9609555527</a>
                </td>
                <td>
                  <a href="mailto:izmeel.mahmoodh@aaa-fta.com">
                    izmeel.mahmoodh@aaa-fta.com
                  </a>
                </td>
                <td>637</td>
                <td className="certificate_status">
                  <a
                    data-user-id={35191}
                    className="certificate-icon-status"
                    href="/users/35191#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/35191/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16962#user_program:23697">
                    JAISH - Umar Jaish Ibrahim
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7747408">7747408</a>
                </td>
                <td>
                  <a href="mailto:umar.jaish@aaa-fta.com">
                    umar.jaish@aaa-fta.com
                  </a>
                </td>
                <td>441</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16962}
                    className="certificate-icon-status"
                    href="/users/16962#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16962/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/26705#user_program:44676">
                    Jandadi - Mujeebullah Jandadi
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607349724">+9607349724</a>
                </td>
                <td>
                  <a href="mailto:Mujeebullah.Jandadi@aaa-fta.com">
                    Mujeebullah.Jandadi@aaa-fta.com
                  </a>
                </td>
                <td>598</td>
                <td className="certificate_status">
                  <a
                    data-user-id={26705}
                    className="certificate-icon-status"
                    href="/users/26705#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/26705/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/17937#user_program:27621">
                    Laafir - Laafir Mohammed
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9994622">9994622</a>
                </td>
                <td>
                  <a href="mailto:laafir.mohammed@aaa-fta.com">
                    laafir.mohammed@aaa-fta.com
                  </a>
                </td>
                <td>395</td>
                <td className="certificate_status">
                  <a
                    data-user-id={17937}
                    className="certificate-icon-status"
                    href="/users/17937#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/17937/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/24995#user_program:41121">
                    MAHIL - Mahil Mumthaz
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607212727">+9607212727</a>
                </td>
                <td>
                  <a href="mailto:mahil.mumthaz@aaa-fta.com">
                    mahil.mumthaz@aaa-fta.com
                  </a>
                </td>
                <td>597</td>
                <td className="certificate_status">
                  <a
                    data-user-id={24995}
                    className="certificate-icon-status"
                    href="/users/24995#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/24995/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16990#user_program:23725">
                    MAHZOOM - Ahmed Mahzoom
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9900572">9900572</a>
                </td>
                <td>
                  <a href="mailto:ahmed.mahzoom@aaa-fta.com">
                    ahmed.mahzoom@aaa-fta.com
                  </a>
                </td>
                <td>450</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16990}
                    className="certificate-icon-status"
                    href="/users/16990#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16990/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16948#user_program:23683">
                    MANNAU - Mohamed Mannau Hamid
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7791606">7791606</a>
                </td>
                <td>
                  <a href="mailto:mannau.hamid@aaa-fta.com">
                    mannau.hamid@aaa-fta.com
                  </a>
                </td>
                <td>448</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16948}
                    className="certificate-icon-status"
                    href="/users/16948#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16948/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/17939#user_program:27776">
                    M.Hussain - Mohamed Hussain
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9532401">9532401</a>
                </td>
                <td>
                  <a href="mailto:mohamed.hussain@aaa-fta.com">
                    mohamed.hussain@aaa-fta.com
                  </a>
                </td>
                <td>397</td>
                <td className="certificate_status">
                  <a
                    data-user-id={17939}
                    className="certificate-icon-status"
                    href="/users/17939#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/17939/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/17930#user_program:27664">
                    M.Khalid - Mohamed Khalid
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7938470">7938470</a>
                </td>
                <td>
                  <a href="mailto:mohamed.khalid@aaa-fta.com">
                    mohamed.khalid@aaa-fta.com
                  </a>
                </td>
                <td>388</td>
                <td className="certificate_status">
                  <a
                    data-user-id={17930}
                    className="certificate-icon-status"
                    href="/users/17930#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/17930/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/31049#user_program:51354">
                    Nabeeh - Nabeeh Abdulla
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609539045">+9609539045</a>
                </td>
                <td>
                  <a href="mailto:nabeeh.abdulla@aaa-fta.com">
                    nabeeh.abdulla@aaa-fta.com
                  </a>
                </td>
                <td>615</td>
                <td className="certificate_status">
                  <a
                    data-user-id={31049}
                    className="certificate-icon-status"
                    href="/users/31049#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 187, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/31049/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16935#user_program:23670">
                    NABEELA - Nabeela Mohamed Naseem
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9891106">9891106</a>
                </td>
                <td>
                  <a href="mailto:nabeela.naseem@aaa-fta.com">
                    nabeela.naseem@aaa-fta.com
                  </a>
                </td>
                <td>454</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16935}
                    className="certificate-icon-status"
                    href="/users/16935#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16935/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/23698#user_program:37896">
                    Nadhees - Ibrahim Nadhees Abdulla
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607858324">+9607858324</a>
                </td>
                <td>
                  <a href="mailto:nadhees.abdulla@aaa-fta.com">
                    nadhees.abdulla@aaa-fta.com
                  </a>
                </td>
                <td>562</td>
                <td className="certificate_status">
                  <a
                    data-user-id={23698}
                    className="certificate-icon-status"
                    href="/users/23698#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/23698/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/31053#user_program:51355">
                    Nahwaal - Nahwaal Noorahdheen
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609718806">+9609718806</a>
                </td>
                <td>
                  <a href="mailto:nahwaal.noorahdheen@aaa-fta.com">
                    nahwaal.noorahdheen@aaa-fta.com
                  </a>
                </td>
                <td>619</td>
                <td className="certificate_status">
                  <a
                    data-user-id={31053}
                    className="certificate-icon-status"
                    href="/users/31053#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 187, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/31053/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16882#user_program:23617">
                    Nizaam - Nizaam Hassan
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9965114">9965114</a>
                </td>
                <td>
                  <a href="mailto:nizaam.hassan@aaa-fta.com">
                    nizaam.hassan@aaa-fta.com
                  </a>
                </td>
                <td>273</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16882}
                    className="certificate-icon-status"
                    href="/users/16882#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16882/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16965#user_program:23700">
                    RAAIS - Mohamed Raais
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9807374">9807374</a>
                </td>
                <td>
                  <a href="mailto:mohamed.raais@aaa-fta.com">
                    mohamed.raais@aaa-fta.com
                  </a>
                </td>
                <td>458</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16965}
                    className="certificate-icon-status"
                    href="/users/16965#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16965/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/22070#user_program:34599">
                    ​Rafhan - ​Rafhan Riyaz
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:​+9607485081">​+9607485081</a>
                </td>
                <td>
                  <a href="mailto:rafhan.riyaz@aaa-fta.com">
                    rafhan.riyaz@aaa-fta.com
                  </a>
                </td>
                <td>509</td>
                <td className="certificate_status">
                  <a
                    data-user-id={22070}
                    className="certificate-icon-status"
                    href="/users/22070#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(180, 222, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/22070/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16993#user_program:23728">
                    Rai - Mohamed Rai Shareef
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9995808">9995808</a>
                </td>
                <td>
                  <a href="mailto:mohamed.shareef@aaa-fta.com">
                    mohamed.shareef@aaa-fta.com
                  </a>
                </td>
                <td>459</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16993}
                    className="certificate-icon-status"
                    href="/users/16993#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16993/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/22073#user_program:34600">
                    Rasheed Ibrahim - ​Abdul Rasheed Ibrahim
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609958778">+9609958778</a>
                </td>
                <td>
                  <a href="mailto:rasheed.ibrahim@aaa-fta.com">
                    rasheed.ibrahim@aaa-fta.com
                  </a>
                </td>
                <td>512</td>
                <td className="certificate_status">
                  <a
                    data-user-id={22073}
                    className="certificate-icon-status"
                    href="/users/22073#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(180, 222, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/22073/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/17936#user_program:27625">
                    Rauf - Mohamed Auf
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7523120">7523120</a>
                </td>
                <td>
                  <a href="mailto:ali.rauf@aaa-fta.com">ali.rauf@aaa-fta.com</a>
                </td>
                <td>394</td>
                <td className="certificate_status">
                  <a
                    data-user-id={17936}
                    className="certificate-icon-status"
                    href="/users/17936#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/17936/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16947#user_program:23682">
                    RAYAH - Rayah Rasheed
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7586709">7586709</a>
                </td>
                <td>
                  <a href="mailto:rayah.rasheed@aaa-fta.com">
                    rayah.rasheed@aaa-fta.com
                  </a>
                </td>
                <td>462</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16947}
                    className="certificate-icon-status"
                    href="/users/16947#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16947/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16878#user_program:23613">
                    RAZZAN - Mohamed Razzan
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7659930">7659930</a>
                </td>
                <td>
                  <a href="mailto:mohamed.razzan@aaa-fta.com">
                    mohamed.razzan@aaa-fta.com
                  </a>
                </td>
                <td>249</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16878}
                    className="certificate-icon-status"
                    href="/users/16878#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16878/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/17933#user_program:27626">
                    Reem - Fathimath Reem
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9161998">9161998</a>
                </td>
                <td>
                  <a href="mailto:fathimath.reem@aaa-fta.com">
                    fathimath.reem@aaa-fta.com
                  </a>
                </td>
                <td>391</td>
                <td className="certificate_status">
                  <a
                    data-user-id={17933}
                    className="certificate-icon-status"
                    href="/users/17933#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/17933/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16845#user_program:23580">
                    ROOHUL - Ahmed Roohul Ameen
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9998846">9998846</a>
                </td>
                <td>
                  <a href="mailto:roohul.ameen@aaa-fta.com">
                    roohul.ameen@aaa-fta.com
                  </a>
                </td>
                <td>173</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16845}
                    className="certificate-icon-status"
                    href="/users/16845#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16845/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/17926#user_program:27634">
                    Saeed - Saneeh Saeed
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7919123">7919123</a> /{" "}
                  <a href="tel:9449840">9449840</a>
                </td>
                <td>
                  <a href="mailto:saneeh.saeed@aaa-fta.com">
                    saneeh.saeed@aaa-fta.com
                  </a>
                </td>
                <td>384</td>
                <td className="certificate_status">
                  <a
                    data-user-id={17926}
                    className="certificate-icon-status"
                    href="/users/17926#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/17926/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/22069#user_program:34892">
                    Saffah - Saffah Saeed
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:​+9609699720">​+9609699720</a>
                </td>
                <td>
                  <a href="mailto:saffah.saeed@aaa-fta.com">
                    saffah.saeed@aaa-fta.com
                  </a>
                </td>
                <td>508</td>
                <td className="certificate_status">
                  <a
                    data-user-id={22069}
                    className="certificate-icon-status"
                    href="/users/22069#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/22069/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/26706#user_program:60258">
                    Salim - Mohammad Salim
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7689242">7689242</a>
                </td>
                <td>
                  <a href="mailto:Mohammad.Salim@aaa-fta.com">
                    Mohammad.Salim@aaa-fta.com
                  </a>
                </td>
                <td>599</td>
                <td className="certificate_status">
                  <a
                    data-user-id={26706}
                    className="certificate-icon-status"
                    href="/users/26706#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/26706/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16985#user_program:23720">
                    SAMHA FAHUMY - Samha Mohamed Fahumy
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7821024">7821024</a>
                </td>
                <td>
                  <a href="mailto:samha.fahumy@aaa-fta.com">
                    samha.fahumy@aaa-fta.com
                  </a>
                </td>
                <td>466</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16985}
                    className="certificate-icon-status"
                    href="/users/16985#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16985/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/18905#user_program:28783">
                    Sarumadh - Sarumadh Naseem
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9607559096">9607559096</a>
                </td>
                <td>
                  <a href="mailto:sarumadh.naseem@aaa-fta.com">
                    sarumadh.naseem@aaa-fta.com
                  </a>
                </td>
                <td>404</td>
                <td className="certificate_status">
                  <a
                    data-user-id={18905}
                    className="certificate-icon-status"
                    href="/users/18905#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/18905/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/19977#user_program:31418">
                    Sayyaf - Ibrahim Ibrahim Sayyaf Mohamed
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607786576">+9607786576</a>
                </td>
                <td>
                  <a href="mailto:sayyaf.mohamed@aaa-fta.com">
                    sayyaf.mohamed@aaa-fta.com
                  </a>
                </td>
                <td>485</td>
                <td className="certificate_status">
                  <a
                    data-user-id={19977}
                    className="certificate-icon-status"
                    href="/users/19977#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/19977/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16843#user_program:23578">
                    Shahdhan - Shahdhan Habeeb
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9993465">9993465</a>
                </td>
                <td>
                  <a href="mailto:shahdhan.habeeb@aaa-fta.com">
                    shahdhan.habeeb@aaa-fta.com
                  </a>
                </td>
                <td>171</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16843}
                    className="certificate-icon-status"
                    href="/users/16843#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16843/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/24985#user_program:41164">
                    Shain - Shain Ageel
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607853295">+9607853295</a>
                </td>
                <td>
                  <a href="mailto:shain.ageel@aaa-fta.com">
                    shain.ageel@aaa-fta.com
                  </a>
                </td>
                <td>584</td>
                <td className="certificate_status">
                  <a
                    data-user-id={24985}
                    className="certificate-icon-status"
                    href="/users/24985#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/24985/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16917#user_program:23652">
                    Shakeel - Ahmed Shakeel
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9966998">9966998</a>
                </td>
                <td>
                  <a href="mailto:ahmed.shakeel@aaa-fta.com">
                    ahmed.shakeel@aaa-fta.com
                  </a>
                </td>
                <td>334</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16917}
                    className="certificate-icon-status"
                    href="/users/16917#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16917/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16979#user_program:23714">
                    Shuaidh - Ali Shuaidh
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7970406">7970406</a>
                </td>
                <td>
                  <a href="mailto:ali.shuaidh@aaa-fta.com">
                    ali.shuaidh@aaa-fta.com
                  </a>
                </td>
                <td>005</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16979}
                    className="certificate-icon-status"
                    href="/users/16979#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16979/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16855#user_program:23590">
                    SULAIM - Abdulla Sulaim Sabir
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9994009">9994009</a>
                </td>
                <td>
                  <a href="mailto:sulaim.sabir@aaa-fta.com">
                    sulaim.sabir@aaa-fta.com
                  </a>
                </td>
                <td>210</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16855}
                    className="certificate-icon-status"
                    href="/users/16855#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16855/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16902#user_program:23637">
                    TMA Basith - Abdul Basith - TMA Basith
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9675331">9675331</a>
                </td>
                <td>
                  <a href="mailto:abdul.basith@aaa-fta.com">
                    abdul.basith@aaa-fta.com
                  </a>
                </td>
                <td>415</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16902}
                    className="certificate-icon-status"
                    href="/users/16902#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16902/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/19980#user_program:31420">
                    Umaru - Umaru Ahzab Mohamed
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607427277">+9607427277</a>
                </td>
                <td>
                  <a href="mailto:umaru.mohamed@aaa-fta.com">
                    umaru.mohamed@aaa-fta.com
                  </a>
                </td>
                <td>489</td>
                <td className="certificate_status">
                  <a
                    data-user-id={19980}
                    className="certificate-icon-status"
                    href="/users/19980#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 187, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/19980/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16859#user_program:23594">
                    Vifaau - Mohamed Vifaau
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7636330">7636330</a>
                </td>
                <td>
                  <a href="mailto:mohamed.vifaau@aaa-fta.com">
                    mohamed.vifaau@aaa-fta.com
                  </a>
                </td>
                <td>185</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16859}
                    className="certificate-icon-status"
                    href="/users/16859#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 187, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16859/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/26708#user_program:44674">
                    Yasaar - Ali Yasaar
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609933228">+9609933228</a>
                </td>
                <td>
                  <a href="mailto:Ali.Yasaar@aaa-fta.com">
                    Ali.Yasaar@aaa-fta.com
                  </a>
                </td>
                <td>601</td>
                <td className="certificate_status">
                  <a
                    data-user-id={26708}
                    className="certificate-icon-status"
                    href="/users/26708#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/26708/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16944#user_program:23679">
                    ZAHID - Ahmed Zahid
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:7704077">7704077</a>
                </td>
                <td>
                  <a href="mailto:ahmed.zahid@aaa-fta.com">
                    ahmed.zahid@aaa-fta.com
                  </a>
                </td>
                <td>472</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16944}
                    className="certificate-icon-status"
                    href="/users/16944#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16944/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/37683#user_program:61545">
                    Zareef - Mohamed Dhaisam Zareef
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607498476">+9607498476</a>
                </td>
                <td>
                  <a href="mailto:dhaisam.zareef@aaa-fta.com">
                    dhaisam.zareef@aaa-fta.com
                  </a>
                </td>
                <td>646</td>
                <td className="certificate_status">
                  <a
                    data-user-id={37683}
                    className="certificate-icon-status"
                    href="/users/37683#certificates"
                  >
                    <i
                      className="far fa-copy green booking-icon"
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/37683/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr> */}
            </tbody>
          </table>

          {/* <Table>
            <ColumnGroup title="CPL IR(A)">
              <Column title="Name" dataIndex="firstName" key="firstName" />
              <Column title="Address" dataIndex="lastName" key="lastName" />
              <Column title="Phone" dataIndex="lastName" key="lastName" />
              <Column title="Email" dataIndex="lastName" key="lastName" />
              <Column
                title="User referance"
                dataIndex="lastName"
                key="lastName"
              />
              <Column
                title="Certificates"
                dataIndex="lastName"
                key="lastName"
              />
              <Dropdown trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <Column
                    title=""
                    dataIndex="icon"
                    key="icon"
                    // onClick={}
                  ></Column>
                  Click me
                </a>
              </Dropdown>
            </ColumnGroup>
          </Table> */}
        </div>
        <div className="table2">
          <h2>FI(A)</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>User reference</th>
                <th>Certificates</th>
                <th />
              </tr>
            </thead>
            <tbody />
            <tbody>
              {fiaData}
              <tr>
                <td>
                  <a href="/users/16953#user_program:60257">
                    ABID - Abid Bashir
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:9193433">9193433</a>
                </td>
                <td>
                  <a href="mailto:abid.bashir@aaa-fta.com">
                    abid.bashir@aaa-fta.com
                  </a>
                </td>
                <td>244</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16953}
                    className="certificate-icon-status"
                    href="/users/16953#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/16953/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/37104#user_program:59109">
                    PUNITH - Punith Jayatillake
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609984415">+9609984415</a>
                </td>
                <td>
                  <a href="mailto:punith@aaa-fta.com">punith@aaa-fta.com</a>
                </td>
                <td>641</td>
                <td className="certificate_status">
                  <a
                    data-user-id={37104}
                    className="certificate-icon-status"
                    href="/users/37104#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(13, 152, 222)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/37104/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <Table>
            <ColumnGroup title="FI(A)">
              <Column title="Name" dataIndex="firstName" key="firstName" />
              <Column title="Address" dataIndex="lastName" key="lastName" />
              <Column title="Phone" dataIndex="lastName" key="lastName" />
              <Column title="Email" dataIndex="lastName" key="lastName" />
              <Column
                title="User referance"
                dataIndex="lastName"
                key="lastName"
              />
              <Column
                title="Certificates"
                dataIndex="lastName"
                key="lastName"
              />
              <Dropdown trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <Column
                    title=""
                    dataIndex="icon"
                    key="icon"
                    // onClick={}
                  ></Column>
                  Click me
                </a>
              </Dropdown>
            </ColumnGroup>
          </Table> */}
        </div>
        <div className="table3">
          <h2>PPL(A)</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Phone</th>
                <th>Email</th>
                <th>User reference</th>
                <th>Certificates</th>
                <th />
              </tr>
            </thead>
            <tbody />
            <tbody>
              {pplaData}
              <tr>
                <td>
                  <a href="/users/33720#user_program:55141">
                    Abbas - Abbas Amjerawala
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9607233957">+9607233957</a>
                </td>
                <td>
                  <a href="mailto:abbas.amjerawala@aaa-fta.com">
                    abbas.amjerawala@aaa-fta.com
                  </a>
                </td>
                <td>631</td>
                <td className="certificate_status">
                  <a
                    data-user-id={33720}
                    className="certificate-icon-status"
                    href="/users/33720#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(180, 222, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/33720/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/28398#user_program:43652">
                    Mehul - Mehul Pandharinath Thakur
                  </a>
                </td>
                <td>001,satya vinayak appt.kolshet upper village thane</td>
                <td>
                  <a href="tel:+9607430885">+9607430885</a>
                </td>
                <td>
                  <a href="mailto:mehul.thakur@aaa-fta.com">
                    mehul.thakur@aaa-fta.com
                  </a>
                </td>
                <td>608</td>
                <td className="certificate_status">
                  <a
                    data-user-id={28398}
                    className="certificate-icon-status"
                    href="/users/28398#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/28398/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/37681#user_program:61255">
                    Rishabh - Rishabh Sharma
                  </a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609428928">+9609428928</a>
                </td>
                <td>
                  <a href="mailto:rishabh.sharma@aaa-fta.com">
                    rishabh.sharma@aaa-fta.com
                  </a>
                </td>
                <td>643</td>
                <td className="certificate_status">
                  <a
                    data-user-id={37681}
                    className="certificate-icon-status"
                    href="/users/37681#certificates"
                  >
                    <i
                      className="far fa-copy notavailable booking-icon"
                      style={{ color: "rgb(222, 13, 13)" }}
                      aria-hidden="true"
                    >
                      {" "}
                    </i>
                  </a>
                </td>
                <td>
                  <a href="/users/37681/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <Table>
            <ColumnGroup title="PPL(A)">
              <Column title="Name" dataIndex="firstName" key="firstName" />
              <Column title="Address" dataIndex="lastName" key="lastName" />
              <Column title="Phone" dataIndex="lastName" key="lastName" />
              <Column title="Email" dataIndex="lastName" key="lastName" />
              <Column
                title="User referance"
                dataIndex="lastName"
                key="lastName"
              />
              <Column
                title="Certificates"
                dataIndex="lastName"
                key="lastName"
              />
              <Dropdown trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <Column
                    title=""
                    dataIndex="icon"
                    key="icon"
                    // onClick={}
                  ></Column>
                  Click me
                </a>
              </Dropdown>
            </ColumnGroup>
          </Table> */}

          <div className="table4">
            <h2>Without programme</h2>

            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>User reference</th>
                  <th>Certificates</th>
                  <th />
                </tr>
              </thead>
              <tbody />
              <tbody>
                {WithoutProgramme}

                <tr>
                  <td>
                    <a href="/users/43692">
                      AMENDRA - Amendra Sharith Bandaranayake
                    </a>
                  </td>
                  <td />
                  <td>
                    <a href="tel:+9607774869">+9607774869</a>
                  </td>
                  <td>
                    <a href="mailto:amendra.bandaranayake@aaa-fta.com">
                      amendra.bandaranayake@aaa-fta.com
                    </a>
                  </td>
                  <td>651</td>
                  <td className="certificate_status">
                    <a
                      data-user-id={43692}
                      className="certificate-icon-status"
                      href="/users/43692#certificates"
                    >
                      <i
                        className="far fa-copy green booking-icon"
                        aria-hidden="true"
                      >
                        {" "}
                      </i>
                    </a>
                  </td>
                  <td>
                    <a href="/users/43692/edit">
                      <span className="fas fa-pencil-alt" aria-hidden="true" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="/users/20962">rilfi-student - r m</a>
                  </td>
                  <td />
                  <td />
                  <td>
                    <a href="mailto:rilfistu@aaa.com">rilfistu@aaa.com</a>
                  </td>
                  <td />
                  <td className="certificate_status">
                    <a
                      data-user-id={20962}
                      className="certificate-icon-status"
                      href="/users/20962#certificates"
                    >
                      <i
                        className="far fa-copy green booking-icon"
                        aria-hidden="true"
                      >
                        {" "}
                      </i>
                    </a>
                  </td>
                  <td>
                    <a href="/users/20962/edit">
                      <span className="fas fa-pencil-alt" aria-hidden="true" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <Table>
              <ColumnGroup title="Without programme">
                <Column title="Name" dataIndex="firstName" key="firstName" />
                <Column title="Address" dataIndex="lastName" key="lastName" />
                <Column title="Phone" dataIndex="lastName" key="lastName" />
                <Column title="Email" dataIndex="lastName" key="lastName" />
                <Column
                  title="User referance"
                  dataIndex="lastName"
                  key="lastName"
                />
                <Column
                  title="Certificates"
                  dataIndex="lastName"
                  key="lastName"
                />
                <Dropdown trigger={["click"]}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Column
                      title=""
                      dataIndex="icon"
                      key="icon"
                      // onClick={}
                    ></Column>
                    Click me
                  </a>
                </Dropdown>
              </ColumnGroup>
            </Table> */}
          </div>
        </div>
      </div>
    </div>
  );
}
