import { Col, Row,  Input, Divider, Form,Button } from "antd";
import React, { useEffect, useState } from "react";


import uuid from "react-uuid";

import { add, getMaxId, remove_key } from "../../utils/APIUtils";
import { CheckOutlined } from "@ant-design/icons";

export default function CreateClass() {
  const [classs, setclasss] = useState();
  const [selectedStudent, setselectedstudent] = useState();
  const [keyValue, setkeyValue] = useState();

  useEffect(() => {
    getMaxId("FlightClass")
      .then((result) => setkeyValue(result))
      .catch((error) => console.log(error));

    return function cleanup() {
      remove_key("FlightClass", keyValue);
    };
  }, []);

  const doCreateClass = () => {
    const id = uuid();

    const datas = {
      id: id,
      key: keyValue,
      classs: classs,
      studentAttached: selectedStudent,
    };

    try {
      add(datas, "FlightClass")
        .then(() => {
          getMaxId("FlightClass")
            .then((result) => setkeyValue(result))
            .catch((error) => console.log(error));
        })
        .catch((error) => console.log(error));

      alert("sucessful save");
      console.log("what is going on", datas);
    } catch (error) {
      console.log(error);
    }

    window.location = "/CreateClass";
  };

  return (
    <>
      <Row justify="center " style={{ marginTop: "10px" }}>
        <Col span={14}>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginTop: "15px",
              textAlign: "start",
            }}
          >
            Create New Class
          </h1>
          <Divider style={{ marginTop: "-10px" }} />
        </Col>
      </Row>
      <Row justify="start">
        <Col  >
          <Form >
            <Form.Item
              name="new_document_name"
              label="Name"
              rules={[{ required: true }]}
              style={{
                marginLeft: "400px",
              }}
            >
              <Input
                value={classs}
                onChange={(e) => {
                  setclasss(e.target.value);
                }}
              />
               
            </Form.Item>
            <Form.Item
           
            >  <Button
              
            style={{
              backgroundColor: "#5cb85c",
              color: "white",
              borderRadius: "4px",
              marginLeft: "400px",
            }}
          
            onClick={doCreateClass}
          >
            <CheckOutlined />   Save Class
          </Button>
         </Form.Item>
          
          </Form>

          {/* <Input
              type="number"
              value={selectedStudent}
              onChange={(e) => {
                setselectedstudent(e.target.value);
              }}
              placeholder="Student Atteched"
            /> */}

        
         
        </Col>
      </Row>
    </>
  );
}
