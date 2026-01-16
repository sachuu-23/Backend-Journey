const express = require('express');
const app = express();

const EventEmitter = require('events');

class Orders extends EventEmitter(){
     PlacedOrder(name){

     }

    }

    const objectplaced = new Orders;

    objectplaced.on('OrderPlaced',(req,res)=>{
        console.log(`The order has been placed by${name}`);
    })

    objectplaced.PlacedOrder.emits(1000);
