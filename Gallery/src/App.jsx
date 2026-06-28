import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Container from './components/Container'

const App = () => {

  const [userData, setUserData] = useState([])
  const [Index, setIndex] = useState(1)

  const [selectedImage, setSelectedImage] = useState(null)

  const GetData = async () => {
   const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=36`)
   setUserData(response.data)
  }

  useEffect(function(){
    GetData();
  },[Index])

  return (
    <div className='bg-black flex flex-col h-screen p-4 text-white relative'>

      {selectedImage && (
      <Container 
      elem={selectedImage}
      closePreview={()=>{setSelectedImage(null)}} 
      />
      )}

      <div className='flex-1 overflow-y-auto flex flex-wrap justify-center gap-4 p-2'>
        {userData.length > 0 ? (
          userData.map((e, idx) =>( 
            <Card 
            key={idx}
            elem={e}
            onImageClick={()=>setSelectedImage(e)} 
            />
          ))
         ) : (
          <h3 className='text-purple-500 text-xm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>
        )}
      </div>

      <div className='flex-none flex justify-center gap-6 items-center p-4 mt-4'>
        <button
        style={{opacity: Index == 1 ? 0.6: 1}}
         className='bg-purple-400 text-sm cursor-pointer text-black rounded-2xl px-4 py-2 font-semibold active:scale-95'
         onClick={() => {
            if(Index > 1){
              setIndex(Index - 1);
              setUserData([])
            }
         }}
         >PREV</button>
         <h4 className='text-purple-500'>Page {Index}</h4>
        <button 
        className='bg-purple-400 text-sm cursor-pointer text-black rounded-2xl px-4 py-2 font-semibold active:scale-95'
        onClick={() => {
          setUserData([])
          setIndex(Index + 1)
        }}
        >NEXT</button>
      </div>
    </div>
  )
}

export default App