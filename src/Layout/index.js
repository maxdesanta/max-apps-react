// import html
import Footer from "../Components/Footer";
import Header from "../Components/Header";

// import css
import './style.css';

export default function Layout({children}) {
  return (
    <div className="container">
        {/* Header */}
        <Header />  
        {/* Main */}
        <main>
          <div className="wrapper">
            {children}
          </div>
        </main>
        {/* Footer */}
        <Footer />
    </div>
  )
}
