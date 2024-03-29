import { useState } from "react";

type PropsType = {
    selected: boolean
    setValue: ()=> void
}

export const UnControlRating = () => {
    let [value, setValue] = useState(0);

    return (
        <div>
        <Star selected={value > 0} setValue={()=>setValue(1)}/>
        <Star selected={value > 1} setValue={()=>setValue(2)}/>
        <Star selected={value > 2} setValue={()=>setValue(3)}/>
        <Star selected={value > 3} setValue={()=>setValue(4)}/>
        <Star selected={value > 4} setValue={()=>setValue(5)}/>
        </div>
    );
};
const Star = (props: PropsType) => {

    const setValueHandler = () => {
        props.setValue()
    }

    return <span onClick={setValueHandler}>
                {props.selected ? <b>star </b> : 'star ' }
            </span>
}
