import Login from '../pages/login.tsx'; 
import Navbar from '../components/navbar.tsx';
//header for the page
export default function Header() {
    return (
        <header>
            <Navbar />
            <Login />
        </header>
    )
}