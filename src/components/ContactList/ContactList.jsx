import PropTypes from 'prop-types';
import style from './ContactList.module.css';

export const ContactList = ({contacts, del}) => {
    return(
        <div> 
            <ul className={style.contacts}>
                {contacts.map(({name, number, id}) =>{
                      return (
                    <div className={style.container} key={id}>
                        <li className={style.item}>
                            {name}: {number}
                            <button className={style.button}
                                data-id= {id}
                                onClick= {()=> del(id)}>
                                Delete
                            </button>
                        </li>
                        
                    </div>
                        )   
                    }
                )}
                
            </ul>
        </div>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    del: PropTypes.func,
  };