import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faTimes, faShoppingBag, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SidebarLink } from 'src/utils/models/SidebarLink.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/utils/state/app/app.reducers';
import { ListSidebar } from './store/sidebar.actions';
import { listSidebarSelector } from './store/sidebar.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() open = new EventEmitter<boolean>();
  faTimes = faTimes;
  faShoppingBag = faShoppingBag;
  faChevronRight = faChevronRight;
  state: SidebarLink[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new ListSidebar());
    this.store.select(listSidebarSelector).subscribe((sidebarLink: SidebarLink[]) => {
      this.state = sidebarLink;
    })
  }

  closeSidebar() {
    this.open.emit(false);
  }
}
