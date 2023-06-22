const products = [
  {
    name: "ASUS ROG Falchion NX",
    image:
      "https://tanthanhdanh.vn/wp-content/uploads/2022/03/ROG-Falchion-NX.jpg",
    description:
      "COMPACT, WITHOUT COMPROMISE - ROG Falchion NX is a 65% form-factor wireless mechanical keyboard designed to change the way you play. Interactive touch panel and innovative two-way cover case, plus it’s the first ROG keyboard with wireless Aura Sync RGB lighting.",
    brand: "ASUS",
    category: "Electronics",
    price: 2000000,
    countInStock: 15,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Samsung Galaxy Watch Active2",
    image:
      "https://cdn2.cellphones.com.vn/x358,webp,q100/media/catalog/product/1/5/1565203894_1491579_4_1_2_3.jpg",
    description:
      "Stylish and functional smartwatch that tracks your fitness and health records. With GPS and LTE connectivity, you can take calls and messages on-the-go. AMOLED display provides vivid and clear viewing experience.",
    brand: "Samsung",
    category: "Electronics",
    price: 199.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Bose QuietComfort 35 II",
    image:
      "https://bizweb.dktcdn.net/100/387/641/products/tai-nghe-co-day-gaming-bose-quietcomfort-35-ii-2.jpg?v=1664263485850",
    description:
      "Noise-cancelling headphones that deliver balanced audio quality. With voice assistant integration, you can control your music and manage your tasks with ease. Bluetooth connectivity allows you to listen to your favorite tracks wirelessly.",
    brand: "Bose",
    category: "Electronics",
    price: 299.99,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Logitech G Pro Wireless",
    image:
      "https://us.maxgaming.com/bilder/artiklar/zoom/17200_1.jpg?m=1605689114s",
    description:
      "Wireless gaming mouse that provides reliable performance and accurate tracking. With a lightweight and ergonomic design, you can play your favorite games for hours without discomfort. RGB lighting adds a touch of personalization.",
    brand: "Logitech",
    category: "Electronics",
    price: 149.99,
    countInStock: 8,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Apple AirPods Pro",
    image: "https://cdn.mos.cms.futurecdn.net/UU3m8ivBmYfA4B5SQr3ekP.jpg",
    description:
      "True wireless earbuds that feature active noise cancellation and spatial audio technology. With the H1 chip, you can easily connect to your Apple devices and switch between them. The earbuds come with multiple tips for a comfortable and secure fit.",
    brand: "Apple",
    category: "Electronics",
    price: 249.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Sony WH-1000XM4",
    image:
      "https://www.sony.com.vn/image/5d02da5df552836db894cead8a68f5f3?fmt=pjpeg&wid=330&bgcolor=FFFFFF&bgc=FFFFFF",
    description:
      "Noise-cancelling headphones that deliver high-quality audio and voice control. With up to 30 hours of battery life, you can listen to your favorite tracks without interruption. The headphones come with a carrying case for easy storage and transportation.",
    brand: "Sony",
    category: "Electronics",
    price: 349.99,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Canon EOS R5",
    image:
      "https://www.mayanhjp.com/source/post/Canon%20EOS%20R5%20kit%2024-105.jpg",
    description:
      "Full-frame mirrorless camera that delivers high-quality images and videos. With a 45-megapixel sensor and 8K video capabilities, you can capture stunning visuals. The camera features a weather-sealed body for durability.",
    brand: "Canon",
    category: "Electronics",
    price: 3799.99,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "iPhone 13 Pro",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRTeewNe-AL_ZcK2gcXivgxKMiE9W9zSkHsqs8Lw2qDt-CyHtTz-vCk04KKskBiKT_zhUcQJ00M2p0KtH1nsIACyY0mjjlwHFHIBm4A_ZGHfFprHoV_9SCg08-4lQA57Ds-yA&usqp=CAc",
    description:
      "The latest iPhone with a powerful A15 Bionic chip, Super Retina XDR display, and advanced camera system.",
    brand: "Apple",
    category: "Electronics",
    price: 1099.99,
    countInStock: 5,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Sony WH-1000XM4",
    image:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSPTlMygY7KLlV2ZQYHWgESM193JIfDknLrNSWi_mVH474gSzdy4YOWyeDubAR12irzZXXXajHjNyzaamOlWOWq-72kUJY2OiXZkb5stXZmg3xe0DXN2kfxcCBKaGLkx5cFOQQ&usqp=CAc",
    description:
      "Premium wireless headphones with industry-leading noise cancellation and exceptional sound quality.",
    brand: "Sony",
    category: "Electronics",
    price: 349.99,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "iPad Pro (2021)",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQliKOkhLAvtIr_xW9vdV91QMTJbWcmj6y_IS2KPD4O2IzbG342aOwAXvDbqR_GDkDTICDcbkSW9ManTsOgHquYFUVYHK4f2ewqg9aCPOr841c2nLR_jWxQo-96cIreT6SlVvk&usqp=CAc",
    description:
      "The most advanced iPad with the powerful M1 chip, stunning Liquid Retina XDR display, and Apple Pencil support.",
    brand: "Apple",
    category: "Electronics",
    price: 999.99,
    countInStock: 3,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "Samsung Galaxy S21 Ultra",
    image:
      "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRZXdTQG9OHGTSSOFMNnMrTlIKER5az_3iukUBn7rdVtWfo06h046xzaHhU2hWbsjTJkG9npFbmjo-vnFrXEsNgyIjoRVMf0oapnTb0q9bdUOLhMwjlJKK9jAl1NiHrZ3YBnJw&usqp=CAc",
    description:
      "Feature-packed Android smartphone with a large dynamic AMOLED display, versatile camera setup, and S Pen compatibility.",
    brand: "Samsung",
    category: "Electronics",
    price: 1199.99,
    countInStock: 8,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "iPad Air (2020)",
    image:
      "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1LYPjJfKvnFdhq-DIp1dovxFp3IqaLRa3efsvPvb3rb0Ln3YeDOppOrbO8aK6GQ-3vnD-C6ZeGQ5yho0yXWowvvEEIasjNxQrXjG7YZ2uJekEEDMVpH5kjW9McjQ3K4cGcLQ&usqp=CAc",
    description:
      "Powerful and versatile iPad with an edge-to-edge Liquid Retina display, A14 Bionic chip, and Apple Pencil support.",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 4,
    rating: 0,
    numReviews: 0,
  },
  {
    name: "LG OLED CX Series",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdsk19H1qboVxbWD2yrrneJahCVDijt6WN0Iijs5bNPC0KE6ANIXwKAcC1UPGKDjVCFo&usqp=CAU",
    description:
      "Stunning 4K OLED TV with perfect black, infinite contrast, and AI-powered smart features for an immersive viewing experience.",
    brand: "LG",
    category: "Electronics",
    price: 2499.99,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
];
export default products;
