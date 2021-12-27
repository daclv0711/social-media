import { Avatar, Dropdown } from 'antd'
import React from 'react'
import { BlockChat, Chat, Content, MenuChat, Option } from './index.styles'
import ImgUser from '../../../assets/images/no-img.png'
import { EllipsisOutlined } from '@ant-design/icons'
import MenuItemOption from './MenuItemOption'

function MenuItem(props, selected) {
    const menu = (
        <MenuChat>
            <MenuItemOption />
        </MenuChat>
    )

    return (
        <React.Fragment key={props.id}>
            <MenuChat.Item key={`${props.id}`}>
                <BlockChat hover={`${props.id}` !== selected}>
                    <Avatar src={ImgUser} size={60} />
                    <Content>
                        <span className='user-name'>Nguyen Van A</span>
                        <span className='content-chat'>
                            <Chat>
                                <span>Hcosaoosoas</span>
                                <span>.</span>
                                <span>1 tuần</span>
                            </Chat>
                        </span>
                    </Content>

                </BlockChat>

            </MenuChat.Item>
            <Option>
                <Dropdown placement='bottomCenter' overlay={menu} trigger={['click']}
                    getPopupContainer={(triggerNode) => triggerNode}
                >
                    <div className='menu-option'>
                        <EllipsisOutlined />
                    </div>
                </Dropdown>
            </Option>
        </React.Fragment >
    )
}

export default MenuItem
