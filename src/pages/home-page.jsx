import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import Services from "../components/fullFolder/Services";

import Contacct from "../components/fullFolder/Contacct";

import ResumeTabs from "../components/fullFolder/InfoMenu ";

import GatDataStore from "../store/GatDataStore";
import HeroSection from "../components/fullFolder/HeroSection ";

import CardModel from "../components/fullFolder/CardModel";

const HomePage = () => {
  const {
    InformationRequst,
    ServicesListRequst,
    SkillsListRequst,
    ExperienceRequst,
    EducationRequst,
    AboutRequst,
    ProjectsRequst,
  } = GatDataStore();

  useEffect(() => {
    (async () => {
      await InformationRequst();
      await ServicesListRequst();
      await SkillsListRequst();
      await ExperienceRequst();
      await EducationRequst();
      await AboutRequst();
      await ProjectsRequst();
    })();
  }, []);

  return (
    <Layout>
      <HeroSection />
      <Services />
      <ResumeTabs />
      <CardModel />
      <Contacct />
    </Layout>
  );
};

export default HomePage;
