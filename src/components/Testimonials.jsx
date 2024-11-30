import './Testimonials.css';
import emily from "../assets/image-emily.jpg";
import thomas from "../assets/image-thomas.jpg";
import jennie from "../assets/image-jennie.jpg";

const Testimonials = () => {
    const testimonials = [
        { name: "Emily R.", role: "Marketing Director", feedback: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.", photo: emily},
        { name: "Thomas S.", role: "COO", feedback: "Sunnyside's enthusiasm coupled with thei keen interest in our brand's success made it a satisfying and enjoyable experience", photo: thomas },
        { name: "Jennie F.", role: "Business Owner", feedback: "Incredible end result! Our sales increased over 400% when we worked sith Sunnyside. Highly recommended", photo: jennie },
    ];

    return (
        <section className="testimonials">
            <h3>Client Testimonials</h3>
            <div className="testimonial-cards">
                {testimonials.map((t, index) => (
                    <div key={index} className="card">
                        <img src={t.photo} alt="" />
                        <p>{t.feedback}</p>
                        <h4>{t.name}</h4>
                        <span>{t.role}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;