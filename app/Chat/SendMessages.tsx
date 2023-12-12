"use client"
import React from 'react'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import ChatContent from './ChatContent'
import { useChat } from 'ai/react';


function SendMessages() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/OpenAI'
      })
   
     
          
    return (
        <>
            <ChatContent messages={messages} />
            <div className='w-full ClickOutsideBox text-sm rounded-xl mb-10'>
                <form onSubmit={handleSubmit} className='ClickOutsideBox pr-2 flex mx-10 my-5 space-x-5 items-center bg-[#3c393f] rounded-xl pl-2 ' >
                    <input value={input} onChange={handleInputChange}  type="text" placeholder=" Type a message here " className='ClickOutsideBox rounded-xl text-white flex-1 outline-none border-none  bg-transparent p-4 ' />
                    <button type="submit"><PaperAirplaneIcon className='w-6 h-6 text-white' /></button>
                </form>
            </div>
        </>
    )
}

export default SendMessages
