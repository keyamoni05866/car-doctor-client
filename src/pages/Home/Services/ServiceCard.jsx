import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    const {_id,title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-1/2">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ml-3 justify-start">
          <h2 className="card-title text-2xl">{title}!</h2>
          <p className=' text-orange-500 text-xl'>price: ${price}</p>
          <div className="card-actions justify-end">
           <Link to={`/checkout/${_id}`}> <button className="btn btn-primary">Book Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;