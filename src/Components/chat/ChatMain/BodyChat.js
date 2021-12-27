import { Avatar } from 'antd'
import React from 'react'
import { UserChat } from './index.styles'

function BodyChat({ ImgUser, userChatName }) {
    return (
        <>
            <UserChat>
                <Avatar src={ImgUser} size={60} />
                <div className='user-chat'>{userChatName}</div>
            </UserChat>
        </>
    )
}

export default BodyChat
