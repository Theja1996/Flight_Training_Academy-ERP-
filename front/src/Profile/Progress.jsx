import React, { useEffect, useState } from "react";
import { Row, Space, Select } from "antd";
import { Header } from "antd/lib/layout/layout";
import { getAll } from "../utils/APIUtils";

export default function Progress() {
  const [loading, setLoading] = useState(true);
  const [masterList, setMasterList] = useState([]);
  const { Option, OptGroup } = Select;

  useEffect(() => {
    getAll("Programs")
      .then((result) => setMasterList(result), setLoading(false))
      .catch((error) => console.log(error));
  }, []);
  if (loading) {
    return "...Loading";
  }
  return (
    <>
      <Row style={{ marginTop: 5, width: "100%" }}>
        <Header
          style={{
            borderRadius: "4px",
            width: "100%",
            backgroundColor: " #E6E6E6",
            height: 35,
            border: " #ccc 1px solid",
            backgroundImage: "linear-gradient(white, white 25%, #e6e6e6)",
          }}
        >
          <Row style={{ marginTop: 5 }}>
            <h3 style={{ fontWeight: "bold" }}>Progress</h3>
          </Row>
        </Header>
        <Row justify="space-between" style={{ marginTop: 5, width: "100%" }}>
          <Space direction="horizontal" size="large">
            <Select showSearch style={{ width: "1100%" }}>
              <OptGroup label="Programs">
                {masterList.map((pl) => (
                  <Option value={pl.name}>{pl.name}</Option>
                ))}
              </OptGroup>
            </Select>

            <Select showSearch style={{ width: "120%", marginLeft: "400px" }}>
              <OptGroup label="Programs">
                {masterList.map((pl) => (
                  <Option value={pl.name}>{pl.name}</Option>
                ))}
              </OptGroup>
            </Select>
          </Space>
        </Row>
      </Row>
    </>
  );
}
