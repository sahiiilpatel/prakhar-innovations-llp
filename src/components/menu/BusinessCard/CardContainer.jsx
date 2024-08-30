
import React from 'react';
import BusinessCard from './BusinessCard';
import './CardContainer.css'; // Import CSS for container styling

const CardContainer = () => {
    const cardData1 = {
        title: 'Business Opportunities',
    content: [
      'There are numerous applications for this solution such as an eyesight evaluation for driver’s license issuance, Vitamin A deficiency detection for at-risk population, part of the fitness test for armed forces, routine health check-up for Life insurance as well as Mediclaim policy, etc.',
      'A subscription approach (on a number of tests and/or amount of time basis) may be taken in conjunction with the classic sales & maintenance model, in order to maximize the impact and achieve the full potential of this innovation.',
      'Throughout the country, there is a need of around 2.3 lakh devices, creating sufficient capacity to perform 230 crore tests annually.',
      'It is important to note that a substantial opportunity for this instrument also exists outside of India, with the projected number of devices being at 3.6 lakh and annual revenue of ₹1,800 crore.',
      'With a robust design, solid engineering fundamentals, and a forward-thinking approach - the margins can be maintained to support continuous R&D, achieve sustainable scaling, and execute sensible vertical integration.'
    ],
  };

  const cardData2 = {
    title: 'Benefactors',
content: [
  'A wide-scale adoption of this technology will create waves of impact, leading to a number of direct and indirect benefits of massive significance across a vast variety of sectors. The economic benefit can be estimated roughly at 0.5% of the nations nominal GDP. Considering the statistics for the financial year 2023-2024, this amount is around ₹1.4 lakh crore.',
  'As the fastest growing economy with the widest pool of youth ready to bring India to new heights, physical and mental health are of paramount importance. o	An inhibited physical growth will not only create inherent limitations on the capabilities of the most valuable asset of the country - its youth - but also, it will lead to several unavoidable mental stressors.',
  'One of the highest priorities of the youth today is skin-care, as it is evident from the latest trends & statistics surrounding fields such as dermatology, plastic surgery, as well as the market valuation & growth for skin-care products. While the deficiency of Vitamin A worsens the skin health and consequently lowers the self-confidence, the blind & substantial administration of Vitamin A doses create a significant threat of Vitamin A toxicity. This toxicity can not only adversely impact skin, but also damage vital organs such as the liver, brain  and kidneys.',
  'The massive impact of Vitamin A deficiency on fertility & pregnancy doesn’t only increase the possibility of shortage of youth in face of growing demand, but it also leads to substantial and chronic frustration for the affected individuals. This combination of degraded physical and mental health across its youth is a direct & major threat to Indias ambitious growth plans, and therefore it can not be ignored.',
  
],
};
    





  return (
    
    <div className="card-container">
       <BusinessCard title={cardData1.title} content={cardData1.content} />
       <BusinessCard title={cardData2.title} content={cardData2.content} />
    </div>
  );
};

export default CardContainer;
