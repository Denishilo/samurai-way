import React, {ChangeEvent, useEffect, useState} from "react";
import styles from './Status.module.css'

type StatusPropsType = {
    status: string
    updateUserStatusTC: (status: string) => void
}

// export const Status = (props:StatusPropsType) => {
//     console.log(props.status)
//
//     let [status, setStatus] = useState<string>('')
//     let [editMode, setEditMode] = useState<boolean>(false)
//
//     const onDblClickHandler = () => {
//         setEditMode(!editMode)
//     }
//     const onBlurHandler =()=>{
//         setEditMode(!editMode)
//         props.updateUserStatusTC(status)
//     }
//     const onChangeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
//         setStatus(e.currentTarget.value)
//     }
//     return (
//         <div className={styles.statusWrapper}>
//             {!editMode && <div>
//                 <span onDoubleClick={onDblClickHandler}>{props.status}</span>
//             </div>}
//             {editMode && <div>
//                 <input autoFocus={true} onBlur={onBlurHandler} type="text" value={status} onChange={onChangeHandler}/>
//             </div>}
//         </div>
//     )
//
// }


export class Status extends React.Component<StatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }
    onBlurDeactivate = () => {
        this.toggleEditMode()
        this.props.updateUserStatusTC(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>) {
        console.log('componentDidUpdate')
        if (prevProps.status !== this.state.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div className={styles.statusWrapper}>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.toggleEditMode}>{this.props.status || 'without status'}</span>
                </div>}
                {this.state.editMode && <div>
                    <input autoFocus={true} onBlur={this.onBlurDeactivate} type="text" value={this.state.status}
                           onChange={this.onStatusChange}/>
                </div>}
            </div>
        )
    }
}

