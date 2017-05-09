# nearest_location.js

A javascript code for get the closest coordinate in an array of coordinates. 

Example
-------

<code>
	let lat = -16.3563354; 
    let lng = -48.8597604; 
      
    let targets = [
        ["Brasília", -15.721751, -48.008276],
        ["Goiania", -16.6427714, -49.4025503],
        ["Campo Grande", -20.8745434, -54.8223181],
        ["Cuiabá", -15.6143963, -56.1118468],
        ["Anápolis", -16.3333353, -49.0194964],
        ["Uberlândia", -18.9220586, -48.3336047]
    ];

    let location = window.getNearestLocation(lat, lng, targets);

    location -> ["Anápolis", -16.3333353, -49.0194964]
</code>

**OBS**
This is an application created for azeredogab.com from Andrew's code (stackoverflow: http://stackoverflow.com/users/622104/andrew-opengeocode)

