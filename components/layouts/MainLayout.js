import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export default function MainLayout(props) {
    return(
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}