import BestSales from "../../components/best-sales/BestSales"
import CategoriesCarousel from "../../components/categories-carousel/CategoriesCarousel"
import Hero from "../../components/hero/Hero"
import MainProducts from "../../components/main-products/MainProducts"
import "./Home.scss"
const Home = () => {
  return (
    <div>
        <Hero/>
        <CategoriesCarousel/>
        <BestSales/>
        <MainProducts/>
    </div>
  )
}

export default Home
