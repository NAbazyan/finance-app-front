import React from 'react'
import s from './Box.module.sass'


const Box = ({title, className, children}) => {
    return (
        <section className={s.box}>
            <h2 className={s.title}>{title}</h2>
            <div className={`${s.children} ${className}`}>
                {children}
            </div>
        </section>
    )
}


export default Box