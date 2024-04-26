import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex justify-around items-center text-lg">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="w-[500px] flex justify-around items-center">
        <ul className="w-[500px] flex justify-around items-center list-none">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Flashcard</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li className="login">
            <a href="#">Login</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar