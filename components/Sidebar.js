import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faHome, faHammer, faCoins, faGamepad, faUsers, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import { faDiscord, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons'
import styles from "../styles/Sidebar.module.scss"

const Sidebar = () => {
    // Toggle Sidebar
    const [isActive, setActive] = useState(false)
    const handleToggle = () => {
        setActive(!isActive);
    }

    // Get current route
    const router = useRouter()
    const currentRoute = router.pathname

    return (
        <>
            <div className={styles.overlay} style={{ visibility: (isActive ? 'visible' : 'hidden') }}>

            </div>

            <button onClick={handleToggle} className={`${styles.sidebarToggle} ${isActive ? `${styles.sidebarToggled}` : ''}`}>
                { isActive ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} /> }
            </button>

            {/* <aside style={{visibility: showMe ? 'hidden' : 'visible'}} className={`${styles.sidebar} is-flex is-flex-direction-column is-justify-content-space-between`}> */}
            <aside className={`${styles.sidebar} ${isActive ? `${styles.sidebarIsActive}` : ''} is-flex is-flex-direction-column is-justify-content-space-between`}>
                <div className={`${styles.sidebarBrand} p-5 mb-6 has-text-centered`}>
                    <Link href="/"><a>
                        <Image src="/images/logo.png" width={140} height={60} alt={"Powerful Dragons Logo"} />
                    </a></Link>
                </div>

                <ul className={`menu-list ${styles.sidebarMenuList}`}>
                    <li><Link href="/"><a className={currentRoute === '/' ? `${styles.isActive}` : ''} onClick={handleToggle}>
                        <FontAwesomeIcon icon={faHome} className={styles.fa} /> Home
                    </a></Link></li>

                    <li><Link href="/mint"><a className={currentRoute === '/mint' ? `${styles.isActive}` : ''} onClick={handleToggle}>
                    <FontAwesomeIcon icon={faHammer} className={styles.fa} /> Mint NFT
                    </a></Link></li>

                    <li><Link href="/stake"><a className={currentRoute === '/stake' ? `${styles.isActive}` : ''} onClick={handleToggle}>
                        <FontAwesomeIcon icon={faCoins} className={styles.fa} /> Stake NFT
                    </a></Link></li>

                    <li><Link href="/game"><a className={currentRoute === '/game' ? `${styles.isActive}` : ''} onClick={handleToggle}>
                        <FontAwesomeIcon icon={faGamepad} className={styles.fa} /> P2E Game <small>Soon</small>
                    </a></Link></li>

                    <li><Link href="/team"><a className={currentRoute === '/team' ? `${styles.isActive}` : ''} onClick={handleToggle}>
                        <FontAwesomeIcon icon={faUsers} className={styles.fa} /> Team <small>Doxxed</small>
                    </a></Link></li>

                    {/* <li><Link href="/team"><a className={currentRoute === '/team' ? `${styles.isActive}` : ''} onClick={handleToggle}>
                        <FontAwesomeIcon icon={faBookOpen} className={styles.fa} /> Whitepaper
                    </a></Link></li> */}
                </ul>

                <div className={`${styles.sidebarSocial} mt-6 mb-5 has-text-centered`}>
                    <a className="p-4" href="https://discord.com/invite/PRYMVTtUj8" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>

                    <a className="p-4" href="https://twitter.com/PowerDragonsFTM" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                    </a>

                    <a className="p-4" href="https://powerfuldragonsnft.medium.com/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faMedium} />
                    </a>
                </div>
            </aside>
        </>
     );
}
 
export default Sidebar;