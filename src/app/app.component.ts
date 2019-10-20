import { Component } from '@angular/core';
import { AppService } from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  vnumber: string = '';
  cnumber: string = '';
  carname: string = '';
  showFirstPage: boolean = true;
  showBuyer: boolean = false;
  showSeller: boolean = false;
  showDashboard: boolean = false;
  showTable: boolean = false;
  showValuation: boolean = false;
  itemsList: any = { options: '1' };

  constructor(private service: AppService) {
    
  }

  getInfo() {
    this.service.getVehicleHistory(this.vnumber).subscribe(res => {
      console.log('responce: ', res.data);
      this.data = res.data;
      this.vnumber = '';
    }, err => {
      console.log('error: ', err);
    });
  }

  goToBuyer() {
    this.showFirstPage = false;
    this.showBuyer = true;
    this.showSeller = false;
    this.showDashboard = false;
    this.showTable = false;
  }

  goToSeller() {
    this.showFirstPage = false;
    this.showBuyer = false;
    this.showSeller = true;
    this.showTable = false;
  }

  submitVehicleInfo() {
    this.showValuation = true;
    // let value = this.vnumber || this.cnumber
    // this.service.getVehicleList(value).subscribe(res => {
    //   this.vnumber = '';
    //   this.cnumber = '';
    //   this.data = res;
    //   this.showTable = true;
    // }, err => {
    //   console.log('error: ', err);
    // });
  }

  publishData() {
    // this.showSeller = false;
    // this.showDashboard = true;
    // this.showTable = false;
    alert('Data Submitted to Blockchain Successfully.');
  }

  getCarList() {
    console.log('---- ', this.itemsList);
    this.showTable = true;
    this.carname = this.carname.toUpperCase();
    this.service.getMyCar(this.carname).subscribe(res => {
      this.carname = '';
      this.data = res;
    }, err => {
      console.log('error: ', err);
    });
  }

  purchasesCar() {
    alert('Purchase Car')
  }

  getFinance() {
    alert('Get Finance')
  }

  contactAgent() {
    alert('Contact Agent')
  }
}
