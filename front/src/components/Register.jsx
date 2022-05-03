import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form } from "semantic-ui-react";
import "../csscomonents/Register.css";

function Register() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [contactno, setcontactno] = useState("");
  const [address, setaddress] = useState("");
  const history = useHistory();

  function doLogin() {
    history.push("/Login");
  }
  function doRegister() {
    alert("successful Register" + lastname);
    console.log("lastname" + lastname);
  }
  return (
    <div className="formcontant">
      <Form className="registerform">
        <h2>wellcome to Register</h2>
        <Form.Field className="form-field">
          <label>First Name:</label>

          <input
            className="inpu"
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(l) => setfirstname(l.target.value)}
          />
        </Form.Field>
        <Form.Field className="form-field">
          <label>Last Name:</label>

          <input
            className="inpu"
            type="text"
            value={lastname}
            onChange={(l) => setlastname(l.target.value)}
            placeholder="Last Name"
          />
        </Form.Field>
        <Form.Field className="form-field">
          <label>email:</label>

          <input
            className="inpu"
            type="email"
            placeholder="email"
            value={email}
            onChange={(l) => setemail(l.target.value)}
          />
        </Form.Field>
        <Form.Field className="form-field">
          <label>password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(l) => setpassword(l.target.value)}
          />
        </Form.Field>
        <Form.Field className="form-field">
          <label>Contact No:</label>

          <input
            className="inpu"
            type="text"
            placeholder="Contact No"
            value={contactno}
            onChange={(l) => setcontactno(l.target.value)}
          />
        </Form.Field>
        <Form.Field className="form-field">
          <label>Address:</label>

          <input
            // style={{ height: 200, width: 500 }}
            className="inpu"
            type="text"
            placeholder="Address"
            value={address}
            onChange={(l) => setaddress(l.target.value)}
          />
        </Form.Field>
        <button onClick={doLogin}>Go to Login</button>
        <button onClick={doRegister}>Register</button>
      </Form>
    </div>
  );
}
export default Register;
