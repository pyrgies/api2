let dom = {

    loadTable: function() {
        data.getParametersCallback(dom.showTable);
    },

    showTable: function(parameters) {
        // create responsive table class
        let responsiveTable = document.createElement('div');
        responsiveTable.className = 'table-responsive-sm';
        document.body.appendChild(responsiveTable);

        // create table tag and set ID as well as bootstrap class name
        let planetsTable = document.createElement('table');
        planetsTable.setAttribute("ID", "planetsTable");
        planetsTable.className = "table table-bordered";
        responsiveTable.appendChild(planetsTable);

        // create the table header tag and inserting empty row
        let table = document.getElementById("planetsTable");
        let header = table.createTHead();
        let row = header.insertRow();

        // create header cells and insert "parameter" headers for table
        for (index = 0; index < parameters.length; index++) {
            let cell = row.insertCell();
            cell.innerHTML = parameters[index];
        }
        let planetsTableBody = document.createElement('tbody');
        planetsTableBody.setAttribute("ID", "planetsTableBody");
        planetsTable.appendChild(planetsTableBody)

    },

    loadPlanets: function (url) {
        data.getPlanets(url, dom.showPlanets)
    },

    showPlanets: function (planets) {
        // send planets data for current page to pagination
        dom.pagination(planets);

        // obtain required parameters
        let planetsParameters = data.getPlanetsParameters();

        //erase tbody before loading
        var tbody = document.getElementById("planetsTableBody");
        tbody.innerHTML = '';

        //select results only from planets
        var planetsResults = planets.results;

        // create table rows and cells
        for (rowIndex = 0; rowIndex < planetsResults.length; rowIndex++) {
            var row = tbody.insertRow(rowIndex);
            row.setAttribute('ID', 'row'+rowIndex);
            var rowID = document.getElementById('row'+rowIndex);

            // create table cells
            for (index = 0; index < planetsParameters.length; index++) {
                let keys = planetsParameters;
                var cell = rowID.insertCell();
                cell.setAttribute('class', planetsParameters[index]);
                cell.innerText = planetsResults[rowIndex][keys[index]]

            }
        }
        // create ID for each planet
        let theIdColumn = document.getElementsByClassName('#');
        for (cell = 0; cell < theIdColumn.length; cell++) {
            theIdColumn[cell].innerHTML=cell+1
        }

        // add residents info to residents column
        let residentsColumn = document.getElementsByClassName('residents');

        // load api urls for each residents
        for (cell = 0; cell < residentsColumn.length; cell++) {
            if (planetsResults[cell].residents.length > 0) {
                let links = planetsResults[cell].residents;
                // add modal buttons to each resident cell showing the number of residents on each
                residentsColumn[cell].innerHTML = `<button type="button" onclick="dom.loadResidents('${links}')" 
                                                    class="btn btn-primary" data-toggle="modal" 
                                                    data-target="#exampleModal-modal-lg" >${planetsResults[cell].residents.length}</button>`;
            }
        }
    },

    pagination: function (planets) {
        let nextPageLink = planets.next;
        var nextPageSelector = document.getElementById('next');
        nextPageSelector.addEventListener('click', function loadNextPage() {
            dom.loadPlanets(nextPageLink)
        });

        let previousPageLink = planets.previous;
        var previousPageSelector = document.getElementById('previous');
        previousPageSelector.addEventListener('click', function loadPrevPage() {
            dom.loadPlanets(previousPageLink)
        });

    },

    loadResidents: function(residentsLinks) {
        let seperateLinks = residentsLinks.split(',');

        for (resident=0; resident<seperateLinks.length; resident++) {
            data.getResidents(seperateLinks[resident], dom.showResidents);
        }
    },

    showResidents: function (residentsData) {
        var modalBody = document.getElementsByClassName("modal-body");
        let modalBodyClassIndex = 0;
        modalBody[modalBodyClassIndex].innerHTML += `<table class="table-responsive-xs" id="modal-container">`;

        var modalContainer = document.getElementById("modal-container");
        let modalRow = document.createElement('tr');
        modalRow.className = "row";
        modalContainer.appendChild(modalRow);

        let closeModalButton = document.getElementById("close");
        closeModalButton.addEventListener("click", function clearModal() {
            modalBody[modalBodyClassIndex].innerHTML = ""
        });

        var residentHeaders = data.getResidentsParameters();
        console.log(residentHeaders)

        for (header = 0; header < residentHeaders.length; header++) {
            modalRow.innerHTML += `<th>${residentHeaders[header]}</th>`
        }
    },

};

//};
