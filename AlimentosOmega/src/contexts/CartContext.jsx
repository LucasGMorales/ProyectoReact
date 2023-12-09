import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const clear = () => setItems([]);

    const onAdd = (item, quantity) => {
        if (quantity > item.stock) {
            alert(`No contamos con tantas existencias. Stock disponible: ${item.stock}`);
            return;
        }

        const existeItem = items.find((i) => i.item.id === item.id);

        if (existeItem) {
            const newQuantity = existeItem.quantity + quantity;

            if (newQuantity > item.stock) {
                alert(`No contamos con tantas existencias. Stock disponible: ${item.stock}`);
                return;
            }

            setItems((prev) => {
                return prev.map((i) =>
                    i.item.id === item.id
                        ? { ...i, quantity: newQuantity }
                        : i
                );
            });
        } else {
            setItems((prev) => [...prev, { item, quantity }]);
        }

        const newStock = item.stock - quantity;
        const updatedItem = { ...item, stock: newStock };

        setItems((prev) =>
            prev.map((i) => (i.item.id === item.id ? { ...i, item: updatedItem } : i))
        );
    };

    const updateQuantity = (itemId, newQuantity) => {
        setItems((prev) =>
            prev.map((i) =>
                i.item.id === itemId ? { ...i, quantity: newQuantity } : i
            )
        );
    };

    const removeItem = (itemId) => {
        const removedItem = items.find((i) => i.item.id === itemId);
        const newStock = removedItem.item.stock + removedItem.quantity;

        setItems((prev) => prev.filter((i) => i.item.id !== itemId));
        setItems((prev) =>
            prev.map((i) =>
                i.item.id === itemId ? { ...i, item: { ...i.item, stock: newStock } } : i
            )
        );
    };

    const updateStock = (itemId, newStock) => {
        setItems((prev) =>
            prev.map((i) =>
                i.item.id === itemId ? { ...i, item: { ...i.item, stock: newStock } } : i
            )
        );
    };

    return (
        <CartContext.Provider value={{ items, clear, onAdd, updateQuantity, removeItem, updateStock }}>
            {children}
        </CartContext.Provider>
    );
};
