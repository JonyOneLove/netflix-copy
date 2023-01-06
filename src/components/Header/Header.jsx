import Search from '../ui/Search/Search'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header}>
      <a href='/'>
        <img src='' alt='' />
      </a>
      <Search />
      <Profile />
    </div>
  )
}

export default Header
