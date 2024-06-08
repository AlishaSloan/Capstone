import React, {useState, useEffect} from "react";
import '../css/Meals.css'

// Lookup a single random meal from public API
const url = 'https://www.themealdb.com/api/json/v1/1/random.php'

const Meal = () => {
    const [food, setFood] = useState([])

    const fetchFood = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data.meals);
        setFood(data.meals)
    }

    useEffect(() => {
        fetchFood()

    }, [])

    return (
        <>
<div className="meals">
   <button onClick={() => fetchFood()} className='btn'>Surprise Me!</button>

    
        {food.map((f) => {
            const {idMeal, strMeal, strInstructions, strMealThumb} = f

            return (
                <article key={idMeal}>
                    <div>
                        <h3 className="food-header"> {strMeal}</h3>
                        <img className="foodpic" src={strMealThumb} alt={strMeal} />
                    </div>
                    <div>
                        <p>{strInstructions}</p>
                      
                    </div>
                </article>
            )
        })}

    </div>
        </>
    )
}

export default Meal