import { Component, OnInit } from '@angular/core';
import { ProductService, ProductScope } from '@spartacus/core';

@Component({
  selector: 'app-contact-exercise',
  templateUrl: './contact-exercise.component.html',
  styleUrls: ['./contact-exercise.component.scss']
})
export class ContactExerciseComponent implements OnInit {

  product$ = this.productService.get('1990255', ProductScope.DETAILS);

  constructor(protected productService: ProductService) { }

  ngOnInit(): void {
  }

}
