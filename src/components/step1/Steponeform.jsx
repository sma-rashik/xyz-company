import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 16px;
  margin-bottom: 5px;
  color: #666;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const ErrorText = styled.p`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

const NextButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const FormStep1 = ({ onNext }) => {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [client, setClient] = useState("");
  const [contractor, setContractor] = useState("");
  const [formErrors, setFormErrors] = useState({
    projectName: "",
    projectDescription: "",
    client: "",
    contractor: "",
  });

  const handleNext = (event) => {
    event.preventDefault();
    const newFormErrors = {};

    if (!projectName.trim()) {
      newFormErrors.projectName = "Project Name is required";
    }
    if (!projectDescription.trim()) {
      newFormErrors.projectDescription = "Project Description is required";
    }
    if (!client.trim()) {
      newFormErrors.client = "Client is required";
    }
    if (!contractor.trim()) {
      newFormErrors.contractor = "Contractor is required";
    }

    if (Object.keys(newFormErrors).length === 0) {
      onNext({
        projectName,
        projectDescription,
        client,
        contractor,
      });
    } else {
      setFormErrors(newFormErrors);
    }
  };

  return (
    <Container>
      <Heading>Step 1</Heading>
      <FormGroup>
        <Label>Project Name:</Label>
        <Input
          type="text"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        {formErrors.projectName && (
          <ErrorText>{formErrors.projectName}</ErrorText>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Project Description:</Label>
        <Input
          type="text"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          required
        />
        {formErrors.projectDescription && (
          <ErrorText>{formErrors.projectDescription}</ErrorText>
        )}
      </FormGroup>

      <FormGroup>
        <Label>Client:</Label>
        <Input
          type="text"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          required
        />
        {formErrors.client && <ErrorText>{formErrors.client}</ErrorText>}
      </FormGroup>

      <FormGroup>
        <Label>Contractor:</Label>
        <Input
          type="text"
          value={contractor}
          onChange={(e) => setContractor(e.target.value)}
          required
        />
        {formErrors.contractor && (
          <ErrorText>{formErrors.contractor}</ErrorText>
        )}
      </FormGroup>

      <NextButton onClick={handleNext}>Next</NextButton>
    </Container>
  );
};

export default FormStep1;
