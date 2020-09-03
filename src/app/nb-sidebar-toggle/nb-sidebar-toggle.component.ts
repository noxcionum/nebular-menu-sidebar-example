import { NbSidebarService } from '@nebular/theme';
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'nb-sidebar-toggle',
  templateUrl: './nb-sidebar-toggle.component.html',
  styles: [`
    :host nb-layout-header button:last-child {
      margin-left: auto;
    }
  `],
})

export class NbSidebarToggleComponent {

  constructor(private sidebarService: NbSidebarService) {
  }

  @Output() onChanged = new EventEmitter<boolean>();
  change(increased:any) {
      this.onChanged.emit(increased);
  }


  toggle() {
    this.sidebarService.toggle(false, 'left');
  }


}