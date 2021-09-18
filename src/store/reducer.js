const defaultStateCustomer = {
    customers: [ {
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
        title: "Card 5",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
      },
      {
        id: 6,
        title: "Card 6",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint nostrum harum omnis delectus eius optio corporis reiciendis atque ab voluptatum consectetur, enim, quod explicabo inventore sapiente, laborum facere quis Magnam similique vel quis soluta nisi voluptas iure nesciunt adipisci nihil eius perspiciatis, consequuntur alias magni consectetur eaque illum, odio earum. Est nam temporibus ducimus veniam tempore possimus quibusdam molestias."
      }],
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