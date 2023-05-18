import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'crud-box',
  templateUrl: './crud-box.component.html',
  styleUrls: ['./crud-box.component.css']
})
export class CrudBoxComponent implements OnInit{
    @Input() foto: string = "";
    @Input() titulo: string = "";
    @Input() color: string = "";
  windowWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getWindowWidth();
  }

  getWindowWidth() {
    this.windowWidth = window.innerWidth;
  }

    constructor(private elRef: ElementRef) {this.getWindowWidth();}

    ngOnInit(): void {
        this.elRef.nativeElement.querySelector(".card_title").style.color = this.color
    }
  
}
