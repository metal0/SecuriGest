import { Injectable } from '@angular/core';
import { Room } from './room.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RoomsServiceService {
 formData : Room;
 roomList = [];

 private roomsUrl = `${document.location.origin}/api/rooms`;
 private roomUrl = `${document.location.origin}/api/room`;
  
  constructor( private http: HttpClient) { }

  submitRoom(){
    return this.http.post<any>(this.roomUrl,this.formData);
  };
  refreshList(){
    return this.http.get<any>(this.roomsUrl);
  };
}
