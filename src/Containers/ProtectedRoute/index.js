import NotFound from 'Containers/NotFound'
import { useSelector } from 'react-redux'
import { isLoginState$ } from 'redux/selectors/user'

function ProtectedRoute({ children }) {
    const isLogin = useSelector(isLoginState$)

    if (!isLogin) return <NotFound />
    return (
        children
    )
}

export default ProtectedRoute
