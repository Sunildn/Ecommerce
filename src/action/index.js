export const addItem = (payload)=>{
  return{type: "ADD_ITEM", payload}
}

export const deleteItem = (payload)=>{
  return{type: "DELETE_ITEM", payload}
}