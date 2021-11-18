import { LeftOutlined, RightOutlined, VideoCameraAddOutlined } from '@ant-design/icons';
import React, { useEffect, useRef, useState } from 'react';
import ImgUser from 'assets/images/no-img.png'
import { BlockImgUser, BorderImg, UserImg } from '../index.styles';
import { BlockMeet, MeetCreate, MeetNext, Wrapper, MeetPrev } from './index.styles';

function GroupMeet() {
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
        <Wrapper ref={Wrap}>
            <BlockMeet style={{ right: currentWrap + 'px' }}>
                <MeetCreate>
                    <VideoCameraAddOutlined />
                    <div>Tạo phòng họp mặt</div>
                </MeetCreate>
                <BlockImgUser>
                    <UserImg src={ImgUser} alt="user" />
                    <BorderImg />
                </BlockImgUser>
                <BlockImgUser>
                    <UserImg src={ImgUser} alt="user" />
                    <BorderImg />
                </BlockImgUser>
                <BlockImgUser>
                    <UserImg src={ImgUser} alt="user" />
                    <BorderImg />
                </BlockImgUser>
                <BlockImgUser>
                    <UserImg src={ImgUser} alt="user" />
                    <BorderImg />
                </BlockImgUser>
                <BlockImgUser>
                    <UserImg src={ImgUser} alt="user" />
                    <BorderImg />
                </BlockImgUser>
                <BlockImgUser>
                    <UserImg src={ImgUser} alt="user" />
                    <BorderImg />
                </BlockImgUser>
            </BlockMeet>
            {
                currentWrap !== currentScroll &&
                <MeetNext onClick={handleClickNext}>
                    <RightOutlined />
                </MeetNext>
            }
            {
                currentWrap > 0 &&
                <MeetPrev onClick={handleClickPrev}>
                    <LeftOutlined />
                </MeetPrev>
            }

        </Wrapper >
    );
}

export default React.memo(GroupMeet);