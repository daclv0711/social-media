import { BellFilled, CaretDownOutlined, CommentOutlined, LogoutOutlined } from '@ant-design/icons';
import React from 'react';
import { EndHeader, MenuAccount, ProfileItem, ProfileUser, User } from './index.styles';
import ImgUser from 'assets/images/no-img.png';
import { Avatar, Col, Dropdown, Row, Tooltip } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { infoUserState$ } from 'redux/selectors/user';
import { UserAction } from 'redux/actions/user.action';

function EndNav(props) {

    const user = useSelector(infoUserState$)
    const { first_name, last_name, avatar } = user;
    const dispatch = useDispatch();

    const handleClickSignOut = () => {
        dispatch(UserAction.postSignOutRequest());
    }
    const menu = (

        <MenuAccount>
            <MenuAccount.Item key='1'>
                <ProfileUser>
                    <Avatar src={avatar || ImgUser} size={60} />
                    <div className='info'>
                        <div className='user-name'>{last_name} {first_name}</div>
                        <div className='content'>Xem trang cá nhân của bạn</div>
                    </div>
                </ProfileUser>
            </MenuAccount.Item>
            <MenuAccount.Item key='2' onClick={handleClickSignOut}>
                <ProfileItem>
                    <LogoutOutlined />
                    <div className='content'>Đăng xuất</div>
                </ProfileItem>
            </MenuAccount.Item>
        </MenuAccount>
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
                    <div className='user-name'>{`${last_name} ${first_name}`}</div>
                </User>
            </Col>
            <Col>

                <Tooltip title="Messenger" placement="bottom">
                    <EndHeader><CommentOutlined /></EndHeader>
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title="Thông báo" placement="bottom">
                    <EndHeader><BellFilled /></EndHeader>
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title="Tài khoản" placement="bottom">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <EndHeader><CaretDownOutlined /></EndHeader>
                    </Dropdown>
                </Tooltip>
            </Col>
        </Row>
    );
}

export default EndNav;