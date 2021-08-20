import React, { useState } from 'react'
import './Category.css'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Product from './Product';


function Category() {
    const [categories, setCategories] = useState([
        {
            name: 'Fruits & Vegetables',
        },
        {
            name: 'Meat & Fish',
        },
        {
            name: 'Snacks',
        },
        {
            name: 'Pet Care',
        },
        {
            name: 'Home & Cleaning',
        },
        {
            name: 'Dairy',
        },
        {
            name: 'Cooking',
        },
        {
            name: 'Breakfast',
        },
        {
            name: 'Beverage',
        },
        {
            name: 'Beauty & Health',
        },
    ])
    return (
        <div className="category">
            <div className="category__left">

                {categories.map(({name})=>(
                    <div className="categories">
                    
                    <p>{name}</p>
                    <KeyboardArrowRightIcon />
                </div>
                ))}
            
            </div>
            <div className="category__right">
                    <Product />

            </div>

            
        </div>
    )
}

export default Category
