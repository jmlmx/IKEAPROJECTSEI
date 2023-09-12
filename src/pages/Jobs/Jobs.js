import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Jobs.module.scss'

export default function Jobs() {

    return (
        <main className={styles.pic}>
            <div className={styles.job1}>
                <p>
                    No positions currently available. Please Check back soon.
                </p>
            </div>
        </main>
    )
}