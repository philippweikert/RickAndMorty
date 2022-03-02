import { useState } from "react";

export default function MyInputComponent() {
    const [name, setName] = useState('');
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    }

    return (
        <div>
            <div>
                <input data-testid="name-input" type="text" value={name} onChange={(ev) => setName(ev.target.value)} />
            </div>
            <button onClick={() => handleClick()}>Send</button>
            { show && <div>
                <span data-testid="name-output">{name}</span>
            </div>}
        </div>
    )
}