import React from 'react'
import { InfoUser, WrapperChatInfo } from './index.styles'
import { Avatar, Menu, Typography } from 'antd'
import ImgUser from 'assets/images/no-img.png'
import { BellOutlined, BulbTwoTone, LikeTwoTone, MessageOutlined } from '@ant-design/icons'
function ChatInfo() {
    return (
        <WrapperChatInfo>
            <InfoUser>
                <Avatar src={ImgUser} size={80} />
                <Typography.Title level={4}>Nguyen Van A</Typography.Title>
            </InfoUser>
            <Menu
                mode="inline"
            >
                <Menu.SubMenu
                    key="sub1"
                    title={<div className='info-name'>
                        Tệp được chia sẻ
                    </div>}
                >
                    <Menu.Item key='1' icon={<BulbTwoTone />}>Đổi chủ đề</Menu.Item>
                    <Menu.Item key='2' icon={<LikeTwoTone />}>Thay đổi biểu tường cảm xúc</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu
                    key="sub2"
                    title={<div className='info-name'>
                        Quyền riêng tư & hỗ trợ
                    </div>}
                >
                    <Menu.Item key='3' icon={<BellOutlined />}>Tắt thông báo</Menu.Item>
                    <Menu.Item key='4' icon={<MessageOutlined />}>Bỏ qua tin nhắn</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </WrapperChatInfo>
    )
}

export default ChatInfo
