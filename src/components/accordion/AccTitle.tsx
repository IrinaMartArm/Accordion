type AccTitlePropsType = {
    title: string
    onClick: () => void
}

export const AccTitle = (props: AccTitlePropsType) => {

    const clickHandler = () => {
        props.onClick()
    }
    return (  
        <h2 onClick={clickHandler}>{props.title}</h2>
    );
}
