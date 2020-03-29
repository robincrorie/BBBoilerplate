import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./main.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../pages/pages.module").then(m => m.PagesModule)
      }
    ]
  },
  {
    path: "main",
    component: MainComponent
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
