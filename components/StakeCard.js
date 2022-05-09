import Image from "next/image";
import styles from "../styles/Stake.module.scss";



const StakeCard = (props) => {

    return ( 
        <div className={`${styles.stakeCard} has-text-centered`}>
            <h4 className="title is-6 has-text-white mb-3">PWD#{props.title}</h4>
            {/* <Image className={styles.image} src="/images/nft.png" width={200} height={240} layout="responsive" alt={"Powerful Dragon #1"} /> */}
            <Image className={styles.image} src={`https://gate.powerfuldragons.com/ipfs/QmVwbZacJv9hkov98YQnW6ZrHRcfH6VkhCTibqGH2Vr2Ji/${props.image}.png`} width={240} height={300} layout="responsive" alt={"Powerful Dragon #1"} />
            <button className="button is-primary is-small is-rounded mt-4" onClick={() => props.stakeNFT(props.image)}>Stake</button>
        </div>
     );
}
 
export default StakeCard;