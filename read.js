//Show product and homepage
app.get("/",(req, res)=>{
    Product.find({},(err,products)=>{
        if (err) {console.log(err);
        }else{
            res.render("index",{products: products});
        }
    })
    
})