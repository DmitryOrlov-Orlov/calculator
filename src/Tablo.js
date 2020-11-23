
import './App'

function Tablo(props) {
  return (
    <div className="Tablo">
      <div className="name">Обычный</div>
      <div className="formula">2235+5</div>
      <div className="actions">{props.enteredNumber}</div>
    </div>
  )
}

export default Tablo;