import { Component, OnInit, VERSION } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ReportInfoModel {
  seller_name: string, //客戶英文名稱
  logs: LogsModel[]
}
export interface LogsModel {
  response_at:string,              //驗證日期
  uniform_invoice_status: string,  //發票狀態
  match_tax_id: string,            //統編與發票號碼
  match_tax_include_amount: string //銷售額含稅額
}
export const data:ReportInfoModel[]=[
  {
      seller_name: "TEST0002",
      logs: [
          {
              response_at: "逾4個月尚無法驗證",
              uniform_invoice_status: "作廢",
              match_tax_id: "不符合",
              match_tax_include_amount: "符合"
          },
          {
            response_at: "逾4個月尚無法驗證",
              uniform_invoice_status: "作廢",
              match_tax_id: "不符合",
              match_tax_include_amount: "不符合"
          },
          {
              response_at: "2022-04-20",
              uniform_invoice_status: "正常",
              match_tax_id: "符合",
              match_tax_include_amount: "符合",
          }
      ]
  }
  ,
  {
      seller_name: "TEST0002",
      logs: [
          {
              response_at: "2022-04-21",
              uniform_invoice_status: "作廢",
              match_tax_id: "不符合",
              match_tax_include_amount: "尚無資料",
          },
          {
              response_at: "",
              uniform_invoice_status: "作廢",
              match_tax_id: "不符合",
              match_tax_include_amount: "不符合",
          },
          {
              response_at: "",
              uniform_invoice_status: "正常",
              match_tax_id: "符合",
              match_tax_include_amount: "不符合",
          }
      ]
  },
  {
      seller_name: "TEST0003",
      logs: [
          {
              response_at: "",
              uniform_invoice_status: "正常",
              match_tax_id: "不符合",
              match_tax_include_amount: "尚無資料",
          },
          {
              response_at: "2022-01-05",
              uniform_invoice_status: "正常",
              match_tax_id: "不符合",
              match_tax_include_amount: "符合",
          },
          {
              response_at: "",
              uniform_invoice_status: "正常",
              match_tax_id: "符合",
              match_tax_include_amount: "尚無資料",
          }
      ]
  },
  {
      seller_name: "TEST0004",
      logs: [
          {
              response_at: "",
              uniform_invoice_status: "正常",
              match_tax_id: "符合",
              match_tax_include_amount: "不符合",
          }
      ]
  }
]

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  queryInvoiceDeliveryData = new MatTableDataSource<any>();
  tb_filterObj = { response_at: false, uniform_invoice_status: false, match_tax_id: false, match_tax_include_amount: false };

  ngOnInit(){
    this.queryInvoiceDeliveryData.data=data
  }
}
