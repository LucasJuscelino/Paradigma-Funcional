import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {
  @Input() contents:string[] = []
  @Input() title:string = ''
  isOpen:boolean = false
  rotate:string = 'rotateZ(90deg)'

  open() {
    if(this.isOpen){
      this.isOpen = false
      this.rotate = 'rotateZ(90deg)'
    }else {
      this.isOpen = true
      this.rotate = 'rotateZ(270deg)'
    }
  }
}
