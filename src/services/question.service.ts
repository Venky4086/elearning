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
export class QuestionService {

  constructor(private http:HttpClient) { }


  // question of the day

  add_question(data:any):Observable<any>{
  return this.http.post<any>(GlobalData.url_api+'QuestionOfTheDay/',data)
  }
  single_question(id:any):Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'QuestionOfTheDay/?id=',id)
  }
  list_of_question():Observable<any>{
    return this.http.get(GlobalData.url_api+'QuestionOfTheDay/')
  }
  delete_question(id:any):Observable<any>{
    return this.http.delete(GlobalData.url_api+'QuestionOfTheDay/?id='+id)
  }
  update_question(id:any,data:any):Observable<any>{
    return this.http.put(GlobalData.url_api+'QuestionOfTheDay/?id='+id,data)
  }

// daily boost banner image

  add_dailyboostbanner(data:any):Observable<any>{
  return this.http.post<any>(GlobalData.url_api+'DailyBoostBanner/',data)
  }
  single_dailyboostbanner(id:any):Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'DailyBoostBanner/?id=',id)
  }
  list_of_dailyboostbanner():Observable<any>{
    return this.http.get(GlobalData.url_api+'DailyBoostBanner/')
  }
  delete_dailyboostbanner(id:any):Observable<any>{
    return this.http.delete(GlobalData.url_api+'DailyBoostBanner/?id='+id)
  }
  update_dailyboostbanner(id:any,data:any):Observable<any>{
    return this.http.put(GlobalData.url_api+'DailyBoostBanner/?id='+id,data)
  }

// daily main boots

  add_dailyboostmain(data:any):Observable<any>{
  return this.http.post<any>(GlobalData.url_api+'DailyBoostMain/',data)
  }
  list_of_dailyboostmain():Observable<any>{
    return this.http.get(GlobalData.url_api+'DailyBoostMain/')
  }

  // daily boost question

   add_daily_question(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'DailyBoosterQuiz/',data)
    }
    single__daily_question(id:any):Observable<any>{
      return this.http.get<any>(GlobalData.url_api+'DailyBoosterQuiz/?id=',id)
    }
    list_of_daily_question():Observable<any>{
      return this.http.get(GlobalData.url_api+'DailyBoosterQuiz/')
    }
    delete_daily_question(id:any):Observable<any>{
      return this.http.delete(GlobalData.url_api+'DailyBoosterQuiz/?id='+id)
    }
    update_daily_question(id:any,data:any):Observable<any>{
      return this.http.put(GlobalData.url_api+'DailyBoosterQuiz/?id='+id,data)
    }

// previous qpapers category

  add_previous_qpaper_category(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'QuestionBankPreviousQuestions_Category/',data)
  }
  list_previous_qpaper_category():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'QuestionBankPreviousQuestions_Category/')
  }
  delete_previous_qpaper_category(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'QuestionBankPreviousQuestions_Category/?id='+id)
  }
  update_previous_qpaper_category(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'QuestionBankPreviousQuestions_Category/?id='+id,data)
  }

  // previous qpapers subcategroy

  add_previous_qpaper_subcategory(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'QuestionBankPreviousQuestions_SubCategory/',data)
  }
  list_previous_qpaper_subcategory():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'QuestionBankPreviousQuestions_SubCategory/')
  }
  delete_previous_qpaper_subcategory(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'QuestionBankPreviousQuestions_SubCategory/?id='+id)
  }
  update_previous_qpaper_subcategory(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'QuestionBankPreviousQuestions_SubCategory/?id='+id,data)
  }

  // previous qpapers
  
  add_previous_qpaper(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'QuestionBankPreviousQuestions/',data)
  }
  list_previous_qpaper():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'QuestionBankPreviousQuestions/')
  }
  delete_previous_qpaper(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'QuestionBankPreviousQuestions/?id='+id)
  }
  update_previous_qpaper(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'QuestionBankPreviousQuestions/?id='+id,data)
  }

  // liveclass category

  add_liveclass_category(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'LiveClass_Category/',data)
  }
  list_liveclass_category():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'LiveClass_Category/')
  }
  delete_liveclass_category(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'LiveClass_Category/?id='+id)
  }
  update_liveclass_category(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'LiveClass_Category/?id='+id,data)
  }

  //live class subcategroy

  add_liveclass_subcategory(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'LiveClass_SubCategory/',data)
  }
  list_liveclass_subcategory():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'LiveClass_SubCategory/')
  }
  delete_liveclass_subcategory(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'LiveClass_SubCategory/?id='+id)
  }
  update_liveclass_subcategory(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'LiveClass_SubCategory/?id='+id,data)
  }

  // live class
  
  add_liveclass(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'LiveClass/',data)
  }
  list_liveclass():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'LiveClass/')
  }
  delete_liveclass(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'LiveClass/?id='+id)
  }
  update_liveclass(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'LiveClass/?id='+id,data)
  }

  // live class banner

  add_liveclass_banner(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'LiveClassBannerImage/',data)
  }
  list_liveclass_banner():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'LiveClassBannerImage/')
  }
  delete_liveclass_banner(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'LiveClassBannerImage/?id='+id)
  }
  update_liveclass_banner(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'LiveClassBannerImage/?id='+id,data)
  }

  // question discussion

  add_question_discussion(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'QuestionDiscussion/',data)
  }
  list_question_discussion():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'QuestionDiscussion/')
  }
  delete_question_discussion(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'QuestionDiscussion/?id='+id)
  }
  update_question_discussion(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'QuestionDiscussion/?id='+id,data)
  }

  // prime category

  add_prime_category(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'PrimeClassVideo_Category/',data)
  }
  list_prime_category():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'PrimeClassVideo_Category/')
  }
  delete_prime_category(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'PrimeClassVideo_Category/?id='+id)
  }
  update_prime_category(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'PrimeClassVideo_Category/?id='+id,data)
  }

  // prime subcatgory

  add_prime_subcategory(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'PrimeClassVideo_SubCategory/',data)
  }
  list_prime_subcategory():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'PrimeClassVideo_SubCategory/')
  }
  delete_prime_subcategory(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'PrimeClassVideo_SubCategory/?id='+id)
  }
  update_prime_subcategory(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'PrimeClassVideo_SubCategory/?id='+id,data)
  }

  // add prime 

  add_prime(data:any):Observable<any>{
    return this.http.post<any>(GlobalData.url_api+'PrimeClassVideo/',data)
  }
  list_prime():Observable<any>{
    return this.http.get<any>(GlobalData.url_api+'PrimeClassVideo/')
  }
  delete_prime(id:any):Observable<any>{
    return this.http.delete<any>(GlobalData.url_api+'PrimeClassVideo/?id='+id)
  }
  update_prime(id:any,data:any):Observable<any>{
    return this.http.put<any>(GlobalData.url_api+'PrimeClassVideo/?id='+id,data)
  }

}
