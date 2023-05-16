import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'crud-box',
  templateUrl: './crud-box.component.html',
  styleUrls: ['./crud-box.component.css']
})
export class CrudBoxComponent implements OnInit{
    @Input() foto: string = "";
    @Input() titulo: string = "";
    @Input() color: string = "";

    constructor(private elRef: ElementRef) {}

    ngOnInit(): void {
        this.elRef.nativeElement.querySelector(".card_title").style.color = this.color
    }
  
}
