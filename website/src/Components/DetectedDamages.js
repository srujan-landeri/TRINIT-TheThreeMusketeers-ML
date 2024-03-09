import React, {useState} from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export function DetectedDamages(props) {

    {/* <img className = "road_image" src={'data:image/jpeg;base64,' + base64_image} alt="" /> */}
    const {data} = props;
    const [showMore, setShowMore] = useState({});
    const [damage, setDamage] = useState(null);

    const toggleShowMore = (key) => {
        setShowMore(prevState => ({ ...prevState, [key]: !prevState[key] }));
    };

    const viewAll = (key) => {
        setDamage(key);
    };

    return (
        <>
        {!damage &&  (<div className='damaged_roads'>
            {Object.keys(data).map((key, index) => {
                return (
                    <div key={index} className='damage_type'>
                        <h3>Category: {key}</h3>
                        <div className='damage_images'>
                            {(showMore[key] ? data[key] : data[key].slice(0, 4)).map((damage, index) => {
                                return (
                                    <div key={index} className='damage_image'>
                                        <img className = "road_image" src={`data:image/jpeg;base64,${damage.image}`} alt="" />
                                    </div>
                                )
                            })}
                        </div>
                        <button className='view_more' onClick={() => viewAll(key)}>
                            {showMore[key] ? 'View Less' : 'View All'}
                            <FaArrowRight />
                        </button>
                    </div>
                )
            })}
        </div>)}

        {damage && (<div className='damage_images_grid'>
            <div className='damage-heading'>
                <h3>Category: {damage}</h3>
                <button className='view_more' onClick={() => setDamage(null)}>
                    <FaArrowLeft />
                    Back
                </button>
            </div>
            <div className='road-images'>
                {data[damage].map((damage, index) => {
                    return (
                        <img className = "road_image" src={`data:image/jpeg;base64,${damage.image}`} alt="" />
                    )
                })}
            </div>
            
        </div>)}
        </>
    )
}

