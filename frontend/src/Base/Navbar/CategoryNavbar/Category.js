import React, { Component } from 'react';
import '../../../../static/css/Navbar.css';

class Category extends Component {
    render() {
        const selection = this.props.multiSelect.map((op, i) => (
            <option key={op + i} value={op}>{op}</option>
        ));
        return (
            <form action={this.props.actionForm ? this.props.actionForm : "#"} method={this.props.methodForm ? this.props.methodForm : "POST"}>
                <select id={this.props.idSelection ? this.props.idSelection : 'agileinfo-nav_search'}
                    name={this.props.nameSelection ? this.props.nameSelection : "agileinfo_search"}
                    className="border" required="">

                    <option value="">{this.props.defaultOption ? this.props.defaultOption : "All Categories"}</option>
                    {selection}
                </select>
            </form>
        );
    }
}

export default Category;