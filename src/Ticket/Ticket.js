import "./Ticket.css";
import logo from "../images/logo.png";
import transfer from "../images/transfer.png";

function Ticket({
  origin,
  origin_name,
  destination,
  destination_name,
  departure_date,
  departure_time,
  arrival_date,
  arrival_time,
  stops,
  price,
  currency,
  rate
}) {

  let stopsText = "ПЕРЕСАД";

  if (stops === 0) {
    stopsText += "ОК";
  } else if (stops === 1) {
    stopsText += "КА";
  } else {
    stopsText += "КИ";
  }

  return (
    <div className="ticket-container">
      <div className="ticket-info">
        <div className="company-img">
          <img className="logo" src={logo} alt="company" />
        </div>
        <button className="price">
          <div className="price-text">Купить за {Math.round(price / rate)} {currency}</div>
        </button>
      </div>
      <div className="details">
        <div className="time">{departure_time}</div>
        <div className="place">{origin}, {origin_name}</div>
        <div className="date">{departure_date}, Пт</div>
      </div>
      <div className="transfer">
        <div className="transfer-count">{stops} {stopsText}</div>
        <div className="transfer-img">
          <img className="plane" src={transfer} alt="flight" />
        </div>
      </div>
      <div className="details">
        <div className="time">{arrival_time}</div>
        <div className="place">{destination_name}, {destination}</div>
        <div className="date">{arrival_date}, Пт</div>
      </div>
    </div>
  );
}

export default Ticket;
