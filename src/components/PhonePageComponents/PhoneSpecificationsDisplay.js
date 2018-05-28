import React from 'react';

const PhoneSpecificationsDisplay = ({phone}) => {
    const displayFeatures = [
        {
            name: 'Display Size',
            value: phone.display_size
        }, 
        {
            name: 'Resolution',
            value: phone.resolution
        }, 
        {
            name: 'Resolution Type',
            value: phone.resolution_type
        }, 
        {
            name: 'Display Colors',
            value: phone.display_colors
        }
    ];
    return (
        <div>
            <p className="font-weight-bold">Display Features</p>
            <ul className="list-unstyled">
                {
                    phone && displayFeatures.map(item => (
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

export default PhoneSpecificationsDisplay;