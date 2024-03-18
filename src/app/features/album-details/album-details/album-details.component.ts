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
  albumDetails!: Photo[];

  constructor(private route: ActivatedRoute, private landingService: LandingService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.albumId = params['id'];
    });

    this.albumDetails = this.landingService.getAlbumDetails();

    console.log(this.albumDetails);
  }

  openDialog(photo: any): void {
    this.dialog.open(PhotoDialogComponent, {
      width: '400px',
      data: { photo }
    });
  }
}
