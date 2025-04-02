import React from 'react';

const TermsOfService = () => {
  return (
    <section className="py-24 md:py-32 bg-secondary/50">
      <div className="container max-w-6xl mx-auto px-6">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="text-muted-foreground mb-4">
          By using this website, you agree to the following terms and conditions. Please read them carefully.
        </p>
        <h2 className="text-xl font-semibold mb-2">Use of Website</h2>
        <p className="text-muted-foreground mb-4">
          You may use this website for personal and non-commercial purposes only. Unauthorized use of the website is prohibited.
        </p>
        <h2 className="text-xl font-semibold mb-2">Intellectual Property</h2>
        <p className="text-muted-foreground mb-4">
          All content on this website, including text, images, and code, is the intellectual property of the owner unless otherwise stated.
        </p>
        <h2 className="text-xl font-semibold mb-2">Limitation of Liability</h2>
        <p className="text-muted-foreground">
          We are not responsible for any damages or losses resulting from the use of this website.
        </p>
      </div>
    </section>
  );
};

export default TermsOfService;