import { EllipsisOutlined } from '@ant-design/icons';
import { Dropdown } from 'antd';
import React from 'react';
import { PostIconOptions } from './index.styles.js';
import OptionsStatus from './OptionsStatus';

function MenuStatus({ status }) {

    return (
        <Dropdown overlay={OptionsStatus(status)} trigger={['click']} placement="bottomRight">
            <PostIconOptions>
                <EllipsisOutlined />
            </PostIconOptions>
        </Dropdown>
    );
}

export default React.memo(MenuStatus);