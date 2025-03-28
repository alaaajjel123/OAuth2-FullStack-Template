import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  userName: string | null = null;

  constructor(
    public authService: AuthService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });

    if (this.authService.isLoggedIn()) {
      const token = this.authService.getToken();
      if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.userName = payload.email;
      }
    }
  }
}
