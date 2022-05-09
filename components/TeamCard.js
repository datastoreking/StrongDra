import Image from "next/image"
// import Link from "next/link"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import styles from "../styles/Team.module.scss"

const TeamCard = (props) => {
    // const linAvailable = props.linAvailable

    return ( 
        <div className={`${styles.box} box is-flex is-flex-direction-column`}>
            <figure>
                <Image className={`${styles.photo} is-flex-shrink-0`} src={`/team/${props.photo}.jpg`} width={732} height={430} layout="responsive" alt={"Powerful Dragon #1"} />
            </figure>
            <div className={`${styles.content} is-flex is-flex-direction-column`}>
                <h3 className="title is-4 is-uppercase mb-1">{props.name}</h3>
                <h4 className="title is-6 has-text-white is-uppercase">{props.role}</h4>
                <p className="mb-5">{props.bio}</p>
                <div className="mt-auto is-flex is-flex-wrap-wrap">
                    <a className={`${styles.social} mr-5`} href={`${props.twUrl}`} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faTwitter} /> &nbsp; {props.twHandle}
                    </a>
                    <a className={`${styles.social} mr-5`} href={`${props.linUrl}`} target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} /> &nbsp; {props.linHandle}
                    </a>
                </div>
            </div>
        </div>    
    );
}
 
export default TeamCard;