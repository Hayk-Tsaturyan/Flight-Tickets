import './Filters.css';
import Currency from '../Currency/Currency';
import Transfers from '../Transfers/Transfers';

function Filters({ handleClick, handleChange }) {
  
  return (
    <div className='filters-container'>
      <Currency handleClick={handleClick} />
      <Transfers handleChange={handleChange} />
    </div>
  )
}

export default Filters;
