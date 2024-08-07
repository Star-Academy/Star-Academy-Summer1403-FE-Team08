import { Component, Input } from '@angular/core';
import { BookDetailsComponent } from '../book-details/book-details.component';
import { FetchService } from '../../services/fetch.service';
import { Book } from '../../interfaces/book.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vertical-book',
  standalone: true,
  providers: [FetchService],
  imports: [BookDetailsComponent, MatCardModule, MatButtonModule, RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class VerticalBookComponent {
  @Input() bookSpec!: Book;
}