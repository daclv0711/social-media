import React from 'react'
import { WrapperChatMain, HeaderChat, MainChat, FooterChat } from './index.styles'
import ImgUser from 'assets/images/no-img.png'
import { Avatar } from 'antd'
import { InfoCircleTwoTone, PhoneTwoTone, VideoCameraTwoTone } from '@ant-design/icons'
import AddChat from './AddChat'
import BodyChat from './BodyChat'
function ChatMain({ handleOpenInfo }) {

    return (
        <WrapperChatMain>
            <HeaderChat>
                <div className='header-user'>
                    <Avatar src={ImgUser} size={40} />
                    <div className='user-name'>Nguyen Van A</div>
                </div>
                <div className='header-content'>
                    <div className='header-content-icon'>
                        <PhoneTwoTone />
                    </div>
                    <div className='header-content-icon'>
                        <VideoCameraTwoTone />
                    </div>
                    <div className='header-content-icon' onClick={handleOpenInfo}>
                        <InfoCircleTwoTone />
                    </div>
                </div>
            </HeaderChat>
            <MainChat>
                <BodyChat ImgUser={ImgUser} userChatName={'Nguyen Van A'} />
            </MainChat>
            <FooterChat>
                <AddChat />
            </FooterChat>
        </WrapperChatMain>
    )
}

export default ChatMain
