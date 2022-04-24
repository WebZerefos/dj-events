import Link from 'next/link'
import styles from '@/styles/Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; DJ Events 2022</p>
            <p>
                <Link href='/about'>
                    about this page
                </Link>
            </p>
        </footer>
    )
}
export default Footer