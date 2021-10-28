import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://evening-earth-43065.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleDelete = id => {
        const uri = `https://evening-earth-43065.herokuapp.com/services/${id}`;
        fetch(uri, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Delete item successfully done');
                    const remainingServices = services.filter(service => service._id !== id);
                    setServices(remainingServices);
                }
            })
    }
    return (
        <div>
            {
                services.map(service => <div key='service._id'>
                    <h2>{service.name}</h2>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;