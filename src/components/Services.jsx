import "./Services.css";
import ovo from "../assets/image-transform.jpg";
import taca from "../assets/image-stand-out.jpg";

const Services = () => {
  return (
    <section className="services">
      <div className="div1">
        <h3>Transform your brand</h3>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
      </div>
      <div className="div2">
        <img src={ovo} alt="Audience" />
      </div>

      <div className="div3">
        <h3>Stand out to the right audience</h3>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we'll build and extend
          your brand in digital places.
        </p>
      </div>
      <div className="div4">
        <img src={taca} alt="Audience" />
      </div>
      <div className="div5">
        <h3>Graphic Design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients attention.
        </p>
      </div>
      <div className="div6">
        <h3>Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </section>
  );
};

export default Services;
