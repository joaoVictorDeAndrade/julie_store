import { useState } from "react"

export default function Test({ client }) {
    const [name, setName] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    return (
        <>
            {isEdit ? <h1>Edit</h1> : <h1>Create</h1>}
            <button onClick={() => setIsEdit(!isEdit)}>Toogle Edit</button>
            <input placeholder="Name:" value={name} onChange={({ target }) => setName(target.value)} />
        </>
    )
}