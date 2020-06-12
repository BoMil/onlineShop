import * as React from 'react';

interface Props {
    onSelectMenuItem: (menuItem: string) => void;
}

class SettingsNavigationBar extends React.Component<Props> {

    selectedMenuItem = 'PRODUCTS';

    selectMenuItem = (menuItem: string) => {
        // this.setState({ selectMenuItem: menuItem });
        this.selectedMenuItem = menuItem;
        this.props.onSelectMenuItem(menuItem);
    }

    render() {
        return (
            <div className='settings-container'>
                <ul className='settings-menu'>
                    <li className={`settings-item ${this.selectedMenuItem === 'PRODUCTS' ? 'selected' : ''}`}
                        onClick={() => this.selectMenuItem('PRODUCTS')}>PRODUCTS
                    </li>
                    <li className={`settings-item ${this.selectedMenuItem === 'ORDERS' ? 'selected' : ''}`}
                        onClick={() => this.selectMenuItem('ORDERS')}>ORDERS
                    </li>
                    <li className={`settings-item ${this.selectedMenuItem === 'SETTINGS' ? 'selected' : ''}`}
                        onClick={() => this.selectMenuItem('SETTINGS')}>SETTINGS
                    </li>
                </ul>
                <div className='divider'></div>
                <div className='user-section'>
                    <div className='image-box'>
                        <img src='../../../assets/imgs/user.png'></img>
                    </div>
                    <div className='name-box'>
                        User name
                    </div>
                </div>
            </div>
        );
    }
}

export default SettingsNavigationBar;
