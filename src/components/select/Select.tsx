import {ItemsType} from "../../App.tsx";
import {useEffect, useState} from "react";
import styles from './Select.module.css'


type PropsType = {
    value?: string
    items: ItemsType[]
    onChange: ( value: string) => void
}

export const Select = (props: PropsType) => {
    const [active, setActive] = useState(true)
    const [vovEl, setHovEl] = useState(props.value)
    const selectedItem = props.items.find(i=>i.value === props.value)
    const e_item = props.items.find(i=> i.value === vovEl)

    useEffect(()=> {
        setHovEl(props.value)
    },[props.value])
    const toggle = () => {setActive(!active)}
    const onItemClick = (value: string) => {
        props.onChange(value)
        toggle()
    }
    // const onKeyUp = (e:KeyboardEvent<HTMLDivElement>) => {
    //     if(e.key === "ArrowDown") {
    //         for (let i = 0; i < props.items.length; i++) {
    //             if(props.items[i].value === vovEl) {
    //                 props.onChange(props.items[i + 1].value)
    //             }
    //         }
    //     }
    //
    // }

    return (
        <div>
            <div className={styles.select} >
                <span className={styles.main}
                      onClick={toggle}>{selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i=>
                            <div key={i.title}
                                 onMouseEnter={()=>{setHovEl(i.value)}}
                                 className={styles.item + ' ' + (e_item === i ? styles.selected : '')}
                                 onClick={()=>{onItemClick(i.value)}}>{i.title}
                            </div>)}
                    </div>
                }
            </div>
        </div>
    )
}

