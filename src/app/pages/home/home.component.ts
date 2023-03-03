import { Component } from '@angular/core'
import { TitleHelper } from 'src/app/helpers/title-helper'

@Component({
  selector: 'kaama-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private title = 'Startseite'

  constructor(private titleHelper: TitleHelper) {
  }

  ngOnInit() {
    this.titleHelper.setTitle(this.title)
  }

}
