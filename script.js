// ============================================================
// RSP FAMILY MART
// COMPLETE SCRIPT.JS
// ============================================================


// ============================================================
// PRODUCT DATA
// ============================================================

const products = [

    // ================= VEGETABLES =================

    {
        id: 1,
        name: "Potato",
        category: "Vegetables",
        price: 30,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500",
        description: "Fresh potatoes"
    },

    {
        id: 2,
        name: "Tomato",
        category: "Vegetables",
        price: 40,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500",
        description: "Fresh red tomatoes"
    },

    {
        id: 3,
        name: "Onion",
        category: "Vegetables",
        price: 35,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1508747703725-719777637510?w=500",
        description: "Fresh onions"
    },

    {
        id: 4,
        name: "Carrot",
        category: "Vegetables",
        price: 50,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=500",
        description: "Fresh carrots"
    },

    {
        id: 5,
        name: "Cauliflower",
        category: "Vegetables",
        price: 45,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=500",
        description: "Fresh cauliflower"
    },

    {
        id: 6,
        name: "Broccoli",
        category: "Vegetables",
        price: 70,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=500",
        description: "Fresh broccoli"
    },

    {
        id: 7,
        name: "Spinach",
        category: "Vegetables",
        price: 30,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=500",
        description: "Fresh green spinach"
    },

    {
        id: 8,
        name: "Capsicum",
        category: "Vegetables",
        price: 60,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=500",
        description: "Fresh capsicum"
    },

    {
        id: 9,
        name: "Cucumber",
        category: "Vegetables",
        price: 35,
        rating: 4.3,
        image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=500",
        description: "Fresh cucumber"
    },

    {
        id: 10,
        name: "Green Peas",
        category: "Vegetables",
        price: 80,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?w=500",
        description: "Fresh green peas"
    },


    // ================= FRUITS =================

    {
        id: 11,
        name: "Apple",
        category: "Fruits",
        price: 120,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=500",
        description: "Fresh red apples"
    },

    {
        id: 12,
        name: "Banana",
        category: "Fruits",
        price: 50,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=500",
        description: "Fresh bananas"
    },

    {
        id: 13,
        name: "Mango",
        category: "Fruits",
        price: 100,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=500",
        description: "Sweet fresh mango"
    },

    {
        id: 14,
        name: "Orange",
        category: "Fruits",
        price: 80,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500",
        description: "Juicy oranges"
    },

    {
        id: 15,
        name: "Grapes",
        category: "Fruits",
        price: 90,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=500",
        description: "Fresh grapes"
    },


    // ================= DRY FRUITS =================

    {
        id: 16,
        name: "Almond",
        category: "Dry Fruits",
        price: 350,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1574570066131-8b5e7c5e6c84?w=500",
        description: "Premium almonds"
    },

    {
        id: 17,
        name: "Cashew",
        category: "Dry Fruits",
        price: 400,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=500",
        description: "Premium cashews"
    },

    {
        id: 18,
        name: "Walnut",
        category: "Dry Fruits",
        price: 450,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1599599810694-e9e4c3c6c2d4?w=500",
        description: "Premium walnuts"
    },

    {
        id: 19,
        name: "Raisins",
        category: "Dry Fruits",
        price: 220,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1596591868231-05e3c3b5f6d0?w=500",
        description: "Sweet raisins"
    },

    {
        id: 20,
        name: "Pistachio",
        category: "Dry Fruits",
        price: 500,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1611599537845-1c7aca0091c0?w=500",
        description: "Premium pistachios"
    },


    // ================= FAST FOOD =================

    {
        id: 21,
        name: "Pizza",
        category: "Fast Food",
        price: 199,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500",
        description: "Cheesy delicious pizza"
    },

    {
        id: 22,
        name: "Burger",
        category: "Fast Food",
        price: 129,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500",
        description: "Fresh tasty burger"
    },

    {
        id: 23,
        name: "French Fries",
        category: "Fast Food",
        price: 99,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=500",
        description: "Crispy french fries"
    },

    {
        id: 24,
        name: "Momos",
        category: "Fast Food",
        price: 120,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?w=500",
        description: "Hot steamed momos"
    },

    {
        id: 25,
        name: "Pasta",
        category: "Fast Food",
        price: 149,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500",
        description: "Creamy pasta"
    },


    // ================= INDIAN FOOD =================

    {
        id: 26,
        name: "Samosa",
        category: "Indian Food",
        price: 20,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        description: "Crispy samosa"
    },

    {
        id: 27,
        name: "Dosa",
        category: "Indian Food",
        price: 80,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?w=500",
        description: "South Indian dosa"
    },

    {
        id: 28,
        name: "Idli",
        category: "Indian Food",
        price: 60,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500",
        description: "Soft idli"
    },

    {
        id: 29,
        name: "Paneer",
        category: "Indian Food",
        price: 220,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=500",
        description: "Fresh paneer"
    },

    {
        id: 30,
        name: "Chole Bhature",
        category: "Indian Food",
        price: 130,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500",
        description: "Delicious chole bhature"
    },


    // ================= NON VEG =================

    {
        id: 31,
        name: "Chicken",
        category: "Non-Veg",
        price: 280,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=500",
        description: "Fresh chicken"
    },

    {
        id: 32,
        name: "Chicken Biryani",
        category: "Non-Veg",
        price: 220,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1563379091339-03246963d96c?w=500",
        description: "Delicious chicken biryani"
    },

    {
        id: 33,
        name: "Fish",
        category: "Non-Veg",
        price: 300,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1534766555764-ce748c65f7e5?w=500",
        description: "Fresh fish"
    },

    {
        id: 34,
        name: "Eggs",
        category: "Non-Veg",
        price: 80,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=500",
        description: "Fresh eggs"
    },

    {
        id: 35,
        name: "Mutton",
        category: "Non-Veg",
        price: 650,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=500",
        description: "Fresh mutton"
    },


    // ================= RICE & BIRYANI =================

    {
        id: 36,
        name: "Basmati Rice",
        category: "Rice & Biryani",
        price: 180,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
        description: "Premium basmati rice"
    },

    {
        id: 37,
        name: "Brown Rice",
        category: "Rice & Biryani",
        price: 160,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=500",
        description: "Healthy brown rice"
    },

    {
        id: 38,
        name: "Veg Biryani",
        category: "Rice & Biryani",
        price: 180,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?w=500",
        description: "Vegetable biryani"
    },

    {
        id: 39,
        name: "Jeera Rice",
        category: "Rice & Biryani",
        price: 120,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=500",
        description: "Aromatic jeera rice"
    },

    {
        id: 40,
        name: "Pulao",
        category: "Rice & Biryani",
        price: 140,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=500",
        description: "Delicious pulao"
    },


    // ================= COLD DRINKS =================

    {
        id: 41,
        name: "Cola",
        category: "Cold Drinks",
        price: 45,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=500",
        description: "Chilled cola"
    },

    {
        id: 42,
        name: "Orange Juice",
        category: "Cold Drinks",
        price: 80,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500",
        description: "Fresh orange juice"
    },

    {
        id: 43,
        name: "Mango Juice",
        category: "Cold Drinks",
        price: 80,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500",
        description: "Fresh mango juice"
    },

    {
        id: 44,
        name: "Lemon Juice",
        category: "Cold Drinks",
        price: 50,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1523677011781-c91d1bbe2f1f?w=500",
        description: "Fresh lemon drink"
    },

    {
        id: 45,
        name: "Coconut Water",
        category: "Cold Drinks",
        price: 60,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=500",
        description: "Fresh coconut water"
    },


    // ================= TEA COFFEE =================

    {
        id: 46,
        name: "Tea",
        category: "Tea & Coffee",
        price: 150,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500",
        description: "Premium tea"
    },

    {
        id: 47,
        name: "Coffee",
        category: "Tea & Coffee",
        price: 220,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
        description: "Premium coffee"
    },

    {
        id: 48,
        name: "Green Tea",
        category: "Tea & Coffee",
        price: 180,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500",
        description: "Healthy green tea"
    },

    {
        id: 49,
        name: "Cappuccino",
        category: "Tea & Coffee",
        price: 160,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?w=500",
        description: "Hot cappuccino"
    },

    {
        id: 50,
        name: "Cold Coffee",
        category: "Tea & Coffee",
        price: 140,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500",
        description: "Cold creamy coffee"
    },


    // ================= DESSERTS =================

    {
        id: 51,
        name: "Chocolate Cake",
        category: "Desserts",
        price: 350,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500",
        description: "Chocolate cake"
    },

    {
        id: 52,
        name: "Ice Cream",
        category: "Desserts",
        price: 100,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500",
        description: "Creamy ice cream"
    },

    {
        id: 53,
        name: "Gulab Jamun",
        category: "Desserts",
        price: 90,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        description: "Sweet gulab jamun"
    },

    {
        id: 54,
        name: "Rasgulla",
        category: "Desserts",
        price: 90,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
        description: "Soft rasgulla"
    },

    {
        id: 55,
        name: "Donut",
        category: "Desserts",
        price: 80,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500",
        description: "Sweet donut"
    },


    // ================= HEALTHY FOOD =================

    {
        id: 56,
        name: "Oats",
        category: "Healthy Food",
        price: 180,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=500",
        description: "Healthy oats"
    },

    {
        id: 57,
        name: "Honey",
        category: "Healthy Food",
        price: 250,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=500",
        description: "Natural honey"
    },

    {
        id: 58,
        name: "Peanut Butter",
        category: "Healthy Food",
        price: 280,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1521305916504-4a1121188589?w=500",
        description: "Creamy peanut butter"
    },

    {
        id: 59,
        name: "Corn Flakes",
        category: "Healthy Food",
        price: 200,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=500",
        description: "Crunchy corn flakes"
    },

    {
        id: 60,
        name: "Mixed Seeds",
        category: "Healthy Food",
        price: 300,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1515543904379-3d757afe72e4?w=500",
        description: "Healthy mixed seeds"
    },


    // ================= CLOTHES =================

    {
        id: 61,
        name: "Men T-Shirt",
        category: "Clothes",
        price: 499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
        description: "Comfortable men's t-shirt"
    },

    {
        id: 62,
        name: "Men Shirt",
        category: "Clothes",
        price: 699,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
        description: "Stylish men's shirt"
    },

    {
        id: 63,
        name: "Men Jeans",
        category: "Clothes",
        price: 999,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
        description: "Comfortable men's jeans"
    },

    {
        id: 64,
        name: "Hoodie",
        category: "Clothes",
        price: 899,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
        description: "Warm hoodie"
    },

    {
        id: 65,
        name: "Women Top",
        category: "Clothes",
        price: 599,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1564257577054-2e7e0e4b5e36?w=500",
        description: "Stylish women's top"
    },

    {
        id: 66,
        name: "Women Kurti",
        category: "Clothes",
        price: 799,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=500",
        description: "Beautiful kurti"
    },

    {
        id: 67,
        name: "Women Dress",
        category: "Clothes",
        price: 999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
        description: "Beautiful women's dress"
    },

    {
        id: 68,
        name: "Women Jeans",
        category: "Clothes",
        price: 899,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?w=500",
        description: "Women's jeans"
    },


    // ================= MAKEUP =================

    {
        id: 69,
        name: "Lipstick",
        category: "Makeup",
        price: 299,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500",
        description: "Beautiful lipstick"
    },

    {
        id: 70,
        name: "Foundation",
        category: "Makeup",
        price: 450,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
        description: "Face foundation"
    },

    {
        id: 71,
        name: "Mascara",
        category: "Makeup",
        price: 350,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1631214524020-7e18db9c5b2c?w=500",
        description: "Eye mascara"
    },

    {
        id: 72,
        name: "Face Powder",
        category: "Makeup",
        price: 280,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500",
        description: "Face powder"
    },

    {
        id: 73,
        name: "Blush",
        category: "Makeup",
        price: 320,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=500",
        description: "Beautiful blush"
    },


    // ================= PERFUME =================

    {
        id: 74,
        name: "Rose Perfume",
        category: "Perfume",
        price: 499,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
        description: "Fresh rose fragrance"
    },

    {
        id: 75,
        name: "Men Perfume",
        category: "Perfume",
        price: 599,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500",
        description: "Men's fragrance"
    },

    {
        id: 76,
        name: "Women Perfume",
        category: "Perfume",
        price: 650,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500",
        description: "Women's fragrance"
    },

    {
        id: 77,
        name: "Lavender Perfume",
        category: "Perfume",
        price: 550,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500",
        description: "Lavender fragrance"
    },

    {
        id: 78,
        name: "Fresh Perfume",
        category: "Perfume",
        price: 450,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500",
        description: "Fresh fragrance"
    },


    // ================= FACE CARE =================

    {
        id: 79,
        name: "Face Wash",
        category: "Face Care",
        price: 199,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500",
        description: "Gentle face wash"
    },

    {
        id: 80,
        name: "Neem Face Wash",
        category: "Face Care",
        price: 220,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
        description: "Neem face wash"
    },

    {
        id: 81,
        name: "Vitamin C Face Wash",
        category: "Face Care",
        price: 250,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500",
        description: "Vitamin C face wash"
    },

    {
        id: 82,
        name: "Aloe Vera Gel",
        category: "Face Care",
        price: 180,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?w=500",
        description: "Aloe vera gel"
    },

    {
        id: 83,
        name: "Face Moisturizer",
        category: "Face Care",
        price: 299,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
        description: "Daily face moisturizer"
    },


    // ================= BATH & BODY =================

    {
        id: 84,
        name: "Bath Soap",
        category: "Bath & Body",
        price: 60,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1607006344380-b6775a0824e7?w=500",
        description: "Refreshing bath soap"
    },

    {
        id: 85,
        name: "Body Lotion",
        category: "Bath & Body",
        price: 220,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
        description: "Moisturizing body lotion"
    },

    {
        id: 86,
        name: "Body Wash",
        category: "Bath & Body",
        price: 250,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
        description: "Refreshing body wash"
    },

    {
        id: 87,
        name: "Hand Wash",
        category: "Bath & Body",
        price: 120,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500",
        description: "Gentle hand wash"
    },

    {
        id: 88,
        name: "Shower Gel",
        category: "Bath & Body",
        price: 230,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
        description: "Fresh shower gel"
    },


    // ================= HAIR CARE =================

    {
        id: 89,
        name: "Shampoo",
        category: "Hair Care",
        price: 220,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
        description: "Hair shampoo"
    },

    {
        id: 90,
        name: "Hair Oil",
        category: "Hair Care",
        price: 180,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
        description: "Nourishing hair oil"
    },

    {
        id: 91,
        name: "Hair Conditioner",
        category: "Hair Care",
        price: 250,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
        description: "Hair conditioner"
    },

    {
        id: 92,
        name: "Hair Serum",
        category: "Hair Care",
        price: 350,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
        description: "Hair serum"
    },

    {
        id: 93,
        name: "Hair Mask",
        category: "Hair Care",
        price: 300,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500",
        description: "Hair mask"
    },


    // ================= WOMEN CARE =================

    {
        id: 94,
        name: "Sanitary Pads",
        category: "Women Care",
        price: 180,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
        description: "Comfortable hygiene product"
    },

    {
        id: 95,
        name: "Intimate Wash",
        category: "Women Care",
        price: 250,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500",
        description: "Personal care wash"
    },

    {
        id: 96,
        name: "Cotton Pads",
        category: "Women Care",
        price: 100,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=500",
        description: "Soft cotton pads"
    },

    {
        id: 97,
        name: "Face Mask",
        category: "Women Care",
        price: 150,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500",
        description: "Skin care mask"
    },

    {
        id: 98,
        name: "Beauty Kit",
        category: "Women Care",
        price: 499,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
        description: "Beauty care kit"
    },


    // ================= BAGS =================

    {
        id: 99,
        name: "Hand Bag",
        category: "Bags & Accessories",
        price: 699,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
        description: "Stylish handbag"
    },

    {
        id: 100,
        name: "School Bag",
        category: "Bags & Accessories",
        price: 599,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Strong school bag"
    },

    {
        id: 101,
        name: "Backpack",
        category: "Bags & Accessories",
        price: 799,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
        description: "Travel backpack"
    },

    {
        id: 102,
        name: "Wallet",
        category: "Bags & Accessories",
        price: 299,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500",
        description: "Leather wallet"
    },

    {
        id: 103,
        name: "Sunglasses",
        category: "Bags & Accessories",
        price: 399,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
        description: "Stylish sunglasses"
    },


    // ================= FOOTWEAR =================

    {
        id: 104,
        name: "Running Shoes",
        category: "Footwear",
        price: 999,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        description: "Comfortable running shoes"
    },

    {
        id: 105,
        name: "Sports Shoes",
        category: "Footwear",
        price: 1199,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
        description: "Sports shoes"
    },

    {
        id: 106,
        name: "Sneakers",
        category: "Footwear",
        price: 899,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        description: "Stylish sneakers"
    },

    {
        id: 107,
        name: "Sandals",
        category: "Footwear",
        price: 499,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=500",
        description: "Comfortable sandals"
    },

    {
        id: 108,
        name: "Slippers",
        category: "Footwear",
        price: 199,
        rating: 4.4,
        image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=500",
        description: "Comfortable slippers"
    }

];


// ============================================================
// CART & WISHLIST
// ============================================================

let cart = [];
let wishlist = [];


// ============================================================
// DISPLAY PRODUCTS
// ============================================================

function displayProducts(list) {

    const container =
        document.getElementById("productContainer");

    if (!container) return;

    if (list.length === 0) {

        container.innerHTML = `
            <div class="no-product">
                <h2>😔 Product Not Found</h2>
                <p>Try another product or category.</p>
            </div>
        `;

        return;
    }


    container.innerHTML = list.map(product => {

        return `

            <div class="product-card">

                <button
                    class="wishlist-btn"
                    onclick="addToWishlist(${product.id})"
                >
                    ❤️
                </button>


                <div
                    class="product-image"
                    onclick="showProductDetails(${product.id})"
                >

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        loading="lazy"
                        onerror="
                            this.src='https://placehold.co/400x300?text=${encodeURIComponent(product.name)}'
                        "
                    >

                </div>


                <h3>
                    ${product.name}
                </h3>


                <p class="description">
                    ${product.description}
                </p>


                <div class="rating">
                    ⭐ ${product.rating}
                </div>


                <div class="price">
                    ₹${product.price}
                </div>


                <button
                    class="add-btn"
                    onclick="addToCart(${product.id})"
                >
                    🛒 Add to Cart
                </button>

            </div>

        `;

    }).join("");

}


// ============================================================
// SHOW ALL PRODUCTS
// ============================================================

function showAll() {

    displayProducts(products);

    const section =
        document.getElementById("productsSection");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ============================================================
// CATEGORY FILTER
// ============================================================

function filterCategory(category) {

    const categoryMap = {

        "Vegetable": "Vegetables",
        "Vegetables": "Vegetables",

        "Fruit": "Fruits",
        "Fruits": "Fruits",

        "Dry Fruit": "Dry Fruits",
        "Dry Fruits": "Dry Fruits",

        "Clothing": "Clothes",
        "Cloth": "Clothes",
        "Clothes": "Clothes",

        "Facewash": "Face Care",
        "Face Wash": "Face Care",
        "Face Care": "Face Care",

        "Soap": "Bath & Body",
        "Bath": "Bath & Body",
        "Bath & Body": "Bath & Body",

        "Hair": "Hair Care",
        "Hair Care": "Hair Care",

        "Women's Care": "Women Care",
        "Women Care": "Women Care",

        "Bags": "Bags & Accessories",
        "Bags & Accessories": "Bags & Accessories",

        "Shoes": "Footwear",
        "Footwear": "Footwear"

    };


    const actualCategory =
        categoryMap[category] || category;


    const filtered =
        products.filter(product => {

            return product.category.toLowerCase() ===
                actualCategory.toLowerCase();

        });


    displayProducts(filtered);


    const section =
        document.getElementById("productsSection");

    if (section) {

        section.scrollIntoView({
            behavior: "smooth"
        });

    }

}


// ============================================================
// SEARCH PRODUCTS
// ============================================================

function searchProducts() {

    const input =
        document.getElementById("searchInput");

    if (!input) return;


    const search =
        input.value.toLowerCase().trim();


    if (search === "") {

        displayProducts(products);

        return;

    }


    const filtered =
        products.filter(product => {

            return (

                product.name
                    .toLowerCase()
                    .includes(search)

                ||

                product.category
                    .toLowerCase()
                    .includes(search)

                ||

                product.description
                    .toLowerCase()
                    .includes(search)

            );

        });


    displayProducts(filtered);

}


// ============================================================
// SORT PRODUCTS
// ============================================================

function sortProducts() {

    const select =
        document.getElementById("sortSelect");

    if (!select) return;


    const value = select.value;


    let sorted =
        [...products];


    if (value === "low") {

        sorted.sort(
            (a, b) => a.price - b.price
        );

    }


    else if (value === "high") {

        sorted.sort(
            (a, b) => b.price - a.price
        );

    }


    else if (value === "rating") {

        sorted.sort(
            (a, b) => b.rating - a.rating
        );

    }


    else if (value === "name") {

        sorted.sort(
            (a, b) =>
                a.name.localeCompare(b.name)
        );

    }


    displayProducts(sorted);

}


// ============================================================
// ADD TO CART
// ============================================================

function addToCart(id) {

    const product =
        products.find(
            product => product.id === id
        );


    if (!product) return;


    cart.push(product);


    updateCartCount();


    alert(
        `${product.name} added to cart 🛒`
    );

}


// ============================================================
// UPDATE CART COUNT
// ============================================================

function updateCartCount() {

    const count =
        document.getElementById("cartCount");


    if (count) {

        count.textContent =
            cart.length;

    }

}


// ============================================================
// SHOW CART
// ============================================================

function showCart() {

    const modal =
        document.getElementById("cartModal");

    const items =
        document.getElementById("cartItems");

    const total =
        document.getElementById("cartTotal");


    if (!modal || !items || !total)
        return;


    if (cart.length === 0) {

        items.innerHTML = `

            <div class="no-product">

                <h3>
                    🛒 Cart is Empty
                </h3>

                <p>
                    Add some products first.
                </p>

            </div>

        `;


        total.textContent = "0";

    }

    else {

        items.innerHTML =
            cart.map((item, index) => {

                return `

                    <div class="cart-item">

                        <div>

                            <strong>
                                ${item.name}
                            </strong>

                            <br>

                            ₹${item.price}

                        </div>


                        <button
                            onclick="removeFromCart(${index})"
                        >
                            Remove
                        </button>

                    </div>

                `;

            }).join("");


        const totalPrice =
            cart.reduce(
                (sum, item) =>
                    sum + item.price,
                0
            );


        total.textContent =
            totalPrice;

    }


    modal.style.display =
        "flex";

}


// ============================================================
// REMOVE FROM CART
// ============================================================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    showCart();

}


// ============================================================
// ADD TO WISHLIST
// ============================================================

function addToWishlist(id) {

    const product =
        products.find(
            product => product.id === id
        );


    if (!product) return;


    const already =
        wishlist.some(
            item => item.id === id
        );


    if (already) {

        alert(
            "This product is already in wishlist ❤️"
        );

        return;

    }


    wishlist.push(product);


    updateWishlistCount();


    alert(
        `${product.name} added to wishlist ❤️`
    );

}


// ============================================================
// UPDATE WISHLIST COUNT
// ============================================================

function updateWishlistCount() {

    const count =
        document.getElementById("wishCount");


    if (count) {

        count.textContent =
            wishlist.length;

    }

}


// ============================================================
// SHOW WISHLIST
// ============================================================

function showWishlist() {

    const modal =
        document.getElementById("wishlistModal");

    const items =
        document.getElementById("wishlistItems");


    if (!modal || !items)
        return;


    if (wishlist.length === 0) {

        items.innerHTML = `

            <div class="no-product">

                <h3>
                    ❤️ Wishlist Empty
                </h3>

                <p>
                    Add products to wishlist.
                </p>

            </div>

        `;

    }

    else {

        items.innerHTML =
            wishlist.map(item => {

                return `

                    <div class="cart-item">

                        <div>

                            <strong>
                                ${item.name}
                            </strong>

                            <br>

                            ₹${item.price}

                        </div>


                        <button
                            onclick="addToCart(${item.id})"
                        >
                            Add to Cart
                        </button>

                    </div>

                `;

            }).join("");

    }


    modal.style.display =
        "flex";

}


// ============================================================
// PRODUCT DETAILS
// ============================================================

function showProductDetails(id) {

    const product =
        products.find(
            product => product.id === id
        );


    if (!product) return;


    const modal =
        document.getElementById("productModal");

    const details =
        document.getElementById("productDetails");


    if (!modal || !details)
        return;


    details.innerHTML = `

        <div class="details-image">

            <img
                src="${product.image}"
                alt="${product.name}"
                onerror="
                    this.src='https://placehold.co/400x300?text=${encodeURIComponent(product.name)}'
                "
                style="
                    width:75%;
                    max-width:280px;
                    height:220px;
                    object-fit:contain;
                    display:block;
                    margin:auto;
                    border-radius:10px;
                "
            >

        </div>


        <div class="details-info">

            <h2>
                ${product.name}
            </h2>


            <p>
                Category:
                <strong>
                    ${product.category}
                </strong>
            </p>


            <p>
                ⭐ ${product.rating}
            </p>


            <h2
                style="color:#0d6efd;"
            >
                ₹${product.price}
            </h2>


            <p>
                ${product.description}
            </p>


            <br>


            <button
                class="add-btn"
                onclick="addToCart(${product.id})"
            >
                🛒 Add to Cart
            </button>

        </div>

    `;


    modal.style.display =
        "flex";

}


// ============================================================
// LOGIN
// ============================================================

function showLogin() {

    const modal =
        document.getElementById("loginModal");


    if (modal) {

        modal.style.display =
            "flex";

    }

}


function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById("loginEmail").value;


    alert(
        `Welcome! Login successful 👤`
    );


    closeModal("loginModal");

}


// ============================================================
// CHECKOUT
// ============================================================

function showCheckout() {

    if (cart.length === 0) {

        alert(
            "Your cart is empty 🛒"
        );

        return;

    }


    closeModal("cartModal");


    const modal =
        document.getElementById("checkoutModal");


    if (modal) {

        modal.style.display =
            "flex";

    }

}


// ============================================================
// PLACE ORDER
// ============================================================

function placeOrder(event) {

    event.preventDefault();


    if (cart.length === 0) {

        alert(
            "Your cart is empty!"
        );

        return;

    }


    cart = [];


    updateCartCount();


    closeModal(
        "checkoutModal"
    );


    const success =
        document.getElementById("successModal");


    if (success) {

        success.style.display =
            "flex";

    }

}


// ============================================================
// CLOSE MODAL
// ============================================================

function closeModal(id) {

    const modal =
        document.getElementById(id);


    if (modal) {

        modal.style.display =
            "none";

    }

}


// ============================================================
// CLOSE MODAL BY OUTSIDE CLICK
// ============================================================

window.addEventListener(
    "click",
    function(event) {

        document
            .querySelectorAll(".modal")
            .forEach(modal => {

                if (
                    event.target === modal
                ) {

                    modal.style.display =
                        "none";

                }

            });

    }
);


// ============================================================
// PAGE LOAD
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        displayProducts(products);

        updateCartCount();

        updateWishlistCount();

    }
);