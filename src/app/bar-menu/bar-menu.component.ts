import { Component, OnInit, OnDestroy } from '@angular/core';
import { formatDate } from '@angular/common';
import { DataServiceService } from '../Services/data-service.service';
import { DatePickerService } from '../Services/date-picker.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'msf-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit, OnDestroy {

  dateValue: Date;
  dateFormat: string;
  contentSubscriptions: Subscription = new Subscription();
  constructor(private dateService: DatePickerService) {}

  ngOnInit() {
    this.dateValue = new Date();
    this.formatDate(this.dateValue);
  }
  // ngOnDestroy() {
  //   this.contentSubscriptions.unsubscribe();
  // }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.contentSubscriptions.unsubscribe();
  }
  formatDate(dateValue: Date) {
    console.log('BAR-MENU formatDate() SAYS : ' + dateValue);
    this.dateFormat = (dateValue.getFullYear()).toString();
    const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    this.dateFormat = this.dateFormat + months[(dateValue.getUTCMonth())];
    const days = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14',
                  '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26',
                  '27', '28', '29', '30', '31'];
    this.dateFormat = this.dateFormat + days[dateValue.getDate() - 1];
    const dateSubscription = this.dateService.setDate(this.dateFormat);
    this.contentSubscriptions.add(dateSubscription);
  }
}
