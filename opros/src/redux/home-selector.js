import {createSelector} from 'reselect'

export const getSlidersSelector = (state) =>{
    return state.home.sliders
}

export const getCarouselSelector = (state) =>{
    return state.home.carousel
}