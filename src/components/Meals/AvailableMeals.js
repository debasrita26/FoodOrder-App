import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = (props) => {
  const [meals, setMeals]  = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
    // pass the firebase url to connect to the firebase database
    const response = await fetch('https://foodorder-app-e6b79-default-rtdb.firebaseio.com/meals.json');
    const responseData = await response.json();

    //create and empty array and then use a for in loop to go trough all the data in the response object
    const loadedMeals = [];

    for (const key in responseData){
      //pushing the object in the empty array
      loadedMeals.push({
        id: key, //key will be the id of the individual meals fetched
        name: responseData[key].name,
        description: responseData[key].description,
        price: responseData[key].price
      })
    }

    //setting the data
    setMeals(loadedMeals);
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => (
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
