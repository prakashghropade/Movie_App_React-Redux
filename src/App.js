import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileNavigationcom from './components/MobileNavigation';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageURL } from './store/movieoSlice';

function App() {
     
  const dispatch =useDispatch();

  //  Banner data
  const fetchTrendingData = async () => {
    try {
         const response = await axios.get('/trending/all/week');
      dispatch(setBannerData(response.data.results));
  
    }
    catch(error) {
           console.log("Error", error);
    }
  }


// fetch configuration

const fetchConfiguration = async() => {
      try{
            const response = await axios.get('/configuration')
          dispatch(setImageURL(response.data.images.secure_base_url + "original"));
     
      }
      catch(error) {
        console.log("Error", error);
      }
}

  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, [])

  return (
    <main className='pb-14 lg:pb-0'>
    <Header/>
    <div className=''>
    <Outlet/>
    </div>
     <Footer/>
     <MobileNavigationcom/>
    </main>
  );
}

export default App;
