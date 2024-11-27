import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        { name: "Emily R.", role: "Marketing Director", feedback: "We put our trust in Sunnyside..." },
        { name: "Thomas S.", role: "COO", feedback: "Sunnyside's enthusiasm coupled with..." },
        { name: "Jennie F.", role: "Business Owner", feedback: "Incredible end result! Our sales increased..." },
    ];

    return (
        <section className="testimonials">
            <h3>Client Testimonials</h3>
            <div className="testimonial-cards">
                {testimonials.map((t, index) => (
                    <div key={index} className="card">
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
