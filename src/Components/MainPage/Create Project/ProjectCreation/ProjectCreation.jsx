import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./ProjectCreation.css";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { FileUploader } from "react-drag-drop-files";

function ProjectCreation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const Language = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const Domain = [
    { value: "Science", label: "Science" },
    { value: "Education", label: "Education" },
  ];
  const Stages = [
    { value: "Translation", label: "Translation" },
    { value: "Correction", label: "Correction" },
    { value: "Verification", label: "Verification" },
    { value: "Proofreading", label: "Proofreading" },
  ];
  const fileTypes = ["JPG", "PNG", "GIF", "docx"];
  const [file, setFile] = useState(null);

  const [startDate, setStartDate] = useState(false);
  const onSubmit = (data) => console.log(data);
  const onChange = (data) => {
    setStartDate(data);
  };
  const FileHandler = (file) => {
    setFile(file);
    console.log(file);
  };
  console.log(errors);
  return (
    <div className="project_creation">
      <div className="project_creationbox">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="createproject_formbox">
            <div className="create_project_name">
              <input
                type="text"
                placeholder="Name of Project"
                {...register("NameofProject", { required: true })}
                className="create_project_name_input1"
              />
              <input
                type="text"
                placeholder="Acronym"
                className="create_project_name_input2"
                {...register("Acronym", { required: true })}
              />
            </div>
            <div className="create_project_sec2">
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={onChange}
                  placeholderText="Deadline"
                  name="Deadline"
                  minDate={new Date()}
                />
                <Select
                  placeholder="Source Language"
                  name="Sourcelanguage"
                  options={Language}
                />
                <Select
                  isMulti
                  name="Translateto"
                  options={Language}
                  placeholder="Translate to"
                />
              </div>
              <div>
                <Select
                  isMulti
                  name="Domain"
                  options={Domain}
                  placeholder="Domain"
                />
                <Select
                  isMulti
                  name="Stages"
                  options={Stages}
                  placeholder="Set Stages"
                />
              </div>
            </div>
            <div className="create_project_sec3">
              <FileUploader
                handleChange={FileHandler}
                name="file"
                types={fileTypes}
                label="Add or drop File"
              />
            </div>
          </div>
          <button type="Submit" className="createProject_submit">
            Create Project
          </button>
        </form>
        <button className="createProject_Cancel" type="Submit">
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ProjectCreation;
