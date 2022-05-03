import React, { useState } from "react";


import "../../../ReportsComponent/AircraftreportComponent/BookingStatisticComponent/BookingStatistic.css";
import { Row, Col, Button, Dropdown, Menu } from "antd";
import { DatePicker, Space } from "antd";
import moment from "moment";
import { Select, Radio } from "antd";
import {
  CaretDownOutlined,
  DownloadOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileTextOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Chart, Interval, Tooltip, Axis, Coordinate } from "bizcharts";

const { Option } = Select;

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];

export default function BookingStatistic() {
  const [size, setsize] = useState();
  const [optionvalue, setoptionvalue] = useState();

  //  const handleSizeChange = (e) => {
  //         this.setState({ size: e.target.value });
  //       };

  function handleChange(value) {
    setoptionvalue(value);
    console.log(`Selected: ${value}`);
  }

  const pdf = () => (
    <Menu>
      <Menu.Item key="0">
        <Button>
          <FilePdfOutlined />
          PDF..
        </Button>
      </Menu.Item>
      <Menu.Item key="1">
        <Button>
          <FileExcelOutlined />
          XML
        </Button>
      </Menu.Item>
      <Menu.Item key="2">
        <Button>
          <FileTextOutlined />
          CSV (Excel)
        </Button>
      </Menu.Item>
    </Menu>
  );

  const data = [
    { item: "Avg. Preflight", percent: 0.32 },
    { item: "Block", percent: 0.68 },
  ];
  const data1 = [
    { item: "Avg. Preflight", percent: 0.23 },
    { item: "Block", percent: 0.49 },
    { item: "Avg. Postflight", percent: 0.02 },
    { item: "Weather", percent: 0.22 },
    { item: "Instructor", percent: 0.02 },
    { item: "Students", percent: 0.02 },
  ];
  const data2 = [
    { item: "Avg. Preflight", percent: 0.28 },
    { item: "Block", percent: 0.58 },
    { item: "Weather", percent: 0.15 },
  ];
  const data3 = [
    { item: "Avg. Preflight", percent: 0.29 },
    { item: "Block", percent: 0.62 },
    { item: "weather", percent: 0.07 },
    { item: "instructor", percent: 0.02 },
  ];
  const data4 = [
    { item: "Avg. Preflight", percent: 0.15 },
    { item: "Block", percent: 0.66 },
    { item: "Avg. Postflight", percent: 0.0 },
    { item: "Weather", percent: 0.04 },
    { item: "Aircraft/sim", percent: 0.01 },
    { item: "Instructor", percent: 0.04 },
    { item: "Students", percent: 0.05 },
    { item: "Academy", percent: 0.04 },
    { item: "Others", percent: 0.02 },
  ];
  const cols = {
    percent: {
      formatter: (val) => {
        val = val * 100 + "%";
        return val;
      },
    },
  };

  return (
    <div>
  
  
      <div>
        <Row gutter={[16, 16]}>
          <Col span={16} offset={4}>
            <h3 style={{ fontWeight: "bold" }}>Booking Statistic</h3>
          </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col span={16} offset={4}>
            <Row gutter={16} justify="space-between">
              <div style={{ display: "flex" }}>
                <Col>
                  <DatePicker
                    defaultValue={moment("2020.09.01", dateFormat)}
                    format={dateFormat}
                  />
                </Col>
                <Col>
                  <DatePicker
                    defaultValue={moment("2020.09.23", dateFormat)}
                    format={dateFormat}
                  />
                </Col>
                <Col>
                  <Select
                    defaultValue="Aircraft"
                    style={{ width: 200 }}
                    onChange={handleChange}
                  >
                    <Option value="Aircraft">Aircraft</Option>
                    <Option value="Instrutor,crew and Renter">
                      Instrutor,crew and Renter
                    </Option>
                  </Select>
                </Col>
                <Col>
                  <Button style={{ borderStyle: "outset" }}>
                    <SearchOutlined />
                    Find report
                  </Button>
                </Col>
              </div>
              <Col>
                <React.Fragment>
                  <Space size={size}>
                    <Button
                      type="dashed"
                      style={{ borderStyle: "outset", backgroundColor: "grey" }}
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
                  </Space>
                </React.Fragment>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col span={16} offset={4}>
            <table class="table table-condensed">
              <tbody>
                <tr>
                  <th colSpan={6}>Aircraft</th>
                </tr>
                <tr>
                  <th>Name</th>
                  <th>Bookings total</th>
                  <th>Completed</th>
                  <th>Cancelled</th>
                  <th>Avg. Preflight</th>
                  <th>Avg. Postflight</th>
                </tr>
                <tr>
                  <td>8Q-GAA</td>
                  <td>35:15</td>
                  <td>35:15 100.0%</td>
                  <td> 0.0%</td>
                  <td>0:48</td>
                  <td>-0:06</td>
                </tr>
                <tr>
                  <td>8Q-GAF</td>
                  <td>52:45</td>
                  <td>34:15 64.9%</td>
                  <td>18:30 35.1%</td>
                  <td>0:46</td>
                  <td>0:06</td>
                </tr>
                <tr>
                  <td>8Q-GAH</td>
                  <td>45:30</td>
                  <td>35:15 77.5%</td>
                  <td>10:15 22.5%</td>
                  <td>0:47</td>
                  <td>-0:07</td>
                </tr>
                <tr>
                  <td>8Q-GAI</td>
                  <td>50:45</td>
                  <td>44:15 87.2%</td>
                  <td>6:30 12.8%</td>
                  <td>0:47</td>
                  <td>-0:10</td>
                </tr>
                <tr>
                  <td>ELITE FNPT 2 - single</td>
                  <td>114:15</td>
                  <td>89:15 78.1%</td>
                  <td>25:00 21.9%</td>
                  <td>0:17</td>
                  <td>-0:00</td>
                </tr>
                <tr class="total">
                  <td>Total</td>
                  <td>298:30</td>
                  <td>238:15 79.8%</td>
                  <td>60:15 20.2%</td>
                  <td colspan="2"></td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row></Row>
        <Row>
          <Col offset={2} span={20}>
            <Row gutter={(16, 16)} className="chart-row">
              <div style={{ width: 500 }}>
                <Col>
                  <h2>8Q-GAA</h2>
                  <div>
                    <Chart height={400} data={data} scale={cols} autoFit>
                      <Coordinate type="theta" radius={0.75} />
                      <Tooltip showTitle={false} />
                      <Axis visible={false} />
                      <Interval
                        position="percent"
                        adjust="stack"
                        color="item"
                        style={{
                          lineWidth: 1,
                          stroke: "#fff",
                        }}
                        label={[
                          "*",
                          {
                            content: (data) => {
                              return `${data.item}: ${data.percent * 100}%`;
                            },
                          },
                        ]}
                      />
                    </Chart>
                  </div>
                </Col>
              </div>
              <div style={{ width: 600 }}>
                <Col>
                  <h2>8Q-GAF</h2>
                  <div>
                    <Chart height={400} data={data1} scale={cols} autoFit>
                      <Coordinate type="theta" radius={0.75} />
                      <Tooltip showTitle={false} />
                      <Axis visible={false} />
                      <Interval
                        position="percent"
                        adjust="stack"
                        color="item"
                        style={{
                          lineWidth: 1,
                          stroke: "#fff",
                        }}
                        label={[
                          "*",
                          {
                            content: (data) => {
                              return `${data.item}: ${data.percent * 100}%`;
                            },
                          },
                        ]}
                      />
                    </Chart>
                  </div>
                </Col>
              </div>
              <div style={{ width: 500 }}>
                <Col>
                  <h2>8Q-GAH</h2>
                  <div>
                    <Chart height={400} data={data2} scale={cols} autoFit>
                      <Coordinate type="theta" radius={0.75} />
                      <Tooltip showTitle={false} />
                      <Axis visible={false} />
                      <Interval
                        position="percent"
                        adjust="stack"
                        color="item"
                        style={{
                          lineWidth: 1,
                          stroke: "#fff",
                        }}
                        label={[
                          "*",
                          {
                            content: (data) => {
                              return `${data.item}: ${data.percent * 100}%`;
                            },
                          },
                        ]}
                      />
                    </Chart>
                  </div>
                </Col>
              </div>
              <div style={{ width: 600 }}>
                <Col>
                  <div>
                    <h2>8Q-GAI</h2>
                    <Chart height={400} data={data3} scale={cols} autoFit>
                      <Coordinate type="theta" radius={0.75} />
                      <Tooltip showTitle={false} />
                      <Axis visible={false} />
                      <Interval
                        position="percent"
                        adjust="stack"
                        color="item"
                        style={{
                          lineWidth: 1,
                          stroke: "#fff",
                        }}
                        label={[
                          "*",
                          {
                            content: (data) => {
                              return `${data.item}: ${data.percent * 100}%`;
                            },
                          },
                        ]}
                      />
                    </Chart>
                  </div>
                </Col>
              </div>
            </Row>
            <Row></Row>
            <Row gutter={(16, 16)} style={{ marginTop: 10 }}>
              <div style={{ width: 800 }}>
                <Col>
                  <h2>ELITE FNPT 2 - single</h2>
                  <div>
                    <Chart height={400} data={data4} scale={cols} autoFit>
                      <Coordinate type="theta" radius={0.75} />
                      <Tooltip showTitle={false} />
                      <Axis visible={false} />
                      <Interval
                        position="percent"
                        adjust="stack"
                        color="item"
                        style={{
                          lineWidth: 1,
                          stroke: "#fff",
                        }}
                        label={[
                          "*",
                          {
                            content: (data) => {
                              return `${data.item}: ${data.percent * 100}%`;
                            },
                          },
                        ]}
                      />
                    </Chart>
                  </div>
                </Col>
              </div>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}
