import React from 'react';
import PageHeader from '../../Components/PageHeader';

import smileIcon from '../../Assets/Icons/smile.svg';

function TeacherList() {
    return (
        <div className="teachers-container">
            <PageHeader
                title="Estes são os proffys disponíveis."
                navTitle="Estudar"
            >
                <img src={smileIcon} alt="Emote Sorrindo" />
            </PageHeader>
        </div>
    );
}

export default TeacherList;