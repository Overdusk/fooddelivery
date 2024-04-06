let cartElements = document.querySelectorAll('.food-container');
let cartEsSelected = [];
let infoNodes = null;
function Product(productId, productName, productDesc, productPrice)
{
    this.id = productId;
    this.name = productName;
    this.desc = productDesc;
    this.price = productPrice;
}
cartElements.forEach(element => {
    element.addEventListener('click', (e) => {
        if(e.target.classList.value == 'food-container')
        {
            infoNodes = e.target.childNodes[3];
            let product = new Product(cartEsSelected.length + 1, infoNodes.childNodes[1].textContent, infoNodes.childNodes[3].textContent, infoNodes.childNodes[5].textContent);
            if(!cartEsSelected.some(item => item.name === product.name))
            {
                cartEsSelected.push(product);
                e.target.classList.add('food-container-selected');
            }
        }
        else
        {   
            infoNodes = e.target.childNodes[3];
            let product = new Product(cartEsSelected.length + 1, infoNodes.childNodes[1].textContent, infoNodes.childNodes[3].textContent, infoNodes.childNodes[5].textContent);
            let productToDelete = product.name;   
            let index = cartEsSelected.findIndex( x => x.name === productToDelete);
            cartEsSelected.splice(index, 1);      
            e.target.classList.remove('food-container-selected');
        }
    });
});
