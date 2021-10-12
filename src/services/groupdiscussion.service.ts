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
export class GroupdiscussionService {

  constructor(private http: HttpClient) { }

  
add_group_discussion(data:any):Observable<any>{
  return this.http.post<any>(GlobalData.url_api+'GroupDiscussionAdmin/',data)
}
list_group_discussion():Observable<any>{
  return this.http.get<any>(GlobalData.url_api+'GroupDiscussionAdmin/')
}
delete_group_discussion(id:any):Observable<any>{
  return this.http.delete<any>(GlobalData.url_api+'GroupDiscussionAdmin/?id='+id)
}
update_group_discussion(id:any,data:any):Observable<any>{
  return this.http.put<any>(GlobalData.url_api+'GroupDiscussionAdmin/?id='+id,data)
}
}
