import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
    return ( 
        <div className="dapp">
            <Sidebar  />
            
            <main className="main">
                { children }
            </main>
        </div>
    );
}

export default Layout;