import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    name: 'Ashikur Rahman',
    age: 19,
    status: 'coder'
}

export const fetchUserName = createAsyncThunk(
    'fetch/user',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const result = await res.json()
        return result[Math.floor(Math.random()*10) ].name
    }
)

const useReducer = createSlice({
    name:'persone',
    initialState,
    reducers: {
        updateName(state,action){
            state.name = action.payload
        },
        updateAge(state, action) {
            state.age = action.payload
        },
        updateStatus(state, action) {
            state.status = action.payload
        }
    },
    extraReducers:{
        [fetchUserName.fulfilled]: (state, action) => {
            // Add user to the state array
            state.name = action.payload
        },
        [fetchUserName.pending]: (state, action) => {
            // Add user to the state array
            state.name = 'LODING....'
        },
        [fetchUserName.rejected]: (state, action) => {
            // Add user to the state array
            state.name = 'Try Again'
        }
    }
})

export const {updateName,updateAge,updateStatus} = useReducer.actions
export default useReducer.reducer



// export default createReducer(initialState,(builder) => {
//     builder.addCase('UPDATE_AGE', (state,action) => {
//         state.age = action.payload
//     })

//     builder.addCase('UPDATE_NAME', (state, action) => {
//         state.name = action.payload
//     })

//     builder.addCase(upDateStatus.toString(), (state, action) => {
//         state.status = action.payload
//     })
// })

