export type PropsType = {
    items: string[]
}

export const AccordBody = (props: PropsType) => {
    return (  
        <ul>
            {props.items.map((i, index) => <li key={index}>{i}</li>)}
        </ul>
    );
}
