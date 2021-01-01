import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SideBarService {
  private menuClickedSource: Subject<any> = new Subject();

  constructor() {}

  public sendClickCall(): void {
    this.menuClickedSource.next();
  }

  public getClickCall(): Observable<any> {
    return this.menuClickedSource.asObservable();
  }
}
