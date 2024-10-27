import { collection, deleteDoc, doc, onSnapshot, orderBy, query, QuerySnapshot } from 'firebase/firestore';
import React, { useState, useContext, createContext, useEffect } from 'react';
import { analytics, fireDB, logEvent } from '../firebase/firebaseCongif';
import { toast } from 'react-toastify';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [getAllProducts, setGetAllProducts] = useState([]);
    const [getAllOrder, setGetAllOrder] = useState([]);
    const [getAllUser, setGetAllUser] = useState([]);

    const user = JSON.parse(localStorage.getItem('users'));

    const getAllProductFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                QuerySnapshot.forEach((doc) => {
                    productArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllProducts(productArray);
                setLoading(false);
                logEvent(analytics, 'products_loaded');
            })
        } catch (error) {
            console.log(error);
        }
    }



    //order function
    const getAllOrderFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, 'order'),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let orderArray = [];
                QuerySnapshot.forEach((doc) => {
                    orderArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllOrder(orderArray);
                setLoading(false);
                logEvent(analytics, 'orders_loaded'); 
            })
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }


    /**========================================================================
     * delete order
      *========================================================================**/

    const orderDelete = async (id) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'order', id))
            toast.success('Order Deleted successfully')
            getAllOrderFunction();
            setLoading(false);
            logEvent(analytics, 'order_deleted', { order_id: id });
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    /**========================================================================
    * get All user
     *========================================================================**/

    const getAllUserFunction = async () => {
        setLoading(true);
        try {
            const q = query(
                collection(fireDB, "user"),
                orderBy('time')
            );
            const data = onSnapshot(q, (QuerySnapshot) => {
                let userArray = [];
                QuerySnapshot.forEach((doc) => {
                    userArray.push({ ...doc.data(), id: doc.id });
                });
                setGetAllUser(userArray);
                setLoading(false);
                logEvent(analytics, 'users_loaded'); 
            });
            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllProductFunction();
        getAllOrderFunction();
        getAllUserFunction();
    }, [])

    return (
        <MyContext.Provider value={{
            loading,
            setLoading,
            user,
            getAllProducts,
            getAllProductFunction,
            getAllOrder,
            orderDelete,
            getAllUser,
        }} >
            {children}
        </MyContext.Provider>
    )
};


const useMyContext = () => {
    return useContext(MyContext);
}

export { MyContextProvider, useMyContext };

