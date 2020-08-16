import React from 'react'

import './style.css'

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
        <div className="time-card">
            <div>
                <p>Dia</p>
                <strong>{week_day.map(week => {
                    return week.label
                })}</strong>
                <p className="hours">Horário</p>
                <strong>
                    {`${time.map(tempo => { return tempo.from })}h
                 - ${time.map(tempo => {
                        return tempo.to
                    })}h`}</strong>
            </div>
        </div>
    );
}

export default TimeCard;