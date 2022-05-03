import React from "react";
import "../../../AdministrationPage/AccountSettingComponent/TheoryCourseComponent/TheoryCourse.css";


import {
  Button,
  Dropdown,
  Table,
  Row,
  Col,
  Divider,
  Collapse,
  Tabs,
  Switch,
  Form,
  Input,
  Checkbox,
  Select,
} from "antd";

import {
  SearchOutlined,
  TableOutlined,
  BarsOutlined,
  DownloadOutlined,
  FilePdfOutlined,
  FileExcelOutlined,
  FileTextOutlined,
  CaretDownOutlined,
  ColumnHeightOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import ButtonOne from "../../../buttonComponents/ButtonOneComponent/ButtonOne";
import { FaRegClone } from "react-icons/fa";

const { TabPane } = Tabs;

export default function TheoryCourse() {
  const createPPLAtheory = () => {
    window.location = "/PPLAtheory";
  };
  const createATPLAtheory = () => {
    window.location = "/ATPLAtheory";
  };

  const createBAKtheory = () => {
    window.location = "/BAKtheory";
  };

  const createCPLtheory = () => {
    window.location = "/CPLtheory";
  };
  const createIRtheory = () => {
    window.location = "/IRtheory";
  };
  return (
    <div>
      

      <Row style={{ marginTop: 20 }}>
        <Col style={{ display: "flex" }} span={12} offset={6}>
          <ButtonOne
            text={<a href="/CreateTheory">Create Theory Course</a>}
            icon={<i style={{ color: "green" }} class="fas fa-plus"></i>}
          ></ButtonOne>
        </Col>
      </Row>
      <Row style={{ marginTop: 20 }}>
        <Col style={{ display: "flex" }} span={12} offset={6}>
          <h3 style={{ fontWeight: "bold" }}>Theory Courses</h3>
        </Col>
      </Row>

      <Row style={{ marginTop: 20 }}>
        <Col style={{ display: "flex" }} span={12} offset={6}>
          <Tabs className="aircraft-tabs" defaultActiveKey="1" type="card">
            <TabPane tab="Active" key="1">
              <table className="Aircraft-table">
                <thead>
                  <tr>
                    <th>PPL(A)</th>
                    <th>
                      <FaRegClone />
                    </th>
                    <th>
                      {" "}
                      <Switch size="small" defaultChecked />
                    </th>
                    <th>
                      <span className="fas fa-pencil-alt" aria-hidden="true" />
                    </th>
                    <th>
                      <ColumnHeightOutlined />
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <a href="/users/16953">ABID - Abid Bashir</a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <a href="/users/16953/edit">
                        <span
                          className="fas fa-pencil-alt"
                          aria-hidden="true"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="/users/16953/edit">
                        <ColumnHeightOutlined />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: "flex" }}>
                <Button onClick={createPPLAtheory}>
                  Create Theory Categary in 'PPL(A)'
                </Button>
              </div>

              <div style={{ marginTop: 20 }}>
                <table className="Aircraft-table">
                  <thead>
                    <tr>
                      <th>ATPL(A)</th>
                      <th>
                        <FaRegClone />
                      </th>
                      <th>
                        {" "}
                        <Switch size="small" defaultChecked />
                      </th>
                      <th>
                        <span
                          className="fas fa-pencil-alt"
                          aria-hidden="true"
                        />
                      </th>
                      <th>
                        <ColumnHeightOutlined />
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <a href="/users/16953">ABID - Abid Bashir</a>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <a href="/users/16953/edit">
                          <span
                            className="fas fa-pencil-alt"
                            aria-hidden="true"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="/users/16953/edit">
                          <ColumnHeightOutlined />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ display: "flex" }}>
                  <Button onClick={createATPLAtheory}>
                    Create Theory Categary in 'ATPL(A)'
                  </Button>
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <table className="Aircraft-table">
                  <thead>
                    <tr>
                      <th>BAK</th>
                      <th>
                        <FaRegClone />
                      </th>
                      <th>
                        {" "}
                        <Switch size="small" defaultChecked />
                      </th>
                      <th>
                        <span
                          className="fas fa-pencil-alt"
                          aria-hidden="true"
                        />
                      </th>
                      <th>
                        <ColumnHeightOutlined />
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <a href="/users/16953">ABID - Abid Bashir</a>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <a href="/users/16953/edit">
                          <span
                            className="fas fa-pencil-alt"
                            aria-hidden="true"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="/users/16953/edit">
                          <ColumnHeightOutlined />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ display: "flex" }}>
                  <Button onClick={createBAKtheory}>
                    Create Theory Categary in 'BAK'
                  </Button>
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <table className="Aircraft-table">
                  <thead>
                    <tr>
                      <th>Briefing (CPL & PPL)</th>
                      <th>
                        <FaRegClone />
                      </th>
                      <th>
                        {" "}
                        <Switch size="small" defaultChecked />
                      </th>
                      <th>
                        <span
                          className="fas fa-pencil-alt"
                          aria-hidden="true"
                        />
                      </th>
                      <th>
                        <ColumnHeightOutlined />
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <a href="/users/16953">ABID - Abid Bashir</a>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <a href="/users/16953/edit">
                          <span
                            className="fas fa-pencil-alt"
                            aria-hidden="true"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="/users/16953/edit">
                          <ColumnHeightOutlined />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ display: "flex" }}>
                  <Button onClick={createCPLtheory}>
                    Create Theory Categary in 'Briefing (CPL & PPL)'
                  </Button>
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <table className="Aircraft-table">
                  <thead>
                    <tr>
                      <th>Briefing (IR)</th>
                      <th>
                        <FaRegClone />
                      </th>
                      <th>
                        {" "}
                        <Switch size="small" defaultChecked />
                      </th>
                      <th>
                        <span
                          className="fas fa-pencil-alt"
                          aria-hidden="true"
                        />
                      </th>
                      <th>
                        <ColumnHeightOutlined />
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <a href="/users/16953">ABID - Abid Bashir</a>
                      </td>
                      <td></td>
                      <td></td>
                      <td>
                        <a href="/users/16953/edit">
                          <span
                            className="fas fa-pencil-alt"
                            aria-hidden="true"
                          />
                        </a>
                      </td>
                      <td>
                        <a href="/users/16953/edit">
                          <ColumnHeightOutlined />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div style={{ display: "flex" }}>
                  <Button onClick={createIRtheory}>
                    Create Theory Categary in 'Briefing (IR)'
                  </Button>
                </div>
              </div>
            </TabPane>
            <TabPane tab="Deactivated" key="2">
              <table className="Aircraft-table">
                <thead>
                  <tr>
                    <th>testing</th>
                    <th>
                      <FaRegClone />
                    </th>
                    <th>
                      {" "}
                      <Switch size="small" defaultChecked />
                    </th>
                    <th>
                      <span className="fas fa-pencil-alt" aria-hidden="true" />
                    </th>
                    <th>
                      <ColumnHeightOutlined />
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <a href="/users/16953">testing 1</a>
                    </td>
                    <td></td>
                    <td></td>
                    <td>
                      <a href="/users/16953/edit">
                        <span
                          className="fas fa-pencil-alt"
                          aria-hidden="true"
                        />
                      </a>
                    </td>
                    <td>
                      <a href="/users/16953/edit">
                        <Switch size="small" defaultChecked />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div style={{ display: "flex" }}>
                <Button>Create Theory Categary in 'testing'</Button>
              </div>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}
