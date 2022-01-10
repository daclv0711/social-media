import { Col, Row } from 'antd'
import InfoChat from 'Components/chat/ChatInfo'
import MainChat from 'Components/chat/ChatMain'
import MenuChat from 'Components/chat/ChatMenu'
import React, { useState } from 'react'

const styles = {
    overflow: 'hidden',
    height: 'calc(100vh - var(--height-header))',
    position: 'relative',
    top: 'var(--height-header)',
}

function Chat() {

    document.title = 'Tin nhắn'

    const [isOpenInfo, setIsOpenInfo] = useState(true)

    const handleOpenInfo = () => {
        setIsOpenInfo(!isOpenInfo)
    }

    return (
        <Row style={styles}>
            <Col md={7} xs={24}><MenuChat /></Col>
            <Col md={isOpenInfo ? 11 : 17} xs={0}><MainChat handleOpenInfo={handleOpenInfo} /></Col>
            <Col md={isOpenInfo ? 6 : 0} xs={0}><InfoChat /></Col>
        </Row>
    )
}

export default Chat
