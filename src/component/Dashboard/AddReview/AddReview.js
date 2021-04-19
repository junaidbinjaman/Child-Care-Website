import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import DashboardHeader from "../../Shared/DashboardSharedComponents/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../Shared/DashboardSharedComponents/DashboardSidebar/DashboardSidebar";
import "./AddReview.css";

const AddReview = () => {
    const [reviewData, setReviewData] = useState("");
    const [reviewFile, setReviewFile] = useState("");

    const handleSubmitReview = (event) => {
        const newForm = {...reviewData };
        newForm[event.target.name] = event.target.value;
        setReviewData(newForm);
    };

    const handleReviewFile = (event) => {
        const file = event.target.files[0];
        setReviewFile(file);
    };

    const sss = () => {
        document.getElementById("upload-file").click();
    };

    const handleReviewServer = (event) => {
        const reviewDataForm = new FormData();
        reviewDataForm.append("file", reviewFile);
        reviewDataForm.append("name", reviewData.name);
        reviewDataForm.append("companyName", reviewData.companyName);
        reviewDataForm.append("message", reviewData.message);

        fetch("http://localhost:5000/addReview", {
                method: "POST",
                body: reviewDataForm,
            })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };

    return ( <
        div className = "dashboard-container" >
        <
        div className = "dashboard-sidebar" >
        <
        DashboardSidebar / >
        <
        /div>{" "} <
        div className = "dashboard-content" >
        <
        section className = "dashboard-header" >
        <
        DashboardHeader title = "Add Review" / >
        <
        /section>{" "} <
        div className = "review-form-section" >
        <
        form onSubmit = { handleReviewServer } >
        <
        input onBlur = { handleSubmitReview }
        type = "text"
        placeholder = "Full Name"
        name = "name" /
        >
        <
        br / >
        <
        input onBlur = { handleSubmitReview }
        type = "text"
        placeholder = "Company Name"
        name = "companyName" /
        >
        <
        br / >
        <
        textarea onBlur = { handleSubmitReview }
        placeholder = "Type your Message"
        name = "message" /
        >
        <
        br / >
        <
        input onChange = { handleReviewFile }
        type = "file"
        id = "upload-file" / >

        <
        AiOutlineCloudUpload onClick = { sss }
        id = "upload-file-button" / >
        <
        br / >
        <
        input type = "submit"
        value = "Add Review"
        className = "btn-global" / >
        <
        /form> <
        /div> <
        /div>{" "} <
        /div>
    );
};

export default AddReview;