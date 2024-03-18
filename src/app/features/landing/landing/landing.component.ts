import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LandingService } from '../../../shared/services/landing.service';
import { Photo } from '../../../shared/models/photo.model';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  email!: string;
  uniqueAlbumIds!: any;
  allPhotoDetails!: Photo[];

  constructor(private route: ActivatedRoute, private landingService: LandingService,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
    });

    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.landingService.getPhotos().subscribe(
      (photos: Photo[]) => {
        this.allPhotoDetails = photos;
        this.uniqueAlbumIds = this.getUniqueAlbumIds(photos);
      },
      (error) => {
        console.error('Error fetching photos:', error);
      }
    );
  }

  viewAlbumDetails(id: number) {
    let albumdetails = this.allPhotoDetails.filter(photo => photo.albumId === id);
    this.landingService.setAlbumDetails(albumdetails);
    this.router.navigate(['/albumDetails'], { queryParams: { id } });
  }

  getUniqueAlbumIds(photos: Photo[]) {
    const albumIdsSet = new Set();

    photos.forEach(photo => {
      albumIdsSet.add(photo.albumId);
    });

    return Array.from(albumIdsSet);
  }
}
