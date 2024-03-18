import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Photo } from '../models/photo.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class LandingService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  private albumDetailsKey = 'albumDetails';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

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

  showError(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }

  showSuccess(message: string): void {
    this.snackBar.open(message, 'Dismiss', {
      duration: 3000,
    });
  }
}