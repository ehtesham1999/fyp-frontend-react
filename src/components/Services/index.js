import React from 'react';
import Icon1 from '../../Images/svg-3.svg';
import Icon2 from '../../Images/svg-4.svg';
import Icon3 from '../../Images/svg-5.svg';
import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements';
const Services = () => {
    return (
        <>
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>

                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Search for a product</ServicesH2>
                    <ServicesP>Search for your desired product and get similar recommendation ,exposing you to similar products in market </ServicesP> 
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Compare products</ServicesH2>
                    <ServicesP>From different kind of recommendation choose the one that best suites you!</ServicesP> 
        
                </ServicesCard>

                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Find your best deal</ServicesH2>
                    <ServicesP>Make sure you get best value from your money</ServicesP> 
                </ServicesCard>

            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services
