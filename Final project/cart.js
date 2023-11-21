const viewcart = () => {
    let productcart = JSON.parse(localStorage.getItem('cart'));
    let tbl = '';
    let finaltotal=0;
    productcart.map((value) => {
        finaltotal += value.price * value.qty
        tbl += `
            <tr>
                <td>
                    <img src = "${value.image}" width="100px">
                </td>
                <td>${value.Name}</td>
                 <td>${value.price}</td>
                <td>
                    <input value="${value.qty}" type="number" min="1" onchange="liveEditCart(${value.id})" id="qty_${value.id}" class="form-control w-25"/>
                </td
                <td>${value.price * value.qty}</td>
                <td>
                    <button onclick="cartDelete(${value.id})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                    <button onclick="editCart(${value.id})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                </td> 
            </tr>
        `
    })
    document.getElementById('cart').innerHTML = tbl;
    document.getElementById('finaltotal').innerHTML = `Final Total :- ${finaltotal}`
    
}
viewcart();


const cartDelete = (id) => {
    let allcart = JSON.parse(localStorage.getItem('cart'));
    let ans = allcart.filter((item)=>{
        return item.id != id;
    })
    localStorage.setItem('cart',JSON.stringify(ans));
    alert("Cart is delete")
    viewcart();
}
const editCart = (id) => {
    let qty = parseInt(document.getElementById(`qty_${id}`).value);
    let allcart = JSON.parse(localStorage.getItem('cart')); 
    let update = allcart.map((item)=>{
        if(item.id == id){
            item.qty = qty
        }
        return item
    })
    localStorage.setItem('cart',JSON.stringify(update));
    alert("cart successfully update")
    viewcart();
}

const liveEditCart = (id) => {
    let qty = parseInt(document.getElementById(`qty_${id}`).value);
    let allcart = JSON.parse(localStorage.getItem('cart'));
    let update = allcart.map((item)=>{
        if(item.id == id){
            item.qty = qty
        }
        return item;
    })
    localStorage.setItem('cart',JSON.stringify(update));
    viewcart(); 
}
