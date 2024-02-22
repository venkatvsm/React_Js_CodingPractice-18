// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {listEl, onEmojiClicked} = props
  const {id, emojiName, emojiUrl} = listEl
  const onChangeBtnTrigger = () => {
    onEmojiClicked(id)
  }
  return (
    <li className="itemsContainer">
      <button className="btnEl" onClick={onChangeBtnTrigger} type="button">
        <img src={emojiUrl} className="emojiimage" alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
