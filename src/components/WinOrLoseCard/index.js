// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {score, buttonEvntTrigger, iswon} = props

  const winOrLossImage = iswon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const headingEL = iswon ? 'You Won' : 'You Lose'
  const scoreEl = iswon ? 'Best Score' : 'Score'
  const btnEltrigger = () => {
    buttonEvntTrigger()
  }
  return (
    <div className="winContainer">
      <img src={winOrLossImage} alt="win or lose" className="winImage" />
      <div className="textContainer">
        <h1 className="heading">{headingEL}</h1>
        <p className="para">{scoreEl}</p>
        <p className="para_score">{score}/12</p>
        <button className="btnEl2" onClick={btnEltrigger} type="button">
          Play Again
        </button>
      </div>
    </div>
  )
}
export default WinOrLoseCard
