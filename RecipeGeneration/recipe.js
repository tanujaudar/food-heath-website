const recipeDatabase = [
    
  {
    name: "Banana Smoothie",
    ingredients: ['Banana', 'milk', 'yogurt'],
    description: "A healthy banana smoothie made with leftover bananas, milk, and yogurt."
  },
  {
    name: "Tomato Cheese Toast",
    ingredients: ['tomato', 'cheese', 'bread'],
    description: "Toast with tomato slices and melted cheese."
  },
  {
    name: "Masoor Dal Khichdi",
    ingredients: ['rice', 'Masoor dal', 'turmeric', 'cumin', 'Spices'],
    description: "A comforting one-pot dish with rice, masoor dal, turmeric, and cumin."
  },
  {
    name: "Spiced Oats Porridge",
    ingredients: ['Oats', 'milk', 'cardamom', 'Spices'],
    description: "Cook oats in milk with a pinch of cardamom for a fragrant breakfast."
  },
  {
    name: "Masala Oats with Curd",
    ingredients: ['Oats', 'curd', 'mustard seeds', 'green chili', 'Spices'],
    description: "Cook oats with tempered spices and serve with chilled curd."
  },
  {
    name: "Rajma Paneer Curry",
    ingredients: ['Rajma', 'paneer', 'garam masala', 'tomato', 'Spices'],
    description: "A rich curry with kidney beans and paneer in a spiced tomato base."
  },
  {
    name: "Moong Dal Khichdi with Ghee",
    ingredients: ['Moong dal', 'rice', 'turmeric', 'ghee', 'Spices'],
    description: "Comforting khichdi made with moong dal and rice, finished with ghee."
  },
  {
    name: "Bajra Roti with Spiced Buttermilk",
    ingredients: ['Bajra', 'buttermilk', 'cumin', 'salt', 'Spices'],
    description: "Rustic bajra roti paired with chilled cumin-spiced buttermilk."
  },
  {
    name: "Wheat & Moong Dal Cheela",
    ingredients: ['wheat flour', 'Moong dal', 'cumin', 'curd', 'Spices'],
    description: "Savory pancakes made with wheat and moong dal batter, served with curd."
  },
  {
    name: "Wheat & Chana Dal Pancakes",
    ingredients: ['wheat flour', 'Chana dal', 'cumin', 'curd', 'Spices'],
    description: "Savory pancakes made with blended chana dal and wheat flour, served with curd."
  },
  {
    name: "Corn & Yogurt Chaat",
    ingredients: ['Corn', 'yogurt', 'black salt', 'mint', 'Spices'],
    description: "Boiled corn tossed with chilled yogurt and spices for a refreshing chaat."
  },
  {
    name: "Barley & Moong Dal Soup",
    ingredients: ['barley', 'Moong dal', 'garlic', 'pepper'],
    description: "A hearty soup with barley and moong dal, seasoned with garlic and black pepper."
  },
  {
    name: "Bajra & Paneer Paratha",
    ingredients: ['Bajra flour', 'paneer', 'green chili', 'coriander', 'Spices'],
    description: "Stuffed paratha made with bajra flour and spiced paneer filling."
  },
  {
    name: "Masoor Dal & Cheese Sandwich",
    ingredients: ['Masoor dal', 'cheese', 'oregano', 'bread', 'Spices'],
    description: "Mashed masoor dal and cheese grilled between slices of bread."
  },
  {
    name: "Rice & Cowpea Tikki",
    ingredients: ['rice', 'cowpea', 'ginger', 'chili powder'],
    description: "Crispy tikkis made with mashed rice and cowpeas, spiced with chili."
  },
  {
    name: "Oats & Rajma Cutlets",
    ingredients: ['Oats', 'Rajma', 'garam masala', 'onion', 'Spices'],
    description: "Protein-rich cutlets made with oats and mashed rajma."
  },
  {
    name: "Wheat & Tur Dal Dosa",
    ingredients: ['wheat flour', 'Tur dal', 'fenugreek', 'salt', 'Spices'],
    description: "Fermented dosa batter made with wheat and tur dal for a crispy breakfast."
  },
  {
    name: "Corn & Paneer Stir Fry",
    ingredients: ['Corn', 'paneer', 'cumin', 'green chili', 'Spices'],
    description: "Quick stir fry with sweet corn and paneer cubes, spiced with cumin."
  },
  {
    name: "Barley & Yogurt Salad",
    ingredients: ['barley', 'yogurt', 'mint', 'black salt', 'Spices'],
    description: "A cooling salad with cooked barley and seasoned yogurt."
  },
  {
    name: "Rajma & Cheese Wrap",
    ingredients: ['Rajma', 'cheese', 'wheat roti', 'paprika', 'Spices'],
    description: "Spiced rajma and melted cheese wrapped in a soft wheat roti."
  },
  {
    name: "Moong Dal & Curd Dip",
    ingredients: ['Moong dal', 'curd', 'coriander', 'black salt', 'Spices'],
    description: "A creamy dip made with mashed moong dal and chilled curd."
  },
  {
    name: "Sorghum & Chana Dal Pulao",
    ingredients: ['sorghum', 'Chana dal', 'clove', 'bay leaf', 'Spices'],
    description: "A rustic pulao with sorghum grains and chana dal, spiced with whole masala."
  },
  {
    name: "Masoor Dal & Yogurt Curry",
    ingredients: ['Masoor dal', 'yogurt', 'mustard seeds', 'curry leaves', 'Spices'],
    description: "Tangy curry made with yogurt and cooked masoor dal, tempered with spices."
  },
  {
    name: "Bajra & Cheese Crackers",
    ingredients: ['Bajra flour', 'cheese', 'black pepper', 'salt', 'Spices'],
    description: "Savory crackers made with bajra flour and grated cheese."
  },
  {
    name: "Wheat & Cowpea Uttapam",
    ingredients: ['wheat flour', 'cowpea', 'onion', 'green chili'],
    description: "Thick savory pancakes topped with onion and chili, made with wheat and cowpea."
  },
  {
    name: "Corn & Tur Dal Soup",
    ingredients: ['Corn', 'Tur dal', 'garlic', 'black pepper', 'Spices'],
    description: "A creamy soup with sweet corn and tur dal, seasoned with garlic."
  },
  {
    name: "Barley & Cheese Porridge",
    ingredients: ['barley', 'milk', 'cheese', 'nutmeg', 'Spices'],
    description: "A rich porridge with barley and melted cheese, flavored with nutmeg."
  },
  {
    name: "Rajma & Paneer Curry",
    ingredients: ['Rajma', 'paneer', 'tomato', 'coriander powder'],
    description: "A rich curry with rajma and paneer in a spiced tomato base."
  },
  {
    name: "Moong Dal & Yogurt Tikkis",
    ingredients: ['Moong dal', 'yogurt', 'ginger', 'cumin', 'Spices'],
    description: "Pan-fried tikkis made with moong dal and yogurt, spiced with ginger and cumin."
  },
  {
    name: "Chana Dal & Cheese Balls",
    ingredients: ['Chana dal', 'cheese', 'bread crumbs', 'oregano', 'Spices'],
    description: "Crispy cheese balls made with mashed chana dal and herbs."
  },
  {
    name: "Bajra & Yogurt Flatbread",
    ingredients: ['Bajra flour', 'yogurt', 'carom seeds', 'salt', 'Spices'],
    description: "Soft flatbreads made with bajra flour and yogurt."
  },
  {
    name: "Oats Vegetable Upma",
    ingredients: ['Oats', 'carrot', 'peas', 'mustard seeds', 'curd', 'Spices'],
    description: "A savory upma made with oats and mixed vegetables, served with curd."
  },
  {
    name: "Corn & Spinach Paneer Stir Fry",
    ingredients: ['Corn', 'spinach', 'paneer', 'cumin', 'green chili', 'Spices'],
    description: "Quick stir fry with sweet corn, spinach, and paneer cubes."
  },
  {
    name: "Rajma Mango Salad",
    ingredients: ['Rajma', 'mango', 'onion', 'lime juice', 'black salt'],
    description: "A tangy salad with boiled rajma and ripe mango chunks."
  },
  {
    name: "Barley & Beetroot Soup",
    ingredients: ['barley', 'beetroot', 'garlic', 'black pepper', 'curd', 'Spices'],
    description: "A vibrant soup with barley and beetroot, served with a spoon of curd."
  },
  {
    name: "Bajra & Banana Pancakes",
    ingredients: ['Bajra flour', 'banana', 'milk', 'cardamom', 'Spices'],
    description: "Sweet pancakes made with bajra flour and mashed banana."
  },
  {
    name: "Masoor Dal & Carrot Curry",
    ingredients: ['Masoor dal', 'carrot', 'tomato', 'coriander powder'],
    description: "A light curry with masoor dal and diced carrots."
  },
  {
    name: "Wheat & Apple Paratha",
    ingredients: ['wheat flour', 'apple', 'cinnamon', 'ghee', 'Spices'],
    description: "Stuffed paratha with grated apple and cinnamon, cooked in ghee."
  },
  {
    name: "Moong Dal & Cabbage Stir Fry",
    ingredients: ['Moong dal', 'cabbage', 'mustard seeds', 'turmeric', 'Spices'],
    description: "A dry stir fry with moong dal and shredded cabbage."
  },
  {
    name: "Rice & Pineapple Pulao",
    ingredients: ['rice', 'pineapple', 'clove', 'bay leaf', 'Spices'],
    description: "A sweet-savory pulao with pineapple chunks and aromatic spices."
  },
  {
    name: "Chana Dal & Bottle Gourd Curry",
    ingredients: ['Chana dal', 'bottle gourd', 'cumin', 'ginger', 'Spices'],
    description: "A comforting curry with chana dal and lauki."
  },
  {
    name: "Oats & Papaya Smoothie Bowl",
    ingredients: ['Oats', 'papaya', 'milk', 'honey'],
    description: "A chilled smoothie bowl with blended papaya and oats."
  },
  {
    name: "Sorghum & Tomato Khichdi",
    ingredients: ['sorghum', 'tomato', 'Tur dal', 'asafoetida', 'Spices'],
    description: "A rustic khichdi with sorghum grains and tangy tomato."
  },
  {
    name: "Cowpea & Pumpkin Curry",
    ingredients: ['cowpea', 'pumpkin', 'curry leaves', 'mustard seeds', 'Spices'],
    description: "A South Indian-style curry with cowpeas and pumpkin."
  },
  {
    name: "Rye & Spinach Crackers",
    ingredients: ['rye flour', 'spinach', 'black pepper', 'salt', 'Spices'],
    description: "Savory crackers made with rye flour and pureed spinach."
  },
  {
    name: "Urad Dal & Banana Fritters",
    ingredients: ['Urad dal', 'banana', 'cardamom', 'jaggery', 'Spices'],
    description: "Sweet fritters made with urad dal batter and mashed banana."
  },
  {
    name: "Tur Dal & Zucchini Soup",
    ingredients: ['Tur dal', 'zucchini', 'garlic', 'black pepper', 'Spices'],
    description: "A light soup with tur dal and zucchini, flavored with garlic."
  },
  {
    name: "Barley & Guava Salad",
    ingredients: ['barley', 'guava', 'lime juice', 'mint', 'Spices'],
    description: "A refreshing salad with barley and chopped guava."
  },
  {
    name: "Rajma & Cucumber Wrap",
    ingredients: ['Rajma', 'cucumber', 'wheat roti', 'yogurt'],
    description: "A cool wrap with rajma, cucumber slices, and yogurt dressing."
  },
  {
    name: "Moong Dal & Spinach Curry",
    ingredients: ['Moong dal', 'spinach', 'ginger', 'cumin', 'Spices'],
    description: "A nutritious curry with moong dal and fresh spinach."
  },
  {
    name: "Wheat & Pear Pancakes",
    ingredients: ['wheat flour', 'pear', 'milk', 'nutmeg', 'Spices'],
    description: "Soft pancakes made with grated pear and wheat flour."
  },
  {
    name: "Corn & Tomato Cheese Toast",
    ingredients: ['Corn', 'tomato', 'cheese', 'bread'],
    description: "Open toast topped with corn, tomato slices, and melted cheese."
  },
  {
    name: "Masoor Dal & Cabbage Stir Fry",
    ingredients: ['Masoor dal', 'cabbage', 'mustard seeds', 'green chili', 'Spices'],
    description: "Quick stir fry with cooked masoor dal and shredded cabbage."
  },
  {
    name: "Bajra & Apple Porridge",
    ingredients: ['Bajra flour', 'apple', 'milk', 'cinnamon', 'Spices'],
    description: "A warm porridge with bajra and stewed apple."
  },
  {
    name: "Chana Dal & Spinach Tikkis",
    ingredients: ['Chana dal', 'spinach', 'garam masala', 'onion', 'Spices'],
    description: "Pan-fried tikkis made with mashed chana dal and spinach."
  },
  {
    name: "Rice & Mango Yogurt Bowl",
    ingredients: ['rice', 'mango', 'yogurt', 'cardamom', 'Spices'],
    description: "A chilled bowl of rice and mango topped with sweetened yogurt."
  },
  {
    name: "Tur Dal & Paneer Soup",
    ingredients: ['Tur dal', 'paneer', 'garlic', 'black pepper', 'Spices'],
    description: "A protein-rich soup with tur dal and paneer cubes."
  },
  {
    name: "Oats & Curd Chaat",
    ingredients: ['Oats', 'curd', 'coriander', 'chili powder', 'Spices'],
    description: "A tangy chaat with roasted oats and spiced curd."
  },
  {
    name: "Corn & Paneer Bhurji",
    ingredients: ['Corn', 'paneer', 'green chili', 'turmeric', 'Spices'],
    description: "Scrambled paneer with sweet corn and spices for a quick protein-rich dish."
  },
  {
    name: "Barley & Chana Dal Soup",
    ingredients: ['barley', 'Chana dal', 'garlic', 'black pepper', 'Spices'],
    description: "A hearty soup with barley and chana dal, seasoned with garlic and pepper."
  },
  {
    name: "Bajra & Rajma Cutlets",
    ingredients: ['Bajra flour', 'Rajma', 'ginger', 'red chili powder', 'Spices'],
    description: "Spiced cutlets made with mashed rajma and bajra flour."
  },
  {
    name: "Masoor Dal & Cheese Toast",
    ingredients: ['Masoor dal', 'cheese', 'oregano', 'bread', 'Spices'],
    description: "Mashed masoor dal spread on toast, topped with melted cheese and herbs."
  },
  {
    name: "Rice & Cowpea Pulao",
    ingredients: ['rice', 'cowpea', 'clove', 'cinnamon', 'Spices'],
    description: "A fragrant pulao with rice and cowpeas, spiced with whole garam masala."
  },
  {
    name: "Oats & Tur Dal Idli",
    ingredients: ['Oats', 'Tur dal', 'curd', 'mustard seeds', 'Spices'],
    description: "Soft idlis made from oats and tur dal, served with spiced curd."
  },
  {
    name: "Wheat & Urad Dal Dosa",
    ingredients: ['wheat flour', 'Urad dal', 'fenugreek', 'salt', 'Spices'],
    description: "Crispy dosas made with fermented wheat and urad dal batter."
  },
  {
    name: "Corn & Yogurt Salad",
    ingredients: ['Corn', 'yogurt', 'black salt', 'mint', 'Spices'],
    description: "A refreshing salad with boiled corn and chilled yogurt dressing."
  },
  {
    name: "Barley & Paneer Stir Fry",
    ingredients: ['barley', 'paneer', 'coriander powder', 'green chili'],
    description: "Stir-fried barley with paneer cubes and aromatic spices."
  },
  {
    name: "Rajma & Curd Wrap",
    ingredients: ['Rajma', 'curd', 'wheat roti', 'paprika', 'Spices'],
    description: "Spiced rajma wrapped in roti with a dollop of curd."
  },
  {
    name: "Moong Dal & Cheese Paratha",
    ingredients: ['Moong dal', 'cheese', 'wheat flour', 'cumin', 'Spices'],
    description: "Stuffed paratha with moong dal and cheese, grilled until golden."
  },
  {
    name: "Sorghum & Chana Dal Tikki",
    ingredients: ['sorghum', 'Chana dal', 'ginger', 'garam masala', 'Spices'],
    description: "Crispy tikkis made with mashed chana dal and cooked sorghum."
  },
  {
    name: "Masoor Dal Kadhi",
    ingredients: ['Masoor dal', 'curd', 'asafoetida', 'curry leaves', 'Spices'],
    description: "Tangy kadhi made with curd and masoor dal, tempered with spices."
  },
  {
    name: "Wheat & Cowpea Dhokla",
    ingredients: ['wheat flour', 'cowpea', 'curd', 'mustard seeds', 'Spices'],
    description: "Steamed savory cakes made with fermented wheat and cowpea batter."
  },
  {
    name: "Moong Dal & Yogurt Dip",
    ingredients: ['Moong dal', 'yogurt', 'mint', 'black salt', 'Spices'],
    description: "A creamy dip made with mashed moong dal and chilled yogurt."
  },
  {
    name: "Wheat & Masoor Dal Uttapam",
    ingredients: ['wheat flour', 'Masoor dal', 'onion', 'green chili'],
    description: "Thick savory pancakes topped with onion and chili."
  },
  {
    name: "Barley Upma with Curd",
    ingredients: ['barley', 'curd', 'mustard seeds', 'curry leaves', 'Spices'],
    description: "Savory barley upma served with tangy curd."
  },
  {
    name: "Chana Dal Paneer Tikki",
    ingredients: ['Chana dal', 'paneer', 'coriander', 'red chili powder', 'Spices'],
    description: "Pan-fried tikkis made with mashed chana dal and paneer."
  },
  {
    name: "Wheat Dalia Kheer",
    ingredients: ['wheat dalia', 'milk', 'cardamom', 'jaggery', 'Spices'],
    description: "Sweet porridge made with cracked wheat and milk, flavored with cardamom."
  },
  {
    name: "Corn & Cheese Cutlets",
    ingredients: ['Corn', 'cheese', 'black pepper', 'oregano', 'Spices'],
    description: "Crispy cutlets with sweet corn and melted cheese."
  },
  {
    name: "Tur Dal Kadhi",
    ingredients: ['Tur dal', 'curd', 'asafoetida', 'curry leaves', 'Spices'],
    description: "Tangy kadhi made with curd and tur dal, tempered with spices."
  },
  {
    name: "Masoor Dal Paratha with Butter",
    ingredients: ['Masoor dal', 'wheat', 'cumin', 'butter', 'Spices'],
    description: "Stuffed paratha with spiced masoor dal, served with butter."
  },
  {
    name: "Sorghum Idli with Coconut Chutney",
    ingredients: ['sorghum', 'Urad dal', 'salt', 'coconut', 'Spices'],
    description: "Soft idlis made with sorghum and urad dal, served with coconut chutney."
  },
  {
    name: "Cowpea Curry with Yogurt",
    ingredients: ['cowpea', 'yogurt', 'mustard seeds', 'turmeric', 'Spices'],
    description: "Creamy cowpea curry with a yogurt base and tempered spices."
  },
  {
    name: "Rye & Paneer Crackers",
    ingredients: ['rye flour', 'paneer', 'black pepper', 'salt', 'Spices'],
    description: "Savory crackers made with rye flour and crumbled paneer."
  },
  {
    name: "Oats Chilla with Cheese",
    ingredients: ['Oats', 'cheese', 'green chili', 'coriander', 'Spices'],
    description: "Savory oats pancakes stuffed with melted cheese."
  },
  {
    name: "Urad Dal Dahi Vada",
    ingredients: ['Urad dal', 'curd', 'cumin', 'red chili powder', 'Spices'],
    description: "Soft vadas soaked in spiced curd and garnished with chili powder."
  },
  {
    name: "Barley Rajma Pulao",
    ingredients: ['barley', 'Rajma', 'clove', 'bay leaf', 'Spices'],
    description: "A hearty pulao with barley and kidney beans, spiced with whole garam masala."
  },
  {
    name: "Moong Dal Dhokla with Yogurt Dip",
    ingredients: ['Moong dal', 'curd', 'mustard seeds', 'ginger', 'Spices'],
    description: "Steamed savory cakes made from moong dal, served with yogurt dip."
  },
  {
    name: "Corn Paneer Bhurji",
    ingredients: ['Corn', 'paneer', 'cumin', 'green chili', 'Spices'],
    description: "Scrambled paneer with sweet corn and spices."
  },
  {
    name: "Wheat & Masoor Dal Pancakes",
    ingredients: ['wheat', 'Masoor dal', 'turmeric', 'black pepper', 'Spices'],
    description: "Savory pancakes made with wheat flour and blended masoor dal."
  },
  {
    name: "Chana Dal Kheer",
    ingredients: ['Chana dal', 'milk', 'cardamom', 'jaggery', 'Spices'],
    description: "A rich dessert made by simmering chana dal in milk and jaggery."
  },
  {
    name: "Bajra & Cheese Flatbread",
    ingredients: ['Bajra', 'cheese', 'oregano', 'salt', 'Spices'],
    description: "Flatbread made with bajra flour and stuffed with cheese."
  },
  {
    name: "Tur Dal & Yogurt Soup",
    ingredients: ['Tur dal', 'yogurt', 'garlic', 'cumin', 'Spices'],
    description: "A tangy soup made with tur dal and yogurt, flavored with garlic."
  },
  {
    name: "Rajma Paneer Wrap",
    ingredients: ['Rajma', 'paneer', 'wheat', 'paprika', 'Spices'],
    description: "Spiced rajma and paneer rolled into a wheat wrap."
  },
  {
    name: "Barley & Curd Salad",
    ingredients: ['barley', 'curd', 'mint', 'black salt', 'Spices'],
    description: "A refreshing salad with barley and chilled curd, seasoned with mint."
  },
  {
    name: "Moong Dal Paneer Curry",
    ingredients: ['Moong dal', 'paneer', 'coriander powder', 'ginger'],
    description: "A light curry with moong dal and paneer"
  },
  {
    name: "Pumpkin Bajra Soup",
    ingredients: ['pumpkin', 'Bajra', 'cumin', 'black pepper', 'Spices'],
    description: "A warming autumn soup with roasted pumpkin and bajra flour, spiced with cumin."
  },
  {
    name: "Mango Moong Dal Salad",
    ingredients: ['mango', 'Moong dal', 'mint', 'lime juice', 'Spices'],
    description: "A summer salad with ripe mango, boiled moong dal, and fresh mint."
  },
  {
    name: "Rajma Millet Bowl",
    ingredients: ['Rajma', 'sorghum', 'garam masala', 'onion', 'Spices'],
    description: "A protein-packed bowl with rajma and sorghum, perfect for lunch."
  },
  {
    name: "Oats Turmeric Chilla",
    ingredients: ['Oats', 'turmeric', 'green chili', 'coriander', 'Spices'],
    description: "A gluten-free pancake with oats and turmeric, ideal for detox days."
  },
  {
    name: "Sweet Potato Chana Tikki",
    ingredients: ['sweet potato', 'Chana', 'cumin', 'ginger', 'Spices'],
    description: "Pan-fried tikkis made with mashed sweet potato and chana."
  },
  {
    name: "Barley Lemon Rasam",
    ingredients: ['barley', 'lemon', 'mustard seeds', 'curry leaves', 'Spices'],
    description: "A tangy South Indian-style rasam with barley and lemon."
  },
  {
    name: "Spinach Masoor Dal Curry",
    ingredients: ['spinach', 'Masoor dal', 'garlic', 'red chili'],
    description: "A vegan curry with spinach and masoor dal, rich in iron."
  },
  {
    name: "Corn & Cowpea Stir Fry",
    ingredients: ['Corn', 'cowpea', 'mustard seeds', 'turmeric', 'Spices'],
    description: "A quick stir fry with seasonal corn and protein-rich cowpeas."
  },
  {
    name: "Wheat & Rye Paratha",
    ingredients: ['wheat', 'rye', 'carom seeds', 'salt', 'Spices'],
    description: "A hearty paratha using rye flour for added fiber."
  },
  {
    name: "Bajra Khichdi with Carrot",
    ingredients: ['Bajra', 'carrot', 'Tur dal', 'asafoetida', 'Spices'],
    description: "Winter comfort food with bajra, dal, and sweet carrots."
  },
  {
    name: "Urad Dal Beetroot Dosa",
    ingredients: ['Urad dal', 'beetroot', 'ginger', 'green chili'],
    description: "A vibrant dosa with beetroot puree and urad dal."
  },
  {
    name: "Rice & Coconut Payasam",
    ingredients: ['rice', 'coconut milk', 'cardamom', 'jaggery', 'Spices'],
    description: "A Kerala-style dessert with rice and coconut milk."
  },
  {
    name: "Moong Dal & Methi Curry",
    ingredients: ['Moong dal', 'fenugreek leaves', 'garlic', 'cumin', 'Spices'],
    description: "A winter-friendly curry with moong dal and fresh methi."
  },
  {
    name: "Oats & Apple Porridge",
    ingredients: ['Oats', 'apple', 'cinnamon', 'milk', 'Spices'],
    description: "A cozy breakfast with oats and stewed apples."
  },
  {
    name: "Rajma & Spinach Wrap",
    ingredients: ['Rajma', 'spinach', 'wheat', 'paprika', 'Spices'],
    description: "A high-protein wrap with rajma and sautéed spinach."
  },
  {
    name: "Barley & Tur Dal Pongal",
    ingredients: ['barley', 'Tur dal', 'black pepper', 'ginger', 'Spices'],
    description: "A twist on traditional pongal using barley instead of rice."
  },
  {
    name: "Chana & Sorghum Cutlets",
    ingredients: ['Chana', 'sorghum', 'onion', 'garam masala', 'Spices'],
    description: "Crispy cutlets with mashed chana and cooked sorghum."
  },
  {
    name: "Masoor Dal & Tomato Soup",
    ingredients: ['Masoor dal', 'tomato', 'bay leaf', 'clove', 'Spices'],
    description: "A comforting soup with masoor dal and aromatic spices."
  },
  {
    name: "Cowpea & Bajra Pulao",
    ingredients: ['cowpea', 'Bajra', 'coriander', 'green chili', 'Spices'],
    description: "A rustic pulao with bajra grains and boiled cowpeas."
  },
  {
    name: "Rye & Moong Dal Crackers",
    ingredients: ['rye', 'Moong dal', 'black salt', 'thyme', 'Spices'],
    description: "Savory crackers made with rye flour and moong dal paste."
  },
  {
    name: "Corn & Rajma Tacos",
    ingredients: ['Corn', 'Rajma', 'lime', 'chili powder'],
    description: "Indian-style tacos with spicy rajma and sweet corn."
  },
  {
    name: "Wheat & Masoor Dal Dhokla",
    ingredients: ['wheat', 'Masoor dal', 'ginger', 'mustard seeds', 'Spices'],
    description: "Steamed savory cakes with fermented wheat and dal batter."
  },
  {
    name: "Barley & Chana Soup",
    ingredients: ['barley', 'Chana', 'garlic', 'pepper'],
    description: "A thick soup with barley and mashed chana for protein."
  },
  {
    name: "Bajra & Moong Dal Pancakes",
    ingredients: ['Bajra', 'Moong dal', 'onion', 'green chili'],
    description: "Savory pancakes with bajra flour and moong dal batter."
  },
  {
    name: "Corn Masala Chaat",
    ingredients: ['Corn', 'onion', 'chili powder'],
    description: "Mix boiled corn with chopped onions and chili powder for a spicy snack."
  },
  {
    name: "Rajma Tikki",
    ingredients: ['Rajma', 'bread crumbs', 'garam masala', 'Spices'],
    description: "Mash cooked rajma, mix with spices and crumbs, and pan-fry into patties."
  },
  {
    name: "Wheat Dalia Upma",
    ingredients: ['wheat', 'vegetables', 'mustard seeds', 'Spices'],
    description: "Cook cracked wheat with veggies and mustard seeds for a savory upma."
  },
  {
    name: "Moong Dal Pancakes",
    ingredients: ['Moong dal', 'green chili', 'coriander', 'Spices'],
    description: "Blend soaked moong dal and cook into spicy pancakes."
  },
  {
    name: "Barley Vegetable Soup",
    ingredients: ['barley', 'carrot', 'black pepper', 'Spices'],
    description: "Simmer barley with chopped vegetables and pepper for a hearty soup."
  },
  {
    name: "Bajra Khichdi",
    ingredients: ['Bajra', 'Tur dal', 'turmeric', 'Spices'],
    description: "Cook bajra and tur dal together with turmeric for a rustic khichdi."
  },
  {
    name: "Masoor Dal Curry",
    ingredients: ['Masoor dal', 'tomato', 'cumin', 'Spices'],
    description: "Boil masoor dal and temper with tomato and cumin for a quick curry."
  },
  {
    name: "Chana Stir Fry",
    ingredients: ['Chana', 'onion', 'garam masala', 'Spices'],
    description: "Sauté boiled chana with onions and spices for a protein-rich side."
  },
  {
    name: "Rice Veg Pulao",
    ingredients: ['rice', 'peas', 'clove', 'Spices'],
    description: "Cook rice with peas and clove for a fragrant pulao."
  },
  {
    name: "Sorghum Cutlets",
    ingredients: ['sorghum', 'potato', 'chili flakes'],
    description: "Mix cooked sorghum with mashed potato and spices, then pan-fry."
  },
  {
    name: "Urad Dal Vada",
    ingredients: ['Urad dal', 'ginger', 'green chili'],
    description: "Grind soaked urad dal and deep-fry into crispy vadas."
  },
  {
    name: "Cowpea Curry",
    ingredients: ['cowpea', 'tomato', 'mustard seeds', 'Spices'],
    description: "Cook cowpeas in a tomato-based curry with mustard seed tempering."
  },
  {
    name: "Oats Banana Pancakes",
    ingredients: ['Oats', 'banana', 'cinnamon', 'Spices'],
    description: "Blend oats and banana into a batter and cook into sweet pancakes."
  },
  {
    name: "Rye Flatbread",
    ingredients: ['rye', 'salt', 'olive oil', 'Spices'],
    description: "Make a dough with rye flour and cook into rustic flatbreads."
  },
  {
    name: "Barley Lemon Salad",
    ingredients: ['barley', 'lemon', 'mint', 'Spices'],
    description: "Toss cooked barley with lemon juice and fresh mint."
  },
  {
    name: "Tur Dal Tomato Soup",
    ingredients: ['Tur dal', 'tomato', 'garlic'],
    description: "Blend cooked dal and tomato into a smooth, garlicky soup."
  },
  {
    name: "Corn Rice Fritters",
    ingredients: ['Corn', 'rice', 'coriander', 'Spices'],
    description: "Mix corn and rice into a batter and fry into crispy fritters."
  },
  {
    name: "Masoor Dal Sandwich Spread",
    ingredients: ['Masoor dal', 'onion', 'black pepper', 'Spices'],
    description: "Mash cooked dal with onion and pepper for a protein-rich spread."
  },
  {
    name: "Wheat Moong Dal Dhokla",
    ingredients: ['wheat', 'Moong dal', 'asafoetida', 'Spices'],
    description: "Ferment wheat and dal batter and steam into soft dhoklas."
  },
  {
    name: "Rajma Burrito Wrap",
    ingredients: ['Rajma', 'wheat', 'paprika', 'Spices'],
    description: "Fill wheat wraps with spiced rajma for a fusion burrito."
  },
  {
    name: "Chana Bajra Tikki",
    ingredients: ['Chana', 'Bajra', 'cumin', 'Spices'],
    description: "Combine chana and bajra flour into spiced tikkis."
  },
  {
    name: "Rice Oats Porridge",
    ingredients: ['rice', 'Oats', 'cardamom', 'Spices'],
    description: "Cook rice and oats together with cardamom for a creamy porridge."
  },
  {
    name: "Cowpea Masala Toast",
    ingredients: ['cowpea', 'bread', 'chili powder'],
    description: "Spread mashed cowpea on toast and sprinkle with chili powder."
  },
  {
    name: "Urad Dal Chilla",
    ingredients: ['Urad dal', 'ginger', 'coriander', 'Spices'],
    description: "Grind urad dal and cook into savory crepes with herbs."
  },
  {
    name: "Wheat Chana Porridge",
    ingredients: ['wheat', 'Chana', 'ginger', 'black pepper', 'Spices'],
    description: "Boil cracked wheat and chana with ginger and pepper for a warming porridge."
  },
  {
    name: "Corn Bajra Roti",
    ingredients: ['Corn', 'Bajra', 'carom seeds', 'salt', 'Spices'],
    description: "Rustic flatbreads made with corn and bajra flour, seasoned with ajwain."
  },
  {
    name: "Barley Tur Dal Soup",
    ingredients: ['barley', 'Tur dal', 'bay leaf', 'clove', 'Spices'],
    description: "A nourishing soup simmered with bay leaf and clove for depth."
  },
  {
    name: "Moong Dal Oats Chilla",
    ingredients: ['Moong dal', 'Oats', 'green chili', 'coriander', 'Spices'],
    description: "Savory pancakes with moong dal, oats, and fresh green chili."
  },
  {
    name: "Rajma Rice Bowl",
    ingredients: ['Rajma', 'rice', 'garam masala', 'coriander powder', 'Spices'],
    description: "Classic rajma rice with warm garam masala and coriander."
  },
  {
    name: "Sorghum Cowpea Stir Fry",
    ingredients: ['sorghum', 'cowpea', 'mustard seeds', 'curry leaves', 'Spices'],
    description: "A fiber-rich stir fry with mustard seeds and curry leaves."
  },
  {
    name: "Wheat Urad Dal Dosa",
    ingredients: ['wheat', 'Urad dal', 'fenugreek', 'salt', 'Spices'],
    description: "Fermented dosa batter with a hint of fenugreek for flavor."
  },
  {
    name: "Barley Moong Dal Salad",
    ingredients: ['barley', 'Moong dal', 'lemon juice', 'black salt'],
    description: "A light salad with lemon and black salt for zing."
  },
  {
    name: "Oats Chana Cutlets",
    ingredients: ['Oats', 'Chana', 'garlic', 'red chili flakes'],
    description: "Crispy cutlets with garlic and chili flakes for heat."
  },
  {
    name: "Rajma Bajra Wrap",
    ingredients: ['Rajma', 'Bajra', 'paprika', 'cumin', 'Spices'],
    description: "Spiced rajma filling wrapped in bajra roti."
  },
  {
    name: "Rice Tur Dal Pancakes",
    ingredients: ['rice', 'Tur dal', 'asafoetida', 'green chili', 'Spices'],
    description: "Savory pancakes with a touch of hing and chili."
  },
  {
    name: "Corn Masoor Dal Soup",
    ingredients: ['Corn', 'Masoor dal', 'nutmeg', 'black pepper', 'Spices'],
    description: "Creamy soup with nutmeg and pepper for warmth."
  },
  {
    name: "Wheat Rye Crackers",
    ingredients: ['wheat', 'rye', 'thyme', 'sea salt', 'Spices'],
    description: "Crunchy crackers with thyme and sea salt."
  },
  {
    name: "Moong Dal Sorghum Pulao",
    ingredients: ['Moong dal', 'sorghum', 'clove', 'cardamom', 'Spices'],
    description: "A fragrant pulao with clove and cardamom."
  },
  {
    name: "Urad Dal Oats Idli",
    ingredients: ['Urad dal', 'Oats', 'ginger', 'green chili'],
    description: "Soft idlis with ginger and chili for a kick."
  },
  {
    name: "Cowpea Rice Stir Fry",
    ingredients: ['cowpea', 'rice', 'mustard seeds', 'turmeric', 'Spices'],
    description: "Quick stir fry with mustard seeds and turmeric."
  },
  {
    name: "Barley Chana Tikki",
    ingredients: ['barley', 'Chana', 'garam masala', 'mint', 'Spices'],
    description: "Spiced tikkis with garam masala and fresh mint."
  },
  {
    name: "Bajra Masoor Dal Soup",
    ingredients: ['Bajra', 'Masoor dal', 'cumin', 'black pepper', 'Spices'],
    description: "Hearty soup with cumin and pepper for depth."
  },
  {
    name: "Corn Rajma Salad",
    ingredients: ['Corn', 'Rajma', 'chili powder', 'lime juice'],
    description: "Zesty salad with chili powder and lime."
  },
  {
    name: "Wheat Moong Dal Paratha",
    ingredients: ['wheat', 'Moong dal', 'coriander', 'amchur', 'Spices'],
    description: "Stuffed paratha with coriander and tangy amchur."
  },
  {
    name: "Oats Tur Dal Porridge",
    ingredients: ['Oats', 'Tur dal', 'cinnamon', 'black pepper', 'Spices'],
    description: "Creamy porridge with cinnamon and pepper."
  },
  {
    name: "Rye Urad Dal Dosa",
    ingredients: ['rye', 'Urad dal', 'ginger', 'green chili'],
    description: "Unique dosa with ginger and chili."
  },
  {
    name: "Sorghum Masoor Dal Cutlets",
    ingredients: ['sorghum', 'Masoor dal', 'garlic', 'cumin', 'Spices'],
    description: "Crispy cutlets with garlic and cumin."
  },
  {
    name: "Cowpea Bajra Khichdi",
    ingredients: ['cowpea', 'Bajra', 'turmeric', 'bay leaf', 'Spices'],
    description: "Rustic khichdi with turmeric and bay leaf."
  },
  {
    name: "Mashed Potato Pancakes",
    ingredients: ['potato', 'cheese', 'onion'],
    description: "Fry mashed potatoes with cheese and onion for a crispy snack."
  },
  {
    name: "Apple Yogurt Parfait",
    ingredients: ['apple', 'yogurt', 'honey'],
    description: "Layered yogurt with diced apples and honey."
  },
  {
    name: "Veggie Omelette",
    ingredients: ['egg', 'onion', 'tomato'],
    description: "Whisked eggs cooked with vegetables."
  },
  {
    name: "Cheesy Banana Toast",
    ingredients: ['banana', 'cheese', 'bread'],
    description: "Surprisingly tasty combo of banana and melted cheese."
  },
  {
    name: "Spicy Potato Stir Fry",
    ingredients: ['potato', 'onion', 'spices'],
    description: "Simple spicy stir fry with potatoes and onions."
  },
  {
    name: "Fruit Salad",
    ingredients: ['apple', 'banana', 'orange'],
    description: "Chopped mixed fruits with a dash of lemon."
  },
  {
    name: "Vegetable Pulao",
    ingredients: ['rice', 'carrot', 'peas', 'spices'],
    description: "A fragrant rice dish with mixed vegetables and spices.",
    },
    {
      name: "Yogurt Dip",
      ingredients: ["yogurt", "onion", "spices"],
      description: "Creamy dip made from yogurt and herbs."
  },
  {
    name: "Cheese Omelette",
    ingredients: ['egg', 'cheese', 'milk'],
    description: "Fluffy omelette loaded with cheese."
  },
  {
    name: "Grilled Cheese Sandwich",
    ingredients: ['bread', 'cheese', 'butter'],
    description: "Golden grilled sandwich with melted cheese inside.",
  },
  {
    name: "Cucumber Raita",
    ingredients: ["cucumber", "yogurt", "salt"],
    description: "A cooling Indian side dish made with cucumber and yogurt.",
  },
  {
    name: "Masala Corn",
    ingredients: ["corn", "butter", "spices"],
    description: "Boiled corn tossed with butter and spicy masala.",
  },
  {
    name: "Peanut Chutney",
    ingredients: ["peanuts", "garlic", "spices"],
    description: "A spicy chutney made with roasted peanuts and garlic.",
  },
  {
    name: "Pumpkin Soup",
    ingredients: ["pumpkin", "cream", "garlic"],
    description: "Smooth and savory pumpkin soup with a creamy finish.",
  },
  {
    name: "Avocado Toast",
    ingredients: ["bread", "avocado", "lemon", "salt"],
    description: "Toasted bread topped with mashed avocado and a squeeze of lemon."
  },
  {
    name: "Sweet Potato Fries",
    ingredients: ['sweet potato', 'olive oil', 'spices'],
    description: "Baked sweet potato fries with crispy edges and smoky flavor."
  },
  {
    name: "Garlic Butter Mushrooms",
    ingredients: ['mushrooms', 'garlic', 'butter'],
    description: "Sautéed mushrooms in rich garlic butter sauce."
  },
  {
    name: "Pumpkin Pancakes",
    ingredients: ['pumpkin', 'flour', 'egg', 'milk'],
    description: "Fluffy pancakes with warm pumpkin flavor."
  },
  {
    name: "Chili Garlic Noodles",
    ingredients: ['noodles', 'garlic', 'chili', 'soy sauce'],
    description: "Spicy stir-fried noodles with garlic and chili kick."
  },
  {
    name: "Paneer Sandwich",
    ingredients: ['paneer', 'bread', 'tomato', 'mint chutney'],
    description: "Grilled sandwich with spiced paneer and fresh veggies."
  },
  {
    name: "Stuffed Bell Peppers",
    ingredients: ['bell pepper', 'rice', 'onion', 'spices'],
    description: "Bell peppers filled with seasoned rice and baked."
  },
  {
    name: "Coconut Rice",
    ingredients: ['rice', 'coconut', 'mustard seeds', 'curry leaves', 'Spices'],
    description: "Fragrant rice cooked with grated coconut and tempered spices."
  },
  {
    name: "Eggplant Curry",
    ingredients: ['eggplant', 'tomato', 'onion', 'spices'],
    description: "Rich and flavorful curry made with tender eggplant."
  },
  {
    name: "Lemon Cucumber Cooler",
    ingredients: ['cucumber', 'lemon', 'mint', 'sugar', 'Spices'],
    description: "Refreshing summer drink with cucumber and lemon."
  },
  {
    name: "Rajma Masala",
    ingredients: ['rajma', 'tomato', 'onion', 'spices'],
    description: "North Indian-style kidney bean curry with aromatic spices."
  },
  {
    name: "Vegetable Hakka Noodles",
    ingredients: ['noodles', 'carrot', 'cabbage', 'soy sauce'],
    description: "Indo-Chinese stir-fried noodles with crunchy vegetables."
  },
  {
    name: "Peanut Chikki",
    ingredients: ['peanuts', 'jaggery'],
    description: "Traditional Indian brittle made with roasted peanuts and jaggery."
  },
  {
    name: "Spinach Corn Sandwich",
    ingredients: ['spinach', 'corn', 'cheese', 'bread'],
    description: "Creamy spinach and corn filling grilled between bread slices."
  },
  {
    name: "Tomato Rice",
    ingredients: ['rice', 'tomato', 'onion', 'spices'],
    description: "Tangy rice dish cooked with tomatoes and aromatic spices."
  },
  {
    name: "Methi Thepla",
    ingredients: ['wheat flour', 'fenugreek leaves', 'spices'],
    description: "Gujarati flatbread made with fresh methi and spices."
  },
  {
    name: "Carrot Soup",
    ingredients: ['carrot', 'onion', 'garlic', 'cream'],
    description: "Smooth and comforting soup made with carrots and cream."
  },
  {
    name: "Paneer Tikka Wrap",
    ingredients: ['paneer', 'roti', 'yogurt', 'spices'],
    description: "Grilled paneer wrapped in soft roti with spicy sauce."
  },
  {
    name: "Vegetable Dhokla",
    ingredients: ['besan', 'carrot', 'cabbage', 'spices'],
    description: "Steamed savory cake with mixed vegetables and mustard tempering."
  },
  {
    name: "Masala Idli",
    ingredients: ['idli', 'onion', 'tomato', 'spices'],
    description: "Leftover idlis tossed in spicy masala for a quick snack."
  },
  {
    name: "Cabbage Stir Fry",
    ingredients: ['cabbage', 'mustard seeds', 'green chili', 'Spices'],
    description: "Simple stir-fried cabbage with South Indian tempering."
  },
  {
    name: "Oats Chilla",
    ingredients: ['oats', 'onion', 'carrot', 'spices'],
    description: "Healthy savory pancakes made with oats and veggies."
  },
  {
    name: "Papaya Smoothie",
    ingredients: ['papaya', 'milk', 'honey'],
    description: "Creamy and refreshing smoothie made with ripe papaya."
  },
  {
    name: "Sesame Noodles",
    ingredients: ['noodles', 'sesame oil', 'soy sauce', 'garlic'],
    description: "Asian-style noodles tossed in sesame garlic sauce."
  },
  {
    name: "Moong Dal Tadka",
    ingredients: ['moong dal', 'garlic', 'cumin', 'ghee', 'Spices'],
    description: "Comforting lentil dish with aromatic tempering."
  },
  {
    name: "Banana Pancakes",
    ingredients: ['banana', 'egg', 'flour'],
    description: "Fluffy pancakes made with mashed bananas and eggs."
  },
  {
    name: "Veggie Stir Fry",
    ingredients: ['broccoli', 'bell pepper', 'soy sauce'],
    description: "Quick stir fry with crunchy vegetables and savory sauce."
  },
  {
    name: "Masala Oats",
    ingredients: ['oats', 'onion', 'tomato', 'spices'],
    description: "Spicy Indian-style oats cooked with veggies."
  },
  {
    name: "Garlic Rice",
    ingredients: ['rice', 'garlic', 'butter'],
    description: "Fragrant rice sautéed with garlic and butter."
  },
  {
    name: "Fruit Chaat",
    ingredients: ['apple', 'banana', 'orange', 'spices'],
    description: "Tangy fruit salad tossed with chaat masala."
  },
  {
    name: "Cucumber Sandwich",
    ingredients: ['cucumber', 'bread', 'butter'],
    description: "Simple and refreshing sandwich with sliced cucumber."
  },
  {
    name: "Tomato Soup",
    ingredients: ['tomato', 'garlic', 'onion'],
    description: "Smooth and savory tomato soup with a hint of garlic."
  },
  {
    name: "Peanut Butter Toast",
    ingredients: ['bread', 'peanut butter', 'banana'],
    description: "Toasted bread topped with peanut butter and banana slices."
  },
  {
    name: "Spinach Paratha",
    ingredients: ['spinach', 'wheat flour', 'spices'],
    description: "Indian flatbread stuffed with seasoned spinach."
  },
  {
    name: "Lemon Rice",
    ingredients: ['rice', 'lemon', 'mustard seeds', 'Spices'],
    description: "South Indian-style rice with lemon juice and tempered spices."
  },
  {
    name: "Mango Lassi",
    ingredients: ['mango', 'yogurt', 'sugar'],
    description: "Sweet and creamy mango yogurt drink."
  },
  {
    name: "Vegetable Upma",
    ingredients: ['semolina', 'carrot', 'peas', 'spices'],
    description: "Savory Indian breakfast dish with veggies and semolina."
  },
  {
    name: "Corn Salad",
    ingredients: ['corn', 'tomato', 'onion', 'lemon'],
    description: "Fresh salad with boiled corn and tangy dressing."
  },
  {
    name: "Apple Cinnamon Porridge",
    ingredients: ['apple', 'oats', 'cinnamon', 'Spices'],
    description: "Warm porridge with apple chunks and cinnamon."
  },
  {
    name: "Cheese Garlic Bread",
    ingredients: ['bread', 'cheese', 'garlic'],
    description: "Baked bread topped with garlic butter and melted cheese."
  },
  {
    name: "Beetroot Cutlet",
    ingredients: ['beetroot', 'potato', 'breadcrumbs'],
    description: "Crispy patties made with mashed beetroot and potato."
  },
  {
    name: "Vegetable Khichdi",
    ingredients: ['rice', 'moong dal', 'carrot', 'peas'],
    description: "Comforting one-pot dish of rice, lentils, and vegetables."
  },
  {
    name: "Chana Masala",
    ingredients: ['chana', 'tomato', 'onion', 'spices'],
    description: "Spicy chickpea curry with rich tomato gravy."
  },
  {
    name: "Egg Curry",
    ingredients: ['egg', 'tomato', 'onion', 'spices'],
    description: "Hard-boiled eggs simmered in spicy curry sauce."
  },
  {
    name: "Carrot Halwa",
    ingredients: ['carrot', 'milk', 'sugar', 'ghee'],
    description: "Indian dessert made by slow-cooking grated carrots in milk and ghee."
  },
  {
    name: "Potato Wedges",
    ingredients: ['potato', 'olive oil', 'spices'],
    description: "Oven-baked potato wedges with crispy edges."
  },
  {
    name: "Vegetable Sandwich",
    ingredients: ['bread', 'tomato', 'cucumber', 'cheese'],
    description: "Classic sandwich with fresh veggies and cheese."
  },
  {
    name: "Grilled Tomato",
    ingredients: ['tomato'],
    description: "Slice and grill tomato until lightly charred and juicy."
  },
  {
    name: "Roasted Onion",
    ingredients: ['onion'],
    description: "Roast whole onions until caramelized and soft inside."
  },
  {
    name: "Boiled Egg Curry Base",
    ingredients: ['egg'],
    description: "Boil eggs and use them as a base for curry or salad."
  },
  {
    name: "Pineapple Cottage Cream Cups",
    ingredients: ['pineapple', 'cottage cheese'],
    description: "Layer pineapple cubes with cottage cheese for a sweet-tangy, creamy cup."
  },
  {
    name: "Strawberries and Cream",
    ingredients: ['strawberry', 'cream'],
    description: "Toss sliced strawberries with lightly whipped cream."
  },
  {
    name: "Banana Curd Bowl",
    ingredients: ['banana', 'yogurt'],
    description: "Mix banana slices into yogurt for a quick, probiotic breakfast."
  },
  {
    name: "Apple Milk Stew",
    ingredients: ['apple', 'milk'],
    description: "Simmer apple slices in warm milk for a cozy, lightly sweet drink."
  },
  {
    name: "Blueberry Yogurt Cup",
    ingredients: ['blueberry', 'yogurt'],
    description: "Fold blueberries into thick yogurt and chill."
  },
  {
    name: "Peach Yogurt Swirl",
    ingredients: ['peach', 'yogurt'],
    description: "Stir soft peach slices into creamy yogurt for a summer snack."
  },
  {
    name: "Kiwi Cream Cups",
    ingredients: ['kiwi', 'cream'],
    description: "Layer kiwi rounds with softly whipped cream for a tart-sweet dessert."
  },
  {
    name: "Pomegranate Yogurt Mix",
    ingredients: ['pomegranate', 'yogurt'],
    description: "Stir ruby arils into yogurt for juicy bursts in every spoon."
  },
  {
    name: "Papaya Milk Cooler",
    ingredients: ['papaya', 'milk'],
    description: "Blend papaya with cold milk for a silky, mellow shake."
  },
  {
    name: "Watermelon Yogurt Bowl",
    ingredients: ['watermelon', 'yogurt'],
    description: "Combine chilled watermelon cubes with yogurt for a light, hydrating bowl."
  },
  {
    name: "Chikoo Milk Blend",
    ingredients: ['sapota', 'milk'],
    description: "Blend ripe sapota (chikoo) with milk for a naturally sweet shake."
  },
  {
    name: "Grilled Avocado",
    ingredients: ['avocado'],
    description: "Halve and grill avocado for a smoky, creamy bite."
  },
  {
    name: "Steamed Bell Pepper",
    ingredients: ['bell pepper'],
    description: "Steam bell pepper slices until tender and sweet."
  },
  {
    name: "Frozen Orange Segments",
    ingredients: ['orange'],
    description: "Freeze orange segments for a juicy, icy snack."
  },
  {
    name: "Boiled Guava",
    ingredients: ['guava'],
    description: "Boil guava until soft—great for purees or jams."
  },
  {
    name: "Roasted Apple Wedges",
    ingredients: ['apple'],
    description: "Roast apple wedges until golden and fragrant."
  },
  {
    name: "Grilled Watermelon",
    ingredients: ['watermelon'],
    description: "Grill watermelon slices for a smoky-sweet twist."
  },
  {
    name: "Steamed Eggplant",
    ingredients: ['eggplant'],
    description: "Steam eggplant chunks until soft and silky."
  },
  {
    name: "Boiled Spinach",
    ingredients: ['spinach'],
    description: "Boil spinach leaves briefly for a quick side dish."
  },
  {
    name: "Frozen Kiwi Slices",
    ingredients: ['kiwi'],
    description: "Freeze kiwi slices for a tangy frozen treat."
  },
  {
    name: "Roasted Tomato Halves",
    ingredients: ['tomato'],
    description: "Roast tomato halves until blistered and juicy."
  },
  {
    name: "Grilled Banana",
    ingredients: ['banana'],
    description: "Grill banana halves for a caramelized dessert."
  },
  {
    name: "Boiled Carrot Coins",
    ingredients: ['carrot'],
    description: "Boil sliced carrots until tender and sweet."
  },
  {
    name: "Steamed Cucumber",
    ingredients: ['cucumber'],
    description: "Steam cucumber slices for a soft, mellow flavor."
  },
  {
    name: "Roasted Fig Halves",
    ingredients: ['fig'],
    description: "Roast fig halves until sticky and rich."
  },
  {
    name: "Frozen Lychee Pops",
    ingredients: ['lychee'],
    description: "Freeze peeled lychee for a juicy, icy snack."
  },
  {
    name: "Boiled Plum",
    ingredients: ['plum'],
    description: "Boil plums until soft—perfect for sauces or spreads."
  },
  {
    name: "Grilled Peach Slices",
    ingredients: ['peach'],
    description: "Grill peach slices for a warm, caramelized flavor."
  },
  {
    name: "Steamed Corn Kernels",
    ingredients: ['corn'],
    description: "Steam corn kernels until juicy and tender."
  },
  {
    name: "Roasted Pumpkin Wedges",
    ingredients: ['pumpkin'],
    description: "Roast pumpkin wedges until golden and sweet."
  },
  {
    name: "Boiled Soybean Mash",
    ingredients: ['soybean'],
    description: "Boil soybeans and mash for a protein-rich base."
  },
  {
    name: "Grilled Pineapple Rings",
    ingredients: ['pineapple'],
    description: "Grill pineapple rings for a smoky-sweet snack."
  },
  {
    name: "Steamed Cauliflower Mash",
    ingredients: ['cauliflower'],
    description: "Steam cauliflower and mash for a light alternative to potatoes."
  },
  {
    name: "Frozen Strawberry Coins",
    ingredients: ['strawberry'],
    description: "Freeze strawberry slices for a refreshing treat."
  },
  {
    name: "Steamed Cabbage",
    ingredients: ['cabbage'],
    description: "Steam cabbage leaves until tender and naturally sweet."
  },
  {
    name: "Roasted Garlic",
    ingredients: ['garlic'],
    description: "Bake whole garlic bulbs until soft and caramelized."
  },
  {
    name: "Boiled Soybean Snack",
    ingredients: ['soybean'],
    description: "Boil soybeans until tender—great for snacking or salads."
  },
  {
    name: "Frozen Mango Cubes",
    ingredients: ['mango'],
    description: "Freeze mango chunks for a cool, tropical treat."
  },
  {
    name: "Sautéed Bell Pepper",
    ingredients: ['bell pepper'],
    description: "Slice and sauté bell pepper until soft and fragrant."
  },
  {
    name: "Baked Eggplant Slices",
    ingredients: ['eggplant'],
    description: "Bake eggplant rounds until golden and tender."
  },
  {
    name: "Boiled Beetroot",
    ingredients: ['beetroot'],
    description: "Boil beetroot until soft—perfect for salads or purees."
  },
  {
    name: "Steamed Okra",
    ingredients: ['okra'],
    description: "Steam okra pods until tender and bright green."
  },
  {
    name: "Roasted Carrot Sticks",
    ingredients: ['carrot'],
    description: "Roast carrot sticks until caramelized and crisp."
  },
  {
    name: "Grilled Muskmelon",
    ingredients: ['muskmelon'],
    description: "Grill muskmelon slices for a smoky-sweet flavor."
  },
  {
    name: "Frozen Strawberry Bites",
    ingredients: ['strawberry'],
    description: "Freeze strawberries for a refreshing snack."
  },
  {
    name: "Boiled Pumpkin Cubes",
    ingredients: ['pumpkin'],
    description: "Boil pumpkin chunks until soft—great for mashing."
  },
  {
    name: "Sautéed Onion",
    ingredients: ['onion'],
    description: "Cook sliced onion until golden and sweet."
  },
  {
    name: "Steamed Cauliflower Florets",
    ingredients: ['cauliflower'],
    description: "Steam florets until tender and ready to serve."
  },
  {
    name: "Grilled Guava Halves",
    ingredients: ['guava'],
    description: "Grill guava halves for a smoky tropical twist."
  },
  {
    name: "Boiled Fig",
    ingredients: ['fig'],
    description: "Boil figs until soft—great for jams or spreads."
  },
  {
    name: "Roasted Chili Peppers",
    ingredients: ['chili'],
    description: "Roast chili peppers until blistered and smoky."
  },
  {
    name: "Frozen Lychee",
    ingredients: ['lychee'],
    description: "Freeze peeled lychee for a juicy, icy treat."
  },
  {
    name: "Steamed Asparagus Spears",
    ingredients: ['asparagus'],
    description: "Steam asparagus until crisp-tender and vibrant."
  },
  {
    name: "Boiled Ginger Tea Base",
    ingredients: ['ginger'],
    description: "Boil sliced ginger for a spicy, aromatic tea base."
  },
  {
    name: "Roasted Corn Kernels",
    ingredients: ['corn'],
    description: "Roast corn kernels until golden and crunchy."
  },
  {
    name: "Grilled Peach Halves",
    ingredients: ['peach'],
    description: "Grill peach halves for a caramelized dessert."
  },
  {
    name: "Steamed Spinach Leaves",
    ingredients: ['spinach'],
    description: "Steam spinach until wilted and ready to serve."
  },
  {
    name: "Baked Potato Skins",
    ingredients: ['potato'],
    description: "Bake potato skins until crispy and golden."
  },
  {
    name: "Roasted Sweet Potato",
    ingredients: ['sweet potato'],
    description: "Bake whole sweet potatoes until soft and caramelized."
  },
  {
    name: "Boiled Egg",
    ingredients: ['egg'],
    description: "Boil eggs to your preferred doneness—soft, medium, or hard."
  },
  {
    name: "Mashed Banana",
    ingredients: ['banana'],
    description: "Mash ripe banana for a quick baby food or baking base."
  },
  {
    name: "Steamed Broccoli",
    ingredients: ['broccoli'],
    description: "Steam broccoli florets until tender and vibrant green."
  },
  {
    name: "Grilled Pineapple",
    ingredients: ['pineapple'],
    description: "Slice and grill pineapple for a smoky-sweet treat."
  },
  {
    name: "Baked Apple",
    ingredients: ['apple'],
    description: "Bake whole apples until soft and naturally sweet."
  },
  {
    name: "Boiled Corn",
    ingredients: ['corn'],
    description: "Boil corn on the cob until juicy and tender."
  },
  {
    name: "Cucumber Sticks",
    ingredients: ['cucumber'],
    description: "Slice cucumber into sticks for a crunchy snack."
  },
  {
    name: "Roasted Pumpkin",
    ingredients: ['pumpkin'],
    description: "Roast pumpkin chunks until golden and soft."
  },
  {
    name: "Frozen Grapes",
    ingredients: ['grapes'],
    description: "Freeze grapes for a refreshing, bite-sized dessert."
  },
  {
    name: "Sautéed Mushrooms",
    ingredients: ['mushrooms'],
    description: "Cook mushrooms in a dry pan until browned and juicy."
  },
  {
    name: "Boiled Potato",
    ingredients: ['potato'],
    description: "Boil potatoes until fork-tender—great as a base or side."
  },
  {
    name: "Toasted Bread",
    ingredients: ['bread'],
    description: "Toast slices of bread until crisp and golden."
  },
  {
    name: "Steamed Spinach",
    ingredients: ['spinach'],
    description: "Steam spinach leaves for a quick, healthy side."
  },
  {
    name: "Grilled Eggplant",
    ingredients: ['eggplant'],
    description: "Slice and grill eggplant until smoky and tender."
  },
  {
    name: "Boiled Rice",
    ingredients: ['rice'],
    description: "Cook rice in water until fluffy and soft."
  },
  {
    name: "Baked Tomato",
    ingredients: ['tomato'],
    description: "Bake whole tomatoes until blistered and juicy."
  },
  {
    name: "Frozen Watermelon Cubes",
    ingredients: ['watermelon'],
    description: "Freeze watermelon chunks for a cool summer snack."
  },
  {
    name: "Steamed Cauliflower",
    ingredients: ['cauliflower'],
    description: "Steam cauliflower florets until tender."
  },
  {
    name: "Roasted Beetroot",
    ingredients: ['beetroot'],
    description: "Roast beetroot until sweet and earthy."
  },
  {
    name: "Boiled Soybeans",
    ingredients: ['soybean'],
    description: "Boil soybeans until soft—great for snacking or salads."
  },
  {
    name: "Grilled Peach",
    ingredients: ['peach'],
    description: "Halve and grill peaches for a caramelized dessert."
  },
  {
    name: "Steamed Asparagus",
    ingredients: ['asparagus'],
    description: "Steam asparagus spears until crisp-tender."
  },
  {
    name: "Frozen Banana Pops",
    ingredients: ['banana'],
    description: "Freeze banana halves on sticks for a healthy treat."
  },
  {
    name: "Boiled Carrot",
    ingredients: ['carrot'],
    description: "Boil carrots until soft—perfect for mashing or slicing."
  },
  {
    name: "Moong Dal Chilla",
    ingredients: ['moong dal', 'onion', 'spices'],
    description: "Savory lentil pancakes with chopped veggies."
  },
  {
    name: "Rice Kheer",
    ingredients: ['rice', 'milk', 'sugar', 'cardamom', 'Spices'],
    description: "Creamy Indian rice pudding flavored with cardamom."
  },
  {
    name: "Mango Salsa",
    ingredients: ['mango', 'onion', 'chili', 'lemon'],
    description: "Sweet and spicy salsa perfect for dipping or topping."
  },
  {
    name: "Palak Paneer",
    ingredients: ['spinach', 'paneer', 'spices'],
    description: "Rich spinach curry with cubes of paneer."
  },
  {
    name: "Bread Upma",
    ingredients: ['bread', 'onion', 'tomato', 'spices'],
    description: "Quick savory dish made with leftover bread and spices."
  },
  {
    name: "Chickpea Salad",
    ingredients: ['chickpeas', 'cucumber', 'tomato', 'lemon'],
    description: "Protein-packed salad with fresh veggies."
  },
  {
    name: "Poha",
    ingredients: ['flattened rice', 'onion', 'mustard seeds', 'Spices'],
    description: "Light and flavorful Indian breakfast dish."
  },
  {
    name: "Aloo Tikki",
    ingredients: ['potato', 'breadcrumbs', 'spices'],
    description: "Crispy potato patties served with chutney."
  },
  {
    name: "Rava Dosa",
    ingredients: ['semolina', 'rice flour', 'spices'],
    description: "Thin and crispy South Indian dosa made with semolina."
  },
  {
    name: "Vegetable Soup",
    ingredients: ['carrot', 'cabbage', 'onion', 'garlic'],
    description: "Hearty soup with mixed vegetables and herbs."
  },
  {
    name: "Paneer Bhurji",
    ingredients: ['paneer', 'tomato', 'onion', 'spices'],
    description: "Scrambled paneer cooked with spices and veggies."
  },
  {
    name: "Banana Chips",
    ingredients: ['banana', 'oil', 'salt', 'Spices'],
    description: "Thinly sliced bananas deep-fried until crispy."
  },
  {
    name: "Tomato Cheese Melt",
    ingredients: ['tomato', 'cheese'],
    description: "Slice tomato and melt cheese on top for a juicy snack."
  },
  {
    name: "Boiled Egg Toast",
    ingredients: ['egg', 'bread'],
    description: "Slice boiled egg over toasted bread with a pinch of salt."
  },
  {
    name: "Coconut Banana Bites",
    ingredients: ['banana', 'coconut'],
    description: "Roll banana slices in shredded coconut for a tropical treat."
  },
  {
    name: "Apple Cinnamon Chips",
    ingredients: ['apple', 'spices'],
    description: "Bake thin apple slices with cinnamon until crisp."
  },
  {
    name: "Garlic Mashed Potato",
    ingredients: ['potato', 'garlic'],
    description: "Mash boiled potatoes with roasted garlic for extra flavor."
  },
  {
    name: "Strawberry Yogurt Swirl",
    ingredients: ['strawberry', 'yogurt'],
    description: "Mix chopped strawberries into creamy yogurt."
  },
  {
    name: "Avocado Egg Mash",
    ingredients: ['avocado', 'egg'],
    description: "Mash boiled egg with avocado for a protein-packed spread."
  },
  {
    name: "Peach Yogurt Bowl",
    ingredients: ['peach', 'yogurt'],
    description: "Slice peach and mix into chilled yogurt."
  },
  {
    name: "Pumpkin Spice Puree",
    ingredients: ['pumpkin', 'spices'],
    description: "Blend pumpkin with warm spices for a seasonal dip."
  },
  {
    name: "Cucumber Yogurt Salad",
    ingredients: ['cucumber', 'yogurt'],
    description: "Mix chopped cucumber with yogurt for a cooling side."
  },
  {
    name: "Eggplant Chips",
    ingredients: ['eggplant', 'spices'],
    description: "Slice and bake eggplant with seasoning until crispy."
  },
  {
    name: "Orange Honey Glaze",
    ingredients: ['orange', 'honey'],
    description: "Mix orange juice with honey for a sweet drizzle."
  },
  {
    name: "Mango Chili Slices",
    ingredients: ['mango', 'chili'],
    description: "Sprinkle chili powder over mango slices for a spicy kick."
  },
  {
    name: "Boiled Corn Cups",
    ingredients: ['corn', 'butter'],
    description: "Mix boiled corn with melted butter for a quick snack."
  },
  {
    name: "Lychee Yogurt Dessert",
    ingredients: ['lychee', 'yogurt'],
    description: "Combine lychee pulp with yogurt for a tropical dessert."
  },
  {
    name: "Sweet Potato Chips",
    ingredients: ['sweet potato', 'spices'],
    description: "Slice and bake sweet potato with seasoning."
  },
  {
    name: "Grapes & Cheese Bites",
    ingredients: ['grapes', 'cheese'],
    description: "Pair grapes with cheese cubes for a sweet-savory combo."
  },
  {
    name: "Banana Yogurt Walnut Bowl",
    ingredients: ['banana', 'yogurt', 'walnuts'],
    description: "Slice banana into yogurt and top with crushed walnuts."
  },
  {
    name: "Apple Cheese Almond Snack",
    ingredients: ['apple', 'cheese', 'almonds'],
    description: "Pair apple slices with cheese cubes and toasted almonds."
  },
  {
    name: "Strawberry Yogurt Chia Cup",
    ingredients: ['strawberry', 'yogurt', 'chia seeds'],
    description: "Mix strawberries into yogurt and sprinkle with chia seeds."
  },
  {
    name: "Blueberry Milk Cashew Smoothie",
    ingredients: ['blueberry', 'milk', 'cashews'],
    description: "Blend blueberries with milk and soaked cashews."
  },
  {
    name: "Peach Yogurt Pistachio Bowl",
    ingredients: ['peach', 'yogurt', 'pistachios'],
    description: "Top yogurt with peach slices and crushed pistachios."
  },
  {
    name: "Mango Yogurt Flax Swirl",
    ingredients: ['mango', 'yogurt', 'flax seeds'],
    description: "Blend mango with yogurt and stir in flax seeds."
  },
  {
    name: "Kiwi Cheese Sunflower Snack",
    ingredients: ['kiwi', 'cheese', 'sunflower seeds'],
    description: "Serve kiwi slices with cheese and a sprinkle of seeds."
  },
  {
    name: "Pineapple Yogurt Peanut Bowl",
    ingredients: ['pineapple', 'yogurt', 'peanuts'],
    description: "Mix pineapple chunks into yogurt and top with roasted peanuts."
  },
  {
    name: "Cherry Milk Hazelnut Shake",
    ingredients: ['cherry', 'milk', 'hazelnuts'],
    description: "Blend cherries with milk and hazelnuts for a creamy shake."
  },
  {
    name: "Guava Yogurt Pumpkin Seed Mix",
    ingredients: ['guava', 'yogurt', 'pumpkin seeds'],
    description: "Combine diced guava with yogurt and crunchy seeds."
  },
  {
    name: "Fig Cheese Walnut Bites",
    ingredients: ['fig', 'cheese', 'walnuts'],
    description: "Stuff figs with cheese and top with walnut pieces."
  },
  {
    name: "Avocado Yogurt Sesame Dip",
    ingredients: ['avocado', 'yogurt', 'sesame seeds'],
    description: "Mash avocado into yogurt and garnish with sesame seeds."
  },
  {
    name: "Watermelon Yogurt Poppy Bowl",
    ingredients: ['watermelon', 'yogurt', 'poppy seeds'],
    description: "Layer watermelon cubes in yogurt and sprinkle poppy seeds."
  },
  {
    name: "Plum Yogurt Almond Swirl",
    ingredients: ['plum', 'yogurt', 'almonds'],
    description: "Mix plum puree into yogurt and top with sliced almonds."
  },
  {
    name: "Lychee Milk Cashew Cream",
    ingredients: ['lychee', 'milk', 'cashews'],
    description: "Blend lychee with milk and cashews for a silky dessert."
  },
  {
    name: "Muskmelon Yogurt Pistachio Bowl",
    ingredients: ['muskmelon', 'yogurt', 'pistachios'],
    description: "Combine muskmelon chunks with yogurt and pistachios."
  },
  {
    name: "Coconut Yogurt Chia Pudding",
    ingredients: ['coconut', 'yogurt', 'chia seeds'],
    description: "Mix coconut flakes into yogurt with chia seeds and chill."
  },
  {
    name: "Orange Yogurt Flax Cup",
    ingredients: ['orange', 'yogurt', 'flax seeds'],
    description: "Stir orange segments into yogurt and sprinkle flax seeds."
  },
  {
    name: "Lemon Cheese Sunflower Spread",
    ingredients: ['lemon', 'cheese', 'sunflower seeds'],
    description: "Blend lemon zest into cheese and top with seeds."
  },
  {
    name: "Grapes Yogurt Almond Bowl",
    ingredients: ['grapes', 'yogurt', 'almonds'],
    description: "Halve grapes and mix into yogurt with chopped almonds."
  },
  {
    name: "Papaya Yogurt Pumpkin Seed Mix",
    ingredients: ['papaya', 'yogurt', 'pumpkin seeds'],
    description: "Combine papaya cubes with yogurt and crunchy seeds."
  },
  {
    name: "Strawberry Milk Peanut Shake",
    ingredients: ['strawberry', 'milk', 'peanuts'],
    description: "Blend strawberries with milk and peanuts for a protein boost."
  },
  {
    name: "Banana Cheese Walnut Toast",
    ingredients: ['banana', 'cheese', 'walnuts'],
    description: "Top toast with banana slices, melted cheese, and walnuts."
  },
  {
    name: "Apple Yogurt Sesame Bowl",
    ingredients: ['apple', 'yogurt', 'sesame seeds'],
    description: "Mix apple chunks into yogurt and sprinkle sesame seeds."
  },
  {
    name: "Pomegranate Yogurt Pistachio Cup",
    ingredients: ['pomegranate', 'yogurt', 'pistachios'],
    description: "Layer pomegranate seeds in yogurt and top with pistachios."
  },
  {
    name: "Carrot Honey Sticks",
    ingredients: ['carrot', 'honey'],
    description: "Drizzle honey over roasted carrot sticks."
  },
  {
    name: "Spinach Egg Scramble",
    ingredients: ['spinach', 'egg'],
    description: "Sauté spinach and scramble with eggs."
  },
  {
    name: "Watermelon Chili Cubes",
    ingredients: ['watermelon', 'chili'],
    description: "Sprinkle chili powder on watermelon cubes for a zing."
  },
  {
    name: "Fig Yogurt Bowl",
    ingredients: ['fig', 'yogurt'],
    description: "Slice figs and mix into yogurt for a rich snack."
  },
  {
    name: "Onion Cheese Melt",
    ingredients: ['onion', 'cheese'],
    description: "Sauté onion and top with melted cheese."
  },
  {
    name: "Plum Honey Glaze",
    ingredients: ['plum', 'honey'],
    description: "Cook plums with honey for a sweet topping."
  },
  {
    name: "Guava Salt Snack",
    ingredients: ['guava', 'spices'],
    description: "Sprinkle salt and chili on guava slices."
  },
  {
    name: "Muskmelon Yogurt Cooler",
    ingredients: ['muskmelon', 'yogurt'],
    description: "Blend muskmelon with yogurt for a refreshing drink."
  },
  {
    name: "Mushroom Fried Rice",
    ingredients: ['rice', 'mushrooms', 'soy sauce'],
    description: "Stir-fried rice with mushrooms and Asian flavors."
  },
  {
    name: "Coconut Ladoo",
    ingredients: ['coconut', 'condensed milk', 'cardamom', 'Spices'],
    description: "Sweet coconut balls made with condensed milk."
  },
  {
    name: "Vegetable Pakora",
    ingredients: ['besan', 'onion', 'spinach', 'spices'],
    description: "Deep-fried fritters made with veggies and chickpea flour."
  },
  {
    name: "Tomato Chutney",
    ingredients: ['tomato', 'garlic', 'chili'],
    description: "Tangy and spicy chutney to pair with dosa or rice."
  },
  {
    name: "Peanut Rice",
    ingredients: ['rice', 'peanuts', 'curry leaves'],
    description: "South Indian-style rice flavored with roasted peanuts."
  },
  {
    name: "Egg Fried Rice",
    ingredients: ['rice', 'egg', 'soy sauce'],
    description: "Quick fried rice with scrambled eggs and veggies."
  },
  {
    name: "Sabudana Khichdi",
    ingredients: ['sabudana', 'potato', 'peanuts'],
    description: "Fasting-friendly dish made with soaked tapioca pearls."
  },
  {
    name: "Vegetable Cutlet",
    ingredients: ['mixed vegetables', 'breadcrumbs', 'spices'],
    description: "Crispy patties made with mashed veggies and spices."
  },
  {
    name: "Raita",
    ingredients: ['yogurt', 'cucumber', 'salt', 'Spices'],
    description: "Cooling yogurt side dish with grated cucumber."
  },
  {
    name: "Bread Pizza",
    ingredients: ['bread', 'tomato', 'cheese', 'bell pepper'],
    description: "Quick pizza-style snack using bread as base."
  },
  {
    name: "Mango Chutney",
    ingredients: ['mango', 'sugar', 'vinegar', 'chili'],
    description: "Sweet and spicy chutney made with ripe mangoes."
  },
  {
    name: "Onion Rings",
    ingredients: ['onion', 'flour', 'spices'],
    description: "Deep"
  },
  
  {
    name: "Barley Paneer Curry",
    ingredients: ["barley", "paneer", "tomato", "cumin", "Spices"],
    description: "Creamy curry of barley and paneer simmered with tomato, cumin, and Indian spices."
  },
  {
    name: "Masoor Dal Oats Tikki",
    ingredients: ["masoor dal", "oats", "onion", "green chili", "Spices"],
    description: "Hearty tikkis made from masoor dal, oats, and onion with spicy seasoning."
  },
  {
    name: "Rajma Spinach Wrap",
    ingredients: ["rajma", "spinach", "wheat roti", "paprika", "Spices"],
    description: "Whole wheat wrap filled with spiced rajma and sautéed spinach."
  },
  {
    name: "Bajra Vegetable Khichdi",
    ingredients: ["bajra", "carrot", "peas", "tur dal", "turmeric", "Spices"],
    description: "Comforting bajra khichdi with dal, carrot, peas, turmeric, and classic spices."
  },
  {
    name: "Moong Dal Dumplings",
    ingredients: ["moong dal", "wheat flour", "ginger", "cumin", "Spices"],
    description: "Steamed savory dumplings made with moong dal, wheat, ginger, cumin, and spices."
  },
  {
    name: "Sorghum Chana Stir Fry",
    ingredients: ["sorghum", "chana dal", "onion", "red chili powder", "Spices"],
    description: "Quick stir fry of sorghum and chana dal with onions and chili powder."
  },
  {
    name: "Paneer Beetroot Cutlet",
    ingredients: ["paneer", "beetroot", "bread crumbs", "coriander", "Spices"],
    description: "Crispy cutlets of paneer and beetroot seasoned with coriander and spices."
  },
  {
    name: "Oats Apple Paratha",
    ingredients: ["oats", "wheat flour", "apple", "cinnamon", "Spices"],
    description: "Stuffed paratha with oats, grated apple, cinnamon, and warming spices."
  },
  {
    name: "Tur Dal Carrot Soup",
    ingredients: ["tur dal", "carrot", "ginger", "black pepper", "Spices"],
    description: "Protein-rich soup made with tur dal, carrot, ginger, pepper, and Indian spices."
  },
  {
    name: "Masoor Dal Barley Salad",
    ingredients: ["masoor dal", "barley", "lime juice", "coriander", "Spices"],
    description: "Refreshing salad combining cooked masoor dal and barley with coriander and spice."
  },
  {
    name: "Moong Dal Methi Pancakes",
    ingredients: ["moong dal", "fenugreek leaves", "wheat flour", "cumin", "Spices"],
    description: "Savory pancakes made with moong dal and fresh methi leaves seasoned with cumin."
  },
  {
    name: "Corn Paneer Bhurji",
    ingredients: ["corn", "paneer", "green chili", "cumin", "Spices"],
    description: "Crumbled paneer sautéed with sweet corn, green chili, cumin, and spices."
  },
  {
    name: "Barley Yoghurt Bowl",
    ingredients: ["barley", "yogurt", "mint", "black salt"],
    description: "Cooling bowl with barley, yogurt, mint, and black salt for a refreshing taste."
  },
  {
    name: "Wheat Cowpea Uttapam",
    ingredients: ["wheat flour", "cowpea", "onion", "green chili", "Spices"],
    description: "Thick savory Indian pancakes topped with onion, chili, and spiced cowpea batter."
  },
  {
    name: "Pumpkin Oats Soup",
    ingredients: ["pumpkin", "oats", "milk", "black pepper", "Spices"],
    description: "Creamy pumpkin soup with oats, milk, black pepper, and a blend of spices."
  },
  {
    name: "Chana Dal Cheese Balls",
    ingredients: ["chana dal", "cheese", "bread crumbs", "oregano", "Spices"],
    description: "Crispy balls made from chana dal and cheese, seasoned with oregano and spices."
  },
  {
    name: "Rice Mango Curry",
    ingredients: ["rice", "mango", "yogurt", "mustard seeds", "Spices"],
    description: "South Indian curry with rice, mango chunks, tempered yogurt, and spices."
  },
  {
    name: "Bajra Coconut Roti",
    ingredients: ["bajra flour", "coconut", "carom seeds", "salt", "Spices"],
    description: "Flatbread made with bajra flour, coconut, carom seeds, and Indian spices."
  },
  {
    name: "Cowpea Beetroot Curry",
    ingredients: ["cowpea", "beetroot", "onion", "mustard seeds", "Spices"],
    description: "Colorful curry made from cowpea and beetroot, flavored with onion and mustard."
  },
  {
    name: "Moong Dal Pineapple Salad",
    ingredients: ["moong dal", "pineapple", "lime juice", "mint", "Spices"],
    description: "Salad of moong dal and pineapple chunks tossed in lime juice, mint, and spices."
  },
  {
    name: "Barley Chana Dal Soup",
    ingredients: ["barley", "chana dal", "garlic", "black pepper", "Spices"],
    description: "Heartwarming soup with barley and chana dal, seasoned with garlic and pepper."
  },
  {
    name: "Rye Spinach Uttapam",
    ingredients: ["rye flour", "spinach", "onion", "cumin", "Spices"],
    description: "Uttapam made with rye flour and spinach, topped with onion, cumin, and spices."
  },
  {
    name: "Bajra Banana Pancakes",
    ingredients: ["bajra flour", "banana", "milk", "cardamom", "Spices"],
    description: "Sweet pancakes with bajra flour and banana flavored with cardamom and spices."
  },
  {
    name: "Sorghum Mango Rice",
    ingredients: ["sorghum", "mango", "lime juice", "mustard seeds", "Spices"],
    description: "Tangy rice made from sorghum and mango, tempered with lime and mustard."
  },
  {
    name: "Pumpkin Paneer Sandwich",
    ingredients: ["pumpkin", "paneer", "bread", "oregano", "Spices"],
    description: "Grilled sandwich stuffed with spiced pumpkin and paneer seasoned with herbs."
  },
  {
    name: "Corn Moong Dal Chaat",
    ingredients: ["corn", "moong dal", "onion", "chili powder", "Spices"],
    description: "A tangy chaat combining boiled corn, moong dal, onion, and spice."
  },
  {
    name: "Oats Carrot Cheela",
    ingredients: ["oats", "carrot", "wheat flour", "cumin", "Spices"],
    description: "Savory cheela pancakes made with oats, grated carrot, wheat flour, and cumin."
  },
  {
    name: "Rajma Cheese Paratha",
    ingredients: ["rajma", "cheese", "wheat flour", "red chili powder", "Spices"],
    description: "Stuffed paratha filled with mashed rajma and cheese, spiced with chili."
  },
  {
    name: "Masoor Dal Chana Salad",
    ingredients: ["masoor dal", "chana dal", "lime juice", "black salt", "Spices"],
    description: "Protein-packed salad with masoor dal, chana dal, lime juice, and spices."
  },
  {
    name: "Wheat Apple Crackers",
    ingredients: ["wheat flour", "apple", "black pepper", "nutmeg", "Spices"],
    description: "Crispy crackers made from wheat flour, apple, and warming spices."
  },
  
  {
    name: "Masala Chaas",
    ingredients: ["yogurt", "water", "salt", "cumin", "mint", "Spices"],
    description: "A savory Indian buttermilk flavored with cumin, mint, and spices."
  },
  {
    name: "Barley Lemon Cooler",
    ingredients: ["barley", "lemon juice", "mint", "sugar"],
    description: "Refreshing barley water with lemon juice and mint leaves."
  },
  {
    name: "Mint Apple Slush",
    ingredients: ["apple", "mint", "ice", "lime juice"],
    description: "Slushy apple drink blended with mint and lime for freshness."
  },
  {
    name: "Spiced Mango Lassi",
    ingredients: ["mango", "yogurt", "milk", "cardamom", "Spices"],
    description: "Creamy mango lassi infused with cardamom and Indian spices."
  },
  {
    name: "Oats & Banana Smoothie",
    ingredients: ["oats", "banana", "milk", "honey"],
    description: "Energizing smoothie made with oats, ripe banana, milk, and honey."
  },
  {
    name: "Golden Turmeric Latte",
    ingredients: ["milk", "turmeric", "black pepper", "honey", "Spices"],
    description: "Warm latte with turmeric, black pepper, and sweetened with honey."
  },
  {
    name: "Papaya Buttermilk Shake",
    ingredients: ["papaya", "buttermilk", "sugar", "cardamom", "Spices"],
    description: "Fruit-forward shake combining papaya and tangy buttermilk."
  },
  {
    name: "Spiced Pineapple Juice",
    ingredients: ["pineapple", "black salt", "cumin", "Spices"],
    description: "Cool pineapple juice with black salt, cumin, and spices."
  },
  {
    name: "Coconut Water Cooler",
    ingredients: ["coconut water", "mint", "lime juice"],
    description: "Hydrating coconut water with mint and fresh lime juice."
  },
  {
    name: "Sorghum Sattu Sherbet",
    ingredients: ["sorghum sattu", "water", "lemon juice", "cumin", "Spices"],
    description: "Traditional North Indian drink using sorghum flour, lemon, and spices."
  },
  {
    name: "Pumpkin Spiced Milk",
    ingredients: ["pumpkin puree", "milk", "cinnamon", "nutmeg", "Spices"],
    description: "Autumn-inspired milk drink with pumpkin, cinnamon, and nutmeg."
  },
  {
    name: "Chana Dal Protein Shake",
    ingredients: ["chana dal", "milk", "honey", "Spices"],
    description: "Protein-rich shake using chana dal and natural honey."
  },
  {
    name: "Rajma Cocoa Smoothie",
    ingredients: ["rajma", "cocoa powder", "milk", "honey"],
    description: "High-protein smoothie made from rajma beans and cocoa."
  },
  {
    name: "Sweet Lassi",
    ingredients: ["yogurt", "milk", "sugar", "rose water"],
    description: "Classic sweet lassi with yogurt and a splash of rose water."
  },
  {
    name: "Moong Dal Lemon Cooler",
    ingredients: ["moong dal", "lemon juice", "mint", "Spices"],
    description: "Cool minty lemonade with blended moong dal."
  },
  {
    name: "Carrot Ginger Juice",
    ingredients: ["carrot", "ginger", "lime juice"],
    description: "Fresh juice with carrot and a spicy kick of ginger."
  },
  {
    name: "Spiced Apple Milk",
    ingredients: ["apple", "milk", "cinnamon", "honey", "Spices"],
    description: "Warm milk drink with apple and cinnamon for comfort."
  },
  {
    name: "Tur Dal Fizz",
    ingredients: ["tur dal", "lemon juice", "soda", "black salt", "Spices"],
    description: "Unique fizzy drink combining dal, lemon, and soda."
  },
  {
    name: "Paneer Mango Shake",
    ingredients: ["paneer", "mango", "milk", "cardamom", "Spices"],
    description: "Creamy shake with paneer, mango, milk, and cardamom."
  },
  {
    name: "Beetroot Chaas",
    ingredients: ["beetroot", "yogurt", "cumin", "mint", "Spices"],
    description: "Colorful chaas using beetroot and classic spices."
  },
  {
    name: "Cowpea Mint Cooler",
    ingredients: ["cowpea", "mint", "lemon juice", "Spices"],
    description: "Refreshing cooler using boiled cowpea and mint."
  },
  {
    name: "Barley Cocoa Shake",
    ingredients: ["barley", "cocoa powder", "milk", "honey"],
    description: "Unique chocolate shake made with barley and milk."
  },
  {
    name: "Pumpkin Cardamom Lassi",
    ingredients: ["pumpkin", "yogurt", "cardamom", "Spices"],
    description: "Lassi flavor boosted with pumpkin and cardamom."
  },
  {
    name: "Sorghum Mango Milk",
    ingredients: ["sorghum milk", "mango", "sugar"],
    description: "Sweet milk drink combining sorghum and mango."
  },
  {
    name: "Cumin Lemonade",
    ingredients: ["lemon juice", "water", "cumin", "Spices"],
    description: "Indian lemonade with a cumin and spice twist."
  },
  {
    name: "Oats Cinnamon Shake",
    ingredients: ["oats", "milk", "cinnamon", "honey", "Spices"],
    description: "Smoothie with oats, cinnamon, and honey for energy."
  },
  {
    name: "Bajra Rose Cooler",
    ingredients: ["bajra flour", "water", "rose syrup"],
    description: "Cooler combining bajra and delicate rose flavors."
  },
  {
    name: "Papaya Mint Fizz",
    ingredients: ["papaya", "soda", "mint", "lime juice"],
    description: "Papaya fruit soda with mint and lime."
  },
  {
    name: "Coconut Chana Shake",
    ingredients: ["coconut water", "chana dal", "honey"],
    description: "Light shake blending coconut water and chana dal."
  },
  {
    name: "Spiced Fruit Punch",
    ingredients: ["mixed fruits", "lime juice", "black salt", "Spices"],
    description: "Tangy punch made with seasonal fruits and spices."
  },
  
  {
    name: "Cinnamon Oats Frappé",
    ingredients: ["oats", "milk", "ice", "cinnamon", "Spices"],
    description: "Chilled oatmeal frappé with a touch of cinnamon and Indian spices."
  },
  {
    name: "Ginger Lime Soda",
    ingredients: ["ginger", "lime juice", "soda", "honey"],
    description: "Tangy ginger soda with a splash of lime and a hint of sweetness."
  },
  {
    name: "Mint Paneer Lassi",
    ingredients: ["paneer", "yogurt", "mint", "Spices"],
    description: "A thick lassi combining paneer and mint for a protein boost."
  },
  {
    name: "Barley Cardamom Shake",
    ingredients: ["barley", "milk", "cardamom", "Spices"],
    description: "Rich milk shake with barley and aromatic cardamom spice."
  },
  {
    name: "Papaya Lemon Refresher",
    ingredients: ["papaya", "lemon juice", "ice", "mint"],
    description: "Bright smoothie with papaya, lemon, and fresh mint."
  },
  {
    name: "Chana Dal Sattu Drink",
    ingredients: ["chana dal sattu", "water", "lime juice", "black salt"],
    description: "Traditional cooling drink made with chana dal flour and lime."
  },
  {
    name: "Mango Tur Dal Cooler",
    ingredients: ["mango", "tur dal", "ice", "Spices"],
    description: "A rich yellow mango-tur dal beverage seasoned with Indian spices."
  },
  {
    name: "Moong Dal Cocoa Smoothie",
    ingredients: ["moong dal", "cocoa powder", "milk", "honey"],
    description: "Chocolatey smoothie rich in protein and flavor."
  },
  {
    name: "Cowpea Masala Lemonade",
    ingredients: ["cowpea water", "lemon juice", "cumin", "Spices"],
    description: "Savory lemonade topped with cowpea water and masala."
  },
  {
    name: "Rajma Coconut Cooler",
    ingredients: ["rajma", "coconut water", "lime juice", "mint"],
    description: "An unusual cocktail of coconut water, kidney beans, and citrus."
  },
  {
    name: "Bajra Fennel Awaken",
    ingredients: ["bajra flour", "fennel seeds", "milk", "honey", "Spices"],
    description: "Unique beverage with bajra and aromatic fennel, sweetened with honey."
  },
  {
    name: "Peach Sorghum Smoothie",
    ingredients: ["peach", "sorghum milk", "yogurt", "Spices"],
    description: "Fruity smoothie using peach, milky sorghum, and yogurt."
  },
  {
    name: "Pumpkin Mocha Latte",
    ingredients: ["pumpkin puree", "milk", "cocoa powder", "coffee", "Spices"],
    description: "Autumn-inspired coffee with pumpkin and mocha flavor."
  },
  {
    name: "Barley Rose Milk",
    ingredients: ["barley water", "rose syrup", "milk"],
    description: "Floral barley milk sweetened lightly with rose syrup."
  },
  {
    name: "Spinach Lemon Tonic",
    ingredients: ["spinach", "lemon juice", "soda", "black salt"],
    description: "Green tonic that energizes with spinach, lemon, and soda."
  },
  {
    name: "Carrot Apple Refresher",
    ingredients: ["carrot", "apple", "mint", "ice"],
    description: "Fresh juice of carrot and apple blended with mint."
  },
  {
    name: "Coconut Mint Cooler",
    ingredients: ["coconut milk", "mint", "lime juice"],
    description: "Chilled coconut milk with mint leaves and a squeeze of lime."
  },
  {
    name: "Beetroot Buttermilk",
    ingredients: ["beetroot", "buttermilk", "cumin", "Spices"],
    description: "A light and healthy buttermilk colored naturally with beetroot."
  },
  {
    name: "Ginger Apple Punch",
    ingredients: ["ginger", "apple", "honey", "soda"],
    description: "A zesty, bubbly apple punch with a ginger kick."
  },
  {
    name: "Pumpkin Sour",
    ingredients: ["pumpkin juice", "lime juice", "black salt"],
    description: "Sour punchy drink using pumpkin and lime."
  },
  {
    name: "Paneer Cardamom Milkshake",
    ingredients: ["paneer", "milk", "cardamom", "Spices"],
    description: "Creamy milkshake blended with paneer and a hint of spice."
  },
  {
    name: "Masala Rye Lemonade",
    ingredients: ["rye water", "lemon juice", "masala", "Spices"],
    description: "Zesty rye lemonade with masala for extra flavor."
  },
  {
    name: "Tur Dal Orange Cooler",
    ingredients: ["tur dal", "orange juice", "ice", "Spices"],
    description: "Bright and tangy dal-based orange drink."
  },
  {
    name: "Cowpea Yogurt Shake",
    ingredients: ["cowpea", "yogurt", "mint", "Spices"],
    description: "Protein-rich shake using blended cowpea and yogurt."
  },
  {
    name: "Moong Dal Mango Lassi",
    ingredients: ["moong dal", "mango", "yogurt", "cardamom", "Spices"],
    description: "Classic mango lassi with an added boost from moong dal."
  },
  {
    name: "Sorghum Mint Thandai",
    ingredients: ["sorghum flour", "milk", "mint", "mixed nuts", "Spices"],
    description: "Summer special nutty milk drink using sorghum and mint."
  },
  {
    name: "Chana Dal Strawberry Cooler",
    ingredients: ["chana dal", "strawberry", "lime juice", "ice"],
    description: "Chilled strawberry drink with boiled chana dal for body."
  },
  {
    name: "Papaya Barley Tonic",
    ingredients: ["papaya", "barley water", "lime juice", "mint"],
    description: "Detox beverage with papaya, barley, and lime."
  },
  {
    name: "Bajra Cocoa Chill",
    ingredients: ["bajra flour", "cocoa powder", "milk", "ice"],
    description: "Icy chocolate drink with a hearty bajra boost."
  },
  {
    name: "Pumpkin Spiced Cooler",
    ingredients: ["pumpkin juice", "lime juice", "cinnamon", "Spices"],
    description: "Spiced pumpkin drink—a cool, refreshing summer treat."
  },
  
  {
    name: "Corn Cheese Balls",
    ingredients: ["corn", "cheese", "bread crumbs", "oregano", "Spices"],
    description: "Deep-fried balls made from sweet corn and cheese, seasoned with oregano and spices."
  },
  {
    name: "Spinach Moong Dal Mini Pancakes",
    ingredients: ["spinach", "moong dal", "wheat flour", "cumin", "Spices"],
    description: "Mini pancakes with spinach, moong dal, and crisped with classic spices."
  },
  {
    name: "Rajma Beetroot Cutlet",
    ingredients: ["rajma", "beetroot", "bread crumbs", "black pepper", "Spices"],
    description: "Crispy patties of kidney beans and beetroot, flavored with black pepper."
  },
  {
    name: "Masoor Dal & Oats Nuggets",
    ingredients: ["masoor dal", "oats", "onion", "garam masala", "Spices"],
    description: "Baked nuggets combining masoor dal, oats, onion, and aromatic spices."
  },
  {
    name: "Paneer Methi Sticks",
    ingredients: ["paneer", "fenugreek leaves", "wheat flour", "carom seeds", "Spices"],
    description: "Delicate sticks with paneer and fenugreek, seasoned and baked."
  },
  {
    name: "Sorghum Mini Wraps",
    ingredients: ["sorghum", "spinach", "cheese", "paprika", "Spices"],
    description: "Mini wraps using sorghum rotis, filled with spiced cheese and spinach."
  },
  {
    name: "Pumpkin Cheese Tikkis",
    ingredients: ["pumpkin", "cheese", "bread crumbs", "cumin", "Spices"],
    description: "Grilled tikkis blending pumpkin puree with cheese and a hint of cumin."
  },
  {
    name: "Barley Vegetable Sizzlers",
    ingredients: ["barley", "carrot", "peas", "black pepper", "Spices"],
    description: "Mini sizzler patties made from barley, vegetables, and spices."
  },
  {
    name: "Moong Dal Papad Nachos",
    ingredients: ["moong dal", "papad", "chili powder", "Spices"],
    description: "Crunchy nachos with moong dal flour, spiced and baked."
  },
  {
    name: "Chana Dal Cheese Toast Fingers",
    ingredients: ["chana dal", "cheese", "bread", "oregano", "Spices"],
    description: "Toast fingers with chana dal paste and cheese, topped with herbs."
  },
  {
    name: "Paneer Carrot Rolls",
    ingredients: ["paneer", "carrot", "wheat flour", "coriander", "Spices"],
    description: "Mini rolls of paneer and carrot wrapped in wheat flour roti."
  },
  {
    name: "Bajra Spinach Squares",
    ingredients: ["bajra flour", "spinach", "mustard seeds", "Spices"],
    description: "Savory baked squares with bajra and spinach, sprinkled with mustard seeds."
  },
  {
    name: "Cowpea Potato Chaat",
    ingredients: ["cowpea", "potato", "lime juice", "black salt", "Spices"],
    description: "Tangy chaat combining boiled cowpea and potato dressed with lime."
  },
  {
    name: "Oats Apple Mini Fritters",
    ingredients: ["oats", "apple", "milk", "cinnamon", "Spices"],
    description: "Sweet small fritters made with oats and apple, fried crisp."
  },
  {
    name: "Rye Onion Rings",
    ingredients: ["rye flour", "onion", "black pepper", "Spices"],
    description: "Crispy onion rings coated in rye flour batter and fried."
  },
  {
    name: "Masoor Dal Vegetable Skewers",
    ingredients: ["masoor dal", "mixed vegetables", "turmeric", "Spices"],
    description: "Skewered grilled veggies and masoor dal, seasoned and roasted."
  },
  {
    name: "Barley Pumpkin Sliders",
    ingredients: ["barley", "pumpkin", "black pepper", "Spices"],
    description: "Mini slider buns made with barley, stuffed with roasted pumpkin."
  },
  {
    name: "Paneer Rye Tartlets",
    ingredients: ["paneer", "rye flour", "mint", "Spices"],
    description: "Small tartlets of paneer mixed with rye and fresh mint."
  },
  {
    name: "Carrot Chana Dal Croquettes",
    ingredients: ["carrot", "chana dal", "coriander", "Spices"],
    description: "Pan-fried carrot and chana dal croquettes."
  },
  {
    name: "Pumpkin Cowpea Mini Idli",
    ingredients: ["pumpkin", "cowpea", "rice flour", "mustard seeds", "Spices"],
    description: "Soft mini idlis of pumpkin and cowpea, tempered with mustard seeds."
  },
  {
    name: "Moong Dal Tomato Bites",
    ingredients: ["moong dal", "tomato", "green chili", "Spices"],
    description: "Spiced bites with moong dal and juicy tomato, baked or fried."
  },
  {
    name: "Bajra Palak Tikkis",
    ingredients: ["bajra flour", "spinach", "onion", "garam masala", "Spices"],
    description: "Savory patties with bajra, spinach, and spicy masala."
  },
  {
    name: "Barley Corn Dippers",
    ingredients: ["barley", "corn", "mint", "Spices"],
    description: "Baked dippers with barley and corn, served with fresh mint chutney."
  },
  {
    name: "Spinach Rajma Pinwheels",
    ingredients: ["spinach", "rajma", "wheat flour", "paprika", "Spices"],
    description: "Rolled pinwheels with spinach and spiced rajma filling."
  },
  {
    name: "Cowpea Beetroot Bites",
    ingredients: ["cowpea", "beetroot", "mint", "Spices"],
    description: "Baked mini bites with cowpea and beetroot, accented by mint."
  },
  {
    name: "Paneer Mango Skewers",
    ingredients: ["paneer", "mango", "lime juice", "Spices"],
    description: "Grilled skewers with paneer cubes and mango chunks."
  },
  {
    name: "Pumpkin Apple Tart",
    ingredients: ["pumpkin", "apple", "rye flour", "cinnamon", "Spices"],
    description: "Mini tarts made with pumpkin, apple, and rye flour."
  },
  {
    name: "Chana Dal Potato Poppers",
    ingredients: ["chana dal", "potato", "coriander", "Spices"],
    description: "Crispy potato poppers with a chana dal center."
  },
  {
    name: "Moong Dal Cheese Shots",
    ingredients: ["moong dal", "cheese", "paprika", "Spices"],
    description: "Small baked cheese shots with spiced moong dal mixture."
  },
  {
    name: "Barley Sattu Sticks",
    ingredients: ["barley", "sattu flour", "carom seeds", "Spices"],
    description: "Savory snack sticks made from barley and sattu flour."
  },
  
  {
    name: "Paneer Spinach Stir Fry",
    ingredients: ["paneer", "spinach", "cumin", "garam masala", "Spices"],
    description: "Quick fry of paneer cubes and spinach tossed with cumin and garam masala."
  },
  {
    name: "Yogurt Potato Salad",
    ingredients: ["yogurt", "potato", "black salt", "coriander", "Spices"],
    description: "Creamy potato salad dressed in yogurt and sprinkled with herbs and spices."
  },
  {
    name: "Milk & Oats Porridge",
    ingredients: ["milk", "oats", "cardamom", "honey", "Spices"],
    description: "Fiber-rich breakfast porridge with oats simmered in milk and cardamom."
  },
  {
    name: "Cheese Pumpkin Bites",
    ingredients: ["cheese", "pumpkin", "bread crumbs", "black pepper", "Spices"],
    description: "Mini baked bites of cheese mixed with spiced pumpkin."
  },
  {
    name: "Paneer Corn Rolls",
    ingredients: ["paneer", "corn", "wheat flour wrap", "mint", "Spices"],
    description: "Wraps stuffed with paneer and corn, flavored with mint and Indian spices."
  },
  {
    name: "Yogurt Beetroot Dip",
    ingredients: ["yogurt", "beetroot", "cumin", "Spices"],
    description: "Vibrant dip made with yogurt and roasted beetroot, seasoned with cumin."
  },
  {
    name: "Milk Mango Shake",
    ingredients: ["milk", "mango", "cardamom", "honey", "Spices"],
    description: "Sweet and cooling shake combining milk, mango, and cardamom."
  },
  {
    name: "Chana Dal Paneer Nuggets",
    ingredients: ["chana dal", "paneer", "onion", "garam masala", "Spices"],
    description: "Crispy nuggets made from chana dal and paneer, flavored with spices."
  },
  {
    name: "Cheese Wheat Crackers",
    ingredients: ["cheese", "wheat flour", "black pepper", "carom seeds", "Spices"],
    description: "Savory cheese crackers baked with wheat flour and spices."
  },
  {
    name: "Paneer Methi Paratha",
    ingredients: ["paneer", "fenugreek leaves", "wheat flour", "cumin", "Spices"],
    description: "Stuffed paratha with paneer and fresh methi leaves, spiced with cumin."
  },
  {
    name: "Yogurt Carrot Raita",
    ingredients: ["yogurt", "carrot", "coriander", "mustard seeds", "Spices"],
    description: "Cooling raita with yogurt, grated carrot, and mustard seeds."
  },
  {
    name: "Milk Rice Kheer",
    ingredients: ["milk", "rice", "cardamom", "almonds", "Spices"],
    description: "Classic Indian rice pudding simmered in milk and sweetened with cardamom."
  },
  {
    name: "Paneer Mango Salsa",
    ingredients: ["paneer", "mango", "lime juice", "mint", "Spices"],
    description: "Refreshing starter combining paneer cubes, mango, and zesty lime."
  },
  {
    name: "Cheese Bajra Tostada",
    ingredients: ["cheese", "bajra flour", "onion", "oregano", "Spices"],
    description: "Crispy bajra tostadas topped with cheese and onion."
  },
  {
    name: "Yogurt Oats Tikki",
    ingredients: ["yogurt", "oats", "green chili", "coriander", "Spices"],
    description: "Pan-fried tikki made tasty by creamy yogurt and oats blend."
  },
  {
    name: "Paneer Pumpkin Kebabs",
    ingredients: ["paneer", "pumpkin", "garam masala", "mint", "Spices"],
    description: "Tender kebabs blending pumpkin and paneer, spiced and grilled."
  },
  {
    name: "Milk and Apple Smoothie",
    ingredients: ["milk", "apple", "cinnamon", "honey", "Spices"],
    description: "Healthy smoothie with apple, milk, cinnamon, and honey."
  },
  {
    name: "Cheese Rajma Cutlet",
    ingredients: ["cheese", "rajma", "potato", "paprika", "Spices"],
    description: "Baked cutlets with cheese and kidney beans, topped with paprika."
  },
  {
    name: "Paneer Tur Dal Pancakes",
    ingredients: ["paneer", "tur dal", "wheat flour", "black pepper", "Spices"],
    description: "Savory pancakes with paneer and tur dal batter, seasoned with spices."
  },
  {
    name: "Yogurt Spinach Dip",
    ingredients: ["yogurt", "spinach", "cumin", "lime juice", "Spices"],
    description: "Creamy spinach dip with tangy yogurt and cumin."
  },
  {
    name: "Milk Pumpkin Soup",
    ingredients: ["milk", "pumpkin", "ginger", "black pepper", "Spices"],
    description: "Silky soup made from pumpkin and milk, spiced with black pepper."
  },
  {
    name: "Cheese Sattu Balls",
    ingredients: ["cheese", "sattu flour", "mint", "coriander", "Spices"],
    description: "Nutritious snack balls made with cheese, sattu, and fresh herbs."
  },
  {
    name: "Paneer Barley Skewers",
    ingredients: ["paneer", "barley", "cumin", "oregano", "Spices"],
    description: "Grilled skewers with marinated paneer and cooked barley."
  },
  {
    name: "Yogurt Sorghum Salad",
    ingredients: ["yogurt", "sorghum", "carrot", "mint", "Spices"],
    description: "Tangy salad combining yogurt with steamed sorghum pearls and fresh vegetables."
  },
  {
    name: "Milk Beetroot Cooler",
    ingredients: ["milk", "beetroot", "cinnamon", "honey", "Spices"],
    description: "Refreshing cooler from beetroot blended with milk and cinnamon."
  },
  {
    name: "Cheese Spinach Dip",
    ingredients: ["cheese", "spinach", "garlic", "black pepper", "Spices"],
    description: "Warm cheese and spinach dip flavored with garlic and black pepper."
  },
  {
    name: "Paneer Mango Paratha",
    ingredients: ["paneer", "mango", "wheat flour", "cardamom", "Spices"],
    description: "Sweet paratha combining paneer with mango and cardamom aroma."
  },
  {
    name: "Yogurt Cowpea Chaat",
    ingredients: ["yogurt", "cowpea", "lime juice", "black salt", "Spices"],
    description: "Healthy cowpea chaat topped with yogurt and lime."
  },
  {
    name: "Milk Sattu Smoothie",
    ingredients: ["milk", "sattu flour", "cardamom", "honey", "Spices"],
    description: "Protein-packed smoothie with milk and sattu, flavored with cardamom."
  },
  {
    name: "Paneer Oats Croquettes",
    ingredients: ["paneer", "oats", "onion", "chilies", "Spices"],
    description: "Baked croquettes made of oats and paneer, mildly spiced."
  },
  {
    name: "Paneer Carrot Paratha",
    ingredients: ["paneer", "carrot", "wheat flour", "cumin", "Spices"],
    description: "Stuffed paratha with a filling of paneer, carrot, and Indian spices."
  },
  {
    name: "Spinach Potato Paratha",
    ingredients: ["spinach", "potato", "wheat flour", "garam masala", "Spices"],
    description: "Classic Indian paratha filled with mashed spiced potato and spinach."
  },
  {
    name: "Oats Onion Paratha",
    ingredients: ["oats", "onion", "wheat flour", "carom seeds", "Spices"],
    description: "Stuffed paratha with oats and caramelized onions, flavored with carom seeds."
  },
  {
    name: "Bajra Cheese Paratha",
    ingredients: ["bajra flour", "cheese", "mint", "Spices"],
    description: "Savory cheese-stuffed bajra paratha with a hint of mint."
  },
  {
    name: "Barley Vegetable Paratha",
    ingredients: ["barley flour", "mixed vegetables", "coriander", "Spices"],
    description: "A hearty paratha loaded with seasonal vegetables and fresh herbs."
  },
  {
    name: "Rajma Paratha",
    ingredients: ["rajma", "wheat flour", "onion", "black pepper", "Spices"],
    description: "Paratha stuffed with spicy mashed rajma and onions."
  },
  {
    name: "Pumpkin Paratha",
    ingredients: ["pumpkin", "wheat flour", "cumin", "Spices"],
    description: "Soft paratha with a mildly spiced pumpkin filling."
  },
  {
    name: "Sorghum Corn Paratha",
    ingredients: ["sorghum flour", "corn", "green chili", "Spices"],
    description: "Rustic paratha filled with spiced corn kernels."
  },
  {
    name: "Paneer Spinach Paratha",
    ingredients: ["paneer", "spinach", "wheat flour", "coriander", "Spices"],
    description: "Green paratha with a protein-rich paneer and spinach filling."
  },
  {
    name: "Moong Dal Stuffed Paratha",
    ingredients: ["moong dal", "cumin", "wheat flour", "Spices"],
    description: "Paratha filled with a spiced moong dal and cumin mixture."
  },
  {
    name: "Methi Bajra Paratha",
    ingredients: ["bajra flour", "fenugreek leaves", "mustard seeds", "Spices"],
    description: "Nutritious bajra paratha stuffed with fresh methi leaves."
  },
  {
    name: "Cheese Apple Paratha",
    ingredients: ["cheese", "apple", "wheat flour", "nutmeg", "Spices"],
    description: "Unique sweet-salty paratha with grated apple and cheese."
  },
  {
    name: "Beetroot Paratha",
    ingredients: ["beetroot", "wheat flour", "coriander", "Spices"],
    description: "Bright red paratha made with grated beetroot and spices."
  },
  {
    name: "Carrot Sattu Paratha",
    ingredients: ["carrot", "sattu flour", "wheat flour", "mint", "Spices"],
    description: "Energy-boosting paratha stuffed with carrot and sattu."
  },
  {
    name: "Paneer Mango Paratha",
    ingredients: ["paneer", "mango", "wheat flour", "cardamom", "Spices"],
    description: "Sweet paratha combining paneer with mango and cardamom aroma."
  },
  {
    name: "Cowpea Paratha",
    ingredients: ["cowpea", "onion", "wheat flour", "lime juice", "Spices"],
    description: "Spiced cowpea and onion filling graces this protein-rich paratha."
  },
  {
    name: "Pumpkin Cheese Paratha",
    ingredients: ["pumpkin", "cheese", "wheat flour", "black pepper", "Spices"],
    description: "Paratha filled with a pumpkin and melty cheese mixture."
  },
  {
    name: "Spinach Barley Paratha",
    ingredients: ["barley flour", "spinach", "cumin", "Spices"],
    description: "Green paratha with barley flour and spinach stuffing."
  },
  {
    name: "Chana Dal Paratha",
    ingredients: ["chana dal", "coriander", "wheat flour", "Spices"],
    description: "Crumbly and flavorful paratha featuring spiced chana dal."
  },
  {
    name: "Rye Potato Paratha",
    ingredients: ["rye flour", "potato", "garam masala", "Spices"],
    description: "Paratha stuffed with potato and rye flour, seasoned with garam masala."
  },
  {
    name: "Oats Beetroot Paratha",
    ingredients: ["oats", "beetroot", "wheat flour", "mint", "Spices"],
    description: "Healthy oats and beetroot paratha accented by mint."
  },
  {
    name: "Paneer Sattu Paratha",
    ingredients: ["paneer", "sattu flour", "wheat flour", "cumin", "Spices"],
    description: "Stuffed paratha combining sattu flour and crumbled paneer."
  },
  {
    name: "Mango Coconut Paratha",
    ingredients: ["mango", "coconut", "wheat flour", "cardamom", "Spices"],
    description: "Exotic sweet paratha pair of mango and coconut with spices."
  },
  {
    name: "Bajra Methi Paneer Paratha",
    ingredients: ["bajra flour", "fenugreek leaves", "paneer", "Spices"],
    description: "Millet paratha filled with a mix of methi and paneer."
  },
  {
    name: "Barley Corn Paratha",
    ingredients: ["barley flour", "corn", "green chili", "oregano", "Spices"],
    description: "Paratha combining barley flour and fresh corn spiced with oregano."
  },
  {
    name: "Pumpkin Tur Dal Paratha",
    ingredients: ["pumpkin", "tur dal", "wheat flour", "coriander", "Spices"],
    description: "Spiced paratha stuffed with pumpkin and cooked tur dal."
  },
  {
    name: "Cheese Mint Paratha",
    ingredients: ["cheese", "mint", "wheat flour", "black pepper", "Spices"],
    description: "Cheese-filled paratha with refreshing mint and pepper."
  },
  {
    name: "Carrot Moong Dal Paratha",
    ingredients: ["carrot", "moong dal", "wheat flour", "cumin", "Spices"],
    description: "Paratha stuffed with carrot and moong dal, flavored with cumin."
  },
  {
    name: "Spinach Rajma Paratha",
    ingredients: ["spinach", "rajma", "onion", "wheat flour", "Spices"],
    description: "Paratha with a nutritious filling of spinach, rajma, and onion."
  },
  {
    name: "Paneer Rye Paratha",
    ingredients: ["paneer", "rye flour", "carom seeds", "Spices"],
    description: "Healthy rye paratha filled with paneer and carom seeds."
  },
  {
    name: "Corn Apple Paratha",
    ingredients: ["corn", "apple", "wheat flour", "cinnamon", "Spices"],
    description: "Unusual paratha combining sweet apple and savory corn spiced with cinnamon."
  }

];

  function getSelectedIngredients() {
    return Array.from(document.querySelectorAll("input[type=checkbox]:checked"))
      .map(cb => cb.value.trim().toLowerCase());
  }

  function findMatchingRecipes(selectedIngredients) {
    return recipeDatabase.filter(recipe =>
      recipe.ingredients.every(ing => selectedIngredients.includes(ing.trim().toLowerCase()))
    );
  }

  function displayRecipes(recipes) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    if (recipes.length === 0) {
      recipeList.innerHTML = "<p>No recipes found. Try selecting more ingredients.</p>";
      return;
    }

    recipes.forEach(recipe => {
      const card = document.createElement("div");
      card.className = "recipe-card";
      card.innerHTML = `
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
        <strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}
      `;
      recipeList.appendChild(card);
    });

    document.getElementById("recipes").scrollIntoView({ behavior: "smooth" });
  }

  function generateRecipes() {
    const selectedIngredients = getSelectedIngredients();
    const matchingRecipes = findMatchingRecipes(selectedIngredients);
    displayRecipes(matchingRecipes);
  }

  document.getElementById("ingredient-search").addEventListener("input", function () {
    const query = this.value.toLowerCase().trim();
    const labels = document.querySelectorAll("#ingredients .category label");

    labels.forEach(label => {
      const text = label.textContent.toLowerCase();
      if (text.includes(query)) {
        label.style.display = "flex";
      } else {
        label.style.display = "none";
      }
    });
  });


