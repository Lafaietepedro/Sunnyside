import './Services.css';

const Services = () => {
    return (
        <section className="services">
            <div className="service">
                <img src="/path-to-image1.jpg" alt="Transform" />
                <h3>Transform your brand</h3>
                <p>We are a full-service creative agency...</p>
                <a href="#learn-more" className="learn-more">Learn More</a>
            </div>
            <div className="service">
                <img src="/path-to-image2.jpg" alt="Audience" />
                <h3>Stand out to the right audience</h3>
                <p>Using a collaborative formula of designers...</p>
                <a href="#learn-more" className="learn-more">Learn More</a>
            </div>
        </section>
    );
};

export default Services;