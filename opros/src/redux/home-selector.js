import {createSelector} from 'reselect'

export const getSlidersSelector = (state) =>{
    return state.home.sliders
}

export const getSliders = createSelector(getSlidersSelector, (sliders)=>{
    return sliders
});