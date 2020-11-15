import ShopItem from "../models/ShopItem";
import PropTypes from "prop-types";

function ShopItemFunc({item}) {
    const {brand, title, description, descriptionFull, price, currency} = item;

    return <div className="main-content">
        <h2>{title}</h2>
        <h1>{brand}</h1>
        <h3>{description}</h3>
        <div className="description">
            {descriptionFull}
        </div>
        <div className="highlight-window mobile">
            <div className="highlight-overlay"></div>
        </div>
        <div className="divider"></div>
        <div className="purchase-info">
            <div className="price">{currency}{price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
        </div>
    </div>;
}

ShopItemFunc.prototype = {
    brand: PropTypes.instanceOf(ShopItem).isReqiured
}

export default ShopItemFunc;
