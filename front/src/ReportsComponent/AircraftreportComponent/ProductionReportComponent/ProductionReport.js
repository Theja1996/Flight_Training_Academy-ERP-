import React from "react";
import "../../../ReportsComponent/AircraftreportComponent/ProductionReportComponent/ProductionReport.css";
import {
  CaretDownOutlined,
  DownloadOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileTextOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  DatePicker,
  Dropdown,
  Menu,
  Row,
  Select,
  Space,
  Divider,
  Checkbox,
} from "antd";
import { useState } from "react";

import { Chart, Interval, Tooltip, Axis, Coordinate } from "bizcharts";
const { Option } = Select;

const { RangePicker } = DatePicker;

const dateFormat = "YYYY/MM/DD";
const monthFormat = "YYYY/MM";

const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY"];
export default function ProductionReport() {
  const [size, setsize] = useState();
  const [optionvalue, setoptionvalue] = useState();
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");

  function onstartdate(date, dateString) {
    setstartdate(dateString);
    console.log(date, dateString, startdate);
  }

  function onenddate(date, dateString) {
    setenddate(dateString);
    console.log(date, dateString);
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
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

  const data2 = [
    { item: "ELITE FNPT 2 - single", percent: 0.67 },
    { item: "8Q-GAF", percent: 0.26 },
    { item: "8Q-GAG", percent: 0.07 },
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
            <h3 style={{ fontWeight: "bold" }}>
              Production report for{startdate.concat(" - ")}
              {enddate}
            </h3>
          </Col>
        </Row>
        <Divider></Divider>
        <Row style={{ marginTop: 10 }}>
          <Col span={16} offset={4}>
            <Row gutter={16} justify="space-between">
              <div style={{ display: "flex" }}>
                <Col>
                  <DatePicker onChange={onstartdate} />
                </Col>
                <Col>
                  <DatePicker onChange={onenddate} />
                </Col>
                <Col>
                  <Select
                    defaultValue="Income"
                    style={{ width: 120 }}
                    onChange={handleChange}
                  >
                    <Option value="Aircraft">Aircraft</Option>
                    <Option value="Business">Business</Option>
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

        <Row style={{ marginTop: 20 }}>
          <Col span={16} offset={4}>
            <div style={{ display: "flex" }}>
              <h4 style={{ fontWeight: "bold" }}>Total Block 123:29</h4>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: 10 }}>
          <Col span={12} offset={4}>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
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
              <div>
                <p>ELITE FNPT 2 - single 82.59 block</p>
                <p>8Q-GAF - 32:00 block</p>
                <p>8Q-GAG - 08:30 block</p>
              </div>
            </div>
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
          <Col span={16} offset={4}>
            <table className="table table-condensed">
              <tbody>
                <tr>
                  <th colSpan={2}>ELITE FNPT 2 - single</th>
                </tr>
                <tr>
                  <th style={{ width: 300 }}>Movements</th>
                  <th>Block</th>
                </tr>
                <tr className="odd">
                  <td className="table-row-color">CPL IR(A)</td>
                  <td className="table-row-color">82:59</td>
                </tr>
                <tr className="total">
                  <td>Total</td>
                  <td>82:59</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col span={16} offset={4}>
            <table className="table table-condensed">
              <tbody>
                <tr>
                  <th colSpan={2}>8Q-GAF</th>
                </tr>
                <tr>
                  <th style={{ width: 300 }}>Movements</th>
                  <th>Block</th>
                </tr>
                <tr className="even">
                  <td className="table-row-color">CPL IR(A)</td>
                  <td className="table-row-color">30:48</td>
                </tr>
                <tr className="odd">
                  <td className="table-row-color">SCT</td>
                  <td className="table-row-color">1:00</td>
                </tr>
                <tr className="even">
                  <td className="table-row-color">Ground run</td>
                  <td className="table-row-color">0:12</td>
                </tr>
                <tr className="total">
                  <td>Total</td>
                  <td>32:00</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col span={16} offset={4}>
            <table className="table table-condensed">
              <tbody>
                <tr>
                  <th colSpan={2}>8Q-GAG</th>
                </tr>
                <tr>
                  <th style={{ width: 300 }}>Movements</th>
                  <th>Block</th>
                </tr>
                <tr className="odd">
                  <td className="table-row-color">ME-IR(MCAA)</td>
                  <td className="table-row-color">4:42</td>
                </tr>
                <tr className="even">
                  <td className="table-row-color">ME</td>
                  <td className="table-row-color">1:42</td>
                </tr>
                <tr className="odd">
                  <td className="table-row-color">SCT</td>
                  <td className="table-row-color">1:18</td>
                </tr>
                <tr className="even">
                  <td className="table-row-color">Test Flight</td>
                  <td className="table-row-color">0:42</td>
                </tr>
                <tr className="odd">
                  <td className="table-row-color">Ground run</td>
                  <td className="table-row-color">0:06</td>
                </tr>
                <tr className="total">
                  <td>Total</td>
                  <td>8:30</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </div>
    </div>
  );
}
