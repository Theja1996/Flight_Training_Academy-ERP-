import React, { useEffect, useState } from "react";
import {
  Row,
  Space,
  Select,
  Button,
  Form,
  Divider,
  Card,
  InputNumber,
  TimePicker,
  DatePicker,
} from "antd";
import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import Text from "antd/lib/typography/Text";
import { getAll, getMaxId } from "../../../utils/APIUtils";
import { IoIosAirplane } from "react-icons/io";
import moment from "moment";
import { RiCloseCircleLine, RiCloseFill } from "react-icons/ri";

export default function Flight() {
  const [loading, setLoading] = useState(true);
  const { Option } = Select;
  const [form] = Form.useForm();
  const [masterList, setMasterList] = useState([]);
  const format = "HH:mm";
  const [airporttMasterList, setAirportMasterList] = useState([]);

  useEffect(() => {
    getAll("Aircraft")
      .then((result) => setMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    getAll("Airport")
      .then((result) => setAirportMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  function doFlight(values) {
    setLoading(true);
    getMaxId("Flight").then((id) => {
      console.log(id);
      let v = { ...values };
      v.key = id;
    });

    console.log(values);
  }
  const handleChange = () => {
    form.setFieldsValue({ sights: [] });
  };
 
  return (
    <>
      <Form name="register" form={form} onFinish={doFlight}>
        {/* <div> 
      <Form.List name="users">
                    {(fields, { add, remove }) => (
                      <>
                        {fields.map(({ key, name, fieldKey, ...restField }) => (    */}
                             <Row style={{ marginTop: "20px" }} justify="space-between">
      
   
                             <Space direction="horizontal">
                             <Form.Item style={{ width: "77%", marginLeft: "200px" }} >
            <Card    >
              <Form.Item  >
                <Text style={{ float: "left", fontWeight: "bold" }}>
                  (UTC+05:00)
                </Text>
                <Text style={{ float: "inherit", fontWeight: "bold" }}>
                  CALLSIGN
                </Text>
              </Form.Item>
              <Form.Item
                name="flight"
                rules={[
                  {
                    required: true,
                  },
                ]}
               
              >
                <Select showSearch style={{ width: 300 }}>
                  {masterList.map((pl) => (
                    <Option value={pl.key}>
                      <IoIosAirplane /> {pl.callSign}
                    </Option>
                  ))}
                </Select>
                <Button type="text">
                  <FaExternalLinkAlt style={{ color: "#4cbcf5" }} />
                </Button>
              </Form.Item>
              <Space direction="horizontal" size="large">
                <Form.Item>
                  <Button style={{ width: "120px", height: "80px" }}>
                    DUAL
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button style={{ width: "120px", height: "80px" }}>
                    VFR
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button style={{ width: "120px", height: "80px" }}>
                    DAY
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button style={{ width: "120px", height: "80px" }}>
                    LOCAL
                  </Button>
                </Form.Item>
              </Space>
              <Row justify="center">
                <Space direction="horizontal">
                  <Card
                    style={{
                      backgroundColor: "#a5ddfa",
                      width: 250,
                      height: 300,
                    }}
                  >
                    <Text>Tacho start</Text>
                    <Form.Item name="tachoStart">
                      <InputNumber style={{ width: "100%", height: "60px" }} />
                    </Form.Item>
                    <Text>Tacho end</Text>
                    <Form.Item name="tachoEnd">
                      <InputNumber style={{ width: "100%", height: "60px" }} />
                    </Form.Item>
                    <Form.Item name="tacho_cal">
                      <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
                        1
                      </Text>
                    </Form.Item>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "#a5ddfa",
                      width: 250,
                      height: 300,
                    }}
                  >
                    <Text>Off block</Text>
                    <Form.Item name="offBlock">
                      <TimePicker
                        defaultValue={moment("12:08", format)}
                        showNow={false}
                        allowClear={false}
                        format={format}
                        style={{ width: "100%" }}
                      />
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                    <Text>On block</Text>
                    <Form.Item name="onBlock">
                      <TimePicker
                        defaultValue={moment("12:08", format)}
                        showNow={false}
                        allowClear={false}
                        format={format}
                        style={{ width: "100%" }}
                      />
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item name="block_cal">
                      <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
                        1h 00m
                      </Text>
                    </Form.Item>
                  </Card>
                  <Card
                    style={{
                      backgroundColor: "#a5ddfa",
                      width: 250,
                      height: 300,
                    }}
                  >
                    <Text>Takeoff</Text>
                    <Form.Item name="takeOff">
                      <TimePicker
                        defaultValue={moment("12:08", format)}
                        showNow={false}
                        allowClear={false}
                        format={format}
                        style={{ width: "100%" }}
                      />
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                    <Text>Landing</Text>
                    <Form.Item name="landing">
                      <TimePicker
                        defaultValue={moment("12:08", format)}
                        showNow={false}
                        allowClear={false}
                        format={format}
                        style={{ width: "100%" }}
                      />
                      <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item name="fly_cal">
                      <Text style={{ fontWeight: "bold", fontSize: "16px" }}>
                        1h 00m
                      </Text>
                    </Form.Item>
                  </Card>
                </Space>
              </Row>
              <Row justify="center">
                <Card
                  style={{ backgroundColor: "#a5ddfa", width: 250, height: 75 }}
                >
                  <Space direction="horizontal">
                    <Form.Item>
                      <Text>IF</Text>
                    </Form.Item>
                    <Form.Item name="if">
                      <TimePicker
                        defaultValue={moment("12:08", format)}
                        showNow={false}
                        allowClear={false}
                        format={format}
                        style={{ width: "115%" }}
                      />
                    </Form.Item>
                  </Space>
                </Card>
              </Row>

              <Row justify="center" style={{ marginTop: "10px" }}>
                <Space direction="horizontal">
                  <Form.Item>
                    <Button style={{ fontSize: "16px", fontWeight: "bold" }}>
                      DEPARTURE
                    </Button>
                  </Form.Item>
                  <Form.Item name="departure">
                    <Select showSearch style={{ width: 100 }}>
                      {airporttMasterList.map((pl) => (
                        <Option value={pl.key}>{pl.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                </Space>
              </Row>
              <Row justify="center">
                <Space direction="horizontal">
                  <Form.Item>
                    <Button style={{ fontSize: "16px", fontWeight: "bold" }}>
                      ARRIVAL (1 full stop)
                    </Button>
                  </Form.Item>
                  <Form.Item name="arrival">
                    <Select showSearch style={{ width: 100 }}>
                      {airporttMasterList.map((pl) => (
                        <Option value={pl.key}>{pl.name}</Option>
                      ))}
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button style={{ fontSize: "16px", fontWeight: "bold" }}>
                      DAY
                    </Button>
                  </Form.Item>
                </Space>
              </Row>

              <Form.List name="names">
                {(fields, { add, remove }, { errors }) => (
                  <>
                    {fields.map((field, index) => (
                      <Row justify="center">
                        <Space direction="horizontal">
                          <Form.Item required={false} key={field.key}>
                            <Space direction="horizontal">
                              <Form.Item>
                                <Button
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  ARRIVAL (1 full stop)
                                </Button>
                              </Form.Item>
                              <Form.Item name="arrival" {...field}>
                                <Select showSearch style={{ width: 100 }}>
                                  {airporttMasterList.map((pl) => (
                                    <Option value={pl.key}>{pl.name}</Option>
                                  ))}
                                </Select>
                              </Form.Item>
                              <Form.Item>
                                <Button
                                  style={{
                                    fontSize: "16px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  DAY
                                </Button>
                              </Form.Item>
                            </Space>

                            {fields.length > 1 ? (
                              <RiCloseFill
                              style={{color:"red", fontSize:"18px", fontWeight:"bold"}}
                             
                                onClick={() => remove(field.name)}
                              />
                            ) : null}
                          </Form.Item>
                        </Space>
                      </Row>
                    ))}
                    <Form.Item>
                      <Button
                        onClick={() => add()}
                        icon={<PlusOutlined style={{ color: "green" }} />}
                      >
                        Add landing
                      </Button>

                      <Form.ErrorList errors={errors} />
                    </Form.Item>
                  </>
                )}
              </Form.List>
            </Card></Form.Item>
          </Space>  </Row> 
           {/* ))} */}
<Row><Form.Item style={{marginLeft:"300px", marginTop:"5px"}}>
  <Button 
// onClick={() => add()}
   block icon={<PlusOutlined />}>
    Add flight
  </Button>
</Form.Item></Row>

{/* // </>
// )} </Form.List>
//          </div> */}
        
      </Form>

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
              marginLeft: "300px",
            }}
            //   onClick={() => setViewmod("view")}
          >
            <FaArrowCircleLeft style={{ color: "#1394e4", fontSize: "24px" }} />
            Grading
          </Button>
          <Button
            type="text"
            style={{
              width: "100%",
              textAlign: "left",
              fontSize: "20px",
              fontStyle: "italic",
              marginLeft: "780px",
            }}
            // onClick={() => setViewmod("grading")}
          >
            Debriefing
            <FaArrowCircleRight
              style={{ color: "#1394e4", fontSize: "24px" }}
            />
          </Button>
        </Space>
      </Row>
      {/* {viewmod === "view" ? <Grading /> : null} */}
    </>
  );
}
