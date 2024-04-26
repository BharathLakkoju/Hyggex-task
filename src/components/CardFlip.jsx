import { useState } from 'react'
import { MdOutlineLightbulb } from "react-icons/md";
import { MdVolumeUp } from "react-icons/md";

const CardFlip = () => {
  const [activeCard, setActiveCard] = useState(false);
  const handleFlip = () => {
    setActiveCard(!activeCard)
  }
  return (
    <div>
      <div className='centered w-[700px] h-[400px] cursor-pointer'>
        <div
          onClick={handleFlip}
          className={`relative card ${activeCard ? 'cardFlip' : ''}`}>
          {/* front */}
          <div className='w-full h-full front'>
            <div className='flex items-center justify-between p-7'>
              <MdOutlineLightbulb size={34} style={{ color: 'white' }} />
              <MdVolumeUp size={34} style={{ color: 'white' }} />
            </div>
            <div className='flex items-center justify-center mt-[75px]'>
              <span className='text-[38px] font-semibold'>9 + 6 + 7x - 2x - 3</span>
            </div>
          </div>

          {/* back */}
          <div className="absolute top-0 w-full h-full back">
            <div className='flex items-center justify-between p-7'>
              <MdOutlineLightbulb size={34} style={{ color: 'white' }} />
              <MdVolumeUp size={34} style={{ color: 'white' }} />
            </div>
            <div className='flex items-center justify-center mt-[75px]'>
              <span className='font-semibold text-[38px]'>5x + 12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFlip