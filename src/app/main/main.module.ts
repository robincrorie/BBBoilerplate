import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";

import { MainComponent } from "./main.component";
import { CoreModule } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { MatSidenavModule } from "@angular/material/sidenav";

import { MenuItems } from "../core/menu/menu-items";

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from "ngx-perfect-scrollbar";

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [MainComponent],
  imports: [
    CoreModule,
    CommonModule,
    SharedModule,
    MainRoutingModule,
    MatSidenavModule,
    PerfectScrollbarModule
  ],
  providers: [
    MenuItems,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class MainModule {}
