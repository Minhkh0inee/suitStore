import { Component } from '@angular/core';
import {faBagShopping, faCircleInfo, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  searchIcon = faMagnifyingGlass
  infoIcon = faCircleInfo
  shoppingCart = faBagShopping
  userIcon = faUser
}
