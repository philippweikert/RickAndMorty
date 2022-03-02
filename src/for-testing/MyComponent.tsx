interface MyComponentProps {
    name: string;
}

export default function MyComponent(props: MyComponentProps) {
    return (
        <div data-testid="the-name">{props.name.toLowerCase()}</div>
    )
}