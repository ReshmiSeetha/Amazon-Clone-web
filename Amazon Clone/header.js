function getCartItems(){
    db.collection("cart-items").onSnapshot((querySnapshot)=>{
        let totalCount=0;
        querySnapshot.forEach((doc)=>{
            totalCount+=doc.data().quantity;
        })
        setCartCount(totalCount);
    })
}

function setCartCount(totalCount){
    document.querySelector(".cart-item-number").innerText=totalCount;
}

getCartItems();