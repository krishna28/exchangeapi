
//used to import util module
var util = require('./customutil');

module.exports = function(app,express){
    
    var api = express.Router();

      /**
       * @name latest
       * @description
       *  end point to get latest exchange rate with USD as base currency
       */    

      api.get('/latest',function(req,res){
            var result = util.getLatest(function(err,response,data){
            if(!err){
              res.send(data);   
            }
           });           
        });

      /**
       * @name currencies
       * @description
       *  end point to get list of currencies available
       */  

      api.get('/currencies',function(req,res){
            var result = util.getCurrencies(function(err,response,data){
            if(!err){
              res.send(data);   
            }
           });
        });

      /**
       * @name history
       * @description
       *  end point to get history data given a date ass parameter
       */ 

      api.get('/history',function(req,res){
           var dateString = req.query.date;
           var result = util.getHistorical(dateString,function(err,response,data){
            if(!err){
              res.send(data);   
            }
           });
        });

    return api;

}