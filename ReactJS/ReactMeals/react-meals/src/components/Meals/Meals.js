import MealsSummry from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import { Fragment } from 'react';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummry />
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
