import './Hero.css'
import pause from '../../assets/pause.png'
import play from '../../assets/play.jpg'
import arrow from '../../assets/arrow.jpg'

const Hero =({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}) => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <p>Explore the features</p>
                <img src={arrow} alt="" />
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=>setHeroCount(0)} className={heroCount===0?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount===1?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setHeroCount(2)} className={heroCount===2?"hero-dot orange":"hero-dot"}></li>
                </ul>
                <div className="hero-play">
                    <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus?pause:play} alt=""/>
                    <p>see the video</p>
                </div>

            </div>


        </div>
    )
}

export default Hero
