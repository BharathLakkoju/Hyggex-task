import home from "../assets/home.png"
import rightArrow from "../assets/rightArrow.png"

const Breadcrumb = () => {
  return (
    <div className="flex ml-[310px] mt-10 items-center justify-start text-lg gap-3 text-gray">
      <div>
        <img src={home} alt="home" />
      </div>
      <div>
        <img src={rightArrow} alt="right" />
      </div>
      <div>
        <span>Flashcard</span>
      </div>
      <div>
        <img src={rightArrow} alt="right" />
      </div>
      <div>
        <span>Mathematics</span>
      </div>
      <div>
        <img src={rightArrow} alt="right" />
      </div>
      <div className="text-darkblue font-semibold">
        <span>Relation and Function</span>
      </div>
    </div>
  )
}

export default Breadcrumb