import axios from "axios";
import { create } from "zustand";

export const GatDataStore = create(set => ({
  InformationList: null,
  InformationRequst: async () => {
    const res = await axios.get(
      "https://portfolio-backend-one-livid.vercel.app/api/details-information"
    );
    if (res.data.status === "success") {
      set({ InformationList: res.data.data });
    }
  },

  ServicesList: null,

  ServicesListRequst: async () => {
    let res = await axios.get(
      `https://portfolio-backend-one-livid.vercel.app/api/details-services`
    );
    if (res.data.status === "success") {
      set({ ServicesList: res.data.data });
    }
  },

  SkillsList: null,

  SkillsListRequst: async () => {
    let res = await axios.get(
      `https://portfolio-backend-one-livid.vercel.app/api/details-skills`
    );
    if (res.data.status === "success") {
      set({ SkillsList: res.data.data });
    }
  },

  ExperienceList: null,
  ExperienceRequst: async () => {
    let res = await axios.get(
      `https://portfolio-backend-one-livid.vercel.app/api/details-experience`
    );
    if (res.data.status === "success") {
      set({ ExperienceList: res.data.data });
    }
  },

  EducationList: null,
  EducationRequst: async () => {
    let res = await axios.get(
      `https://portfolio-backend-one-livid.vercel.app/api/details-background`
    );
    if (res.data.status === "success") {
      set({ EducationList: res.data.data });
    }
  },

  AboutList: null,

  AboutRequst: async () => {
    let res = await axios.get(
      `https://portfolio-backend-one-livid.vercel.app/api/details-about`
    );
    if (res.data.status === "success") {
      set({ AboutList: res.data.data });
    }
  },

  ProjectsList: null,
  ProjectsRequst: async () => {
    let res = await axios.get(
      `https://portfolio-backend-one-livid.vercel.app/api/details-project`
    );
    if (res.data.status === "success") {
      set({ ProjectsList: res.data.data });
    }
  },

  // Register Request-
  RegisterRequest: async postBody => {
    try {
      let response = await axios.post(
        `https://portfolio-backend-one-livid.vercel.app/api`,
        postBody
      );
      return response.data;
    } catch (e) {
      console.error("Error registering user:", e);
    }
  },
}));

export default GatDataStore;
