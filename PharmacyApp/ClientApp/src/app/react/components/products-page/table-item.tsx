import * as React from 'react';

interface Props {
    onItemSubmited: (item: any) => void;
    data: any;
}

/**
 *  It will build a single row in the products table with all data related to product
 */
class TableItem extends React.Component<Props> {

    state = {
        isEdit: false,
        firstColumn: this.props.data.productName,
        secondColumn: this.props.data.categoryName,
        thirdColumn: this.props.data.subcategoryName,
        fourthColumn: this.props.data.quantity,
        fifthColumn: this.props.data.productDescription,
        sixthColumn: this.props.data.price,
        seventhColumn: this.props.data.previousPrice,
    };

    toggleEdit = () => {
        this.state.isEdit = !this.state.isEdit;
        this.setState({
            isEdit: this.state.isEdit
        });
    }

    submitChanges = () => {
        this.props.data.productName = this.state.firstColumn;
        // this.props.data.categoryName = this.state.secondColumn;
        // this.props.data.subcategoryName = this.state.thirdColumn;
        this.props.data.quantity = Number(this.state.fourthColumn);
        this.props.data.productDescription = this.state.fifthColumn;
        this.props.data.price = Number(this.state.sixthColumn);
        this.props.data.previousPrice = Number(this.state.seventhColumn);
        this.props.onItemSubmited(this.props.data);
        this.toggleEdit();
    }

    handleFirstColumnChange = (event) => {
        this.setState({
            firstColumn: event.target.value
        });
    }
    // handleSecondColumnChange = (event) => {
    //     this.setState({
    //         secondColumn: event.target.value
    //     });
    // }
    // handleThirdColumnChange = (event) => {
    //     this.setState({
    //         thirdColumn: event.target.value
    //     });
    // }
    handleFourthColumnChange = (event) => {
        this.setState({
            fourthColumn: event.target.value
        });
    }
    handleFifthColumnChange = (event) => {
        this.setState({
            fifthColumn: event.target.value
        });
    }
    handleSixthColumnChange = (event) => {
        this.setState({
            sixthColumn: event.target.value
        });
    }
    handleSeventhColumnChange = (event) => {
        this.setState({
            seventhColumn: event.target.value
        });
    }

    render() {
        return (
            !this.state.isEdit
            ?
            <tr className='body-row'>
                <th className='row-item'>{this.props.data.productName}</th>
                <th className='row-item'>{this.props.data.categoryName}</th>
                <th className='row-item'>{this.props.data.subcategoryName}</th>
                <th className='row-item'>{this.props.data.quantity}</th>
                <th className='row-item'>{this.props.data.productDescription}</th>
                <th className='row-item'>{this.props.data.price}</th>
                <th className='row-item'>{this.props.data.previousPrice}</th>
                <th className='row-item'>
                    <span onClick={() => this.toggleEdit()} className='action edit-action'><i className='far fa-edit'></i></span>
                    <span className='action remove-action'><i className='fas fa-trash-alt'></i></span>
                </th>
            </tr>
            :
            <tr className='body-row'>
                <th className='row-item'>
                    <input type='text' value={this.state.firstColumn} onChange={this.handleFirstColumnChange} />
                </th>
                <th className='row-item'>
                    {this.props.data.categoryName}
                    {/* <input type='text' value={this.state.secondColumn} onChange={this.handleSecondColumnChange} /> */}
                </th>
                <th className='row-item'>
                    {this.props.data.subcategoryName}
                    {/* <input type='text' value={this.state.thirdColumn} onChange={this.handleThirdColumnChange} /> */}
                </th>
                <th className='row-item'>
                    <input type='text' value={this.state.fourthColumn} onChange={this.handleFourthColumnChange} />
                </th>
                <th className='row-item'>
                    <input type='text' value={this.state.fifthColumn} onChange={this.handleFifthColumnChange} />
                </th>
                <th className='row-item'>
                    <input type='text' value={this.state.sixthColumn} onChange={this.handleSixthColumnChange} />
                </th>
                <th className='row-item'>
                    <input type='text' value={this.state.seventhColumn} onChange={this.handleSeventhColumnChange} />
                </th>
                <th className='row-item'>
                    <span onClick={() => this.submitChanges()} className='action edit-action'><i className='fas fa-check'></i></span>
                    <span onClick={() => this.toggleEdit()} className='action remove-action'><i className='fas fa-times'></i></span>
                </th>
            </tr>
        );
    }
}

export default TableItem;
