import React from 'react';
import { Row, Col, Form, FormGroup, Input } from 'reactstrap';

const Amounts = (props) => {
  return (
    <Col md="12">
      <Row>
        <Col md="2">
          <p>Amount</p>
        </Col>
        <Col md="10">
          <Form>
            <FormGroup>
              <Input 
                type="select" 
                name="select" 
                id="exampleSelect" 
                onChange={(e) => {
                  props.selectedQuantity(e.target.value);
                }}>
                <option defaultValue>Choose...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Col>
  );
}

export default Amounts;