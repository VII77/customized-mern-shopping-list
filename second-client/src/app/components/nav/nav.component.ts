import { SideBarService } from './../../services/side-bar.service';
import { Component, Input, OnInit } from '@angular/core';
import { MainContentComponent } from '../main-content/main-content.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public isMenuCollapsed = true;
  constructor(private sideBarService: SideBarService) { }

  ngOnInit(): void {
  }

  public onMenuClicked(): void {
    this.sideBarService.sendClickCall();
  }

}
