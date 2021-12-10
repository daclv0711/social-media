import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import React from 'react';
import { PostIconOptions } from './index.styles.js';
import MenuOptionStatus from './MenuOptionStatus';

function PostOptionStatus({ status }) {
    const menu = (
        <Menu>
            <MenuOptionStatus status={status} />
        </Menu>
    )
    return (
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <PostIconOptions>
                <EllipsisOutlined />
            </PostIconOptions>
        </Dropdown>
    );
}

export default React.memo(PostOptionStatus);