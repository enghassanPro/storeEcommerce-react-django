import React, { Component } from 'react';
import '../../../../static/css/main_style.css';
import '../../../../static/css/style_product.css';
import { Container, Alert } from 'react-bootstrap';
import CreateProduct from './CreateProduct';
import axios from 'axios';
import $ from 'jquery';

export default class CreateProductBuilder extends Component {
    state = {
        data: {},
        spDel: false,
        spCon: [],
        platform: '',
        color: '',
        size: '',
        recomUse: '',
        termCon: '',
        countSp: 1,
        err: '',
        sucess: '',
    }

    componentDidMount() {
        document.title = 'New Product'
        axios.get("/electro/product/create").then(e => {

            var data = {}
            Object.keys(e.data).map((d, i) => {
                data[d] = e.data[d]
            });
            return this.setState({
                data: data,

            })
        }
        )
    }

    specificHandler = (event) => {

        var add = <React.Fragment>
            <div className="col-md-4 col-sm-4 contact-form1">
                <label className="col-form-label">Name:</label>
                <input type="text" name={`specific_name_${this.state.countSp}`} className="form-control" placeholder="Name" required />
            </div>
            <div className="col-md-4 col-sm-4 contact-form1">
                <label className="col-form-label">Value:</label>
                <input type="text" name={`specific_value_${this.state.countSp}`} className="form-control" placeholder="value" required />
            </div>
            {<span className='delete-specific' onClick={this.specificDelHandler}>x</span>}
        </React.Fragment>
        var count = this.state.countSp + 1
        this.setState({ spCon: [...this.state.spCon, add], spDel: true, countSp: count })

    }
    specificDelHandler = (event) => {

        if (document.getElementsByClassName(event.target.className).length == 2)
            this.setState({ spDel: false })
        event.target.parentNode.remove()
    }

    platformHandler = (event) => {
        // console.log("platformsss")
        if (event.target.id === 'add-platform') {
            var add =
                <div className="col-md-12 col-sm-12">
                    <label className="col-form-label">Platform:</label>
                    <input type="text" name="platform" className="form-control" placeholder="Platform..." required />
                    <span id='delete-platform' onClick={this.platformHandler}>x</span>
                </div>
            this.setState({ platform: add })

        } else
            this.setState({ platform: '' })



    }
    colorHandler = (event) => {
        if (event.target.id === 'add-color') {

            var add = <div className="col-md-12 col-sm-12">
                <label className="col-form-label">Color:</label>
                {/* <input type="text" className="form-control" placeholder="Platform..." /> */}
                <select className="form-control" multiple name="color" required>
                    {
                        this.state.data.color.map((e, i) => {
                            if (i === 0)
                                return <option key={i} defaultChecked value={e[0]}>{e[1]}</option>
                            return <option key={i} value={e[0]}>{e[1]}</option>

                        })
                    }
                </select>
                <span id='delete-color' onClick={this.colorHandler}>x</span>
            </div>

            this.setState({ color: add })
        } else
            this.setState({ color: '' })

    }
    sizeHandler = (event) => {
        if (event.target.id === 'add-size') {

            var add = <div className="col-md-12 col-sm-12">
                <label className="col-form-label">Size:</label>
                <input type="number" className="form-control" name="size_inp" placeholder="Size ..." required />
                <label className="col-form-label">Size:</label>
                <select className="form-control" name="size_select" required>
                    {
                        this.state.data.size.map((e, i) => {
                            if (i === 0)
                                return <option key={i} defaultChecked value={e[0]}>{e[1]}</option>

                            return <option key={i} value={e[0]}>{e[1]}</option>

                        })
                    }
                </select>
                <span id='delete-size' onClick={this.sizeHandler}>x</span>
            </div>
            this.setState({ size: add })
        } else
            this.setState({ size: '' })

    }
    termConditionHandler = (event) => {
        if (event.target.id === 'add-term-condition') {

            var add = <div className="col-md-12 col-sm-12">
                <label className="col-form-label">Term Condition:</label>
                <textarea className="form-control" name="term_condition" placeholder="Term Condition ..." required></textarea>
                <span id='delete-term-condition' onClick={this.termConditionHandler}>x</span>
            </div>
            this.setState({ termCon: add })
        } else
            this.setState({ termCon: '' })

    }
    recommUseHandler = (event) => {
        if (event.target.id === 'add-recommended-use') {

            var add = <div className="col-md-12 col-sm-12">
                <label className="col-form-label">Recommended Use:</label>
                <input type="text" className="form-control" name="recom_use" placeholder="Recommended Use ..." required />
                <span id='delete-recommended-use' onClick={this.recommUseHandler}>x</span>
            </div>
            this.setState({ recomUse: add })
        } else
            this.setState({ recomUse: '' })

    }
    formHandler = (event) => {
        event.preventDefault();
        this.sendData(this.extractData([...event.target.elements]))
    }

    extractData = (extract) => {
        var sp_data = {};
        var data = {};
        var form_data = new FormData()
        extract.map(e => {
            if (e.name !== 'submit') {
                if (e.name.includes("specific")) {
                    if (e.name.includes("specific_name")) {
                        var val = e.value
                        sp_data['name'] = val
                    } else {
                        var val = e.value
                        sp_data['value'] = val
                        if (data['specific'])
                            data['specific'] = [...data['specific'], sp_data]
                        else
                            data['specific'] = [sp_data]
                        sp_data = {}
                    }
                } else if (e.name.includes("image")) {
                    form_data.append(e.name, e.files[0])
                } else if (e.name.includes("color")) {
                    [...e.selectedOptions].map(d => {
                        if (data['color'])
                            data['color'] = [...data['color'], d.value]
                        else
                            data['color'] = [d.value]

                    })
                } else if (e.name.includes('size')) {
                    if (data['size'])
                        data['size'] = [...data['size'], e.value]
                    else
                        data['size'] = [e.value]
                } else {
                    data[e.name] = e.value
                }
            }
        })
        data['user'] = this.state.data.user.id
        form_data.append('data', JSON.stringify(data))
        return form_data
    }

    sendData = (data) => {

        axios.post("/electro/product/create", data).then(e => {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            this.setState({
                sucess: "Successfully Added!",
                spDel: false,
                spCon: [],
                platform: '',
                color: '',
                size: '',
                recomUse: '',
                termCon: '',
                countSp: 1,
                err: '',
            })

        }).catch(err => {
            var er = ""
            Object.keys(err.response.data).map(e => {
                if (e === 'title')
                    er = "Error in Name: " + String(err.response.data[e]).replace("title", "name")
                else
                    er = "Error in " + e + ": " + err.response.data[e]

            })
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            this.setState({ err: er })
        })
    }

    render() {
        return (
            <div className="py-sm-5 py-4">

                <Container className="py-xl-4 py-lg-2">
                    <Alert
                        variant="danger"
                        show={this.state.err ? true : false}
                        className="col-md-10 col-sm-10"
                    >{this.state.err}</Alert>
                    <Alert
                        variant="success"
                        show={this.state.sucess ? true : false}
                        className="col-md-10 col-sm-10"
                    >{this.state.sucess}</Alert>
                    <h3 className="tittle-w3l text-center mb-lg-5 mb-sm-4 mb-3">
                        <span>N</span>ew&nbsp;&nbsp;
                        <span>P</span>roduct
                    </h3>
                    <CreateProduct
                        brand={{ ...this.state.data.brand }}
                        condition={this.state.data.condition}
                        currency={this.state.data.currency}
                        specificHandler={this.specificHandler}
                        spDel={this.state.spDel}
                        specificDelHandler={this.specificDelHandler}
                        spCon={this.state.spCon}
                        platformHandler={this.platformHandler}
                        platform={this.state.platform}
                        colorHandler={this.colorHandler}
                        color={this.state.color}
                        sizeHandler={this.sizeHandler}
                        size={this.state.size}
                        termConditionHandler={this.termConditionHandler}
                        termCondition={this.state.termCon}
                        recommendedUseHandler={this.recommUseHandler}
                        recommendedUse={this.state.recomUse}
                        formHandler={this.formHandler}
                    />
                </Container>
            </div>


        );
    }
}