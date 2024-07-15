import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigationcom from './components/MobileNavigation';

function App() {
  return (
    <main className='pb-14 lg:pb-0'>
    <Header/>
    <div className='pt-16'>
    <Outlet/>
    </div>
     <Footer/>
     <MobileNavigationcom/>
    </main>
  );
}

export default App;
