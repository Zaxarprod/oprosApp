import React from "react"
import style from './Nav.module.scss'

export const Nav = () => {
    return (
        <ul className={style.nav}>
            <li>Home</li>
            <li>Opros</li>
            <li>Contacts</li>
        </ul>
    )
}