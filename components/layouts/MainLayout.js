import Header from '../Header/Header'
import Footer from '../Footer/Footer'
// import dynamic from 'next/dynamic'

// const DynamicComponentWithNoSSR = dynamic(
//     () => import('../Header/Header'),
//     { ssr: false }
// )

export default function MainLayout(props) {
    return(
        <>
            {/* <DynamicComponentWithNoSSR /> */}
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}