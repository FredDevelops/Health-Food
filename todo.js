//items
 const menu = [
     {
         id: 1,
         title: "Mango Turmeric Smoothie",
         category: "smoothies",
         price: 8.99,
         img: "https://andianne.com/wp-content/uploads/2021/04/smoothies-44.jpg",
         decs: 'Mango turmeric ginger smoothie is made with frozen mango, banana, fresh ginger and turmeric powder. You’ll love how refreshing this delicious smoothie is. It’s perfect for kids and adults. I love to use it as a mid-afternoon snack in our house.'
     },
     {
         id: 2,
         title: "Green Avocade Smoothie",
         category: "smoothies",
         price: 8.99,
         img: "https://andianne.com/wp-content/uploads/2021/04/smoothies-38.jpg",
         decs: 'Green smoothies are always my go-to first thing in the morning. If you’re new to green smoothies, then this is a great one to start with. It’s made with frozen banana, spinach, avocado and chia seeds.'
     },
     {
         id: 3,
         title: "Chocolate Banana Smoothie",
         category: "smoothies",
         price: 8.99,
         img: "https://andianne.com/wp-content/uploads/2021/04/smoothies-28.jpg",
         decs: 'Whenever I am craving chocolate, this chocolate banana smoothie is my go-to recipe! It’s simple and REALLY delicious. I love to use clean protein powder in smoothies because it’s a great energy source, even if I’m not working out.'
     },
     {
         id: 4,
         title: "Blueberry Antioxidant Smoothie",
         category: "smoothies",
         price: 8.99,
         img: "https://andianne.com/wp-content/uploads/2021/04/smoothies-20.jpg",
         decs: 'Blueberry smoothies are a classic and great for anyone that is new to drinking smoothies. Not only do they taste great, but blueberries are high in antioxidants, fiber, vitamin C and vitamin K.'
     },{
         id: 5,
         title: "Carrot Cake Smoothie",
         category: "smoothies",
         price: 8.99,
         img: "https://andianne.com/wp-content/uploads/2021/04/smoothies-31.jpg",
         decs: 'This smoothie reminds me of carrot cake, all thanks to the added cinnamon. Carrots are a great source of beta carotene, vitamin K1, potassium, antioxidants and fiber.'
     },
     {
         id: 6,
         title: "Raspberry Yogurt Smoothie",
         category: "smoothies",
         price: 8.99,
         img: "https://andianne.com/wp-content/uploads/2021/04/smoothies-16.jpg",
         decs: 'Raspberry yogurt smoothie is a delicious healthy treat that is also a good source of protein. This smoothie is great for kids as an afternoon snack, or for us parents when we need an energy boost.'
     }
 ];

 const sectionCenter = document.querySelector('section-center');

 window.addEventListener('DOMcontentLoaded', function () {
     let displayMenu = menu.map(function(item) {
         console.log(item);
         return item;
     })
     console.log(displayMenu);
 });

function fm() {
     alert("our full menu");
 };
