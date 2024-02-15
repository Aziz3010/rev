import React from 'react'
import styles from './navbar.module.css'
import Link from 'next/link'

function Navbar() {

    let pages = [
        {name: 'Home', route: '/'},
        {name: 'Dashboard', route: '/dashboard'},
        {name: 'Customers', route: '/dashboard/customers'},
        {name: 'Invoices', route: '/dashboard/invoices'},
    ];

    let mapOnPages = () => {
        return pages.map((page, index)=>(
            <li key={index} className={styles.navbar_ul_li}>
                <Link className={styles.navbar_ul_li_a} href={page.route} >{page.name}</Link>
            </li>
        ));
    };

    return (
        <nav className={styles.navbar}>
            <h1>Market</h1>

            <ul className={styles.navbar_ul}>
                {mapOnPages()}
            </ul>
        </nav>
    )
}

export default Navbar