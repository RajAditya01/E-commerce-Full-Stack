"use client"
import HomePage from "@/components/HomePage";
import SearchResult from "@/components/SearchResult";
import { useSupabase } from "@/hooks/useSupebase";
import { useParams } from "next/navigation";
import React , { useEffect } from "react";

export default function page() {
  const {query} = useParams();
  const {filterData, getFilterData} = useSupabase();

  useEffect(()=>{
    getFilterData(query.toString());
  },[]);


  return (
     <div>
       <HomePage/>
      <SearchResult filterData = {filterData} />
     </div>
  );
}