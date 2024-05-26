import React from 'react';
import Header from './components/Header';
import NavigationMenu from './components/NavigationMenu';
import Sidebar from './components/Sidebar';
import LearningProgress from './components/LearningProgress';
import RecommendedForYou from './components/RecommendedForYou';
import CommunityHighlights from './components/CommunityHighlights';
import Notifications from './components/Notifications';
import Support from './components/Support';
import './Dashboard.css';
import NewProject from './components/NewProject';
import ContinueCourse from './components/ContinueCourse';
import JoinDiscussion from './components/JoinDiscussion';
import Community from './components/Community';

const Dashboard = () => {
  return (
      <div className="dashboard-container">
        <div className="dashboard-header">
            <Header />
        </div>
        <div className="dashboard-lower">
                      <div className="dashboard-sidenav">
              <Sidebar /> {/* Ensure Sidebar is added here */}
          </div>
          <div className="dashboard-content">
              {/* <ContinueCourse />
              <NewProject />
              <JoinDiscussion />
              <LearningProgress />
              <RecommendedForYou />
              <CommunityHighlights /> */}
              <Community />
          </div>
      </div>
        </div>

  );
};

export default Dashboard;
