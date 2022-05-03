import React, { useState } from "react";


import { Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';



import { add, getMaxId, remove_key, uniqueCheck } from "../utils/APIUtils";


import "antd/dist/antd.css";
const { Search } = Input;
const onSearch = value => console.log(value);
function Searching() {
    return (
        <>
      
        <br></br>
        <Search placeholder="input search text" onSearch={onSearch} enterButton style={{width:"400px"}} />
        <br></br>
        <div style={{fontSize: "24px", color:"#2FD4E9",marginTop:"50px"}}>
        <i class="fas fa-search fa-10x"  ></i>
        </div>
</>)
}

export default Searching;