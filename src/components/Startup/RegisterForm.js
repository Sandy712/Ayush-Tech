import React, { useState } from "react";
import "./Registerstyle.css";
import { v4 as uuid } from "uuid";
import { app, storage } from "../../Firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ref, uploadString, getDownloadURL } from "firebase/storage";

function InvestorForm() {
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [investmentAmount, setInvestmentAmount] = useState("");
  const [investmentType, setInvestmentType] = useState("");
  const [email, setemail] = useState("");

  const saveInvestor = async () => {
    const db = getFirestore(app);

    if (!photo) {
      console.log("Please select a photo");
      return;
    }

    const storageRef = ref(storage, `investor_photos/${uuid()}_${photo.name}`);

    try {
      const photoURL = await uploadPhoto(storageRef);

      const docRef = await addDoc(collection(db, "Investors_details"), {
        id: uuid(),
        Name: name,
        PhotoURL: photoURL,
        InvestmentAmount: investmentAmount,
        InvestmentType: investmentType,
        Contact: email,
      });

      console.log("Investor added with ID: ", docRef.id);
    } catch (e) {
      console.error("An error occurred:", e);
    }
  };

  const uploadPhoto = async (storageRef) => {
    const photoDataUrl = await convertFileToDataURL(photo);
    await uploadString(storageRef, photoDataUrl, 'data_url');
    return getDownloadURL(storageRef);
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

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveInvestor();
    setName("");
    setPhoto(null);
    setInvestmentAmount("");
    setInvestmentType("");
    setemail("");
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} id="submitted">
      <h1 className="title" style={{ color: "Blue" }}>
        Register Investor
      </h1>
      <hr />
      <div className="input-group">
        <label className="lab">Investor Photo</label>
        <input
          type="file"
          accept="image/*"
          onChange={handlePhotoChange}
          className="imp"
        />
      </div>
      <div className="input-group">
        <label className="lab">Investor Name</label>
        <input
          type="text"
          placeholder="Investor Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="inp"
        />
      </div>
      <div className="input-group">
        <label className="lab">Total Investment</label>
        <input
          type="number"
          value={investmentAmount}
          onChange={(e) => setInvestmentAmount(e.target.value)}
          required
          placeholder="Investment Amount"
          className="inp"
        />
      </div>
      <div className="input-group" style={{ display: "block" }}>
        <label htmlFor="type" className="form-label ">Investor Type</label>

        <select id="type" value={investmentType} onChange={(e) => setInvestmentType(e.target.value)}
          className='form-select' style={{ width: '100%' }}>
          <option value="">Select an investment type</option>
          <option value="Personal">Personal Inv.</option>
          <option value="Angel">Angel Inv.</option>
          <option value="Venture">Venture Cap.</option>
        </select>
        <div className="error-message text-danger" id='Typeerror'></div>
      </div>
      <div className="input-group">
        <label className="lab">Email Information</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setemail(e.target.value)}
          required
          placeholder="Email Information"
          className="inp"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default InvestorForm;
