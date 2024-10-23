import { createSlice } from "@reduxjs/toolkit";




export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers:{

        // to add items to state
        addWishlistItem : (state, action)=>{
            state.push(action.payload)
        },

        deleteWishlistItem : (state, action)=>{
           return state.filter((item)=>item.id != action.payload)
        }
    }
})

export const {addWishlistItem, deleteWishlistItem} = wishlistSlice.actions
export default wishlistSlice.reducer