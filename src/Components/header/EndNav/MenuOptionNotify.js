import { Avatar } from 'antd'
import React from 'react'
import { FormatDate } from 'utils/FormatDate'
import { MenuOption, ProfileUser, Title } from './index.styles'

function MenuOptionNotify({ user, ImgUser }) {

    const [readNotify, setReadNotify] = React.useState(true)

    return (
        <>
            <Title>Thông báo</Title>
            {
                user.map((item, index) => {
                    return (
                        <MenuOption.Item key={index + 1} onClick={() => setReadNotify(false)}>
                            <ProfileUser notify={readNotify}>
                                <Avatar src={item.avatar || ImgUser} size={50} />
                                <div className='info'>
                                    <div className='notify'><b>{item.last_name} {item.first_name} </b>
                                        đã đăng bài mới: "{item.status.slice(0, 20)}..."
                                    </div>
                                    <div className='time'>{FormatDate(item.createdAt)}</div>
                                </div>
                            </ProfileUser>
                        </MenuOption.Item>
                    )
                })
            }

        </>
    )
}

export default React.memo(MenuOptionNotify)