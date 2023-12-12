import React, { useEffect, useRef, useState } from 'react'
import Avatar from "@/public/Avatar.png"
import MeAvatar from "@/public/MeAvatar.png"
import Image from 'next/image'

function ChatContent({ messages }: any) {
  const endOfMessagesRef = useRef<any>(null)

  useEffect(() => {
    endOfMessagesRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);


  return (
    <div className='flex-1 px-3 py-2 overflow-y-auto'>

      <ul className='w-full pt-24'>
        {messages.length === 0 ? <p className='text-center text-white'>Type a message about your issue</p> : messages.map((msj: any, index: number) => {
          const isMe = msj.role === "user";
          return (
            <li key={index} className={`flex gap-3 ${isMe ? 'justify-end' : 'justify-start'} mb-2`}>
              {isMe ? null : <Image className="w-8 h-8 rounded-full" src={Avatar} width={500} height={500} alt='' />}
              <div className={`flex flex-col max-w-xs ${isMe ? 'items-end' : 'items-start'}`}>
                <div className={`${isMe ? 'bg-green-500' : 'bg-gray-200'} rounded px-4 py-2`}>
                  <p className={`text-sm ${isMe ? 'text-white' : 'text-gray-900'} `}>{msj.content}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1"></span>
              </div>
              {isMe ? <Image className="w-8 h-8 rounded-full" src={MeAvatar} width={500} height={500} alt='' /> : null}
            </li>
          )
        })}
        <div ref={endOfMessagesRef} />
      </ul>
    </div>
  )
}

export default ChatContent








/*
<div className="flex items-start gap-2 mb-2">
                  <Image className="w-8 h-8 rounded-full" src={Elon} width={500} height={500} alt=''/>
                        <div className="flex flex-col max-w-xs">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-semibold text-gray-900">AI</span>
                            <span className="text-sm text-gray-500">11:46</span>
                          </div>
                          <div className="bg-gray-100 rounded px-4 py-2">
                            <p className="text-sm text-gray-900">{msj.content}</p>
                          </div>
                        </div>
                      </div>
*/

/*
<li key={index} className={`flex ${msj.role === 'user' ? ' ' : ''} gap-2.5`}>
              <Image className="w-8 h-8 rounded-full" src={msj.role === 'user' ?  '': Elon} width={500} height={500} alt=''/>
                  <div className="flex flex-col w-full max-w-[320px] leading-1.5 ">
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                          <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:46</span>
                      </div>
                      <p className="text-sm font-normal py-2 text-gray-900 dark:text-white"> {msj.content}</p>
                      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                  </div>
              </li>
*/



