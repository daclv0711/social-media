import { Button, Modal, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { UserName, ButtonRegister, FormRegister, Email, Password, Error } from './index.styles';
import { useForm } from "react-hook-form";
import { InputForm } from 'utils/InputForm';
import { UserAction } from 'redux/actions/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { createUserState$, emailExistState$ } from 'redux/selectors/user';

function Register({ loading }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const { handleSubmit, formState: { errors }, control, reset } = useForm();

    const emailExist = useSelector(emailExistState$);
    const createUser = useSelector(createUserState$);
    console.log('register')
    const dispatch = useDispatch();
    useEffect(() => {
        if (createUser.create) {
            reset();
            message.success(createUser.message);
            setIsModalVisible(false);
        }
    }, [createUser, reset]);
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
        <>
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
                <FormRegister onSubmit={handleSubmit(handleSubmitRegister)} >
                    <UserName>
                        <div>
                            <InputForm
                                name='first_name'
                                placeholder='Họ'
                                control={control}
                                rules={{
                                    required: 'Không để trống họ',
                                    pattern: {
                                        value: /(^[^0-9!@#$%^&*()_+\-=\[\]{};':"\\|,~`.<>\/?]{2,8}$)/g,
                                        message: 'Họ không hợp lệ'
                                    }
                                }}
                            />

                            <Error>{errors.first_name?.message}</Error>
                        </div>
                        <div>
                            <InputForm
                                name='last_name'
                                placeholder='Tên'
                                control={control}
                                rules={{
                                    required: 'Không để trống tên',
                                    pattern: {
                                        value: /(^[^0-9!@#$%^&*()_+\-=\[\]{};':"\\|,~`.<>\/?]{2,8}$)/g,
                                        message: 'Tên không hợp lệ'
                                    }
                                }}
                            />
                            <Error>{errors.last_name?.message}</Error>
                        </div>
                    </UserName>
                    <Email>

                        <InputForm
                            placeholder="Email"
                            control={control}
                            name='email'
                            rules={{
                                required: 'Không để trống email',
                                pattern: {
                                    value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                    message: 'Email không hợp lệ'
                                }
                            }}
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Error>{errors.email?.message}</Error>
                            <Error>{emailExist}</Error>
                        </div>
                    </Email>
                    <Password>
                        <InputForm
                            placeholder="Mật khẩu"
                            name='password'
                            control={control}
                            type='password'
                            rules={{
                                required: 'Không để trống mật khẩu.',
                                pattern: {
                                    value: /^(?=.*?[a-z])(?=.*?[0-9]).{8,32}$/g,
                                    message: 'Mật khẩu từ 8 đến 32 ký tự, bao gồm số và chữ.'
                                }
                            }}
                        />
                        <Error>{errors.password?.message}</Error>
                    </Password>
                    <ButtonRegister
                        htmlType="submit"
                        disabled={loading}
                    >Đăng ký</ButtonRegister>
                </FormRegister>
            </Modal>
        </>
    );
}

export default React.memo(Register);