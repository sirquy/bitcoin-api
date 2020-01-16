const express = require("express");
const router = express.Router();
var request = require("request");

const dotenv = require("dotenv");
dotenv.config();

const HOST = process.env.RPC_HOST;
const PORT = process.env.RPC_PORT;
const USER = process.env.RPC_USER;
const PASS = process.env.RPC_PASSWORD;
const RPC_API = `http://${USER}:${PASS}@${HOST}:${PORT}/`;

const headers = {
  "content-type": "text/plain;"
};

router.get("/test", (req, res) => res.json({ msg: "backend works" }));

router.get("/getblockcount", (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockcount","params":[]}`;
    var options = {
      url: RPC_API,
      method: "POST",
      headers: headers,
      body: dataString
    };
    
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
      }
    };
    request(options, callback);
});

router.get("/getblock/:hash", (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblock","params":["${
        req.params.hash
    }"]}`;
    var options = {
        url: RPC_API,
        method: "POST",
        headers: headers,
        body: dataString
    };
    
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
      }
    };
    request(options, callback);
});

router.get("/getblockhash/:index", (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getblockhash","params":[${
        req.params.index
    }]}`;
    var options = {
        url: RPC_API,
        method: "POST",
        headers: headers,
        body: dataString
    };
    
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
      }
    };
    request(options, callback);
});  

router.get("/getrawtransaction/:id", (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"getrawtransaction","params":["${
      req.params.id
    }"]}`;
    var options = {
        url: RPC_API,
        method: "POST",
        headers: headers,
        body: dataString
    };
    
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
      }
    };
    request(options, callback);
});

router.get("/decoderawtransaction/:hex", (req, res) => {
    var dataString = `{"jsonrpc":"1.0","id":"curltext","method":"decoderawtransaction","params":["${
        req.params.hex
    }"]}`;
    var options = {
        url: RPC_API,
        method: "POST",
        headers: headers,
        body: dataString
    };
    
    callback = (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const data = JSON.parse(body);
        res.send(data);
      }
    };
    request(options, callback);
});

module.exports = router;