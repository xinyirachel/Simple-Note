import Header from './Header'
import Footer from "./Footer"; 
const NotFound = () => {
  return (
    <div>
      <Header />
      <div className="section-center">
      <h1>Whoops!</h1>
      <h2>
      404 Page Not Found
      </h2>
      <div>Try our links on navigation bar above instead XD</div>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound