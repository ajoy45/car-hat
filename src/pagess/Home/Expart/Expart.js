import React from 'react';
import { Link } from 'react-router-dom';

const Expart = ({ expart }) => {
    const { name, img } = expart;
    return (
        <>
            <div className="card col-sm-12 col-md-6 c0l-lg-4 gx-5 me-3" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/about" className="btn btn-primary ">Go About Page</Link>
                </div>
            </div>
        </>

    );
};

export default Expart;