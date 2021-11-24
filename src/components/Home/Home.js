import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import ServiceCard from "../ServiceCard/ServiceCard";
//import Contact from "../Contact/Contact";
//import Offer from "../Offer/Offer";
//import ReviewGet from "../ReviewGet/ReviewGet";

const Home = () => {
  const [services, setServices] = useState([]);

  // Loading Data
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <div>
      <Banner></Banner>
      <section id="service-id" className="mt-5 container">
        <h1 className="text-center fw-bolder" style={{ color: "#ad9271" }}>
          Most Popular Decorating
        </h1>
        <p className="text-center mb-5">
          To contribute to positive change and achieve our <br /> sustainability
          goals with many design
        </p>

        {/* render services from server side */}
        <div className="row">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </section>
      {/* <ReviewGet></ReviewGet>
      <Offer></Offer>
      <Contact></Contact> */}
    </div>
  );
};

export default Home;
