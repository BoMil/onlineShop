import * as React from 'react';
import SettingsNavigationBar from './settings-navigation-bar';
import ProductsPage from './products-page/products-page';
import { BehaviorSubject } from 'rxjs';
import { Modal } from 'src/app/angular/_interfaces/modal';

interface AdminProps {
    modal$: BehaviorSubject<Modal>;
}

class AdminPage extends React.Component<AdminProps> {

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

    modalToggledCallback = (modalData: Modal) => {
        this.props.modal$.next(modalData);
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
                    {
                        this.state.isProductsPageVisible
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
