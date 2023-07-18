import PropTypes from 'prop-types';
import style from './Filter.module.css'

export const Filter = ({setFilterToState}) =>{

    const setFilterValue = (event)=>{
        const value = event.currentTarget.value.toUpperCase();
        setFilterToState(value);
    }

    return(
        <div className={style.container}>
            <label className={style.label}>Find contacts by name</label>
            <br />
            <input className={style.input}  onChange={setFilterValue}></input>
        </div>
    )
}

Filter.propTypes = {
    setFilterToState: PropTypes.func.isRequired,
  };