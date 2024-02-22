// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, totalScore, winOrLoss} = props
  const display = winOrLoss ? 'contentdisplay' : null
  return (
    <nav className="Container">
      <div className="navBarContainer">
        <div className="emojiimageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="navBarImage"
          />
          <h1 className="nav_heading">Emoji Game</h1>
        </div>
        <p className={`nav_paraScore ${display}`}>Score: {score}</p>
        <p className={`nav_paraTopScore ${display}`}>Top Score: {totalScore}</p>
      </div>
    </nav>
  )
}
export default NavBar
