import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./views/Home.jsx";
import About from "./views/About.jsx";
import Products from "./views/Products.jsx";
import Training from "./views/Training.jsx";
import Events from "./views/Events.jsx";
import Contact from "./views/Contact.jsx";
import Register from "./views/Register.jsx";
import Cart from "./views/Cart.jsx";
import {Provider} from './stores/AppContext.jsx';
import DetailsProduct from "./views/DetailsProduct.jsx";

export default class Layout extends React.Component {

    constructor(props){
        super(props);
    
    this.state = {
            "article": [],
            "meetups": [],
            "session":{
                /*ID: 2,
                username: "theUser",
                email: "test@gmail.com",
                password: "1234",
                token: "qwerty12345asdfgzxcv"*/
            },
            "cart":[],
            "cartNumItem":  0,
            "isLoading": false,
            "catcherrorserver": [{  error: null, 
                                    errorInfo: null }]
    };

    this.actions = {"loadSession": (receivedUsername, receivedPassword) => {
                /*this.setState(
                    {
                        session: {
                            ID: 1000,
                            user_nicename: receivedUsername,
                            password: receivedPassword,
                            token: "gfdrtu6545hftydhgrhxfh"
                        }
                        
                    });
                */    //REST API AUTH
                    var data = {
                        "username":receivedUsername, 
                        "password":receivedPassword
                      };
                    this.setState({ isLoading: true }); 
                    
                    fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/jwt-auth/v1/token',
                    {
                      method: 'POST',
                      body: JSON.stringify(data),
                      headers: new Headers({
                        'Content-Type': 'application/json'
                        })
                    })
                    .then( (response) => response.json())
                    .then( (data) => {
                        
                        if (typeof(data.token) === "undefined" ) 
                            throw new Error(data.message);
                            this.setState({ session: data, isLoading: false });
                            
                        //ReactGA.set({ userId: data.user_nicename });
                    })
                    .catch(error => console.log(error)); 
                    
                                       
                    //Simulating user ID
                    /*
                    fetch('https://randomuser.me/api/?inc=id,name,picture')
                    .then(res => res.json())
                    .catch(error => {
                      //console.error('Error:', error)
                    })
                    .then(response => {
                      this.dispatch('MeetupStore.setSession', response);
                    });*/
                    
                    
                  },
                  
            "createUserloadSession": (receivedUsername, receivedPassword, receivedUsersNice, receivedEmail) => {

                    var data = {
                        "user_login": receivedUsername, //"prueba",
                        "user_pass": receivedPassword, //"1234",
                        "user_nicename": receivedUsersNice, //"users",
                        "user_email": receivedEmail //"email@prueba.com"
                      };
                      
                    this.setState({ isLoading: true }); 
                    
                    fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/sample_api/v1/cuser',
                    {
                      method: 'PUT',
                      body: JSON.stringify(data),
                      headers: new Headers({
                        'Content-Type': 'application/json'
                        })
                    })
                    .then( (response) => response.json())
                    .then( (data) => {
                        
                        if (typeof(data.token) === "undefined" ) 
                            throw new Error(data.message);
                            //this.setState({ catcherrorserver: data.message, session: data, isLoading: false });
                            
                        //ReactGA.set({ userId: data.user_nicename });
                    })
                    .catch(error => console.log(error));                
                  
                  },                  
                  
            "loadInitialData": () => {

                fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/sample_api/v1/products')
                  .then(response => response.json())
                  .then(data => this.setState({ article: data }))
                  .catch(error => console.log(error));  
                  
              },
              
            "addProductToCart": (productId, qtytoput) => {
                if ( qtytoput > 0 ) {
                    let tempCart = this.state.cart;
                    let arrayWithTheProduct = this.state.article.find( (article) => {
                        return article.id === productId;});
                    if (!arrayWithTheProduct) { //The product exit?
                        alert('The article no exit');
                    }
                    else {
                        let arrayWithTheCart = this.state.cart.find( (article) => {
                            if (article.articleId === productId) {
                                article.quantity = article.quantity + +qtytoput;
                                article.totalPrice = article.totalPrice * qtytoput;
                                let tempNumItemCart = +this.state.cartNumItem;
                                tempNumItemCart = tempNumItemCart + +qtytoput;
                                this.setState( { cartNumItem: tempNumItemCart, cart: tempCart  } );
                                return true;
                            }
                            return false;
                            });
                            if (!arrayWithTheCart) { //Is it a new product?
                                arrayWithTheCart = {// Create product in the cart
                                        articleId: arrayWithTheProduct.id,
                                        quantity: qtytoput,
                                        price: arrayWithTheProduct.price,
                                        totalPrice: arrayWithTheProduct.price * qtytoput
                                        };
                                tempCart.push(arrayWithTheCart);
                                let tempNumItemCart = +this.state.cartNumItem;
                                tempNumItemCart = tempNumItemCart + +qtytoput;
                                this.setState( { cartNumItem: tempNumItemCart, cart: tempCart  } );
                            }
                        }
                    }
                else {
                    alert('The quantity is less or iqual than 0');
                }
            },
            
            "getInfoArticle": (productId) => {
                let param = this.state.article.find( (article) => {return article.id === productId;});
                return param;  
            }
            ,
            
            
            "delProductToCart": (index, Id, qtytakeout) => {
                
                let arrayWithTheCart = this.state.cart.filter( (article) => {return article.articleId !== Id;});
                let tempNumItemCart = +this.state.cartNumItem;
                tempNumItemCart = tempNumItemCart - +qtytakeout;
                this.setState( { cartNumItem: tempNumItemCart,  cart: arrayWithTheCart } );
                },
            
            "logout": () => this.setState(  {session: {}}   ),
            
            "fetchLoadAllDataProduct": () => {
                
                fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/sample_api/v1/products')
                //fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/wc/v2/products?consumer_key=ck_b25db0a141ce216901302c872657ce6ce22488b6&consumer_secret=cs_ffe5a1cda6d785b35a19e7b1ef345c3aa224e4ea')
                  .then(response => response.json())
                  .then(data => this.setState({ article: data }))
                  .catch(error => console.log(error));  
                  
            },
            
            "fetchLoadDataProduct": (product) => {

                fetch('https://first-wordpress-jcabezas.c9users.io/wp-json/sample_api/v1/products/'+product)
                  .then(response => response.json())
                  .then(data => this.setState({ article: data }))
                  .catch(error => console.log(error));  
                  
            }  
        };
    }
    
    componentDidMount() {
        this.actions.loadInitialData();
      }
      
    /*componentDidCatch(error, info) {
    // Display fallback UI
    console.log(error,info);
    //this.setState({ error: true, berror: error, eInfo: info});
    // You can also log the error to an error reporting service
    //logErrorToMyService(error, info);
  }   */   

  render() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    <Provider value={{ state:this.state, actions:this.actions }}>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/products" component={Products} />
                        <Route exact path="/DetailsProduct/:artId" component={DetailsProduct} />
                        <Route exact path="/training" component={Training} />
                        <Route exact path="/contact" component={Contact} />
                        <Route exact path="/cart" component={Cart} />
                        <Route exact path="/register" component={Register} />
                    </Provider>
                    <Route render={() => <h1>Not found!</h1>} />
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
  }
}
                        