import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Mint.module.scss";

const Mint = () => {
    return ( 
		<>
			<Head>
				<title>Mint NFT | Powerful Dragons</title>
				<meta name="keywords" content="nft, fantom" />
			</Head>
		
			<div className={`${styles.mint} is-flex is-align-items-center is-justify-content-center`}>
				<Image className={styles.cover} src="/banner-mint.jpg" alt="Powerful Dragons Tavern" layout="fill" objectFit="cover" objectPosition="center" />

				<div className={`${styles.iframe} is-flex is-align-items-center is-justify-content-center`}>
					<img className={styles.loader} src="/loader.gif" alt="load" />

					<iframe
						src="https://gate.powerfuldragons.com/ipfs/QmVn8f6KP5y18QTfM7zwJXt1ybi8zefisyYqo7SRGq3n5j/drop.html?contract=0x109Ae99E032fa0187F1D489496Eb260435B8EDB3&chainId=250"
						width="600px"
						height="600px"
						// style="max-width:100%;"
						frameBorder="0"
					></iframe>
					
				</div>
			</div>
		</>
    );
}
 
export default Mint;