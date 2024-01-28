import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output()isMenuButtonClicked = new EventEmitter<void>();
  MenuButtonClicked(){
    this.isMenuButtonClicked.emit();
  }
}
