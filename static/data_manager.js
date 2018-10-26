let data = {
    getPlanetsParameters: function() {
        let planetsParameters = ['#', 'name', 'diameter', 'climate', 'terrain', 'surface_water', 'population', 'residents', 'vote'];
        return (planetsParameters)
    },

    getResidentsParameters: function() {
        let residentsParameters = ['name', 'height', 'mass', 'skin_color', 'hair_color', 'eye_color', 'birth_year', 'gender'];
        return (residentsParameters)
    },
    getParametersCallback: function(callback) {
        let parameters = ['#', 'name', 'diameter', 'climate', 'terrain', 'surface', 'population', 'residents', 'vote'];
        callback(parameters)
    },

    getPlanets: function (url, callback) {
        if (url == '1') {
            url = 'https://swapi.co/api/planets/'
        }
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', url);
        ourRequest.onload = function () {
            let ourData = JSON.parse(ourRequest.responseText);
            callback(ourData);
        };
        ourRequest.send();
    },

    getResidents: function (url, callback) {
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', url);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            callback(ourData);
        };
        ourRequest.send();
    },

    getPage: function (url, callback) {
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', url);
        ourRequest.onload = function () {
            var ourData = JSON.parse(ourRequest.responseText);
            callback(ourData);
        };
        ourRequest.send();
    }



};

