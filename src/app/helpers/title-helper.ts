import { Title } from '@angular/platform-browser'
import { Environment } from '../../../environment'
import { Injectable } from '@angular/core'

@Injectable()
export class TitleHelper {

    constructor(private titleService: Title) { }

    setTitle(page: any) {
        this.titleService.setTitle(page + Environment.APP_TITLE_FORMAT + Environment.APP_NAME)
    }

}