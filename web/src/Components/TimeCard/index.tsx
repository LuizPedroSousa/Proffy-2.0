import React from 'react'

import {
    TimeCardContainer,
    Hours,
} from './styled'

interface TimeCardProps {
    time: Array<{
        from: number;
        to: number;
    }>
    week_day: Array<{
        value: string;
        label: string;
    }>
}

const TimeCard: React.FunctionComponent<TimeCardProps> = ({ time, week_day }) => {
    return (
        <TimeCardContainer>
            <div>
                <p>Dia</p>
                <strong>{week_day.map(week => {
                    return week.label
                })}</strong>
                <Hours >Horário</Hours>
                <strong>
                    {`${time.map(tempo => { return tempo.from })}h
                 - ${time.map(tempo => {
                        return tempo.to
                    })}h`}</strong>
            </div>
        </TimeCardContainer>
    );
}

export default TimeCard;