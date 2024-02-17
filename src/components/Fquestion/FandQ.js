// FAQ.js

import React from 'react';

const FandQ = () => {
    const startupFAQ = [
        {
            question: "What does your startup platform offer?",
            answer: "We provide a range of products/services designed to..."
        },
        {
            question: "How can I sign up for your platform?",
            answer: "To sign up, simply navigate to our website and click on the..."
        },
        {
            question: "Is there a cost associated with using your platform?",
            answer: "Yes, we have a pricing model that includes..."
        },
        {
            question: "What sets your platform apart from competitors?",
            answer: "Our platform stands out due to its unique features, such as..."
        },
        {
            question: "How can I get support if I encounter issues?",
            answer: "You can reach our customer support team via email at support@example.com..."
        },
        {
            question: "Do you offer a free trial?",
            answer: "Yes, we provide a free trial period for users to test our services. Sign up to get started!"
        },
        {
            question: "What industries or businesses can benefit from your platform?",
            answer: "Our platform is tailored for businesses in the [specific industries] and caters to..."
        },
        {
            question: "Can I integrate your platform with other tools or systems?",
            answer: "Certainly! We offer integrations with popular tools such as..."
        },
        {
            question: "How secure is the data on your platform?",
            answer: "We take data security seriously and implement measures such as encryption and compliance with..."
        },
        {
            question: "What is your refund or cancellation policy?",
            answer: "Our refund and cancellation policies are detailed on our [refund/cancellation] page. Please review it for more information."
        },
        {
            question: "Are there any onboarding resources or tutorials available?",
            answer: "Yes, we provide comprehensive onboarding resources and tutorials to help you get started. Visit our [documentation/tutorial] section for details."
        },
        {
            question: "How frequently do you update your platform with new features?",
            answer: "We are committed to continuous improvement and regularly release updates with new features. Stay tuned for our latest enhancements!"
        },
    ];

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Frequently Asked Questions</h2>

            <div className="accordion" id="faqAccordion">
                {startupFAQ.map((item, index) => (
                    <div className="accordion-item mb-4" key={index}>
                        <h2 className="accordion-header" id={`faqHeading${index}`}>
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#faqCollapse${index}`} aria-expanded="true" aria-controls={`faqCollapse${index}`}>
                                {item.question}
                            </button>
                        </h2>
                        <div id={`faqCollapse${index}`} className="accordion-collapse collapse" aria-labelledby={`faqHeading${index}`} data-bs-parent="#faqAccordion">
                            <div className="accordion-body">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FandQ;
