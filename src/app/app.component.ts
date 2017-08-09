import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'US Time Zone Display'
  date_time = ''
  active: String = ''

    updateTimeZone(tz: String): void {
        switch (tz) {
            case 'pst':
                this.date_time = new Date().toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
                this.active = tz
                break;
            case 'mst':
                this.date_time = new Date().toLocaleString("en-US", {timeZone: "America/Denver"});
                this.active = tz
                break;
            case 'cst':
                this.date_time = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});
                this.active = tz
                break;
            case 'est':
                this.date_time = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
                this.active = tz
                break;
        }

    }

    clear(): void {
        this.date_time = ''
        this.active = ''
    }




}
