import React, { useState } from "react";
import { IoHomeSharp } from "react-icons/io5";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { PiArticleMediumBold } from "react-icons/pi";
import { BiSolidExit } from "react-icons/bi";

const AdminSidebar = ({ handleItemClick }) => {
    const [activeButton, setActiveButton] = useState("home");

    const handleClick = (item) => {
        setActiveButton(item);
        handleItemClick(item);
    };
    return (
        <div
            className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
            style={{ width: "280px", height: "100vh" }}
        >
            <a
                href="admin"
                onClick={() => handleItemClick("home")}
                className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
                <span className="fs-4">Admin panel</span>
            </a>
            <hr />
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item">
                    <button
                        className="nav-link active"
                        aria-current="page"
                        onClick={() => handleClick("home")}
                    >
                        <IoHomeSharp
                            className="bi pe-none me-2"
                            width="16"
                            height="16"
                        />
                        Главная
                    </button>
                </li>
                <li>
                    <button
                        className="nav-link text-white"
                        onClick={() => handleItemClick("news")}
                    >
                        <IoNewspaperSharp
                            className="bi pe-none me-2"
                            width="16"
                            height="16"
                        />
                        Новости
                    </button>
                </li>
                <li>
                    <button
                        className="nav-link text-white"
                        onClick={() => handleItemClick("file")}
                    >
                        <FaFile
                            className="bi pe-none me-2"
                            width="16"
                            height="16"
                        />
                        Файлы
                    </button>
                </li>
                <li>
                    <button
                        className="nav-link text-white"
                        onClick={() => handleItemClick("article")}
                    >
                        <PiArticleMediumBold
                            className="bi pe-none me-2"
                            width="16"
                            height="16"
                        />
                        Статьи
                    </button>
                </li>
            </ul>
            <hr />
            <div className="dropdown">
                <a href="/" className="nav-link text-white">
                    <BiSolidExit
                        className="bi pe-none me-2"
                        width="16"
                        height="16"
                    />
                    Выйти
                </a>
            </div>
        </div>
    );
};

export default AdminSidebar;
