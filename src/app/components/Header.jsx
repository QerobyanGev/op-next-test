import styles from './header.module.css';
import Image from 'next/image'

const Header = () => {

  let modeIcon = '/MoonIconDark.svg'

  return (
    <header className={styles.container}>
      <h3>Where in the world?</h3>
      <div className={styles.modeBox}>
        <Image
          className={styles.modeIcon}
          src={modeIcon}
          alt="Moon Icon"
          width={16}
          height={16}
          priority
        />
        <span>Mode</span>
      </div>
    </header>
  )
}
export default Header