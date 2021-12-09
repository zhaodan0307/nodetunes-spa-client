import { Component, OnInit } from '@angular/core';
import { ArtistService } from "../artist.service";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artists: any
  name: string | undefined
  _id: string | undefined
  title: string | undefined
  year: number | undefined
  rating: number | undefined


  constructor(private service: ArtistService) { }

  ngOnInit(): void {
    //需要call这个method
    this.getArtists()
  }

  //这个getArtists名字必须与 artist.service.ts里面的 getArtists一致
  getArtists(): void {
    // call service which in turn calls server api to fetch artist data
    this.service.getArtists().subscribe(artists => {
      //this.artists被传到了前面
      this.artists = artists
    })
  }

}
