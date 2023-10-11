import { RatingValueType } from "./Rating"

type PropsType = {
    selected: boolean
    value: RatingValueType
    setValue: (value: RatingValueType)=> void
}

export const Star = (props: PropsType) => {

    const setValueHandler = () => {
        props.setValue(props.value)
    }

    return <span onClick={setValueHandler}>
                {props.selected ? <b>star </b> : 'star ' }
            </span>
}
