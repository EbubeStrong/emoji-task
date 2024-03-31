import React, { useEffect } from 'react'
import { useState } from 'react'
// const apiKey = mo
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
// const apiUrl = `https://emoji-api.com/emojis?access_key=${apiKey}`

import '../Styles/EmojiCard.css'

const EmojiCard = () => {

  const [emojiData, setEmojiData] = useState({
    data: [],
    filteredData: []
  })
  const [input, setInput] = useState("")
  useEffect(() => {
    fetch("https://emoji-api.com/emojis?access_key=dc9be100e84f19a4eb9454e8542b2616dbca7c9c")
      .then(response => response.json())
      .then(emojiData => {
        setEmojiData(item => ({ ...item, data: emojiData }))
      })
      .catch(error => {
        console.log('Error fetching emojis:', error);
      });
  }, [])

  const filterEmoji = (ev) => {
    ev.preventDefault();
    let filteredData = input == "" ? [] : emojiData.data.filter(item => item.slug.toLowerCase().includes(input.toLowerCase()));
    setEmojiData(prev => ({ ...prev, filteredData }))
  }


  return (
    <>
      <form className="emojiForm" onSubmit={(e) => filterEmoji(e)}>
        <div className="inputForm">
          <input type="text" className="emojiInput" placeholder="Search Emoji" onKeyUp={(e) => setInput(e.target.value)} />
          <span className="loader">⏳</span>
        </div>

        <div className="btn">
          <button type="submit">
            🔍
          </button>
        </div>
      </form>

      <div className="card">
        <div id="emojiList">
          {emojiData.filteredData.map((item, index) => <span emoji-name={item.slug} key={index}>
            {item.character}
          </span>)}
        </div>
      </div>


    </>
  )
}

export default EmojiCard;