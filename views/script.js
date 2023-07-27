const btn= document.getElementById('btn');

btn.addEventListener('click',additem);
btn.onclick=function alt(){
    window.location.href = "http://127.0.0.1:5500/views/shop.html"
}


var candy = document.getElementById('candy');
var description = document.getElementById('description');
var price = document.getElementById('price');
var quantity = document.getElementById('quantity');
var id = document.getElementById('id');

function additem(e){
    // e.preventDefault();
    let obj = {
      id:id.value,
      candy:candy.value,
      description:description.value,
      price:price.value,
      quantity:quantity.value
    }
    post= async()=>{
        try{
            await axios.post("http://localhost:3000/additem", obj);
            
        }
        catch(err){
            console.log(err);
        }
        // window.location.href = "http://127.0.0.1:5500/views/shop.html"
    }
    post();
}

