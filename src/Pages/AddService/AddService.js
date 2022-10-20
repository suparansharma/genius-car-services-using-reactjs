import React from 'react';
import { useForm } from "react-hook-form";
const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
     console.log(data);
     const url = `http://localhost:5000/service`;
     fetch(url,{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
     })
     .then(res => res.json())
     .then(result =>{console.log(result)})
    };
    return (
        <div className='w-50 mx-auto' >
         <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
        <input className='mb-2' type='text' placeholder='Name' {...register("name",{required:true,maxLength: 20})} />
        <textarea className='mb-2' type='text' placeholder='Description' {...register("description")} />
        <input className='mb-2' type='number' placeholder='Price' {...register("price")} />
        <input className='mb-2' type='text' placeholder='Photo URL' {...register("img")} />
        <input type="submit" value="Add Service" />
      </form>
        </div>
   
    );
};

export default AddService;