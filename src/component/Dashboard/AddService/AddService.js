import React, { useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import DashboardHeader from "../../Shared/DashboardSharedComponents/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../../Shared/DashboardSharedComponents/DashboardSidebar/DashboardSidebar";

const AddService = () => {
    const [newService, setNewService] = useState("");
    const [serviceFile, setServiceFile] = useState("");

    const handleAddServicefield = (event) => {
        const newForm = {...newService };
        newForm[event.target.name] = event.target.value;
        setNewService(newForm);
    };

    const sss = () => {
        document.getElementById("upload-file").click();
    };

    const handleServiceFile = (event) => {
        const serviceFile = event.target.files[0];
        setServiceFile(serviceFile);
    };

    const handleAddService = () => {
        const newForm = new FormData();
        newForm.append("file", serviceFile);
        newForm.append("name", newService.name);
        newForm.append("serviceTitle", newService.serviceTitle);
        newForm.append("serviceDetail", newService.serviceDetail);

        fetch("http://localhost:5000/addService", {
                method: "POST",
                body: newForm,
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
        DashboardHeader title = "Add Service" / >
        <
        /section>{" "} <
        div className = "review-form-section" >
        <
        form onSubmit = { handleAddService } >
        <
        input onBlur = { handleAddServicefield }
        type = "text"
        placeholder = "Full Name"
        name = "name" /
        >
        <
        br / >
        <
        input onBlur = { handleAddServicefield }
        type = "text"
        placeholder = "Service Title"
        name = "serviceTitle" /
        >
        <
        br / >
        <
        textarea onBlur = { handleAddServicefield }
        placeholder = "Type Service Detail"
        name = "serviceDetail" /
        >
        <
        br / >
        <
        input onChange = { handleServiceFile }
        type = "file"
        id = "upload-file" / >

        <
        AiOutlineCloudUpload onClick = { sss }
        id = "upload-file-button" / >
        <
        br / >
        <
        input type = "submit"
        value = "Add  Service"
        className = "btn-global" / >
        <
        /form> <
        /div> <
        /div>{" "} <
        /div>
    );
};

export default AddService;