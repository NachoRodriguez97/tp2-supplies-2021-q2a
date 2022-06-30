const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getAllSales());
});

router.get('/getSalesById/:id', async (req, res) => {  
    res.json(await controller.getSalesById(req.params.id));
});

router.get('/SalesByPurchaseMethod/:purchaseMethod', async (req, res) => { 
    res.json(await controller.SalesByPurchaseMethod(req.params.purchaseMethod));
});

router.get('/getSalesByEmail/:email', async (req, res) => { 
    res.json(await controller.getSalesByEmail(req.params.email));
});

router.get('/getSalesSatisfaction', async (req, res) => { 
    res.json(await controller.getSalesSatisfaction());
});

module.exports = router;