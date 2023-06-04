
import { useState, useEffect } from "react"
import Spinner from "./Spinner"
import axios from "axios"


function Tag()
{
    const API_KEY=process.env.REACT_APP_GIPHY_API_KEY
    const [gif, setGif]=useState('')
    const [loader, setloader]=useState('false')
    const [tag, setTag]=useState('');

    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`


    async function fetching()
    {
        setloader(true)
        const {data}= await axios.get(url)
        console.log('Dtata of Tag')
        console.log(data)
        const imageUrl=data.data.images.downsized_large.url

        setGif(imageUrl)
        setloader(false)
    }

    useEffect(()=>{
        fetching()
    },[])

    function changeHandler()
    {

        fetching()

    }


    return(
<div className="Tag">

<div className="tag-head">{tag} Gif</div>

        {
            loader?(<Spinner/>):(<img src={gif}/>)
        }

        <div className="button">

        <input type="text"placeholder="Search Here" onChange={(event)=>{


            setTag(event.target.value)
                

        }} ></input>

        <button className="btn" onClick={changeHandler} >Generate</button>
        </div>


</div>

    )

}


export default Tag