import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo-Palooza';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i5.walmartimages.com/asr/631e0802-8df3-4937-85c3-c5f63a048bfd_1.2e2ca322f5bb6cfe97f5e49f76e8a598.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff';
  image3 = 'https://prodimage.images-bn.com/pimages/0889560375304_p0_v1_s600x595.jpg';

  constructor() { }

  ngOnInit() {
  }

}