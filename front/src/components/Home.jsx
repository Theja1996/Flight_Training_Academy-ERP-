import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "./Contaxt";
import "../csscomonents/Home.css";

import {
  EditOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

import Addpost from "./Addpost";
import users from "../Datacomponents/userdata.json";
import { Badge, Dropdown } from "antd";
import { Table, Tag, Space } from "antd";
import { Row, Col } from "antd";
import { Collapse } from "antd";


function Home() {
  const { isAuthenticated, userHasAuthenticated } = useAppContext();

  const [postArray, setPostArray] = React.useState([]);

  const [userRecords, setuserRecords] = useState([]);
  const history = useHistory();
  const { Column, ColumnGroup } = Table;
  const { Panel } = Collapse;

  function callback(key) {
    console.log(key);
  }

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
  ];

  const warningtable = (
    <div className="warning-table" style={{ width: 450, marginLeft: 5 }}>
      <div style={{ marginLeft: 5 }}>
        <h2>50 Hours</h2>
        <h4>
          <CalendarOutlined /> Overdue By 624 days
        </h4>
        <h4 style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>
            <DashboardOutlined /> Overdue By 1356.40 Hours
          </h4>
          <h3>
            <i class="fas fa-wrench"></i>
          </h3>
        </h4>
      </div>
      <div style={{ marginTop: 10, marginLeft: 5 }}>
        <h4>ARC</h4>
        <h4 style={{ display: "flex", justifyContent: "space-between" }}>
          <h4>
            <CalendarOutlined /> Overdue By 671 days
          </h4>
          <h3>
            <i class="fas fa-wrench"></i>
          </h3>
        </h4>
      </div>
    </div>
  );

  const waringtable1 = (
    <div style={{ marginLeft: 5, width: 500 }}>
      <Table dataSource={data}>
        <Column
          title=""
          dataIndex="aircraft"
          key="aircraft"
          render={(text, record) => (
            <div>
              <div>
                <Row style={{ backgroundColor: "pink" }}>
                  <h4>50 Hours</h4>
                </Row>
                <Row
                  justify="space-between"
                  style={{ backgroundColor: "pink" }}
                >
                  <Col>
                    <CalendarOutlined /> Overdue By 624 days
                  </Col>
                </Row>
                <Row
                  justify="space-between"
                  style={{ backgroundColor: "pink" }}
                >
                  <Col>
                    <DashboardOutlined /> Overdue By 1356.40 Hours
                  </Col>
                  <Col>
                    {" "}
                    <i class="fas fa-wrench"></i>
                  </Col>
                </Row>
              </div>
              <div style={{ marginTop: 5 }}>
                <Row style={{ backgroundColor: "pink" }}>
                  <h4>ARC</h4>
                </Row>
                <Row
                  justify="space-between"
                  style={{ backgroundColor: "pink" }}
                >
                  <Col>
                    <CalendarOutlined /> Overdue By 671 days
                  </Col>
                  <Col>
                    <i class="fas fa-wrench"></i>
                  </Col>
                </Row>
              </div>
            </div>
          )}
        ></Column>
      </Table>
    </div>
  );

  const aircraftstatustable = (
    <div>
      <table className="AircraftStatusTable__StyledTable-flbvts-0 gAFQQC">
        <thead>
          <tr>
            <th className="StatusTableHeader__StyledTH-omoime-0 jqHTUI">
              Aircraft
            </th>
            <th className="StatusTableHeader__StyledTH-omoime-0 jqHTUI">
              Warnings
            </th>
            <th className="StatusTableHeader__StyledTH-omoime-0 jqHTUI">
              Last flight
            </th>
            <th className="StatusTableHeader__StyledTH-omoime-0 jqHTUI">
              Current
            </th>
            <th className="StatusTableHeader__StyledTH-omoime-0 jqHTUI">
              Next service @
            </th>
            <th className="StatusTableHeader__StyledTH-omoime-0 jqHTUI">
              Service due
            </th>
            <th className="StatusTableHeader__StyledTH-omoime-0 jqHTUI">
              Remarks
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="StatusTableRow__StyledTR-e2g14c-0 jqnhBp">
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__AircraftInfoTD-e2g14c-2 cRfxcD">
              <div className="AircraftInfo__Container-eu4ncm-0 hthRLX">
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 hlvgfP">
                  <Dropdown overlay={warningtable} trigger={["click"]}>
                    <a
                      className="ant-dropdown-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="chevron-right"
                        className="svg-inline--fa fa-chevron-right fa-w-10 AircraftInfo__ArrowIcon-eu4ncm-7 ftyIGD"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                        />
                      </svg>{" "}
                    </a>
                  </Dropdown>
                </div>
                <div>
                  <a
                    className="AircraftInfo__Callsign-eu4ncm-1 iyUctu overflowing"
                    href="/planes/1478"
                    target="_blank"
                  >
                    8Q-GAA
                  </a>
                  <p className="AircraftInfo__Model-eu4ncm-2 fPeUSf overflowing">
                    C150
                  </p>
                  <div className="AircraftInfo__Location-eu4ncm-3 llFbKE">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        className="svg-inline--fa fa-map-marker-alt fa-w-12 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        />
                      </svg>

                      <span className="AircraftInfo__AirportName-eu4ncm-4 jnYssG">
                        VRMG
                      </span>
                    </div>
                  </div>
                </div>
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 dacCLs">
                  <a
                    href="/planes/1478/edit"
                    target="_blank"
                    className="AnchorNoStyle__Anchor-n83gpd-0 geMVag AircraftInfo__StyledAnchor-eu4ncm-6 hMVNcG"
                  >
                    <div className="IconButton__StyledContainer-sc-1pf92mf-0 kcgjRx">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pencil-alt"
                        className="svg-inline--fa fa-pencil-alt fa-w-16 fa-fw "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        color="#08c"
                      >
                        <path
                          fill="currentColor"
                          d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </td>

            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 djLUrW">
              <div className="AircraftWarningsIndicator__StyledContainer-u7rmao-0 cffChx">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="wrench"
                      className="svg-inline--fa fa-wrench fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 0, left: "-10px" }}
                    >
                      5
                    </div>
                  </div>
                </span>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600595460000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      20.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">0:38</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">0.80</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600670092623}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      21.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">1680:17</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">1748.10</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1536364800000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      08.09.2018
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">2404.40</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">-744 days</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    656.30 hours
                  </p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 iYVlLT">
              <div className="RemarkInfo__StyledContainer-sc-1qi0q64-0 gxZFPz">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="comment"
                      className="svg-inline--fa fa-comment fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 5, color: "white" }}
                    >
                      0
                    </div>
                  </div>
                </span>
              </div>
            </td>
          </tr>

          <tr className="StatusTableRow__StyledTR-e2g14c-0 jqnhBp">
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__AircraftInfoTD-e2g14c-2 cRfxcD">
              <div className="AircraftInfo__Container-eu4ncm-0 hthRLX">
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 hlvgfP">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    className="svg-inline--fa fa-chevron-right fa-w-10 AircraftInfo__ArrowIcon-eu4ncm-7 ftyIGD"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    className="AircraftInfo__Callsign-eu4ncm-1 iyUctu overflowing"
                    href="/planes/1479"
                    target="_blank"
                  >
                    8Q-GAB
                  </a>
                  <p className="AircraftInfo__Model-eu4ncm-2 fPeUSf overflowing">
                    C150
                  </p>
                  <div className="AircraftInfo__Location-eu4ncm-3 llFbKE">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        className="svg-inline--fa fa-map-marker-alt fa-w-12 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        />
                      </svg>
                      <span className="AircraftInfo__AirportName-eu4ncm-4 jnYssG">
                        VRMG
                      </span>
                    </div>
                  </div>
                </div>
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 dacCLs">
                  <a
                    href="/planes/1479/edit"
                    target="_blank"
                    className="AnchorNoStyle__Anchor-n83gpd-0 geMVag AircraftInfo__StyledAnchor-eu4ncm-6 hMVNcG"
                  >
                    <div className="IconButton__StyledContainer-sc-1pf92mf-0 kcgjRx">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pencil-alt"
                        className="svg-inline--fa fa-pencil-alt fa-w-16 fa-fw "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        color="#08c"
                      >
                        <path
                          fill="currentColor"
                          d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 djLUrW">
              <div className="AircraftWarningsIndicator__StyledContainer-u7rmao-0 cffChx">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="wrench"
                      className="svg-inline--fa fa-wrench fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 0, left: "-10px" }}
                    >
                      2
                    </div>
                  </div>
                </span>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1576564800000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      17.12.2019
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">0:02</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">0.20</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600670092623}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      21.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">1405:55</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">3847.00</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1542153600000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      14.11.2018
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">2490.60</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">-677 days</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    -1356.40 hours
                  </p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 iYVlLT">
              <div className="RemarkInfo__StyledContainer-sc-1qi0q64-0 gxZFPz">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="comment"
                      className="svg-inline--fa fa-comment fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 5, color: "white" }}
                    >
                      0
                    </div>
                  </div>
                </span>
              </div>
            </td>
          </tr>
          <tr className="StatusTableRow__StyledTR-e2g14c-0 jqnhBp">
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__AircraftInfoTD-e2g14c-2 cRfxcD">
              <div className="AircraftInfo__Container-eu4ncm-0 hthRLX">
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 hlvgfP">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    className="svg-inline--fa fa-chevron-right fa-w-10 AircraftInfo__ArrowIcon-eu4ncm-7 ftyIGD"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    className="AircraftInfo__Callsign-eu4ncm-1 iyUctu overflowing"
                    href="/planes/1482"
                    target="_blank"
                  >
                    8Q-GAE
                  </a>
                  <p className="AircraftInfo__Model-eu4ncm-2 fPeUSf overflowing">
                    C150
                  </p>
                  <div className="AircraftInfo__Location-eu4ncm-3 llFbKE">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        className="svg-inline--fa fa-map-marker-alt fa-w-12 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        />
                      </svg>
                      <span className="AircraftInfo__AirportName-eu4ncm-4 jnYssG">
                        VRMG
                      </span>
                    </div>
                  </div>
                </div>
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 dacCLs">
                  <a
                    href="/planes/1482/edit"
                    target="_blank"
                    className="AnchorNoStyle__Anchor-n83gpd-0 geMVag AircraftInfo__StyledAnchor-eu4ncm-6 hMVNcG"
                  >
                    <div className="IconButton__StyledContainer-sc-1pf92mf-0 kcgjRx">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pencil-alt"
                        className="svg-inline--fa fa-pencil-alt fa-w-16 fa-fw "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        color="#08c"
                      >
                        <path
                          fill="currentColor"
                          d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 djLUrW">
              <div className="AircraftWarningsIndicator__StyledContainer-u7rmao-0 cffChx">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="wrench"
                      className="svg-inline--fa fa-wrench fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 0, left: "-10px" }}
                    >
                      2
                    </div>
                  </div>
                </span>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1580349600000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      30.01.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">0.30</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600670092623}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      21.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">1652:03</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">7059.80</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1537488000000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      21.09.2018
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">5309.70</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">-731 days</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    -1750.10 hours
                  </p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 iYVlLT">
              <div className="RemarkInfo__StyledContainer-sc-1qi0q64-0 gxZFPz">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="comment"
                      className="svg-inline--fa fa-comment fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 5, color: "white" }}
                    >
                      0
                    </div>
                  </div>
                </span>
              </div>
            </td>
          </tr>
          <tr className="StatusTableRow__StyledTR-e2g14c-0 jqnhBp">
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__AircraftInfoTD-e2g14c-2 cRfxcD">
              <div className="AircraftInfo__Container-eu4ncm-0 hthRLX">
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 hlvgfP">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    className="svg-inline--fa fa-chevron-right fa-w-10 AircraftInfo__ArrowIcon-eu4ncm-7 ftyIGD"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    className="AircraftInfo__Callsign-eu4ncm-1 iyUctu overflowing"
                    href="/planes/1483"
                    target="_blank"
                  >
                    8Q-GAF
                  </a>
                  <p className="AircraftInfo__Model-eu4ncm-2 fPeUSf overflowing">
                    C150
                  </p>
                  <div className="AircraftInfo__Location-eu4ncm-3 llFbKE">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        className="svg-inline--fa fa-map-marker-alt fa-w-12 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        />
                      </svg>
                      <span className="AircraftInfo__AirportName-eu4ncm-4 jnYssG">
                        VRMG
                      </span>
                    </div>
                  </div>
                </div>
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 dacCLs">
                  <a
                    href="/planes/1483/edit"
                    target="_blank"
                    className="AnchorNoStyle__Anchor-n83gpd-0 geMVag AircraftInfo__StyledAnchor-eu4ncm-6 hMVNcG"
                  >
                    <div className="IconButton__StyledContainer-sc-1pf92mf-0 kcgjRx">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pencil-alt"
                        className="svg-inline--fa fa-pencil-alt fa-w-16 fa-fw "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        color="#08c"
                      >
                        <path
                          fill="currentColor"
                          d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 djLUrW">
              <div className="AircraftWarningsIndicator__StyledContainer-u7rmao-0 cffChx">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="wrench"
                      className="svg-inline--fa fa-wrench fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 0, left: "-10px" }}
                    >
                      1
                    </div>
                  </div>
                </span>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600318080000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      17.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">0:14</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">0.40</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600670092623}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      21.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">1569:11</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">5314.90</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1539129600000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      10.10.2018
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">3683.60</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">-712 days</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    -1631.30 hours
                  </p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 iYVlLT">
              <div className="RemarkInfo__StyledContainer-sc-1qi0q64-0 gxZFPz">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="comment"
                      className="svg-inline--fa fa-comment fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 5, color: "white" }}
                    >
                      0
                    </div>
                  </div>
                </span>
              </div>
            </td>
          </tr>
          <tr className="StatusTableRow__StyledTR-e2g14c-0 jqnhBp">
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__AircraftInfoTD-e2g14c-2 cRfxcD">
              <div className="AircraftInfo__Container-eu4ncm-0 hthRLX">
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 hlvgfP">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    className="svg-inline--fa fa-chevron-right fa-w-10 AircraftInfo__ArrowIcon-eu4ncm-7 ftyIGD"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    className="AircraftInfo__Callsign-eu4ncm-1 iyUctu overflowing"
                    href="/planes/1485"
                    target="_blank"
                  >
                    8Q-GAH
                  </a>
                  <p className="AircraftInfo__Model-eu4ncm-2 fPeUSf overflowing">
                    C150
                  </p>
                  <div className="AircraftInfo__Location-eu4ncm-3 llFbKE">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        className="svg-inline--fa fa-map-marker-alt fa-w-12 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        />
                      </svg>
                      <span className="AircraftInfo__AirportName-eu4ncm-4 jnYssG">
                        VRMG
                      </span>
                    </div>
                  </div>
                </div>
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 dacCLs">
                  <a
                    href="/planes/1485/edit"
                    target="_blank"
                    className="AnchorNoStyle__Anchor-n83gpd-0 geMVag AircraftInfo__StyledAnchor-eu4ncm-6 hMVNcG"
                  >
                    <div className="IconButton__StyledContainer-sc-1pf92mf-0 kcgjRx">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pencil-alt"
                        className="svg-inline--fa fa-pencil-alt fa-w-16 fa-fw "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        color="#08c"
                      >
                        <path
                          fill="currentColor"
                          d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 djLUrW">
              <div className="AircraftWarningsIndicator__StyledContainer-u7rmao-0 cffChx">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="wrench"
                      className="svg-inline--fa fa-wrench fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 0, left: "-10px" }}
                    >
                      2
                    </div>
                  </div>
                </span>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600597200000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      20.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">1:02</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">1.20</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600670092623}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      21.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">1882:18</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">3960.70</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1539820800000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      18.10.2018
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">2777.50</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">-704 days</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    -1183.20 hours
                  </p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 iYVlLT">
              <div className="RemarkInfo__StyledContainer-sc-1qi0q64-0 gxZFPz">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="comment"
                      className="svg-inline--fa fa-comment fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 5, color: "white" }}
                    >
                      0
                    </div>
                  </div>
                </span>
              </div>
            </td>
          </tr>
          <tr className="StatusTableRow__StyledTR-e2g14c-0 jqnhBp">
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__AircraftInfoTD-e2g14c-2 cRfxcD">
              <div className="AircraftInfo__Container-eu4ncm-0 hthRLX">
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 hlvgfP">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    className="svg-inline--fa fa-chevron-right fa-w-10 AircraftInfo__ArrowIcon-eu4ncm-7 ftyIGD"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    className="AircraftInfo__Callsign-eu4ncm-1 iyUctu overflowing"
                    href="/planes/1486"
                    target="_blank"
                  >
                    8Q-GAI
                  </a>
                  <p className="AircraftInfo__Model-eu4ncm-2 fPeUSf overflowing">
                    C150
                  </p>
                  <div className="AircraftInfo__Location-eu4ncm-3 llFbKE">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        className="svg-inline--fa fa-map-marker-alt fa-w-12 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        />
                      </svg>
                      <span className="AircraftInfo__AirportName-eu4ncm-4 jnYssG">
                        VRMG
                      </span>
                    </div>
                  </div>
                </div>
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 dacCLs">
                  <a
                    href="/planes/1486/edit"
                    target="_blank"
                    className="AnchorNoStyle__Anchor-n83gpd-0 geMVag AircraftInfo__StyledAnchor-eu4ncm-6 hMVNcG"
                  >
                    <div className="IconButton__StyledContainer-sc-1pf92mf-0 kcgjRx">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pencil-alt"
                        className="svg-inline--fa fa-pencil-alt fa-w-16 fa-fw "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        color="#08c"
                      >
                        <path
                          fill="currentColor"
                          d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 djLUrW">
              <div className="AircraftWarningsIndicator__StyledContainer-u7rmao-0 cffChx">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="wrench"
                      className="svg-inline--fa fa-wrench fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 0, left: "-10px" }}
                    >
                      2
                    </div>
                  </div>
                </span>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600593480000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      20.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">0:44</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">0.90</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600670092623}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      21.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">1832:57</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">3808.40</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1515628800000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      11.01.2018
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">1940.80</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">-984 days</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    -1867.60 hours
                  </p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 iYVlLT">
              <div className="RemarkInfo__StyledContainer-sc-1qi0q64-0 gxZFPz">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="comment"
                      className="svg-inline--fa fa-comment fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 5, color: "white" }}
                    >
                      0
                    </div>
                  </div>
                </span>
              </div>
            </td>
          </tr>
          <tr className="StatusTableRow__StyledTR-e2g14c-0 jqnhBp">
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__AircraftInfoTD-e2g14c-2 cRfxcD">
              <div className="AircraftInfo__Container-eu4ncm-0 hthRLX">
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 hlvgfP">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-right"
                    className="svg-inline--fa fa-chevron-right fa-w-10 AircraftInfo__ArrowIcon-eu4ncm-7 ftyIGD"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path
                      fill="currentColor"
                      d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    className="AircraftInfo__Callsign-eu4ncm-1 iyUctu overflowing"
                    href="/planes/1488"
                    target="_blank"
                  >
                    8Q-GAK
                  </a>
                  <p className="AircraftInfo__Model-eu4ncm-2 fPeUSf overflowing">
                    C152
                  </p>
                  <div className="AircraftInfo__Location-eu4ncm-3 llFbKE">
                    <div>
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="map-marker-alt"
                        className="svg-inline--fa fa-map-marker-alt fa-w-12 "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="currentColor"
                          d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"
                        />
                      </svg>
                      <span className="AircraftInfo__AirportName-eu4ncm-4 jnYssG">
                        VRMG
                      </span>
                    </div>
                  </div>
                </div>
                <div className="AircraftInfo__ButtonContainer-eu4ncm-5 dacCLs">
                  <a
                    href="/planes/1488/edit"
                    target="_blank"
                    className="AnchorNoStyle__Anchor-n83gpd-0 geMVag AircraftInfo__StyledAnchor-eu4ncm-6 hMVNcG"
                  >
                    <div className="IconButton__StyledContainer-sc-1pf92mf-0 kcgjRx">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="pencil-alt"
                        className="svg-inline--fa fa-pencil-alt fa-w-16 fa-fw "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        color="#08c"
                      >
                        <path
                          fill="currentColor"
                          d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                        />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 djLUrW">
              <div className="AircraftWarningsIndicator__StyledContainer-u7rmao-0 cffChx">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="wrench"
                      className="svg-inline--fa fa-wrench fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M507.73 109.1c-2.24-9.03-13.54-12.09-20.12-5.51l-74.36 74.36-67.88-11.31-11.31-67.88 74.36-74.36c6.62-6.62 3.43-17.9-5.66-20.16-47.38-11.74-99.55.91-136.58 37.93-39.64 39.64-50.55 97.1-34.05 147.2L18.74 402.76c-24.99 24.99-24.99 65.51 0 90.5 24.99 24.99 65.51 24.99 90.5 0l213.21-213.21c50.12 16.71 107.47 5.68 147.37-34.22 37.07-37.07 49.7-89.32 37.91-136.73zM64 472c-13.25 0-24-10.75-24-24 0-13.26 10.75-24 24-24s24 10.74 24 24c0 13.25-10.75 24-24 24z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 0, left: "-10px" }}
                    >
                      1
                    </div>
                  </div>
                </span>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1584173400000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      14.03.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">2:26</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">2.60</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1600670092623}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      21.09.2020
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">927:13</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">4126.10</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    <time
                      dateTime={1546214400000}
                      className="SettingsFormattedDate__StyledMoment-sc-1e221sn-0 ilzBkV"
                    >
                      31.12.2018
                    </time>
                  </p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">3207.30</p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__InfoColumnTD-e2g14c-3 DIXFM">
              <div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Date"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="calendar-alt"
                      className="svg-inline--fa fa-calendar-alt fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">-630 days</p>
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 cyChIS">
                  <div
                    title="Airborne time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="far"
                      data-icon="stopwatch"
                      className="svg-inline--fa fa-stopwatch fa-w-14 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M393.9 184l22.6-22.6c4.7-4.7 4.7-12.3 0-17l-17-17c-4.7-4.7-12.3-4.7-17 0l-20.7 20.7c-31.1-27.5-70.4-45.9-113.8-50.8V48h28c6.6 0 12-5.4 12-12V12c0-6.6-5.4-12-12-12H172c-6.6 0-12 5.4-12 12v24c0 6.6 5.4 12 12 12h28v49.4C96.4 109.3 16 197.2 16 304c0 114.9 93.1 208 208 208s208-93.1 208-208c0-44.7-14.1-86.1-38.1-120zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm12-112h-24c-6.6 0-12-5.4-12-12V204c0-6.6 5.4-12 12-12h24c6.6 0 12 5.4 12 12v136c0 6.6-5.4 12-12 12z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw" />
                </div>
                <div className="InfoRow__StyledContainer-sc-1wwtmjb-0 hYOzNR">
                  <div
                    title="Tacho time"
                    className="MaintenanceIcon__Container-h5r529-0 bqFTou InfoRow__StyledIcon-sc-1wwtmjb-2 hzlMVL"
                  >
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="tachometer-alt-fast"
                      className="svg-inline--fa fa-tachometer-alt-fast fa-w-18 fa-fw MaintenanceIcon__StyledFAIcon-h5r529-1 dNLOUg"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      fontSize="15px"
                    >
                      <path
                        fill="currentColor"
                        d="M288 32C128.94 32 0 160.94 0 320c0 52.8 14.25 102.26 39.06 144.8 5.61 9.62 16.3 15.2 27.44 15.2h443c11.14 0 21.83-5.58 27.44-15.2C561.75 422.26 576 372.8 576 320c0-159.06-128.94-288-288-288zm0 64c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zM96 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm48-160c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm199.12 192H232.88c-5.5-9.45-8.88-20.28-8.88-32 0-35.35 28.65-64 64-64 5.65 0 11.02.96 16.24 2.34L412.8 177.59c7.98-10.56 23-12.72 33.61-4.8 10.59 7.95 12.75 23 4.8 33.61L342.65 351.14c5.81 9.63 9.35 20.79 9.35 32.86 0 11.72-3.38 22.55-8.88 32zM480 384c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32z"
                      />
                    </svg>
                  </div>
                  <p className="InfoRow__Info-sc-1wwtmjb-1 hrHksw">
                    -918.80 hours
                  </p>
                </div>
              </div>
            </td>
            <td className="StatusTableRow__StyledTD-e2g14c-1 StatusTableRow__IndicationTD-e2g14c-4 iYVlLT">
              <div className="RemarkInfo__StyledContainer-sc-1qi0q64-0 gxZFPz">
                <span className="StatusIndicationButton__StyledContainer-sc-11yc0yg-0 RzAez">
                  <div className="StatusIndicationButton__Style-sc-11yc0yg-1 bULVrF">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="comment"
                      className="svg-inline--fa fa-comment fa-w-16 StatusIndicationButton__StyledIcon-sc-11yc0yg-2 kWeMz"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ fontSize: 30 }}
                    >
                      <path
                        fill="currentColor"
                        d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"
                      />
                    </svg>
                    <div
                      className="StatusIndicationButton__ValueContainer-sc-11yc0yg-3 LrhEm"
                      style={{ top: 5, color: "white" }}
                    >
                      0
                    </div>
                  </div>
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );

  function doLogout() {
    history.push("/Login");
    userHasAuthenticated(false);
  }

  const fetchData = () => {
    // fetch("")
    //   .then((response) => response.json)
    //   .then((responseData) => setuserRecords(responseData))
    //   .catch((e) => e);
    setuserRecords(users);
  };

  useEffect(fetchData, []);

  // const getdata = userRecords.map((user) => (
  //   <tr>
  //     <td>{user.aircraft}</td>
  //     <td>{user.warning}</td>
  //     <td>{user.lastflight}</td>
  //     <td>{user.current}</td>
  //     <td>{user.nextservice}</td>
  //     <td>{user.servicedue}</td>
  //     <td>{user.remarks}</td>
  //   </tr>
  // ));

  return (
    <div className="main-body">
      {isAuthenticated ? (
        <div className="sub-body">
          <div className="title">
         
          </div>
          <div className="body1">
            <div className="body0"></div>
            <div className="body00"></div>

            <div className="body2">
              <Collapse onChange={callback}>
                <Panel
                  style={{ fontWeight: "bold" }}
                  header="Aircraft Status"
                  key="1"
                >
                  {aircraftstatustable}
                </Panel>
              </Collapse>
            </div>
            <div className="body3">
              <Table>
                <ColumnGroup title="My Bokkings"></ColumnGroup>
              </Table>
            </div>
            <div className="body4">
              <Table dataSource={postArray}>
                <ColumnGroup title="Wall posts">
                  <Column title="Title" dataIndex="title" key="title" />
                  <Column title="Post" dataIndex="post" key="post" />
                </ColumnGroup>
              </Table>
              <Addpost
                postArray={postArray}
                setPostArray={(data) => setPostArray(data)}
              />
            </div>
          </div>
        </div>
      ) : (
        history.push("/")
      )}
    </div>
  );
}
export default Home;
