import { Component, VERSION, LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es-US';

registerLocaleData(localeFr, 'es-PR');

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = formatDate(new Date(), 'shortDate', 'es-PR');
  name1 = formatDate(new Date(), 'EEEE', 'es-PR');
}
