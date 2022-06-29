import React from 'react';
import { HomeTop, TopTitleBox, TopTitle, TopDescriptionBox, TopDescription } from "./indexstyle";

const Home = () => {
    return (
        <div>
            <HomeTop>
                <TopTitleBox>
                    <TopTitle>LNY OPTOMETRY</TopTitle>
                </TopTitleBox>
                <TopDescriptionBox>
                    <TopDescription>Eye Exams, Contact Lenses, and Glasses in Pacific Beach, San Diego</TopDescription>
                    <TopDescription>1890 Garnet Ave. San Diego, CA 92109</TopDescription>
                    <TopDescription>(858) 274-3777</TopDescription>
                    <TopDescription>Office hours: by appointment only due to COVID-19</TopDescription>
                </TopDescriptionBox>
            </HomeTop>
        </div >
    );
};

export default Home;
