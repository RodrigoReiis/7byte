import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/utils/state/app/app.reducers';
import { listSidebarSelector } from '../sidebar/store/sidebar.selectors';
import { SidebarLink } from 'src/utils/models/SidebarLink.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  stateLinks: SidebarLink[];

  ngOnInit(): void {
    this.store.select(listSidebarSelector).subscribe(async (list: SidebarLink[]) => {
      this.stateLinks = await list;
    });
  }

}
