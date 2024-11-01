import React, { useState, useEffect } from 'react';

const AboutUs = () => {
  // Static data defined within the component
  const aboutData = {
    title: "About Us",
    sections: [
      {
        title: "Who We Are",
        content: "We are a passionate team of fragrance experts and artisans dedicated to bringing you the finest and most exquisite scents. Our commitment to quality and innovation sets us apart in the fragrance industry."
      },
      {
        title: "Our Mission",
        content: "Our mission is to craft unique fragrances that not only please the senses but also embody elegance and sophistication. We aim to create scents that define moments, evoke memories, and inspire confidence."
      },
      {
        title: "Our Promise",
        content: "We promise to use only the highest quality ingredients, ethically sourced and expertly blended, to ensure that every bottle represents a masterpiece. Our goal is to provide you with a luxurious experience in every drop."
      },
      {
        title: "Why Choose Us?",
        content: "Our dedication to creativity, quality, and customer satisfaction makes us a trusted choice for those who appreciate fine fragrances. Join us in our journey to explore the world of premium scents."
      },
    ],
    image:     "https://plus.unsplash.com/premium_photo-1673277281977-3614760f01ec?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // Replace with an actual URL for the About Us image
  };

  const [data, setData] = useState(null);

  // Use useEffect to set the data on component mount
  useEffect(() => {
    // Simulating a data fetch
    setData(aboutData);
  }, []);

  if (!data) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="about-us-container p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">{data.title}</h1>
      
      {data.image && (
        <div className="flex justify-center mb-8">
          <img src={data.image} alt="About Us" className="w-full h-auto rounded-md shadow-md" />
        </div>
      )}
      
      <div className="text-lg leading-relaxed text-gray-700">
        {data.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
