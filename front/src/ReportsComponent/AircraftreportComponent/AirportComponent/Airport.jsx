import React, { useEffect, useState } from "react";
import { Button, Col, Row, Spin, Table } from "antd";
import { getAll } from "../../../utils/APIUtils";
import { useHistory } from "react-router-dom";

export default function AirportReport() {
  let history = useHistory();

  const [airportList, setairportList] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    getAll("Airport")
      .then((result) => setairportList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  function handleProfile(data) {
    history.push({
      pathname: "/airportss/" + data.key,
      state: { detail: data },
    });
  }
  const columns = [
    {
      title: "Airport",
      align: "left",
      children: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          render: (text, record) => (
            <Button
              onClick={() => handleProfile(record)}
              style={{ color: "#1394e4" }}
              type="link"
            >
              {record.name}
            </Button>
          ),
          sorter: (a, b) => a.name - b.name,
        },
      ],
    },
  ];
  if (Loading) {
    return <Spin size="large" />;
  }
  return (
    <>
      <Row justify="center">
        <Col span={14}>
          <Table
            columns={columns}
            pagination={false}
            dataSource={airportList.filter((d) => d.name)}
            bordered
            size="small"
            style={{ marginTop: "20px" }}
          />
        </Col>
      </Row>
    </>
  );
}
