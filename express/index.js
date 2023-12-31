/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * 
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

const { exec } = require('child_process');

module.exports = require('./lib/express');

const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('hello world')
  })

app.get('/insertEntry/:key/:val', (req, res) => {
    const key = req.params.key;
    const command = `cd \n cd fabric-samples/test-network \n
        export PATH=\${PWD}/../bin:\$PATH \n
        export FABRIC_CFG_PATH=\${PWD}/../config/ \n
        export CORE_PEER_TLS_ENABLED=true \n
        export CORE_PEER_LOCALMSPID="Org1MSP" \n
        export CORE_PEER_TLS_ROOTCERT_FILE=\${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt \n
        export CORE_PEER_MSPCONFIGPATH=\${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp \n
        export CORE_PEER_ADDRESS=localhost:7051 \n
        peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "\${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "\${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "\${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"InsertEntry","Args":["${key}","${req.params.val}"]}'`;
    
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }

        console.log(`Command output: ${stdout}`);
        res.send(stderr)
        console.error(`Command errors: ${stderr}`);
    });

    
})


app.get('/updateEntry/:key/:val', (req, res) => { // todo
    const key = req.params.key;
    const val = req.params.val;
    const command = `cd \n cd fabric-samples/test-network \n
        export PATH=\${PWD}/../bin:\$PATH \n
        export FABRIC_CFG_PATH=\${PWD}/../config/ \n
        export CORE_PEER_TLS_ENABLED=true \n
        export CORE_PEER_LOCALMSPID="Org1MSP" \n
        export CORE_PEER_TLS_ROOTCERT_FILE=\${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt \n
        export CORE_PEER_MSPCONFIGPATH=\${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp \n
        export CORE_PEER_ADDRESS=localhost:7051 \n
        peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "\${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "\${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "\${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"UpdateEntry","Args":["${key}", "${val}"]}'`;
   exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }

        console.log(`Command output: ${stdout}`);
        res.send(stderr)
        console.error(`Command errors: ${stderr}`);
    });
    
})

app.get('/deleteEntry/:key', (req, res) => { // todo
    const key = req.params.key;
    const command = `cd \n cd fabric-samples/test-network \n
        export PATH=\${PWD}/../bin:\$PATH \n
        export FABRIC_CFG_PATH=\${PWD}/../config/ \n
        export CORE_PEER_TLS_ENABLED=true \n
        export CORE_PEER_LOCALMSPID="Org1MSP" \n
        export CORE_PEER_TLS_ROOTCERT_FILE=\${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt \n
        export CORE_PEER_MSPCONFIGPATH=\${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp \n
        export CORE_PEER_ADDRESS=localhost:7051 \n
        peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "\${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "\${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "\${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"DeleteEntry","Args":["${key}"]}'`;
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        console.log(`Command output: ${stdout}`);
        res.send(stderr)
        console.error(`Command errors: ${stderr}`);
    });
})





app.get('/entryExists/:key', (req, res) => {
    const key = req.params.key;
    const command = `cd \n cd fabric-samples/test-network \n
        export PATH=\${PWD}/../bin:\$PATH \n
        export FABRIC_CFG_PATH=\${PWD}/../config/ \n
        export CORE_PEER_TLS_ENABLED=true \n
        export CORE_PEER_LOCALMSPID="Org1MSP" \n
        export CORE_PEER_TLS_ROOTCERT_FILE=\${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt \n
        export CORE_PEER_MSPCONFIGPATH=\${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp \n
        export CORE_PEER_ADDRESS=localhost:7051 \n
        peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "\${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "\${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "\${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"EntryExists","Args":["${key}"]}'`;
    

    exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error}`);
          res.status(500).send('An error occurred');
          return;
        }
    
        // Command output
        console.log(`Command output:\n${stdout}`);
        console.error(`Command output:\n${stdout}`)
        res.send(stderr);
      });
});



app.get('/getEntry/:key', (req, res) => {
    const key = req.params.key;
    const command = `cd \n cd fabric-samples/test-network \n
        export PATH=\${PWD}/../bin:\$PATH \n
        export FABRIC_CFG_PATH=\${PWD}/../config/ \n
        export CORE_PEER_TLS_ENABLED=true \n
        export CORE_PEER_LOCALMSPID="Org1MSP" \n
        export CORE_PEER_TLS_ROOTCERT_FILE=\${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt \n
        export CORE_PEER_MSPCONFIGPATH=\${PWD}/organizations/peerOrganizations/org1.example.com/users/Admin@org1.example.com/msp \n
        export CORE_PEER_ADDRESS=localhost:7051 \n
        peer chaincode invoke -o localhost:7050 --ordererTLSHostnameOverride orderer.example.com --tls --cafile "\${PWD}/organizations/ordererOrganizations/example.com/orderers/orderer.example.com/msp/tlscacerts/tlsca.example.com-cert.pem" -C mychannel -n basic --peerAddresses localhost:7051 --tlsRootCertFiles "\${PWD}/organizations/peerOrganizations/org1.example.com/peers/peer0.org1.example.com/tls/ca.crt" --peerAddresses localhost:9051 --tlsRootCertFiles "\${PWD}/organizations/peerOrganizations/org2.example.com/peers/peer0.org2.example.com/tls/ca.crt" -c '{"function":"GetEntry","Args":["${key}"]}'`;
    

    exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error}`);
          res.status(500).send('An error occurred');
          return;
        }
    
        // Command output
        console.log(`Command output:\n${stdout}`);
        console.error(`Command output:\n${stdout}`)
        res.send(stderr);
      });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
