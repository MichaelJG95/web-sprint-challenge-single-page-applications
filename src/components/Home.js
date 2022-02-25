import React from 'react'
import { useHistory } from 'react-router-dom'

const Home = (props) => {

    const history = useHistory()

    const routeToShop = () => {
        history.push("/pizza")
    }

    return (
        <div className='home-wrapper'>
          <img
            className='home-image'
            src='../../Assets/Pizza.jpg'
            alt='Tasty looking picture of a pizza'
          />
          <button
            id='order-pizza'
            onClick={routeToShop}
          >
            Pizza?
          </button>
        </div>
      )
    }
export default Home