import React from "react"
import TeamMemberCard from "../components/TeamMemberCard"
import { Icon } from "@iconify/react"
import BecomeAMemberSection from "../components/BecomeAMemberSection"


const About = ({ scrollElementRef }) => {
    return (

        <div className="container">
            <div className="image-wrapper">
                <img src={require("../assets/images/aboutImage.svg")} alt="" />
                <img src={require("../assets/images/aboutDecoration.svg")} alt="" />
            </div>
            <h2 className="section-title">
                Hello
            </h2>
            <p className="section-text">
                Lectus dignissim eu a et. Imperdiet tellus fermentum netus sit. Facilisis id et dictum pharetra, a, ac. Lectus ultricies enim, vel a dictum elit egestas ullamcorper. Non imperdiet tellus nec egestas. Massa hac tristique pellentesque ut. Pulvinar eget egestas laoreet nulla id. Gravida mauris ut in et risus orci. Sit posuere libero aliquam massa cursus nibh morbi viverra. Ut interdum porttitor pulvinar tincidunt elementum ornare cras gravida. Vivamus suspendisse magna commodo venenatis at morbi nisl.
            </p>
            <h2 className="section-title">
                Vision
            </h2>
            <p className="section-text">
                Lectus dignissim eu a et. Imperdiet tellus fermentum netus sit. Facilisis id et dictum pharetra, a, ac. Lectus ultricies enim, vel a dictum elit egestas ullamcorper. Non imperdiet tellus nec egestas. Massa hac tristique pellentesque ut. Pulvinar eget egestas laoreet nulla id. Gravida mauris ut in et risus orci. Sit posuere libero aliquam massa cursus nibh morbi viverra. Ut interdum porttitor pulvinar tincidunt elementum ornare cras gravida. Vivamus suspendisse magna commodo venenatis at morbi nisl.
            </p>
            <h2 className="section-title">
                Team
            </h2>
            <p className="section-text">
                Lectus dignissim eu a et. Imperdiet tellus fermentum netus sit. Facilisis id et dictum pharetra, a, ac. Lectus ultricies enim, vel a dictum elit egestas ullamcorper. Non imperdiet tellus nec egestas. Massa hac tristique pellentesque ut.
            </p>
            <div className="team-members">
                <TeamMemberCard img="member1" name="Simona Simonovska" job="designer" />  <TeamMemberCard img="member2" name="Simon Apostolovski" job="tester" />  <TeamMemberCard img="member3" name="Bojana Kuzeva" job="writer" />
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/" className="icon-wrapper" target="_blank">
                    <Icon icon="ph:facebook-logo-light" width={65} className="icon" />
                </a>
                <a href="https://www.instagram.com/https://www.instagram.com/" className="icon-wrapper" target="_blank">

                    <Icon icon="ph:instagram-logo-light" width={65} className="icon" />
                </a>
                <a href="https://twitter.com/" className="icon-wrapper" target="_blank">

                    <Icon icon="uit:twitter-alt" width={65} className="icon" />
                </a>
            </div>
            <p className="mail-text">
                For any questions you can reach us at:
            </p>
            <a href="mailto:allblog@mail.com" className="mail-link"> <span> allblog@mail.com </span></a>
            <div className=" become-member-margin">
                <BecomeAMemberSection scrollElementRef={scrollElementRef} />
            </div>
        </div>

    )
}

export default About