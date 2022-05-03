import React, { useEffect, useState } from "react";

import {
  Button,
  Card,
  Col,
  Divider,
  Dropdown,
  Row,
  Space,
  Table,
  Switch,
} from "antd";

import { Header } from "antd/lib/layout/layout";
import { edit, getAll, remove } from "../utils/APIUtils";
import { FaPencilAlt } from "react-icons/fa";
import { useHistory } from 'react-router-dom';

export default function Userclass() {
  let history = useHistory();
  const [loading, setLoading] = useState(true);

  const [visible2, setvisible2] = useState(false);

  const [className, setclassName] = useState();
  const [studentAttached, setstudentAttached] = useState();

  const [rowKey, setrowKey] = useState();

  const [getflightClass, setgetflightClass] = useState([]);
  const [switcchecked, setswitcchecked] = useState(true);

  function onChange(deleteid) {
    setrowKey(deleteid);
    setvisible2(true);
    console.log(`switch to ${deleteid}`);
  }
  function handleEdit(data){   

    history.push({
    pathname: '/EditClass',
    state: { detail: data }})
  }
  useEffect(() => {
    getAll("FlightClass")
      .then((result) => setgetflightClass(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <strong>Loading...</strong>;
  }
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "	Students attached",
      dataIndex: "studentAttached",
    },
    {
      title: "",
      dataIndex: "edit",
      render: (text,record) => (
        <Button
         onClick={()=>handleEdit(record) }  
      
          type="text" icon={<FaPencilAlt style={{ color: "#1394e4" }} />}/>

      ),
    },

    {
      title: "",
      dataIndex: "other",
      render: (text,record) => ( <Switch
               size="small"
              style={{ width: 20, color: "lightgreen" }}
               defaultChecked
               onChange={() => onChange(record.key)}
             /> ),
    },
  ];

  const datacom = getflightClass.map((item) => ({
    key: item.key,

    name:item.classs,

  //Attached: item.studentAttached,

    // edit: (
    //   <a href="/EditClass">
    //     <span className="fas fa-pencil-alt" aria-hidden="true" />
    //   </a>
    // ),
    // other: (
     
    //     <Switch
    //       size="small"
    //       style={{ width: 20, color: "lightgreen" }}
    //       defaultChecked
    //       onChange={() => onChange(item.key)}
    //     />
     
    // ),
  }));

  return (
    <>
      <Row style={{ marginTop: "15px" }} justify="start">
        <Col  style={{
                  marginLeft: "315px",
                }} >
          <Space>
            <Button
              href="/CreateClass"
              icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
            >
              Create Class
            </Button>
            <Button href="#" icon={<i class="fas fa-users"></i>}>
              Deactivated Classes
            </Button>
          </Space>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: "15px" }}>
        <Col span={14}>
          <Table
            columns={columns}
            pagination={false}
            dataSource={datacom}
            size="small"
            title={() => (
              <Header
                style={{
                  borderRadius: "4px",
                  width: "100%",
                  backgroundColor: " #E6E6E6",
                  height: 35,
                  border: " #ccc 1px solid",
                  backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
                  float:"left",
                }}
              >
                <Row
                  justify="space-between "
                  style={{ marginTop: 5, width: "100%" }}
                >
                  <h3 style={{ fontWeight: "bold" }}>Classes </h3>
                </Row>
              </Header>
            )}
          />
        </Col>
      </Row>
    </>
  );
}
