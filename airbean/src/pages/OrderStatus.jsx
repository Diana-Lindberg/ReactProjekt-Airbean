import drone from '/assets/drone.svg'
import './OrderStatus.css'

function OrderStatus(){
return(
    <div className='status'>
        <p>ordernummer:</p>
         <img src={drone} alt="" />
        <h1>Din beställning är på väg!</h1>
        <p> minuter</p>
        <button>Ok,cool!</button>
    </div>
)
}

export default OrderStatus;