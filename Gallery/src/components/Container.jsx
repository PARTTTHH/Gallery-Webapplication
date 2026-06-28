import React from 'react'
import {RiCloseFill} from '@remixicon/react'

const Container = ({elem, closePreview}) => {

    const previewImageUrl = `https://picsum.photos/id/${elem.id}/4096/2160`

  return (
        <div
        className='fixed inset-0 z-50 flex justify-center items-center bg-black/25 backdrop-blur-sm'
        onClick={closePreview}
        >

        <div 
        className='relative flex flex-col justify-center items-center w-400 h-250 bg-white/25 backdrop-blur-md rounded-2xl border-4 border-white/30 shadow-2xl overflow-hidden p-2'
        onClick={(e) => e.stopPropagation()}
      >

            <button
            onClick={closePreview}
            className='absolute top-2 right-4 text-white text-3xl font-bold z-10 hover:text-red-400 drop-shadow-md cursor-pointer'>
                <RiCloseFill />
            </button>

            <div
            className='w-full h-full rounded-2xl overflow-hidden'>
                <img className='w-full h-full object-contain' src={previewImageUrl} alt={elem.author} />
            </div>

            <div
            className='absolute bottom-4 bg-white/25 px-6 py-2 rounded-full backdrop-blur-md border border-white/20'>
                <h2 className='font-bold text-xl text-purple-500'>{elem.author}</h2>
            </div>

        </div>
        </div>
  )
}

export default Container
