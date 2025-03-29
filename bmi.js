function calculateBMI() {
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let result = document.getElementById("result");
    let category = document.getElementById("category");

    if (height === "" || weight === "" || height <= 0 || weight <= 0) {
        result.innerText = "Please enter valid values!";
        category.innerText = "";
        return;
    }

    // Convert height from cm to meters
    height = height / 100;
    
    // Calculate BMI
    let bmi = (weight / (height * height)).toFixed(2);

    // Display result
    result.innerText = `Your BMI: ${bmi}`;

    // Determine category
    if (bmi < 18.5) {
        category.innerText = "Category: Underweight";
        category.style.color = "blue";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category.innerText = "Category: Normal weight";
        category.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        category.innerText = "Category: Overweight";
        category.style.color = "orange";
    } else {
        category.innerText = "Category: Obese";
        category.style.color = "red";
    }
}

function resetFields() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("category").innerText = "";
}