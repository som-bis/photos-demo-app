import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumDetailsRoutingModule } from './album-details-routing.module';
import { AlbumDetailsComponent } from './album-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PhotoDialogComponent } from '../../photo-dialog/photo-dialog/photo-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AlbumDetailsComponent,
    PhotoDialogComponent
  ],
  imports: [
    CommonModule,
    AlbumDetailsRoutingModule,
    MatCardModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class AlbumDetailsModule { }
