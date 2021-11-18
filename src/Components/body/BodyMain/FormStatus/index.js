import React from 'react';
import { OptionItem, SelectObject, StatusForm, StatusUser } from './index.styles';
import ImgUser from 'assets/images/no-img.png'
import { GlobalOutlined, LockFilled, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { InputForm } from 'utils/InputForm';
import { useDispatch, useSelector } from 'react-redux';
import { infoUserState$ } from 'redux/selectors/user';
import { StatusAction } from 'redux/actions/status.action';
import { loadingState$ } from 'redux/selectors/loading';

function FormStatus(props) {
    const { data } = props;
    const { Option } = SelectObject;
    const { handleSubmit, control, reset } = useForm();
    //user info
    const dispatch = useDispatch();
    const user = useSelector(infoUserState$);
    const loading = useSelector(loadingState$);

    const { last_name, first_name, avatar } = user;

    const handleSubmitStatus = dataForm => {
        if (data && data._id) {
            console.log(dataForm);
            if (dataForm.status !== data.status) {
                dispatch(StatusAction.updateStatusRequest({
                    ...data,
                    status: dataForm.status
                }))
            }
        } else {
            dispatch(StatusAction.postStatusRequest(dataForm));
            reset({
                status: '',
                select: 'global'
            });
        }
    }
    return (
        <StatusForm onSubmit={handleSubmit(handleSubmitStatus)}>
            <StatusUser>
                <Avatar src={avatar || ImgUser} alt={last_name} size={40} />
                <div className='user-info' >
                    <div className='user-name'>{`${last_name} ${first_name}`}</div>
                    <Controller
                        control={control}
                        name="select"
                        defaultValue="global"
                        render={
                            ({ field: { onChange, value } }) =>
                                <SelectObject
                                    onChange={onChange}
                                    value={value}
                                    defaultValue="global"
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
                        }
                    />
                </div>
            </StatusUser>
            <InputForm
                placeholder='Bạn đang nghĩ gì?'
                type='textarea'
                control={control}
                name='status'
                defaultValue={data?.status}
                rules={{ required: true }}
                autoSize={{ minRows: 1, maxRows: 6 }}
                allowClear={true}
            />
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