const initilalState = [
  {
    name: "anor",
    turi: "meva",
    soni: 15
  },
  {
    name: "olma",
    turi: "meva",
    soni: 20
  },
  {
    name: "computer",
    turi: "texnika",
    soni: 10
  }, 
]

const projectReducer = (state = initilalState, action) => {
  switch(action.type){
    case "ADD_MAHSULOT": 
      state = [...state, action.payload];
      return state;
      default :
        return state;
  }
} 

export default projectReducer;