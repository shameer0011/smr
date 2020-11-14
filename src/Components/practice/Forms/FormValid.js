import React from "react";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
export const FormValid = () => {
  const [text, settext] = useState("");
  const changeHandler = (e) => {
    settext(e.target.value);
    console.log(e, "haii");
  };
  return (
    <Form>
      <Form.Group controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <input
          className="form-control"
          type="text"
          name="name"
          value={text}
          onChange={changeHandler}
          placeholder="Enter Name"
        />
      </Form.Group>

      <Form.Group controlId="formBasicAddress">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          name="Address"
          value={text}
          onChange={changeHandler}
          placeholder="Enter Addrerss"
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="pswd"
          value={text}
          onChange={changeHandler}
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" name="check" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default FormValid;
