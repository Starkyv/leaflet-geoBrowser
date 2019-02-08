Leaflet-GeoBrowser
=============

Geo Location Plugin for Leaflet.js  
This plugin allows you to find the clients approximate position based on their Browser Geolocation API and set the map center to this position, if necessary.

Your Browser locates the position with the help of these factors. With increasing accuracy.
- IP
- WLAN
- UMTS
- GPS

Example
=============
https://leaflet-geobrowser.patrick-scholz.de/

Usage
=============
Include the .js file in your html file.
```html
  <script src="leaflet-geoBrowser.js"></script>
```
Get the cleints approximate position as a L.LatLng object:
```javascript
  L.GeoBrowser.getPosition({
    success: function(position) {
      // do whatever you want to with the L.LatLng object stored in position
    },
    error: function(errorCode){
      /*
      *
      * You'll get one of these errors through the errorCode Variable
      * PERMISSION_DENIED
      * POSITION_UNAVAILABLE
      * TIMEOUT
      * NO_BROWSER_SUPPORT
      * 
      */
    },
    highAccuracy: true
  });
```
Centre the map on the clients approximate position:
```javascript
  L.GeoBrowser.centerMap(
    map,
    {
      zoom: 15,
      highAccuracy: true
    }
  );
```
