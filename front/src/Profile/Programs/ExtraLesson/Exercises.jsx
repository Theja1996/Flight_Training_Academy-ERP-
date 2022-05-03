import React, { useEffect, useState } from "react";
import {
  Row,
  Space,
  Select,
  Menu,
  Button,
  Dropdown,
  Divider,
  Form,
} from "antd";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaEllipsisV,
  FaPencilAlt,
} from "react-icons/fa";

import { RiCloseLine } from "react-icons/ri";
import { Header } from "antd/lib/layout/layout";
import Text from "antd/lib/typography/Text";
import { PlusOutlined } from "@ant-design/icons";

export default function Exercises() {
  const edit = (
    <Menu>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <FaPencilAlt style={{ color: "#1394e4" }} /> Edit
      </Button>
      <br></br>
      <Button type="text" style={{ width: "100%", textAlign: "left" }}>
        <RiCloseLine style={{ color: "#fd0c04" }} /> Delete
      </Button>
    </Menu>
  );

  // if (loading) {
  //   return "...Loading";
  // }

  return (
    <>
      <Row style={{ marginTop: "20px" }}>
        {/* <Space direction="vertical"> */}
        <Header
          style={{
            borderRadius: "4px",
            //  width: "100%",
            backgroundColor: " #E6E6E6",
            height: 40,
            border: " #ccc 1px solid",
            backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
            width: 1000,
            marginLeft: "300px",
            position: "relative",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "18px",
              float: "left",
              marginTop: "-15px",
            }}
          >
            Exercises
          </Text>
        </Header>
        <Header
          style={{
            //  borderRadius: "4px",
            //  width: "100%",
            backgroundColor: " #E6E6E6",
            height: 40,
            border: " #ccc 1px solid",
            backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
            width: 1000,
            marginLeft: "300px",
            position: "relative",
            float: "left",
            marginBottom:"25px"
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "14px",
              float: "left",
              marginTop: "-15px",
              
            }}
          >
            Name
          </Text>
        </Header>
        <Form name="form_nest">
          <Form.List name="users">
            {(fields, { add, remove }) => (
              <>
                {fields.map(({ key, name, fieldKey,index, ...restField }) => (
                  <Row style={{marginTop:"-25px"}}>
                    <Form.Item
                      name={[name, index === 0 ?"exercises":'']}
                      fieldKey={[fieldKey, "exercises"]}
                   
                    >
                      <Select style={{ width: 955, marginLeft: "300px" }}>
                        {/* {children} */}
                      </Select>
                    </Form.Item>
                    <Form.Item>
                      <Button>
                        <Dropdown
                          overlay={edit}
                          //   onClick={() => handleEdit(record)}
                        >
                          <FaEllipsisV style={{ color: "#1394e4" }} />
                        </Dropdown>
                      </Button>
                    </Form.Item>
                  
                  </Row>
                ))}
            
             
               
                     <Form.Item style={{float:"left", marginLeft:"300px"}}>
                      <Button
                       // onClick={() => add()}
                        onClick={() => {
                            add('exercises', 0);
                          }}
                        icon={
                          <PlusOutlined style={{ color: "rgb(39, 174, 96)" }} />
                        }
                      >
                        Add exercis
                      </Button>
                    </Form.Item>
                
              
              </>
            )}
          </Form.List>
        </Form>
      </Row>
      <Divider />
      <Row justify="space-between">
        <Space direction="horizontal">
          <Button
            type="text"
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: "20px",
              fontStyle: "italic",
              marginLeft: "280px",
            }}
            //   onClick={() => setViewmod("view")}
          >
            <FaArrowCircleLeft style={{ color: "#1394e4", fontSize: "24px" }} />
            Briefing
          </Button>
          <Button
            type="text"
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: "20px",
              fontStyle: "italic",
              marginLeft: "810px",
            }}
            //  onClick={() => setViewmod("view")}
          >
            Flight
            <FaArrowCircleRight
              style={{ color: "#1394e4", fontSize: "24px" }}
            />
          </Button>
        </Space>
      </Row>
    </>
  );
}
