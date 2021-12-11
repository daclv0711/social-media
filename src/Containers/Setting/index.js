import { Tabs } from 'antd'
import ChangeInfoUser from 'Components/Setting/ChangeInfoUser'
import ChangePassword from 'Components/Setting/ChangePassword'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { infoUserState$ } from 'redux/selectors/user'
import { getLocalStorage } from 'utils/localStorage'
import { WrapperSetting } from './index.styles'

const { TabPane } = Tabs

function Setting() {

    const user = useSelector(infoUserState$)

    useEffect(() => {
        document.title = 'Cài đặt'
    }, [])

    if ((!user && !getLocalStorage('refreshToken')) || !getLocalStorage('refreshToken') || !user) return <Navigate to='/' />

    return (
        <WrapperSetting>
            <Tabs tabPosition='top' size='small'>
                <TabPane tab="Thông tin tài khoản" key="1">
                    <ChangeInfoUser user={user} />
                </TabPane>
                <TabPane tab="Đổi mật khẩu" key="2">
                    <ChangePassword />
                </TabPane>
            </Tabs>
        </WrapperSetting >
    )
}

export default Setting
