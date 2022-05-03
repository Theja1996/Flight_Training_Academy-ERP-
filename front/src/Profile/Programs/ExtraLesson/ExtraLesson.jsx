import React, { useState } from "react";
import { Button, Image, Row, Space, Tabs } from "antd";
import {
    FaArrowCircleLeft,
  FaArrowCircleRight,
  FaChalkboardTeacher,
  FaClipboardList,
  FaPlane,
  FaRegComments,
} from "react-icons/fa";
import Briefing from "../ExtraLesson/Briefing";
import Avatar from "antd/lib/avatar/avatar";
import Exercises from "../ExtraLesson/Exercises";


import Flight from "../ExtraLesson/Flight";

export default function ExtraLesson() {
  const { TabPane } = Tabs;
  const [viewmod, setViewmod] = useState("view");

  function callback(key) {
    console.log(key);
  }

  return (
    <>
        <Row justify="center">
    <Space direction="horizontal"> 
  
     <Avatar size={50} style={{marginLeft:"-400px"}}
     
     src= {<Image src="https://media-exp1.licdn.com/dms/image/C4D0BAQFvYxp0IqMV9A/company-logo_200_200/0/1519952520890?e=2159024400&v=beta&t=jNBNgJd3x3Y6X4pgToJzFOAFq3UGU7ykY3E08jtdedQ" />}
 
     
     />
   <Button
                type="text"
                style={{
                  backgroundColor: "#093a5d",
                  fontSize: "16px",
                  width: "100px",
                  height: "80px",
                  color: "#ffffff",
                }}
                onClick={() => setViewmod("view")}
              >
                <Space direction="vertical">
                  <FaChalkboardTeacher
                    style={{ color: "#ffffff", fontSize: "24px" }}
                  />
                  Briefing
                </Space>
              </Button>
              <Button
                type="text"
                style={{
                  backgroundColor: "#093a5d",
                  fontSize: "16px",
                 width: "100px",
                  height: "80px",
                  color: "#ffffff",
                }}
                onClick={() => setViewmod("grading")}
              >
                <Space direction="vertical">
                  <FaClipboardList
                    style={{ color: "#ffffff", fontSize: "24px" }}
                  />
                  Exercises
                </Space>
              </Button>
              <Button
                type="text"
                style={{
                  backgroundColor: "#093a5d",
                  fontSize: "16px",
                  width: "100px",
                  height: "80px",
                  color: "#ffffff",
                }}
                onClick={() => setViewmod("flight")}
              >
                <Space direction="vertical">
                  <FaPlane style={{ color: "#ffffff", fontSize: "24px" }} />{" "}
                  Flight
                </Space>
              </Button>
              
               </Space></Row>
              <Row >    {viewmod === "view" ? <Briefing /> : null}
          {viewmod === "grading" ? <Exercises /> : null}
          {viewmod === "flight" ? <Flight /> : null}
   
   
          
          </Row>
            {/* {viewmod === "view" ? (
            <Briefing
             
            />
          ) : (
            <Grading />
          )} */}

      {/* <Row >
     
        <Tabs onChange={callback} type="card"  >
          <TabPane
            key="1"
        
            onClick={() => setViewmod("view")}
            tab={
              <Button
                type="text"
                style={{
                  backgroundColor: "#093a5d",
                  fontSize: "16px",
                  width: "100%",
                  height: "100%",
                  color: "#ffffff",
                }}
              
              >
                <Space direction="vertical">
                  <FaChalkboardTeacher
                    style={{ color: "#ffffff", fontSize: "24px" }}
                  />
                  Briefing
                </Space>
              </Button>
             }
          > 
            <Row style={{width:"100%"}}>{viewmod === "view" ? <Briefing /> : null}</Row>

            <Row>
              <Button
                type="text"
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "20px",
                  fontStyle: "italic",
                }}
                onClick={() => setViewmod("view")}
              >
                Grading
                <FaArrowCircleRight
                  style={{ color: "#1394e4", fontSize: "24px" }}
                /> */}
                {/* {viewmod === "view" ? <Grading /> : null} */}
              {/* </Button>
            </Row>
          </TabPane>
          <TabPane
            key="2"
            onClick={() => setViewmod("view")}
            tab={
              <Button
                type="text"
                style={{
                  backgroundColor: "#093a5d",
                  fontSize: "16px",
                  width: "100%",
                  height: "100%",
                  color: "#ffffff",
                }}
              >
                <Space direction="vertical">
                  <FaClipboardList
                    style={{ color: "#ffffff", fontSize: "24px" }}
                  />
                  Grading
                </Space>
              </Button>
            }
          >
            <Row>{viewmod === "view" ? <Grading /> : null}</Row>

            <Row justify="space-between">
                <Space direction='horizontal'>
            <Button
                type="text"
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "20px",
                  fontStyle: "italic",
                }}
                onClick={() => setViewmod("view")}
              >
               
                <FaArrowCircleLeft
                  style={{ color: "#1394e4", fontSize: "24px" }}
                /> Briefing */}
                {/* {viewmod === "view" ? <Grading /> : null} */}
              {/* </Button>
              <Button
                type="text"
                style={{
                  width: "100%",
                  textAlign: "left",
                  fontSize: "20px",
                  fontStyle: "italic",
                }}
                onClick={() => setViewmod("view")}
              >
                Flight
                <FaArrowCircleRight
                  style={{ color: "#1394e4", fontSize: "24px" }}
                /> */}
                {/* {viewmod === "view" ? <Grading /> : null} */}
              {/* </Button></Space>
            </Row>


          </TabPane>
          <TabPane
            key="3"
            onClick={() => setViewmod("view")}
            tab={
              <Button
                type="text"
                style={{
                  backgroundColor: "#093a5d",
                  fontSize: "16px",
                  width: "100%",
                  height: "100%",
                  color: "#ffffff",
                }}
              >
                <Space direction="vertical">
                  <FaPlane style={{ color: "#ffffff", fontSize: "24px" }} />{" "}
                  Flight
                </Space>
              </Button>
            }
          > */}
            {/* <Row>{viewmod === "view" ? <Flight /> : null}</Row> */}
          {/* </TabPane>
          <TabPane
            key="4"
            onClick={() => setViewmod("view")}
            tab={
              <Button
                type="text"
                style={{
                  backgroundColor: "#093a5d",
                  fontSize: "16px",
                  width: "100%",
                  height: "100%",
                  color: "#ffffff",
                }}
              >
                <Space direction="vertical">
                  <FaRegComments
                    style={{ color: "#ffffff", fontSize: "24px" }}
                  />{" "}
                  Debriefing
                </Space>
              </Button>
            }
          >
            <Row>{viewmod === "view" ? <Debriefing /> : null}</Row>
          </TabPane>
        </Tabs> */}
      {/* </Row> */}
    </>
  );
}
