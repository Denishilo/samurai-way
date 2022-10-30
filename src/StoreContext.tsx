import React from "react";
import {StoreType} from "./redux/redux-store";

export const StoreContext = React.createContext({} as StoreType)

type ProviderTypeProps = {
    store: StoreType
    children: React.ReactNode
}

export const Provider = (props: ProviderTypeProps) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}