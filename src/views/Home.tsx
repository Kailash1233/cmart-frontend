import React from "react";
import Footer from "./includes/Footer";
import Header from "./includes/Header";
import { Section } from "./includes/Section";
import { useAppSelector } from "../hooks/redux-hooks";

const Home = () => {
  return (
    <>
      <Header />
      <Section />
      <Footer />
    </>
  );
};

export default Home;
