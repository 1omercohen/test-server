const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const server = express();
mongoose.connect('mongodb://r2chatDev:r2$apq1as$c@mongodb2-01.vmcluster2.local:27017,mongodb2-02.vmcluster2.local:27017,mongodb2-03.vmcluster2.local:27017/chatDev?replicaSet=rs2', {useNewUrlParser: true, useUnifiedTopology: true});

server.use(express.json());
server.use(express.urlencoded({extended: false}));
server.use(cors());

server.use('/api', require('./routes'));

server.listen(4545, () => {
    console.log(`Sever Test::start running::4545`);
})

