import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  private albumDetailsKey = 'albumDetails';

  constructor(private http: HttpClient) { }

  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>(this.apiUrl);
  }

  setAlbumDetails(albumDetails: Photo[]): void {
    localStorage.setItem(this.albumDetailsKey, JSON.stringify(albumDetails));
  }

  getAlbumDetails(): Photo[] | null {
    const albumDetailsString = localStorage.getItem(this.albumDetailsKey);
    return albumDetailsString ? JSON.parse(albumDetailsString) : null;
  }
}