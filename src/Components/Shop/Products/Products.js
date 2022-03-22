
import './Products.css'

const Products = (props) => {
    const {products,orderSummary}=props;
    const {name,img,price,seller,ratings}=products;

    return (
        <div className='single-product'>
            
            <div className="container">
                <img src={img} alt="Avatar" className="image"></img>
            <div className="middle">
                <div className="text">{name.slice(0,15)}</div>
            </div>
        </div>

            {/* <img src={img} alt="this is product" /> */}
        <div style={{padding:"0px 19px 0px 14px"}}>
            <p style={{fontSize:"21px"}}>{name.slice(0,15)}</p>
            <p style={{fontSize:"17px"}}>Price: ${price}</p><br />
            <p style={{fontSize:"12px"}}>Manufacture: {seller}</p>
            <p style={{fontSize:"12px"}}>Ratings: {ratings} Star</p>
        </div>
        <button onClick={()=>{orderSummary(products)}} className='button'>Add to Cart <i className="fa-solid fa-cart-plus"></i></button>
        </div>
    );
};

export default Products;