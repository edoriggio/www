import { defineStore } from "pinia";

export type News = {
  date: Date;
  content: string;
};

export const useNewsStore = defineStore("news", {
  state: () => ({
    news: [
      {
        date: new Date("08/06/2025"),
        content:
          "Our paper titled \"<span class=\"underline\">Pipelines Under Pressure: An Empirical Study of Security Misconfigurations of GitHub Workflows</span>\" has been accepted at PROFES 2025",
      },
      {
        date: new Date("07/16/2025"),
        content:
          "Our paper titled \"<span class=\"underline\">Evolution Scatterplot: Exploring Software Change Dynamics in Large-Scale Historical Datasets</span>\" has been accepted at VISSOFT 2025",
      },
      {
        date: new Date("08/01/2024"),
        content:
          "Started my Ph.D. in Informatics at Università della Svizzera italiana (<a href='https://usi.ch' target='_blank'>USI</a>)",
      },
      {
        date: new Date("07/10/2024"),
        content:
          "Successfully defended my thesis and obtained the M.Sc. degree in Software and Data Engineering (MSDE) at Università della Svizzera italiana (<a href='https://usi.ch' target='_blank'>USI</a>)",
      },
      {
        date: new Date("02/01/2024"),
        content:
          "Became part of the organization team of the <a href='https://neuralwave.ch' target='_blank'>Neural Wave</a> hackathon",
      },
    ] as News[],
  }),
});
