import PropTypes from 'prop-types';
import style from './Section.module.css'

export const Section = ({title}) => {
    return(
        <section className={style.section}>
            <h1>{title}</h1>
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string
}