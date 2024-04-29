import './Currency.css';

function Currency({ handleClick }) {
  return (
    <div className='currency-container'>
      <div className='currency-title'>ВАЛЮТА</div>
      <div className='buttons-container'>
        <button onClick={handleClick} value="rub" className='currency-button'>RUB</button>
        <button onClick={handleClick} value="usd" className='currency-button'>USD</button>
        <button onClick={handleClick} value="eur" className='currency-button'>EUR</button>
      </div>
    </div>
  )
}

export default Currency;
