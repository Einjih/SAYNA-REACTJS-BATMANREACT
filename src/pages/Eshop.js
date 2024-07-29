import { useEffect, useState } from 'react'
import HeroShop from '../components/HeroShop'
import { Link } from 'react-router-dom'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../config-firebase';


function Eshop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');


  // Lire les données produits venant de firebase

  const getProducts = async ()=>{
    const productsArray = [];
    const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  //console.log(doc.id, " => ", doc.data());
  productsArray.push({id:doc.id, ...doc.data()});
  setProducts(productsArray);
});

  };
  useEffect(()=>{
    getProducts();
  }, []);
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
            <button className='w-100 mb-4'>Goblet</button>
            <button className='w-100 mb-4'>Poster</button>
            <button className='w-100 mb-4'>Tasse</button>
            <button className='w-100 mb-4'>T-shirt</button>
            <button className='w-100 mb-4'>All</button>      
          </div>
          <div className="col-md-9">
          <h1 className='text-center'>Products</h1>
          <section id='products'>


            
          </section>
  
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Eshop