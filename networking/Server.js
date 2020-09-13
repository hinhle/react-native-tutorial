const apiGetEmployees = "http://dummy.restapiexample.com/api/v1/employees";
const apiInsertNewEmployee = "http://dummy.restapiexample.com/api/v1/create";
async function getEmployeesFromServer() {
  try {
    let response = await fetch(apiGetEmployees);
    let responseJson = await response.json();
    return responseJson.data; //listOfFoods
  } catch (error) {}
}

//send post request to insert new data
async function insertNewEmployeeToServer(params) {
  try {
    let response = await fetch(apiInsertNewEmployee, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    });
    let responseJSON = await response.json();
    return responseJSON.status;
  } catch (error) {}
}
export { getEmployeesFromServer };
export { insertNewEmployeeToServer };
