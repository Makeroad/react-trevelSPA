import React,{useState} from 'react'
import Video from'../../videos/video.mp4';
import { Button } from '../ButtonElement';
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForwad,ArrowRight } from './HeroElements';

const HeroSection=()=> {
    const [hover,setHover]=useState(false)

    const onHover=()=>{
    setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4 /'></VideoBg>
            </HeroBg>
            <HeroContent>
                <HeroH1>여행정보  웹페이지</HeroH1>
                <HeroP>
                    회원가입기능은 만들지 않았음
                    대충 여행정보 알려주는 SPA 웹페이지이다.
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' 
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    dark="true"
                    >
                        자세히 {hover ? <ArrowForwad/>:<ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
