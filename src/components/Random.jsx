

import { useEffect, useState } from "react"
import axios from "axios"
import Spinner from "./Spinner"

function Random()
{
    const API_KEY= process.env.REACT_APP_GIPHY_API_KEY

    const [gif, setGif]=useState('')

    const [loader, setLoader]=useState('false')

    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

    async function fetching()
    {
        setLoader(true)
        const {data} = await axios.get(url)
        const result = await axios.get(url)
        console.log("result")
        console.log(result)
       

         const imageUrl=data.data.images.downsized_large.url
        //  const imageUrl=result.data.images.downsized_large.url
       
         console.log(imageUrl)
            setGif(imageUrl)

            console.log(gif)

            setLoader(false)
         
    }

    useEffect(()=>{

        fetching()
    },[])


    function clickHandler()
    {
        fetching();


    }

   


   
      




    console.log(loader)

    return(
     
        <div className="random-div">

          

        {

            

            loader?(<Spinner/>):( <img  src={gif}   />)
        }

        
        
       
        <button className="btn" onClick={clickHandler} >Generate Random</button>
      

       

        

        


        </div>


    )
}


export default Random