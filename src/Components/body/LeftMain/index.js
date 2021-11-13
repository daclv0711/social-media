import React from 'react';
import { H3, Hr, Option, Wrapper } from './index.styles';
import { listData } from './listContent';
import ImgGroup from 'assets/images/group-img-1.jpg';
function LeftMain() {
    return (
        <Wrapper>
            {
                listData.map((item, index) => {
                    return (
                        <Option key={index}>
                            <img src={item.img} alt={item.content} />
                            <div>{item.content}</div>
                        </Option>
                    )
                })
            }
            <Hr />
            <H3>Lối tắt của bạn</H3>
            <Option>
                <img src={ImgGroup} style={{ borderRadius: '6px' }} alt='Cộng đồng Front-end(HTML/CSS/JS) Việt Nam' />
                <div>Cộng đồng Front-end(HTML/CSS/JS) Việt Nam</div>
            </Option>
        </Wrapper>
    );
}

export default LeftMain;