import React, { useEffect } from 'react';
import Directory from '../../components/directory/directory';
import { HomePageContainer } from './homepageStyle';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0,0)
    } ,[])
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}

export default HomePage;