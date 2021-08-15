import React, { useState } from "react";
import './App.css';
import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"
import img4 from "./img/img4.jpg"
import Modal from "./modalWindow/modal"
import AddModal from "./addModal/addModal.js"

function App() {

  const photoCard = [
    {
      id: 1,
      imgUrl: <img src={img1} />,
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
    {
      id: 2,
      imgUrl: <img src={img2} />,
      title: "Card 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
    {
      id: 3,
      imgUrl: <img src={img3} />,
      title: "Card 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
    {
      id: 4,
      imgUrl: <img src={img4} />,
      title: "Card 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
    {
      id: 5,
      imgUrl: <img src={img4} />,
      title: "Card 5",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
    {
      id: 6,
      imgUrl: <img src={img4} />,
      title: "Card 6",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    }
  ]

  const cardFunc = (item) => {
    setCurrentCard(item);
  }

  const deleteFunc = (pos) => {
    const newDeleteCard = deleteCard.filter(item => item.id != pos)

    setDeleteCard(newDeleteCard)
    console.log(deleteCard)
  }

  const [modalAddCard, setModalAddCard] = useState()
  const [modalActive, setModalActive] = useState()
  const [currentCard, setCurrentCard] = useState()
  const [deleteCard, setDeleteCard] = useState(photoCard)

  const visibleCard = deleteCard.map((item, pos) => {

    return (
      <div className="card" key={item.id}>
        <div>
        <div className="card-image" onClick={() => { setModalActive(true); cardFunc(item) }}>
          {item.imgUrl}
        </div>
        </div>
        <div className="card-title">
          {item.title}
        </div>
        <div className="card-description">
          {item.description}
        </div>
        <button className="deleteBtn" onClick={() => { deleteFunc(item.id) }}>Delete post</button>
      </div>
    )
  })

  return (
    <div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        card={currentCard}
      />
      <AddModal
        addModalActive={modalAddCard}
        setAddModalActive={setModalAddCard}
        postArr={deleteCard}
      />
      <div className="addBtn">
        <button className="showAddModal" onClick={() => { setModalAddCard(true) }}>add post</button>
      </div>
      <div className="container">
        {visibleCard}
      </div>
    </div>
  );

}

export default App;
