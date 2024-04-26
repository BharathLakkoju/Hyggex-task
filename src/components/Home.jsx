import Accordion, { AccordionItem } from "./Accordion"
import CardFlip from "./CardFlip"
import reset from "../assets/reset.png"
import left from "../assets/left.png"
import right from "../assets/right.png"
import fullscreen from "../assets/fullscreen.png"
import icon from "../assets/icon.png"
import plus from "../assets/plus.png"
import logo from "../assets/logo2.png"

const Home = () => {
  const accordionData = [
    {
      title: 'Can education flashcards be used for all age groups?',
      value: '1',
      content: 'Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college - level and adult learners.',
    },
    {
      title: 'How do education flashcards work?',
      value: '2',
      content: 'Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other.Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.',
    },
    {
      title: 'Can education flashcards be used for test preparation?',
      value: '3',
      content: 'Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts.They provide a quick and focused way to reinforce knowledge before exams.',
    },
  ]
  return (
    <>
      <div className="mt-10">
        <div className="logoName">
          <span className="text-[32px] font-bold head">Relations and Functions ( Mathematics )</span>
        </div>
        <div className="flex items-center justify-center w-full mt-16">
          <ul className="w-[500px] flex justify-between items-start font-medium text-xl text-gray">
            <li className="text-darkblue font-[700] flex justify-center items-center flex-col gap-1">
              <a href="#">Study</a>
              <div className="bg-darkblue w-16 h-0.5 rounded-lg"></div>
            </li>
            <li>
              <a href="#">Quiz</a>
            </li>
            <li>
              <a href="#">Test</a>
            </li>
            <li>
              <a href="#">Game</a>
            </li>
            <li>
              <a href="#">Others</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center m-14">
        <CardFlip />
        <div className="flex justify-between items-center w-[600px] m-10">
          <div className="reset">
            <img src={reset} alt="reset" />
          </div>
          <div className="flex items-center justify-around w-[300px]">
            <img src={left} alt="left" />
            <span className="text-2xl font-bold text-slate-900">01/10</span>
            <img src={right} alt="right" />
          </div>
          <div>
            <img src={fullscreen} alt="fullscreen" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center m-14">
        <div className="w-[70%] flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center w-20 h-20 rounded-full dropShadow">
              <img src={icon} alt="icon" />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-[13px] font-bold text-gray">Published by</span>
              <img src={logo} alt="bottom logo" />
            </div>
          </div>
          <div>
            <div className="flex gap-5">
              <img src={plus} alt="plus" />
              <span className="text-4xl font-[600] flashcard">Create Flashcard</span>
            </div>
          </div>
        </div>
      </div>
      <span className="p-2 text-4xl font-bold head">FAQ</span>
      <div className="flex flex-col ml-[320px] mt-16">
        <Accordion className="">
          {accordionData.map((item) => (
            <AccordionItem key={item.value} value={item.value} trigger={item.title}>
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  )
}

export default Home