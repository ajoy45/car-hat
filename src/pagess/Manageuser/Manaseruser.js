import React from 'react';
import useService from '../hooks/Useservice';

const Manaseruser = () => {
    const [servicess, setServicess] = useService();
    const handelDelete = id => {
        const proced = window.confirm('are you sure to delete');
        if (proced) {
            const url = `https://young-hamlet-34340.herokuapp.com/service/${id}`
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    const remaining = servicess.filter(service => service._id !== id);
                    setServicess(remaining)

                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>manage your user</h1>
            {
                servicess.map(service => <div key={service._id}>
                    <h4>{service.name} <button onClick={() => handelDelete(service._id)}>X</button></h4>

                </div>)
            }
        </div>
    );
};

export default Manaseruser;