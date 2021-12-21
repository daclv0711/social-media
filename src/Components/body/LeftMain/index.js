import React from 'react';
import { Option, Wrapper } from './index.styles';
// import { listData } from './listContent';
import imgUser from 'assets/images/no-img.png';
import { useSelector } from 'react-redux';
import { infoUserState$ } from 'redux/selectors/user';

function LeftMain(props) {

    const user = useSelector(infoUserState$)

    return (
        user && <Wrapper>
            <Option>
                <img src={user.avatar || imgUser} alt={user.last_name} />
                <div>{`${user.last_name} ${user.first_name}`}</div>
            </Option>
            {/* {
                listData.map((item, index) => {
                    return (
                        <Option key={index}>
                            <img src={item.img} alt={item.content} />
                            <div>{item.content}</div>
                        </Option>
                    )
                })
            } */}
            {/* <Hr />
            <H3>Lối tắt của bạn</H3>
            <Option>
                <img src={ImgGroup} style={{ borderRadius: '6px' }} alt='Cộng đồng Front-end(HTML/CSS/JS) Việt Nam' />
                <div>Cộng đồng Front-end(HTML/CSS/JS) Việt Nam</div>
            </Option> */}
        </Wrapper>
    );
}

export default LeftMain;