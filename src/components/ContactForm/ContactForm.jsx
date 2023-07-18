import style from './ContactForm.module.css'
import PropTypes from 'prop-types';

export const ContactForm = ({onSubmitData}) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        let contactForAdd = { name: form.name.value, number: form.number.value };
        onSubmitData(contactForAdd);
        form.reset();
      };

    return(
        <div>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.container}>
                    <label className={style.label}>Name</label>
                    <br />
                    <input className={style.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        placeholder='Enter name'
                    />

                    <br/>
                    <label className={style.label}>Number</label>
                    <br/>
                    <input className={style.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        placeholder='Enter number'
                    />
                </div>
                <div>
                    <button className={style.button} type='submit'>Add Contact</button>
                </div>
            </form>
        </div>
    )
}

ContactForm.propTypes = {
    onSubmitData: PropTypes.func.isRequired
};