import * as React from 'react';
import { dataService } from '../../services/data.service.js';
import { Modal } from 'src/app/angular/_interfaces/modal.js';
import TableItem from './table-item';

interface Props {
    onModalToggle: (data: Modal) => void;
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

class ProductsPage extends React.Component<Props> {

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
                products: data,
                isProductsLoading: false
            });
            // console.log(data);
        })
        .catch((error) => {
            console.log('Get products failed', error);
            this.setState ({
                products: this.state.products,
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

    openAddProductModal() {
        const modalData: Modal = {
            id: 'add-product-form',
            opened: true
        };
        this.props.onModalToggle(modalData);
    }


    tableItemUpdatedCallback = (item) => {
        // console.log('tableItemUpdatedCallback', item);
        const request = {
            productName: item.productName,
            categoryName: item.categoryName,
            subcategoryName: item.subcategoryName,
            quantity: item.quantity,
            productDescription: item.productDescription,
            subcategoryId: item.subcategoryID,
            categoryID: item.categoryID,
            productId: item.productId,
            price: item.price,
            previousPrice: 0
        };

        dataService.updateProductById(item.productId, request)
        .then((data) => {
            this.fetchProducts();
            // console.log(data);
        })
        .catch((error) => {
            console.log('Update product failed', error);
            this.setState ({});
        });
    }

    render() {
        // console.log('Get categories from ProductsPage', this.props.products);
        return (
            <div className='products-page-container'>
                <div className='add-button-container'>
                    <button className='button primary-button primary-green' onClick={() => this.openAddProductModal()}>
                        <span className='icon-box'><i className='fas fa-plus'></i></span>Add new product
                    </button>
                </div>

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
                                <th className='header-item'>Description</th>
                                <th className='header-item'>Price</th>
                                <th className='header-item'>Previous price</th>
                                <th className='header-item'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='table-body'>
                            <React.Fragment>
                            {
                                this.state.products.map(
                                    (product) =>
                                        <TableItem
                                            onItemSubmited = {this.tableItemUpdatedCallback}
                                            data={product}
                                            key={product.productId}>
                                        </TableItem>
                                )
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
