import * as React from 'react';
import SettingsNavigationBar from './settings-navigation-bar';
import ProductsPage from './products-page/products-page';
import { BehaviorSubject } from 'rxjs';
import { Modal } from 'src/app/angular/_interfaces/modal';

interface AdminProps {
    modal$: BehaviorSubject<Modal>;
}

class AdminPage extends React.Component<AdminProps> {
    currentUser: any = JSON.parse(localStorage.getItem('currentUser'));
    isUserAdmin: boolean =  this.currentUser && this.currentUser.type === 'admin' ? true : false;

    state = {
        message: '',
        selectedPage: this.isUserAdmin ? 'PRODUCTS' : 'ORDERS',
        productsList: [],
        isProductsPageVisible: this.isUserAdmin
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

    modalToggledCallback = (modalData: Modal) => {
        this.props.modal$.next(modalData);
    }

    render() {
        return (
            <div className={'admin-container'}>
                <section className={'left-section'}>
                    <SettingsNavigationBar
                        username = { this.currentUser ? this.currentUser.username : 'Unknown user' }
                        isAdmin = { this.isUserAdmin }
                        onSelectMenuItem = { this.itemSelectedCallback }>
                    </SettingsNavigationBar>
                </section>
                <section className={'right-section'}>
                    {
                        this.state.isProductsPageVisible && this.isUserAdmin
                            ?   <ProductsPage
                                    onModalToggle = {this.modalToggledCallback}>
                                </ProductsPage>
                            : ''
                    }
                </section>
            </div>
        );
    }
}

export default AdminPage;
