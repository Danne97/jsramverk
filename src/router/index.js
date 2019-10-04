import Vue from "vue";
import Router from "vue-router";
import Me from "@/components/Me";
import Form from "@/components/form";
import Reports from "@/components/reports/Reports";
import Week1 from "@/components/reports/Report1";
import Week2 from "@/components/reports/Report2";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Me",
      component: Me
    },
    {
      path: "/form",
      name: "Form",
      component: Form
    },
    {
      path: "/reports/week",
      name: "Report",
      component: Reports
    },
    {
      path: "/reports/week/1",
      name: "Report1",
      component: Week1
    },
    {
      path: "/reports/week/2",
      name: "Report2",
      component: Week2
    }
  ]
});
