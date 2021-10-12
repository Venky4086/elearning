import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { GlobalData } from '../globaldata/global.data';
const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*')

@Injectable({
  providedIn: 'root'
})
export class TestdiscussionService {

  constructor(private http:HttpClient) { }

//  category test discussion

add_td_category(data: any):Observable<any> {
  return this.http.post<any>(GlobalData.url_api + 'Test_Category/', data)
}
td_category_list():Observable<any> {
  return this.http.get<any>(GlobalData.url_api + 'Test_Category/').pipe(shareReplay(1))
}
delete_td_category(id: any):Observable<any> {
  return this.http.delete<any>(GlobalData.url_api + 'Test_Category/?id=' + id)
}
update_td_category(category_id:any,data: any):Observable<any> {
  return this.http.put<any>(GlobalData.url_api + 'Test_Category/?id='+category_id, data)
}

// subcategory test discussion

add_td_subcategory(data: any):Observable<any> {
  return this.http.post<any>(GlobalData.url_api + 'Test_SubCategory/', data)
}
td_subcategory_list():Observable<any> {
  return this.http.get<any>(GlobalData.url_api + 'Test_SubCategory/').pipe(shareReplay(1))
}
delete_td_subcategory(id: any):Observable<any> {
  return this.http.delete<any>(GlobalData.url_api + 'Test_SubCategory/?id=' + id)
}
update_td_subcategory(id: any,data:any):Observable<any> {
  return this.http.put<any>(GlobalData.url_api + 'Test_SubCategory/?id=' + id,data)
}

// add discussion 

add_discussion(data: any):Observable<any> {
  return this.http.post<any>(GlobalData.url_api + 'TestQuestionDisscussion/', data)
}
discussion_list():Observable<any> {
  return this.http.get<any>(GlobalData.url_api + 'TestQuestionDisscussion/').pipe(shareReplay(1))
}
delete_discussion(id: any):Observable<any> {
  return this.http.delete<any>(GlobalData.url_api + 'TestQuestionDisscussion/?id=' + id)
}
update_discussion(id: any,data:any):Observable<any> {
  return this.http.put<any>(GlobalData.url_api + 'TestQuestionDisscussion/?id=' + id,data)
}

}
