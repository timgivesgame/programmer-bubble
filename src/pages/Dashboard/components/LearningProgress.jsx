// LearningProgress.jsx
import React from 'react';
import './LearningProgress.css';

const LearningProgress = () => {
    return (
        <section className="learning-progress">
            <h2 className='dashboard-card-title'>Learning Progress</h2>
            <p className='dashboard-card-subtitle'>Check out your learning progress!</p>
            {/* <div className="progress-bars">
                <div className="course">
                    <h3>Course 1</h3>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '70%' }}></div>
                    </div>
                </div>
                <div className="course">
                    <h3>Course 2</h3>
                    <div className="progress-bar">
                        <div className="progress" style={{ width: '50%' }}></div>
                    </div>
                </div>
            </div>
            <div className="badges">
                <h3>Badges/Achievements</h3>
                <p>Recently earned badges or milestones.</p>
            </div> */}
        </section>
    );
};

export default LearningProgress;
