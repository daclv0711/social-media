import React from 'react'
import { Link } from 'react-router-dom'
import { InputChat, MenuOption, Title } from './index.styles'

export default function MenuOptionChat({ user }) {
    return (
        <>
            <Title>Tin nhắn</Title>
            <InputChat.Search
                placeholder='Tìm kiếm tin nhắn'
            />

            <MenuOption.Item key='1'>

            </MenuOption.Item>
            <Link to='/chat'>
                <MenuOption.Item key='2'>
                    <div className='content-chat' style={{ textAlign: 'center' }}>Xem tất cả trong Chat</div>
                </MenuOption.Item>
            </Link>
        </>
    )
}
