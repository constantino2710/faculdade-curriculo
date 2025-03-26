import styles from'./header.module.css'
import eu from '../../assets/eu.jpg'

export function Header() {
    return(
        <header className='bg-[var(--gray-800)] flex justify-center  h-18 items-center'>
            <h1 className='text-2xl'>João Constantino</h1>
        </header>
    )
}