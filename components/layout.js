import Header from "components/header"
import Footer from "components/footer"

export default function Layout({children, isHome}) {
    return (
        <>
            <Header isHome={isHome}/>
        
            <main>{children}</main>

            <Footer />
        </>
    )
}
