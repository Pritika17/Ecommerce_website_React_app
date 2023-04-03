import React from 'react'
import { GrCart } from "react-icons/gr";

const Nav = () => {
  return (
    <nav className='grid grid-cols-3 gap-20 h-14 align-middle '>
      <section className=''>
        <img src={require("../../assets/logo.png")} alt="logo" className='w-64' />
      </section>
      <section className='col-span-2'>
        <ul className='flex gap-8'>
          <li>
            <p>HOME</p>
          </li>
          <li>
            <p>ABOUT</p>
          </li>
          <li>
            <p>PRODUCTS</p>
          </li>
          <li>
            <p>CONTACT</p>
          </li>
          <li>
            <p>Welcome, Pritika Mishra</p>
          </li>
          <li>
            <button>
              LOG OUT
            </button>
          </li>
          <li>
            <GrCart />
            <p>0</p>
          </li>
        </ul>
      </section>
    </nav>
  )
}

export default Nav