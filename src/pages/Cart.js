import React from 'react'
import '../styles/Cart.css';
function Cart() {
  return (
 <>
  <div class="cart-container">
    <div class="cart-header">
      <h1>Votre Panier</h1>
      <button onclick="clearCart()">Vider le Panier</button>
    </div>

    <div class="cart-item">
      <img src="https://via.placeholder.com/80" alt="Article 1"/>
      <div class="cart-item-info">
        <h2>Article 1</h2>
        <p>Prix: $19.99</p>
        <p>Quantité: <input type="number" value="1" min="1"/></p>
      </div>
      <div class="cart-item-actions">
        <button onclick="updateQuantity(1)">Mettre à Jour</button>
        <button onclick="removeItem(1)">Retirer</button>
      </div>
    </div>

    <div class="cart-item">
      <img src="https://via.placeholder.com/80" alt="Article 2"/>
      <div class="cart-item-info">
        <h2>Article 2</h2>
        <p>Prix: $29.99</p>
        <p>Quantité: <input type="number" value="1" min="1"/></p>
      </div>
      <div class="cart-item-actions">
        <button onclick="updateQuantity(2)">Mettre à Jour</button>
        <button onclick="removeItem(2)">Retirer</button>
      </div>
    </div>

    <div class="cart-summary">
      <h2>Total: $49.98</h2>
      <button onclick="checkout()">Passer à la Caisse</button>
    </div>
  </div>
 </>
  )
}

export default Cart