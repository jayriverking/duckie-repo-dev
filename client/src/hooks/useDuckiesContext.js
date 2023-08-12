import { DuckiesContext } from "../context/DuckiesContext";
import { useContext } from "react";


export const useDuckiesContext = () => {
    const context = useContext(DuckiesContext)

    if(!context){
        throw Error('useDuckiesContext must be used inside a DuckiesContext')
    }

    return context
}