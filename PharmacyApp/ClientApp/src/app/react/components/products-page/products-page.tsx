import * as React from 'react';
import { IProduct } from 'src/app/model/product';
import { dataService } from '../../services/data.service.js';

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

/**
 * It will build a products inventory table with number of
 * products, categories, subcategories and products that are out of stock
 */
function ProductsInventory(props) {
    return (
        <div className='inventory-container'>
            <div className='inventory-column'>
                <div className='label-title'>Total products</div>
                <div className='label-value'>{props.data.totalProducts}</div>
            </div>
            <div className='inventory-column'>
                <div className='label-title'>Out of stock</div>
                <div className='label-value'>{props.data.outOfStock}</div>
            </div>
            <div className='inventory-column'>
                <div className='label-title'>Total categories</div>
                <div className='label-value'>{props.data.totalCategories}</div>
            </div>
            <div className='inventory-column'>
                <div className='label-title'>Total subcategories</div>
                <div className='label-value'>{props.data.totalSubcategories}</div>
            </div>
        </div>
    );
}

class ProductsPage extends React.Component {

    state = {
        products: [],
        inventory: {
            totalProducts: 0,
            outOfStock: 0,
            totalCategories: 0,
            totalSubcategories: 0
        },
        isProductsLoading: true
    };

    componentDidMount() {
        console.log('componentDidMount is called ProductsPage');
        this.fetchInventory();
        this.fetchProducts();
    }

    fetchProducts() {
        dataService.getAllProducts()
        .then((data) => {
            this.setState ({
                products: data.allProducts,
                isProductsLoading: false
            });
            // console.log(data);
        })
        .catch((error) => {
            console.log('Get products failed', error);
            this.setState ({
                products: [],
                isProductsLoading: false
            });
        });
    }

    fetchInventory() {
        dataService.getInventoryData()
        .then((inventory) => {
            this.setState ({
                inventory: inventory.data,
            });
            // console.log(data);
        })
        .catch((error) => {
            console.log('Get inventory failed', error);
            this.setState ({
                inventory: {
                    totalProducts: 0,
                    outOfStock: 0,
                    totalCategories: 0,
                    totalSubcategories: 0
                },
            });
        });
    }

    render() {
        // console.log('Get categories from ProductsPage', this.props.products);
        return (
            <div className='products-page-container'>
                <React.Fragment>
                    <ProductsInventory data={this.state.inventory}></ProductsInventory>
                </React.Fragment>
                {
                    !this.state.isProductsLoading
                    ?
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
                            <React.Fragment>
                            {
                                this.state.products.map((product) => <ProductItem key={product.productId} product={product} />)
                            }
                            </React.Fragment>
                        </tbody>
                    </table>
                    : 'Fetching products...'
                }
            </div>
        );
    }
}

export default ProductsPage;
