import {Select} from "./Select.tsx";
import {useState} from "react";

export default {
    title: 'Select',
    component: Select
}

export const WithValue = () => {
    const [value, setValue] = useState('3')
    return (
        <>
            <Select
                onChange={setValue}
                value={value}
                items={[
                    {value: '1', title: 'Minsk'},
                    {value: '2', title: 'Moskov'},
                    {value: '3', title: 'Erevan'},
                ]}
            />
        </>
    )

}