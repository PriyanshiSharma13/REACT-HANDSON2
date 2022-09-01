import React, {useState} from "react";

const MyForm = () => {

    const [data1, setdata1]=useState();
    const [data2, setdata2]=useState();
    const [data3, setdata3]=useState();
    const [data, setdata]=useState([]);

    const fetchDataOne = (e) => {
        setdata1(e.target.value);
    }

    const fetchDataTwo = (e) => {
        setdata2(e.target.value);
    }

    const fetchDataThree = (e) => {
        setdata3(e.target.value);
    }

    const submitBtn = (e) => {
        e.preventDefault();
        setdata((store) => {
            return [...store,["Name : ",data1, " | ", "Department : ",data2, " | ", "Rating : ",data3, " | "]]
        })
        setdata1('');
        setdata2('');
        setdata3('');
    }

    return (
        <>
        <h1 className="formTitle">Employee Feedback Form</h1>
        <div className="formTable">
            <form onSubmit={submitBtn}>
                <div className="box1">
                    <label htmlFor="name" className="nameLabel labell">Name :</label>
                    <input type="text" className="nameInput inputBox" value={data1} onChange={fetchDataOne} required/>  
                </div>
                <div className="box2">
                    <label htmlFor="department" className="departmentLabel labell">Department :</label>
                    <input type="text" className="departmentInput inputBox" value={data2} onChange={fetchDataTwo} required/>
                </div>
                <div className="box3">
                    <label htmlFor="rating" className="ratingLabel labell">Rating :</label>
                    <input type="number" className="ratingInput inputBox" value={data3} onChange={fetchDataThree} required/>
                </div>
                <button type="submit" className="submitBtn">Submit</button>
            </form>
        </div>

        <div className="fetchData">
            {
                data.map((theValue) => {
                    return <div className="storedData">{theValue}</div>
                })
            }
        </div>
        </>
    )
}

export default MyForm;
