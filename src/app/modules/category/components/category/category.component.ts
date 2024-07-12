import { Component, inject, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/modules/shared/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  constructor(
    private categoryservice: CategoryService = inject(CategoryService)
  ) {}

  ngOnInit(): void {
    this.getCategories()
  }

  displayedColumns: string[] = ['id', 'name', 'description', 'actions']
  dataSource = new MatTableDataSource<CategoryElement>()

  getCategories(): void {
    this.categoryservice.getCategories()
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.processCategoriesResponse(data)
        },
        error: (error: any) => {
          console.log(error);
        } 
      })
  }

  processCategoriesResponse(response: any) {
    let dataCategory: CategoryElement[] = []
    if (response.status.code === 200) {
      dataCategory = response.categories as CategoryElement[];      
      this.dataSource = new MatTableDataSource<CategoryElement>(dataCategory);
    }
  }
}

export interface CategoryElement {
  description: string
  id: number
  name: string
}