import img1 from "./img/img1.jpg"
import img2 from "./img/img2.jpg"
import img3 from "./img/img3.jpg"
import img4 from "./img/img4.jpg"

const defaultStateCustomer = {
    customers: [ 
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
    ],
  }

 export const reducer = (state = defaultStateCustomer, action) => {
    switch (action.type) {
      case "ADD_CUSTOMER":  
      return {
        ...state, customers: [...state.customers, action.payload]
      }
      
      case "GET_CUSTOMER": 
      // console.log(action.cash);
      return {
        ...state,  customers: state.customers.filter(customer => customer.id !== action.payload)
      }
      default:  return state
    }
  }