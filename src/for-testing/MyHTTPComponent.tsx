import { useEffect, useState } from "react";

export default function MyHTTPComponent() {

    const [names, setNames] = useState([] as Array<string>);

    useEffect(() => {
        fetch('http://my.awesome.api')
            .then(response => response.json())
            .then((names: Array<string>) => setNames(names))
    }, [])

    return (
        <div>
            {names.map((name, index) => <div key={name} data-testid={`name-${index}`}>{name}</div>)}
        </div>
    );
}
