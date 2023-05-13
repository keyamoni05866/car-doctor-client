import React from 'react';

const ServiceCard = ({service}) => {
    const {title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10 h-1/2">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body ml-3 justify-start">
          <h2 className="card-title text-2xl">{title}!</h2>
          <p className=' text-orange-500 text-xl'>price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;