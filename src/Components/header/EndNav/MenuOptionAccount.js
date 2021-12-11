import { LogoutOutlined, SettingOutlined } from '@ant-design/icons'
import { Avatar } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserAction } from 'redux/actions/user.action';
import { MenuOption, ProfileItem, ProfileUser } from './index.styles'

export default function MenuOptionAccount({ user, ImgUser }) {

    const dispatch = useDispatch();

    const handleClickSignOut = () => {
        dispatch(UserAction.postSignOutRequest());
    }

    return (
        <>
            <MenuOption.Item key='1'>
                <ProfileUser>
                    <Avatar src={user.avatar || ImgUser} size={60} />
                    <div className='info'>
                        <div className='user-name'>{user.last_name} {user.first_name}</div>
                        <div className='content'>Xem trang cá nhân của bạn</div>
                    </div>
                </ProfileUser>
            </MenuOption.Item>
            <MenuOption.Item key='2'>
                <Link to='/settings'>
                    <ProfileItem>
                        <SettingOutlined />
                        <div className='content'>Cài đặt</div>
                    </ProfileItem>
                </Link>
            </MenuOption.Item>
            <MenuOption.Item key='3' onClick={handleClickSignOut}>
                <ProfileItem>
                    <LogoutOutlined />
                    <div className='content'>Đăng xuất</div>
                </ProfileItem>
            </MenuOption.Item>
        </>
    )
}
