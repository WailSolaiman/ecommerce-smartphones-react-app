import React from 'react';
import ImageGallery from 'react-image-gallery';
import { Row, Col } from 'reactstrap';

const PhoneImageGallery = (props) => {
  return (
    <Col md="12">
      <Row>
        <Col md="12">
          <Col md="12">
            <h1 className="mb-5">Product Gallery</h1>
          </Col>
        </Col>
        <Col md="12">
          <ImageGallery
            showPlayButton={false}
            items={
              props.phone.gallery && props.phone.gallery.map((item) => (
                {
                  original: `../images/gallery/${props.phone.categoryId}${item.image}`,
                  thumbnail: `../images/gallery/${props.phone.categoryId}${item.image}`,
                }
              ))
            }
          />
        </Col>
      </Row>
    </Col>
  );
};

export default PhoneImageGallery;