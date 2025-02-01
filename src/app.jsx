import { useState } from "react"
import background from "./Components/Background/Background";


const app = () => {
    let heroData = [
        {text1:"Dive into",text2:"what you love"},
        {text1:"Indulge",text2:"your passions"},
        {text1:"Give in to",text2:"your passions"},
    ]
    const [heroCount,setHeroCount]=useState(2);
    const [playStatus,setPlayStatus]=useState(flase);
  return (
    <div>
      <background playStatus={playStatus} heroCount={heroCount}/>
    </div>
  )
}

export default app
