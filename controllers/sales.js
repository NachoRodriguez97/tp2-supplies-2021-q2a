const sales = require('../data/supplies');

async function getAllSales(){    
    return sales.getAllSales();
}

async function getSalesById(id){
    return sales.getSalesById(id)
}

async function SalesByPurchaseMethod(purchase){
    console.log(purchase)
    let allSales = await sales.getAllSales()
    let salesFilter = allSales.filter(s => s.purchaseMethod === purchase)

    return salesFilter
}

async function getSalesByEmail(email){
    let allSales = await sales.getAllSales()
    let salesByEmail = allSales.find(m => m.customer.email == email)
    console.log(salesByEmail)
    let map = {
        email: salesByEmail.customer.email,
        item: salesByEmail.item.toArray()
    }
    console.log(map)

    return map
}

async function getSalesSatisfaction(){
    let allSales = await sales.getAllSales();
    let satisfaction = allSales.filter(m => m.customer.satisfaction < 3)
    
    return satisfaction
}

module.exports = {getAllSales, getSalesById, SalesByPurchaseMethod, getSalesByEmail, getSalesSatisfaction};