import React from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import useFetch from '../hooks/useFetch';

const Home = () => {

  const trendingData = useSelector(state => state.movieoData.bannerData);
  const {data: nowPlayingData} = useFetch("/movie/now_playing");
  const {data: topRatedData} = useFetch("/movie/top_rated")
  const {data: popularTvShowData} = useFetch("/movie/popular")

  const {data: onAirShowData} = useFetch("/tv/on_the_air")

  

  return (
    <div>
      <BannerHome />

      <HorizontalScrollCard data={trendingData} heading={"Trending"} trending={true}/>

      <HorizontalScrollCard data={nowPlayingData} heading={"Now Playing"}/>

      <HorizontalScrollCard data={topRatedData} heading={"Top Rated"}/>


      <HorizontalScrollCard data={popularTvShowData} heading={"Popular Tv Show"}/>

      <HorizontalScrollCard data={onAirShowData} heading={"On The Air"}/>

  
    </div>
  )
}

export default Home
