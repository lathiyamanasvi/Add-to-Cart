product = [
  {
    Name: "Face-serum",
    price: 200,
    description: 'Accumsan sit amet nulla facilisi morbi tempus. Tempus egestas sed sed risus ignissim diam quis.',
    qty: 1,
    image: "./image/face-serum.webp",
    id:1212
  },
  {
    Name: "Night Face Moisturizer",
    price: 200,
    description: 'Et netus et malesuada fames ac turpis egestas. Eu lobortis elementum nibh tellus  nunc non.',
    qty: 1,
    image: "./image/face-moisturizer.webp",
    id:4567
  },
  {
    Name: "Serum Foundation",
    price: 500,
    description: ' Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.',
    qty: 1,
    image: "./image/foundation.webp",
    id:2345
  },
  {
    Name: "Mackup fixer",
    price: 300,
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    qty: 1,
    image: "./image/fixer.webp",
    id:1435
  },
  {
    Name: "Wonderful Cosmetic",
    price: 700,
    description: 'Not only is the toy bar shaped with funny animals on the top, but it also has funny sounds that.',
    qty: 1,
    image: "./image/wonderful cosmetic.jpg",
    id:1635
  },
  {
    Name: "Creme Lipstick",
    price: 200,
    description: 'Buildable medium-to-full coverage. Available in 07 shades.more smoothly',
     qty: 1,
    image: "./image/lipstick.jpg",
    id:1635
  },
  

]
const viewproduct = () => {
  let tbl = ''
  product.filter((val) => {
    tbl += `
          <div class="col-md-4 mt-3">
          <div class="card" style="width: 18rem;">
          <img src="${val.image}" class="card-img-top" alt="..." height="300px"  width:100%;style="margin:20px;overflow:hidden;">
          <div class="card-body">
            <h5 class="card-title">${val.Name}</h5>
            <h5 class="card-title">Rs :- ${val.price}</h5>
            <p class="card-text">${val.description}</p>
            <a onclick="AddCart(${val.id})" class="btn btn-primary" style="width : 100%">Add to cart</a>
          </div>
        </div>
          </div>
        `
  })
  document.getElementById('product').innerHTML = tbl
}
viewproduct();

let cart = [];
const AddCart = (id) => {
    
    let allproduct = product.find((item)=>{
        return item.id == id
    })

    if(localStorage.getItem('cart') === null || localStorage.getItem('cart') === undefined){
        cart.push(allproduct);
        localStorage.setItem('cart',JSON.stringify(cart));
    }else{
        let allcart = JSON.parse(localStorage.getItem('cart'));
        allcart.push(allproduct);
        localStorage.setItem('cart',JSON.stringify(allcart));
    }  
    alert("Cart successfully add");
    

    
}
viewproduct();