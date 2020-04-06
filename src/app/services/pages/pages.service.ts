import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { Pages } from './pages.models';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { Utils } from 'src/app/classes/utils';
import { Subscription } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class PagesService implements OnDestroy {

  selectedIndex = 0;
  currentPath: string;
  event: EventEmitter<'changed'> = new EventEmitter();
  folderPath = 'router';
  private subscription: Array<Subscription> = [];
  public appPages = [
    new Pages('Home', `${this.folderPath}/home`, 'home'),
    new Pages('Interval', `${this.folderPath}/interval`, 'alarm'),
    new Pages('Count-down', `${this.folderPath}/count-down`, 'chevron-down-circle'),
    new Pages('Count-Up', `${this.folderPath}/count-up`, 'chevron-up-circle'),
    new Pages('Donate 😁', `${this.folderPath}/donate`, 'happy'),
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const subscription = this.router.events.subscribe((routerEvent: RouterEvent) => {
      this.updateCurrentRoute();
      if (this.currentPath !== undefined) {

        this.setSelectedIndex(this.currentPath);
        this.event.emit('changed');
      }
    });
    this.subscription.push(subscription);
  }
  private updateCurrentRoute() {
    const currentChild = this.activatedRoute.snapshot.children.find((child) => !Utils.isEmpty(child.routeConfig.path));
    if (currentChild) {
      const path = currentChild.routeConfig.path;
      this.currentPath = path.substr(path.lastIndexOf(this.folderPath + '/') + this.folderPath.length);
    }
  }
  public getActivePage() {
    return this.appPages[this.selectedIndex];
  }
  private setSelectedIndex(path: string) {
    this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase().includes( path.toLowerCase()));
    return this.selectedIndex;
  }
  getRoute(name: string) {
    const pageFound = this.appPages.find((page) => {
      return page.title.toLowerCase().includes(name.toLowerCase());
    });
    if (pageFound) { return `/${pageFound.url}`; } else { return ''; }
  }
  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }
}
