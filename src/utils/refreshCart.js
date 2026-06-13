import { getCart }
    from "../services/cart/cartApi";

import {
    getProductsBulk,
} from "../services/products/productApi";

import {
    setCart,
    setCartLoading,
} from "../redux/slices/cartSlice";

const refreshCart =
    async (dispatch) => {

        try {

            dispatch(
                setCartLoading(true)
            );

            const cartData =
                await getCart();

            const cart =
                cartData.cart;

            if (
                !cart?.items?.length
            ) {

                dispatch(
                    setCart([])
                );

                return;
            }

            const ids =
                cart.items.map(
                    item =>
                        item.productId
                );

            const productsData =
                await getProductsBulk(
                    ids
                );

            const productMap =
                new Map(

                    productsData.products.map(
                        product => [

                            product.id,

                            product
                        ]
                    )
                );

            const mergedItems =
                cart.items.map(
                    item => ({

                        ...item,

                        product:
                            productMap.get(
                                item.productId
                            )
                    })
                );

            dispatch(
                setCart(
                    mergedItems
                )
            );

        } catch (error) {

            console.log(error);

        } finally {

            dispatch(
                setCartLoading(false)
            );
        }
    };

export default refreshCart;