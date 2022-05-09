import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

import TeamCard from "../components/TeamCard"
import styles from "../styles/Team.module.scss"

// DATA
const member = [
	{ 
        name: "Mikko Lehtonen",
        photo: "mikko",
        role: "Pahakurki | Founder", 
        bio: "I'm a long time gamer, and a crypto enthusiast. I work as a technical support engineer and I'm on the last stretch on finishing engineering school.",
        twHandle: "Evilcrane",
        twUrl: "https://twitter.com/Evilcrane",
        linAvailable: true,
        linHandle: "mikko-lehtonen",
        linUrl: "https://www.linkedin.com/in/mikko-lehtonen-120029117/"
    },
	{ 
        name: "Shahen Algoo",
        photo: "shahen",
        role: "Nameless | Lead Developer", 
        bio: "I can do anything you throw at me. I spent the last 10 years working on awesome projects with amazing people, and have my own tech startups.",
        twHandle: "NamelessFTM",
        twUrl: "https://twitter.com/NamelessFTM",
        linHandle: "shahen",
        linUrl: "https://www.linkedin.com/in/shahenalgoo/"
    },
	{ 
        name: "Ryan Konovaloff",
        photo: "ryan",
        role: "Ruski | Marketing Lead", 
        bio: "I currently run digital marketing full time for a large corporation in the U.S. Extremely excited about the future of this project and crypto as a whole. Husband, father, gamer, and a blessed individual overall.",
        twHandle: "CryptoRuski",
        twUrl: "https://twitter.com/CryptoRuski",
        linHandle: "ryan",
        linUrl: "https://www.linkedin.com/in/ryan-konovaloff-8b32a98b/"
    },
	{ 
        name: "Shahil Algoo",
        photo: "shahil",
        role: "Ghost | Lead Game Dev", 
        bio: "Need bio",
        twHandle: "Ghost",
        twUrl: "https://twitter.com/GhostCRG",
        linHandle: "GhostCRG",
        linUrl: "https://www.linkedin.com/in/shahil-algoo-32926018a/"
    },
	{ 
        name: "Renegade",
        photo: "renegade",
        role: "Advisor", 
        bio: "Crypto investor since 2017,  Community Manager in POWER and VAPOR. #Blessed",
        twHandle: "buballer02",
        twUrl: "https://twitter.com/buballer02",
    },
	{ 
        name: "Jimmie Hill",
        photo: "jimmie",
        role: "Advisor", 
        bio: "Jimmie graduated with a bachelors in Psychology from Harvard University and currently is pursuing his MBA from University of New Haven.",
        twHandle: "_knightcrypto_",
        twUrl: "https://twitter.com/_knightcrypto_",
        linHandle: "jimmiehill",
        linUrl: "https://www.linkedin.com/in/jimmiehill/"
    },
	{ 
        name: "Shaavola",
        photo: "shaavola",
        role: "Partnership Manager", 
        bio: "A mod/helper in multiple NFT communities, my main goal is to connect myself and our project as well as humanly possible.",
        twHandle: "shaaaavola",
        twUrl: "https://twitter.com/shaaaavola"
    },
	{ 
        name: "Vinny",
        photo: "vinny",
        role: "Discord Lead/Mod", 
        bio: "Full Time Electrical and Energy Engineer in my own company Crypto investor since 2017, FTM Alpha Friendz Builder.",
        twHandle: "vinnyski",
        twUrl: "https://twitter.com/vinnyski"
    },
	{ 
        name: "Eddard",
        photo: "eddard",
        role: "Discord Mod", 
        bio: "Community mod for Corkscrew Financial, helper for Power. Looking for solutions to make a better world for everybody.",
        twHandle: "EddardUpton",
        twUrl: "https://twitter.com/EddardUpton"
    },
]

const Team = () => {
    

    return (
		<>
			<Head>
				<title>Team | Powerful Dragons</title>
				<meta name="keywords" content="nft, fantom" />
			</Head>

			<section className="border-bottom">
				<div className="container is-max-wide">

					<div className="columns is-multiline is-mobile">
						{member.map((member, index) => (
                            <div key={index} className="column is-full-mobile is-half-tablet is-one-third-widescreen">
                                <TeamCard photo={`${member.photo}`} name={`${member.name}`} role={`${member.role}`} twHandle={`${member.twHandle}`} twUrl={`${member.twUrl}`} linHandle={`${member.linHandle}`} linUrl={`${member.linUrl}`} bio={`${member.bio}`} />
                            </div>
						))}
					</div>
                    
				</div>
			</section>
		</>
     );
}
 
export default Team;