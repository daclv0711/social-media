import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

export const InputForm = (props) => {

    return (
        <Controller
            name={props.name}
            control={props.control}
            rules={props.rules}
            render={({ field: { onChange, value } }) => (
                (props.type === "password") ?
                    <Input.Password
                        onChange={onChange}
                        value={value}
                        placeholder={props.placeholder}
                        size='large'
                    />
                    :
                    ((props.type === 'textarea') ?
                        <Input.TextArea
                            onChange={onChange}
                            defaultValue={value || props.defaultValue}
                            placeholder={props.placeholder}
                            size='large'
                            type={props.type}
                            bordered={false}
                            autoSize={props.autoSize}
                            allowClear={props.allowClear}
                            style={props.style}
                        /> :
                        <Input
                            onChange={onChange}
                            value={value}
                            placeholder={props.placeholder}
                            size='large'
                            type={props.type}
                        />)

            )
            }
        />
    );
}
