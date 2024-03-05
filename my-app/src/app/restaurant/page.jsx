'use client'
import { useState } from "react"
import RestaurantLogin from "../_component/restaurantLogin"
import RestaurantSignUp from "../_component/restaurantSignUp"

const Restaurant = () => {
    const [login, setLogin] = useState(true)
    return (
        <>
            <h1>Restaurant login</h1>
            {

                login ? <RestaurantLogin /> : <RestaurantSignUp />

            }
            <br />

            <button onClick={() => setLogin(!login)}>
                {login ? "Do not have Account? SignUp" : "Already have Account? login"}
            </button>
        </>
    )
}

export default Restaurant