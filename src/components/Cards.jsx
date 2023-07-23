import React, { useEffect, useState } from 'react'

const Cards = () => {
    const [meme,setMeme] = useState('')
    

    useEffect(()=>{
        getMeme()
    },[])

    const getMeme = ()=>{
      
        fetch(' https://meme-api.com/gimme/2')
            .then(response => response.json())
            .then(result => {
             setMeme(result.memes[0].url)
             console.log(result.memes[0])
            })
            .catch(error => {
              console.error('Error:', error);
            });
    }

    const handleClick = ()=>{
        getMeme()
    }





    return (
        <>

            <div className='  w-[600px] h-[300px] m-10 mt-[5%] ml-[35%] justify-evenly '> 
            <p className='ml-[20%] mb-6 text-2xl font-bold text-blue-900' >Meme Generator</p>

                <div 
                className='bg-white-800 w-[400px] h-[100%] rounded-lg flex-col shadow-xl flex overflow-hidden'>
                
               <img src={meme} className='object-contain w-full h-full mx-0 my-0 p-2' />
                </div>

                <button onClick={handleClick}
                 className='bg-blue-500 mt-6 ml-[22%] w-[150px] rounded-md h-8 text-white'>
                 Generate
                 </button>
             </div>
        </>
    )
}

export default Cards
