import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalData } from 'src/globaldata/global.data';

@Injectable({
  providedIn: 'root'
})
export class UserdatasService {

  constructor(private http:HttpClient) { }

    // users

    allusers() :Observable<any> {
      return this.http.get<any>(GlobalData.url_api + 'signup/')
    }
    deleteusers(id: any):Observable<any> {
      return this.http.delete<any>(GlobalData.url_api + 'signup/?id='+id)
    }
    blockusers(id:any,data:any){
      return this.http.put<any>(GlobalData.url_api + 'login/?id='+id,data)
    }
}
