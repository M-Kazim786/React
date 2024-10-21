import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data=useLoaderData()

    // const[data,setData]=useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/M-Kazim786')
    //     .then((res)=>(res.json()))
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)

    //     })
    // },[])


    return (
        <>
        <div className="text-center text-3xl m-4 bg-gray-600 text-white">
          Github Bio: {data.bio}
          <div className="flex justify-center m-3">
            <img src={data.avatar_url} alt="Git pic" width={300} />
          </div>
        </div>
        </>
      );
}

export default Github

export const githubInfoLoader= async()=>{
    const res=await fetch('https://api.github.com/users/M-Kazim786')
    return res.json();
}