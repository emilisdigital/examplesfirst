import { ClockViewPropsType } from "./Clock"
import { getDblTimeClock } from "./DateUntilFunction"

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {
    return <>
        <span>{getDblTimeClock(date.getHours())}</span>
        :<span>{getDblTimeClock(date.getMinutes())}</span>
        :<span>{getDblTimeClock(date.getSeconds())}</span>
    </>
}