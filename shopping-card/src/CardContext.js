import { createContext, useContext, useReducer } from "react";

const CardContext = createContext();

export function cardProvider({children}){
    function CardReducer(state,action) {
        switch(action.type){
            
        }
    }
    const [cardState,cardDispatch] = useReducer(CardReducer, initialState)
    return(
        <CardContext.Provider> {children}</CardContext.Provider>
    )
}

export function useCard(){
    useContext(CardContext)
}