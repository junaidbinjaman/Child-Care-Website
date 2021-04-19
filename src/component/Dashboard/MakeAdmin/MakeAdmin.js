import React, { useState } from "react";
import DashboardHeader from "../../Shared/DashboardSharedComponents/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../Shared/DashboardSharedComponents/DashboardSidebar/DashboardSidebar";

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState("");

    const handleAdminEmail = (event) => {
        const Email = event.target.value;
        setAdminEmail(Email);
    };

    const makeAdmin = (event) => {
        const newForm = new FormData();
        newForm.append("adminEmail", adminEmail);

        event.preventDefault();
        fetch("http://localhost:5000/makeAdmin", {
                method: "POST",
                body: newForm,
            })
            .then((res) => res.json())
            .then((data) => console.log(data))
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    console.log(adminEmail);

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
        DashboardHeader title = "Dashboard" / >
        <
        /section>{" "} <
        div className = "review-form-section" >
        <
        form onSubmit = { makeAdmin } >
        <
        input onBlur = { handleAdminEmail }
        type = "text"
        placeholder = "Admin Email"
        name = "adminEmail" /
        >
        <
        br / >
        <
        input type = "submit"
        value = "Make Admin"
        className = "btn-global" / >
        <
        /form> <
        /div> <
        /div>{" "} <
        /div>
    );
};

export default MakeAdmin;