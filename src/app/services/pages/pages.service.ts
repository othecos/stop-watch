import { Injectable, EventEmitter } from '@angular/core';
import { Pages } from './pages.models';
import { Router, RouterEvent, ActivatedRoute } from '@angular/router';
import { Utils } from 'src/app/classes/utils';




@Injectable({
  providedIn: 'root'
})
export class PagesService {

  selectedIndex: number = 0
  currentPath: string
  event: EventEmitter<'changed'> = new EventEmitter()
  folderPath = 'router'

  public appPages = [
    new Pages('Interval', `${this.folderPath}/interval`, 'alarm'),
    new Pages('Count-down', `${this.folderPath}/count-down`, 'chevron-down-circle'),
    new Pages('Count-Up', `${this.folderPath}/count-up`, 'chevron-up-circle'),
    new Pages('Donate: )', `${this.folderPath}/donate`, 'happy'),
  ];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    let subscription = this.router.events.subscribe((routerEvent: RouterEvent) => {
      this.updateCurrentRoute()
      if (this.currentPath !== undefined) {

        this.setSelectedIndex(this.currentPath)
        this.event.emit('changed')
      }
    })
  }
  private updateCurrentRoute() {
    let currentChild = this.activatedRoute.snapshot.children.find((child) => { return child.routeConfig.path })
    if (currentChild) {
      let path = currentChild.routeConfig.path
      this.currentPath = path.substr(path.lastIndexOf(this.folderPath + "/") + this.folderPath.length)
    }
  }
  public getActivePage() {
    return this.appPages[this.selectedIndex]
  }
  private setSelectedIndex(path: string) {
    this.selectedIndex = this.appPages.findIndex(page => page.url.toLowerCase().includes( path.toLowerCase()))
    return this.selectedIndex
  }
}
