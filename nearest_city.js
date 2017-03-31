(function() {

    'use strict'; 

    /**
     * This is an apaptation created for azeredogab.com from  
     * Andrew's code (stackoverflow: http://stackoverflow.com/users/622104/andrew-opengeocode)
     */


    /**
     * Example of latitude and longitude and targets
     * ----------------------------------------------
     * 
     *  var lat = -16.3563354; 
     *   var lng = -48.8597604; 
     *    
     *   var targets = [
     *       ["Brasília", -15.721751, -48.008276],
     *       ["Goiania", -16.6427714, -49.4025503],
     *       ["Campo Grande", -20.8745434, -54.8223181],
     *       ["Cuiabá", -15.6143963, -56.1118468],
     *       ["Anápolis", -16.3333353, -49.0194964],
     *       ["Uberlândia", -18.9220586, -48.3336047]
     *   ];
     */


    function convertDegToRad(deg) 
    {
        return deg * Math.PI / 180;
    }

    function calculateEquirectangularProjection(lat1, lon1, lat2, lon2) 
    {
        lat1 = convertDegToRad(lat1);
        lat2 = convertDegToRad(lat2);
        lon1 = convertDegToRad(lon1);
        lon2 = convertDegToRad(lon2);
        var R = 6371; // km
        var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
        var y = (lat2 - lat1);
        var d = Math.sqrt(x * x + y * y) * R;
        return d;
    }

    function nearestCity(latitude, longitude, targets) 
    {
        var mindif = 99999;
        var closest;
        var index; 

        for (index = 0; index < targets.length; ++index) {
            var dif = calculateEquirectangularProjection(latitude, longitude, targets[index][1], targets[index][2]);
            if (dif < mindif) {
                closest = index;
                mindif = dif;
            }
        }

        return targets[closest];
    }

    if (typeof getNearestLocation != 'function') 
    {
        window.getNearestLocation = function(lat, lng, targets) 
        {   
            if (!lat && !lng)
                throw new "Latitude e Longitude são parâmetros obrigatórios."; 
            
            return nearestCity(lat, lng, targets); 
        }
    }
    

})(); 

