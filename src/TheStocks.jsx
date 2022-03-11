import React from 'react'
 // This is the Fintual Challenge
//Construct a simple Portfolio class that has a collection of Stocks and a "Profit" method that receives 2 dates and returns 
//the profit of the Portfolio between those dates. Assume each Stock has a "Price" method that receives a date and returns its price.
//Bonus Track: make the Profit method return the "annualized return" of the portfolio between the given dates.


const TheStocks = () => {

//Here u can find a couple of example collection of stocks for running the methods in the Portfolio class
   const stocks1 =[
    {
        price: 1200,
        date: "2021-01-20"
    },
    {
        price: 1500,
        date: "2021-03-19"
    },
    {
        price: 1000,
        date: "2021-11-22"
    },
    {
        price: 2190,
        date: "2021-12-20"
    },
    {
        price: 3000,
        date: "2022-01-21"
    }
];


//Other example of collections of stocks
const stocks2 =[

    {
        price: 1500,
        date: "2021-08-17"
    },
    {
        price: 4200,
        date: "2021-01-20"
    },
    {
        price: 1500,
        date: "2021-03-19"
    },
    {
        price: 2100,
        date: "2021-04-03"
    },
    
    {
        price: 4000,
        date: "2022-01-21"
    }
];


// Here our simple class Portfolio that recieves only two parameters.

    class Portfolio{
        constructor(id,stocks){
            this.id =id;
            this.stocks =stocks;

// Then the profit method that recieves two dates and returns the profit between those two dates.

        }
        profit (date1, date2){
          const newStock = this.stocks.filter(stock => {
                return (getDate(stock.date) >= getDate(date1)
                   && getDate(stock.date) <= getDate(date2))
                })
                newStock.sort((a,b) => getDate(a.date) - getDate(b.date));
               return newStock[newStock.length-1].price - newStock[0].price ;
        }
// Then the price method to obtain the price of certain date pf the example collections.

        price (date1){
           return this.stocks.find(stock => 
                getDate(stock.date).getTime() == getDate(date1).getTime()
            )
            }
    }

    // this function is to transform a string to a date.

    function getDate(date){
        let splitFecha1 = date.split("-")
        return new Date(splitFecha1[0],splitFecha1[1],splitFecha1[2])
      }
    

//Here´s an example with the methods and the first collections of stocks 

  let myNewInvestment = new Portfolio ("myNewInvestment",stocks1);
    
    console.log ( "The profit between this dates is ---> "+ myNewInvestment.profit("2021-03-19","2022-01-21"));
    console.log ("The price in this dates is ---> "+myNewInvestment.price("2021-11-22").price);

//Here another example with the methods and the second collections of stocks 

    //let myNewInvestment2 = new Portfolio ("myNewInvestment2",stocks2);

    //console.log (myNewInvestment2.profit("2021-04-03","2022-01-21"));
    //console.log (myNewInvestment2.price("2021-04-03").price);


 return (null);
    
}
export default TheStocks

