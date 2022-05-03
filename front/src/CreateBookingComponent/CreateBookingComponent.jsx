import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Slider,
  Modal,
  Select,
  Form,
  Upload,
  DatePicker,
  Input,
  Checkbox,
} from "antd";
import {
  FaTh,
  FaFilter,
  FaCalendar,
  FaPlus,
  FaExternalLinkAlt,
  FaTimes,
  FaCheck,
  FaShare,
} from "react-icons/fa";
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

import "./styles.css";

const OPTIONS = [
  "Instructor 1",
  "Instructor 2",
  "Instructor 3",
  "Instructor 4",
  "Instructor 5",
  "Instructor 6",
];

const OPTIONS2 = [
  "Students 1",
  "Students 2",
  "Students 3",
  "Students 4",
  "Students 5",
  "Students 6",
];

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

const classrooms = [
  { id: 1, title: "Lecture Room 1" },
  { id: 2, title: "Lecture Room 2" },
  { id: 3, title: "Lecture Room 3" },
  { id: 4, title: "Flight breifing room" },
  { id: 5, title: "Board room" },
];

const instructorAndCrews = [
  { id: 1, title: "Instructor 1" },
  { id: 2, title: "Instructor 2" },
  { id: 3, title: "Instructor 3" },
  { id: 4, title: "Instructor 4" },
  { id: 5, title: "Instructor 5" },
];

const { Option, OptGroup } = Select;
const { Dragger } = Upload;
const { TextArea } = Input;

export default function CreateBookingComponent() {
  console.log(moment());
  const [dataItem, setDataItem] = useState([]);
  const [dataItem2, setDataItem2] = useState([]);
  const [dataItem3, setDataItem3] = useState([]);

  const [visible, setVisible] = useState(false);

  const [addCrew, setAddCrew] = useState(false);

  const handleClose = () => setVisible(false);

  const handleOpen = () => setVisible(true);

  const [form] = Form.useForm();

  const [type, setType] = useState("");
  const [instructor, setInstructor] = useState("");
  const [student1, setStudent1] = useState("");
  const [student2, setStudent2] = useState("");
  const [visibleObserver, setVisibleOberserver] = useState(false);
  const [aircraft, setAirCraft] = useState();
  const [startTime, setStartTime] = useState();
  const [EndTime, setEndTime] = useState();
  const [groupId, setGroupId] = useState(0);
  const [range, setRange] = useState(0);
  const [classroomId, setClassroomId] = useState(0);
  const [visibleClassroomModal, setVisibleClassroomModal] = useState(false);
  const [classroomType, setClassroomType] = useState("");
  const [visibleAdditional, setVisibleAdditional] = useState(false);

  const createBooking = (grouId, time, e) => {
    setGroupId(grouId);
    setAirCraft(aircafts.filter((item) => item.id === grouId)[0].title);
    handleOpen();
  };

  const createClassroomBooking = (id) => {
    setClassroomId(id);
    setVisibleClassroomModal(true);
  };

  const handleCreate = () => {
    handleClose();
    const item = {
      id: groupId,
      group: groupId,
      title: type === "2" ? student1 + " " + student2 : student1,
      start_time: startTime,
      end_time: EndTime,
    };
    setDataItem([...dataItem, ...[item]]);
  };

  const createMarks = (number) => {
    const obj = new Object();
    for (let index = 0; index < number; index++) {
      obj[`${index}`] = `${index}`;
    }

    return obj;
  };

  const filteredOptions = OPTIONS.filter((o) => !instructor.includes(o));
  const filteredOptions2 = OPTIONS2.filter((o) => !student1.includes(o));

  return (
    <React.Fragment>
      <Modal
        visible={visibleClassroomModal}
        title="New Booking"
        onCancel={() => setVisibleClassroomModal(false)}
        footer={[]}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Choose type">
            <Select
              onChange={(value) => setClassroomType(value)}
              defaultValue=""
            >
              <Option value=""> </Option>
              <Option value="1">Class Theory</Option>
              <Option value="2">Progress Test</Option>
              <Option value="3">Theory Release</Option>
              <Option value="4">Exam</Option>
              <Option value="5">Meeting</Option>
              <Option value="6">Extra Theory</Option>
              <Option value="7">Type Questionaire</Option>
            </Select>
          </Form.Item>
          {classroomType && (
            <>
              <Form.Item label="Documents">
                <Row align="middle" justify="space-between">
                  <Upload>
                    <Button
                      icon={
                        <FaPlus
                          className="anticon"
                          style={{ color: "green" }}
                        />
                      }
                      type="ghost"
                    >
                      Add Document
                    </Button>
                  </Upload>

                  <Dragger>
                    <p className="ant-upload-text">
                      Or drag file to this area to upload
                    </p>
                  </Dragger>
                </Row>
              </Form.Item>
              <Form.Item label="Course Theory">
                <Select>
                  <Option value="Course Theory 1">Course Theory 1</Option>
                  <Option value="Course Theory 2">Course Theory 2</Option>
                  <Option value="Course Theory 3">Course Theory 3</Option>
                  <Option value="Course Theory 4">Course Theory 4</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Course Category">
                <Select>
                  <Option value="Course Category 1">Course Category 1</Option>
                  <Option value="Course Category 2">Course Category 2</Option>
                  <Option value="Course Category 3">Course Category 3</Option>
                  <Option value="Course Category 4">Course Category 4</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Instructor">
                <Select>
                  <Option value="Instructor 1">Instructor 1</Option>
                  <Option value="Instructor 2">Instructor 2</Option>
                  <Option value="Instructor 3">Instructor 3</Option>
                  <Option value="Instructor 4">Instructor 4</Option>
                </Select>
              </Form.Item>

              <Form.Item label="Classroom">
                <Select>
                  {classrooms.map((item, index) => (
                    <Option key={index} value={item.title}>
                      {item.title}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Row align="middle" justify="space-between">
                <Form.Item label="Start">
                  <DatePicker showTime />
                </Form.Item>

                <Form.Item label="End">
                  <DatePicker showTime />
                </Form.Item>
              </Row>
              <Form.Item label="Subject">
                <Input />
              </Form.Item>
              <Form.Item label="Comment">
                <TextArea rows={4} />
              </Form.Item>

              <Form.Item label="Class">
                <Select>
                  <Option value="Class 1">Class 1</Option>
                  <Option value="Class 2">Class 2</Option>
                  <Option value="Class 3">Class 3</Option>
                  <Option value="Class 4">Class 4</Option>
                </Select>
              </Form.Item>
              <Button
                onClick={() => setVisibleAdditional(!visibleAdditional)}
                icon={<FaPlus className="anticon" style={{ color: "green" }} />}
              >
                Add Additional Students
              </Button>
              {visibleAdditional && (
                <Form.Item label="Students">
                  <Select mode="multiple" style={{ height: 50 }}>
                    <Option value="Student 1">Student 1</Option>
                    <Option value="Student 2">Student 2</Option>
                    <Option value="Student 3">Student 3</Option>
                    <Option value="Student 4">Student 4</Option>
                  </Select>
                </Form.Item>
              )}

              <Form.Item>
                <Checkbox>Notify via email</Checkbox>
              </Form.Item>

              <Form.Item>
                <Row align="middle">
                  <Button
                    onClick={handleCreate}
                    style={{ marginRight: 20 }}
                    type="ghost"
                    icon={
                      <FaCheck className="anticon" style={{ color: "green" }} />
                    }
                  >
                    Create
                  </Button>

                  <Button
                    type="ghost"
                    icon={
                      <FaShare
                        className="anticon"
                        style={{ color: "#5bc0de" }}
                      />
                    }
                  >
                    Create and Reuse
                  </Button>
                </Row>
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>

      <Modal
        visible={visible}
        title="New booking"
        onCancel={handleClose}
        footer={[]}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Choose type">
            <Select onChange={(value) => setType(value)} defaultValue="">
              <Option value=""> </Option>
              <Option value="1">Single Student</Option>
              <Option value="2">Multi Student</Option>
              <Option value="3">Rental</Option>
              <Option value="4">Opearation</Option>
              <Option value="5">Maintainance</Option>
            </Select>
          </Form.Item>
          {type && (
            <>
              <Form.Item label="Documents">
                <Row align="middle" justify="space-between">
                  <Upload>
                    <Button
                      icon={
                        <FaPlus
                          className="anticon"
                          style={{ color: "green" }}
                        />
                      }
                      type="ghost"
                    >
                      Add Document
                    </Button>
                  </Upload>

                  <Dragger>
                    <p className="ant-upload-text">
                      Or drag file to this area to upload
                    </p>
                  </Dragger>
                </Row>
              </Form.Item>

              {type === "1" || type === "2" ? (
                <>
                  <Form.Item label="Instructor">
                    <Row align="middle">
                      <Select
                        style={{ width: "85%" }}
                        value={instructor}
                        onChange={(value) => setInstructor(value)}
                      >
                        {filteredOptions.map((item, index) => (
                          <Option value={item} key={index}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                      {instructor && (
                        <Button
                          type="link"
                          icon={<FaExternalLinkAlt className="anticon" />}
                        />
                      )}
                    </Row>
                  </Form.Item>

                  <Form.Item label={type === "2" ? "Students 1" : "Students"}>
                    <Row align="middle">
                      <Select
                        style={{ width: "85%" }}
                        value={student1}
                        onChange={(value) => setStudent1(value)}
                      >
                        {filteredOptions2.map((item, index) => (
                          <Option value={item} key={index}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                      {student1 && (
                        <Button
                          type="link"
                          icon={<FaExternalLinkAlt className="anticon" />}
                        />
                      )}
                    </Row>
                  </Form.Item>

                  {type === "2" && (
                    <Form.Item label="Student 2">
                      <Row align="middle">
                        <Select
                          style={{ width: "85%" }}
                          value={student2}
                          onChange={(value) => setStudent2(value)}
                        >
                          {filteredOptions2.map((item, index) => (
                            <Option value={item} key={index}>
                              {item}
                            </Option>
                          ))}
                        </Select>
                        {student2 && (
                          <Button
                            type="link"
                            icon={<FaExternalLinkAlt className="anticon" />}
                          />
                        )}
                      </Row>
                    </Form.Item>
                  )}

                  <Form.Item label="Lesson">
                    <Select
                      disabled={
                        type === "2"
                          ? !instructor || !student1 || !student2
                          : !instructor || !student1
                      }
                    >
                      <OptGroup label="Lesson Group 1">
                        <Option value="Lession - 1.1">Lession - 1.1</Option>
                        <Option value="Lession - 1.2">Lession - 1.2</Option>
                        <Option value="Lession - 1.3">Lession - 1.3</Option>
                      </OptGroup>

                      <OptGroup label="Lesson Group 2">
                        <Option value="Lession - 2.1">Lession - 2.1</Option>
                        <Option value="Lession - 2.2">Lession - 2.2</Option>
                        <Option value="Lession - 2.3">Lession - 2.3</Option>
                      </OptGroup>
                    </Select>
                  </Form.Item>
                  <Button
                    style={{ marginBottom: 10 }}
                    onClick={() => setVisibleOberserver(true)}
                    icon={
                      <FaPlus style={{ color: "green" }} className="anticon" />
                    }
                  >
                    Add Observer
                  </Button>
                  {visibleObserver && (
                    <Row align="middle">
                      <Select style={{ width: "85%" }} mode="multiple">
                        <Option value="Observer 1">Observer 1</Option>
                        <Option value="Observer 2">Observer 2</Option>
                        <Option value="Observer 3">Observer 3</Option>
                        <Option value="Observer 4">Observer 4</Option>
                      </Select>
                      <Button
                        type="link"
                        onClick={() => setVisibleOberserver(false)}
                        icon={<FaTimes className="anticon" />}
                        style={{ color: "red" }}
                      />
                    </Row>
                  )}
                </>
              ) : (
                <>
                  {type === "3" && (
                    <Form.Item label="Renter">
                      <Select mode="multiple">
                        <Option value="Renter 1">Renter 1</Option>
                        <Option value="Renter 2">Renter 2</Option>
                        <Option value="Renter 3">Renter 3</Option>
                        <Option value="Renter 4">Renter 4</Option>
                      </Select>
                    </Form.Item>
                  )}
                  {type === "4" && (
                    <>
                      <Form.Item label="Operation">
                        <Select>
                          <Option value="Operation 1">Operation 1</Option>
                          <Option value="Operation 2">Operation 2</Option>
                          <Option value="Operation 3">Operation 3</Option>
                          <Option value="Operation 4">Operation 4</Option>
                          <Option value="Operation 5">Operation 5</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item label="PIC">
                        <Select>
                          <Option value="PIC 1">PIC 1</Option>
                          <Option value="PIC 2">PIC 2</Option>
                          <Option value="PIC 3">PIC 3</Option>
                          <Option value="PIC 4">PIC 4</Option>
                          <Option value="PIC 5">PIC 5</Option>
                        </Select>
                      </Form.Item>

                      {addCrew && (
                        <Form.Item label="Crew">
                          <Row align="middle">
                            <Select style={{ width: "85%" }} mode="multiple">
                              <Option value="Crew 1">Crew 1</Option>
                              <Option value="Crew 2">Crew 2</Option>
                              <Option value="Crew 3">Crew 3</Option>
                              <Option value="Crew 4">Crew 4</Option>
                              <Option value="Crew 5">Crew 5</Option>
                            </Select>
                            <Button
                              type="link"
                              onClick={() => setAddCrew(false)}
                              icon={<FaTimes className="anticon" />}
                              style={{ color: "red" }}
                            />
                          </Row>
                        </Form.Item>
                      )}

                      <Button
                        onClick={() => setAddCrew(true)}
                        icon={
                          <FaPlus
                            style={{ color: "green" }}
                            className="anticon"
                          />
                        }
                      >
                        Add Crew
                      </Button>

                      <Form.Item label="Customes">
                        <Select mode="multiple">
                          <Option value="Customer 1">Customer 1</Option>
                          <Option value="Customer 2">Customer 2</Option>
                          <Option value="Customer 3">Customer 3</Option>
                          <Option value="Customer 4">Customer 4</Option>
                          <Option value="Customer 5">Customer 5</Option>
                        </Select>
                      </Form.Item>
                    </>
                  )}
                </>
              )}
              <Form.Item label="Aircraft">
                <Row align="middle">
                  <Select style={{ width: "85%" }} value={aircraft}>
                    {aircafts.map((item, index) => (
                      <Option key={index} value={item.title}>
                        {item.title}
                      </Option>
                    ))}
                  </Select>
                  {aircraft && (
                    <Button
                      type="link"
                      icon={<FaExternalLinkAlt className="anticon" />}
                    />
                  )}
                </Row>
              </Form.Item>

              {type !== "5" && (
                <Form.Item label="Departure/Arrival">
                  <Row align="middle" justify="space-between">
                    <Select style={{ width: "50%" }}>
                      <Option value="Location 1">Location 1</Option>
                      <Option value="Location 2">Location 2</Option>
                      <Option value="Location 3">Location 3</Option>
                    </Select>

                    <Select style={{ width: "50%" }}>
                      <Option value="Location 1">Location 1</Option>
                      <Option value="Location 2">Location 2</Option>
                      <Option value="Location 3">Location 3</Option>
                    </Select>
                  </Row>
                </Form.Item>
              )}

              {type === "1" ||
                type === "2" ||
                (type === "4" && (
                  <Form.Item label="Pre flight starts">
                    <DatePicker
                      style={{ width: "100%" }}
                      showTime
                      onChange={(date) => setStartTime(date)}
                    />
                  </Form.Item>
                ))}

              <Form.Item label="Off Block">
                <DatePicker
                  style={{ width: "100%" }}
                  showTime
                  onChange={(date) => console.log(date)}
                />
              </Form.Item>

              <Form.Item label="On Block">
                <DatePicker
                  style={{ width: "100%" }}
                  showTime
                  onChange={(date) => console.log(date)}
                />
              </Form.Item>

              {type === "1" ||
                type === "2" ||
                (type === "4" && (
                  <Form.Item label="Post flight end">
                    <DatePicker
                      style={{ width: "100%" }}
                      showTime
                      onChange={(date) => setEndTime(date)}
                    />
                  </Form.Item>
                ))}

              <Form.Item label="Comments">
                <TextArea rows={4} />
              </Form.Item>

              {type !== "5" && (
                <Form.Item>
                  <Checkbox>Notify via email</Checkbox>
                </Form.Item>
              )}

              <Form.Item>
                <Row align="middle">
                  <Button
                    onClick={handleCreate}
                    style={{ marginRight: 20 }}
                    type="ghost"
                    icon={
                      <FaCheck className="anticon" style={{ color: "green" }} />
                    }
                  >
                    Create
                  </Button>

                  <Button
                    type="ghost"
                    icon={
                      <FaShare
                        className="anticon"
                        style={{ color: "#5bc0de" }}
                      />
                    }
                  >
                    Create and Reuse
                  </Button>
                </Row>
              </Form.Item>
            </>
          )}
        </Form>
      </Modal>
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
              onChange={(value) => setRange(value)}
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
        onCanvasClick={(grouId, time, e) => createBooking(grouId, time, e)}
        groups={aircafts}
        items={dataItem}
        visibleTimeEnd={moment().add(24 - new Date().getHours(), "hour")}
        visibleTimeStart={moment().add(-new Date().getHours() - 1, "hour")}
      />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Classrooms</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
      <Timeline
        onItemClick={(itemId, e, time) => console.log(itemId)}
        onCanvasClick={(grouId, time, e) =>
          createClassroomBooking(grouId, time, e)
        }
        groups={classrooms}
        items={dataItem2}
        visibleTimeEnd={moment().add(24 - new Date().getHours(), "hour")}
        visibleTimeStart={moment().add(-new Date().getHours() - 1, "hour")}
      />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Instructors and crew</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
      <Timeline
        groups={instructorAndCrews}
        items={dataItem3}
        visibleTimeEnd={moment().add(24 - new Date().getHours(), "hour")}
        visibleTimeStart={moment().add(-new Date().getHours() - 1, "hour")}
      />
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <Row align="middle" justify="space-between">
                <span>Students</span>
                <Button type="ghost">Show</Button>
              </Row>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
      </Table>
    </React.Fragment>
  );
}
