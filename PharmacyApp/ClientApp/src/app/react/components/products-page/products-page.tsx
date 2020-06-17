import * as React from 'react';
import { IProduct } from 'src/app/model/product';

interface Props {
    products: IProduct[];
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
                            this.props.products.map((product) =>
                                <tr className='body-row' key={product.productId}>
                                    <th className='row-item'>{product.productName}</th>
                                    <th className='row-item'>{product.categoryName}</th>
                                    <th className='row-item'>{product.subcategoryName}</th>
                                    <th className='row-item'>{product.quantity}</th>
                                    <th className='row-item'>{product.price}</th>
                                    <th className='row-item'>
                                        <span className='edit-icon'>E </span>
                                        <span className='remove-icon'> R</span>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default ProductsPage;
