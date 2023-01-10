import { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './Episodes.module.scss'
import 'swiper/css'

const Episodes = ({ movie }) => {
  return (
    <div className={styles.episodes}>
      <img
        src={movie.logo}
        alt={movie.name}
        width='200'
        style={{ opacity: 0.7 }}
      />
      <div className={styles.body}>
        <Swiper
          modules={[Mousewheel]}
          direction={'horizontal'}
          loop={false}
          spaceBetween={10}
          slidesPerView={5.2}
          freeMode={true}
          mousewheel={{
            releaseOnEdges: true
          }}
        >
          {movie.episodes.map(episode => {
            return (
              <SwiperSlide key={episode.id} className={styles.slide}>
                <div className={styles.item}>
                  <img
                    src={episode.thumbnail}
                    alt=''
                    className={styles.image}
                  />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Episodes
