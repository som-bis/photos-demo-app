import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Photo } from '../../../shared/models/photo.model';
import { LandingService } from '../../../shared/services/landing.service';
import { MatDialog } from '@angular/material/dialog';
import { PhotoDialogComponent } from '../../photo-dialog/photo-dialog/photo-dialog.component';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.scss'
})

export class AlbumDetailsComponent implements OnInit {
  albumId!: number;
  albumDetails: Photo[] = [];

  constructor(private route: ActivatedRoute, private landingService: LandingService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.albumId = params['id'];
    });

    const storedAlbumDetails = this.landingService.getAlbumDetails();
    if (storedAlbumDetails) {
      this.albumDetails = storedAlbumDetails;
      console.log(this.albumDetails);
    } else {
      console.log('Album details not found.');
    }
  }

  openDialog(photo: any): void {
    this.dialog.open(PhotoDialogComponent, {
      width: '400px',
      data: { photo }
    });
  }
}
