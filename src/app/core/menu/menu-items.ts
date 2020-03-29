import { Injectable } from "@angular/core";
import { Menu, ChildrenItems } from "./menu.interfaces";

const MENUITEMS = [
  {
    state: "home",
    name: "MENU.HOME",
    type: "link",
    icon: "home"
  },
  {
    state: "blank",
    name: "MENU.BLANK",
    type: "link",
    icon: "smile"
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
