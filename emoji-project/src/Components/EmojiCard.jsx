import React, { useEffect } from 'react'
import { useState } from 'react'
// const apiKey = mo
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
// const apiUrl = `https://emoji-api.com/emojis?access_key=${apiKey}`

import '../Styles/EmojiCard.css'

const EmojiCard = () => {

  let data = []
  const [emojiData, setEmojiData] = useState([])
  const [input, setinput] = useState('')
  useEffect(() => {
      fetch("https://emoji-api.com/emojis?access_key=dc9be100e84f19a4eb9454e8542b2616dbca7c9c") 
      .then(response => response.json())
      .then(emojiData => {
        // setEmojiData(emojiData)
          // console.log(emojiData);
          data = emojiData; 
  // 
          // if(emojiInput.value !== ''){
          //     // data.forEach(emoji => {
          //     //     const span = document.createElement('span')
          //     //     span.setAttribute('emoji-name', emoji.slug)
          //     //     span.textContent = emoji.character
          //     //     emojisContainer.appendChild(span)
          //     // });
          //     // Append emojisContainer to card outside the loop
              
          // // card.appendChild(emojisContainer);
          // }
      })
      .catch(error => {
          console.log('Error fetching emojis:', error);
      });
    }, [])

    const filterEmoji = () => {

    }

// emojiForm.addEventListener('submit', e => {
//     e.preventDefault(); // Prevent the default form submission behavior
    
//     const searchTerm = emojiInput.value.trim(); // Trim to remove leading and trailing spaces
    
//     if (searchTerm) {
//         // Clear previous emoji elements
//         emojisContainer.innerHTML = '';

//         // Filter and append emojis that match the search term
//         data.forEach(emoji => {
//             if (emoji.slug.toLowerCase().includes(searchTerm.toLowerCase())) {
//                 const span = document.createElement('span')
//                 span.setAttribute('emoji-name', emoji.slug)
//                 span.textContent = emoji.character
//                 emojisContainer.appendChild(span)
//             }
//         });
//     } else {
//         // If input is empty, hide the emojisContainer
//         emojisContainer.style.display = 'none';
//     }
// });

  return (
    <>
    <form className="emojiForm">
    <div className="inputForm">
      <input type="text" className="emojiInput" placeholder="Search Emoji" />
      <span class="loader">⏳</span>
    </div>

    <div className="btn">
      <button type="submit">
        🔍
      </button>
    </div>
  </form>

  {input && <div className="card">
    <div id="emojiList">
      {emojiData.map(item => <span emoji-name = {item.slug}>
        {item.character}
      </span>)}
    </div>
  </div>}

  
  </>
  )
}

export default EmojiCard;