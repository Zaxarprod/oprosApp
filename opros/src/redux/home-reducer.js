export const NEXT_CAROUSEL_SLIDE = 'home/NEXT_CAROUSEL_SLIDE'

const initialState = {
    sliders: [
        {
            header: 'Header_1',
            text: 'text_1',
            srcButton: '/',
        },
        {
            header: 'Header_2',
            text: 'text_2',
            srcButton: '/',
        },
        {
            header: 'Header_3',
            text: 'text_3',
            srcButton: '/',
        },
    ],
    carousel: [
        {
            imgSrc: 'https://i.obozrevatel.com/gallery/2016/9/7/394929.jpg',
        },
        {
            imgSrc: 'https://im0-tub-ru.yandex.net/i?id=9efe770b7b3adcdc95460469a377701c&n=13',
        },
        {
            imgSrc: 'https://readmas.ru/wp-content/filesall/2014/09/instagram_yang_mi_rim_readmas.ru_30.jpg',
        },
    ]
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_CAROUSEL_SLIDE:
            let carousel = state.carousel.map((el,i)=>{
                if(i===0){
                    return state.carousel[state.carousel.length - 1]
                }else{
                    return state.carousel[i-1]
                }
            })
            debugger
            return {
                ...state,
                carousel: carousel,
            }
        default:
            return state
    }
}

export const nextCarouselSlideAC = () => ({
    type: NEXT_CAROUSEL_SLIDE,
})

export const nextCarouselSlideTC = () => {
    return (dispatch) => {
        dispatch(nextCarouselSlideAC())
    }
}