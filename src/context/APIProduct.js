const express = require('express');
const bodyParser = require('body-parser');

const app = express();


const products = [
    {
        "id": "AceItnoa",
        "name": "Áo Tank Lulu All Tied Up",
        "company": "Aria",
        "price": 600000,
        "colors": ["#ff0000", "#000000", "#CDD0D0"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://thamyoganamaste.com/wp-content/uploads/2023/04/z4270886428451_b2bca264ac7f85394c161b05d0bec03c-300x300.jpg",
        "description": "Mỏng nhẹ, đem lại sự thoải mái nhất cho bạn.",
        "category": "QUẦN ÁO TẬP",
        "featured": true
    }, {
        "id": "AceItnob",
        "name": "Áo phông DT khoét ngực Aria",
        "company": "Beinks",
        "price": 500000,
        "colors": ["#000", "#22D3EF"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://thamyoganamaste.com/wp-content/uploads/2022/12/z3979614011148_720fc13f72f8c0ce34a2193f5aff10a4.jpg",
        "description": "Trẻ trung, thoải mái, hấp dẫn.",
        "category": "QUẦN ÁO TẬP",
        "shipping": true
    }, {
        "id": "AceItnoc",
        "name": "Thảm Yoga PU hình in Hiyoga",
        "company": "Beinks",
        "price": 600000,
        "colors": ["#22D3EF", "#CDD0D0"],
        "size": ["S", "M", "L", "XL"],
        "image": "https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709375007_ec581d41f9819f384c85a18dfb738d49-300x300.jpg",
        "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "THẢM YOGA"
    }, {
       "id": "AceItnoc",
        "name": "Thảm Yoga PU hình in Hiyoga",
        "company": "Beinks",
        "price": 600000,
        "colors": ["#22D3EF", "#CDD0D0"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://thamyoganamaste.com/wp-content/uploads/2023/02/z4108709375007_ec581d41f9819f384c85a18dfb738d49-300x300.jpg",
        "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "THẢM YOGA"
    }, {
        "id": "AceItnoe",
        "name": "Mac Pc",
        "company": "apple",
        "price": 4000099,
        "colors": ["#000", "#CDD0D0"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The Computer is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "computer",
        "shipping": true
    }, {
        "id": "AceItnof",
        "name": "Macbook Pro",
        "company": "apple",
        "price": 42999,
        "colors": ["#000000", "#CDD0D0"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The Laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "laptop",
        "shipping": true
    }, {
        "id": "AceItnog",
        "name": "Asus gseries",
        "company": "asus",
        "price": 23999,
        "colors": ["#CDD0D0", "#000"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The laptop is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "laptop",
        "shipping": true
    }, {
        "id": "AceItnoh",
        "name": "Accessories",
        "price": 1099999,
        "company": "lenova",
        "colors": ["#000", "#CDD0D0"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://images.pexels.com/photos/3178938/pexels-photo-3178938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The accessories is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "accessories",
        "featured": true,
        "shipping": true
    }, {
        "id": "AceItnoi",
        "name": "Iwatch",
        "price": 39999,
        "company": "apple",
        "colors": ["#000000"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "watch",
        "shipping": true
    }, {
        "id": "AceItnoj",
        "name": "user need",
        "company": "apple",
        "price": 300099,
        "colors": ["#ff0000", "#22D3EF", "#000000"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "The mobile is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "accessories"
    }, {
        "id": "AceItnok",
        "name": "rolex premium",
        "company": "rolex",
        "price": 999999,
        "colors": ["#000000", "#CDD0D0"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://images.pexels.com/photos/1697214/pexels-photo-1697214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "watch"
    }, {
        "id": "AceItnol",
        "name": "galaxy w20",
        "price": 311999,
        "company": "samsung",
        "colors": ["#22D3EF", "#ff0000", "#000000"],
        "size": ["S", "M", "L", "XL", "XXL", "XXXL"],
        "image": "https://images.pexels.com/photos/51011/pexels-photo-51011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "description": "This watch is compact with its 6.2-inch OLED screen and far lighter at 168g. It perfectly captures the design, looks, and feel of the expensive one. It comes with a snapdragon processor with a 5n chip in it. It has a 200mp camera in the rear 100mp in front perfect for selfie lovers. It also support HDR content means you can watch 4K content on it.",
        "category": "watch",
        "featured": true
    }
    
];

app.use(bodyParser.json());

app.get('/api/products', (req, res) => {
  res.send(products);
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server started');
});