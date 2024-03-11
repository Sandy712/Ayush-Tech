import React, { useState, } from "react";
import "./Registerstyle.css";
// import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { app, storage } from "../../Firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";


function RegisterForm() {
    const [input, setInput] = useState("");
    const [email, setEmail] = useState("")
    const [logo, setLogo] = useState(null);
    const [rev, setrev] = useState("");
    const [launch, setlaunch] = useState("");
    const [date, setdate] = useState("");


    const savestartup = async () => {
        const db = getFirestore(app);
        if (!logo) {
            console.log("Please select a logo");
            return;
        }

        const storageRef = ref(storage, `storage_logo/${uuid()}_${logo.name}`);

        try {
            const dataURL = await convertFileToDataURL(logo);


            console.log('Starting file upload...');
            await uploadString(storageRef, dataURL, 'data_url');
            console.log('File upload successful.');

            const logoUrl = await getDownloadURL(storageRef);
            console.log('Download URL retrieved:', logoUrl);


            const docRef = await addDoc(collection(db, "Startups_items"), {
                id: uuid(),
                Company_Name: input,
                Company_Email: email,
                Company_Logo: logoUrl,
                Company_Revenue: rev,
                Company_Launch: launch,
                Company_Details: date,
            });

            console.log("Startup added with ID: ", docRef.id);
        } catch (e) {
            console.error("An error occurred:", e);
        }
    };

    const convertFileToDataURL = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = () => {
                resolve(reader.result);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsDataURL(file);
        });
    };

    const handleLogochange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setLogo(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!logo) {
            console.log("Please select a logo");
            return;
        }
        savestartup();
        setInput("");
        setEmail("")
        setLogo(null);
        setrev("");
        setlaunch("");
        setdate("");
        e.target.reset();
        document.getElementById(
            "submitted"
        ).innerHTML = `                <div className="Container-fluid">
        <h2>Thank you, submission of<div style='color:'green';'>${input}</div>successful!</h2>
        <p>We will connect with you soon <i class="fa fa-envelope me-2"></i></p>
         
    </div>`;
    };

    return (
        <form onSubmit={handleSubmit} id="submitted">
            <h1 className="title" style={{ color: "Blue" }}>
                Register Startup
            </h1>
            <hr />
            <div className="input-group">
                <label className="lab">Company Logo</label>
                <input
                    type="file"
                    accept="image/*"
                    // value={logo}
                    onChange={handleLogochange}
                    placeholder="Company Logo"
                    className="imp"
                />
            </div>
            <div className="input-group">
                <label className="lab">Startup </label>
                <input
                    type="text"
                    // required
                    placeholder="Startup Name"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="inp"
                />
            </div>
            <div className="input-group">
                <label className="lab">Email</label>
                <input
                    type="email"
                    // required
                    placeholder="Startup Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="inp"
                />
            </div>
            <div className="input-group">
                <label className="lab">Revenue</label>
                <input
                    type="number"
                    name="password"
                    value={rev}
                    onChange={(e) => setrev(e.target.value)}
                    required
                    placeholder="Company Revenue"
                    className="inp"
                />
            </div>
            <div className="input-group">
                <label className="lab">Establishment</label>
                <input
                    type="Date"
                    value={launch}
                    onChange={(e) => setlaunch(e.target.value)}
                    required
                    placeholder="Start Date"
                    className="inp"
                />
            </div>
            <div className="input-group">
                <label className="lab">Details</label>
                <textarea
                    type="text"
                    value={date}
                    onChange={(e) => setdate(e.target.value)}
                    required
                    placeholder="Others Details"
                    className="inp"
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default RegisterForm;
