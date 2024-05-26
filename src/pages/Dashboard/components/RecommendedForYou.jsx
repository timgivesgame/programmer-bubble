// RecommendedForYou.jsx
import React from 'react';
import './RecommendedForYou.css';

const RecommendedForYou = () => {
    return (
        <section className="recommended-for-you">
            <h2 className='dashboard-card-title'>Recommended for You</h2>
            <p className="dashboard-card-subtitle">
                Recommended courses and articles/blog posts.
            </p>
            {/* <div className="courses">
                <h3>Courses</h3>
            </div>
            <div className="articles">
                <h3>Articles/Blog Posts</h3>
            </div> */}
        </section>
    );
};

export default RecommendedForYou;
