import Head from "next/head"

import styles from '@/styles/Layout.module.css'
import Footer from "./Footer"
import Header from "./Header"


const Layout = ({ title, keywords, description, children }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
            </Head>

            <Header />

            <div className={styles.container}>
                {children}
            </div>

            <Footer />
        </div>
    )
}
export default Layout

//Set valores defaults para as props
Layout.defaultProps = {
    title: 'DJ Events | Find the hottest parties',
    description: 'Find the latest DJ and other muscal events',
    keywords: 'music, dj, edm, events'
}