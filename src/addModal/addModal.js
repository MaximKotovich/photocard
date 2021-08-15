import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import "./addModal.css";
import img2 from "./img2.jpg"


export default function Modal({ addModalActive, setAddModalActive, postArr }) {

  function createPost(title, descr) {
    const post =
    {
      id: postArr.length + 1,
      imgUrl: <img src={img2} />,
      title: title,
      description: descr
    }
    postArr.push(post)
  }
  const [titleCard, setTitleCard] = useState()
  const [descriptionCard, setDescriptionCard] = useState()
  if (postArr) {
    return (
      <div className={addModalActive ? "modalAdd active" : "modalAdd"} onClick={() => setAddModalActive(false)}>
        <div className="addCard" autocomplete="off" onClick={e => e.stopPropagation()}>
          <div className="bodyAddCard">
            <div>
              <label>Введите заголовок<span>*</span></label>
              <input type='text' onChange={(e) => { setTitleCard(e.target.value) }} required />
            </div>
            <div>
              <label>Введите описание</label>
              <textarea placeholder="Введите сообщение" cols="30" rows="5" onChange={(e) => { setDescriptionCard(e.target.value) }}></textarea>
            </div>
            <button className="bot-send-mail" onClick={() => { setAddModalActive(false); createPost(titleCard, descriptionCard) }}>Создать</button>
          </div>
        </div>
      </div>
    )
  } else { return (null) }
}