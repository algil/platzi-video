import React from 'react';
import '../assets/scss/main.scss';
import useApi from '../hooks/useApi';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Search from '../components/Search';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

const App = () => {
  const videos = useApi('http://localhost:3000/api');

  return (
    <div className='app'>
      <Header />
      <Search />

      {videos.mylist && videos.mylist.length > 0 && (
        <Carousel title='My list'>
          {videos.mylist &&
            videos.mylist.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      )}

      <Carousel title='Trends'>
        {videos.trends &&
          videos.trends.map((item) => <CarouselItem key={item.id} {...item} />)}
      </Carousel>

      <Carousel title='Originals'>
        {videos.originals &&
          videos.originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
      </Carousel>

      <Footer />
    </div>
  );
};

export default App;
