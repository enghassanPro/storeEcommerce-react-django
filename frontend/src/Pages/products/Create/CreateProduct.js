import React, { Component } from 'react';
import '../../../../static/css/style_product.css';


export default class CreateProduct extends Component {


    render() {
        return (
            <form action="#" method="post" id="new-product" onSubmit={this.props.formHandler} encType="multipart/form-data">
                <div className="contact-grids1 w3agile-6">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 contact-form1 form-group">
                            <label className="col-form-label">Name:</label>
                            <input type="text" name='title' className="form-control" placeholder="Product Name" required />
                        </div>
                        <div className="col-md-3 col-sm-3 contact-form1 form-group">
                            <label className="col-form-label">Brand:</label>
                            <select className="form-control" name="brand" required>
                                <option defaultChecked value="">Select Brand ...</option>
                                {
                                    Object.keys(this.props.brand).map(data => <option key={data} value={this.props.brand[data].id}>{this.props.brand[data].name}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-md-3 col-sm-3 contact-form1 form-group">
                            <label className="col-form-label">Quantity:</label>
                            <input type="number" name="quantity" className="form-control" required />
                        </div>
                        <span className="col-md-10 col-sm-10"><hr /></span>
                        <div className="col-md-4 col-sm-4 contact-form1 form-group">
                            <label className="col-form-label">Price:</label>
                            <input type="number" name="price" step="0.01" className="form-control" required />
                        </div>
                        <div className="col-md-3 col-sm-3 contact-form1 form-group">
                            <label className="col-form-label">Currency:</label>
                            <select className="form-control" name="currency" required>
                                {
                                    this.props.currency ? this.props.currency.map((data, i) => {
                                        if (i == 0)
                                            return <option key={data[0]} defaultChecked value={data[0]}>{data[1]}</option>
                                        return <option key={data[0]} value={data[0]}>{data[1]}</option>
                                    }) : null
                                }
                            </select>
                        </div>
                        <div className="col-md-3 col-sm-3 contact-form1 form-group">
                            <label className="col-form-label">Condition:</label>
                            <select className="form-control" name="condition" required>
                                {
                                    this.props.condition ? this.props.condition.map((data, i) => {
                                        if (i == 0)
                                            return <option key={data[0]} defaultChecked value={data[0]}>{data[1]}</option>
                                        return <option key={data[0]} value={data[0]}>{data[1]}</option>
                                    }) : null
                                }
                            </select>
                        </div>
                        <span className="col-md-10 col-sm-10"><hr /></span>
                        <div className="col-md-12 col-sm-12 main">
                            <label className="col-form-label">Specification:</label>
                            <div className="row specific">
                                <div className="col-md-4 col-sm-4 contact-form1">
                                    <label className="col-form-label">Name:</label>
                                    <input type="text" name="specific_name_0" className="form-control" placeholder="Name" required />
                                </div>
                                <div className="col-md-4 col-sm-4 contact-form1">
                                    <label className="col-form-label">Value:</label>
                                    <input type="text" name="specific_value_0" className="form-control" placeholder="value" required />
                                </div>
                                {this.props.spDel ? <span className='delete-specific' onClick={this.props.specificDelHandler}>x</span> : ""}
                            </div>
                            {
                                this.props.spCon.map((e, i) => <div key={i} className="row specific">{e}</div>)
                            }

                            <span className="add-specific btn btn-primary" id="add-specific" onClick={this.props.specificHandler}>add specification</span>
                        </div>
                        <span className="col-md-10 col-sm-10"><hr /></span>
                        <div className="col-md-10 col-sm-10 contact-form1 form-group">
                            <label className="col-form-label">Description: </label>
                            <textarea className="form-control" name="description" placeholder="Description" required></textarea>
                        </div>
                        <span className="col-md-10 col-sm-10"><hr /></span>
                        <div className="col-md-10 col-sm-10 main-img">
                            <div className="row">
                                {
                                    [...Array(2)].map((e, i) => <div key={i} className="col-md-4 col-sm-4 pro-img">
                                        <label className="col-form-label">Image: </label>
                                        <input type="file" name={`image_${i}`} className="form-control-file" accept="image/*" required />
                                    </div>)
                                }
                            </div>
                        </div>
                        <span className="col-md-10 col-sm-10"><hr /></span>
                        <div className="col-md-4 col-sm-4 contact-form1 form-group" id="platform">
                            {
                                this.props.platform ? this.props.platform : <span className="btn btn-primary" id="add-platform" onClick={this.props.platformHandler}>add Platform</span>
                            }
                        </div>
                        <div className="col-md-3 col-sm-3 contact-form1 form-group" id="color">
                            {
                                this.props.color ? this.props.color : <span className="btn btn-primary" id="add-color" onClick={this.props.colorHandler}>add Color</span>
                            }
                        </div>

                        <div className="col-md-3 col-sm-3 contact-form1 form-group" id="size">
                            {
                                this.props.size ? this.props.size : <span className="btn btn-primary" id="add-size" onClick={this.props.sizeHandler}>add Size</span>
                            }
                        </div>
                        <span className="col-md-10 col-sm-10"><hr /></span>
                        <div className="col-md-10 col-sm-10 contact-form1 form-group" id="term-condition">

                            {
                                this.props.termCondition ? this.props.termCondition : <span className="btn btn-primary" id="add-term-condition" onClick={this.props.termConditionHandler}>add Term Condition</span>
                            }
                        </div>
                        <span className="col-md-10 col-sm-10"><hr /></span>
                        <div className="col-md-6 col-sm-6 contact-form1 form-group" id="recommended-use">
                            {
                                this.props.recommendedUse ? this.props.recommendedUse : <span className="btn btn-primary" id="add-recommended-use" onClick={this.props.recommendedUseHandler}>add Recommended Use</span>
                            }
                        </div>
                        <div className="col-md-10 col-sm-10 contact-form">
                            <input type="submit" id="submit" name="submit" className="btn btn-primary" value="Submit" />
                        </div>
                    </div>

                </div>
            </form>

        );
    }
}