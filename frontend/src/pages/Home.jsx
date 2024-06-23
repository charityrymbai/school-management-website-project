import Header from "./../components/Header"
import Footer from "./../components/Footer"

const Home = ()=>{
    return (
        <>
            <Header></Header>
            <MainContent></MainContent>
            <Footer></Footer>
        </>
    )
}

const MainContent = () => {
    return (
        <div className="pt-[400px]">
            <div className="h-[2000px]">
                <div>
                      hello there
                </div>
            </div>
        </div>
    );
  };
  

export default Home