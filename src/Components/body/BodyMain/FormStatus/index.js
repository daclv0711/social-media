import React, { useEffect } from 'react';
import { OptionItem, SelectObject, StatusForm, StatusUser } from './index.styles';
import ImgUser from 'assets/images/no-img.png'
import { GlobalOutlined, LockFilled, TeamOutlined, UploadOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Input, Upload } from 'antd';
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
            status: data?.status,
            public: data?.publices || 'global',
        });
    }, [data?.status, data?.publices, form]);

    const handleSubmitStatus = dataForm => {
        const newPost = new FormData();
        newPost.append('status', dataForm.status);
        newPost.append('public', dataForm.public);
        dataForm.image && newPost.append('image', '' || dataForm?.image[0]?.originFileObj);
        if (data && data._id) {
            data.cloudinary_id && newPost.append('cloudinary_id', data.cloudinary_id);
            newPost.append('old_status', JSON.stringify(data.old_status));
            dispatch(StatusAction.updateStatusRequest(data._id, newPost))
        } else {
            dispatch(StatusAction.postStatusRequest(newPost));
        }
        form.resetFields();
    }

    const normFile = (e) => {
        // console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };

    const dummyRequest = ({ file, onSuccess }) => {
        setTimeout(() => {
            onSuccess('ok');
        }, 0);
    }

    return (
        user && <StatusForm
            form={form}
            onFinish={handleSubmitStatus}
            autoComplete="off"
            preserve={false}
        >
            <StatusUser>
                <Avatar src={user.avatar || ImgUser} alt={user.last_name} size={40} />
                <div className='user-info' >
                    <div className='user-name'>{`${user.last_name} ${user.first_name}`}</div>
                    <StatusForm.Item
                        name='public'
                        initialValue={'global'}
                    >
                        <SelectObject
                            getPopupContainer={trigger => trigger.parentNode}
                        >
                            <Option value="global">
                                <OptionItem>
                                    <GlobalOutlined />
                                    <div>C??ng khai</div>
                                </OptionItem>
                            </Option>
                            <Option value="friends">
                                <OptionItem>
                                    <TeamOutlined />
                                    <div>B???n b??</div>
                                </OptionItem>
                            </Option>
                            <Option value="private">
                                <OptionItem>
                                    <LockFilled />
                                    <div>Ch??? m??nh t??i</div>
                                </OptionItem>
                            </Option>
                            <Option value="friend">
                                <OptionItem>
                                    <UserOutlined />
                                    <div>B???n b?? c??? th???</div>
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
                    placeholder='B???n ??ang ngh?? g???'
                    autoSize={{ minRows: 1, maxRows: 6 }}
                    allowClear={true}
                    bordered={false}
                />
            </StatusForm.Item>
            <StatusForm.Item
                name="image"
                valuePropName="fileList"
                getValueFromEvent={normFile}
            >
                <Upload
                    name="avatar"
                    listType="picture"
                    maxCount={1}
                    customRequest={dummyRequest}
                >
                    <Button icon={<UploadOutlined />}>Th??m ???nh</Button>
                </Upload>
            </StatusForm.Item>
            <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                block
            >????ng</Button>
        </StatusForm>
    );
}

export default React.memo(FormStatus);