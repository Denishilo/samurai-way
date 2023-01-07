import React, {ChangeEvent, useEffect, useState} from "react";
import styles from './Status.module.css'

type StatusPropsType = {
    status: string
    updateUserStatusTC: (status: string) => void
}

export const StatusFC = (props: StatusPropsType) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status])

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }
    const onBlurDeactivate = () => {
        toggleEditMode()
        props.updateUserStatusTC(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }


    // componentDidUpdate(prevProps:Readonly < StatusPropsType >, prevState:Readonly<{}>){
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }
    return (
        <div className={styles.statusWrapper}>
            {!editMode && <div>
                <span onDoubleClick={toggleEditMode}>{props.status || 'without status'}</span>
            </div>}
            {editMode && <div>
                <input autoFocus={true} onBlur={onBlurDeactivate} type="text" value={status || ''}
                       onChange={onStatusChange}/>
            </div>}
        </div>
    )
}

