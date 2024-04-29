import React, { useEffect, useState } from "react";
import Filters from "./Filters/Filters";
import Ticket from "./Ticket/Ticket";
import Tickets from "./Tickets/Tickets";

function App() {
  const [ticketData, setTicketData] = useState([]);
  
  const getData = () => {
    fetch("tickets.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setTicketData(myJson.tickets);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedCurrency, setSelectedCurrency] = useState("₽");
  const [selectedRate, setSelectedRate] = useState(1);

  // Currency Filter
  const handleClick = (event) => {
    let currency = "₽";
    let rate = 1;
    
    if (event.target.value === "usd") {
      currency = "$";
      rate = 100;
    } else if (event.target.value === "eur") {
      currency = "€";
      rate = 120;
    }

    setSelectedCurrency(currency);
    setSelectedRate(rate);
  };

  // Checkbox Filter
  const handleChange = (event) => {
    let array = selectedCategory;

    if (event.target.checked) {
      array.push(event.target.value);
    } else {
      array = array.filter((val) => val !== event.target.value);
    }
    setSelectedCategory([...array]);
  };

  function filteredData(tickets, selected) {
    let filteredTickets;

    // Selected Filter
    if (selected.includes("") || !selected.length) {
      filteredTickets = tickets;
    } else if (selected) {
      filteredTickets = tickets.filter((ticket) =>
        selected.includes("" + ticket.stops)
      );
    }

    return filteredTickets.map(
      ({
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
      }) => (
        <Ticket
          key={Math.random()}
          origin={origin}
          origin_name={origin_name}
          destination={destination}
          destination_name={destination_name}
          departure_date={departure_date}
          departure_time={departure_time}
          arrival_date={arrival_date}
          arrival_time={arrival_time}
          stops={stops}
          price={price}
          currency={selectedCurrency}
          rate={selectedRate}
        />
      )
    );
  }

  const result = filteredData(ticketData, selectedCategory);

  return (
    <div className="wrapper">
      <Tickets result={result} />
      <Filters handleClick={handleClick} handleChange={handleChange} />
    </div>
  );
}

export default App;
