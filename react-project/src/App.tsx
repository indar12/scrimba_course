import Dashboard from './Dashboard';
import withAuth from './withAuth';

const ProctectedDashboard = withAuth(Dashboard);

function App() {

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    window.location.reload();
  }

  const handleLogout = () => {
    localStorage.removeItem('auth');
    window.location.reload();
  }

  return (
    <div>
      <div>
        <h1>React HOC withAuth Demo</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div>
        <ProctectedDashboard />
      </div>

    </div>
  )
}

export default App
