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
export class ElearningService {

  constructor(private http: HttpClient) { }

  allcategory():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'diff_dig_category/').pipe(shareReplay(1))
  }
  singlcategory(id: any):Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'diff_dig_category/' + id)
  }
  deletecategory(id: any):Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'diff_dig_category/' + id)
  }
  addsubcategory(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'create_subcategory', data)
  }
  allsubcategory():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'subcategory_list').pipe(shareReplay(1))
  }
  deletesubcategory(id: any):Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'delete_subcategory/' + id)
  }

// category diiferent

  add_diff_category(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'diff_dig_category/', data)
  }
  diff_category_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'diff_dig_category/').pipe(shareReplay(1))
  }
  delete_diff_category(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'diff_dig_category/?id=' + id)
  }
  update_diff_category(category_id:any,data: any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'diff_dig_category/?id='+category_id, data)
  }

  // subcategory diiferent

  add_diff_subcategory(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'diff_dig_sub_category/', data)
  }
  diff_subcategory_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'diff_dig_sub_category/').pipe(shareReplay(1))
  }
  delete_diff_subcategory(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'diff_dig_sub_category/?id=' + id)
  }
  update_diff_subcategory(id: any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'diff_dig_sub_category/?id=' + id,data)
  }

  // add  different

  add_diff_dig(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'diff_dig/', data)
  }
  diff_dig_list():Observable<any> {
      return this.http.get<any>(GlobalData.url_api + 'diff_dig/').pipe(shareReplay(1))
  }
  delete_diff_dig(id:any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'diff_dig/?id='+id)
  }
  update_diff_dig(id:any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'diff_dig/?id=' + id,data)
  }

//  category recentupdates

  add_recent_update_category(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'recent_updates_category/', data)
  }
  recent_update_category_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'recent_updates_category/').pipe(shareReplay(1))
  }
  delete_recent_update_category(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'recent_updates_category/?id=' + id)
  }
  update_recent_update_category(category_id:any,data: any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'recent_updates_category/?id='+category_id, data)
  }

// subcategory recentupdates

  add_recent_update_subcategory(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'recent_updates_subCategory/', data)
  }
  recent_update_subcategory_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'recent_updates_subCategory/').pipe(shareReplay(1))
  }
  delete_recent_update_subcategory(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'recent_updates_subCategory/?id=' + id)
  }
  update_recent_update_subcategory(id: any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'recent_updates_subCategory/?id=' + id,data)
  }

// add recent updates

  add_recent_update(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'recent_updates/', data)
  }
  recent_update_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'recent_updates/').pipe(shareReplay(1))
  }
  delete_recent_update(id:any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'recent_updates/?id='+id)
  }
  update_recent_update(id:any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'recent_updates/?id=' + id,data)
  }

// category value

  add_value_category(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'values_category/', data)
  }
  value_category_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'values_category/').pipe(shareReplay(1))
  }
  delete_value_category(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'values_category/?id=' + id)
  }
  update_value_category(category_id:any,data: any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'values_category/?id='+category_id, data)
  }

// subcategory value

  add_value_subcategory(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'values_sub_category/', data)
  }
  value_subcategory_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'values_sub_category/').pipe(shareReplay(1))
  }
  delete_value_subcategory(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'values_sub_category/?id=' + id)
  }
  update_value_subcategory(id: any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'values_sub_category/?id=' + id,data)
  }

// add  values

  add_values(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'values/', data)
  }
  values_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'values/').pipe(shareReplay(1))
  }
  delete_value(id:any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'values/?id='+id)
  }
  update_value(id:any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'values/?id=' + id,data)
  }

  //  category icards

  add_icard_category(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'icards_pdf_category/', data)
  }
  icard_category_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'icards_pdf_category/').pipe(shareReplay(1))
  }
  delete_icard_category(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'icards_pdf_category/?id=' + id)
  }
  update_icard_category(category_id:any,data: any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'icards_pdf_category/?id='+category_id, data)
  }

  // subcategory icards

  add_icard_subcategory(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'icards_pdf_sub_category/', data)
  }
  icard_subcategory_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'icards_pdf_sub_category/').pipe(shareReplay(1))
  }
  delete_icard_subcategory(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'icards_pdf_sub_category/?id=' + id)
  }
  update_icard_subcategory(id: any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'icards_pdf_sub_category/?id=' + id,data)
  }

    // add icards

    add_icard(data: any):Observable<any> {
      return this.http.post<any>(GlobalData.url_api + 'icards_pdf/', data)
    }
    icard_list():Observable<any> {
      return this.http.get<any>(GlobalData.url_api + 'icards_pdf/').pipe(shareReplay(1))
    }
    delete_icard(id:any):Observable<any> {
      return this.http.delete<any>(GlobalData.url_api + 'icards_pdf/?id='+id)
    }
    update_icard(id:any,data:any):Observable<any> {
      return this.http.put<any>(GlobalData.url_api + 'icards_pdf/?id=' + id,data)
    }

//  category audio

  add_audio_category(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'icards_audio_category/', data)
  }
  audio_category_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'icards_audio_category/').pipe(shareReplay(1))
  }
  delete_audio_category(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'icards_audio_category/?id=' + id)
  }
  update_audio_category(category_id:any,data: any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'icards_audio_category/?id='+category_id, data)
  }

// subcategory audio

  add_audio_subcategory(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'icards_audio_sub_category/', data)
  }
  audio_subcategory_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'icards_audio_sub_category/').pipe(shareReplay(1))
  }
  delete_audio_subcategory(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'icards_audio_sub_category/?id=' + id)
  }
  update_audio_subcategory(id: any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'icards_audio_sub_category/?id=' + id,data)
  }

  // add audio 

  add_audio(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'icards_audio/', data)
  }
  audio_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'icards_audio/').pipe(shareReplay(1))
  }
  delete_audio(id:any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'icards_audio/?id='+id)
  }
  update_audio(id:any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'icards_audio/?id=' + id,data)
  }



//  category  pastpaper

  add_pastpaper_category(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'ICardsPastPaper_Category/', data)
  }
  pastpaper_category_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'ICardsPastPaper_Category/').pipe(shareReplay(1))
  }
  delete_pastpaper_category(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'ICardsPastPaper_Category/?id=' + id)
  }
  update_pastpaper_category(category_id:any,data: any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'ICardsPastPaper_Category/?id='+category_id, data)
  }

// subcategory pastpaper

  add_pastpaper_subcategory(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'ICardsPastPaper_SubCategory/', data)
  }
  pastpaper_subcategory_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'ICardsPastPaper_SubCategory/').pipe(shareReplay(1))
  }
  delete_pastpaper_subcategory(id: any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'ICardsPastPaper_SubCategory/?id=' + id)
  }
  update_pastpaper_subcategory(id: any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'ICardsPastPaper_SubCategory/?id=' + id,data)
  }

// add pastpaper

  add_pastpaper(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'ICardsPastPaper/', data)
  }
  pastpaper_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'ICardsPastPaper/').pipe(shareReplay(1))
  }
  delete_pastpaper(id:any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'ICardsPastPaper/?id='+id)
  }
  update_pastpaper(id:any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'ICardsPastPaper/?id=' + id,data)
  }

    // category wallposter

    add_wallposter_category(data: any):Observable<any> {
      return this.http.post<any>(GlobalData.url_api + 'wall_poster_category/', data)
    }
    wallposter_category_list():Observable<any> {
      return this.http.get<any>(GlobalData.url_api + 'wall_poster_category/').pipe(shareReplay(1))
    }
    delete_wallposter_category(id: any):Observable<any> {
      return this.http.delete<any>(GlobalData.url_api + 'wall_poster_category/?id=' + id)
    }
    update_wallposter_category(category_id:any,data: any):Observable<any> {
      return this.http.put<any>(GlobalData.url_api + 'wall_poster_category/?id='+category_id, data)
    }

    // subcategory wallposter

    add_wallposter_subcategory(data: any):Observable<any> {
      return this.http.post<any>(GlobalData.url_api + 'wall_poster_sub_category/', data)
    }
    wallposter_subcategory_list():Observable<any> {
      return this.http.get<any>(GlobalData.url_api + 'wall_poster_sub_category/').pipe(shareReplay(1))
    }
    delete_wallposter_subcategory(id: any):Observable<any> {
      return this.http.delete<any>(GlobalData.url_api + 'wall_poster_sub_category/?id=' + id)
    }
    update_wallposter_subcategory(id: any,data:any):Observable<any> {
      return this.http.put<any>(GlobalData.url_api + 'wall_poster_sub_category/?id=' + id,data)
    }

    
    // add wallposter

    add_wallposter(data: any):Observable<any> {
      return this.http.post<any>(GlobalData.url_api + 'wall_poster/', data)
    }
    wallposter_list():Observable<any> {
      return this.http.get<any>(GlobalData.url_api + 'wall_poster/').pipe(shareReplay(1))
    }
    delete_wallposter(id:any):Observable<any> {
      return this.http.delete<any>(GlobalData.url_api + 'wall_poster/?id='+id)
    }
    update_wallposter(id:any,data:any):Observable<any> {
      return this.http.put<any>(GlobalData.url_api + 'wall_poster/?id=' + id,data)
    }


 // category img_bank

 add_img_bank_category(data: any):Observable<any> {
  return this.http.post<any>(GlobalData.url_api + 'image_bank_category/', data)
}
img_bank_category_list():Observable<any> {
  return this.http.get<any>(GlobalData.url_api + 'image_bank_category/').pipe(shareReplay(1))
}
delete_img_bank_category(id: any):Observable<any> {
  return this.http.delete<any>(GlobalData.url_api + 'image_bank_category/?id=' + id)
}
update_img_bank_category(category_id:any,data: any):Observable<any> {
  return this.http.put<any>(GlobalData.url_api + 'image_bank_category/?id='+category_id, data)
}

// subcategory img_bank

add_img_bank_subcategory(data: any):Observable<any> {
  return this.http.post<any>(GlobalData.url_api + 'image_bank_sub_category/', data)
}
img_bank_subcategory_list():Observable<any> {
  return this.http.get<any>(GlobalData.url_api + 'image_bank_sub_category/').pipe(shareReplay(1))
}
delete_img_bank_subcategory(id: any):Observable<any> {
  return this.http.delete<any>(GlobalData.url_api + 'image_bank_sub_category/?id='+id)
}
update_img_bank_subcategory(id: any,data:any):Observable<any> {
  return this.http.put<any>(GlobalData.url_api + 'image_bank_sub_category/?id=' + id,data)
}

  // add imag bank

  add_img_banks(data: any):Observable<any> {
    return this.http.post<any>(GlobalData.url_api + 'image_bank/', data)
  }
  img_bank_list():Observable<any> {
    return this.http.get<any>(GlobalData.url_api + 'image_bank/').pipe(shareReplay(1))
  }
  delete_img_bank(id:any):Observable<any> {
    return this.http.delete<any>(GlobalData.url_api + 'image_bank/?id='+id)
  }
  update_img_bank(id:any,data:any):Observable<any> {
    return this.http.put<any>(GlobalData.url_api + 'image_bank/?id=' + id,data)
  }


  // category shots

  add_shots_category(data: any) {
    return this.http.post<any>(GlobalData.url_api + 'shots_category/', data)
  }
  shot_category_list() {
    return this.http.get<any>(GlobalData.url_api + 'shots_category/')
  }
  view_shot_category(categroy_id: any) {
    return this.http.get<any>(GlobalData.url_api + 'category/' + categroy_id)
  }
  delete_shot_category(categroy_id: any) {
    return this.http.delete<any>(GlobalData.url_api + 'shots_category/?id=' + categroy_id)
  }
  update_shot_category(categroy_id: any, data: any) {
    return this.http.put<any>(GlobalData.url_api + 'shots_category/?id=' + categroy_id, data)
  }

  // subcategory shots

  add_shots_subcategory(data: any) {
    return this.http.post<any>(GlobalData.url_api + 'shots_sub_category/', data)
  }
  shot_subcategory_list() {
    return this.http.get<any>(GlobalData.url_api + 'shots_sub_category/')
  }
  update_shot_subcategory(subcategory_id: any, data: any) {
    return this.http.put<any>(GlobalData.url_api + 'shots_sub_category/?id=' + subcategory_id, data)
  }
  delete_shot_subcategory(subcategory_id: any) {
    return this.http.get<any>(GlobalData.url_api + 'shots_sub_category/?id=' + subcategory_id)
  }

  // videos shots

  add_shots(data: any) {
    return this.http.post<any>(GlobalData.url_api + 'shots/', data)
  }
  shot_list() {
    return this.http.get<any>(GlobalData.url_api + 'shots/')
  }
  deleteshot(shot_id: any) {
    return this.http.get<any>(GlobalData.url_api + 'shots/?id=' + shot_id)
  }
  viewshot(shot_id: any) {
    return this.http.get<any>(GlobalData.url_api + 'view_shot/' + shot_id)
  }
  updateshot(shot_id: any, data: any) {
    return this.http.put<any>(GlobalData.url_api + 'shots/?id=' + shot_id, data)
  }
}
