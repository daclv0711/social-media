import { Button, Result } from 'antd';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    useEffect(() => {
        document.title = 'Không tìm thấy trang';
    }, [])
    const navigave = useNavigate();

    const handleClick = () => {
        navigave('/');
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={handleClick}>Back Home</Button>}
        />
    );
}

export default NotFound;