import { ClockViewPropsType } from "./Clock"
import style from './AnalogClockView.module.css'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({ date }) => {

    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    }
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    }
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    }

    return <>
        <div className={style.clock}>
            <div>
                <div className={style.info + " " + style.date}></div>
                <div className={style.info + " " + style.date}></div>
            </div>
            <div className={style.dot}></div>
            <div>
                <div className={style.hourHand} style={secondsStyle}></div>
                <div className={style.minuteHand} style={minutesStyle}></div>
                <div className={style.secondHand} style={hoursStyle}></div>
            </div>
            <div>
                <span className={style.h3 + " " + style.spanTest}>3</span>
                <span className={style.h6 + " " + style.spanTest}>6</span>
                <span className={style.h9 + " " + style.spanTest}>9</span>
                <span className={style.h12 + " " + style.spanTest}>12</span>
            </div>
            <div className={style.diallins}></div>
        </div>
    </>
}