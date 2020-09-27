import React, { useState } from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
    const [products] = useState(props.products);
    
	return (
		<div className="listProducts">
			{
				props.title ? (
					<div className="listProducts__title title">{props.title}</div>
				) : ""
			}
			<div className="listProducts__list">
				{products.map((value, key) => (
					<div className="listProducts__list-item" key={key}>
						<ProductItem product={value} />
					</div>
				))}
			</div>
		</div>
	);
}

export default ProductList;
