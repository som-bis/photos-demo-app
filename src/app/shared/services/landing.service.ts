import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  albumDetails!: Photo[];

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl);
  }

  setAlbumDetails(albumDetails: Photo[]): void {
    this.albumDetails = albumDetails;
  }

  getAlbumDetails(): any[] {
    return this.albumDetails;
  }
}