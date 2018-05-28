import React from 'react';
import { Row, Col } from 'reactstrap';
import $ from 'jquery';

const Colors = (props) => {
  return (
    <Col md="12">
      <Row>
        <Col md="2">
          <p>Colors</p>
        </Col>
        <Col md="10">
          <ul className="d-flex list-unstyled">
            {
              props.phone.colors && props.phone.colors.map((item, index) => {
                return (
                  <li key={index}>
                    <p 
                      className="mb-0 mr-3 font-weight-bold color-container"
                      style={{backgroundColor: item.color.toLowerCase(), cursor: 'pointer'}}
                      onClick={() => {
                        $('p.color-container')
                          .removeClass('active-color-container');
                        $('p.color-container')
                          .eq(index)
                          .addClass('active-color-container');
                        props.selectedColor(item.color);
                      }}>
                    </p>
                  </li>
                );
              })
            }
          </ul>
        </Col>
      </Row>
    </Col>
  );
};

export default Colors;