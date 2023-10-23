import { useState } from "react";
import { Rating, RatingValueType } from "./Rating";


export default {
    title: 'Rating',
    component: Rating
}

export const EmptyRating = () => <Rating value={0} onClick={()=>{}}/>
export const Rating1 = () => <Rating value={1} onClick={()=>{}}/>
export const Rating2 = () => <Rating value={2} onClick={()=>{}}/>
export const RatingActive = () => {
    const [value, setValue] = useState<RatingValueType>(0)
    return <Rating value={value} onClick={setValue}/>
}