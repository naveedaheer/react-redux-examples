import * as firebase from 'firebase';
import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Paper from 'material-ui/Paper';
import { Search } from '../../Store/Actions/Auth'
import { connect } from 'react-redux'

const style = {
  //height: 100,
  //width: 100,
  margin: 20,
 // textAlign: 'center',
  // display: 'inline-block',
    display: 'block-inline',
  height: 'auto',
  width: 'auto',
  padding: 20,
  backgroundColor: '#FFD54F'
  
};

class ViewStores extends Component {
    constructor(){
        super();

        this.state = {
           // crimeList: [],
              arr: []
        }
         this.onSearch = this.onSearch.bind(this)
    }

    
    
    //working code
     onSearch(e) {
        let _self = this;
       // e.preventDefault()
        let ref = firebase.database().ref().child('/AddedStores/');
        _self.arr = [];
       
      //  console.log(this.refs.selectedCity.value)
        //  ref.orderByChild('city').equalTo(this.refs.selectedCity.value).once('value', function (snapshot) {
  ref.once('value', function (snapshot) {
                
                        

            snapshot.forEach(childSnapshot => {

                _self.arr.push(childSnapshot.val())
                console.log("arr", _self.arr)
                
            })
            _self.props.searchStores(_self.arr)
            _self.setState({
                arr: _self.props.storeReducer.stores
                
            })
        });
  }


    componentWillMount(){
       this.onSearch();
    }
    
    render() {
        return (
            <div >  


                <center>
                     <h1>Stores Added</h1>
                    <br /><br />
{/*

                               <form onSubmit={this.onSearch}>
                     <select name="city"
                       // value={this.props.signUpState.city}
                        required
                      //  onChange={this.props._inputHandler}
                      ref="selectedCity"
                      >
                        <option> City   </option>
                        <option value="California">California</option>
                        <option value="Florida">Florida</option>
                        <option value="New Jersey">New Jersey</option>
                        <option value="New York">New York</option>
                        <option value="Ohio">Ohio</option>
                        <option value="Texas">Texas</option>
                        <option value="Washington">Washington</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="New Mexico">New Mexico</option>
                        <option value="Oxford">Oxford</option>
                    </select><br /><br />

                    <button onClick={this.onSearch} type="submit" > Find </button>
                      </form><br /><br />*/}
</ center>
{console.log("this.state.arr", this.state.arr)}
               {this.state.arr.map((s, i) => {
                    return(
                      <div>
                    
                        <Paper style={style} zDepth={5} > 
                        >Name: {s.storeName} <br />
                        >Description: {s.description}<br /> 
                        >Store Address: {s.storeAddress}<br />
                        {/*<mui.RaisedButton type="submit" label="Request Blood" secondary={true} />*/}
                        </Paper>                     
                     </div>
  )
                })
                  
                }

            </div>
        );
    }
}

const mapStateToProps = (state) => { 
     console.log(state.StoreReducer)
    return {
        storeReducer: state.StoreReducer
    }
}
const mapDispatchToProps = (dispatch) => {
        return {
        searchStores: (data) => {
            console.log(data)
            dispatch(Search(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewStores);

