import { supabase } from './../lib/supabase/product';
import { useState } from 'react';

export const useSupabase = () => {
    const [products, setProducts] = useState<any>([]);

    const getDataFromSupabase = async () => {
        try {
            const { data, error } = await supabase.from('products').select("*");
            if (data) {
                console.log(data);
                setProducts(data); // Set the fetched data to the state
            }
            if (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // Call the function to fetch data initially
    // You may want to call this function when your component mounts
    // useEffect(() => {
    //     getDataFromSupabase();
    // }, []);

    return { products, getDataFromSupabase };
};
