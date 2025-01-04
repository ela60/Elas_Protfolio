import React from 'react';
import Banner from '../components/Banner';
import Project from '../components/Project';
import Skills from '../components/Skills';
import EducationExperience from '../components/EducationExperience';

const Home = () => {
    return (
        <div>
            <Banner />
            <Project />
            <Skills />
            <EducationExperience/>
        </div>
    );
};

export default Home;