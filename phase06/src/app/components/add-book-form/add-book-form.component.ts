import { Component, inject } from '@angular/core';
import { CreateBookService } from '../../services/create-book.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'add-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-book-form.component.html',
  styleUrl: './add-book-form.component.scss',
})
export class AddBookFormComponent {
  createService = inject(CreateBookService);

  newBookForm = new FormGroup({
    name: new FormControl(''),
    image: new FormControl(''),
    price: new FormControl(''),
    publishData: new FormControl(''),
    genre: new FormControl(''),
    author: new FormControl(''),
  });

  handleSubmit() {
    this.createService.createBook(this.newBookForm);
  }
}