import React, {ChangeEvent, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (text: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {

        const [status, setStatus] = useState(props.status)
        const [editMode, setEditMode] = useState(false)

    const activateEditMode = () => {
        setEditMode(true)
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

        return (
            <div>
                My status:
                <br/>
                {
                    editMode
                        ? <input
                            value={status ? status : "Как ваши дела?"}
                            onChange={onStatusChange}
                            autoFocus
                            onBlur={deactivateEditMode}
                        />
                        : <span
                            onDoubleClick={activateEditMode}>
                            {status ? status : "Как ваши дела?"}
                        </span>
                }
            </div>
        )

}

export default ProfileStatus;