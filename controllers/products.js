const Product= require("../models/product");

const getAllProducts= async(req, res) => {
    const {company, name, sort, select}= req.query;
    const queryObject= {};

    if(company){
        queryObject.company= company;
    }

    if(name){
        queryObject.name= { $regex: name, $options: "i"};
    }

    let apiData= Product.find(queryObject);

    if(sort){
        let sortFix= sort.replace(",", " ");
        apiData= apiData.sort(sortFix);
    }

    if(select){
        let selectFix= select.split(",").join(" ");
        apiData= apiData.select(selectFix);
    }

    const Products= await apiData;
    res.status(200).json({Products});
};

const getAllProductsTesting= async(req, res) => {
    res.status(200).json({msg: "I am getAllProductsTesting"});
};

module.exports= {getAllProducts, getAllProductsTesting };