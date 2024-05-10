import React from "react";

const SearchResult = ({filterData}:{filterData:any}) => {
    return (
        <div className="w-[80%] mx-auto">
            <div className="mt-10">
                <div>
                <h1>Results</h1>
                <p>Price and other detail may vary based on the product size and colour. </p>
                </div>
                <div>
                    {
                        filterData?.map((product:any)=>{
                            return(
                                <div key={product.id}>
                                    <productCard product={product}/>
                                </div>
                                
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchResult;
