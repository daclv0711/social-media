import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import React from 'react';
import { MenuOptionStatus, PostIconOptions } from './index.styles.js';
import OptionsStatus from './OptionsStatus';

function MenuStatus({ status }) {
    const menu = (
        <MenuOptionStatus>
            <OptionsStatus status={status} />
        </MenuOptionStatus>
    )
    return (
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
            <PostIconOptions>
                <EllipsisOutlined />
            </PostIconOptions>
        </Dropdown>
    );
}

export default React.memo(MenuStatus);