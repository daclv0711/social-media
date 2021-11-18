import { ArrowLeftOutlined, ArrowRightOutlined, PlusCircleFilled } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import ImgUser from 'assets/images/no-img.png'
import ImgStory from 'assets/images/story-1.jpg'
import { AddStory, Image, StoriesWrapper, Story, StoryImgUser, StoryInfo, StoryUser, Wrapper, Slide } from './index.styles';
import { Blur, Next, Prev } from '../index.styles';

function Stories() {
    const Wrap = useRef(null);
    const [widthScroll, setWithScroll] = useState(0);
    const [widthWrap, setWithWrap] = useState(0);
    const [currentWrap, setCurrentWrap] = useState(0);
    const [currentScroll, setCurrentScroll] = useState(0);

    useEffect(() => {
        setWithScroll(Wrap.current.scrollWidth);
        setWithWrap(Wrap.current.offsetWidth);
        setCurrentScroll(widthScroll - widthWrap);
    }, [currentWrap, widthScroll, widthWrap])

    const handleClickNext = () => {
        if (currentScroll - currentWrap >= widthWrap) {
            setCurrentWrap(currentWrap + widthWrap)
        } else {
            setCurrentWrap(currentScroll)
        }
    }

    const handleClickPrev = () => {
        if (currentWrap >= widthWrap) {
            setCurrentWrap(currentWrap - widthWrap)
        } else {
            setCurrentWrap(0)
        }
    }
    return (
        <Wrapper>
            <StoriesWrapper>
                <Slide ref={Wrap} style={{ right: currentWrap + 'px' }}>
                    <div>
                        <StoryUser>
                            <Image>
                                <img src={ImgUser} alt="user" />
                                <Blur />
                            </Image>
                            <AddStory><PlusCircleFilled /></AddStory>
                            <div className="story-user-info">Tạo tin</div>
                        </StoryUser>
                    </div>
                    <div>
                        <Story>
                            <img className='img-story' src={ImgStory} alt="user" />
                            <Blur />
                            <StoryInfo>Lorem</StoryInfo>
                            <StoryImgUser>
                                <img src={ImgUser} alt="user" />
                            </StoryImgUser>
                        </Story>
                    </div>
                    <div>
                        <Story>
                            <img className='img-story' src={ImgStory} alt="user" />
                            <Blur />
                            <StoryInfo>Lorem</StoryInfo>
                            <StoryImgUser>
                                <img src={ImgUser} alt="user" />
                            </StoryImgUser>
                        </Story>
                    </div>
                    <div>
                        <Story>
                            <img className='img-story' src={ImgStory} alt="user" />
                            <Blur />
                            <StoryInfo>Lorem</StoryInfo>
                            <StoryImgUser>
                                <img src={ImgUser} alt="user" />
                            </StoryImgUser>
                        </Story>
                    </div>
                    <div>
                        <Story>
                            <img className='img-story' src={ImgStory} alt="user" />
                            <Blur />
                            <StoryInfo>Lorem</StoryInfo>
                            <StoryImgUser>
                                <img src={ImgUser} alt="user" />
                            </StoryImgUser>
                        </Story>
                    </div>
                </Slide>
                {
                    currentWrap !== currentScroll &&
                    <Next onClick={handleClickNext}>
                        <ArrowRightOutlined />
                    </Next>
                }
                {
                    currentWrap > 0 &&
                    <Prev onClick={handleClickPrev}>
                        <ArrowLeftOutlined />
                    </Prev>
                }
            </StoriesWrapper>
        </Wrapper>
    );
}

export default React.memo(Stories);