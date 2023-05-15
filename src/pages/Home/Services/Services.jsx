import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='mx-auto text-center space-y-4 w-1/2 place-items-center'>
                <h3 className="text-3xl text-orange-500"> Services</h3>
          <h2 className='text-5xl'>Our Service Area</h2>
          <p className='text-xl'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
             </div>
             <div className='grid md:grid-cols-1 lg:grid-cols-3 gap-6 mt-6 mb-5'>
               {
                services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
               }
             </div>
        </div>
    );
};

export default Services;