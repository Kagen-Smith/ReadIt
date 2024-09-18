import { Outlet } from 'react-router-dom';
import Header from './pages/header';
import Footer from './pages/footer';


function App() {
  return (
    <main>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </main>
  );
}

export default App;