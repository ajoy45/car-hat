import React from 'react';
import { useForm } from "react-hook-form";
const Addservice = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'https://young-hamlet-34340.herokuapp.com/service';
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => console.log(result))

    };
    return (
        <div className='w-50 mx-auto'>
            <h1> add new user</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='description' {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='photourl' type='text' {...register("img")} />
                <input type="submit" value='Add user' />
            </form>
        </div>
    );
};

export default Addservice;