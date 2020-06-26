const meals =
{
    fakeDB: [],

    iniDB() {
        this.fakeDB.push({
            title: "Chicken Mcnuggets Happy Meal",
            description: "6 piece Chicken McNuggets® Happy Meal. Chicken McNuggets (6 piece), Kids Fries, 1% Low Fat Milk Jug, Apple Slices. 475 Cal. 475 Cal. Six tender Chicken McNuggets made with white meat with kid-sized World Famous Fries and your choice of apple slices, or Yoplait® GO-GURT® Low Fat Strawberry Yogurt.",
            price: "$12.99",
            topseller: true,
            imgSrc:"mcnuggets.jpg"

        })

        this.fakeDB.push({
            title: "Snack wrap with crispy Chicken Happy Meal",
            description: "Snack Wrap with Crispy Chicken Happy Meal. Get a taste of our new Happy Meal Snack Wrap with Crispy Chicken. Made with 100% Canadian raised seasoned chicken breast, lettuce, and wrapped in a soft flour tortilla.",
            price: "$11.99",
            topseller: true,
            imgSrc:"snackwrap.jpg"

        })

        this.fakeDB.push({
            title: "Cheeseburger Happy Meal",
            description: "Cheeseburger, World Famous Fries - Small, 1% Partly Skimmed Milk, Strawberry Yogurt Tube. Made with 100% Canadian beef patty, pickles, onions, and a slice of melted processed cheddar cheese, all between a freshly toasted bun, it’s no wonder this is a crowd favourite. Available with your choice of apple slices or fries, yogurt, and a drink.",
            price: "$10.99",
            topseller: true,
            imgSrc:"cheeseburger.jpg"

        })

        this.fakeDB.push({
            title: "Hotcakes Happy Meal",
            description: "Hotcakes, Apple Slices, 1% Partly Skimmed Milk, Strawberry Yogurt Tube. Fluffy, golden-brown bites of heaven. These melt-in-your-mouth hotcakes are topped with butter and syrup. Get 2 with your choice of apple slices or hashbrown, yogurt, and a drink.",
            price: "$9.99",
            topseller: true,
            imgSrc:"hotcakes.jpg"

        })
    },

    getAllMeal(){
        return this.fakeDB;
    },


    getTopSeller(){
        db=[];
        this.fakeDB.forEach(meal =>{
            if(meal.topseller == true);
            db.push(meal);
        })
        return db;
    }

};


meals.iniDB();
module.exports = meals;
