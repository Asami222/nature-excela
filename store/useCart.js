
import { useRecoilState } from 'recoil'
import { cartState } from 'store/cart'

export const useCart = () => {
    const [cart, setCart] = useRecoilState(cartState);


    
/**追加 ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー*/
    const addCart = product => {
        const selectItem = cart.products.find((_product) => _product.id === product.id);
    
    //商品がない場合
    if(!selectItem) {
        const products = [...cart.products];
        products.push({
            ...product,
            quantity : 1,
        })
        setCart({products});
    } else {
        //ある場合
        setCart((prevCart) => {
            return {
                products: prevCart.products.map((_product) => _product.id === selectItem.id ? {..._product,quantity:_product.quantity + 1} : _product)
            };
        });
    }
};


const removeCart = (product) => {
    const selectItem = cart.products.find((_product) => _product.id === product.id);

    if (!selectItem) {
        console.warn("selectItemがundefinedのはずがない, バグの可能性あり");
        return;
      }

      // カートから商品を-1する
    if (selectItem.quantity > 1) {

        setCart((prevCart) => {
          return {
            products: prevCart.products.map((_product) =>
              _product.id === selectItem.id ? { ..._product, quantity: _product.quantity - 1 } : _product
            )
          };
        });
      } else {
        // カートから商品を削除する
        const products = [...cart.products];
        const index = products.findIndex((product) => product.id === selectItem.id);
        if (index === -1) return;
        products.splice(index, 1);

        setCart({
            products
        });
        
    }   
};

const deleteCart = (product) => {
    const selectItem = cart.products.find((_product) => _product.id === product.id);

    if (!selectItem) {
        console.warn("selectItemがundefinedのはずがない, バグの可能性あり");
        return;
    }

    const products = [...cart.products];
        const index = products.findIndex((product) => product.id === selectItem.id);
        if (index === -1) return;
        products.splice(index, 1);

        setCart({
            products
        });

};

return { addCart, removeCart, deleteCart };

};