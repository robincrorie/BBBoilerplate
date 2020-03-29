import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TranslateModule } from "@ngx-translate/core";

import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";

import { PageNotFoundComponent } from "./components/";
import { WebviewDirective } from "./directives/";
import { FormsModule } from "@angular/forms";
import { SideBarComponent } from "./side-bar/side-bar.component";

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from "ngx-perfect-scrollbar";
import { RouterModule } from "@angular/router";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [PageNotFoundComponent, WebviewDirective, SideBarComponent],
  imports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    PerfectScrollbarModule,
    RouterModule
  ],
  exports: [TranslateModule, WebviewDirective, FormsModule, SideBarComponent],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule {}
