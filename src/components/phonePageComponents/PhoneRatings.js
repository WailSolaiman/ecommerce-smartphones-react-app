import React from 'react';
import { Row, Col, Button, Badge, Table, Progress } from 'reactstrap';
import { MdGrade } from 'react-icons/lib/md';

const PhoneRatings = ({phone}) => {
    const productRatings = [
        {
            score: '5',
            color: 'success',
            value: 85,
            votes: 13.258
        },
        {
            score: '4',
            color: 'success',
            value: 70,
            votes: 9850
        },
        {
            score: '3',
            color: 'success',
            value: 55,
            votes: 2074
        },
        {
            score: '2',
            color: 'warning',
            value: 40,
            votes: 362
        },
        {
            score: '1',
            color: 'danger',
            value: 15,
            votes: 135
        },
    ];
    return (
        <Col md="12">
            <Row>
                <Col md="12">
                    <h1 className="mb-5">Ratings and Reviews</h1>
                </Col>
                <Col sm="12" md="3">
                    <Badge color="success" className="mb-3">
                        <h1 className="mb-0 display-1">4.2</h1>
                    </Badge>
                    <p className="mr-5 lead">{phone.ratings} Ratings & {phone.reviews} Reviews</p>
                </Col>
                <Col sm="12" md="9">
                    <Table size="sm" borderless>
                        <tbody>
                        {
                            phone && productRatings.map(item => (
                                <tr key={item.score} className="d-flex align-items-center justify-content-between">
                                    <td className="rate d-flex align-items-center">{item.score}<MdGrade size={15} color="black"/></td>
                                    <td className="chart"><Progress color={item.color} value={item.value}></Progress></td>
                                    <td><p className="mb-0 float-right">{item.votes}</p></td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Col>
    );
};

export default PhoneRatings;