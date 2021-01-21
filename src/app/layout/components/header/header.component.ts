import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faBars, faSearch, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  @Output() open = new EventEmitter<boolean>();
  faBars = faBars;
  faSearch = faSearch;
  faShoppingBag = faShoppingBag;

  constructor() { }

  ngOnInit(): void {
  }

  openSidebar() {
    this.open.emit(true);
  }

}
