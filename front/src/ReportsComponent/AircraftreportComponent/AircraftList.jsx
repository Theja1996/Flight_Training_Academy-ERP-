import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spin, Table } from "antd";
import { useHistory } from "react-router-dom";
import { getAll } from "../../utils/APIUtils";

export default function AircraftList() {
  let history = useHistory();

  const [aircraftList, setaircraftList] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    getAll("Aircraft")
      .then((result) => setaircraftList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  function handleProfile(data) {
    history.push({
      pathname: "/planess/" + data.key + "/aircraft_report/",
      state: { detail: data },
    });
  }
  const columns = [
    {
      title: "Aircraft",
      align: "left",
      children: [
        {
          title: "Call sign",
          dataIndex: "callSign",
          key: "callSign",
          render: (text, record) => (
            <Button
              onClick={() => handleProfile(record)}
              style={{ color: "#1394e4" }}
              type="link"
            >
             
              {record.callSign}
            </Button>
          ),
          sorter: (a, b) => a.callSign - b.callSign,
        },

        {
          title: "Aircraft model",
          dataIndex: "model",
          key: "model",
        },
      ],
    },
  ];
  if (Loading) {
    return   <Spin size="large" />;
  }
  return (
    <>
      <Row justify="center">
        <Col span={14}>
          <Table
            columns={columns}
            pagination={false}
            dataSource={aircraftList.filter((d) => d.callSign)}
            bordered
            size="small"
            style={{ marginTop: "20px" }}
          />
        </Col>
      </Row>
    </>
  );
}
