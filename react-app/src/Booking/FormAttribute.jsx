import React, { useState } from "react";
import { Form, Button, Alert, Row, Col } from "react-bootstrap";

const FormAttribute = ({ isShowSelected }) => {
  const [showAlert, setShowAlert] = useState(false);

  function handleSubmit(event) {
    if (!isShowSelected) {
      event.preventDefault();
      setShowAlert(true);
    }
  }

  return (
    // <div className="d-flex justify-content-center m-3">
    <div>
      <Form
        action=""
        method="post"
        encType="multipart/form-data"
        name="booking"
        autoComplete="off"
        acceptCharset="UTF-8"
        onSubmit={handleSubmit}
      >
        {showAlert && <Alert variant="danger">請先選擇場次</Alert>}
        <Row className="d-flex justify-content-center">
          <Col sm={4} md={4} lg={3}>
            <Button type="submit" variant="outline-light" className="w-100">
              下一步
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormAttribute;
