import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-sanitization',
  templateUrl: './sanitization.component.html',
  styleUrls: ['./sanitization.component.scss']
})
export class SanitizationComponent {

  htmlCode: string = 'Test <b>content</b>';

  insecureUrl = 'javascript:alert("MESSAGE")';
  secureUrl: SafeUrl;

  constructor(private readonly sanitizer: DomSanitizer) {
    this.secureUrl = this.sanitizer.bypassSecurityTrustUrl(this.insecureUrl);
  }
}
