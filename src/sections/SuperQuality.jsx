import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
   <section id="about-us" className="max-container w-full max-lg:flex-col   flex   xl:flex-row items-center justify-between gap-10 max-sm:mt-12">
      <div className="flex-1 items-start flex flex-col">
        <h3 className="text-4xl capitalize lg:max-w-lg font-palanquin font-bold">We Provide You 
          <span className="text-coral-red">Super Quality</span> Shoes</h3>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className=" mt-11">
          <Button label="View details" applyStyle="text-white" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
          <img src={shoe8} 
          width={570} 
          height={522} 
          alt="Super Quality Shoe" 
          className="object-contain" />
      </div>
   </section>
  )
}

export default SuperQuality