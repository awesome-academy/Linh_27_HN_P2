import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../sass/components/productItem.sass";
import StarIcon from "@material-ui/icons/Star";

function ProductItem(props) {
	const [product] = useState(props.product);

	return (
		<Link to="/" className="product">
			<div className="product__head">
				<div
					className="product__head-image"
					style={{ background: `url(${product.cover}) no-repeat center` }}
				></div>
				<div className="product__head-detail">
					<div className="product__head-detail-name">{product.name}</div>
					<div className="product__head-detail-publisher">
						{product.publisher}
					</div>
				</div>
			</div>
			<div className="product__foot">
				<div className="product__foot-price">
					{product.price === 0 ? "Free" : "$" + product.price}
				</div>
				<div className="product__foot-rating">
					<StarIcon />
					{product.rating}
				</div>
			</div>
		</Link>
	);
}

export default ProductItem;
