import drone from '/assets/drone.svg'
import './OrderStatus.css'

function OrderStatus(){
return(
    <div className='status'>
        <p className='order'>ordernummer:</p>
         <img src={drone} alt="" />
        <h1 className='status-heading'>Din beställning är på väg!</h1>
        <p className='status-time'> minuter</p>
        <button className='status-button'>Ok,cool!</button>
    </div>
)
}

export default OrderStatus;