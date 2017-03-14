import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import { DBfirebase } from '../../Database/DBfirebase'
import { signUp } from '../../Store/Actions/Auth'
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import AutoComplete from 'material-ui/AutoComplete';
import * as firebase from 'firebase';
import { Search } from '../../Store/Actions/Auth'


class AddProduct extends Component {
    constructor() {
        super();
        this.state = {
            arr: [],
            productName: '',
            description: '',
            company:''
           
        }
        this.submit = this.submit.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.handleUpdateInput = this.handleUpdateInput.bind(this);
    }
    inputHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        e.preventDefault();
        let multipath = {};
        let productDetails = {
            productName: this.state.productName,
            description: this.state.description,
           company: this.state.company,
        }
        console.log(productDetails)
        DBfirebase.refAddProduct.push(productDetails);
        browserHistory.push('/home/view-purchases')

    }

//working code
     onSearch(e) {
        let _self = this;
       // e.preventDefault()
        let ref = firebase.database().ref().child('/AddedProducts/');
        _self.arr = [];
       
      //  console.log(this.refs.selectedCity.value)
        //  ref.orderByChild('city').equalTo(this.refs.selectedCity.value).once('value', function (snapshot) {
  ref.once('value', function (snapshot) {
                
                        

            snapshot.forEach(childSnapshot => {

                _self.arr.push(childSnapshot.val())
                console.log("arr", _self.arr)
                
            })
            _self.props.serachProducts(_self.arr)
            _self.setState({
                arr: _self.props.storeReducer.products
                
            })
        });
  }

   componentWillMount(){
       this.onSearch();
    }

    handleUpdateInput = (value) => {
    this.setState({
      arr: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };


    render() {
        return (
            <div ><center>
                <AddProductForm signUpState={this.state} _inputHandler={this.inputHandler} _submit={this.submit} />
            </center>
            </div>
        );
    }
}

// AddProduct.contextTypes = {
//     router: React.PropTypes.object.isRequired
// }


const dataSourceConfig = {
  text: 'textKey',
  value: 'valueKey',
};

class AddProductForm extends React.Component {


    render() {
        console.log("this.props.signUpState.arr",this.props.signUpState.arr)
        const datasource = this.props.signUpState.arr;
        return (
            <div >
              
                <h1>Add New Product</h1>
                <form onSubmit={this.props._submit} >
                    <AutoComplete
          hintText="Product Name"
          filter={AutoComplete.noFilter}
          openOnFocus={true}
        //  dataSource={this.props.signUpState.arr}
            dataSource={datasource}
          onUpdateInput={this.props.signUpState.handleUpdateInput}
          dataSourceConfig={dataSourceConfig}
        />
                    <TextField
                        hintText="Product Name"
                        name="productName"
                        value={this.props.signUpState.productName}
                     floatingLabelText="Product Name"
                        onChange={this.props._inputHandler}
                        /><br /><br />

                    <TextField
                        type="text"
                        hintText="description"
                        name="description"
                        value={this.props.signUpState.description}
                       floatingLabelText="description"
                        onChange={this.props._inputHandler}
                        /><br /><br />

                    
                        <TextField
                        type="text"
                        hintText="company"
                        name="company"
                        value={this.props.signUpState.company}
                        floatingLabelText="company"
                        onChange={this.props._inputHandler}
                        /><br />
                        <br />

                 <RaisedButton type="submit" label="Add Product" primary={false} secondary={true} /> <br /><br />
                </form>
                
            </div>
        )
    }
}

AddProductForm.PropTypes = {
    _inputHandler: React.PropTypes.func.isRequired,
    _submit: React.PropTypes.func.isRequired

}

const mapStateToProps = (state) => { 
     console.log(state.ProductReducer)
    return {
        storeReducer: state.ProductReducer
    }
}
const mapDispatchToProps = (dispatch) => {
        return {
        serachProducts: (data) => {
            console.log(data)
            dispatch(Search(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
