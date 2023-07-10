const [ctx, setProductCount, setProductsForCart, setAdmin, setLogIn] =
useContext(isAdminContext);
const { isAdmin, isLoggedIn, productCount, productsForCart } = ctx;


import isAdminContext from "../../context/isAdmin";