import React, { Component } from 'react';
import '../../../../static/css/main_style.css';
import '../../../../static/css/style_product.css';
import { Container, Alert } from 'react-bootstrap';
import UpdateProduct from './UpdateProduct';
import axios from 'axios';
import $ from 'jquery';

export default class UpdateProductBuilder extends Component {
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
        document.title = 'Update Product'
        axios.get("/electro/product/update/" + this.props.match.params.pk)
            .then(e => {
                var data = {}
                Object.keys(e.data).map((d, i) => {
                    data[d] = e.data[d]
                });
                this.setState({
                    data: data,
                })
                this.handleExtraData(data)
            })
            .catch(err => {
                // console.log(err.response)
                if (err.response.status === 404);
                // this.props.history.replace("/")

            })
    }

    handleExtraData = (data) => {
        if (data.extra_data) {
            if (data.extra_data.hasOwnProperty('platform'))
                this.showPlatform(data.extra_data.platform[0].platform)

            if (data.extra_data.hasOwnProperty('recom_use'))
                this.showRecommendedUse(data.extra_data.recom_use[0].recommended_use)

            if (data.extra_data.hasOwnProperty('term_condition'))
                this.showTermCondition(data.extra_data.term_condition[0].terms_condition)

            if (data.extra_data.hasOwnProperty('color'))
                this.showColor(data.extra_data.color)
            if (data.extra_data.hasOwnProperty('size'))
                this.showSize(data.extra_data.size[0])
        }
    }

    showColor = (data) => {
        var colors = data.map(e => {
            return e.color
        })
        var add = <div className="col-md-12 col-sm-12">
            <label className="col-form-label">Color:</label>
            <input type="hidden" name="color_current" value={colors} />
            <select className="form-control" multiple name="color" defaultValue={colors} required>
                {
                    this.state.data.colors.map((e, i) => {
                        return <option key={i} value={e[0]}>{e[1]}</option>

                    })
                }
            </select>
            <span id='delete-color' onClick={this.colorHandler}>x</span>
        </div>

        this.setState({ color: add })
    }
    showSize = (data) => {

        var add = <div className="col-md-12 col-sm-12">
            <label className="col-form-label">Size:</label>
            <input type="hidden" name="size_current" value={[data.size, data.type_size]} />
            <input type="number" className="form-control" defaultValue={data.size} name="size_inp" placeholder="Size ..." required />
            <label className="col-form-label">Size:</label>
            <select className="form-control" name="size_select" defaultValue={data.type_size} required>
                {
                    this.state.data.sizes.map((e, i) => {

                        return <option key={i} value={e[0]}>{e[1]}</option>

                    })
                }
            </select>
            <span id='delete-size' onClick={this.sizeHandler}>x</span>
        </div>
        this.setState({ size: add })
    }
    showPlatform = (data) => {
        var add =
            <div className="col-md-12 col-sm-12">
                <label className="col-form-label">Platform:</label>
                <input type="text" name="platform" defaultValue={data} className="form-control" placeholder="Platform..." required />
                <input type="hidden" name="platform_current" value={data} />
                <span id='delete-platform' onClick={this.platformHandler}>x</span>
            </div>
        this.setState({ platform: add })
    }
    showRecommendedUse = (data) => {
        var add = <div className="col-md-12 col-sm-12">
            <label className="col-form-label">Recommended Use:</label>
            <input type="text" className="form-control" defaultValue={data} name="recom_use" placeholder="Recommended Use ..." required />
            <input type="hidden" name="recom_use_current" value={data} />
            <span id='delete-recommended-use' onClick={this.recommUseHandler}>x</span>
        </div>
        this.setState({ recomUse: add })
    }
    showTermCondition = (data) => {
        var add = <div className="col-md-12 col-sm-12">
            <label className="col-form-label">Term Condition:</label>
            <textarea className="form-control" defaultValue={data} name="term_condition" placeholder="Term Condition ..." required></textarea>
            <input type="hidden" name="term_condition_current" value={data} />
            <span id='delete-term-condition' onClick={this.termConditionHandler}>x</span>
        </div>
        this.setState({ termCon: add })
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
                <select className="form-control" multiple name="color" required>
                    {
                        this.state.data.colors.map((e, i) => {
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
                        this.state.data.sizes.map((e, i) => {
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
                        if (e.name.includes("current"))
                            sp_data['current'] = val
                        else
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

                    if (e.name.includes('current')) {
                        var name = e.name
                        var val = e.value
                        if (data['img_current'])
                            data['img_current'] = { ...data['img_current'], [name]: val }
                        else
                            data['img_current'] = { [name]: val }
                    }
                    else if (e.files.length > 0)
                        form_data.append(e.name, e.files[0])
                } else if (e.name.includes("color")) {
                    if (e.name.includes("current")) {
                        data['color'] = { "current": e.value.split(",") }
                    } else
                        [...e.selectedOptions].map(d => {
                            if (data['color'])
                                if (data['color']['color'])
                                    data['color']['color'] = [...data['color']['color'], d.value]
                                else
                                    data['color']['color'] = [d.value]
                            else
                                data['color'] = { ...data['color'], "color": [d.value] }
                        })
                } else if (e.name.includes('size')) {
                    if (e.name.includes("current"))
                        data['size'] = { "current": e.value.split(",") }
                    else {
                        if (data['size'])
                            if (data['size']['size'])

                                data['size']['size'] = [...data['size']['size'], e.value]
                            else
                                data['size']['size'] = [e.value]
                        else
                            data['size'] = { ...data['size'], "size": [e.value] }
                    }
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

        axios.put("/electro/product/update/" + this.props.match.params.pk, data).then(e => {
            $('html, body').animate({ scrollTop: 0 }, 'slow');
            var data = {}
            Object.keys(e.data).map((d, i) => {
                data[d] = e.data[d]
            });
            this.setState({ sucess: "Successfully Updated!", data: data })
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
                        <span>
                            {String(this.state.data.name).charAt(0).toUpperCase()}
                        </span>{String(this.state.data.name).replace(String(this.state.data.name).charAt(0), "").split(" ")[0]}&nbsp;&nbsp;
                        {/* <span> */}
                        {String(this.state.data.name).split(" ").slice(1).join(" ")}
                        {/* </span>{String(this.state.data.name).split(" ").slice(1).join(" ").replace(String(this.state.data.name).split(" ").slice(1).join(" ").charAt(0), "")} */}
                    </h3>
                    <UpdateProduct
                        data={{ ...this.state.data }}
                        brand={{ "all": this.state.data.brands, "current": this.state.data.brand }}
                        condition={{ "all": this.state.data.conditions, "current": this.state.data.condition }}
                        currency={{ "all": this.state.data.currencys, "current": this.state.data.currency }}
                        specific={this.state.data.specific}
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