// AllImages.js
import React from 'react';

export const AllImages = ({ location }) => {
    const { state } = location;
    const { images } = state;

    return (
        <div className='all_images'>
            {images.map((image, index) => (
                <div key={index} className='image'>
                    <img src={`data:image/jpeg;base64,${image.image}`} alt="" />
                </div>
            ))}
        </div>
    );
};
