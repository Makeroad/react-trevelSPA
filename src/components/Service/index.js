import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import{
    ServiceContainer,
    ServiceH1,
    ServiceWrapper,
    ServiceCard,
    ServiceIcon,
    ServiceH2,
    ServiceP
} from './ServiceElements'
function index() {
    return (
        <ServiceContainer id="service">
            <ServiceH1>우리의 서비스</ServiceH1>
            <ServiceWrapper>
                <ServiceCard>
                    <ServiceIcon src={Icon1}/>
                    <ServiceH2>서비스는..</ServiceH2>
                    <ServiceP>우리의 서비스 최고의 품질과 최고의 어쩌고저쩌고 </ServiceP>                
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon2}/>
                    <ServiceH2>서비스는..</ServiceH2>
                    <ServiceP>우리의 서비스 최고의 품질과 최고의 어쩌고저쩌고 </ServiceP>                
                </ServiceCard>
                <ServiceCard>
                    <ServiceIcon src={Icon3}/>
                    <ServiceH2>서비스는..</ServiceH2>
                    <ServiceP>우리의 서비스 최고의 품질과 최고의 어쩌고저쩌고 </ServiceP>                
                </ServiceCard>
            </ServiceWrapper>
        </ServiceContainer>
    )
}

export default index
