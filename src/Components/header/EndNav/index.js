import { BellFilled, CaretDownOutlined, WechatOutlined } from '@ant-design/icons';
import React, { useMemo } from 'react';
import { EndHeader, MenuOption, User } from './index.styles';
import ImgUser from 'assets/images/no-img.png';
import { Avatar, Badge, Col, Dropdown, Row, Tooltip } from 'antd';
import { useSelector } from 'react-redux';
import { infoUserState$ } from 'redux/selectors/user';
import MenuOptionChat from './MenuOptionChat';
import MenuOptionNotify from './MenuOptionNotify';
import MenuOptionAccount from './MenuOptionAccount';
import { notifyStatusState$, allUsersState$ } from 'redux/selectors/status';

function EndNav(props) {

    const user = useSelector(infoUserState$)
    const { last_name, avatar } = user;

    const notifyStatus = useSelector(notifyStatusState$)
    const allUser = useSelector(allUsersState$)

    const userStatus = useMemo(() => {
        const arr = []
        notifyStatus.forEach(status => {
            const member = allUser.find(user => user._id === status.user_id)
            if (member) {
                const { last_name, first_name, avatar } = member
                const { _id, status: newStatus, createdAt } = status
                const newNotify = {
                    _id,
                    status: newStatus,
                    createdAt,
                    last_name,
                    first_name,
                    avatar
                }
                arr.push(newNotify)
            }
        })
        return arr
    }, [notifyStatus, allUser])
    const menu = (
        <MenuOption >
            <MenuOptionAccount user={user} ImgUser={ImgUser} />
        </MenuOption>
    )

    const menuNotification = (
        <MenuOption >
            <MenuOptionNotify user={userStatus} ImgUser={ImgUser} />
        </MenuOption>
    )

    const menuWechat = (
        <MenuOption >
            <MenuOptionChat />
        </MenuOption>
    )
    return (
        <Row
            gutter={{ lg: 4 }}
            align="middle"
            justify="end"
            wrap={false}
            style={{ columnGap: '0.6rem' }}
        >
            <Col md={0} lg={8}>
                <User>
                    <Avatar src={avatar || ImgUser} size={28} alt={last_name} />
                    <div className='user-name'>{`${last_name}`}</div>
                </User>
            </Col>
            <Col>

                <Tooltip title="Messenger" placement="bottom">
                    <Dropdown placement="bottomCenter" getPopupContainer={(triggerNode) => triggerNode} overlay={menuWechat} trigger={['click']}>
                        <Badge count={0} offset={[-4, 6]}>
                            <EndHeader><WechatOutlined /></EndHeader>
                        </Badge>
                    </Dropdown>
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title="Thông báo" placement="bottom">
                    <Dropdown placement="bottomCenter" getPopupContainer={(triggerNode) => triggerNode} overlay={menuNotification} trigger={['click']}>
                        <Badge count={notifyStatus.length} offset={[-4, 6]}>
                            <EndHeader>
                                <BellFilled />
                            </EndHeader>
                        </Badge>
                    </Dropdown>
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title="Tài khoản" placement="bottom">
                    <Dropdown getPopupContainer={(triggerNode) => triggerNode} overlay={menu} trigger={['click']}>
                        <EndHeader>
                            <CaretDownOutlined />
                        </EndHeader>
                    </Dropdown>
                </Tooltip>
            </Col>
        </Row >
    );
}

export default EndNav;