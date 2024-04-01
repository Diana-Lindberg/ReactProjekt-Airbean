import header from '/assets/graphics-header.svg'
import footer from '/assets/graphics-footer.svg'
import pic from '/assets/eva-cortado.jpg'
import Text from '../components/Text'
import HamburgerMenu from '../components/HamburgerMenu'
import './About.css'

function About(){
    return(
        <div>
             <HamburgerMenu />
            <img src={header} alt="" />
            <h1>Vårt Kaffe</h1>
            <img src={pic} alt="" />
            <img src={footer} alt="" />
            <Text />
        </div>
    )
}

export default About;