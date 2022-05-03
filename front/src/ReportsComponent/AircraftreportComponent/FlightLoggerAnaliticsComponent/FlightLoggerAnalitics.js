import { Col, Row } from "antd";
import React from "react";


import "../../../ReportsComponent/AircraftreportComponent/FlightLoggerAnaliticsComponent/FlightLoggerAnalitics.css";
import {
  Chart,
  Geom,
  Axis,
  Tooltip,
  Legend,
  Annotation,
  Guide,
  DonutChart,
  Interval,
} from "bizcharts";

const { Line } = Guide;

export default function FlightLoggerAnalitics() {
  const studentactivity = [
    { year: "september 2020", sales: 38 },
    { year: "october 2020", sales: 52 },
    { year: "november 2020", sales: 61 },
    { year: "december 2020", sales: 45 },
  ];

  const bookingtype = [
    {
      type: "operation",
      value: 45,
    },
    {
      type: "Single Students",
      value: 25,
    },

    {
      type: "Class theory",
      value: 23,
    },
    {
      type: "Other",
      value: 10,
    },
  ];

  const flighttype = [
    {
      type: "operation",
      value: 88,
    },
    {
      type: "Lession",
      value: 10,
    },
  ];

  const theorytype = [
    {
      type: "Prograss test",
      value: 4,
    },
    {
      type: "exam",
      value: 9,
    },
  ];

  const programused = [
    {
      type: "BAK",
      value: 10,
    },
    {
      type: "CPL IR(A)",
      value: 80,
    },
    {
      type: "ME CPL",
      value: 12,
    },
    {
      type: "PPL(A)",
      value: 8,
    },
    {
      type: "Others",
      value: 11,
    },
  ];

  const bookingperweek = [
    {
      month: "2020-09-13",
      city: "Flights",
      revenue: 33,
    },
    {
      month: "2020-09-20",
      city: "Maintanence",
      revenue: 10,
    },
    {
      month: "2020-10-14",
      city: "Meeting",
      revenue: 2,
    },
    {
      month: "2020-10-14",
      city: "Theory",
      revenue: 9,
    },
    {
      month: "2020-10-15",
      city: "Flights",
      revenue: 45,
    },
    {
      month: "2020-10-15",
      city: "Maintanence",
      revenue: 20,
    },
    {
      month: "2020-10-16",
      city: "Meeting",
      revenue: 15,
    },
    {
      month: "2020-11-16",
      city: "Theory",
      revenue: 5,
    },
    {
      month: "2020-11-17",
      city: "Meeting",
      revenue: 30,
    },
    {
      month: "2020-11-17",
      city: "Maintanence",
      revenue: 28,
    },
    {
      month: "2020-11-18",
      city: "Flights",
      revenue: 35,
    },
    {
      month: "2020-12-18",
      city: "Flights",
      revenue: 24,
    },
    {
      month: "2020-12-19",
      city: "Maintanence",
      revenue: 12,
    },
    {
      month: "2020-12-19",
      city: "Theory",
      revenue: 6,
    },
  ];
  const scale = {
    revenue: {
      range: [0, 1],
      ticks: [0, 20, 40, 60, 80, 100],
    },
    month: {
      range: [0.2, 0.95],
    },
  };
  const guide = {
    type: "line",
    start: {
      month: "2020-07-14",
      revenue: "0",
    },
    end: {
      month: "2020-07-14",
      revenue: "1",
    },
    lineStyle: {
      stroke: "#999",
      lineDash: [0, 1, 1],
      lineWidth: 1,
    },
    text: {
      position: "start",
      autoRotate: true,
      style: {
        fill: "red",
      },
      offsetX: 20,
      offsetY: -20,
      content: "待测试",
    },
  };

  const flightperweek = [
    {
      month: "2020-09-13",
      city: "Operation",
      revenue: 33,
    },
    {
      month: "2020-09-20",
      city: "Lession",
      revenue: 10,
    },
    {
      month: "2020-10-14",
      city: "Operation",
      revenue: 2,
    },
    {
      month: "2020-10-14",
      city: "Lession",
      revenue: 9,
    },
    {
      month: "2020-10-15",
      city: "Operation",
      revenue: 45,
    },
    {
      month: "2020-10-15",
      city: "Lession",
      revenue: 20,
    },
    {
      month: "2020-10-16",
      city: "Operation",
      revenue: 15,
    },
    {
      month: "2020-11-16",
      city: "Lession",
      revenue: 5,
    },
    {
      month: "2020-11-17",
      city: "Operation",
      revenue: 30,
    },
    {
      month: "2020-11-17",
      city: "Lession",
      revenue: 28,
    },
    {
      month: "2020-11-18",
      city: "Operation",
      revenue: 35,
    },
    {
      month: "2020-12-18",
      city: "Lession",
      revenue: 24,
    },
    {
      month: "2020-12-19",
      city: "Operation",
      revenue: 12,
    },
    {
      month: "2020-12-19",
      city: "Lession",
      revenue: 6,
    },
  ];
  const scale2 = {
    revenue: {
      range: [0, 1],
      ticks: [0, 20, 40, 60, 80],
    },
    month: {
      range: [0.2, 0.95],
    },
  };

  const theoryperweek = [
    {
      month: "2020-09-13",
      city: "Exam",
      revenue: 9,
    },
    {
      month: "2020-12-10",
      city: "Prograss test",
      revenue: 1,
    },
    {
      month: "2020-12-12",
      city: "Prograss test",
      revenue: 2,
    },
    {
      month: "2020-12-31",
      city: "Prograss test",
      revenue: 1,
    },
  ];
  const scale3 = {
    revenue: {
      range: [0, 1],
      ticks: [0, 2, 4, 6, 8, 10],
    },
    month: {
      range: [0.2, 0.95],
    },
  };

  return (
    <div>
    
    

      <Row style={{ marginTop: 30 }}>
        <Col span={20} offset={2}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>FlightLogger Analitics</h2>
            <p>Date filter</p>
          </div>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12} offset={2} style={{ borderStyle: "outset" }}>
          <p>Booking per week</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Chart height={400} data={bookingperweek} scale={scale} forceFit>
              <Legend />
              <Axis name="month" />
              <Axis
                name="revenue"
                label={{
                  formatter: (val) => `${val}`,
                }}
              />
              <Tooltip showCrosshairs shared />
              <Geom
                type="line"
                tooltip={[
                  "revenue*city",
                  (value, name) => {
                    return {
                      value: `${value.toFixed(3)}`,
                      name,
                    };
                  },
                ]}
                position="month*revenue"
                size={2}
                color={"city"}
              />
              <Geom
                type="point"
                tooltip={false}
                position="month*revenue"
                size={4}
                shape={"circle"}
                color={"city"}
                style={{
                  stroke: "black",
                  lineWidth: 1,
                }}
              />
              <Guide>
                <Line
                  start={{
                    month: "2020-09-14",
                    revenue: "0",
                  }}
                  end={{
                    month: "2020-09-25",
                    revenue: "20",
                  }}
                  lineStyle={{
                    stroke: "#999",
                    lineDash: [0, 1, 1],
                    lineWidth: 1,
                  }}
                  text={{
                    position: "start",
                    autoRotate: false,
                    style: {
                      fill: "red",
                    },
                    offsetX: 20,
                    offsetY: -20,
                    content: "",
                  }}
                />
              </Guide>
              <Annotation.Text
                position={["50%", "50%"]}
                alignX="middle"
                alignY="middle"
                html={`<div style="color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;">项目总数<br><span style="color:red;font-size:2.5em;">${200}</span></div>`}
              />
            </Chart>
          </div>
        </Col>
        <Col span={8} style={{ borderStyle: "outset", marginRight: 20 }}>
          <p>Booking types</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DonutChart
              data={bookingtype || []}
              title={{
                visible: true,
                text: "",
              }}
              forceFit
              description={{
                visible: true,
                text: "",
              }}
              radius={0.8}
              padding="auto"
              angleField="value"
              colorField="type"
              pieStyle={{ stroke: "white", lineWidth: 5 }}
            />
          </div>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12} offset={2} style={{ borderStyle: "outset" }}>
          <p>Flights per week</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Chart height={400} data={flightperweek} scale={scale2} forceFit>
              <Legend />
              <Axis name="month" />
              <Axis
                name="revenue"
                label={{
                  formatter: (val) => `${val}`,
                }}
              />
              <Tooltip showCrosshairs shared />
              <Geom
                type="line"
                tooltip={[
                  "revenue*city",
                  (value, name) => {
                    return {
                      value: `${value.toFixed(3)}`,
                      name,
                    };
                  },
                ]}
                position="month*revenue"
                size={2}
                color={"city"}
              />
              <Geom
                type="point"
                tooltip={false}
                position="month*revenue"
                size={4}
                shape={"circle"}
                color={"city"}
                style={{
                  stroke: "black",
                  lineWidth: 1,
                }}
              />
              <Guide>
                <Line
                  start={{
                    month: "2020-09-14",
                    revenue: "0",
                  }}
                  end={{
                    month: "2020-09-25",
                    revenue: "20",
                  }}
                  lineStyle={{
                    stroke: "#999",
                    lineDash: [0, 1, 1],
                    lineWidth: 1,
                  }}
                  text={{
                    position: "start",
                    autoRotate: false,
                    style: {
                      fill: "red",
                    },
                    offsetX: 20,
                    offsetY: -20,
                    content: "",
                  }}
                />
              </Guide>
              <Annotation.Text
                position={["50%", "50%"]}
                alignX="middle"
                alignY="middle"
                html={`<div style="color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;">项目总数<br><span style="color:red;font-size:2.5em;">${200}</span></div>`}
              />
            </Chart>
          </div>
        </Col>

        <Col span={8} style={{ borderStyle: "outset", marginRight: 20 }}>
          <p>Flight types</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DonutChart
              data={flighttype || []}
              title={{
                visible: true,
                text: "",
              }}
              forceFit
              description={{
                visible: true,
                text: "",
              }}
              radius={0.8}
              padding="auto"
              angleField="value"
              colorField="type"
              pieStyle={{ stroke: "white", lineWidth: 5 }}
            />
          </div>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12} offset={2} style={{ borderStyle: "outset" }}>
          <p>Theory per week</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Chart height={400} data={theoryperweek} scale={scale3} forceFit>
              <Legend />
              <Axis name="month" />
              <Axis
                name="revenue"
                label={{
                  formatter: (val) => `${val}`,
                }}
              />
              <Tooltip showCrosshairs shared />
              <Geom
                type="line"
                tooltip={[
                  "revenue*city",
                  (value, name) => {
                    return {
                      value: `${value.toFixed(3)}`,
                      name,
                    };
                  },
                ]}
                position="month*revenue"
                size={2}
                color={"city"}
              />
              <Geom
                type="point"
                tooltip={false}
                position="month*revenue"
                size={4}
                shape={"circle"}
                color={"city"}
                style={{
                  stroke: "black",
                  lineWidth: 1,
                }}
              />
              <Guide>
                <Line
                  start={{
                    month: "2020-09-14",
                    revenue: "0",
                  }}
                  end={{
                    month: "2020-09-25",
                    revenue: "20",
                  }}
                  lineStyle={{
                    stroke: "#999",
                    lineDash: [0, 1, 1],
                    lineWidth: 1,
                  }}
                  text={{
                    position: "start",
                    autoRotate: false,
                    style: {
                      fill: "red",
                    },
                    offsetX: 20,
                    offsetY: -20,
                    content: "",
                  }}
                />
              </Guide>
              <Annotation.Text
                position={["50%", "50%"]}
                alignX="middle"
                alignY="middle"
                html={`<div style="color:#8c8c8c;font-size:1.16em;text-align: center;width: 10em;">项目总数<br><span style="color:red;font-size:2.5em;">${200}</span></div>`}
              />
            </Chart>
          </div>
        </Col>
        <Col span={8} style={{ borderStyle: "outset", marginRight: 20 }}>
          <p>theory types</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DonutChart
              data={theorytype || []}
              title={{
                visible: true,
                text: "",
              }}
              forceFit
              description={{
                visible: true,
                text: "",
              }}
              radius={0.8}
              padding="auto"
              angleField="value"
              colorField="type"
              pieStyle={{ stroke: "white", lineWidth: 5 }}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={16} style={{ marginTop: 20 }}>
        <Col span={12} offset={2} style={{ borderStyle: "outset" }}>
          <p>Active students per month</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Chart height={300} autoFit data={studentactivity}>
              <Interval position="year*sales" />
            </Chart>
          </div>
        </Col>
        <Col span={8} style={{ borderStyle: "outset", marginRight: 20 }}>
          <p>Programs used</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DonutChart
              data={programused || []}
              title={{
                visible: true,
                text: "",
              }}
              forceFit
              description={{
                visible: true,
                text: "",
              }}
              radius={0.8}
              padding="auto"
              angleField="value"
              colorField="type"
              pieStyle={{ stroke: "white", lineWidth: 5 }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
