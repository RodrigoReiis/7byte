import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() open: boolean;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.open = true;
  }

  changeStatus(event) {
    this.open = event;
  }

}
