import React, { useEffect, useState } from "react";
import "../classComponent/Userclass.css";
import TitleBar from "../components/TitleBar";
import { Button, Col, Dropdown, Row, Space, Table } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { SearchOutlined, TableOutlined, BarsOutlined } from "@ant-design/icons";
import ColumnGroup from "antd/lib/table/ColumnGroup";
import Column from "antd/lib/table/Column";
import firebase from "../Configue/Configue";
import Axios from "axios";

import { Label } from "bizcharts";
import { Modal, Form, Input, Card, Switch } from "antd";
import ButtonOne from "../buttonComponents/ButtonOneComponent/ButtonOne";
import { edit, getAll, remove } from "../utils/APIUtils";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export default function Userclass() {
  const [classdata, setclassdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visible, setvisible] = useState(false);
  const [visible2, setvisible2] = useState(false);

  const [className, setclassName] = useState();
  const [studentAttached, setstudentAttached] = useState();
  const [rowId, setrowId] = useState();
  const [rowKey, setrowKey] = useState();
  const [deleteId, setdeleteId] = useState();
  const [getflightClass, setgetflightClass] = useState([]);
  // const [switcchecked, setswitcchecked] = useState(true);

  const doRefrash = () => {
    window.location = "/Userclass";
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function onChange(deleteid) {
    setrowKey(deleteid);
    setvisible2(true);
    console.log(`switch to ${deleteid}`);
  }

  const handleCancel2 = () => {
    setrowKey("");
    setvisible2(false);
    window.location = "/Userclass";
  };
  const handleOk2 = () => {
    try {
      remove("FlightClass", rowKey);
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const res = Axios.delete(
    //     "http://localhost:5000/api/deleteClass/?id=" + deleteId
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
    setvisible2(false);
    window.location = "/Userclass";
  };

  useEffect(() => {
    getAll("FlightClass")
      .then((result) => setgetflightClass(result), setLoading(false))
      .catch((error) => console.log(error));

    // const getclassData = async () => {
    //   try {
    //     const res = await Axios.get("http://localhost:5000/api/classDetailes");
    //     setclassdata(res.data);
    //     console.log(classdata);
    //     setLoading(false);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getclassData();

    // firebase
    //   .database()
    //   .ref("ClassTable")
    //   .on("value", (snapshot) => {
    //     setclassdata(Object.values(snapshot.toJSON()));
    //     setLoading(false);
    //     console.log(snapshot.toJSON());
    //   });
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }

  const showModal = (item) => {
    setrowId(item.id);
    setrowKey(item.key);
    setclassName(item.classs);
    setstudentAttached(item.studentAttached);
    console.log(className);
    console.log(studentAttached);
    console.log(item.id);
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

  const dates = {
    id: rowId,
    key: rowKey,
    classs: className,
    studentAttached: studentAttached,
  };
  const doUpdate = () => {
    try {
      edit(dates, "FlightClass", rowKey);
      setclassName("");
      setstudentAttached("");
      setvisible(false);
      window.location = "/Userclass";
    } catch (error) {
      console.log(error);
    }

    // try {
    //   const res = Axios.put("http://localhost:5000/api/updateClasses", dates);
    //   setclassName("");
    //   setstudentAttached("");
    //   setvisible(false);
    //   window.location = "/Userclass";
    // } catch (error) {
    //   console.log(error);
    // }
  };

  // const OnDelete = (deleteid) => {
  //   try {
  //     const res = Axios.delete(
  //       "http://localhost:5000/api/deleteClass",
  //       deleteid
  //     );
  //     console.log(deleteid);
  //     alert("are you want to delete");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const datacom = getflightClass.map((item) => (
    <tr
      key={item.id}
      className="items odd team"
      data-item-id={3554}
      id="team_3554"
    >
      <td>
        <a href="/teams/3554#students"> {item.classs}</a>
      </td>
      <td> {item.studentAttached}</td>
      <td className="to-top table-btn">
        <a title="Edit" onClick={() => showModal(item)}>
          <i className="fas fa-pencil-alt" aria-hidden="true" />
        </a>
      </td>
      <td className="to-top table-btn activation-btn">
        <a
          title="Deactivate"
          data-confirm="Are you sure, that you want to deactivate the class: 2019 Nov ATPL Batch?"
          rel="nofollow"
          data-method="delete"
          // onClick={() => OnDelete(item._fieldsProto.id.stringValue)}
        >
          <Switch
            size="small"
            style={{ width: 20, color: "lightgreen" }}
            defaultChecked
            onChange={() => onChange(item.key)}
            // onClick={() => OnDelete(item._fieldsProto.id.stringValue)}
          />
          {/* <i className="far fa-toggle-on" aria-hidden="true" /> */}
        </a>
      </td>
    </tr>
  ));

  return (
    <React.Fragment>
      <TitleBar />

      <Modal
        title=""
        visible={visible2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <h3>Are you want to Delete</h3>
      </Modal>

      <Modal
        title="Add New Programme"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Card>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <div
              {...layout}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <label>Class Name</label>
              <input
                type="text"
                value={className}
                onChange={(e) => {
                  setclassName(e.target.value);
                }}
              />
            </div>
            <br />

            <div
              {...layout}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <label>Student Attached </label>
              <input
                type="text"
                value={studentAttached}
                onChange={(e) => {
                  setstudentAttached(e.target.value);
                }}
              />
            </div>
            <br />
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Button type="primary" htmlType="submit" onClick={doUpdate}>
                Udate Class
              </Button>
            </div>
          </Form>
        </Card>
      </Modal>

      <div className="header-head">
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
                href="/CreateClass"
                icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
              >
               Create Class
              </Button>
              <Button
                href="/CreateStudent"
                icon={<i  class="fas fa-users"></i>}
              >
              Deactivated Class
              </Button>


              </Space>
              
            </div>
          </div>
        </div>
      </div>

















      <div className="header-head">
        <div className="left"></div>
        <div className="right"></div>
        <div className="center">
          <div className="center-contant">
            {/* <Button style={{ borderStyle: "inset" }} icon={<PlusOutlined />}>
              <a href="/CreateClass"> Create Class</a>
            </Button> */}
            <ButtonOne
              text={<a href="/CreateClass">Create Class</a>}
              icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
            ></ButtonOne>
            <ButtonOne
              text={<a href="">Deactivated Class</a>}
              icon={<i class="fas fa-users"></i>}
            ></ButtonOne>
            {/* <Button
              style={{ borderStyle: "inset" }}
              icon={<i class="fas fa-users"></i>}
            >
              Deactivated Class
            </Button> */}
          </div>
        </div>
        <div className="table1">
          <p></p>
          <br />
          <br />
          <h2>Classes</h2>
         
          <table className="fl-table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Students attached</th>
                <th />
                <th />
              </tr>
              {datacom}
              {/* <tr
                  className="items odd team"
                  data-item-id={3554}
                  id="team_3554"
                >
                  <td>
                    <a href="/teams/3554#students">
                      2019 Nov ATPL Batch {item.classs}
                    </a>
                  </td>
                  <td>3 {item.studentAttached}</td>
                  <td className="to-top table-btn">
                    <a title="Edit" href="/teams/3554/edit?return_to=%2Fteams">
                      <i className="fas fa-pencil-alt" aria-hidden="true" />
                    </a>
                  </td>
                  <td className="to-top table-btn activation-btn">
                    <a
                      title="Deactivate"
                      data-confirm="Are you sure, that you want to deactivate the class: 2019 Nov ATPL Batch?"
                      rel="nofollow"
                      data-method="delete"
                      href="/teams/3554"
                    >
                      <i className="far fa-toggle-on" aria-hidden="true" />
                    </a>
                  </td>
                </tr> */}
            </tbody>
          </table>
          <table className="fl-table">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Students attached</th>
                <th />
                <th />
              </tr>
              <tr className="items odd team" data-item-id={3554} id="team_3554">
                <td>
                  <a href="/teams/3554#students">2019 Nov ATPL Batch</a>
                </td>
                <td>3</td>
                <td className="to-top table-btn">
                  <a title="Edit" href="/teams/3554/edit?return_to=%2Fteams">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="to-top table-btn activation-btn">
                  <a
                    title="Deactivate"
                    data-confirm="Are you sure, that you want to deactivate the class: 2019 Nov ATPL Batch?"
                    rel="nofollow"
                    data-method="delete"
                    href="/teams/3554"
                  >
                    <i className="far fa-toggle-on" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr
                className="even items team"
                data-item-id={3697}
                id="team_3697"
              >
                <td>
                  <a href="/teams/3697#students">2020 Feb ATPL Batch</a>
                </td>
                <td>4</td>
                <td className="to-top table-btn">
                  <a title="Edit" href="/teams/3697/edit?return_to=%2Fteams">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="to-top table-btn activation-btn">
                  <a
                    title="Deactivate"
                    data-confirm="Are you sure, that you want to deactivate the class: 2020 Feb ATPL Batch?"
                    rel="nofollow"
                    data-method="delete"
                    href="/teams/3697"
                  >
                    <i className="far fa-toggle-on" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr className="items odd team" data-item-id={3700} id="team_3700">
                <td>
                  <a href="/teams/3700#students">2020 Feb-BAK Batch 01</a>
                </td>
                <td>5</td>
                <td className="to-top table-btn">
                  <a title="Edit" href="/teams/3700/edit?return_to=%2Fteams">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="to-top table-btn activation-btn">
                  <a
                    title="Deactivate"
                    data-confirm="Are you sure, that you want to deactivate the class: 2020 Feb-BAK Batch 01?"
                    rel="nofollow"
                    data-method="delete"
                    href="/teams/3700"
                  >
                    <i className="far fa-toggle-on" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr
                className="even items team"
                data-item-id={3728}
                id="team_3728"
              >
                <td>
                  <a href="/teams/3728#students">2020 Feb-PPL Batch 01</a>
                </td>
                <td>1</td>
                <td className="to-top table-btn">
                  <a title="Edit" href="/teams/3728/edit?return_to=%2Fteams">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="to-top table-btn activation-btn">
                  <a
                    title="Deactivate"
                    data-confirm="Are you sure, that you want to deactivate the class: 2020 Feb-PPL Batch 01?"
                    rel="nofollow"
                    data-method="delete"
                    href="/teams/3728"
                  >
                    <i className="far fa-toggle-on" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr className="items odd team" data-item-id={4193} id="team_4193">
                <td>
                  <a href="/teams/4193#students">2020 JUL-BAK Batch 01</a>
                </td>
                <td>4</td>
                <td className="to-top table-btn">
                  <a title="Edit" href="/teams/4193/edit?return_to=%2Fteams">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="to-top table-btn activation-btn">
                  <a
                    title="Deactivate"
                    data-confirm="Are you sure, that you want to deactivate the class: 2020 JUL-BAK Batch 01?"
                    rel="nofollow"
                    data-method="delete"
                    href="/teams/4193"
                  >
                    <i className="far fa-toggle-on" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr
                className="even items team"
                data-item-id={4194}
                id="team_4194"
              >
                <td>
                  <a href="/teams/4194#students">2020 JUL-PPL Batch 01</a>
                </td>
                <td>4</td>
                <td className="to-top table-btn">
                  <a title="Edit" href="/teams/4194/edit?return_to=%2Fteams">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="to-top table-btn activation-btn">
                  <a
                    title="Deactivate"
                    data-confirm="Are you sure, that you want to deactivate the class: 2020 JUL-PPL Batch 01?"
                    rel="nofollow"
                    data-method="delete"
                    href="/teams/4194"
                  >
                    <i className="far fa-toggle-on" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr className="items odd team" data-item-id={4040} id="team_4040">
                <td>
                  <a href="/teams/4040#students">2020 Rnav Batch</a>
                </td>
                <td>5</td>
                <td className="to-top table-btn">
                  <a title="Edit" href="/teams/4040/edit?return_to=%2Fteams">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="to-top table-btn activation-btn">
                  <a
                    title="Deactivate"
                    data-confirm="Are you sure, that you want to deactivate the class: 2020 Rnav Batch?"
                    rel="nofollow"
                    data-method="delete"
                    href="/teams/4040"
                  >
                    <i className="far fa-toggle-on" aria-hidden="true" />
                  </a>
                </td>
              </tr>
              <tr
                className="even items team"
                data-item-id={4484}
                id="team_4484"
              >
                <td>
                  <a href="/teams/4484#students">2020 SEP-BAK Batch 01</a>
                </td>
                <td>1</td>
                <td className="to-top table-btn">
                  <a title="Edit" href="/teams/4484/edit?return_to=%2Fteams">
                    <i className="fas fa-pencil-alt" aria-hidden="true" />
                  </a>
                </td>
                <td className="to-top table-btn activation-btn">
                  <a
                    title="Deactivate"
                    data-confirm="Are you sure, that you want to deactivate the class: 2020 SEP-BAK Batch 01?"
                    rel="nofollow"
                    data-method="delete"
                    href="/teams/4484"
                  >
                    <i className="far fa-toggle-on" aria-hidden="true" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          {/* <Table>
            <ColumnGroup title="Classes">
              <Column title="Name" dataIndex="firstName" key="firstName" />
              <Column
                title="Students attached"
                dataIndex="lastName"
                key="lastName"
              />
              <Column title="" dataIndex="lastName" key="lastName" />
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
    </React.Fragment>
  );
}
