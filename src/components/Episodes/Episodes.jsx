import { Mousewheel } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import styles from './Episodes.module.scss'
import 'swiper/css'
import Select from 'react-select'

const options = [
  { value: '8', label: 'season 8' },
  { value: '7', label: 'season 7' },
  { value: '6', label: 'season 6' },
  { value: '5', label: 'season 5' },
  { value: '4', label: 'season 4' },
  { value: '3', label: 'season 3' },
  { value: '2', label: 'season 2' },
  { value: '1', label: 'season 1' }
]

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
        <div className={styles.top}>
          <div className={styles.season}>
            <Select classNamePrefix='custom-select' options={options} />
          </div>
          <span>See all</span>
        </div>
        <Swiper
          modules={[Mousewheel]}
          // direction={'horizontal'}
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
                  <div className={styles.info}>
                    <div className={styles.info__number}>16</div>
                    <div className={styles.info__name}>
                      Мне просто захотелось авыаыв
                    </div>
                    <div className={styles.info__date}>10 Марта 2017</div>
                  </div>
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
