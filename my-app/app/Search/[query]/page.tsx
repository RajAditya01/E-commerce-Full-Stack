"use client"
import { useParams } from "next/navigation";
import React, { useEffect } from "react";
import React,{useEffect} from "react";

const Page = () => {
    const {query} = useParams();
    const {products, getDataFromSupabase} = useSupabase();

    useEffect(()=>{
        getDataFromSupabase();
    },[]);

    console.log(products);
    return (
        <div>
            {query}
        </div>
    );
}

export default Page;
