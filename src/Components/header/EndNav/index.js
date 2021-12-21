import { ArrowLeftOutlined, BellFilled, CaretDownOutlined, MenuFoldOutlined, WechatOutlined } from '@ant-design/icons';
import React, { useMemo, useState } from 'react';
import { DrawerMenu, DrawerMenuTitle, EndHeader, MenuOption, User } from './index.styles';
import ImgUser from 'assets/images/no-img.png';
import { Avatar, Badge, Button, Col, Dropdown, Row, Tooltip } from 'antd';
import { useSelector } from 'react-redux';
import MenuOptionChat from './MenuOptionChat';
import MenuOptionNotify from './MenuOptionNotify';
import MenuOptionAccount from './MenuOptionAccount';
import { notifyStatusState$, allUsersState$ } from 'redux/selectors/status';
import { Link } from 'react-router-dom';
import MenuDrawerMobile from './MenuDrawerMobile';

function EndNav({ user }) {

    const notifyStatus = useSelector(notifyStatusState$)
    const allUser = useSelector(allUsersState$)

    const [visible, setVisible] = useState(false);

    const onClose = () => {
        setVisible(false);
    };
    const showLargeDrawer = () => {
        setVisible(true);
    };
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
            align="middle"
            justify="space-between"
            wrap={false}
        >
            {
                user ?
                    <>
                        <Col md={8} xs={0}>
                            <User>
                                <Avatar src={user.avatar || ImgUser} size={28} alt={user.last_name} />
                                <div className='user-name'>{`${user.last_name}`}</div>
                            </User>
                        </Col>
                        <Col xs={0} md={4}>

                            <Tooltip title="Messenger" placement="bottom">
                                <Dropdown placement="bottomCenter" getPopupContainer={(triggerNode) => triggerNode} overlay={menuWechat} trigger={['click']}>
                                    <Badge count={0} offset={[-4, 6]}>
                                        <EndHeader><WechatOutlined /></EndHeader>
                                    </Badge>
                                </Dropdown>
                            </Tooltip>
                        </Col>
                        <Col xs={0} md={4}>
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
                        <Col xs={0} md={4}>
                            <Tooltip title="Tài khoản" placement="bottom">
                                <Dropdown placement="bottomCenter" getPopupContainer={(triggerNode) => triggerNode} overlay={menu} trigger={['click']}>
                                    <EndHeader>
                                        <CaretDownOutlined />
                                    </EndHeader>
                                </Dropdown>
                            </Tooltip>
                        </Col>
                    </>
                    :
                    <Col md={24} xs={0}>
                        <Link to='/account/login'>
                            <Button type='primary'>Đăng nhập</Button>
                        </Link>
                    </Col>
            }
            <Col md={0} xs={24}>
                <EndHeader onClick={showLargeDrawer}>
                    <MenuFoldOutlined />
                </EndHeader>
                <DrawerMenu
                    title={<DrawerMenuTitle>Social media</DrawerMenuTitle>}
                    placement="right"
                    width='100%'
                    onClose={onClose}
                    visible={visible}
                    closeIcon={<ArrowLeftOutlined />}
                >
                    <MenuDrawerMobile user={user} ImgUser={ImgUser} onClose={onClose} />
                </DrawerMenu>
            </Col>

        </Row >

    );
}

export default EndNav;