import axios from "axios";

export const fetchCompany = async () => {
  try {
    const response = await axios.get("http://localhost:8000/company");
    const company = [...response.data];
    return company;
  } catch (error) {
    console.log(error);
  }
};

export const updateCompany = async (id, updateCompany) => {
  try {
    await axios.patch(`http://localhost:8000/company/${id}`, {
      ...updateCompany,
    });
  } catch (error) {
    console.log(error);
  }
};

export const fetchDepartments = async () => {
  try {
    const response = await axios.get("http://localhost:8000/department");
    const departments = [...response.data];
    return departments;
  } catch (error) {
    console.log(error);
  }
};

export const addDepartment = async (newDepartment) => {
  try {
    await axios.post("http://localhost:8000/department", {
      ...newDepartment,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateDepartment = async (id, newDepartment) => {
  try {
    await axios.patch(`http://localhost:8000/department/${id}`, {
      ...newDepartment,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteDepartment = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/department/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const fetchEmployees = async () => {
  try {
    const response = await axios.get("http://localhost:8000/employee");
    const employee = [...response.data];
    return employee;
  } catch (error) {
    console.log(error);
  }
};

export const fetchEmployeesDept = async (id) => {
  try {
    const response = await axios.get(`http://localhost:8000/employee/${id}`);
    const employee = [...response.data];
    return employee;
  } catch (error) {
    console.log(error);
  }
};

export const addEmployee = async (newEmployee) => {
  try {
    await axios.post("http://localhost:8000/employee", {
      ...newEmployee,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteEmployee = async (id) => {
  try {
    await axios.delete(`http://localhost:8000/employee/${id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updateEmployee = async (id, newEmployee) => {
  try {
    await axios.patch(`http://localhost:8000/employee/${id}`, {
      ...newEmployee,
    });
  } catch (error) {
    console.log(error);
  }
};
