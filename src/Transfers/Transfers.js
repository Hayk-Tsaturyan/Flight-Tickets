import './Transfers.css';

function Transfers({ handleChange }) {
  return (
    <div className='transfers-container'>
      <div className='transfers-title'>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className='checkbox-wrapper'>
        <label className='checkbox-label'>Все
          <input onChange={handleChange} value='' type='checkbox' />
          <span className='checkbox-container'></span>
        </label>
      </div>
      <div className='checkbox-wrapper'>
        <label className='checkbox-label'>Без пересадок
          <input onChange={handleChange} value='0' type='checkbox' />
          <span className='checkbox-container'></span>
        </label>
      </div>
      <div className='checkbox-wrapper'>  
        <label className='checkbox-label'>1 пересадка
          <input onChange={handleChange} value='1' type='checkbox' />
          <span className='checkbox-container'></span>
        </label>
      </div>
      <div className='checkbox-wrapper'>
        <label className='checkbox-label'>2 пересадки
          <input onChange={handleChange} value='2' type='checkbox' />
          <span className='checkbox-container'></span>
        </label>
      </div>
      <div className='checkbox-wrapper'>
        <label className='checkbox-label'>3 пересадки
          <input onChange={handleChange} value='3' type='checkbox' />
          <span className='checkbox-container'></span>
        </label>
      </div>
    </div>
  )
}

export default Transfers;
