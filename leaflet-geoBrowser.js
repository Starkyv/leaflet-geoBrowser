L.GeoBrowser = L.extend({

	getPosition: function (args) {
		var position = L.latLng(0, 0);
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				function(res){
					position.lat = res.coords.latitude;
					position.lng = res.coords.longitude;

					if (args.success)
						args.success(position);
				},
				function(error){
					if (!args.error) return;
					if (error.code == 1) {
						args.error("PERMISSION_DENIED");
					}
					else if (error.code == 2) {
						args.error("POSITION_UNAVAILABLE");
					}
					else if (error.code == 3) {
						args.error("TIMEOUT");
					}
				},
				{
					enableHighAccuracy: (args.highAccuracy ? args.highAccuracy : false)
				}
			);
		}
		else {
			if (args.error)
				args.error("NO_BROWSER_SUPPORT");
		}
	},

	centerMap: function (map, options) {
		var args = {
			success: function(position) {
				map.setView(position, (options && options.zoom ? options.zoom : undefined));
			},
			highAccuracy: (options && options.highAccuracy ? options.highAccuracy : false)
		}
		this.getPosition(args);
	}

});
