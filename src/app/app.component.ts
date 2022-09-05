import { Component, OnInit } from '@angular/core';
import jsPDF from "jspdf";
import autoTable from 'jspdf-autotable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  temp: any = [];
  temp1: any = [];
  temp2: any = [];

  constructor(){
    this.get()
  }
  ngOnInit(): void {
    
  }
  title = 'jspdf';
  arr = {
    fy : 2023,
    site : "ASD-SEZ",
    plant:"coker",
    opr_no:"2020-2021-ASD-SEZ-8098",
    opr_summary:'testing',
    teamlead:'lucifer',
    teammember:"asd,sdf,fgh,ghj",
  }

  arr1 = {
    gap_closed : 1,
    gap_opened : 3,
    gap_total : 4,
  }
  
  arr2 = {
   action_closed : 1,
   action_opened : 3,
   action_total : 4,
  }

  get(){
    this.temp.push(Object.entries(this.arr))
    this.temp1.push(Object.keys(this.arr1),Object.values(this.arr1))
    this.temp2.push(Object.keys(this.arr2),Object.values(this.arr2))
    console.table(this.temp1)
    console.table(this.temp)
    console.log(this.temp)
  }
downloadpdf(){
  const doc = new jsPDF()
  doc.setFontSize(14);
  doc.text("REPORT_OPR_SUMMARY",70,10)
  //document 1 
  autoTable(doc, {
    tableLineColor: [0,0,0],
    tableLineWidth: 0.20,
    tableWidth: 100,
    headStyles : {
      lineColor : [0,0,0],
      lineWidth : 0.20
    },
    bodyStyles : {
      lineColor : [0,0,0],
      lineWidth : 0.20
    },
    theme: "plain",
    startY: 20,
    margin: {
        top: 10
    },
    head: [["0","1"]],
    body: this.temp[0]
  })
    //document 2 
  autoTable(doc, {
    tableLineColor: [0,0,0],
    tableLineWidth: 0.20,
    theme: "plain",
    tableWidth: 100,
    headStyles : {
      lineColor : [0,0,0],
      lineWidth : 0.20
    },
    bodyStyles : {
      lineColor : [0,0,0],
      lineWidth : 0.20
    },
    head: [this.temp1[0]],
    body: [
    this.temp1[1]
    ],
  })
    //document 3
  autoTable(doc, {
    tableLineColor: [0,0,0],
    tableLineWidth: 0.20,
    theme: "plain",
    tableWidth: 100,
    headStyles : {
      lineColor : [0,0,0],
      lineWidth : 0.20
    },
    bodyStyles : {
      lineColor : [0,0,0],
      lineWidth : 0.20
    },
    head: [this.temp2[0]],
    body: [
    this.temp2[1]
    ],
  })
  doc.save("a4.pdf")
}

}
