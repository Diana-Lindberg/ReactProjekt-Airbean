import left from '/assets/intro-graphic-left.svg'
import right from '/assets/intro-graphic-right.svg'
import main from '/assets/airbean-landing.svg'

import './Splashscreen.css'


function Splashscreen (){
    return (
        <div className='landing'>
            <img className='left-img' src={left} alt="Left Graphic" />
            <img className='logo' src={main} alt="Main Graphic" />
            <img className='right-img' src={right} alt="Right Graphic" />
           
        </div>
    );
}

export default Splashscreen;