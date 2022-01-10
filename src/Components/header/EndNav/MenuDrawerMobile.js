import { LogoutOutlined, MessageTwoTone, SettingTwoTone, UnlockTwoTone } from '@ant-design/icons'
import { Avatar, Divider } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { UserAction } from 'redux/actions/user.action'
import { ProfileItem, ProfileUser, WrapperMenuMobile } from './index.styles'

function MenuDrawerMobile({ user, ImgUser, onClose }) {

    const dispatch = useDispatch();
    const handleClickSignOut = () => {
        dispatch(UserAction.postSignOutRequest());
        onClose()
    }

    return (
        <WrapperMenuMobile>
            {
                user ?
                    <>
                        <ProfileUser>
                            <Avatar src={user.avatar || ImgUser} size={60} />
                            <div className='info'>
                                <div className='user-name'>{user.last_name} {user.first_name}</div>
                                <div className='content'>Xem trang cá nhân của bạn</div>
                            </div>
                        </ProfileUser>
                        <Divider />
                        <Link to='/setting'>
                            <ProfileItem onClick={onClose}>
                                <SettingTwoTone />
                                <div className='content'>Cài đặt</div>
                            </ProfileItem>
                        </Link>
                        <Link to='/chat'>
                            <ProfileItem>
                                <MessageTwoTone twoToneColor="#eb2f96" />
                                <div className='content'>Tin nhắn</div>
                            </ProfileItem>
                        </Link>
                        <ProfileItem onClick={handleClickSignOut}>
                            <LogoutOutlined />
                            <div className='content'>Đăng xuất</div>
                        </ProfileItem>
                    </> :
                    <Link to='/account/login'>
                        <ProfileItem onClick={onClose}>
                            <UnlockTwoTone />
                            <div className='content'>Đăng Nhập/ Đăng ký</div>
                        </ProfileItem>
                    </Link>
            }
        </WrapperMenuMobile>
    )
}

export default MenuDrawerMobile
