const DATA = [
    {
        name: "Fruits",
        items: [
    {
        name: "Apple",
        symptoms: "Itchy mouth, swelling lips, hives",
        info: "Apple allergy can relate to birch pollen allergy."
    },
    {
        name: "Strawberry",
        symptoms: "Red hives, itchy throat, swelling",
        info: "Strawberries may trigger mild to severe allergies."
    },
    {
        name: "Banana",
        symptoms: "Mouth swelling, upset stomach",
        info: "Banana allergies sometimes occur in those with latex sensitivities."
    },
    {
        name:"Mango",
        symptoms:"Itchy skin, rash, nausea",
        info:"Mango skin contains urushiol, a potential irritant."
    },
    {
        name:"Kiwi",
        symptoms:"Mouth irritation, rash, swelling",
        info:"Kiwi allergies are sometimes tied to latex-fruit syndrome."
    },
    {
        name:"Pear",
        symptoms:"Tingling throat, skin irritation",
        info:"Pear allergy can cause oral symptoms."
    },
    {
        name:"Peach",
        symptoms:"Cough, skin rash, stomach upset",
        info:"Peach allergy may cross-react with pollen allergies."
    },
    
    {
        name:"Plum",
        symptoms:"Itchy mouth, swelling, rash",
        info:"Often part of oral allergy syndrome."
    },
    {
        name:"Cherry",
        symptoms:"Mouth swelling, red hives",
        info:"Cherry can be part of pollen-food cross-reactions."
    },
    {
        name:"Grape",
        symptoms:"Rash, stomach trouble, vomiting",
        info:"Rare, but possible in sensitive individuals."
    },
    {
        name:"Pineapple",
        symptoms:"Tongue swelling, abdominal pain",
        info:"Can trigger itching or swelling."
    },
    {
        name:"Watermelon",
        symptoms:"Mouth itching, swelling",
        info:"Related to pollen allergies, usually oral symptoms."
    },
    {
        name:"Melon",
        symptoms:"Red rash, upset stomach",
        info:"Melon allergies can be mild or severe."
    },
    {
        name:"Blueberry",
        symptoms:"Swelling lips, itchy skin",
        info:"Reactions are rare but can occur."
    },
    {
        name:"Raspberry",
        symptoms:"Rash, mouth irritation",
        info:"Rare, mild oral allergy syndrome possible."
    },
    {
        name:"Blackberry",
        symptoms:"Swelling throat, itchy skin",
        info:"Rare, similar to other berry allergies."
    },
    {
        name:"Gooseberry",
        symptoms:"Mouth pain, skin rash",
        info:"Rare, but possible symptoms include oral discomfort and rash."
    },
    {
        name:"Date",
        symptoms:"Itching, swelling, GI upset",
        info:"Reactions are uncommon but documented."
    },
    {
        name:"Fig",
        symptoms:"Mouth swelling, rash",
        info:"Can cause oral allergy, especially in latex-allergic people."
    },
    {
        name:"Lychee",
        symptoms:"Skin rash, swelling lips",
        info:"Lychee allergies are rare, mostly rash or oral."
    },
    {
        name:"Papaya",
        symptoms:"Mouth itching, rash",
        info:"Papaya contains proteins that may cause allergies."
    },
    {
        name:"Jackfruit",
        symptoms:"Swelling, rash, stomach upset",
        info:"Jackfruit can trigger various allergic reactions."
    },
    {
        name:"Guava",
        symptoms:"Mouth irritation, skin rash",
        info:"Rare, can cause oral symptoms."
    },
    {
        name:"Avocado",
        symptoms:"Nausea, rash, breathing trouble",
        info:"Avocado is linked to latex allergies."
    },
    {
        name:"Custard Apple",
        symptoms:"Itching, swelling, rash",
        info:"Custard apple allergies are possible but rare."
    },
    ]
    },

    {
        name:"Vegetables",
        items:
        [
            { name:"Carrot", symptoms:"Itchy mouth, dizziness, swelling", info:"Linked to birch pollen oral allergy syndrome." },
            { name:"Potato", symptoms:"Vomiting, itchy eyes, hives", info:"Raw potato allergy is more prevalent." },
            { name:"Tomato", symptoms:"Swelling lips, eczema, rash", info:"Includes skin rashes, GI symptoms." },
            { name:"Celery", symptoms:"Tingling skin, dermatitis, swelling", info:"Common in Europe, can be severe." },
            { name:"Spinach", symptoms:"Rash, stomach upset, puffiness", info:"Rare, with mild symptoms." },
            { name:"Cabbage", symptoms:"Stomach pain, rash", info:"Cabbage can trigger mild allergic responses." },
            { name:"Cauliflower", symptoms:"Rash, skin irritation", info:"Allergic reactions possible, mostly skin-related." },
            { name:"Peas", symptoms:"Shortness of breath, itchy skin", info:"Pea allergies can be mild to severe." },
            { name:"Beans", symptoms:"Mouth swelling, hives, vomiting", info:"Beans contain allergenic proteins." },
            { name:"Broccoli", symptoms:"Skin rash, GI discomfort", info:"Rare, mild allergic reactions possible." },
            { name:"Onion", symptoms:"Stomach upset, dermatitis, cough", info:"Can cause skin reactions." },
            { name:"Garlic", symptoms:"Asthma, skin rash, headache", info:"Generally mild reactions." },
            { name:"Sweet Corn", symptoms:"Digestive upset, rash", info:"Unique proteins may trigger symptoms." },
            { name:"Radish", symptoms:"Stomach upset, swelling", info:"Oral and gastrointestinal symptoms." },
            { name:"Turnip", symptoms:"Skin rash, itching", info:"Mild to moderate reactions possible." },
            { name:"Pumpkin", symptoms:"Swelling, GI upset, rash", info:"Uncommon, usually mild." },
            { name:"Artichoke", symptoms:"Rash, itching", info:"Allergy is very rare." },
            { name:"Lettuce", symptoms:"Stomach cramp, skin rash", info:"Frequent in those with pollen allergies." },
            { name:"Okra", symptoms:"Itching, stomach pain", info:"Rare, but possible in sensitive individuals." },
            { name:"Eggplant", symptoms:"Skin irritation, rash", info:"Contains solanine, which can be allergenic." },
            { name:"Bell Pepper", symptoms:"Sneezing, indigestion, rash", info:"Capsaicin may trigger reactions." },
            { name:"Chili Pepper", symptoms:"Burning eyes, stomach upset, rash", info:"Reactions due to capsaicin." },
            { name:"Zucchini", symptoms:"Skin rash, headache", info:"Rare and mild reactions." },
            { name:"Beetroot", symptoms:"Digestive upset, rash", info:"Rare, mild symptoms." },
            { name:"Mushroom", symptoms:"Skin rash, GI symptoms", info:"Mushroom allergies are uncommon." },
        ]
    },

    {
        name:"Pulses",
        items:
        [
            { name:"Lentil", symptoms:"Hives, asthma, nausea", info:"High prevalence in Mediterranean countries." },
            { name:"Chickpea", symptoms:"Swelling, rash, stomach pain", info:"Severe reactions possible." },
            { name:"Pea", symptoms:"Shortness of breath, itchy skin", info:"Symptoms range from mild to severe." },
            { name:"Soybean", symptoms:"Runny nose, skin itch, upset stomach", info:"Common among children." },
            { name:"Kidney Bean", symptoms:"Rash, GI pain, vomiting", info:"Raw beans are more allergenic." },
            { name:"Black Gram", symptoms:"Stomach upset, skin rash", info:"Rare but can be severe." },
            { name:"Green Gram", symptoms:"Skin irritation, hives", info:"Mild reactions mostly." },
            { name:"Pigeon Pea", symptoms:"Swelling, rash", info:"Allergy is rare." },
            { name:"Yellow Split Pea", symptoms:"Itchy throat, rash", info:"Rare, mild reactions." },
            { name:"Fava Bean", symptoms:"Stomach pain, nausea", info:"Can trigger hemolysis in some individuals." },
            { name:"Moth Bean", symptoms:"Skin rash, GI upset", info:"Not common, but possible." },
            { name:"Broad Bean", symptoms:"Breathing trouble, rash", info:"Rare, can be severe." },
            { name:"Navy Bean", symptoms:"Stomach upset, rash", info:"Mostly mild symptoms." },
            { name:"Adzuki Bean", symptoms:"GI upset, rash", info:"Rarely reported." },
            { name:"Red Gram", symptoms:"Rash, swelling", info:"Rare, mild allergies." },
            { name:"Bambara Groundnut", symptoms:"Rash, GI upset", info:"Documented rare reactions." },
            { name:"Cowpea", symptoms:"Itchy skin, swelling", info:"Rare, usually mild." },
            { name:"Horse Gram", symptoms:"Mouth itching, rash", info:"Rarely reported." },
            { name:"French Bean", symptoms:"Stomach pain, rash", info:"Possible mild to moderate symptoms." },
            { name:"White Bean", symptoms:"GI upset, rash", info:"Limited case reports." },
            { name:"Butter Bean", symptoms:"Rash, nausea", info:"Possible mild symptoms." },
            { name:"Field Pea", symptoms:"Skin rash, upset stomach", info:"Rare, mild reactions." },
            { name:"Hyacinth Bean", symptoms:"Swelling, hives", info:"Rare case reports." },
            { name:"Snap Pea", symptoms:"Skin rash, digestive upset", info:"Rare, mild reactions." },
            { name:"Snow Pea", symptoms:"Mouth itching, rash", info:"Rare, mild allergies." },
        ]
    },
    {
        name:"Dairy",
        items:
        [
            { name:"Milk", symptoms:"Hives, wheezing, vomiting", info:"Distinct from lactose intolerance; common in kids." },
            { name:"Cheese", symptoms:"Skin rash, stomach pain", info:"Allergic reaction to milk proteins." },
            { name:"Butter", symptoms:"Digestive upset, eczema, rash", info:"Contains milk proteins." },
            { name:"Yogurt", symptoms:"Stomach cramps, hives", info:"Triggers similar to milk allergies." },
            { name:"Cream", symptoms:"Itchy skin, vomiting, hives", info:"Common milk proteins trigger." },
            { name:"Ice Cream", symptoms:"Hives, nausea, stomach ache", info:"Contains milk, eggs, or nuts." },
            { name:"Cottage Cheese", symptoms:"Skin rash, swelling, GI upset", info:"Common among milk allergy sufferers." },
            { name:"Ghee", symptoms:"Digestive discomfort, rash", info:"Rare, usually in severe milk allergies." },
            { name:"Paneer", symptoms:"Skin rash, stomach pain", info:"Milk-based proteins trigger reactions." },
            { name:"Flavored Yogurt", symptoms:"Rash, skin irritation", info:"Artificial flavors may add risk." },
            { name:"Custard", symptoms:"Rash, upset stomach", info:"Milk and eggs are allergens." },
            { name:"Evaporated Milk", symptoms:"Skin rash, stomach pain", info:"Heated milk proteins increase allergenicity." },
            { name:"Condensed Milk", symptoms:"Stomach upset, rash", info:"High sugar concentrations also present." },
            { name:"Sour Cream", symptoms:"Bloating, rash, hives", info:"Contains milk-based proteins." },
            { name:"Whipped Cream", symptoms:"Itchy skin, nausea", info:"Light but allergenic due to dairy content." },
            { name:"Coffee Creamer", symptoms:"GI upset, rash", info:"May contain dairy and artificial ingredients." },
            { name:"Chocolate Milk", symptoms:"Hives, swelling, rash", info:"Contains milk and cocoa allergens." },
            { name:"Low Fat Milk", symptoms:"Stomach pain, skin rash", info:"Same allergenic proteins as regular milk." },
            { name:"Full Cream Milk", symptoms:"GI pain, hives", info:"Similar allergy profile as regular milk." },
            { name:"Ricotta Cheese", symptoms:"Skin rash, stomach upset", info:"Milk-based protein." },
            { name:"Mozzarella Cheese", symptoms:"Hives, rash", info:"Common among cheese allergies." },
            { name:"Parmesan Cheese", symptoms:"Skin rash, stomach pain", info:"Milk proteins trigger reactions." },
            { name:"Swiss Cheese", symptoms:"Redness, rash", info:"Milk protein allergy." },
            { name:"Blue Cheese", symptoms:"Nausea, skin irritation", info:"Mold present may add risk." },
            { name:"Goat Milk", symptoms:"Skin rash, digestive upset", info:"Proteins are slightly different from cow's milk." },
        ]
    },
    {
        name:"Grains",
        items:
        [
            { name:"Wheat", symptoms:"Rash, cramps, sneezing", info:"Distinct from celiac disease; can include breathing difficulties." },
            { name:"Oats", symptoms:"Itchy skin, diarrhea", info:"Rare, mainly in infants." },
            { name:"Rice", symptoms:"Diarrhea, hives, runny nose", info:"Rare, more common in Asia." },
            { name:"Barley", symptoms:"Coughing, GI upset, rash", info:"Can occur with other grain allergies." },
            { name:"Corn", symptoms:"Headache, rash, digestive issues", info:"Rare, but can be severe." },
            { name:"Rye", symptoms:"Stomach upset, rash", info:"Can trigger symptoms similar to wheat allergy." },
            { name:"Sorghum", symptoms:"Skin rash, diarrhea", info:"Rare, mild reactions reported." },
            { name:"Millet", symptoms:"Stomach upset, rash", info:"Uncommon, mild oral symptoms." },
            { name:"Triticale", symptoms:"Skin rash, swelling", info:"Hybrid grain, possible symptoms." },
            { name:"Spelt", symptoms:"Skin rash, nausea", info:"Related to wheat, mild symptoms." },
            { name:"Buckwheat", symptoms:"Skin rash, GI upset", info:"More common in Asia." },
            { name:"Farro", symptoms:"Stomach pain, rash", info:"Related to wheat." },
            { name:"Quinoa", symptoms:"Itching, rash", info:"Rare, can cause hives or swelling." },
            { name:"Bulgur", symptoms:"Stomach upset, rash", info:"Parboiled wheat, allergy possible." },
            { name:"Teff", symptoms:"Skin irritation, rash", info:"Grains are not always hypoallergenic." },
            { name:"Amaranth", symptoms:"Itching, stomach pain, rash", info:"Rare, can cause mild symptoms." },
            { name:"Kamut", symptoms:"Skin rash, nausea", info:"Ancient wheat variety, contains gluten." },
            { name:"Freekeh", symptoms:"Stomach upset, rash", info:"Young, roasted wheat—possible reaction." },
            { name:"Polenta", symptoms:"Rash, itching", info:"Made from corn; can trigger corn allergies." },
            { name:"Semolina", symptoms:"Skin rash, GI upset", info:"Wheat-based, may cause mild symptoms." },
            { name:"Sago", symptoms:"Stomach upset, rash", info:"Extracted from palm stems." },
            { name:"Wild Rice", symptoms:"Rash, stomach pain", info:"Uncommon allergen." },
            { name:"Emmer", symptoms:"Skin rash, nausea", info:"Wheat ancestor, contains gluten." },
            { name:"Grits", symptoms:"Rash, skin irritation", info:"Corn-based, allergy possible." },
            { name:"Barley Flour", symptoms:"Stomach upset, rash", info:"Grain allergies can cross-react." },
        ]
    },
    { 
        name:"Nuts",
        items:
        [
            { name:"Almond", symptoms:"Swelling, hives, GI pain", info:"May cross-react with other nuts." },
            { name:"Walnut", symptoms:"Coughing, swelling lips, dizziness", info:"Among most allergenic nuts." },
            { name:"Cashew", symptoms:"Vomiting, rash, anaphylaxis", info:"Rapid and severe onset possible." },
            { name:"Hazelnut", symptoms:"Itchy mouth, swelling, hives", info:"Common in Europe, pollen-food syndrome." },
            { name:"Pistachio", symptoms:"Redness, cramps, wheezing", info:"Severe reactions; related to cashew." },
            { name:"Pecan", symptoms:"Skin rash, GI upset", info:"Tree nuts are highly allergenic." },
            { name:"Brazil Nut", symptoms:"Skin rash, stomach upset", info:"Mild to severe symptoms documented." },
            { name:"Macadamia Nut", symptoms:"Itching, rash, upset stomach", info:"Rare, but can occur." },
            { name:"Pine Nut", symptoms:"Mouth swelling, hives", info:"Allergy can cross-react with other nuts." },
            { name:"Chestnut", symptoms:"Skin irritation, rash", info:"Latex cross-reaction may occur." },
            { name:"Coconut", symptoms:"Skin swelling, vomiting, rash", info:"Severe reactions rare." },
            { name:"Acorn", symptoms:"Skin rash, stomach upset", info:"Very rare allergy." },
            { name:"Beech Nut", symptoms:"Rash, skin irritation", info:"Documented rare reactions." },
            { name:"Ginkgo Nut", symptoms:"Itchy skin, rash", info:"Rare, symptoms in sensitive individuals." },
            { name:"Kola Nut", symptoms:"Stomach upset, rash", info:"Contains caffeine." },
            { name:"Soy Nut", symptoms:"Rash, GI upset", info:"Soy allergies prevalent in children." },
            { name:"Nutmeg", symptoms:"Rash, digestive upset", info:"Spice but sometimes classified among nuts." },
            { name:"Tiger Nut", symptoms:"Skin rash, stomach pain", info:"Rarely causes symptoms." },
            { name:"Water Chestnut", symptoms:"Skin irritation, rash", info:"Common in Asia." },
            { name:"Monkey Nut", symptoms:"Anaphylaxis, rash", info:"A term for peanuts in the UK." },
            { name:"Litchi Nut", symptoms:"Skin irritation, upset stomach", info:"Rare, oral symptoms possible." },
            { name:"Candlenut", symptoms:"GI upset, rash", info:"Toxic in large amounts." },
            { name:"Sacha Inchi Nut", symptoms:"Skin irritation, rash", info:"Rare, mostly in South America." },
            { name:"Walnut Oil", symptoms:"Skin rash, itching", info:"Allergic reactions are possible." },
            { name:"Almond Butter", symptoms:"Rash, GI upset", info:"Similar triggers as whole almonds." },
        ]
    },
    { 
        name:"Seeds",
        items:
        [
            { name:"Sesame", symptoms:"Redness, breathing trouble, swelling", info:"Symptoms may be severe." },
            { name:"Sunflower", symptoms:"Itchy skin, rash, swelling", info:"Symptoms from mild to severe." },
            { name:"Poppy", symptoms:"Rash, eczema, upset stomach", info:"Rare but can be severe." },
            { name:"Pumpkin", symptoms:"Swelling, GI upset, rash", info:"Uncommon, mild usually." },
            { name:"Mustard", symptoms:"Coughing, chills, chest tightness", info:"Common in Europe, can be severe." },
            { name:"Chia", symptoms:"Rash, GI upset", info:"Rare cases documented." },
            { name:"Flax", symptoms:"Skin rash, stomach pain", info:"Allergy reports increasing." },
            { name:"Hemp", symptoms:"Itching, skin rash", info:"Mostly mild, rare." },
            { name:"Cumin", symptoms:"Stomach upset, rash", info:"Some spices may induce allergies." },
            { name:"Nigella", symptoms:"Skin rash, itching", info:"Very rare allergy." },
            { name:"Caraway", symptoms:"GI upset, rash", info:"Mild oral symptoms reported." },
            { name:"Safflower", symptoms:"Skin rash, nausea", info:"Rare before adulthood." },
            { name:"Pumpkin Seed", symptoms:"Itching, rash", info:"Rare, mild symptoms." },
            { name:"Sesame Oil", symptoms:"Rash, GI upset", info:"Sensitive individuals may react." },
            { name:"Sunflower Oil", symptoms:"Skin rash, itching", info:"Mild symptoms documented." },
            { name:"Linseed", symptoms:"Stomach pain, rash", info:"Another name for flax." },
            { name:"Pine Nut", symptoms:"Mouth swelling, hives", info:"Trees' nuts are also seeds." },
            { name:"Watermelon Seed", symptoms:"GI upset, rash", info:"Allergy uncommon." },
            { name:"Melon Seed", symptoms:"Itching, skin rash", info:"Mild reactions possible." },
            { name:"Papaya Seed", symptoms:"Stomach upset, rash", info:"Rare allergy." },
            { name:"Grape Seed", symptoms:"Itchy skin, rash", info:"Very rare allergy." },
            { name:"Basil Seed", symptoms:"Skin irritation, rash", info:"Limited reports." },
            { name:"Coriander Seed", symptoms:"Stomach pain, rash", info:"Mild oral allergy syndrome." },
            { name:"Fennel Seed", symptoms:"Stomach upset, rash", info:"Rare, mild reactions." },
            { name:"Cardamom", symptoms:"Rash, nausea", info:"Spice seeds can trigger symptoms." },
        ]
    },
    {
        name:"Legumes",
        items:[
        { name:"Peanut", symptoms:"Tingling mouth, swelling face, hives", info:"Most common and severe food allergy." },
        { name:"Soybean", symptoms:"Runny nose, skin itch, upset stomach", info:"Among the top food allergens in children." },
        { name:"Green Pea", symptoms:"Skin rash, stomach pain", info:"Legume allergies often overlap." },
        { name:"Black Gram", symptoms:"Stomach upset, skin rash", info:"Rare but possible consistency." },
        { name:"Chickpea", symptoms:"Swelling, rash, stomach pain", info:"Common in Mediterranean diets." },
        { name:"Lentil", symptoms:"Hives, asthma, nausea", info:"Mediterranean prevalence." },
        { name:"Fava Bean", symptoms:"Stomach pain, nausea", info:"May trigger severe reactions." },
        { name:"Red Gram", symptoms:"Rash, swelling", info:"Rare but documented." },
        { name:"Broad Bean", symptoms:"Breathing trouble, rash", info:"Alpha-gal syndrome possible." },
        { name:"Cowpea", symptoms:"Itchy skin, swelling", info:"Rare, mild symptoms." },
        { name:"French Bean", symptoms:"Stomach pain, rash", info:"Mild symptoms possible." },
        { name:"Moth Bean", symptoms:"Skin rash, GI upset", info:"Rare, mild symptoms." },
        { name:"Pigeon Pea", symptoms:"Swelling, rash", info:"Rare, mostly mild." },
        { name:"Hyacinth Bean", symptoms:"Swelling, hives", info:"Documented rare reactions." },
        { name:"Snap Pea", symptoms:"Skin rash, digestive upset", info:"Mild reactions." },
        { name:"Snow Pea", symptoms:"Mouth itching, rash", info:"Rare, oral symptoms." },
        { name:"White Bean", symptoms:"GI upset, rash", info:"Rare, mild symptoms." },
        { name:"Butter Bean", symptoms:"Rash, nausea", info:"Possible mild symptoms." },
        { name:"Field Pea", symptoms:"Skin rash, upset stomach", info:"Rare, mild reactions." },
        { name:"Adzuki Bean", symptoms:"GI upset, rash", info:"Rare, mild symptoms." },
        { name:"Bambara Groundnut", symptoms:"Rash, GI upset", info:"Documented rare reactions." },
        { name:"Soy Nut", symptoms:"Rash, GI upset", info:"Soy allergies prevalent in children." },
        { name:"Horse Gram", symptoms:"Mouth itching, rash", info:"Rare, mild oral symptoms." },
        { name:"Red Kidney Bean", symptoms:"Stomach pain, rash", info:"Common in legume allergies." },
        { name:"Black-Eyed Pea", symptoms:"Rash, stomach pain", info:"Limited documented cases." },
      ]},
      { 
        name:"Sweets",
        items:[
        { name:"Chocolate", symptoms:"Nausea, rash, swollen tongue", info:"Cocoa proteins can trigger reactions." },
        { name:"Candy", symptoms:"Rash, skin irritation", info:"Artificial additives increase risk." },
        { name:"Ice Cream", symptoms:"Hives, nausea, stomach ache", info:"Contains milk, eggs, or nuts." },
        { name:"Custard", symptoms:"Rash, upset stomach", info:"Egg, milk, and possibly nut allergens." },
        { name:"Jelly", symptoms:"Skin rash, mouth irritation", info:"Artificial colors and preservatives may trigger allergy." },
        { name:"Honey", symptoms:"Stomach upset, bloating, rash", info:"Rare, risk for pollen sensitivities." },
        { name:"Marshmallow", symptoms:"Rash, stomach pain", info:"Contains gelatin and sometimes eggs." },
        { name:"Pastry", symptoms:"Stomach pain, rash", info:"Eggs, nuts, and wheat are common ingredients." },
        { name:"Cake", symptoms:"Rash, stomach ache", info:"Eggs, nuts, milk among allergens." },
        { name:"Biscuits", symptoms:"Skin rash, GI upset", info:"Wheat, eggs, and milk." },
        { name:"Brownie", symptoms:"Stomach pain, rash", info:"Chocolate and nuts as triggers." },
        { name:"Pudding", symptoms:"Rash, itching", info:"Milk and eggs present." },
        { name:"Lollipop", symptoms:"Skin irritation, GI upset", info:"Artificial color and flavoring risk." },
        { name:"Muffin", symptoms:"Rash, stomach pain", info:"Egg, wheat, milk are common triggers." },
        { name:"Scone", symptoms:"Stomach pain, rash", info:"Wheat and milk often present." },
        { name:"Donut", symptoms:"Skin rash, GI upset", info:"Egg, wheat, milk triggers." },
        { name:"Tart", symptoms:"Stomach pain, rash", info:"Egg, wheat, nuts possible allergens." },
        { name:"Chocolate Bar", symptoms:"Rash, nausea", info:"Cocoa, milk, and nuts." },
        { name:"Candy Corn", symptoms:"Rash, itching", info:"Artificial colors and flavors." },
        { name:"Cheesecake", symptoms:"Stomach pain, rash", info:"Milk, eggs, wheat." },
        { name:"Macaroon", symptoms:"Skin rash, GI upset", info:"Egg, coconut, almond triggers." },
        { name:"Fudge", symptoms:"Nausea, stomach pain", info:"Milk or nut ingredients." },
        { name:"Truffle", symptoms:"Skin irritation, rash", info:"Nuts, milk, wheat, cocoa." },
        { name:"Ice Pop", symptoms:"Rash, mouth itching", info:"Fruit and artificial flavors." },
        { name:"Petit Four", symptoms:"Stomach pain, rash", info:"Egg, nut, milk ingredients." },
      ]},
      {
        name:"Drinks",
        items:[
        { name:"Coffee", symptoms:"Palpitations, rash, headache", info:"Coffee proteins can induce allergy." },
        { name:"Milkshake", symptoms:"Rash, stomach pain", info:"Contains milk and ice cream." },
        { name:"Green Tea", symptoms:"Skin rash, stomach upset", info:"Rare allergy reports." },
        { name:"Black Tea", symptoms:"Stomach pain, rash", info:"Tannins may contribute to allergy." },
        { name:"Soda", symptoms:"Skin rash, GI upset", info:"Sweeteners and flavors are common allergens." },
        { name:"Fruit Juice", symptoms:"Rash, stomach pain", info:"Natural and artificial allergens present." },
        { name:"Alcohol", symptoms:"Rash, flushing, stomach pain", info:"Sulphites and grains can trigger allergies." },
        { name:"Wine", symptoms:"Skin rash, GI upset", info:"Sulphites and natural allergens." },
        { name:"Beer", symptoms:"Rash, headache", info:"Grain and yeast allergens." },
        { name:"Smoothie", symptoms:"Skin rash, stomach upset", info:"Multiple allergens possible." },
        { name:"Energy Drink", symptoms:"Rash, palpitations", info:"Artificial additives and caffeine." },
        { name:"Hot Chocolate", symptoms:"Rash, stomach pain", info:"Milk and cocoa." },
        { name:"Herbal Tea", symptoms:"Rash, GI upset", info:"Plant-based allergens." },
        { name:"Lemonade", symptoms:"Mouth irritation, rash", info:"Citrus allergies documented." },
        { name:"Coconut Water", symptoms:"Rash, GI upset", info:"Coconut protein allergy." },
        { name:"Soy Milk", symptoms:"Rash, stomach pain", info:"Soy protein allergy." },
        { name:"Almond Milk", symptoms:"Skin rash, hives", info:"Almond protein triggers." },
        { name:"Oat Milk", symptoms:"Skin rash, diarrhea", info:"Oat protein allergy." },
        { name:"Rice Milk", symptoms:"Rash, stomach pain", info:"Rare, mostly mild symptoms." },
        { name:"Whiskey", symptoms:"Rash, stomach upset", info:"Grains and additives as allergens." },
        { name:"Vodka", symptoms:"Rash, skin irritation", info:"Alcohol and grain allergens." },
        { name:"Orange Juice", symptoms:"Mouth itching, skin rash", info:"Citrus allergies can cause oral symptoms." },
        { name:"Grape Juice", symptoms:"Stomach pain, rash", info:"Rare fruit allergies." },
        { name:"Cola", symptoms:"Rash, stomach pain", info:"Artificial additives as triggers." },
        { name:"Mineral Water", symptoms:"Skin rash, GI upset", info:"Trace minerals may rarely trigger reactions." },
      ]},
      {
        name:"Preservatives/Additives",
        items:[
        { name:"MSG", symptoms:"Headache, rash, stomach upset", info:"Common food additive." },
        { name:"Sulfites", symptoms:"Asthma, rash, GI pain", info:"Found in wine and processed food." },
        { name:"Sodium Benzoate", symptoms:"Skin rash, asthma", info:"Used in soft drinks, juices." },
        { name:"Nitrates", symptoms:"Stomach pain, rash", info:"Found in processed meats." },
        { name:"BHA/BHT", symptoms:"Rash, skin irritation", info:"Used as preservatives." },
        { name:"Artificial Colors", symptoms:"Skin irritation, rash", info:"Used in many processed foods." },
        { name:"Artificial Flavors", symptoms:"Mouth itching, skin rash", info:"Found in snacks, candies." },
        { name:"Propylene Glycol", symptoms:"Skin rash, itching", info:"Used in soft drinks, sweets." },
        { name:"Sorbic Acid", symptoms:"Rash, stomach pain", info:"Preservative in processed foods." },
        { name:"Citric Acid", symptoms:"Stomach upset, rash", info:"Added to beverages, candies." },
        { name:"Malic Acid", symptoms:"Stomach pain, rash", info:"Acidulant in candy/foods." },
        { name:"Tartaric Acid", symptoms:"Stomach pain, rash", info:"Used in baking/candy." },
        { name:"Xylitol", symptoms:"Stomach upset, rash", info:"Sugar substitute." },
        { name:"Aspartame", symptoms:"Headache, rash", info:"Artificial sweetener." },
        { name:"Sucralose", symptoms:"Rash, GI pain", info:"Artificial sweetener." },
        { name:"Stevia", symptoms:"Skin irritation, rash", info:"Rare reactions noted." },
        { name:"Cellulose Gum", symptoms:"GI pain, rash", info:"Thickener in food." },
        { name:"Carrageenan", symptoms:"Skin irritation, rash", info:"Used in dairy and processed food." },
        { name:"Potassium Sorbate", symptoms:"Skin rash, nausea", info:"Preservative in processed food." },
        { name:"Calcium Propionate", symptoms:"Skin irritation, stomach pain", info:"Baked goods additive." },
        { name:"Lecithin", symptoms:"Skin rash, GI upset", info:"Found in chocolate/bakery products." },
        { name:"Gellan Gum", symptoms:"GI upset, rash", info:"Thickener in drinks." },
        { name:"Polysorbate 80", symptoms:"Skin irritation, rash", info:"Emulsifier in processed food." },
        { name:"Sodium Nitrite", symptoms:"Stomach pain, skin irritation", info:"Preservative in meat." },
        { name:"Guar Gum", symptoms:"GI pain, skin rash", info:"Thickener, rare allergy." },
      ]},
      {
        name:"Seafood",
        items:[
        { name:"Shrimp", symptoms:"Shortness of breath, skin swelling", info:"Most common shellfish allergy." },
        { name:"Crab", symptoms:"Abdominal pain, hives, swelling lips", info:"Similar symptoms as shrimp allergy." },
        { name:"Lobster", symptoms:"Skin rash, vomiting, breathing troubles", info:"Common and severe shellfish allergen." },
        { name:"Oyster", symptoms:"Stomach cramps, rash, sneezing", info:"Oyster allergy can be severe." },
        { name:"Clam", symptoms:"Hives, swelling, GI upset", info:"Common shellfish symptom profile." },
        { name:"Mussel", symptoms:"Skin rash, vomiting", info:"Severe allergic symptoms possible." },
        { name:"Octopus", symptoms:"Itchy skin, rash, breathing trouble", info:"Rare, can trigger anaphylaxis." },
        { name:"Squid", symptoms:"Stomach pain, rash", info:"Rare, mostly mild symptoms." },
        { name:"Salmon", symptoms:"Rash, skin swelling, GI upset", info:"Common among fish allergies." },
        { name:"Tuna", symptoms:"Skin rash, stomach pain", info:"Possible severe symptoms." },
        { name:"Mackerel", symptoms:"Rash, swelling, stomach pain", info:"Includes oral and GI symptoms." },
        { name:"Anchovy", symptoms:"Skin rash, itching", info:"Mild to moderate reactions possible." },
        { name:"Sardine", symptoms:"Stomach upset, rash", info:"Rare among fish allergies." },
        { name:"Herring", symptoms:"Skin rash, GI pain", info:"Allergy is uncommon." },
        { name:"Trout", symptoms:"Skin rash, swelling", info:"Rare, mild symptoms." },
        { name:"Cod", symptoms:"Stomach pain, rash", info:"Can be severe in some individuals." },
        { name:"Catfish", symptoms:"Itching, rash, GI upset", info:"Fish are common allergens." },
        { name:"Carp", symptoms:"Skin rash, stomach pain", info:"Rare, mild symptoms." },
        { name:"Eel", symptoms:"Rash, nausea, skin swelling", info:"Very rare case reports." },
        { name:"Swordfish", symptoms:"Skin rash, stomach pain", info:"Rare, mild reactions." },
        { name:"Pollock", symptoms:"Skin rash, GI upset", info:"Rare, symptoms similar to cod." },
        { name:"Snapper", symptoms:"Stomach upset, rash", info:"Allergy possible but rare." },
        { name:"Flounder", symptoms:"Skin rash, swelling", info:"Very rare allergy documented." },
        { name:"Sea Bass", symptoms:"Stomach pain, rash", info:"Rare among fish allergies." },
        { name:"Grouper", symptoms:"Skin rash, swelling", info:"Fish can induce severe reactions." },
      ]},
      {
        name:"Meat",
        items:[
        { name:"Chicken", symptoms:"Coughing, stomach ache, rash", info:"Meat allergy less common than others." },
        { name:"Beef", symptoms:"Itchy skin, digestive problems", info:"Alpha-gal allergy can follow tick bites." },
        { name:"Pork", symptoms:"Stomach pain, swelling lips, hives", info:"Red meat allergy more common after tick bites." },
        { name:"Lamb", symptoms:"Rash, stomach upset", info:"Alpha-gal syndrome possible." },
        { name:"Turkey", symptoms:"GI upset, rash", info:"Rare, mild symptoms." },
        { name:"Goat", symptoms:"Stomach upset, rash", info:"Rare, possible symptoms." },
        { name:"Rabbit", symptoms:"Skin irritation, rash", info:"Rare, mild oral symptoms." },
        { name:"Duck", symptoms:"Stomach pain, rash", info:"Limited case reports." },
        { name:"Venison", symptoms:"Skin rash, GI upset", info:"Alpha-gal possible." },
        { name:"Quail", symptoms:"Stomach pain, rash", info:"Rare allergy." },
        { name:"Buffalo", symptoms:"Skin rash, GI discomfort", info:"Rare symptoms reported." },
        { name:"Horse", symptoms:"Itching, rash", info:"Rare, mild symptoms documented." },
        { name:"Wild Boar", symptoms:"Stomach pain, itching", info:"Limited allergy cases." },
        { name:"Pigeon", symptoms:"Skin rash, stomach pain", info:"Rare allergy documented." },
        { name:"Ostrich", symptoms:"Skin irritation, nausea", info:"Rare, often mild symptoms." },
        { name:"Goose", symptoms:"Stomach upset, rash", info:"Limited documented cases." },
        { name:"Deer", symptoms:"GI pain, rash", info:"Alpha-gal possible." },
        { name:"Camel", symptoms:"Skin rash, stomach pain", info:"Rare, mild reactions." },
        { name:"Kangaroo", symptoms:"Stomach upset, rash", info:"Rare exotic meat allergy." },
        { name:"Emu", symptoms:"Rash, GI upset", info:"Very rare case reports." },
        { name:"Crocodile", symptoms:"Skin rash, stomach pain", info:"Rare case reports." },
        { name:"Bear", symptoms:"Skin irritation, rash", info:"Rare allergy." },
        { name:"Sheep", symptoms:"Stomach pain, rash", info:"Possible in alpha-gal syndrome." },
        { name:"Bison", symptoms:"Skin rash, stomach pain", info:"Rare documented allergies." },
        { name:"Guinea Pig", symptoms:"Stomach upset, rash", info:"Rare case reports." },
      ]},
      {
        name:"Eggs",
        items:[
        { name:"Hen's Egg", symptoms:"Skin inflammation, stomach pain, runny nose", info:"Most common egg allergy source." },
        { name:"Duck Egg", symptoms:"GI upset, skin rash", info:"Possible cross-reactions." },
        { name:"Quail Egg", symptoms:"Rash, nausea", info:"Less common than hen egg." },
        { name:"Goose Egg", symptoms:"Skin irritation, stomach pain", info:"Rare allergy." },
        { name:"Ostrich Egg", symptoms:"Stomach pain, rash", info:"Very rare, mild reactions." },
        { name:"Powdered Egg", symptoms:"Skin rash, GI upset", info:"Could have concentrated allergens." },
        { name:"Egg White", symptoms:"Hives, rash, swelling", info:"Main allergen component." },
        { name:"Egg Yolk", symptoms:"Stomach pain, skin rash", info:"Allergy generally weaker than to the white." },
        { name:"Scrambled Egg", symptoms:"Rash, stomach ache", info:"Heat can denature some proteins." },
        { name:"Boiled Egg", symptoms:"Rash, skin irritation", info:"Cooking may reduce symptoms." },
        { name:"Eggnog", symptoms:"GI upset, skin rash", info:"Raw eggs can trigger allergies." },
        { name:"Mayonnaise", symptoms:"Skin rash, nausea", info:"Contains raw eggs." },
        { name:"Meringue", symptoms:"Rash, stomach pain", info:"Egg whites and sugar." },
        { name:"Souffle", symptoms:"Skin irritation, rash", info:"Egg-based dish." },
        { name:"Custard", symptoms:"Stomach upset, rash", info:"Milk and eggs as allergens." },
        { name:"Cake", symptoms:"Skin rash, stomach pain", info:"Egg among common ingredients." },
        { name:"Pastry", symptoms:"Stomach pain, rash", info:"Egg, nuts, wheat." },
        { name:"Pasta", symptoms:"Skin rash, GI upset", info:"Egg pasta triggers allergies." },
        { name:"Bread", symptoms:"Rash, mouth irritation", info:"Some bread contains eggs." },
        { name:"Scone", symptoms:"Stomach pain, rash", info:"Egg, wheat, milk." },
        { name:"Frittata", symptoms:"Skin rash, mouth itching", info:"Egg dish may trigger allergies." },
        { name:"Omelette", symptoms:"Stomach upset, rash", info:"Egg-based, cooked." },
        { name:"Quiche", symptoms:"Stomach pain, skin rash", info:"Milk, eggs, wheat." },
        { name:"Poached Egg", symptoms:"Rash, swelling", info:"Allergic to egg proteins." },
        { name:"Egg Tart", symptoms:"Stomach pain, rash", info:"Milk and eggs are allergens." },
      ]},
      {
        name:"Miscellaneous",
        items:[
        { name:"Honey", symptoms:"Stomach upset, bloating, rash", info:"Rare, risk for pollen sensitivities." },
        { name:"Gelatin", symptoms:"Rash, stomach pain, GI upset", info:"Source is animal collagen." },
        { name:"Yeast", symptoms:"Headache, bloating, digestive issues", info:"Present in bread and beer." },
        { name:"Gluten", symptoms:"Bloating, fatigue, joint pain", info:"Present in wheat, barley, rye, spelt." },
        { name:"Lactose", symptoms:"Bloating, stomach pain", info:"Not an allergy, but intolerance." },
        { name:"Corn Syrup", symptoms:"Rash, skin itching", info:"Sweetener in many foods." },
        { name:"Casein", symptoms:"Stomach pain, rash", info:"Milk protein causing allergy." },
        { name:"Whey Protein", symptoms:"Skin rash, nausea", info:"Milk protein allergy." },
        { name:"Gum Arabic", symptoms:"GI upset, rash", info:"Thickener in sweets." },
        { name:"Pectin", symptoms:"Skin rash, stomach pain", info:"Used in jams, jellies." },
        { name:"Citric Acid", symptoms:"Stomach upset, rash", info:"Acidulant in drinks/foods." },
        { name:"Tartaric Acid", symptoms:"Stomach pain, rash", info:"Used in candy/baking." },
        { name:"Malt", symptoms:"Skin rash, GI upset", info:"Found in beers/chocolates." },
        { name:"Ghee", symptoms:"Digestive discomfort, rash", info:"Milk proteins, rare allergy." },
        { name:"Vegetable Oil", symptoms:"Skin rash, nausea", info:"Soy/corn may trigger." },
        { name:"Palm Oil", symptoms:"Skin rash, GI upset", info:"Rare documented reactions." },
        { name:"Margarine", symptoms:"Skin rash, nausea", info:"Dairy and soy may trigger allergy." },
        { name:"Cocoa Butter", symptoms:"GI upset, skin rash", info:"Allergy similar to chocolate." },
        { name:"Vinegar", symptoms:"Skin irritation, rash", info:"May cause skin reactions." },
        { name:"Lecithin", symptoms:"Skin rash, GI upset", info:"Soy-based emulsifier." },
        { name:"Maple Syrup", symptoms:"Stomach pain, rash", info:"Rare, mild reactions." },
        { name:"Stevia", symptoms:"Skin irritation, rash", info:"Rare allergy." },
        { name:"Maltodextrin", symptoms:"Stomach pain, rash", info:"Corn derivative, rare allergy." },
        { name:"Xanthan Gum", symptoms:"Skin rash, GI upset", info:"Thickener, rare allergy." },
      ]},
    ];

    const categoriesNav = document.getElementById('categoriesNav');
    let selCatIdx = 0;

    function renderCategories() {
      categoriesNav.innerHTML = '';
      DATA.forEach((cat, i) => {
        let b = document.createElement('button');
        b.textContent = cat.name;
        b.className = 'category-btn' + (i === selCatIdx ? ' active' : '');
        b.onclick = () => { selCatIdx = i; renderAllergens(); renderCategories(); document.getElementById('detailsPane').style.display='none'; }
        categoriesNav.appendChild(b);
      });
    }
    renderCategories();

    const allergensGrid = document.getElementById('allergensGrid');
    function renderAllergens(filter="") {
      let items = DATA[selCatIdx].items;
      allergensGrid.innerHTML = '';
      if (filter.length) {
        items = [];
        DATA.forEach(cat => {
          items = items.concat(cat.items.filter(a => a.name.toLowerCase().includes(filter)));
        });
      }
      items.forEach((a, i) => {
        let card = document.createElement('div');
        card.className = 'allergen-card';
        card.innerHTML = `<div class="allergen-name">${a.name}</div>
                          <div style="color:#777;font-size:14px;">Click for details</div>`;
        card.onclick = () => showDetails(a, DATA[selCatIdx].name);
        allergensGrid.appendChild(card);
      });
      
      if (items.length === 0) {
        allergensGrid.innerHTML = "<div>No allergens found for this search/category.</div>";
      }
    }
    renderAllergens();

    function showDetails(allergen, category) {
      const pane = document.getElementById('detailsPane');
      pane.innerHTML = `<div class='details-title'>${allergen.name} (${category}) - Allergy Info</div>
        <b>Symptoms:</b>
        <ul>${allergen.symptoms.split(',').map(s=>`<li>${s.trim()}</li>`).join('')}</ul>
        <b>More Info:</b>
        <div>${allergen.info}</div>
      `;
      pane.style.display = '';
      pane.scrollIntoView({behavior:'smooth'});
    }

    document.getElementById('searchInput').oninput = function(e) {
      let val = e.target.value.trim().toLowerCase();
      if(val.length === 0) {
        renderAllergens();
      } else {
        renderAllergens(val);
      }
      document.getElementById('detailsPane').style.display='none';
    };
