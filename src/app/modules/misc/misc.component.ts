import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-misc',
  templateUrl: './misc.component.html',
  styleUrls: ['./misc.component.scss']
})
export class MiscComponent {

  @ViewChild('testDiv')
  input!: ElementRef;

  saveToImage(): void {
    domtoimage.toBlob(this.input.nativeElement)
      .then(x => saveAs(x));
  }
}