import React, {ChangeEvent, KeyboardEvent} from "react";
import styles from './Status.module.css'

export class Status extends React.PureComponent<StatusPropsType> {
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
        if (this.props.userId) {
            this.props.updateUserStatusTC(this.state.status, this.props.userId)
        }
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    onKeyChangeStatus = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.onBlurDeactivate()
        }
    }

    // componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>) {
    //     if (prevProps.status !== this.props.status) {
    //         this.setState({
    //             status: this.props.status
    //         })
    //     }
    // }

    render() {
        return (
            <div className={styles.statusWrapper}>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.toggleEditMode}>{this.props.status || 'without status'} </span>
                </div>}
                {this.state.editMode && <div>
                    <input autoFocus={true} onBlur={this.onBlurDeactivate} type="text" value={this.state.status || ''}
                           onChange={this.onStatusChange} onKeyPress={this.onKeyChangeStatus}/>
                </div>}
            </div>
        )
    }
}

////////types ///////

type StatusPropsType = {
    status: string
    updateUserStatusTC: (status: string, userId: string) => void
    userId?: string
}

