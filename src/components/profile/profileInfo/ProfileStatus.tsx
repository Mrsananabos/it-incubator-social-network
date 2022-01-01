import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusPropsType = {
    status: string
    updateStatus: (text: string) => void
}

const ProfileStatus = (props: ProfileStatusPropsType) => {
    debugger
        const [status, setStatus] = useState(props.status)
        const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

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
                            value={status ? status : "---"}
                            onChange={onStatusChange}
                            autoFocus
                            onBlur={deactivateEditMode}
                        />
                        : <span
                            onDoubleClick={activateEditMode}>
                            {status ? status : "---"}
                        </span>
                }
            </div>
        )

}

export default ProfileStatus;