import MainContentWrappper from "../Wrappers/MainContentWrapper"
import CardWrapper from "../Wrappers/CardWrapper"
import { h1Style, h2Style, h3Style, pStyle } from "./Styles/tailwind-styles"

const About = ()=>{
    
    return (
        <MainContentWrappper>
            <CardWrapper>
                <div className="font-poppins sm:p-24">
                    <h1 className={h1Style}>About Our School</h1>
                    <p className={pStyle}>
                        Welcome to Some Random Higher Secondary School, located in the heart of RandomPlace. Established with the mission to provide quality education and foster holistic development, our school is dedicated to nurturing young minds and preparing them for a bright future.
                    </p>

                    <h2 className={h2Style}>Our Vision</h2>
                    <p className={pStyle}>
                        To be a leading educational institution that inspires and empowers students to achieve academic excellence, personal growth, and social responsibility.
                    </p>
                    <h2 className={h2Style}>Our Mission</h2>
                    <p className={pStyle}>
                        Academic Excellence: We strive to provide a rigorous and comprehensive curriculum that challenges students to think critically, solve problems, and excel academically.
                        Holistic Development: We focus on the all-round development of our students, encouraging participation in extracurricular activities, sports, and the arts.
                        Inclusive Environment: We promote a welcoming and inclusive environment where every student feels valued and respected.

                        Community Engagement: We foster strong connections with our community and encourage students to engage in community service and social initiatives.
                    </p>

                    <h2  className={h2Style}>Facilities</h2>
                    <p className={pStyle}>
                        Some Random Higher Secondary School boasts state-of-the-art facilities designed to enhance the learning experience:<br/>

                        <b>Modern Classrooms:</b> Equipped with the latest technology to support interactive and dynamic learning.<br/>

                        <b>Science and Computer Labs:</b> Fully equipped labs to provide hands-on experience and foster scientific inquiry and technological skills.<br/>

                        <b>Library:</b> A well-stocked library with a vast collection of books, journals, and digital resources to support research and reading.<br/>

                        <b>Sports Complex:</b> Facilities for various sports and physical activities to promote health and teamwork.<br/>

                        <b>Arts and Music Rooms:</b> Dedicated spaces for students to explore their creative talents in visual arts, music, and drama.
                        Our Values<br/>
                        </p>
                        <h3 className={h3Style}>At Some Random Higher Secondary School, we uphold the following core values:</h3>
                        <p className={pStyle}>
                        <b>Integrity:</b> Encouraging honesty and strong moral principles.<br/>
                        <b>Respect:</b> Fostering an environment where everyone is treated with dignity.<br/>
                        Excellence: Striving for the highest standards in all endeavors.<br/>
                        <b>Innovation:</b> Promoting creativity and new ideas in learning and teaching.<br/>
                        Join us at Some Random Higher Secondary School, RandomPlace, where education meets excellence and every student is empowered to achieve their full potential.
                    </p>
                </div>
            </CardWrapper>
        </MainContentWrappper>
    )
}

export default About