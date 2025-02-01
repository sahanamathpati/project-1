import './Background.css';
import car1 from '../../assets/car1.png';
import car from '../../assets/car.mp4';
import car2 from '../../assets/car2.png';
import car3 from '../../assets/car3.jpg';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="Background" autoPlay loop muted>
        <source src={car} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={car1} className="Background fade-in" alt="Car" />;
  }else if (heroCount ===1){
    return <img src={car2} className="Background fade-in" alt="Car"/>;
  }else if (heroCount===2){
    return <img src={car3} className="Background fade-in" alt="Car"/>;
  }
};

export default Background;
