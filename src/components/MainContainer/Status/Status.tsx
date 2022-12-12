import React, {ChangeEvent} from "react";
import styles from './Status.module.css'

type StatusPropsType = {
    status: string
    updateUserStatusTC: (status: string) => void
}

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
        this.props.updateUserStatusTC(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }


    componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<{}>) {
        if (prevProps.status !== this.props.status) {
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
                    <input autoFocus={true} onBlur={this.onBlurDeactivate} type="text" value={this.state.status || ''}
                           onChange={this.onStatusChange}/>
                </div>}
            </div>
        )
    }
}

