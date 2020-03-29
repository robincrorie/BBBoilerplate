import { Component, OnInit, Input } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { MenuItems } from "../../core/menu/menu-items";

@Component({
  selector: "ms-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.scss"]
})
export class SideBarComponent implements OnInit {
  @Input() verticalMenuStatus: boolean;

  constructor(
    public translate: TranslateService,
    private router: Router,
    public menuItems: MenuItems
  ) {}

  ngOnInit() {}
}
