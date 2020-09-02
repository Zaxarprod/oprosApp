

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
    ]
}

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state
    }
}