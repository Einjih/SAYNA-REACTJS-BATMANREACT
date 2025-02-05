import { useEffect, useState } from 'react'
import HeroShop from '../components/HeroShop'
import { Link, useNavigate } from 'react-router-dom'
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from '../config-firebase';
import Products from '../components/Products';
import { UserAuth } from '../context/AuthContext';


function Eshop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const {user} = UserAuth();
  const navigate = useNavigate();
  


  // Lire les données produits venant de firebase

  const getProducts = async ()=>{
    if(user){
      try {
        const productsArray = [];
    const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  productsArray.push({id:doc.id, ...doc.data()});
  setProducts(productsArray);
});
      } catch (e) {
        console.log(e.message)
      }
    }
    else{
      console.log('Pas d\'utilisateur')
    }
  };


  useEffect(()=>{
    getProducts();
  }, []);

  const filterResult = (catItem)=>{

    const result = products.filter((curData)=>{
     return curData.category === catItem;
    })
     setProducts(result);
   } 

   //La fonction qui me permet d'ajouter un produit au panier

   let product_cart;
   const addToCart = async (product) => {
    

        product_cart =product;
        product_cart['qty'] = 1;
        product_cart['totalProductPrice'] = product_cart.qty * product_cart.price;

        if(user){

          try {
            try {
              // Add a new document with a generated id
                const cartRef = doc(collection(db, `cart${user.uid}`));
      
      // later...
                await setDoc(cartRef, product_cart);
                console.log('ajouter avec success')
            } catch (e) {
              console.log(e.message);
            }
          } catch (e) {
            console.log(e.message)
          }
        }else{
          
          console.log('no user')
          navigate('/login')
        }
   }
  return (
    <>
    <HeroShop />
    <section>
      <div className="container pt-5">
        <div className="float-end">
        <Link to='/cart'>
        <i className='fa-solid fa-2x fa-cart-plus'></i>
        </Link>
          
        </div>
      </div>
    </section>
    <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h1>Search</h1>    
            <div className="">
            <input type="text" onChange={(e)=> setSearch(e.target.value)} class="form-control" id="exampleFormControlInput1" placeholder="Search ...."/>
            </div>  
            <h1 className='mt-4'>Filter by category</h1>
            <button className='w-100 mb-4' onClick={()=>filterResult('goblet')}>Goblet</button>
            <button className='w-100 mb-4' onClick={()=>filterResult('poster')}>Poster</button>
            <button className='w-100 mb-4' onClick={()=>filterResult('tasse')}>Tasse</button>
            <button className='w-100 mb-4' onClick={()=>filterResult('tshirt')}>T-shirt</button>
            <button className='w-100 mb-4' >All</button>      
          </div>
          <div className="col-md-9">
          <h1 className='text-center'>Products</h1>
          <section id='products'>
{
  products.length > 1 && (
    <div className="product-box">
      <Products products={products} search={search} addToCart={addToCart}/>
    </div>
  )
}
{
  products.length < 1 && (
    <div className="">
      <h6>Loading</h6>
    </div>
  )
}


          </section>
  
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Eshop