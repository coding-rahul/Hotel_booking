import '../components/Book.css';

const Booking = ({ inputHandler, inputData, Booked, setType, Decrement, Increment, room, userSelect, type }) => {

    return (
        <>
            <div className="container-fluid booking_bgimg d-flex align-items-center justify-content-center">
                <div className="col-lg-4 ">
                    <div className="card">
                        <div className="card-header">
                            <div className="text-center text-danger fw-bold fs-4">UserDetails</div>
                        </div>
                        <div className="card-body px-4">
                            <div className="mb-2">
                                <label className="form-label fw-bold">Name</label>
                                <input type="text" className="form-control" name="Name" value={inputData.Name} onChange={inputHandler} />
                            </div>

                            <div className="mb-2">
                                <label className="form-label fw-bold">Email</label>
                                <input type="text" className="form-control" value={inputData.email} name="email" onChange={inputHandler} />
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-bold">Contact No.</label>
                                <input type="number" className="form-control" value={inputData.number} name="number" onChange={inputHandler} />
                            </div>

                            <div className="mb-3 ">
                                <label className="label form-label fw-bold"> Select type</label>
                                <span className="mx-2"><input type="radio" name="type" value="Standard" defaultChecked onChange={obj => setType(obj.target.value)} /><span className="fw-bold">Standard Room </span></span>
                                <span><input type="radio" name="type" value="Premium" onChange={obj => setType(obj.target.value)} /><span className="fw-bold"> Premium Room</span></span>
                            </div>
                            <div className="mb-3">
                                {
                                    (type === "Standard") ? <div className="fw-bold"> Standard Room : <span className="text-danger mx-2"><i className="fa fa-inr"></i> {userSelect.standardprice}</span></div>
                                        : <div className="fw-bold"> Premium Room : <span className="text-danger mx-2"><i className="fa fa-inr"></i> {userSelect.premiumprice}</span></div>
                                }
                            </div>

                            <div className="mb-2">
                                <label className="form-label fw-bold">No. of room</label>
                                <span className="mx-4">
                                    <button className="btn btn-sm" onClick={Decrement} ><i className="fa fa-minus"></i></button>
                                    <input type="number" className="Inc_input text-center" placeholder={room} />
                                    <button className="btn btn-sm" onClick={Increment}><i className="fa fa-plus"></i></button>
                                </span>
                            </div>

                            <div className="mb-2">
                                <label className="form-label fw-bold">Address</label>
                                <textarea type="text" className="form-control" value={inputData.address} name="address" onChange={inputHandler} />
                            </div>

                        </div>

                        <div className="card-footer d-flex justify-content-between ">
                            <button className="btn btn-sm btn-dark mx-4">join Membership  <i className="fa fa-sign-in"></i></button>
                            <button className="btn btn-sm btn-success" onClick={() => Booked(userSelect)}>Book Now</button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Booking;
