import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { BlankComponent } from "./blank/blank.component";

export const PagesRoutes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "",
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "blank",
        component: BlankComponent
      }
    ]
  }
];
