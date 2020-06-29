import * as React from 'react';
import SettingsNavigationBar from './settings-navigation-bar';
import ProductsPage from './products-page/products-page';

class AdminPage extends React.Component {

    state = {
        message: '',
        selectedPage: 'PRODUCTS',
        productsList: [],
        isProductsPageVisible: true
    };

    componentDidMount() {
        console.log('componentDidMount is called AdminPage');
    }

    // componentWillUnmount() {
    // }

    itemSelectedCallback = (menuItem) => {
        if (menuItem === 'PRODUCTS') {
            this.setState ({
                selectedPage: menuItem,
                isProductsPageVisible: true
            });
        } else {
            this.setState ({
                selectedPage: menuItem,
                isProductsPageVisible: false
            });
        }
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
                    {
                        this.state.isProductsPageVisible
                            ? <ProductsPage></ProductsPage>
                            : ''
                    }
                </section>
            </div>
        );
    }
}

export default AdminPage;
