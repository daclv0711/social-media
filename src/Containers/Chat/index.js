import { Col, Row } from 'antd'
import InfoChat from 'Components/chat/ChatInfo'
import MainChat from 'Components/chat/ChatMain'
import MenuChat from 'Components/chat/ChatMenu'
import React from 'react'

const styles = {
    overflow: 'hidden',
    height: 'calc(100vh - var(--height-header))',
    position: 'relative',
    top: 'var(--height-header)',
}

function Chat() {

    document.title = 'Tin nhắn'

    return (
        <Row style={styles}>
            <Col md={7} xs={24}><MenuChat /></Col>
            <Col md={11} xs={0}><MainChat /></Col>
            <Col md={6} xs={0}><InfoChat /></Col>
        </Row>
    )
}

export default Chat
