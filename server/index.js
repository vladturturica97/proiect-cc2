const express = require("express")
const app = express()
var bp = require("body-parser")
var $ = require('jquery');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

app.use('/',express.static('frontend'))

app.post('/country', (req,res) => {
    console.log(req.body.country);
    
    /* Am incercat unirest dar nu pot reusi sa fac Post cu el
    var unirest = require('unirest');
    var req = unirest('GET', `https://api.covid19api.com/country/${req.body.data}/status/confirmed/live`)
    .end(function (res) { 
        if (res.error) throw new Error(res.error); 
        console.log(res.raw_body);
    });*/
    
    function importCountry(){
            if(this.readyState == 4 && this.status == 200)
           {
                res.send(myRequest.responseText);
                console.log(200, myRequest);
            }
    }

    var xhr = require("xmlhttprequest").XMLHttpRequest;
    var myRequest = new xhr();
    var link = `https://api.covid19api.com/total/dayone/country/${req.body.country}`;
    console.log(link);
    myRequest.onreadystatechange = importCountry;
    myRequest.open("GET", link, true);
    console.log(myRequest.responseText);
    
    myRequest.send(null);
})

app.post('/joke', (req,res) => {
    console.log(req.body.country);
    function importJoke(){
            if(this.readyState == 4 && this.status == 200)
           {
                res.send(myRequest.responseText);
                console.log(200, myRequest);
            }
    }
    var xhr = require("xmlhttprequest").XMLHttpRequest;
    var myRequest = new xhr();
    var link = `https://official-joke-api.appspot.com/jokes/programming/random`;
    console.log(link);
    myRequest.onreadystatechange = importJoke;
    myRequest.open("GET", link, true);
    console.log(myRequest.responseText);
    
    myRequest.send(null);

})
app.listen(8080)

/*app.post('/conectare', (req,res) => {
    //console.log("test ip");
    function importCountry(){
        if(this.readyState == 4 && this.status == 200){
            res.send(myRequest.responseText)
            console.log(200, myRequest)
        }
    }
    var unirest = require('unirest');
    var req = unirest('GET', "https://freegeoip.app/json/")
    .end(function (res) { 
        if (res.error) throw new Error(res.error); 
        console.log(res.raw_body);
    })*/