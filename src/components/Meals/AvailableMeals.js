import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Hyderabadi Biryani',
    description: 'A chicken you will fall for',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Pizza',
    description: 'Fresh out of the oven.',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'Snacks time made better.',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Rice Bowl',
    description: 'Healthy...and green...',
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
