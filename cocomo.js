function calculateCOCOMO() {
    const kloc = parseFloat(document.getElementById("kloc").value);
    const projectType = document.getElementById("projectType").value;
    const reliability = parseFloat(document.getElementById("reliability").value);
    const dbSize = parseFloat(document.getElementById("dbSize").value);
    const productComplexity = parseFloat(document.getElementById("productComplexity").value);
    const performanceConstraints = parseFloat(document.getElementById("performanceConstraints").value);
    const memoryConstraints = parseFloat(document.getElementById("memoryConstraints").value);
    const vmInstability = parseFloat(document.getElementById("vmInstability").value);
    const recoveryTime = parseFloat(document.getElementById("recoveryTime").value);
    const analyticalAbilities = parseFloat(document.getElementById("analyticalAbilities").value);
    const developmentExperience = parseFloat(document.getElementById("developmentExperience").value);
    const softwareDevelopmentSkills = parseFloat(document.getElementById("softwareDevelopmentSkills").value);
    const vmUsageExperience = parseFloat(document.getElementById("vmUsageExperience").value);
    const programmingExperience = parseFloat(document.getElementById("programmingExperience").value);
    const softwareDevelopmentMethods = parseFloat(document.getElementById("softwareDevelopmentMethods").value);
    const developmentToolsUsage = parseFloat(document.getElementById("developmentToolsUsage").value);
    const scheduleRequirements = parseFloat(document.getElementById("scheduleRequirements").value);

    let typeValues = {};
switch (projectType) {
case "common":
    typeValues = { a: 2.4, b: 1.05, c: 2.5, d: 0.38 };
    break;
case "semidetached":
    typeValues = { a: 3.0, b: 1.12, c: 2.5, d: 0.35 };
    break;
case "embedded":
    typeValues = { a: 3.6, b: 1.20, c: 2.5, d: 0.32 };
    break;
default:
    break;
}

// Расчет затрат и времени разработки по формуле COCOMO
const E = typeValues.a * Math.pow(kloc, typeValues.b) *
(reliability * dbSize * productComplexity * performanceConstraints * memoryConstraints *
vmInstability * recoveryTime * analyticalAbilities * developmentExperience *
softwareDevelopmentSkills * vmUsageExperience * programmingExperience *
softwareDevelopmentMethods * developmentToolsUsage * scheduleRequirements);

const D = typeValues.c * Math.pow(E, typeValues.d);

// Отображение результатов
document.getElementById("effortResult").textContent = E.toFixed(2);
document.getElementById("durationResult").textContent = D.toFixed(2);
}