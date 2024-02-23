// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, totalScore, winOrLoss} = props
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
        {!winOrLoss && (
          <div className="scoreContainer">
            <p className="nav_paraScore">Score: {score}</p>
            <p className="nav_paraTopScore">Top Score: {totalScore}</p>
          </div>
        )}
      </div>
    </nav>
  )
}
export default NavBar
