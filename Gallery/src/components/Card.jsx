import React from 'react'

const Card = ({elem, onImageClick}) => {

    const optimizedImageUrl = `https://picsum.photos/id/${elem.id}/400/400`;
    
    return (
        <div className='hover:scale-95 transition-transform duration-200 cursor-pointer'>
                <div onClick={onImageClick} className='h-48 w-48 overflow-hidden rounded-xl'>
                    <img className='h-full w-full object-cover' src={optimizedImageUrl} alt="" /> 
                </div>
                <h2 className='font-bold text-lg mt-2 truncate'>{elem.author}</h2>
        </div>
    )
}

export default Card