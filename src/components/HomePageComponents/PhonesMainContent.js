import React from 'react';
import { Link } from 'react-router-dom';

const PhonesMainContent = ({phone}) => {
    return (
        <Link to={`/phone/${phone.id}`}>
            <div>
                <img 
                    className="phones-images"
                    src={`./images/gallery/${phone.categoryId}/main.jpeg`}
                    alt={phone.name}
                />
                <div className="d-flex flex-column justify-content-between">
                    <h3 className="text-monospace text-primary my-3">
                        {phone.name}. ({phone.storage}) ({phone.ram} RAM).
                    </h3>
                    <div className="d-flex align-items-baseline">
                        <h3 className="font-weight-bold text-success mr-3">
                            {phone.price}€
                        </h3>
                        {
                            phone.discount < 70 ? (
                                <p className="mb-0"></p>
                            ) : (
                                <div className="d-flex align-items-baseline">
                                    <small className="text-secondary mr-3">
                                        <del>
                                            {(phone.price + phone.discount).toFixed(2)}€
                                        </del>
                                    </small>
                                    <small className="text-success font-weight-bold font-italic mb-0">
                                        SAVE {phone.discount}€
                                    </small>
                                </div>
                            )
                        }
                    </div>
                    <p className="small-line-height text-dark">
                        <small>
                            {phone.description.substr(0, 100)} ...
                        </small>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default PhonesMainContent;