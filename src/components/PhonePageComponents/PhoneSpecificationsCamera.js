import React from 'react';

const PhoneSpecificationsCamera = ({phone}) => {
    const cameraFeatures = [
        {
            name: 'Primary Camera',
            value: phone.primary_camera_available
        }, 
        {
            name: 'Primary Camera MB',
            value: phone.primary_camera
        }, 
        {
            name: 'Secondary Camera',
            value: phone.secondary_camera_available
        }, 
        {
            name: 'Secondary Camera MB',
            value: phone.secondary_camera
        },
        {
            name: 'Flash',
            value: phone.camera_flash
        },
        {
            name: 'HD Recording',
            value: phone.hd_recording
        },
        {
            name: 'Full HD Recording',
            value: phone.full_hd_recording
        },
        {
            name: 'Video Recording',
            value: phone.video_recording
        }
    ];
    return (
        <div>
            <p className="font-weight-bold">Camera Features</p>
            <ul className="list-unstyled">
                {
                    phone && cameraFeatures.map(item => (
                        <li key={item.name}>
                            <div className="d-flex lead">
                                <p className="font-weight-bold width-200 mb-0">{item.name}</p>
                                <p className="mb-0">{item.value}</p>
                            </div>
                        </li>
                    ))
                }
                <li>
                    <p className="font-weight-bold width-200 lead mb-0">Primary Camera Features: </p>
                    <ol>
                        {
                            phone.primary_camera_features && phone.primary_camera_features.map((item, index) => {
                                return <li key={index} className="lead"><p className="mb-0">{item.feature}</p></li>
                            })
                        }
                    </ol>
                </li>
                <li>
                    <p className="font-weight-bold width-200 lead mb-0">Secondary Camera Features: </p>
                    <ol>
                        {
                            phone.secondary_camera_features && phone.secondary_camera_features.map((item, index) => {
                                return <li key={index} className="lead"><p className="mb-0">{item.feature}</p></li>
                            })
                        }
                    </ol>
                </li>
            </ul>
        </div>
    );
}

export default PhoneSpecificationsCamera;