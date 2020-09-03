import { Component, OnDestroy } from '@angular/core';
import { NbMenuService } from '@nebular/theme';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MENU_ITEMS } from './menu';

@Component({
  selector: 'nb-menu-services',
  template: `
      <nb-menu tag="menu" [items]="menuItems"></nb-menu>
        <router-outlet></router-outlet>
  `,
  styleUrls: ['nb-menu-service.component.scss'],
})
export class NbMenuServiceComponent  {

  menuItems = MENU_ITEMS;

  private destroy$ = new Subject<void>();
  selectedItem: string;

  constructor(private menuService: NbMenuService) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  addMenuItem() {
    this.menuService.addItems([{
      title: '@nebular/theme',
      target: '_blank',
      icon: 'plus-outline',
      url: 'https://github.com/akveo/ngx-admin',
    }], 'menu');
  }

  collapseAll() {
    this.menuService.collapseAll('menu');
  }

  navigateHome() {
    this.menuService.navigateHome('menu');
  }

  getSelectedItem() {
    this.menuService.getSelectedItem('menu')
      .pipe(takeUntil(this.destroy$))
      .subscribe( (menuBag) => {
        this.selectedItem = menuBag.item.title;
      });
  }
}