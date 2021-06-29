import React from "react";
import ItProcess from "../../components/aitprocess/itprocess";
import Carousel from "../../components/carousel/carousel";
import CategorieCards from "../../components/categories/categories.cards";
import ContactUs from "../../components/contactUs/contactUs";
import CoursCards from "../../components/courseCards/courseCards";
import EdgeCardCollection from "../../components/Edge/edge.card.collection";
import Homecards from "../../components/homeCards/homeCards";
import KnowUs from "../../components/knowUs/knowus";
import TrainingCards from "../../components/ourtrainings/ourTrainings";
import Recentadditions from "../../components/Recentadditions/Recentadditions";
import TopCardCollection from "../../components/why.we.are.top/topCardCollection";
import ClientCards from "../../components/ourcrporateclients/clients.cards";
import "./homePage.styles.css";
import BusinessBaner from "../../components/businessbaner/businessbaner";
import Accordians from "../../components/accordians/accordians";

const HomePage = () => {
  return (
    <div className="">
      <Carousel />
      <Homecards />
      <CoursCards />
      <Recentadditions />
      <CategorieCards />
      <ContactUs />
      <EdgeCardCollection />
      <TopCardCollection />
      <TrainingCards />
      <ItProcess />
      <Accordians />
      <BusinessBaner />
      <ClientCards />
      <KnowUs />
    </div>
  );
};

export default HomePage;
