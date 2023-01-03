import { Component, OnInit } from '@angular/core';
import { IHeaderLink } from '../../dto/IHeaderLink';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  links: IHeaderLink[] = [
    { url: '/product', label: '商城' },
    { url: '/', label: '訂單' },
  ];

  actionLink: IHeaderLink = this.links[0];

  handlerLinkClick(link: IHeaderLink): void {
    this.actionLink = link;
  }
}
