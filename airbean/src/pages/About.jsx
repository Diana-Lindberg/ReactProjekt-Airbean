import header from '/assets/graphics-header.svg'
import footer from '/assets/graphics-footer.svg'
import pic from '/assets/eva-cortado.jpg'
import nav from '/assets/navicon.svg'
import Text from '../components/Text'
import './About.css'

function About(){
    return(
        <div>
            <img src={header} alt="" />
            <img src={nav} alt="" />
            <h1>Vårt Kaffe</h1>
            <img src={pic} alt="" />
            <img src={footer} alt="" />
            <Text />
        </div>
    )
}

export default About;