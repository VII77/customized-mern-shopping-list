import { SideBarService } from './../../services/side-bar.service';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { WithDestroy } from 'src/app/mixins/with-destroy';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss'],
})
export class MainContentComponent
  extends WithDestroy()
  implements OnInit, AfterViewInit {
  @ViewChild('drawer', { static: true })
  drawer!: MatDrawer;

  constructor(private sideBarService: SideBarService) {
    super();
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.sideBarService
      .getClickCall()
      .pipe(this.takeUntilDestroy)
      .subscribe(() => {
        this.drawer.toggle();
      });
  }
}
