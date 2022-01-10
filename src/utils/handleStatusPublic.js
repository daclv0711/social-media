import { GlobalOutlined, LockOutlined, TeamOutlined } from "@ant-design/icons"

export const handleStatusPublic = (status) => {
    switch (status) {
        case 'public':
            return <GlobalOutlined />
        case 'private':
            return <LockOutlined />
        case 'friends':
            return <TeamOutlined />
        default:
            return <GlobalOutlined />
    }
}

export const handleStatusPublicText = (title) => {
    switch (title) {
        case 'public':
            return 'Công khai'
        case 'private':
            return 'Chỉ mình tôi'
        case 'friends':
            return 'Bạn bè'
        default:
            return 'Công khai'
    }
}