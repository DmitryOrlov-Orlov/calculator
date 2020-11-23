
import './App'


function ButtonNumber(props) {
  return (

    <button className="ButtonNumber" value={props.number} onClick={props.buttonNumberHandler} >
      <p>{props.number}</p>
    </button>
  )
}

export default ButtonNumber;