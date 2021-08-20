import React from 'react'
import './Product.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useState } from 'react';

function Product() {


    const [product, setProduct] = useState([
        {
            image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/GreenLimes_jrodle.jpg',
            name:'lime',
            pieces:'12pcs',
            price:'1.5',
        },
        {
            image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Yellow_Limes_y0lbyo.jpg',
            name:'Lemon',
            pieces:'12pcs',
            price:'1.5',
        },
        {
            image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614569/pickbazar/grocery/RedCherries_zylnoo.jpg',
            name:'Cherry',
            pieces:'1lb',
            price:'2',
        },
        {
            image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg',
            name:'Celery Stick',
            pieces:'1lb',
            price:'0.7',
        },
        {
            image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/BabySpinach_xronqz.jpg',
            name:'Baby Spanich',
            pieces:'0.2lb',
            price:'0.6',
        },
        {
            image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/VeggiePlatter_ztcg0m.jpg',
            name:'Mix Vegetable Platter',
            pieces:'0.4lb',
            price:'1.6',
        },
        {
            image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/FrenchGreenBeans_azivow.jpg',
            name:'French Green Beans',
            pieces:'0.6lb',
            price:'1.8',
        },
        {
            image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Corn_dlrtbv.jpg',
            name:'Sweet Corn',
            pieces:'2.5lb',
            price:'3',
        },
        {
            image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/Cucumber_w6hlxr.jpg',
            name:'Cucumber',
            pieces:'4lb',
            price:'2.2',
        },
        {
            image:'https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/MiniPeppers_iydh8m.jpg',
            name:'Peper',
            pieces:'1.5lb',
            price:'8',
        },
        {
            image:'https://s3.amazonaws.com/redqteam.com/pickbazar/Alex_maquine_shoulder.jpg',
            name:'Alex Maqueeen Shoulde...',
            pieces:'1',
            price:'200',
        },
        {
            image:'https://s3.amazonaws.com/redqteam.com/pickbazar/Armani_wallet.jpg',
            name:'Armani Wallet',
            pieces:'1',
            price:'60',
        },
        {
            image:'https://s3.amazonaws.com/redqteam.com/pickbazar/furniture/Ash.png',
            name:'Ash Double Bed',
            pieces:'1',
            price:'250',
        },

        
    ])
    return (
        <div className="product">


            {product.map(({image,name,pieces,price})=>(
                <div className="product__card">
                <img src={image} alt=""/>
                <h5 className="product__name">{name}</h5>
                <p className="product__pieces">{pieces}</p>
                <div className="product__cardPrice">
                    <p className="product__price">${price}</p>
                    <ShoppingBasketIcon />
                </div>
            </div>
            ))}
            
        </div>
    )
}

export default Product
