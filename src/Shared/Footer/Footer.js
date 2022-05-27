import React from 'react';

const Footer = () => {
    const today=new Date();
    const year=today.getFullYear();
    return (
        <footer className='bg-dark text-center p-4 '>
           <p><small className='text-white '>All Reserved &copy; ajoy biswas {year} </small></p> 
        </footer>
    );
};

export default Footer;