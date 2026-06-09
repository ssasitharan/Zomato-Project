import { Component } from '@angular/core';

@Component({
  selector: 'app-nonveg',
  standalone: false,
  templateUrl: './nonveg.html',
  styleUrls: ['./nonveg.css']
})
export class Nonveg {

  nonvegItems = [
    { name: 'Chicken Biryani', image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398', rating: 4.5, price: 600, offer: 20, type: 'Biryani' },
    { name: 'BBQ Nation', image: 'https://images.unsplash.com/photo-1555992336-03a23c7b20ee', rating: 4.3, price: 900, offer: 15, type: 'Grill' },
    { name: 'Fried Chicken', image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92', rating: 4.2, price: 500, offer: 25, type: 'Fast Food' },
    { name: 'Mutton Curry', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836', rating: 4.6, price: 800, offer: 18, type: 'North Indian' },
    { name: 'Fish Fry', image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2', rating: 4.4, price: 700, offer: 12, type: 'Seafood' },
    { name: 'Grill Chicken', image: 'https://images.unsplash.com/photo-1608039755401-742074f0548d', rating: 4.3, price: 650, offer: 10, type: 'Grill' },
    { name: 'Chicken Meals', image: 'https://images.unsplash.com/photo-1544025162-d76694265947', rating: 4.1, price: 400, offer: 20, type: 'Meals' },
    { name: 'Arabian Mandi', image: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a', rating: 4.5, price: 850, offer: 30, type: 'Arabian' },
    { name: 'Burger Hub', image: 'https://images.unsplash.com/photo-1550547660-d9450f859349', rating: 4.2, price: 350, offer: 15, type: 'Fast Food' },
    { name: 'Spicy Chicken',image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7', rating: 4.3, price: 450, offer: 18, type: 'Chinese' }
  ];

}
