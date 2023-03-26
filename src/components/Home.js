import React from "react";
import '../components/Home.css';

const Home = ({ apiData, Book }) => {

    return (
        <>
            <div className="container-fluid home_bgimg">
                <div className="container">
                    <div className="col-md-12 text-center text-danger display-3 fw-bold">Home</div>
                    <div className="row mt-3 gx-4 ">
                        {
                            apiData.map((data) => {
                                return (
                                    <div className="col-md-6 col-lg-4" key={data.id}>
                                        <div className=" card shadow round mb-4" key={data.id}>
                                            <img className="img-fluid img" src={data.img} alt="img" />
                                            <div className="card-body">
                                                <h3>{data.Hotel}</h3>
                                                <div className="badge bg-success text-wrap">{data.ratting} <i className="fa fa-star"></i></div>
                                                <p>{data.description}</p>
                                                <div className="text-danger card_price">
                                                    <i className="fa fa-inr"></i> {data.standardprice} <i className="fa fa-inr text-decoration-line-through text-muted fs-5"> 3000</i> <span className="text-warning card_discount">{data.discount} off</span></div>
                                            </div>
                                            <div className="card-footer text-center py-3">
                                                <button className="btn btn-sm btn-danger" onClick={() => Book(data)} >Continue Booking</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
export default Home;
