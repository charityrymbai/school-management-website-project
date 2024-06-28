
import QuickLinks from "../components/QuickLinks";
import Slideshow from "../components/Slideshow";
import MainContentWrappper from "../Wrappers/MainContentWrapper";
import CardWrapper from "../Wrappers/CardWrapper";
import { h1Style, h2Style, h3Style, pStyle } from "./Styles/tailwind-styles"

const Home = ()=>{
    return (
        <>
            <MainContentWrappper>
                <Slideshow />
                <div className="grid grid-cols-1 md:grid-cols-4">
                    {/* Left Section */}
                    <div>
                        <CardWrapper>
                            <QuickLinks />
                        </CardWrapper>
                    </div>
                    {/* MainSection */}
                    <div className="text-poppins col-span-3">
                        <CardWrapper>
                        <div className="sm:p-10">
                            <h1 className={h1Style}>Welcome to Some Random Higher Secondary School, RandomPlace!</h1>
                            <p className={pStyle}>
                            We are delighted to welcome you to the official website of Some Random Higher Secondary School, located in the vibrant community of RandomPlace. Our institution is committed to providing an enriching educational experience that prepares students for a successful future.<br/>

                            At Some Random Higher Secondary School, we believe in the power of education to transform lives. Our dedicated faculty and staff work tirelessly to create a nurturing and stimulating environment where every student can thrive. Whether it's through our rigorous academic programs, diverse extracurricular activities, or our emphasis on character development, we strive to foster a love of learning and a spirit of curiosity in all our students.<br/>

                            Explore our website to learn more about our school’s mission, values, and the exciting opportunities we offer. From detailed information about our curriculum and state-of-the-art facilities to the latest news and events, we hope this site provides you with a comprehensive view of life at Some Random Higher Secondary School.<br/>

                            Thank you for visiting, and we look forward to partnering with you in your child’s educational journey.<br/>

                            Warm regards,<br/>
                            The Some Random Higher Secondary School Team<br/>
                            </p>
                        </div>
                        </CardWrapper>
                    </div>
                </div>
            </MainContentWrappper>
        </>
    )
}

export default Home