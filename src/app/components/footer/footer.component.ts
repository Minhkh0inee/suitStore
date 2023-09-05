import { Component } from '@angular/core';
import {faFacebook, faPinterest, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  facebookIcon = faFacebook
  pinterestIcon= faPinterest
  instagramIcon = faInstagram
  twittericon =  faTwitter
}
