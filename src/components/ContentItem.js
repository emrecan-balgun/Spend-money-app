import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBasket, removeBasket, totalMoneySelector } from '../redux/marketSlice';
import { priceBeauty } from './priceBeauty';

function ContentItem({ item }) {
    const dispatch = useDispatch();
    const totalMoney = useSelector(totalMoneySelector);
    const [marketItem, setMarketItem] = useState({...item, quantity: 0});

    const handleBasketAdd = () => {
        const newMarketItem = {
            ...marketItem,
            quantity: marketItem.quantity + 1,
        };
        setMarketItem(newMarketItem);
        dispatch(addBasket(newMarketItem));
    };

    const handleBasketRemove = () => {
        const newMarketItem = {
            ...marketItem,
            quantity: marketItem.quantity -1,
        };
        setMarketItem(newMarketItem);
        dispatch(removeBasket(newMarketItem));
    };

    return (
            <div className="itemBox">
                <img src={marketItem.photo} alt={marketItem.name} />
                <span className="itemName">{item.name}</span>
                <span className="price">${priceBeauty(item.price)}</span>
                <div className="buttonContainer">
                    <button 
                        className={marketItem.quantity > 0 ? 'sellBtn' : 'btnDisable'}
                        onClick={() => handleBasketRemove()}
                        disabled={marketItem.quantity <= 0}
                    >Sell</button>
                    <input 
                        className="amount" 
                        type="number" 
                        value={marketItem.quantity}
                        disabled
                    />
                    <button 
                        className={totalMoney - marketItem.price >= 0 ? 'buyBtn' : 'btnDisable'}
                        onClick={() => handleBasketAdd()}
                        disabled={totalMoney - marketItem.price < 0}
                    >Buy</button>
                </div>
            </div>   
    )
}

export default ContentItem
