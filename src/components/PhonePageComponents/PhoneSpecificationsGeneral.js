import React from 'react';

const PhoneSpecificationsGeneral = ({phone}) => {
    const specifications = [
        {
            name: 'CPU',
            value: phone.cpu
        }, 
        {
            name: 'Camera',
            value: phone.camera
        }, 
        {
            name: 'Size',
            value: phone.size
        }, 
        {
            name: 'Weight',
            value: phone.weight
        }, 
        {
            name: 'Display',
            value: phone.display
        }, 
        {
            name: 'Battery',
            value: phone.battery
        }, 
        {
            name: 'Memory',
            value: phone.memory
        }
    ];
    return (
        <div>
            <p className="font-weight-bold">General</p>
            <ul className="list-unstyled">
                {
                    phone && specifications.map(item => (
                        <li key={item.name}>
                            <div className="d-flex lead">
                                <p className="font-weight-bold width-200 mb-0">{item.name}</p>
                                <p className="mb-0">{item.value}</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default PhoneSpecificationsGeneral;