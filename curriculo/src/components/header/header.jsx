import styles from'./header.module.css'
import eu from '../../assets/eu.jpg'

export function Header() {
    return(
        <header className={styles.header}>
            <img src={eu} alt="minha foto"/>
        </header>
    )
}