import React, { useState } from "react";
import './App.css';
import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"
import img4 from "./img/img4.jpg"
import Modal from "./modalWindow/modal"

function App() {

  const img = [
    <img src={img1} />,
    <img src={img2} />,
    <img src={img3} />,
    <img src={img4} />,
    <img src={img4} />,
    <img src={img4} />,
  ]





  const photoCard = [
    {
      id: 1,
      title: "Card 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
    {
      id: 2,
      title: "Card 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
    {
      id: 3,
      title: "Card 3",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
    {
      id: 4,
      title: "Card 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
    {
      id: 5,
      title: "Card 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
    {
      id: 6,
      title: "Card 4",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
    },
  ]
  const [modalActive, setModalActive] = useState(false)
  const visibleCard = photoCard.map((item) => {
    return (
      <div className="card" key={item.id}>
        <div className="card-image" onClick={() => { setModalActive(true) }}>
          {img[item.id - 1]}
        </div>
        <div className="card-title">
          {item.title}
        </div>
        <div className="card-description">
          {item.description}
        </div>
      </div>
    )
  })
  return (
    <div>
      {/* <Modal 
        active={modalActive} 
        setActive={setModalActive} 
        id={photoCard.id}
        title={photoCard.title}
        description={photoCard.description}
        />  */}
      <div className={modalActive ? "modalWindow active" : "modalWindow"} onClick={() => setModalActive(false)}>
        <div className="obratnuj-zvonok" autocomplete="off" onClick={e => e.stopPropagation()}>
          <div className="card" key={photoCard.id}>
            <div className="card-image">
              {/* {img[item.id-1]} */}
            </div>
            <div className="card-title">
              {photoCard.title}
            </div>
            <div className="card-description">
              {photoCard.description}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {visibleCard}
      </div>
    </div>
  );
}

export default App;
