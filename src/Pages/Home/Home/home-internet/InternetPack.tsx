import React, { useState,useEffect } from 'react';
import PackageInternet from './PackageInternet';


const InternetPack = () => {
    const [packages, setPackages]= useState([]);
    
    useEffect(()=>{
        fetch('internetPack.json')
        .then(res =>res.json())
        .then(data=>setPackages(data))
    },[])

    return (
        <div >
            <h1 className='text-center text-4xl text-bold text-red-500 my-5 pt-10 font-bold'>HOME INTERNET</h1>
            <p className='text-red-500 mt-20 text-center '>Our Packages</p>
            <h2 className='text-center text-4xl text-bold pt-2 font-extrabold'>Pick The Best Plan For You</h2>
            <p className='text-stone-500 pt-5 text-center '>Super Speed Optical Fiber Internet Connectivity with Real IP Right to Your Door Steps</p>

            <div className='gird grid-cols-3'>
                {
                 packages.map(pak =><PackageInternet></PackageInternet>)   
                }
            </div>
        </div>
    );
};

export default InternetPack;