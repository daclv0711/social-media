import { Tabs } from 'antd'
import ChangeInfoUser from 'Components/Setting/ChangeInfoUser'
import ChangePassword from 'Components/Setting/ChangePassword'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { infoUserState$, isLoginState$ } from 'redux/selectors/user'
import { WrapperSetting } from './index.styles'

const { TabPane } = Tabs

function Setting() {

    const user = useSelector(infoUserState$)
    const isLoading = useSelector(isLoginState$)

    useEffect(() => {
        document.title = 'Cài đặt'
    }, [])
    console.log(isLoading)
    if (!isLoading) return null

    return (
        user && <WrapperSetting>
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
