import React from "react";
import "../home/home.css";

function Home() {
  return (
    <section>
      <h1 className="home-heading">About Vitamin "A"</h1>
      <div className="container">
        <div className="section-card">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h2>Vitamin A Deficiency: A Public Health Concern</h2>
          <p>
            Vitamin A deficiency (VAD) is a significant public health concern
            worldwide, particularly in developing countries. Despite the
            relative ease of obtaining sufficient Vitamin A through a balanced
            diet, millions of people, especially children and pregnant women,
            suffer from its deficiency. The deficiency is not just a medical
            condition but a socio-economic issue that has far-reaching
            implications on the health, well-being, and economic productivity of
            affected populations.
          </p>
        </div>

        <div className="section-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeuBN8lbaybNpW3bDgVVj9jXlw0SjPChmEA&s"
            alt=""
          />
          <h2>The Importance of Vitamin A</h2>
          <p>
            Vitamin A is a fat-soluble vitamin essential for maintaining several
            vital functions in the human body. It plays a critical role in
            maintaining healthy vision, particularly in low-light conditions, by
            aiding the function of the retina. Furthermore, Vitamin A is crucial
            for immune function, helping the body combat infections by
            maintaining the integrity and function of skin and mucous cells,
            which act as barriers to bacteria and viruses. It is also vital for
            cell growth, differentiation, and reproduction. For pregnant women,
            adequate levels of Vitamin A are essential to fetal development,
            particularly for the formation of the heart, lungs, kidneys, eyes,
            and bones, as well as the circulatory, respiratory, and central
            nervous systems.
          </p>
        </div>

        <div className="section-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ65I1r9zBZegGUUvD1IujHBuMyC7wMQ9VGyw&s"
            alt=""
          />
          <h2>Causes of Vitamin A Deficiency</h2>
          <p>
            Vitamin A deficiency can arise due to inadequate dietary intake of
            Vitamin A-rich foods or a failure in the body’s absorption or
            conversion of Vitamin A. This deficiency is particularly prevalent
            in low-income regions where diets are often limited to staples like
            rice, maize, or cassava, which are low in Vitamin A. The deficiency
            can also be exacerbated by illnesses that impair the absorption of
            fats, such as chronic diarrhea, liver diseases, or diseases like
            measles and respiratory infections that increase the body’s demand
            for Vitamin A.
          </p>
          <p>
            Another critical factor contributing to Vitamin A deficiency is
            poverty, which restricts access to a diverse diet that includes
            animal sources of Vitamin A (like liver, fish oils, eggs, and dairy
            products) and fruits and vegetables that are rich in provitamin A
            carotenoids (such as carrots, sweet potatoes, spinach, and kale).
            Additionally, cultural practices and lack of knowledge regarding
            nutrition can lead to inadequate intake of Vitamin A.
          </p>
        </div>

        <div className="section-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3Fc9X8djddJB588D3xoNaBy7OfH5L7qXWA&s"
            alt=""
          />
          <h2>Solutions for vitamin "A" Deficiency</h2>
          <p>
            1. Dietary Changes Incorporating Vitamin A-rich foods into your diet
            is one of the most effective ways to prevent and treat Vitamin A
            deficiency: Animal Sources (Preformed Vitamin A/Retinol): Liver
            (beef, chicken, turkey): One of the richest sources of Vitamin A.
            Fish oils: Especially cod liver oil. Dairy products: Whole milk,
            butter, cheese. Eggs: Particularly the yolk. Plant Sources
            (Provitamin A/Carotenoids): Orange and yellow vegetables: Carrots,
            sweet potatoes, pumpkins, and butternut squash. Leafy green
            vegetables: Spinach, kale, and collard greens. Fruits: Mangoes,
            apricots, and cantaloupe. <br />

            2. Vitamin A Supplements Oral Supplements:
            Available in the form of tablets, capsules, or liquid drops. These
            are often recommended in cases of moderate to severe deficiency,
            especially when dietary intake is insufficient. High-Dose Vitamin A
            Supplements: These are sometimes prescribed by healthcare providers,
            particularly in areas where Vitamin A deficiency is prevalent and
            poses a significant risk to children and pregnant women. <br /> 
            
            3. Fortified Foods Vitamin A-Fortified Foods: Some countries fortify
            staple foods like margarine, cereals, sugar, and dairy products with
            Vitamin A to help reduce the prevalence of deficiency. <br />
            4. Health Education and Awareness Community Programs: In many regions, health
            education programs aim to raise awareness about the importance of
            Vitamin A and encourage dietary changes. Nutritional Counseling:
            Professional advice from a nutritionist or dietitian can help tailor
            a diet plan that meets individual needs. <br />

            5. Preventive Measures for At-Risk Populations Children: Vitamin A supplementation is often
            provided to children in developing countries through public health
            initiatives to prevent severe deficiency-related complications.
            Pregnant and Breastfeeding Women: Increased intake of Vitamin A is
            important during pregnancy and lactation, but it should be monitored
            carefully due to the risk of toxicity from excessive intake. <br />

             6. Treating Underlying Health Conditions Address Malabsorption
            Disorders: Conditions like celiac disease, Crohn’s disease, or
            cystic fibrosis can affect the absorption of Vitamin A. Managing
            these conditions properly can help improve Vitamin A status.
            Parasite Control: In areas with high rates of parasitic infections
            (e.g., intestinal worms), regular deworming treatments can help
            improve nutrient absorption, including Vitamin A. <br />

            7. Medical Interventions Vitamin A Injections: In severe cases, healthcare
            professionals may administer Vitamin A injections, especially in
            patients who cannot absorb it effectively from the gastrointestinal
            tract. <br />
            
            8. Avoiding Excessive Alcohol Consumption Reduce Alcohol
            Intake: Chronic alcohol consumption can impair Vitamin A metabolism.
            Reducing or avoiding alcohol can help improve Vitamin A levels. 
            9. Regular Monitoring Blood Tests: Regular monitoring of Vitamin A
            levels, especially for people at risk of deficiency, can help manage
            and adjust dietary intake and supplements as needed <br />
            .
             10. Avoiding Over-Supplementation Monitor Intake: Vitamin A toxicity can occur if
            taken in excess, particularly from supplements. It's crucial to
            follow the recommended dietary allowances (RDAs) and consult
            healthcare professionals before starting any supplementation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;
