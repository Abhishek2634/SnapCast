import Header from '@/components/Header';
import React from 'react'
import VideoCard from '@/components/VideoCard';
import { dummyCards } from '@/constants';


const page = async () => {
  // const { id } = params;
  return (
    <div className='wrapper page'>
      <Header subHeader="abhishek.fst1@gmail.com" title="Abhishek Farswal" userImg="/assets/images/dummy.jpg" />
      <section className='video-grid'>
          {dummyCards.map((card) => (
              <VideoCard key={card.id} {...card} />
          ))}
      </section>
    </div>
  )
}

export default page
