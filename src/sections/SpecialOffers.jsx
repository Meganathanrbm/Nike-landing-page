import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffers = () => {
  return (
    <section className="max-container w-full gap-10 max-lg:flex-col-reverse flex xl:flex-row items-center justify-center max-sm:mt-12" id="special-offers">
      <div className="flex-1 flex justify-center items-center">
        <img src={offer}
        width={570} 
        height={522}
        className="object-contain w-full"
        alt="offers" />
      </div>
      <div className="flex-1 flex flex-col items-start justify-between ">
        <h2 className="text-4xl capitalize lg:max-w-lg font-palanquin font-bold"><span className="text-coral-red">Special</span>  Offer</h2>
        <p className="mt-4  info-text">Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
        <p className="mt-6  info-text">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
        <div className="mt-11 gap-4 flex flex-wrap">
          <Button
          label = "Shop now"
          iconURL={arrowRight}
          applyStyle="text-white"
          />
          <Button
          label = "Learn more"
          applyStyle="border-1 text-black bg-white border-black"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffers