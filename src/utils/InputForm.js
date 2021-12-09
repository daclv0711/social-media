import { Input } from 'antd';
import React from 'react';
import { Controller } from 'react-hook-form';

const InputForm = (props) => {

    return (
        <Controller
            name={props.name}
            control={props.control}
            rules={props.rules}
            defaultValue={props.defaultValue}
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
                            value={value}
                            placeholder={props.placeholder}
                            size='large'
                            defaultValue={props.defaultValue}
                            type={props.type}
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

export default React.memo(InputForm)
