import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from'../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input()
  photoCover: string= "https://i0.wp.com/portalaurorabrasil.com/wp-content/uploads/2019/05/aurora.jpg?fit=1200%2C800&ssl=1"
  @Input()
  contentTitle: string= "Noiticias sobre a Aurora"
  @Input()
  contentDescription: string= "Aurora fez isso e aquilo no show do Brasil gerou mo rebolico"
  private id:string | null = "0"
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null){
    const result = dataFake.filter(article => article.id === id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
  }

}
