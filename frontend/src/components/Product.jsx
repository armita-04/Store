import React, { useState } from "react"; //( i added chatGPT)
import Rating from "@mui/material/Rating"; //( i added chatGPT)

const Product = () => {
      const [value, setValue] = useState(4); // 3 ستاره به عنوان مقدار اولیه (اینو با چت جی پی تی اضافه کردم)
    

        return (
            <div className="flex flex-col items-center justify-center h-[500px] m-[10px] cursor-pointer">
            <img src="/serum1.jpg" alt="" className="h-[400px] w-[300px] bg-cover" />
            <h2 className="font-semibold text-[18px] w-[300px]">
                Rosehip Seed,Argan,Sweet, Almond & Vitamin E Oil-Anti-aging
            </h2>
            <span className="text-[18px] font-semibold flex items-center justify-center">
                $100
            </span>
            <span className="flex items-center">
                <Rating //( i added chatGPT's)
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }} //( i added chatGPT's)
                />
                (2)
            </span>
            </div>
        );
};

export default Product;
