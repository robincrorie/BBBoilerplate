import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HomeComponent } from "./home/home.component";
import { BlankComponent } from "./blank/blank.component";

import { PagesRoutes } from "./pages.routing";

@NgModule({
  declarations: [HomeComponent, BlankComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: []
})
export class PagesModule {}
