import { Input, Typography } from 'antd'
import React from 'react'
import { MenuChat, MenuChatContainer, WrapperChatMenu } from './index.styles'
import MenuItem from './MenuItem'

const arr = []
for (let i = 0; i < 10; i++) {
    arr.push({ id: i })
}

function ChatMenu() {
    const [selected, setSelected] = React.useState('')
    return (
        <WrapperChatMenu>
            <div style={{ padding: '12px 8px 16px', height: '104px' }}>
                <Typography.Title level={3}>Tin nhắn</Typography.Title>
                <Input.Search placeholder='Tìm kiếm tin nhắn' />
            </div>
            <MenuChatContainer>
                <MenuChat onSelect={e => setSelected(e.key)}>
                    {
                        arr.map(item => MenuItem(item, selected))
                    }
                </MenuChat>
            </MenuChatContainer>

        </WrapperChatMenu>
    )
}

export default ChatMenu
