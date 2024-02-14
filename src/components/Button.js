import { useState } from 'react'
import styles from './Button.module.css'

function Button() {
    const [click, setClick] = useState(0)

    return(
        <div className={styles.container}>
            <div className={styles.btns}>
                <div onClick={(e) => setClick(click + 1)} class={`${styles.btn} ${styles.btn1}`}> adicionar </div>
                <div onClick={(e) => setClick(0)} class={`${styles.btn} ${styles.btn2}`}> resetar </div>
            </div>
            <p className={styles.text} >Você clicou <span className={styles.num}>{click}</span> vezes</p>
        </div>
    )
}

export default Button