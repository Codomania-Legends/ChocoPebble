import React, { useEffect, useState } from 'react'
import CHOCOLATE from "./Chocolate.json"
import ICECREAM from "./Icecream.json"
import "./Buy.css"

function Buy({heading , what}) {
    const [ data , setData ] = useState([])
    useEffect( () => {
        setData(ICECREAM)
        if( what == "chocolate" ) setData(CHOCOLATE)
    } , [] )
    return (
        <>
            <main className="buySection background-gr">
                <section className="mainBuyComponent flex">
                    <div className="heading-buy flex">{heading}</div>
                    <div className="componentBuySectionDivs flex">
                        {
                            data.length != 0 
                            &&
                            data.map( (v , i) => (
                                <div className="buyBlock flex" key={`${v , i}`}>
                                    <div className="blobkbuyDiv flex">
                                        <div className="options-buy flex">
                                            {v.recommend ? 
                                                <div className="recommend-buy">Recommend</div>
                                            : null}
                                            {v.new ? 
                                                <div className="new-buy">New</div> 
                                            : null}
                                        </div>
                                        <img src={v.image} className="buyImage" />
                                        <div className="namePrice-buy flex">
                                            <div className="buyName">{v.name}</div>
                                            <div className="brandPriceLike-buy flex">
                                                <div className="brandPriceDiv">
                                                    <div className="brand-buy"><b>{v.brand}</b></div>
                                                    <div className="price-buy">₹{v.price}/-</div>
                                                </div>
                                                <div className="like-buy">
                                                    <i class="fa-solid fa-heart"></i>
                                                </div>
                                            </div>
                                            <div className="gmCart flex">
                                                <div className="weight">{v.gm} gm</div>
                                                <div className="cart-buy">
                                                    <i class="fa-brands fa-opencart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) )
                        }
                    </div>
                </section>
            </main>
        </>
    )
}

export default Buy
