import * as React from 'react';
import { IProduct } from 'src/app/model/product';

interface Props {
    products: IProduct[];
}

/**
 *  It will build a single row in the products table with all data related to product
 */
function ProductItem(props) {
    return (
        <tr className='body-row' >
            <th className='row-item'>{props.product.productName}</th>
            <th className='row-item'>{props.product.categoryName}</th>
            <th className='row-item'>{props.product.subcategoryName}</th>
            <th className='row-item'>{props.product.quantity}</th>
            <th className='row-item'>{props.product.price}</th>
            <th className='row-item'>
                <span className='action edit-action'><i className='far fa-edit'></i></span>
                <span className='action remove-action'><i className='fas fa-trash-alt'></i></span>
            </th>
        </tr>
    );
}

class ProductsPage extends React.Component<Props> {

    render() {
        console.log('Get categories from ProductsPage', this.props.products);
        return (
            <div className='products-page-container'>
                <table className='products-table'>
                    <thead className='table-header'>
                        <tr className='header-row'>
                            <th className='header-item'>Product name</th>
                            <th className='header-item'>Category</th>
                            <th className='header-item'>Subcategory</th>
                            <th className='header-item'>Inventory</th>
                            <th className='header-item'>Price</th>
                            <th className='header-item'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {
                            this.props.products.map((product) => <ProductItem key={product.productId} product={product} />)
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProductsPage;
