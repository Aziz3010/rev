import Link from 'next/link';
import React from 'react'
import styles from './dashboardNavbar.module.css'

function DashboardNavbar() {
    let pages = [
        {name: 'Customers', route: '/dashboard/customers'},
        {name: 'Invoices', route: '/dashboard/invoices'},
    ];

    let mapOnPages = () => {
        return pages.map((page, index)=>(
            <li key={index} className={styles.dashboardNavbar_ul_li}>
                <Link className={styles.dashboardNavbar_ul_li_a} href={page.route} >{page.name}</Link>
            </li>
        ));
    };

  return (
    <div className={styles.dashboardNavbar}>
        <h2>DashboardNavbar</h2>
    
        <ul className={styles.dashboardNavbar_ul}>
            {mapOnPages()}
        </ul>
    </div>
  )
}

export default DashboardNavbar