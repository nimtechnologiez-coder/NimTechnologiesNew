import React from 'react';
import '../style/Enroll.css';

const Enroll = () => {
    const handleEnrollClick = () => {
        window.location.href = "https://enroll.nimtechnologies.in";
    };

    return (
        <div className="enroll-page">
            <div className="enroll-container">
                <div className="enroll-content">
                    <h1 className="enroll-title">
                        Enroll in Our Professional Program
                    </h1>

                    <p className="enroll-subtitle">
                        Take the next step in your learning journey with Nim Technologies.
                    </p>

                    <div className="enroll-body">
                        <p>
                            At Nim Technologies, we focus on industry-ready skills and real-world learning.
                        </p>
                        <p>
                            You're just one step away from enrolling in our professional program designed for:
                        </p>

                        <ul className="enroll-list">
                            <li>Students from IT & engineering backgrounds</li>
                            <li>Working professionals looking to upskill</li>
                            <li>Teaching staff and academic professionals</li>
                        </ul>

                        <p>
                            Our enrollment process is secure, fast, and powered by trusted payment infrastructure.
                        </p>
                    </div>

                    <div className="trust-points">
                        <h3>Why Trust Our Process?</h3>
                        <div className="trust-items">
                            <div className="trust-item">
                                <span className="trust-icon">🔒</span>
                                <span>Secure payment powered by Razorpay</span>
                            </div>
                            <div className="trust-item">
                                <span className="trust-icon">🛡️</span>
                                <span>SSL-protected checkout</span>
                            </div>
                            <div className="trust-item">
                                <span className="trust-icon">✓</span>
                                <span>Instant confirmation after successful payment</span>
                            </div>
                        </div>
                    </div>

                    <button
                        className="enroll-button"
                        onClick={handleEnrollClick}
                    >
                        Proceed to Secure Enrollment
                    </button>

                    <p className="helper-text">
                        You will be redirected to our secure enrollment portal to complete your registration and payment.
                    </p>

                    <div className="footer-note">
                        <p>
                            Need help? <a href="mailto:support@nimtechnologies.in">support@nimtechnologies.in</a> | <a href="https://www.nimtechnologies.in" target="_blank" rel="noopener noreferrer">www.nimtechnologies.in</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enroll;
