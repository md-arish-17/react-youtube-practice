import React from 'react'

const Card = () => {
  return (
    <div>
        <div className="text-black h-[350px] w-[250px] flex flex-col gap-2 bg-slate-100 rounded-md overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1712956443676-76a1e230c898?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[150px] w-[250px]'/>
            <h1 className='px-3 py-1 font-bold'>Arish khan</h1>
            <p className='px-3 py-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit dolorem modi quidem, excepturi voluptas quibusdam, facilis cum accusantium, pariatur atque laborum</p>
        </div>
    </div>
  )
}

export default Card