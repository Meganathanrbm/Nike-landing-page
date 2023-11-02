import PopularProductCart from "../components/PopularProductCart"
import { products } from "../constants"

const PopularProduct = () => {
  return (
    <section className="max-container max-sm:mt-12" id="products">
      <div className="flex flex-col justify-start gap-6">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products</h2>
        <p className="text-slate-gray lg:max-w-lg mt-2 font-montserrat ">
        Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className="grid lg:grid-cols-4 mt-16 md:grid-cols-3 sm:grid-cols-2 gap-14 grid-cols-1">
        {
          products.map((product)=>(
            <PopularProductCart key={product} {...product} />
          ))
        }
      </div>
    </section>
  )
}

export default PopularProduct