import { basketItemsSelector, spendedMoneySelector } from '../redux/marketSlice';
import { priceBeauty, priceBeautySorter } from './priceBeauty';
import { useSelector } from 'react-redux';

function ContentCard() {
    const spendedMoney = useSelector(spendedMoneySelector);
    const basketItems = useSelector(basketItemsSelector);

    return (
        basketItems.length > 0 && (
            <div className="receipt">
                <h1 className="title">Your Receipt</h1>
                <div className="bill">
                    {
                        basketItems.map((item) => (
                            <div className="purchased">
                                <span className="itemName">{item.name}</span>
                                <span className="quantity">x{item.quantity}</span>
                                <span className="price">${priceBeautySorter(item.price * item.quantity)}</span>
                            </div>
                        ))
                    }
                    <hr style={{ width: 300, backgroundColor: 'black', height: '0.1px'}}/>
                    <div className="total">
                        <span className="totalTitle">total</span>
                        <span className="totalPrice">${priceBeauty(spendedMoney)}</span>
                    </div>
                </div>
            </div>
        )
    )
}

export default ContentCard
