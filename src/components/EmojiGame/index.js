/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {emojiClicked: [], totalScore: 0, winOrLoss: false}

  onEmojiClicked = id => {
    const {emojisList} = this.props
    const {emojiClicked} = this.state
    if (!emojiClicked.includes(id)) {
      this.setState(prevState => ({
        emojiClicked: [...prevState.emojiClicked, id],
      }))
    } else {
      this.setState({winOrLoss: true})
    }
    if (
      !emojiClicked.includes(id) &&
      emojiClicked.length + 1 === emojisList.length
    ) {
      this.setState({winOrLoss: true})
    }
  }

  buttonEvntTrigger = () => {
    const {emojiClicked, totalScore} = this.state
    const {emojisList} = this.props
    if (emojiClicked.length > totalScore) {
      this.setState({totalScore: emojiClicked.length})
    }

    this.setState({emojiClicked: [], winOrLoss: false})
  }

  render() {
    const {emojiClicked, totalScore, winOrLoss} = this.state
    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <>
        <NavBar
          score={emojiClicked.length}
          totalScore={totalScore}
          winOrLoss={winOrLoss}
        />
        <div className="bg_container">
          {!winOrLoss && (
            <ul className="emojiListContainer">
              {shuffledEmojisList().map(eachItem => (
                <EmojiCard
                  listEl={eachItem}
                  key={eachItem.id}
                  onEmojiClicked={this.onEmojiClicked}
                />
              ))}
            </ul>
          )}
          {winOrLoss && (
            <WinOrLoseCard
              score={emojiClicked.length}
              totalScore={totalScore}
              winOrLoss={winOrLoss}
              buttonEvntTrigger={this.buttonEvntTrigger}
              iswon={shuffledEmojisList().length === emojiClicked.length}
            />
          )}
        </div>
      </>
    )
  }
}

export default EmojiGame
