import React, { useEffect, useState } from "react";
import "../instructorComponents/Instructor.css";
import TitleBar from "../components/TitleBar";
import { Button, Dropdown, Table, Menu, Modal, Card } from "antd";
import { CheckOutlined, PlusOutlined } from "@ant-design/icons";
import {
  SearchOutlined,
  TableOutlined,
  BarsOutlined,
  DownloadOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
  FileTextOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
import firebase from "../Configue/Configue";
import { Label } from "bizcharts";

import Form from "antd/lib/form/Form";
import Axios from "axios";
import ButtonTwo from "../buttonComponents/ButtontwoComponent/ButtonTwo";
import ButtonOne from "../buttonComponents/ButtonOneComponent/ButtonOne";
import { edit, getAll } from "../utils/APIUtils";

export default function Instructor() {
  const [intractorData, setinstractorData] = useState([]);
  const [insId, setinsId] = useState();
  const [instractorfirstName, setinstractorfirstName] = useState();
  const [instractorlastName, setinstractorlasttName] = useState();
  const [instractorAddress, setinstractorAddress] = useState();
  const [instractorphonenumber, setinstractorphonenumber] = useState();
  const [instractoremail, setinstractoremail] = useState();
  const [instractoruserreferance, setinstractoruserreferance] = useState();
  const [insData, setinsData] = useState([]);
  const [instractorkey, setinstractorkey] = useState();

  const [getInstractordata, setgetInstractordata] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const updatedata = {
    id: insId,
    key: instractorkey,
    firstname: instractorfirstName,
    lastname: instractorlastName,
    address: instractorAddress,
    phoneNumber: instractorphonenumber,
    email: instractoremail,
    userReferance: instractoruserreferance,
  };

  const doUpdate = () => {
    try {
      edit(updatedata, "FlightInstractor", instractorkey);
      setinsId("");
      setinstractorkey("");
      setinstractorfirstName("");
      setinstractorlasttName("");
      setinstractorAddress("");
      setinstractorphonenumber("");
      setinstractoremail("");
      setinstractoruserreferance("");
      setvisible(false);
      window.location = "/Instructor";
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const res = Axios.put(
    //     "http://localhost:5000/api/updateInstractors",
    //     updatedata
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

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

  useEffect(() => {
    getAll("FlightInstractor")
      .then((result) => setgetInstractordata(result), setLoading(false))
      .catch((error) => console.log(error));
    // const getInstractorData = async () => {
    //   try {
    //     const res = await Axios.get(
    //       "http://localhost:5000/api/instractorDetailes"
    //     );
    //     res.data.map((item) => {
    //       console.log(item._fieldsProto);
    //     });
    //     setinsData(res.data);
    //     console.log(insData);
    //     if (res.status === 201) {
    //       setinsData(res.data);
    //       console.log(res.data);
    //       console.log(insData);
    //     }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // getInstractorData();

    // firebase
    //   .database()
    //   .ref("InstractorTable")
    //   .on("value", (snapshot) => {
    //     console.log(snapshot.toJSON());
    //     setinstractorData(Object.values(snapshot.toJSON()));
    //   });
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }

  const doEdit = (item) => {
    setinsId(item.id);
    setinstractorkey(item.key);
    setinstractorfirstName(item.firstname);
    setinstractorlasttName(item.lastname);
    setinstractorAddress(item.address);
    setinstractorphonenumber(item.phoneNumber);
    setinstractoremail(item.email);
    setinstractoruserreferance(item.userReferance);
    setvisible(true);
  };

  const instraDatas = insData.map((item) => (
    <tr key={item._fieldsProto.id.stringValue}>
      <td>
        <a href="/users/44615#user_program:73472">
          {item._fieldsProto.firstname.stringValue}-
          {item._fieldsProto.lastname.stringValue}
        </a>
      </td>
      <td>{item._fieldsProto.address.stringValue}</td>
      <td>
        <a href="tel:+9607703319">
          {item._fieldsProto.phoneNumber.stringValue}
        </a>
      </td>
      <td>
        <a href="mailto:isha.shareef@aaa-fta.com">
          {item._fieldsProto.email.stringValue}
        </a>
      </td>
      <td>{item._fieldsProto.userReferance.stringValue}</td>
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
        <a onClick={() => doEdit(item._fieldsProto)}>
          <span className="fas fa-pencil-alt" aria-hidden="true" />
        </a>
      </td>
    </tr>
  ));

  const instractor = getInstractordata.map((item) => (
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
        <a onClick={() => doEdit(item)}>
          <span className="fas fa-pencil-alt" aria-hidden="true" />
        </a>
      </td>
    </tr>
  ));
  return (
    <div>
      <TitleBar />

      {/* <Modal
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
              value={instractorfirstName}
              onChange={(e) => {
                setinstractorfirstName(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label>Last Name</label>
            <input
              type="text"
              value={instractorlastName}
              onChange={(e) => {
                setinstractorlasttName(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label>Address</label>
            <input
              type="text"
              value={instractorAddress}
              onChange={(e) => {
                setinstractorAddress(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label>Pho.Number </label>
            <input
              type="text"
              value={instractorphonenumber}
              onChange={(e) => {
                setinstractorphonenumber(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label> Email</label>
            <input
              type="text"
              value={instractoremail}
              onChange={(e) => {
                setinstractoremail(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <label>UserRefrence</label>
            <input
              type="text"
              value={instractoruserreferance}
              onChange={(e) => {
                setinstractoruserreferance(e.target.value);
              }}
            />
          </div>
          <br />
          <div style={{ display: "flex", justifyContent: "right" }}>
            <Button type="primary" htmlType="submit" onClick={doUpdate}>
              Submit
            </Button>
          </div>
        </Card>
      </Modal> */}  <div className="header-head">
        <div className="left"></div>
        <div className="right"></div>
        <div className="center">
          <div className="center-contant">
            <div
              style={{
                marginLeft: "auto",
                marginRight: "auto",
              width: "1350px",
                alignItems: "center",
             
              }}
            >

<Space>
              <Button
                href="/CreateStudent"
                icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
              >
              Create instructors
              </Button>

            
                <Button
                 
                  text={<a href="#" />}
                
              icon={<i class="fas fa-user-tie"></i>}
                >
                 Deactivated intructors
                
                </Button>
             

              <Button
                icon={
                  <a href="/StudentsG">
                    <TableOutlined />
                  </a>
                }
              />
              <Button
                icon={
                  <a href="/Students">
                    <BarsOutlined />
                  </a>
                }
              />
              <Button
                icon={
                  <a href="/Search">
                    <SearchOutlined />
                  </a>
                }
              />

           { selectedrows.length>0?  <Dropdown overlay={menu_settings}>
                <Button  className="ant-dropdown-link" text={<a href="#" />}>
                  Settings
                  <DownOutlined />
                </Button>
              </Dropdown>:null}
              </Space>
              <Space style={{paddingLeft:"250px"}}>
              <Dropdown overlay={pdf}>
                <Button
                  icon={
                    <a>
                      <DownloadOutlined style={{ color: "#000000" }} />
                    </a>
                  }
                  className="ant-dropdown-link"
                >
                  {" "}
                  Export as <DownOutlined />{" "}
                </Button>
              </Dropdown>
              
             
           
         
              <span
                style={{
               
                  fontWeight: "bold",
                }}
              >
                Total: {result}
              </span>
              </Space>
              
            </div>
          </div>
        </div>
      </div>

      {/* <div className="header-head">
        <div className="left"></div>
        <div className="right"></div>
        <div className="center">
          <div className="center-contant">
            
            <ButtonOne
              text={<a href="/CreateInstractor">Create instructors</a>}
              icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
            ></ButtonOne>

            <ButtonOne
              text={<a href="">Deactivated intructors</a>}
              icon={<i class="fas fa-user-tie"></i>}
            ></ButtonOne>
           
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
          </div>
          <div>
            <Button
              className="Export-btn"
              style={{ borderRadius: 25, backgroundColor: "lightgray" }}
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
        </div> */}
        <div className="table1">
          <p></p>
          <br />
          <br />
          <h2>Instrutors</h2>
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
              {instractor}

              <tr>
                <td>
                  <a href="/users/16953">ABID - Abid Bashir</a>
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
                  <a href="/users/16817">AMIR - Aamir Saeed Ansari</a>
                </td>
                <td />
                <td>
                  <a href="tel:9193061">9193061</a>
                </td>
                <td>
                  <a href="mailto:aamir.ansari@aaa-fta.com">
                    aamir.ansari@aaa-fta.com
                  </a>
                </td>
                <td>531</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16817}
                    className="certificate-icon-status"
                    href="/users/16817#certificates"
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
                  <a href="/users/16817/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16812">ANIL - Anil Joseph</a>
                </td>
                <td />
                <td>
                  <a href="tel:7650330">7650330</a>
                </td>
                <td>
                  <a href="mailto:anil@aaa-fta.com">anil@aaa-fta.com</a>
                </td>
                <td>556</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16812}
                    className="certificate-icon-status"
                    href="/users/16812#certificates"
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
                  <a href="/users/16812/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16809">BALA - Bala Thanupriyan</a>
                </td>
                <td />
                <td>
                  <a href="tel:7667366">7667366</a>
                </td>
                <td>
                  <a href="mailto:bala@aaa-fta.com">bala@aaa-fta.com</a>
                </td>
                <td>78</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16809}
                    className="certificate-icon-status"
                    href="/users/16809#certificates"
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
                  <a href="/users/16809/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/18960">DAYAB - Dayab Noor</a>
                </td>
                <td />
                <td>
                  <a href="tel:7645270">7645270</a>
                </td>
                <td>
                  <a href="mailto:dayab.n@aaa-fta.com">dayab.n@aaa-fta.com</a>
                </td>
                <td>416</td>
                <td className="certificate_status">
                  <a
                    data-user-id={18960}
                    className="certificate-icon-status"
                    href="/users/18960#certificates"
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
                  <a href="/users/18960/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16806">HARIS - Haris Mathath</a>
                </td>
                <td>Mathath house,poyiloor,</td>
                <td>
                  <a href="tel:7975208">7975208</a>
                </td>
                <td>
                  <a href="mailto:haris@aaa-fta.com">haris@aaa-fta.com</a>
                </td>
                <td>557</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16806}
                    className="certificate-icon-status"
                    href="/users/16806#certificates"
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
                  <a href="/users/16806/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/36974">HASHEL - Hashel Fernando</a>
                </td>
                <td>Seedu Gan</td>
                <td>
                  <a href="tel:+9609984522">+9609984522</a>
                </td>
                <td>
                  <a href="mailto:hashel@aaa-fta.com">hashel@aaa-fta.com</a>
                </td>
                <td />
                <td className="certificate_status">
                  <a
                    data-user-id={36974}
                    className="certificate-icon-status"
                    href="/users/36974#certificates"
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
                  <a href="/users/36974/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16832">JAFRY - Muhammed Bilal Jafry</a>
                </td>
                <td />
                <td>
                  <a href="tel:7384741">7384741</a>
                </td>
                <td>
                  <a href="mailto:muhammad.bilal@aaa-fta.com">
                    muhammad.bilal@aaa-fta.com
                  </a>
                </td>
                <td>475</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16832}
                    className="certificate-icon-status"
                    href="/users/16832#certificates"
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
                  <a href="/users/16832/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16792">JOEL - Joel Samuel</a>
                </td>
                <td />
                <td>
                  <a href="tel:7642684">7642684</a>
                </td>
                <td>
                  <a href="mailto:joel.s@aaa-fta.com">joel.s@aaa-fta.com</a>
                </td>
                <td>558</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16792}
                    className="certificate-icon-status"
                    href="/users/16792#certificates"
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
                  <a href="/users/16792/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16834">KANEN - Kanen Nair Srikaran</a>
                </td>
                <td>Penang , Malaysia </td>
                <td>
                  <a href="tel:9186188">9186188</a>
                </td>
                <td>
                  <a href="mailto:kanen.srikaran@aaa-fta.com">
                    kanen.srikaran@aaa-fta.com
                  </a>
                </td>
                <td>320</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16834}
                    className="certificate-icon-status"
                    href="/users/16834#certificates"
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
                  <a href="/users/16834/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16818">MELVIN - Melvine Tom John</a>
                </td>
                <td>Villa no. 941, Road 3922, Al Hajiyat</td>
                <td>
                  <a href="tel:9193469">9193469</a>
                </td>
                <td>
                  <a href="mailto:melvine.john@aaa-fta.com">
                    melvine.john@aaa-fta.com
                  </a>
                </td>
                <td>498</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16818}
                    className="certificate-icon-status"
                    href="/users/16818#certificates"
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
                  <a href="/users/16818/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16814">NITHIN - Nithin William</a>
                </td>
                <td>
                  Win villa, near gv raja sports school , trivandrum , kerala
                </td>
                <td>
                  <a href="tel:9192824">9192824</a>
                </td>
                <td>
                  <a href="mailto:nithin.william@aaa-fta.com">
                    nithin.william@aaa-fta.com
                  </a>
                </td>
                <td>521</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16814}
                    className="certificate-icon-status"
                    href="/users/16814#certificates"
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
                  <a href="/users/16814/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16816">PEDRO - Pedro Hartz</a>
                </td>
                <td>Servidão Lucas Pedro Claudino , 119</td>
                <td>
                  <a href="tel:7535492">7535492</a>
                </td>
                <td>
                  <a href="mailto:pedro.machado@aaa-fta.com">
                    pedro.machado@aaa-fta.com
                  </a>
                </td>
                <td>522</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16816}
                    className="certificate-icon-status"
                    href="/users/16816#certificates"
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
                  <a href="/users/16816/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/37104">PUNITH - Punith Jayatillake</a>
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
              <tr>
                <td>
                  <a href="/users/28232">Rehan - Rehan Rauf</a>
                </td>
                <td />
                <td>
                  <a href="tel:+9609986881">+9609986881</a>
                </td>
                <td>
                  <a href="mailto:rehan.rauf@aaa-fta.com">
                    rehan.rauf@aaa-fta.com
                  </a>
                </td>
                <td>606</td>
                <td className="certificate_status">
                  <a
                    data-user-id={28232}
                    className="certificate-icon-status"
                    href="/users/28232#certificates"
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
                  <a href="/users/28232/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="/users/16804">SDS - Suranjan De Silva</a>
                </td>
                <td />
                <td>
                  <a href="tel:7599149">7599149</a>
                </td>
                <td>
                  <a href="mailto:ceo.ht@aaa-fta.com">ceo.ht@aaa-fta.com</a>
                </td>
                <td>560</td>
                <td className="certificate_status">
                  <a
                    data-user-id={16804}
                    className="certificate-icon-status"
                    href="/users/16804#certificates"
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
                  <a href="/users/16804/edit">
                    <span className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <Table>
            <ColumnGroup title="Instructors">
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
          </Table>{" "} */}
        </div>
      </div>
    </div>
  );
}
