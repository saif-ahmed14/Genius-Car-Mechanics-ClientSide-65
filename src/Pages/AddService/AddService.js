import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://evening-earth-43065.herokuapp.com/services', data)
        .then(res => {
            if(res.data.insertedId){
                alert('Data added successfully done');
                reset();
            }
        })
    };
    return (
        <div className='add-service'>
            <h3>Please Add a Service</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='name' />
                <textarea {...register("description")} placeholder='description' />
                <input type="number" {...register("price")} placeholder='price' />
                <input {...register("img")} placeholder='image url' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;