import scss from "./About.module.scss"
import React, { RefObject } from "react";
import WhatsAppIcon from "../../../../svg/whatsapp.svg"
import GitHubIcon from "../../../../svg/github.svg"
import InstagramIcon from "../../../../svg/instagram.svg"
import ProfileIcon from "../../../../svg/profile.svg"

interface AboutUsProps {
  AboutUsRef: RefObject<any>
}

const About: React.FC<AboutUsProps> = ({ AboutUsRef }) => {
  return (
    <section className={scss.about}>
      <div className={scss.container}>
        <div className={scss.content}>
          <div ref={AboutUsRef} className={scss.smooth}></div>
          <h1>ABOUT US</h1>
          <div className={scss.description}>
            <p>Our team brought together different skills to build this website. While one member focused on coding, others contributed through research and video creation. Together, we worked to make this project.</p>
          </div>

          <div className={scss.information_cards}>
            <div className={scss.card}>
              <img className={scss.profile} src={ProfileIcon} alt="ProfileIcon" />

              <h1>Hi, I'm <span>Sherbek</span></h1>
              <h3>I was responsible for...</h3>
              <h2>Web Development • Web Design • Research</h2>
              <div className={scss.border}></div>

              <div className={scss.social_media}>
                <a target="_blank" href="https://github.com/MrOsmo">
                  <img src={GitHubIcon} alt="GitHubIcon" />
                </a>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=4915204252990&text=Hi%2C%20I%20was%20invited%20from%20the%20Pennsylvania%20website.">
                  <img src={WhatsAppIcon} alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/sherbekofficial2007/">
                  <img src={InstagramIcon} alt="InstagramIcon" />
                </a>
              </div>
            </div>

            <div className={scss.card}>
              <img className={scss.profile} src={ProfileIcon} alt="ProfileIcon" />

              <h1>Hi, I'm <span>Piet</span></h1>
              <h3>I was responsible for...</h3>
              <h2>Research • Video Creation</h2>
              <div className={scss.border}></div>

              <div className={scss.social_media}>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=4916091403391&text=Hi%2C%20I%20was%20invited%20through%20the%20Pennsylvania%20website.">
                  <img src={WhatsAppIcon} alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/weetfeldy/">
                  <img src={InstagramIcon} alt="InstagramIcon" />
                </a>
              </div>
            </div>
            <div className={scss.card}>
              <img className={scss.profile} src={ProfileIcon} alt="ProfileIcon" />

              <h1>Hi, I'm <span>Fabian</span></h1>
              <h3>I was responsible for...</h3>
              <h2>Research • Video Creation</h2>
              <div className={scss.border}></div>

              <div className={scss.social_media}>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=491795989126&text=Hi%2C%20%20I%20was%20invited%20through%20the%20Pennsylvania%20website.">
                  <img src={WhatsAppIcon} alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/klein232313213/">
                  <img src={InstagramIcon} alt="InstagramIcon" />
                </a>
              </div>
            </div>
          </div>

          <div className={scss.reference_div}>
            <div className={scss.border}></div>
            <p className={scss.references}>
              References:
              <a target="_blank" href="https://www.svgrepo.com/svg/512317/github-142">GitHub (Icon)</a>
              |
              <a target="_blank" href="https://www.svgrepo.com/svg/513060/whatsapp-128">WhatsApp (Icon)</a>
              |
              <a target="_blank" href="https://www.svgrepo.com/svg/512399/instagram-167">Instagram (Icon)</a>
              |
              <a target="_blank" href="https://www.svgrepo.com/svg/512729/profile-round-1342">Profile (Icon)</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About