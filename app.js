document.addEventListener("DOMContentLoaded", function () {
    let datesToDisplay = [
        { value: "2024-01-06" },
        { value: "2024-01-13" },
        { value: "2024-01-20" },
        { value: "2024-01-27" },
    ];

    let selectElement = document.querySelector('.date');
    /*
    // Parcourir le tableau des dates 
    datesToDisplay.forEach(function(date) {
        let optionElement = document.createElement('option');
        optionElement.value = date.value;
        optionElement.textContent = date.value;
        selectElement.appendChild(optionElement);
    });*/
});

// Fonction pour remplir un menu déroulant avec les dates
function DateSelect(selectElement) {
    datesToDisplay.forEach(function (date) {
        let optionElement = document.createElement('option');
        optionElement.value = date.value;
        optionElement.textContent = date.value;
        selectElement.appendChild(optionElement);
    });

    // Créer un nouveau bloc de réservation
    let newFieldset = document.createElement("fieldset");
    newFieldset.className = "fieldset";
    newFieldset.innerHTML = `
            <legend>Réservation</legend>
            <div class="form-group row">
                <div class="col-sm-4">
                    <label> Date : </label>
                </div>
                <div class="col-sm-8">
                    <select class="date form-control"></select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-4">
                    <label> Nombres de places : </label>
                </div>
                <div class="col-sm-8">
                    <input type="number" class="quantite form-control" value="1"/>
                </div>
            </div>
        `;

    // Ajoute le nouveau bloc avant le bouton "+"
    document.querySelector("form").insertBefore(newFieldset, document.getElementById("add"));
}
