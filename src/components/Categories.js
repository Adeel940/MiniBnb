import React, { useRef } from "react";
import { FaFire, FaTree, FaRegCompass } from "react-icons/fa";
import { GiIsland, GiTreehouse } from "react-icons/gi";
import { MdOutlineRestaurant } from "react-icons/md";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Categories copy.css"

const Categories = () => {
    const categories = [
        { name: "Trending", icon: <FaFire /> },
        { name: "Cabins", icon: <FaTree /> },
        { name: "New", icon: <FaRegCompass /> },
        { name: "Islands", icon: <GiIsland /> },
        { name: "Treehouses", icon: <GiTreehouse /> },
        { name: "Luxe", icon: <MdOutlineRestaurant /> },
        { name: "Tropical", icon: <FaTree /> },
        { name: "Farms", icon: <FaFire /> },
        { name: "Play", icon: <FaRegCompass /> },
        { name: "Design", icon: <GiIsland /> },
        { name: "Trending", icon: <FaFire /> },
        { name: "Cabins", icon: <FaTree /> },
        { name: "New", icon: <FaRegCompass /> },
        { name: "Islands", icon: <GiIsland /> },
        { name: "Treehouses", icon: <GiTreehouse /> },
        { name: "Luxe", icon: <MdOutlineRestaurant /> },
        { name: "Tropical", icon: <FaTree /> },
        { name: "Farms", icon: <FaFire /> },
        { name: "Play", icon: <FaRegCompass /> },
        { name: "Design", icon: <GiIsland /> },
        { name: "Trending", icon: <FaFire /> },
        { name: "Cabins", icon: <FaTree /> },
        { name: "New", icon: <FaRegCompass /> },
        { name: "Islands", icon: <GiIsland /> },
        { name: "Treehouses", icon: <GiTreehouse /> },
        { name: "Luxe", icon: <MdOutlineRestaurant /> },
        { name: "Tropical", icon: <FaTree /> },
        { name: "Farms", icon: <FaFire /> },
        { name: "Play", icon: <FaRegCompass /> },
        { name: "Design", icon: <GiIsland /> },
    ];

    const scrollContainerRef = useRef(null);


    const scrollLeft = () => {
        scrollContainerRef.current.scrollBy({
            top: 0,
            left: -200,
            behavior: "smooth",
        });
    };


    const scrollRight = () => {
        scrollContainerRef.current.scrollBy({
            top: 0,
            left: 200,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative flex items-center">
            {/* Left Scroll Button */}
            <button
                onClick={scrollLeft}
                className="absolute left-10 z-10 p-2 rounded-full border bg-white shadow-lg"
                style={{ transform: "translateX(-50%)" }}
            >
                <FiChevronLeft size={24} />
            </button>

            {/* Scrollable Container */}
            <div
                ref={scrollContainerRef}
                className="flex items-center overflow-x-auto space-x-6 py-4 scrollbar-hide"
                style={{ scrollBehavior: "smooth" }}
            >
                {categories.map((category, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center cursor-pointer px-2 transition duration-300"
                    >
                        <div className="flex items-center justify-center px-3 text-2xl text-gray-500 transition duration-400 hover:text-gray-800">
                            {category.icon}
                        </div>
                        <span className="text-sm text-gray-700 mt-1 hover:text-black">
                            {category.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Right Scroll Button */}
            <button
                onClick={scrollRight}
                className="absolute right-10 z-10 p-2 rounded-full border bg-white shadow-2xl"
                style={{ transform: "translateX(50%)" }}
            >
                <FiChevronRight size={24} />
            </button>
        </div>
    );
};

export default Categories;
