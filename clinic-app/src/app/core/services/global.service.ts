import { Injectable } from '@angular/core';
import { HttpClient }from "@angular/common/http";
import { MatDialog } from "@angular/material/dialog";
//externals
import { environment } from "./../../../environments/environment";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  private loading = new Subject<boolean>();
	public loading$ = this.loading.asObservable();

  constructor(
    public dialog: MatDialog,
    private http: HttpClient,
  ) { }

  public post (url, data){
    return new Promise((resolve, reject)=>{
      this.setLoading(true);
      this.http.post(`${environment.url}/${url}`, data).subscribe(
        (res)=>{
          this.setLoading(false);
          if(res){
            resolve(res);
          }
        },
        (error)=>{
          this.setLoading(false);
          reject(error);
        },
      )
    })
  }

  setLoading(show): void {
		this.loading.next(show);
	}

}
