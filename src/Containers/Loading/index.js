import { Spin } from 'antd'
import React from 'react'
import { useSelector } from 'react-redux'
import { loadingMainState$ } from 'redux/selectors/loading'
import { WrapperLoading } from './index.styles'

function Loading() {

    const loading = useSelector(loadingMainState$)

    return (
        loading && (
            <WrapperLoading>
                <Spin spinning={true} size="large" />
            </WrapperLoading>
        )
    )
}

export default Loading
