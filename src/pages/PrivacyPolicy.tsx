import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-4">
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
        </p>
        <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
        <p className="text-muted-foreground mb-4">
          We may collect personal information such as your name, email address, and any other details you provide when contacting us or using our services.
        </p>
        <h2 className="text-xl font-semibold mb-2">How We Use Your Information</h2>
        <p className="text-muted-foreground mb-4">
          We use your information to respond to inquiries, improve our services, and communicate updates about our portfolio.
        </p>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="text-muted-foreground">
          If you have any questions about this Privacy Policy, please contact us at <a href="mailto:gauravupadhayay9801@gmail.com" className="text-primary hover:underline">gauravupadhayay9801@gmail.com</a>.
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicy;