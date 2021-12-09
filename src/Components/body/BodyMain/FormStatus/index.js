import React, { useEffect } from 'react';
import { OptionItem, SelectObject, StatusForm, StatusUser } from './index.styles';
import ImgUser from 'assets/images/no-img.png'
import { GlobalOutlined, LockFilled, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { infoUserState$ } from 'redux/selectors/user';
import { StatusAction } from 'redux/actions/status.action';
import { loadingState$ } from 'redux/selectors/loading';

function FormStatus(props) {
    const { data } = props;
    const { Option } = SelectObject;
    //user info
    const dispatch = useDispatch();
    const user = useSelector(infoUserState$);
    const loading = useSelector(loadingState$);
    const [form] = StatusForm.useForm();
    useEffect(() => {
        form.setFieldsValue({
            status: data?.status
        });
    }, [data?.status, form]);
    const { last_name, first_name, avatar } = user;
    const handleSubmitStatus = dataForm => {
        if (dataForm.status.trim() !== '') {
            if (data && data._id) {
                if (dataForm.status !== data.status) {
                    dispatch(StatusAction.updateStatusRequest({
                        ...data,
                        status: dataForm.status
                    }))
                }
            } else {
                dispatch(StatusAction.postStatusRequest(dataForm));

            }
            form.resetFields();
        }
    }
    return (
        <StatusForm
            form={form}
            onFinish={handleSubmitStatus}
            autoComplete="off"
        >
            <StatusUser>
                <Avatar src={avatar || ImgUser} alt={last_name} size={40} />
                <div className='user-info' >
                    <div className='user-name'>{`${last_name} ${first_name}`}</div>
                    <StatusForm.Item
                        name='global'
                        initialValue={'global'}
                    >
                        <SelectObject
                            getPopupContainer={trigger => trigger.parentNode}
                        >
                            <Option value="global">
                                <OptionItem>
                                    <GlobalOutlined />
                                    <div>Công khai</div>
                                </OptionItem>
                            </Option>
                            <Option value="friends">
                                <OptionItem>
                                    <TeamOutlined />
                                    <div>Bạn bè</div>
                                </OptionItem>
                            </Option>
                            <Option value="private">
                                <OptionItem>
                                    <LockFilled />
                                    <div>Chỉ mình tôi</div>
                                </OptionItem>
                            </Option>
                            <Option value="friend">
                                <OptionItem>
                                    <UserOutlined />
                                    <div>Bạn bè cụ thể</div>
                                </OptionItem>
                            </Option>
                        </SelectObject>
                    </StatusForm.Item>
                </div>
            </StatusUser>
            <StatusForm.Item
                name='status'
                rules={[{ required: true }]}
            >
                <Input.TextArea
                    placeholder='Bạn đang nghĩ gì?'
                    autoSize={{ minRows: 1, maxRows: 6 }}
                    allowClear={true}
                    bordered={false}
                />
            </StatusForm.Item>
            <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                block
            >Đăng</Button>
        </StatusForm>
    );
}

export default React.memo(FormStatus);