import * as React from 'react';
import SettingsNavigationBar from './settings-navigation-bar';

class AdminPage extends React.Component {

    state = {
        message: ''
    };

    itemSelectedCallback = (menuItem) => {
        this.setState ({ message: menuItem });
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
                    <div>{this.state.message} was clicked</div>
                </section>
            </div>
        );
    }
}

export default AdminPage;
