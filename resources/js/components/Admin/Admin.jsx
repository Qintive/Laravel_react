import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import styles from "./Admin.module.scss";

const Admin = () => {
    const [content, setContent] = useState("home");

    const handleItemClick = (item) => {
        setContent(item);
    };
    return (
        <div className={styles.adminContainer}>
            <AdminSidebar handleItemClick={handleItemClick}/>
            <AdminNavbar content={content}/>
        </div>
    );
};

export default Admin;
