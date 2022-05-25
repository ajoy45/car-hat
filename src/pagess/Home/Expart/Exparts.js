import React from 'react';
import expart1 from "../../../Images/Expart/expart1.png";
import expart2 from "../../../Images/Expart/expart2.png";
import expart3 from "../../../Images/Expart/expart3.png";
import Expart from './Expart';
import "./Exparts.css"
const Exparts = () => {
    const exparts = [
        { id: 1, name: "Ronaldo", img: expart1 },
        { id: 2, name: "liono Messi", img: expart2 },
        { id: 3, name: "Tom Cruse", img: expart3 },
    ]
    return (
        <div>
            <h1 className='text-primary text-center'>Exparts</h1>
            <div className='row '>
                {
                    exparts.map(expart => <Expart
                        key={expart.id}
                        expart={expart}
                    ></Expart>)
                }
            </div>

        </div>
    );
};

export default Exparts;