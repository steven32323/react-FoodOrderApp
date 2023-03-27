import Card from "../UI/Card";
import MealItem from "./MealItem/MeaItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Spaghetti Bolognese",
    description:
      "Classic Italian dish with homemade tomato sauce and ground beef",
    price: 12.99,
  },
  {
    id: "m2",
    name: "Chicken Teriyaki",
    description:
      "Grilled chicken with a sweet and savory teriyaki sauce, served with rice and vegetables",
    price: 15.99,
  },
  {
    id: "m3",
    name: "Vegetable Stir Fry",
    description:
      "Assorted vegetables stir-fried in a sesame oil sauce, served with noodles",
    price: 10.99,
  },
  {
    id: "m4",
    name: "Grilled Salmon",
    description:
      "Fresh Atlantic salmon grilled to perfection, served with a side of seasonal vegetables",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
