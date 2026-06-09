import { Component } from '@angular/core';

@Component({
  selector: 'app-drinks',
  standalone: false,
  templateUrl: './drinks.html',
  styleUrls: ['./drinks.css']
})
export class Drinks {

  drinkItems = [
    { name: 'Cold Coffee', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93', rating: 4.5, price: 120, offer: 10, type: 'Coffee' },
    { name: 'Fresh Juice', image: 'https://images.unsplash.com/photo-1577705998148-6da4f3963bc8', rating: 4.3, price: 100, offer: 15, type: 'Juice' },
    { name: 'Milkshake', image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767', rating: 4.4, price: 150, offer: 20, type: 'Shake' },
    { name: 'Mocktail', image: 'https://images.unsplash.com/photo-1582450871972-ab5ca641643d', rating: 4.2, price: 180, offer: 10, type: 'Mocktail' },
    { name: 'Tea', image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085', rating: 4.3, price: 50, offer: 5, type: 'Tea' },
    { name: 'Green Tea', image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348', rating: 4.4, price: 70, offer: 8, type: 'Healthy' },
    { name: 'Cappuccino', image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93', rating: 4.6, price: 140, offer: 15, type: 'Coffee' },
    { name: 'Smoothie', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888', rating: 4.5, price: 160, offer: 20, type: 'Healthy' },
    { name: 'Soft Drink', image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7', rating: 4.0, price: 60, offer: 10, type: 'Cold Drink' },
    { name: 'Lemon Soda', image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859', rating: 4.1, price: 80, offer: 12, type: 'Cool Drink' }
  ];

}
