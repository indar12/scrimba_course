const withAuth = <P extends object>(Component: React.ComponentType<P>) => {
    return (props: P) => {
        const isAuthenticated = localStorage.getItem('auth') === 'true';
        if (!isAuthenticated) {
            return <h2>Please login to access this page</h2>
        }
        return <Component {...props} />
    }
}

export default withAuth;