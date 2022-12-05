import {configureStore} from '@reduxjs/toolkit'
import productSlice from './slices/product.slice'
import recipeSlice from './slices/recipe.slice'
import productsClickedSlice from './slices/productsClicked.slice'
import allProductsSlice from './slices/allProducts.slice'
import productItemSlice from './slices/productItem.slice'

//Nuevos estados
import productsActionsSlice from './slices/productsActions.slice'
import menuActionsSlice from './slices/menuActions.slice'
import profileActionsSlice from './slices/profileActions.slice'
import categorySlice from './slices/category.slice'
import categoryHomeSlice from './slices/categoryHome.slice'
import categoryHomeActionsSlice from './slices/categoryHomeActions.slice'
import recommendationActionsSlice from './slices/recommendationActions.slice'
import searchSlice from './slices/search.slice'

export default configureStore({
    reducer:{
        productSlice,
        recipeSlice,
        productsClickedSlice,
        allProductsSlice,
        productsActionsSlice,
        menuActionsSlice,
        profileActionsSlice,
        categorySlice,
        categoryHomeSlice,
        categoryHomeActionsSlice,
        productItemSlice,
        recommendationActionsSlice,
        searchSlice


    }
})