import React from 'react';
import "../aboutUs/about.css";
import Card from '../../components/menu/aboutCard/aboutCard';

function About() {
  return (
    <section>
      
      <div className="acards-container">
      <Card 
        name="Dr Rajesh Mehta(MBBS MD)" 
        email="drrajeshmehta222@gmail.com" 
        occupation="Project Head" 
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU2JVsHZHjPGoLBg285EtbGqGB0AES72vGsQ&s" 
      />
      <Card 
        name="Poorn Mehta" 
        email="poornmehta121@gmail.com" 
        occupation="Product Manager" 
        photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPiDZJJU9_7ug4uw9r-868MM80qtWRmU_8Q&s" 
      />
    </div>
    </section>

  );
}

export default About;
