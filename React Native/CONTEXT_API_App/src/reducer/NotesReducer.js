
export const initialState = [
  
]

export const reducer = (state,{type,payload}) => { 
    switch (type) {
        case "ADD":
            return [...state,
                {id:Math.random(),
                    title:payload.title,
                    content:payload.content
                }
            ]
        case "REMOVE":
            return state.filter((note) => payload !== note.id)    
        default:
            return state
    }
}