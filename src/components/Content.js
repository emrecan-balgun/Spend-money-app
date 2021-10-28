import ContentCard from "./ContentCard";
import ContentItemList from "./ContentItemList";
import { useSelector } from "react-redux";
import { totalMoneySelector } from "../redux/marketSlice";
import { priceBeauty } from "./priceBeauty";

function Content() {
    const totalMoney = useSelector(totalMoneySelector);

    return (
        <div>
            <div className="money">
                <span className="balance">${priceBeauty(totalMoney)}</span>
            </div>
            <ContentItemList />
            <ContentCard />
        </div>
    );
}

export default Content
