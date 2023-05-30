import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { getDatabase, ref,push,set,onValue } from 'firebase/database';
import Chart from 'chart.js/auto';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage implements OnInit {

  kneeAngleData: number[] = [];
  db: any;
  ledValue: any;
  walkingSpeed: number;
  activityLevel: number;
  totalDistance: any;
  kneeAngle: number;
  kneeJointAngle: number;
  ankleAngle: number;
  hipAngle: number;
  gaitPhase: number;
  timestamps: any;
  kneeAngles: any;
  
  lineChart: any;

  @ViewChild('lineCanvas') private lineCanvas: any;
  constructor() {
    this.totalDistance = 0;
    this.gettotalDistance();
    this.activityLevel = 0;
    this.getactivityLevel();
    this.walkingSpeed = 0;
    this.getwalkingSpeed();
    this.kneeAngle = 0;
    this.getKneeAngle();
    this.hipAngle = 0;
    this.getHipAngle();
    this.kneeJointAngle = 0;
    this.getKneeJointAngle();
    this.ankleAngle = 0;
    this.getAnkleAngle();
    this.gaitPhase = 0;
    this.getgaitPhase();
    this.timestamps = [];
    this.kneeAngles = [];
    this.lineChartMethod();
  
  }

  

  resetDistance() {
    this.db = getDatabase();
    const resetRef = ref(this.db, 'reset');
    set(resetRef, 1)
      .then(() => {
        console.log('Distance reset successfully in Firebase.');
      })
      .catch((error) => {
        console.error('Failed to reset distance in Firebase:', error);
      });
  }

  

  
  motorOn() {
    this.db = getDatabase();
    const measureRef = ref(this.db, 'measure');
    set(measureRef, 1)
      .then(() => {
        console.log('Distance reset successfully in Firebase.');
      })
      .catch((error) => {
        console.error('Failed to reset distance in Firebase:', error);
      });
  }

  motorOff() {
    this.db = getDatabase();
    const measureRef = ref(this.db, 'measure');
    set(measureRef, "OFF")
      .then(() => {
        console.log('Distance reset successfully in Firebase.');
      })
      .catch((error) => {
        console.error('Failed to reset distance in Firebase:', error);
      });
  }

  storeData(key:string,itemToBeStored:any){
    this.db=getDatabase();
    set(ref(this.db,key),itemToBeStored);


   }




  ledToggle() {
    this.storeData("led", this.ledValue);
  }

  gettotalDistance() {
    this.db = getDatabase();
    let key = "totalDistance";
    const itemRef = ref(this.db, key);
    onValue(itemRef, (data) => {
      if (data.val() != null) {
        this.totalDistance = data.val();
      }
    });
  }

  getgaitPhase() {
    this.db = getDatabase();
    let key = "gaitPhase";
    const itemRef = ref(this.db, key);
    onValue(itemRef, (data) => {
      if (data.val() != null) {
        this.gaitPhase = data.val();
      }
    });
  }

  getKneeAngle() {
    this.db = getDatabase();
    let key = "kneeAngle";
    const itemRef = ref(this.db, key);
    onValue(itemRef, (data) => {
      if (data.val() != null) {
        this.kneeAngle = data.val();
        this.kneeAngleData.push(this.kneeAngle);
       
      }
    });
  }
  
  getKneeJointAngle() {
    this.db = getDatabase();
    let key = "kneeJointAngle";
    const itemRef = ref(this.db, key);
    onValue(itemRef, (data) => {
      if (data.val() != null) {
        this.kneeJointAngle = data.val();
      }
    });
  }

  getHipAngle() {
    this.db = getDatabase();
    let key = "hipAngle";
    const itemRef = ref(this.db, key);
    onValue(itemRef, (data) => {
      if (data.val() != null) {
        this.hipAngle = data.val();
      }
    });
  }

  getAnkleAngle() {
    this.db = getDatabase();
    let key = "ankleAngle";
    const itemRef = ref(this.db, key);
    onValue(itemRef, (data) => {
      if (data.val() != null) {
        this.ankleAngle = data.val();
      }
    });
  }

  getactivityLevel() {
    this.db = getDatabase();
    let key = "activityLevel";
    const itemRef = ref(this.db, key);
    onValue(itemRef, (data) => {
      if (data.val() != null) {
        this.activityLevel = data.val();
      }
    });
  }

  getwalkingSpeed() {
    this.db = getDatabase();
    let key = "walkingSpeed";
    const itemRef = ref(this.db, key);
    onValue(itemRef, (data) => {
      if (data.val() != null) {
        this.walkingSpeed = data.val();
      }
    });
  }

  ngOnInit() {
    this.gettotalDistance();
    this.getactivityLevel();
    this.getwalkingSpeed();
    this.getKneeAngle();
    this.getHipAngle();
    this.getKneeJointAngle();
    this.getAnkleAngle();
    this.db = getDatabase();
    this.getKneeAngle();
    this.timestamps = ['1','2','3','4','5'];
    this.kneeAngles = [1,2,3,5,6];
   // this.drawChart();
   
  }

  lineChartMethod() {
    this.lineCanvas = document.getElementById("lineCanvas");
    this.lineChart = new Chart(this.lineCanvas , {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
        datasets: [
          {
            label: 'Sell per week',
            fill: false,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
            spanGaps: false,
          }
        ]
      }
    });
  }
}


