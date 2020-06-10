import * as React from 'react';

class AdminPage extends React.Component {

    render() {
        return (
            <div className={'admin-container'}>
                <section className={'left-section'}></section>
                <section className={'right-section'}>
                    <h1>Welcome to Admin dashboard!</h1>
                </section>
            </div>
        );
    }
}

export default AdminPage;
