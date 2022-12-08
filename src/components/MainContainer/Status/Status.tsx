import React from "react";
import styles from './Status.module.css'

export class Status extends React.Component {
    state = {
        editMode: false
    }

    toggleEditMode = () => {
        this.setState({
            editMode:!this.state.editMode
        })
    }

    render() {
        return (
            <div className={styles.statusWrapper}>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.toggleEditMode}>{'testtesttest'}</span>
                </div>}
                {this.state.editMode && <div>
                    <input autoFocus={true} onBlur={this.toggleEditMode} type="text" value={'status'}/>
                </div>}
            </div>
        )
    }
}