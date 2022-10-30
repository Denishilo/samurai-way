import React from "react";
import styles from './Dialogs.module.css'
import {addMessageActionCreatorAC, changeTextMessageAC} from "../../redux/message-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";

export const DialogsContainer = () => {
    return <StoreContext.Consumer>
        {(store) => {
            const onClickAddMessage = () => {
                store.dispatch(addMessageActionCreatorAC())
            }
            const onChangeTextMessage = (newTextMessage: string) => {
                store.dispatch(changeTextMessageAC(newTextMessage))
            }
            return (
                <div className={styles.dialogs__wrapper}>
                    <Dialogs dialogsPages={store.getState().dialogsPages} onClickAddMessage={onClickAddMessage}
                             onChangeTextMessage={onChangeTextMessage}/>
                </div>
            )
        }

        }
    </StoreContext.Consumer>
}