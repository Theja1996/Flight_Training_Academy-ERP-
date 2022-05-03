import React, { useState } from "react";
import { Row, Tabs } from "antd";
import Training from "./Training";
import Topbar from "./Topbar";
import Operationtab from "./Operation";
import Rental from "./Rental";
import Classtheorytab from "./Classtheory";
import ProgressTest from "./ProgressTest";
import TheoryReleases from "./TheoryReleases";

import TypeQuestionnaires from "./TypeQuestionnaires";
import ExtraTheories from "./ExtraTheories";
import Exams from "./Exams";

export default function Activities() {
  const { TabPane } = Tabs;
  const [viewmod, setViewmod] = useState("view");

  function callback(key) {
    console.log(key);
  }

  return (
    <>
      <Row justify="start" style={{ margin: "20px" }}>
        <Tabs onChange={callback} type="card">
          <TabPane tab="Training" key="1" onClick={() => setViewmod("view")}>
            <Row>
              <Topbar> {Topbar} </Topbar>
            </Row>
            <Row>{viewmod === "view" ? <Training /> : null}</Row>
          </TabPane>
          <TabPane tab="Operation" key="2" onClick={() => setViewmod("view")}>
            <Row>
              <Topbar> {Topbar} </Topbar>
            </Row>
            <Row>{viewmod === "view" ? <Operationtab /> : null}</Row>
          </TabPane>
          <TabPane tab="Rental" key="3" onClick={() => setViewmod("view")}>
            <Row>
              <Topbar> {Topbar} </Topbar>{" "}
            </Row>
            <Row>{viewmod === "view" ? <Rental /> : null}</Row>
          </TabPane>
          <TabPane
            tab="Class theory"
            key="4"
            onClick={() => setViewmod("view")}
          >
            <Row>
              <Topbar> {Topbar} </Topbar>
            </Row>
            <Row>{viewmod === "view" ? <Classtheorytab /> : null}</Row>
          </TabPane>
          <TabPane tab="Prograss test" key="5">
            <Row>
              <Topbar> {Topbar} </Topbar>
            </Row>{" "}
            <Row>{viewmod === "view" ? <ProgressTest /> : null}</Row>
          </TabPane>
          <TabPane tab="Theory release" key="6">
            <Row>
              <Topbar> {Topbar} </Topbar>
            </Row>{" "}
            <Row>{viewmod === "view" ? <TheoryReleases /> : null}</Row>
          </TabPane>
          <TabPane tab="Exam" key="7">
            <Row>
              <Topbar> {Topbar} </Topbar>
            </Row>{" "}
            <Row>{viewmod === "view" ? <Exams /> : null}</Row>
          </TabPane>
          <TabPane tab="Type questionnaire" key="8">
            <Row>
              <Topbar> {Topbar} </Topbar>
            </Row>{" "}
            <Row>{viewmod === "view" ? <TypeQuestionnaires /> : null}</Row>
          </TabPane>
          <TabPane tab="Extra theory" key="9">
            <Row>
              <Topbar> {Topbar} </Topbar>
            </Row>
            <Row>{viewmod === "view" ? <ExtraTheories /> : null}</Row>
          </TabPane>
        </Tabs>
      </Row>
    </>
  );
}
