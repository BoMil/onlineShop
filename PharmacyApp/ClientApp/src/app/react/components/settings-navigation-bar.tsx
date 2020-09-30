import * as React from 'react';

interface Props {
    onSelectMenuItem: (menuItem: string) => void;
    isAdmin: boolean;
    username: string;
}

class SettingsNavigationBar extends React.Component<Props> {

    // Set products to be visible by default if user is admin, otherwise set orders
    selectedMenuItem = this.props.isAdmin ? 'PRODUCTS' : 'ORDERS';

    selectMenuItem = (menuItem: string) => {
        // this.setState({ selectMenuItem: menuItem });
        this.selectedMenuItem = menuItem;
        this.props.onSelectMenuItem(menuItem);
    }

    render() {
        console.log('SettingsNavigationBar was rendered');
        return (
            <div className='settings-container'>
                <ul className='settings-menu'>
                    {
                        this.props.isAdmin
                        ?
                        <li className={`settings-item ${this.selectedMenuItem === 'PRODUCTS' ? 'selected' : ''}`}
                            onClick={() => this.selectMenuItem('PRODUCTS')}><i className='fas fa-mortar-pestle'></i>PRODUCTS
                        </li>
                        :
                        <React.Fragment></React.Fragment>
                    }
                    <li className={`settings-item ${this.selectedMenuItem === 'ORDERS' ? 'selected' : ''}`}
                        onClick={() => this.selectMenuItem('ORDERS')}><i className='fas fa-shopping-cart'></i>ORDERS
                    </li>
                    <li className={`settings-item ${this.selectedMenuItem === 'SETTINGS' ? 'selected' : ''}`}
                        onClick={() => this.selectMenuItem('SETTINGS')}><i className='fas fa-cogs'></i>SETTINGS
                    </li>
                </ul>
                <div className='divider'></div>
                <div className='user-section'>
                    <div className='image-box'>
                        <img src='../../../assets/imgs/user.png'></img>
                    </div>
                    <div className='name-box'>{ this.props.username }</div>
                </div>
            </div>
        );
    }
}

export default SettingsNavigationBar;
