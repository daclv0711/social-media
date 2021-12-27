import React from 'react'
import { MenuChat } from './index.styles'
import { PhoneOutlined, VideoCameraOutlined, DeleteOutlined } from '@ant-design/icons'

function MenuItemOption() {
    return (
        <>
            <MenuChat.Item key='0' icon={<PhoneOutlined />}>
                Gọi thoại
            </MenuChat.Item>
            <MenuChat.Item key='1' icon={<VideoCameraOutlined />}>
                Chat video
            </MenuChat.Item>
            <MenuChat.Divider />
            <MenuChat.Item key='2' icon={<DeleteOutlined />}>
                Xóa cuộc trò chuyện
            </MenuChat.Item>
        </>
    )
}

export default MenuItemOption
