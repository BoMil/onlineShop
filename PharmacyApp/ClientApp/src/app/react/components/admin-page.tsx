import * as React from 'react';
import SettingsNavigationBar from './settings-navigation-bar';
import ProductsPage from './products-page/products-page';
import { dataService } from '../services/data.service.js';

class AdminPage extends React.Component {

    state = {
        message: '',
        selectedPage: 'PRODUCTS',
        productsList: [],
        isProductsPageVisible: false
    };

    componentDidMount() {
        console.log('componentDidMount is called');
        this.fetchProducts();
    }

    // componentWillUnmount() {
    // }

    itemSelectedCallback = (menuItem) => {
        if (menuItem === 'PRODUCTS') {
            this.fetchProducts();
        } else {
            this.setState ({
                selectedPage: menuItem,
                isProductsPageVisible: false
            });
        }
    }

    fetchProducts() {
        dataService.getAllProducts()
        .then((data) => {
            this.setState ({
                productsList: data.allProducts,
                selectedPage: 'PRODUCTS',
                isProductsPageVisible: data.allProducts.length ? true : false
            });
            // console.log(data);
        })
        .catch((error) => {
            console.log('Get categories failed', error);
        });
    }

    render() {
        return (
            <div className={'admin-container'}>
                <section className={'left-section'}>
                    <SettingsNavigationBar
                        onSelectMenuItem = { this.itemSelectedCallback }>
                    </SettingsNavigationBar>
                </section>
                <section className={'right-section'}>
                    <h1>Welcome to Admin dashboard!</h1>
                    <div>{this.state.selectedPage} was clicked</div>
                    {
                        this.state.isProductsPageVisible
                            ? <ProductsPage products={this.state.productsList}></ProductsPage>
                            : ''
                    }
                </section>
            </div>
        );
    }
}

export default AdminPage;
