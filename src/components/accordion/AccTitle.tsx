type AccTitlePropsType = {
    title: string
}

export const AccTitle = (props: AccTitlePropsType) => {
    return (  
        <h2>{props.title}</h2>
    );
}
