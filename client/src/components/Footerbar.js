import React from 'react';
import sahaya from '../components/images/sahaya.jpeg'


export default function Footerbar() {
    return (
        <div className='flex flex-col bg-black '>
                <img className='h-[5rem] w-[14rem] object-cover m-8' src={sahaya} alt=""  />
                <div  className=' mx-auto grid grid-cols-3 items-center w-full  max-sm:grid-cols-2 gap-2 sm:gap-8 bg-black mb-10'>
            <div className='flex flex-col justify-start ml-20 '>
                <span className=' text-white ml-16 mb-5 text-2xl'>About US
                </span>
                <p className='text-white ml-16'>
                    xdcfgvbhj sedtrcfyvg exrcvygbh exrcvgb esxdcvgb drtfygvh hjbxrcfgv cvbh xdcfgvbhj sedtrcfyvg exrcvygbh exrcvgb esxdcvgb drtfygvh
                </p>
            </div>
            <div className='items-center justify-center flex flex-col gap-4'>
                <span className='text-white text-2xl flex flex-col items-center '>Contact</span>
                <div className='text-white  flex flex-col items-center'>
                    <p className='text-blue-500'>Email: abc@gmail.com</p>
                    <p>Phone: 555-555-5555</p>
                    <p>Address: 123 Main St, Anytown</p>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-4'>
            <span className='text-white text-2xl '>Donate food</span>
                <div className='text-white ' >
                    <p >Home |About |Contact |Register</p>
                    <p className='text-blue-500'>Donate food as much as you can</p>
                </div>
            </div>

            </div>

        </div>
    )
}