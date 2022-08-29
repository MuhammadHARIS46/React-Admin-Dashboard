import {React,useContext, createContext,useState} from 'react';
const StateContext=createContext();
const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}
export const ContextProvider = ({children})=>{
    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const handleClick=(clicked)=>{
        setIsClicked({...initialState,[clicked]:true})
    }
    return (
        <StateContext.Provider
        value={{
            activeMenu,   //or when both value are same simply can write activeMenu
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
        }}
         >
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext =()=> useContext(StateContext);  