import React from "react";

const AdminNavbar = ({ content }) => {
    let navbarContent;
    switch (content) {
        case "home":
            navbarContent = (
                <>
                    <div className="container-fluid">
                        <div className="row row-cols-1 row-cols-lg-3 g-4 py-5 mx-4">
                            <div className="col">
                                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex justify-content-center align-items-center">
                                    <div className="d-flex flex-column p-5 pb-3 text-white text-shadow-1">
                                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                            Файлов
                                        </h3>
                                        <hr />
                                        <h4 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center">
                                            15
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex justify-content-center align-items-center">
                                    <div className="d-flex flex-column p-5 pb-3 text-white text-shadow-1">
                                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                            Статей
                                        </h3>
                                        <hr />
                                        <h4 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center">
                                            20
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg d-flex justify-content-center align-items-center">
                                    <div className="d-flex flex-column p-5 pb-3 text-shadow-1">
                                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                                            Новостей
                                        </h3>
                                        <hr />
                                        <h4 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold text-center">
                                            7
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
            break;
        case "news":
            navbarContent = (
                <>
                    <h1>Новости</h1>
                    <h3>Test</h3>
                    <h4>TEST</h4>
                </>
            );
            break;
            case "file":
            navbarContent = (
                <>
                    <h1>Загрузите файл</h1>
                    <h3>Test</h3>
                    <h4>TEST</h4>
                </>
            );
            break;
            case "article":
            navbarContent = (
                <>
                    <h1>Добавить статью</h1>
                    <h3>Все статьи</h3>
                    <h4>TEST</h4>
                </>
            );
            break;
        default:
            navbarContent = null;
    }

    return <div>{navbarContent}</div>;
};

export default AdminNavbar;
