import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  public equation = '\\sum_{i=1}^nx_i';
  public news: string[];
  constructor() {
    this.news = ['勞動部紓困身心障礙者勞工',
      '高市展延身心障礙者使用車輛免稅期間至10月底',
      '身心障礙者權利公約（CRPD）第二次國家報告第二輪審查會議'];
  }

  ngOnInit() {
  }

}
