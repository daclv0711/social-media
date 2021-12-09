import { Button, Modal, message, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { UserName, ButtonRegister, FormRegister, Error } from './index.styles';
import { UserAction } from 'redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { createUserState$, emailExistState$ } from 'redux/selectors/user';

function Register({ loading }) {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const emailExist = useSelector(emailExistState$);
    const createUser = useSelector(createUserState$);
    const dispatch = useDispatch();
    useEffect(() => {
        if (createUser.create) {
            message.success(createUser.message);
            setIsModalVisible(false);
        }
    }, [createUser]);
    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleSubmitRegister = (data) => {
        dispatch(UserAction.postSignUpRequest(data))
    }

    return (
        <div>
            <Button
                style={{ color: '#fff', backgroundColor: '#42b72a' }}
                htmlType="button"
                size='large'
                onClick={showModal}
                disabled={loading}
            >
                Tạo tài khoản mới
            </Button>
            <Modal
                title={<h1>Đăng ký tài khoản</h1>}
                visible={isModalVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <FormRegister onFinish={handleSubmitRegister}
                    autoComplete='off'
                >
                    <UserName>
                        <FormRegister.Item
                            name='first_name'
                            rules={[{ required: true, message: 'Vui lòng nhập họ.' }, {
                                pattern: /(^[^0-9!@#$%^&*()_+\-=[\]{};':"\\|,~`.<>/?]{2,9}$)/g,
                                message: 'Họ không hợp lệ.'
                            }]}
                        >
                            <Input
                                placeholder='Họ'
                            />

                        </FormRegister.Item>
                        <FormRegister.Item
                            name='last_name'
                            rules={[{ required: true, message: 'Vui lòng nhập tên.' },
                            { pattern: /(^[^0-9!@#$%^&*()_+\-=[\]{};':"\\|,~`.<>/?]{2,9}$)/g, message: 'Tên không hợp lệ' }
                            ]}
                        >
                            <Input
                                placeholder='Tên'
                            />
                        </FormRegister.Item>
                    </UserName>
                    <FormRegister.Item
                        name='email'
                        rules={[{ required: true, message: 'Vui lòng nhập email.' },
                        { type: 'email', message: 'email không hợp lệ.' }]}
                    >
                        <Input
                            placeholder="Email"
                        />
                    </FormRegister.Item>
                    <Error>{emailExist}</Error>
                    <FormRegister.Item
                        name='password'
                        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu.' }, {
                            pattern: /^(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/g,
                            message: 'Mật khẩu 8-32 ký tự, bao gồm số và chữ.'
                        }]}
                    >
                        <Input.Password
                            placeholder="Mật khẩu"
                        />
                    </FormRegister.Item>
                    <ButtonRegister
                        htmlType="submit"
                        disabled={loading}
                    >Đăng ký</ButtonRegister>
                </FormRegister>
            </Modal>
        </div>
    );
}

export default React.memo(Register);