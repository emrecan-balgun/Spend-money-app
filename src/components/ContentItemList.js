import React from 'react'
import ContentItem from './ContentItem';
import config from "../config";

function ContentItemList() {
    const marketItems = config.marketItems;

    return (
        <div className="container">
            {
                marketItems.map((item) => (
                    <ContentItem key={item.id} item={item} />
                ))
            }
        </div>
    )
}

export default ContentItemList
