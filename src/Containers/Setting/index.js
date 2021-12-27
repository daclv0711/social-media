import { Tabs } from 'antd'
import ChangeInfoUser from 'Components/Setting/ChangeInfoUser'
import ChangePassword from 'Components/Setting/ChangePassword'
import React from 'react'
import { WrapperSetting } from './index.styles'
const { TabPane } = Tabs

function Setting({ user }) {
    document.title = 'Cài đặt'

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
