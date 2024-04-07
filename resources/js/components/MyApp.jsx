import React from "react";
import { Link } from "react-router-dom";
import style from '../../sass/test.module.scss'

const MyApp = () => {
    return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <Link to='welcome/example' className="card-header">
                                Это компонента React js
                            </Link>

                            <div className={style.test}>Работаем над ней</div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default MyApp;