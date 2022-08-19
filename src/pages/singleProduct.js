import {React,useEffect,useState} from 'react'
import "./singleProduct.css"
import {useLocation,useNavigate} from 'react-router-dom';
import ProductCard from '../components/productCard/productCard';
import Navbar from '../components/navbar/navbar';
import Subheader from '../components/subheader/subheader';
import Footer from '../components/footer/footer';

const SingleProduct = () => {
    const [currProduct , setCurrProdect] = useState({});
    const [error,setError] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const productId = location.pathname.split("/")[2];

    useEffect(()=>{
        const fetchSingleProduct = async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URL}products/${productId}`);
            if(res.status !== 200){
                setError(true);
                return;
            }
            const data = await res.json();
            setCurrProdect(data);
        }
        fetchSingleProduct();
    },[productId])

    return (
        <>
            { 
            !error ? 
                <div className=''>
                    <Navbar/>
                    <Subheader/>
                    <div className='container'>
                        <ProductCard data={currProduct} id={productId}/>
                        <div className='summary-container pb-5 mb-5'>
                            <h2 className='justify-content-center summary-header mb-4'>DETAILS</h2>
                            <h3>{ currProduct.desc ? currProduct.desc + currProduct.desc + currProduct.desc + currProduct.desc : "" }</h3>
                        </div>
                    </div>
                    <Footer/> 
                </div>
                
            : 
                navigate("/404")}
        </> 
    )
}

export default SingleProduct