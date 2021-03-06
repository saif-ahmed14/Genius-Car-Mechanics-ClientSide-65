import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect( () => {
        fetch(`https://evening-earth-43065.herokuapp.com/services/${serviceId}`)
        .then(res => res.json())
        .then(data => setService(data))
    }, []);
    return (
        <div>
            <h2>This is booking id: {serviceId}</h2>
            <h3>Service Heading: {service.name}</h3>
            
        </div>
    );
};

export default Booking;