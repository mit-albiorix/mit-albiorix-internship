import React from "react";

const isAdminContext = React.createContext([{
    isAdmin :false,
    isLoggedIn :false,
    productCount : 0,
    productsForCart : []

    // setProductCount : 
}])

export default isAdminContext