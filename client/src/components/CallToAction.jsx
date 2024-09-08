import React from 'react'
import { Button } from 'flowbite-react';

export default function () {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className='flex-1 justify-center flex flex-col'>
            <h2 className='text-2xl'>
                Want to learn more about this project?
            </h2>
            <p className='text-gray-500 my-2'>
                Check out my Github page for more information
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-xl '><a href='google.com' target='_blank' rel='noopener noreferrer'>Learn More</a></Button>
        </div>
        <div className='p-7 flex-1'>
            <img src='https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg'/>
        </div>
    </div>
  )
}
