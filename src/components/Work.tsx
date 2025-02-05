import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;
    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      duration: 40,
      delay: 0.2,
    });
  }, []);
  return (
    <div className="work-section" id="work">
    <div className="work-container section-container">
      <h2>
        My <span>Work</span>
      </h2>
      <div className="work-flex">
        {/* Work Box 1 */}
        <div className="work-box">
          <div className="work-info">
            <div className="work-title">
              <h3>01</h3>
              <div>
                <h4>Documentary Video</h4>
                <p>Category</p>
              </div>
            </div>
            <h4>Tools and features</h4>
            <p>Adobe Premiere Pro and Adobe After Effects</p>
          </div>
          <a href="https://youtu.be/AYGR5N1UmPs">
          <WorkImage image="public\images\Screenshot (19).png" alt="Documentary video" />
          </a>
        </div>

        {/* Work Box 2 */}
        <div className="work-box">
          <div className="work-info">
            <div className="work-title">
              <h3>02</h3>
              <div>
                <h4>Viral Shorts</h4>
                <p>Editing</p>
              </div>
            </div>
            <h4>Tools and features</h4>
            <p>Adobe premiere pro</p>
          </div>
          <a href="https://youtube.com/shorts/3VLlIvxBNA8">
          <WorkImage image="public\images\ozq1TcPFSmA-HD.jpg" alt="Corporate video" />
          </a>
        </div>

        {/* Work Box 3 */}
        <div className="work-box">
          <div className="work-info">
            <div className="work-title">
              <h3>03</h3>
              <div>
                <h4>Podcast</h4>
                <p>Category</p>
              </div>
            </div>
            <h4>Tools and features</h4>
            <p>Adobe Premiere Pro</p>
          </div>
          <a href="https://youtu.be/SQbRxqIP-ho?si=jO5yiDSxpeizWbGx">
          <WorkImage image="public\images\WhatsApp Image 2025-02-05 at 11.47.05 PM.jpeg" alt="Short film" />
          </a>
        </div>

        {/* Work Box 4 */}
        <div className="work-box">
          <div className="work-info">
            <div className="work-title">
              <h3>04</h3>
              <div>
                <h4>Pace Reel</h4>
                <p>Reel Editing</p>
              </div>
            </div>
            <h4>Tools and features</h4>
            <p>Adobe After Effect</p>
          </div>
          <a href="https://youtu.be/jjLqQYv-79U?si=CkeCYVcrQ4a2G2DC">
          <WorkImage image="public\images\WhatsApp Image 2025-02-06 at 12.08.05 AM.jpeg" alt="Music video" />
          </a>
        </div>

        {/* Work Box 5 */}
        <div className="work-box">
          <div className="work-info">
            <div className="work-title">
              <h3>05</h3>
              <div>
                <h4>Pace Reel</h4>
                <p>Reel Editing</p>
              </div>
            </div>
            <h4>Tools and features</h4>
            <p>Adobe After Effects</p>
          </div>
          <a href="https://youtu.be/iKywpmDx8YI?si=ldY4QLjK6gT-dALD">
          <WorkImage image="public\images\WhatsApp Image 2025-02-06 at 12.09.45 AM.jpeg" alt="Animation project" />
          </a>
        </div>

        {/* Work Box 6 */}
        <div className="work-box">
          <div className="work-info">
            <div className="work-title">
              <h3>06</h3>
              <div>
                <h4>Thumbnail</h4>
                <p>Graphic Design</p>
              </div>
            </div>
            <h4>Tools and features</h4>
            <p>Adobe Photoshop</p>
          </div>
          <a href="https://drive.google.com/drive/folders/1_kRh_mTiHpqOhAhs6E0qNstDdfBGRtF5?usp=sharing">
          <WorkImage image="public\images\photo-collage.png.png" alt="Event video" />
          </a>
        </div>
      </div>
    </div>
  </div>
);
};

export default Work;