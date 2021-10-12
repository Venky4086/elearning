import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { GlobalData } from '../globaldata/global.data';

@Injectable({
  providedIn: 'root'
})
export class QBankserviceService {

  constructor(private http:HttpClient) { }

  // q bank category

  add_qbank_category(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'QuestionBank_Category/', data)
  }
  qbank_category_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'QuestionBank_Category/').pipe(shareReplay(1))
  }
  delete_qbank_category(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'QuestionBank_Category/?id=' + id)
  }
  update_qbank_category(category_id:any,data: any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'QuestionBank_Category/?id='+category_id, data)
  }

  // q bank subcategory

  add_qbank_subcategory(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'QuestionBank_SubCategory/', data)
  }
  qbank_subcategory_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'QuestionBank_SubCategory/').pipe(shareReplay(1))
  }
  delete_qbank_subcategory(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'QuestionBank_SubCategory/?id=' + id)
  }
  update_qbank_subcategory(category_id:any,data: any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'QuestionBank_SubCategory/?id='+category_id, data)
  }

//  q bank mode

  add_qbank(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'QuestionBank_QBank_Mode/', data)
  }
  qbank_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'QuestionBank_QBank_Mode/').pipe(shareReplay(1))
  }
  single_data_qbank(id:any):Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'QuestionBank_QBank_Mode/?id='+ id).pipe(shareReplay(1))
  }
  delete_qbank(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'QuestionBank_QBank_Mode/?id=' + id)
  }
  update_qbank(id:any,data: any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'QuestionBank_QBank_Mode/?id='+id, data)
  }

//  test mode

  add_testmode(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'QuestionBank_TestMode/', data)
  }
  testmode_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'QuestionBank_TestMode/').pipe(shareReplay(1))
  }
  single_data_testmode(id:any):Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'QuestionBank_TestMode/?id='+ id).pipe(shareReplay(1))
  }
  delete_testmode(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'QuestionBank_TestMode/?id=' + id)
  }
  update_testmode(category_id:any,data: any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'QuestionBank_TestMode/?id='+category_id, data)
  }

}
