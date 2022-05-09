import Link from "next/link";

const NotFound = () => {
    return ( 
        <div>
            <h1>Not Found</h1>
            <Link href="/"><a>Back Home</a></Link>
        </div>
    );
}

export default NotFound;