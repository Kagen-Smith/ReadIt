import Login from '../pages/login.tsx'; 
import Navbar from '../components/navbar.tsx';

export default function Header() {
    return (
        <header>
            <Navbar />
            <Login />
        </header>
    )
}