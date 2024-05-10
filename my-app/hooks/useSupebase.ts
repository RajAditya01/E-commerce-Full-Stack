import { supabase } from './../lib/supabase/product';
import { useState } from 'react';

export const useSupabase = () => {
    const [products, setProducts] = useState<any>([]);
    const [filterData, setFilterData] = useState<any>([]);

    const getDataFromSupabase = async () => {
        try {
            const { data, error } = await supabase.from('products').select("*");
            if (data) {
                setProducts(data); // Set the fetched data to the state
                console.log(data);
            }
            if (error) {
                console.log(error);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getFilterData = async (query:string) => {
        try {
            const { data, error } = await supabase.from('products').select("*").ilike('title', query);
            if (data) {
                console.log(data);
                setProducts(data); 
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

    return { products, getDataFromSupabase,filterData, getFilterData };
};
