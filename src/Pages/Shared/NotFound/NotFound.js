import React from 'react';
import sleeping from '../../../images/sleeping.jpg'

const NotFound = () => {
    return (
        <div>
            <h2 className='text-primary text-center'>Mechanic is sleepy</h2>
           <img className='w-100' src={sleeping} alt="" srcset="" />
        </div>
    );
};

export default NotFound;