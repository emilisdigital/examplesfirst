import React, {useState, KeyboardEvent, useEffect} from "react";
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)
    const toggleItems = () => setActive(!active)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const itemsMap = props.items.map(i => {
        const itemClicked = () => {
            props.onChange(i.value)
            setActive(!active)
        }
        const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
                for (let i = 0; i < props.items.length; i++) {
                    if (props.items[i].value === hoveredElementValue) {
                        const pretendentElement = e.key === "ArrowDown"
                            ? props.items[i + 1]
                            : props.items[i - 1]
                        if (pretendentElement) {
                            props.onChange(pretendentElement.value)
                            break;
                        }
                    }
                }
            }
        }

        return (
            <div className={styles.item + " " + (hoveredItem === i ? styles.selected : "")}
                 key={i.value}
                 tabIndex={0}
                 onKeyUp={onKeyUp}
                 onMouseEnter={() => setHoveredElementValue(i.value)}
                 onClick={itemClicked}>
                {i.title}f
            </div>
        )
    })

    return (
        <div className={styles.select}>
            <span className={styles.main}
                  onClick={toggleItems}>
                {selectedItem && selectedItem.title}
            </span>
            {active && <div className={styles.items}>{itemsMap}</div>}
        </div>
    )
}