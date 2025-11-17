import 'swiper/css';
import 'swiper/css/pagination';
// Carousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import styles from './PromoCarousel.module.css';

export default function Carousel({ promoList = [] }) {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      loop
      spaceBetween={30}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      {promoList.map((src, i) => (
        <SwiperSlide key={i}>
          <img src={src} alt={`banner-${i}`} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
