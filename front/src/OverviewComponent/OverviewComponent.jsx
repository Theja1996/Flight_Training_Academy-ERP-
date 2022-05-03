import React from "react";
import { Row, Col, Button, Slider } from "antd";
import { FaTh, FaFilter, FaCalendar } from "react-icons/fa";
import {
  MdRefresh,
  MdArrowBack,
  MdArrowForward,
  MdRemoveRedEye,
} from "react-icons/md";
import { Table } from "semantic-ui-react";
import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";

const aircafts = [
  { id: 1, title: "8Q-GAA/C150" },
  { id: 2, title: "8Q-GAB/C150" },
  { id: 3, title: "8Q-GAE/C150" },
  { id: 4, title: "8Q-GAF/C150" },
  { id: 5, title: "8Q-GAH/C150" },
  { id: 6, title: "8Q-GAI/C150" },
  { id: 7, title: "8Q-GAK/C152" },
  { id: 8, title: "8Q-GAM/C152" },
  { id: 9, title: "8Q-GAL/C150" },
  { id: 10, title: "8Q-GAJ/C172 N" },
  { id: 11, title: "8Q-GAD/C172 RG" },
];

export default function OverviewComponent() {
  const createMarks = (number) => {
    const obj = new Object();
    for (let index = 0; index < number; index++) {
      obj[`${index}`] = `${index}`;
    }

    return obj;
  };

  return (
    <React.Fragment>
      <Row
        style={{ padding: 5, margin: 15 }}
        align="middle"
        justify="space-between"
      >
        <Col xs={24} xl={12}>
          <Row align="middle" justify="space-between">
            <Button type="link" icon={<FaTh />} />
            <Button type="link">Today</Button>
            <Button type="link" icon={<MdRefresh />} />
            <Button type="link" icon={<MdArrowBack />} />
            <Button type="link" icon={<MdArrowForward />} />
            <Button type="link" icon={<FaCalendar />} />
            <Button type="link" icon={<MdRemoveRedEye />} />
            <Button type="link" icon={<FaFilter />} />
            <Slider
              style={{ width: "100%" }}
              marks={createMarks(24)}
              min={0}
              max={23}
              defaultValue={0}
              included
              //onChange={(value) => setRange(value)}
            />
          </Row>
        </Col>
        <Col xs={24} xl={12}>
          <h2>{new Date().toString().slice(0, 15)}</h2>
        </Col>
      </Row>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Aircraft</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
      <Timeline
        onItemClick={(itemId, e, time) => console.log(itemId)}
        //onCanvasClick={(grouId, time, e) => createBooking(grouId, time, e)}
        groups={aircafts}
        items={[]}
        visibleTimeEnd={moment().add(24 - new Date().getHours(), "hour")}
        visibleTimeStart={moment().add(-new Date().getHours() - 1, "hour")}
      />
    </React.Fragment>
  );
}
