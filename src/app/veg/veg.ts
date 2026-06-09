import { Component } from '@angular/core';

@Component({
  selector: 'app-veg',
  standalone: false,
  templateUrl: './veg.html',
  styleUrls: ['./veg.css']
})
export class Veg {

  vegItems = [
    { name: 'Paneer Hub', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', rating: 4.3, price: 500, offer: 20, type: 'North Indian' },
    { name: 'Veg Delight', image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f', rating: 4.2, price: 400, offer: 15, type: 'Chinese' },
    { name: 'Green Bowl', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd', rating: 4.5, price: 350, offer: 10, type: 'Healthy' },
    { name: 'Veg Biryani', image: 'https://images.unsplash.com/photo-1642821373181-696a54913e93', rating: 4.1, price: 450, offer: 25, type: 'Biryani' },
    { name: 'South Veg', image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0', rating: 4.4, price: 300, offer: 18, type: 'South Indian' },
    { name: 'Veg Cafe', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', rating: 4.0, price: 350, offer: 12, type: 'Snacks' },
    { name: 'Wrap House', image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d', rating: 4.6, price: 250, offer: 20, type: 'Fast Food' },
    { name: 'Veg Meals', image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d', rating: 4.3, price: 300, offer: 15, type: 'Meals' },
    { name: 'Farm Fresh', image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625', rating: 4.2, price: 280, offer: 10, type: 'Organic' },
    { name: 'Veg Feast', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', rating: 4.4, price: 450, offer: 22, type: 'Restaurant' }
  ];

}