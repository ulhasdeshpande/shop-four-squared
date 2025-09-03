import { Product } from "@/components/ProductCard";
import electronicsImg from "@/assets/electronics-1.jpg";
import cameraImg from "@/assets/camera-1.jpg";
import laptopImg from "@/assets/laptop-1.jpg";
import sportsImg from "@/assets/sports-1.jpg";

export const products: Product[] = [
  // Electronics
  {
    id: "1",
    name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
    price: 349.99,
    originalPrice: 399.99,
    image: electronicsImg,
    rating: 4.8,
    reviewCount: 2847,
    category: "electronics",
    description: "Industry-leading noise canceling technology with premium sound quality and 30-hour battery life.",
    inStock: true,
  },
  {
    id: "2",
    name: "Apple AirPods Pro (2nd Generation)",
    price: 229.99,
    originalPrice: 249.99,
    image: electronicsImg,
    rating: 4.7,
    reviewCount: 5632,
    category: "electronics",
    description: "Active Noise Cancellation, Adaptive Transparency, and personalized Spatial Audio.",
    inStock: true,
  },
  {
    id: "3",
    name: "Samsung Galaxy Buds2 Pro",
    price: 179.99,
    originalPrice: 229.99,
    image: electronicsImg,
    rating: 4.5,
    reviewCount: 1924,
    category: "electronics",
    description: "Intelligent Active Noise Cancellation and 360 Audio for an immersive listening experience.",
    inStock: false,
  },

  // Cameras
  {
    id: "4",
    name: "Canon EOS R6 Mark II Mirrorless Camera",
    price: 2499.99,
    image: cameraImg,
    rating: 4.9,
    reviewCount: 342,
    category: "cameras",
    description: "Professional mirrorless camera with 24.2MP full-frame sensor and 4K video recording.",
    inStock: true,
  },
  {
    id: "5",
    name: "Sony Alpha a7 IV Mirrorless Camera",
    price: 2298.99,
    originalPrice: 2498.99,
    image: cameraImg,
    rating: 4.8,
    reviewCount: 567,
    category: "cameras",
    description: "33MP full-frame sensor with advanced autofocus and 4K 60p video recording.",
    inStock: true,
  },
  {
    id: "6",
    name: "Nikon Z9 Mirrorless Camera",
    price: 5496.99,
    image: cameraImg,
    rating: 4.9,
    reviewCount: 189,
    category: "cameras",
    description: "Professional 45.7MP full-frame mirrorless camera with 8K video capabilities.",
    inStock: true,
  },

  // Computers & Laptops
  {
    id: "7",
    name: "MacBook Pro 14-inch M3 Pro",
    price: 2399.99,
    originalPrice: 2599.99,
    image: laptopImg,
    rating: 4.8,
    reviewCount: 1234,
    category: "computers",
    description: "Professional laptop with M3 Pro chip, 18GB unified memory, and Liquid Retina XDR display.",
    inStock: true,
  },
  {
    id: "8",
    name: "Dell XPS 13 Plus Laptop",
    price: 1699.99,
    originalPrice: 1899.99,
    image: laptopImg,
    rating: 4.6,
    reviewCount: 892,
    category: "computers",
    description: "Premium ultrabook with 12th Gen Intel Core i7, 16GB RAM, and stunning InfinityEdge display.",
    inStock: true,
  },
  {
    id: "9",
    name: "ASUS ROG Zephyrus G14 Gaming Laptop",
    price: 1899.99,
    image: laptopImg,
    rating: 4.7,
    reviewCount: 654,
    category: "computers",
    description: "Powerful gaming laptop with AMD Ryzen 9, RTX 4070, and 14-inch QHD display.",
    inStock: false,
  },

  // Sports Goods
  {
    id: "10",
    name: "Wilson Pro Staff 97 Tennis Racket",
    price: 199.99,
    originalPrice: 229.99,
    image: sportsImg,
    rating: 4.6,
    reviewCount: 432,
    category: "sports",
    description: "Professional tennis racket used by top players, offering precision and control.",
    inStock: true,
  },
  {
    id: "11",
    name: "Nike Air Zoom Pegasus 40 Running Shoes",
    price: 129.99,
    image: sportsImg,
    rating: 4.5,
    reviewCount: 2341,
    category: "sports",
    description: "Responsive cushioning and breathable design for comfortable daily runs.",
    inStock: true,
  },
  {
    id: "12",
    name: "Spalding NBA Official Basketball",
    price: 49.99,
    originalPrice: 59.99,
    image: sportsImg,
    rating: 4.7,
    reviewCount: 1876,
    category: "sports",
    description: "Official NBA game basketball with premium leather construction.",
    inStock: true,
  },
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};