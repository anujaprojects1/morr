import React, { Component } from 'react'
import jsonData from '../feed/data.json'
import Error from './Error'

export default class Series extends Component {
    
    render() {
        const data = fetch('../feed/data.json',{
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
        .then(function(response){
            console.log(response.json())
            return response.json();
        })
        .then(function(myJson) {
          console.log(myJson.json());
        }).catch(function(){
            <Error/>
        });
        console.log({data});
        return (
            <div>
                <header>
                    <p className="popular">Popular Series</p>
                </header>
                
                
            </div>
        )
    }
}