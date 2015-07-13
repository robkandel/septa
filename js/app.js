////////////////////////////////////////////////////||
// ROB KANDEL  										||
// kandelrob@gmail.com								||
// 													||
// created 07.09.15	| updated 07.13.15				||
// app.js											||
// version 0.0.1									||
////////////////////////////////////////////////////||
var _septa = (function(){
	var _all_routes = ["1","2","3","4","5","6","7","8","9","12","14","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","35","37","38","39","40","42","43","44","46","47","48","50","52","53","54","55","56","57","58","59","60","61","62","64","65","66","67","68","70","73","75","77","78","79","80","84","88","89","C","G","HXH","J","K","L","R","LUCY","90","91","92","93","94","95","96","97","98","99","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","123","124","125","126","127","128","129","130","131","132","133","134","139","150","201","204","205","206","310","airport","chestnut-h-east","chestnut-h-west","doylestown","elwyn","fox-chase","malvern","marcus-hook","norristown","paoli","temple-u","thorndale","trenton","warminster","west-trenton","wilmington","10","11","13","15","34","36","101","102"],
	_bus_routes = ["1","2","3","4","5","6","7","8","9","12","14","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","35","37","38","39","40","42","43","44","46","47","48","50","52","53","54","55","56","57","58","59","60","61","62","64","65","66","67","68","70","73","75","77","78","79","80","84","88","89","C","G","HXH","J","K","L","R","LUCY","90","91","92","93","94","95","96","97","98","99","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","123","124","125","126","127","128","129","130","131","132","133","134","139","150","201","204","205","206","310"],
	_rail_routes = ["airport","chestnut-h-east","chestnut-h-west","doylestown","elwyn","fox-chase","malvern","marcus-hook","norristown","paoli","temple-u","thorndale","trenton","warminster","west-trenton","wilmington"],
	_trolley_routes = ["10","11","13","15","34","36","101","102"],
	_all_stops = [],
	_map, _marker_list=[],_stops_layer, _nw_layer, _se_layer, _bus_layer, _train_layer, _timer, _legend = '', _geocode_source = false, _current_route = null;
	method = {
		init: function(){
			jQuery('#menu_wrapper').on('click', function(){
				if (_current_route != null) {
					clearTimeout(_timer);
					if (jQuery('#timer').data('pietimer')) {
						jQuery('#timer').pietimer('reset');
					}
				}
				if(jQuery(this).hasClass('menuWrapperActive')){
					jQuery(this).removeClass('menuWrapperActive');
					jQuery('.preloaderWrapper').hide();
					jQuery('.searchWrapper').hide();
				} else {
					jQuery(this).addClass('menuWrapperActive');
					jQuery('.preloaderWrapper').hide();
					jQuery('.searchWrapper').show();
				}
			});
			method.pick_location();
			method.map.start_map();
		},
		pick_location: function(){
			jQuery('.preloaderWrapper').hide();
			jQuery('.searchWrapper').show();
			jQuery('#search_type_route').on('click', function(){
				jQuery('#search_holder_route').slideDown(150);
				jQuery('#search_holder_find').slideUp(150);
				jQuery(this).addClass('btn-success').removeClass('btn-default');
				jQuery('#search_type_find').removeClass('btn-success').addClass('btn-default');
			});
			jQuery('#search_type_find').on('click', function(){
				jQuery('#search_holder_route').slideUp(150);
				jQuery('#search_holder_find').slideDown(150);
				jQuery(this).addClass('btn-success').removeClass('btn-default');
				jQuery('#search_type_route').removeClass('btn-success').addClass('btn-default');
			});
			jQuery('#route_name').autocomplete({
				source: _all_routes
			}).on('input', function() {
				(jQuery('#route_name').val().length >= 1) ? jQuery('#route_search').find('button').prop('disabled', false) : jQuery('#route_search').find('button').prop('disabled', true);
			}).on('keydown', function(e){
				if (e.keyCode == 13) {
					if(jQuery('#route_name').val().length >= 1){
						jQuery('#route_search').click()
					}
				}
			});
			jQuery('#route_search').on('click', function(){
				method.get_data.find_route_type(jQuery('#route_name').val())
			});
			jQuery('.showRouteButton').on('click', function(){
				jQuery('.showRouteTypes').slideDown(150);
				jQuery('.inputWrapper').slideUp(150);
				jQuery('.showRouteButton').slideUp(150);
			});
			method.start_carousel($("#bus_routes"), 'bus');
			jQuery('.routeTypeButton').each(function() {
				jQuery(this).on('click', function(){
					var _that = jQuery('.routeTypeButtonWrapper').find('.btn-primary');
					_that.removeClass('btn-primary').addClass('btn-default');
					jQuery(this).removeClass('.btn-default').addClass('btn-primary');
					jQuery('.routeNumber').slideUp(150);
					jQuery('#'+jQuery(this).attr('id').split('route_type_')[1]+'_routes').slideDown(150);
					var _destroy = jQuery('#'+_that.attr('id').split('route_type_')[1]+'_routes').data('owlCarousel');
					_destroy.destroy();
					method.start_carousel(jQuery('#'+jQuery(this).attr('id').split('route_type_')[1]+'_routes'), jQuery(this).attr('id').split('route_type_')[1]);
				});
			});
			jQuery('.myLocationButton').on('click', function(){
				jQuery('.preloaderWrapper').show();
				jQuery('.searchWrapper').hide();
				if (navigator.geolocation) {
        			navigator.geolocation.getCurrentPosition(_septa.return_coords);
    			} else { 
        			alert("Geolocation is not supported by this browser");
        			jQuery('.preloaderWrapper').hide();
					jQuery('.searchWrapper').show();
    			}
			});
			jQuery('#geocode_input').on('input', function() {
				(jQuery('#geocode_input').val().length >= 1) ? jQuery('#geocode_search').find('button').prop('disabled', false) : jQuery('#geocode_search').find('button').prop('disabled', true);
			}).on('keydown', function(e){
				if (e.keyCode == 13) {
					if(jQuery('#geocode_input').val().length >= 1){
						jQuery('#geocode_search').click()
					}
				}
			});
			jQuery('#geocode_search').on('click', function(){
				method.geocode.google(jQuery('#geocode_input').val())
			});
		},
		return_coords: function(pos){
			if ('latitude' in pos.coords && 'longitude' in pos.coords) {
				method.get_data.find_stations(pos.coords.latitude, pos.coords.longitude);
			} else {
				alert('Something went wrong, try typing your address');
				jQuery('.preloaderWrapper').hide();
				jQuery('.searchWrapper').show();
			}
		},
		start_carousel: function(parent, type) {
			var _owl = parent;
			_owl.owlCarousel({
      			items : ((type == 'train') ? 2 : 8),
      			responsive: false
  			});
  			parent.find('.item').each(function(){
  				jQuery(this).unbind('click');
  				jQuery(this).on('click', function(){
  					jQuery('.showRouteTypes').slideUp(150);
					jQuery('.inputWrapper').slideDown(150);
					jQuery('.showRouteButton').slideDown(150);
					jQuery('#route_name').val(jQuery(this).attr('data-value'));
					jQuery('#route_search').click();
				});
  			});
		},
		map: {
			start_map: function(){
				_map = L.map('the_map', {
                    center: [39.952474, -75.163590],
                    zoom: 12,
                    detectRetina: true
                });
                var _layer = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
                }).addTo(_map);
			},
			add_points: function(list, type) {
				_nw_layer = new L.LayerGroup();
				_se_layer = new L.LayerGroup();
                _nw_layer.clearLayers();
                _se_layer.clearLayers();
                _marker_list = [];
				var _icon = L.Icon.extend({
    				options: {
    					iconSize: [25, 41],
                        shadowSize: [41, 41],
                        iconAnchor: [12.5, 41],
                        shadowAnchor: [12.5, 41],
                        popupAnchor: [0, -33],
    					shadowUrl: 'icons/marker-shadow.png',
    					shadowRetinaUrl: 'icons/marker-shadow@2x.png',
    					shadowSize: [41, 41]
    				}
				}), 
				_bus_north_west_icon = new _icon({iconUrl: 'icons/bus_blue.png', iconRetinaUrl: 'icons/bus_blue@2x.png'}),
				_bus_south_east_icon = new _icon({iconUrl: 'icons/bus_orange.png', iconRetinaUrl: 'icons/bus_orange@2x.png'}),
				_train_north_west_icon = new _icon({iconUrl: 'icons/train_blue.png', iconRetinaUrl: 'icons/train_blue@2x.png'}),
				_train_south_east_icon = new _icon({iconUrl: 'icons/train_orange.png', iconRetinaUrl: 'icons/train_orange@2x.png'}),
				_trolley_north_west_icon = new _icon({iconUrl: 'icons/trolley_blue.png', iconRetinaUrl: 'icons/trolley_blue@2x.png'}),
				_trolley_south_east_icon = new _icon({iconUrl: 'icons/trolley_green.png', iconRetinaUrl: 'icons/trolley_green@2x.png'}),
				_fullBounds = new L.LatLngBounds(),
				_a = ((type == 'bus' || type == 'trolley') ? 'bus' : 'train');
				for (i in list[_a]) {
					var _marker = L.marker([list[_a][i].lat, ((type == 'bus' || type == 'trolley') ? list[_a][i].lng : list[_a][i].lon)], {id: i, icon: ((type == 'train') ? _train_north_west_icon : ((list[_a][i].Direction.toLowerCase() == 'northbound' || list[_a][i].Direction.toLowerCase() == 'westbound') ? ((type == 'bus') ? _bus_north_west_icon : _train_north_west_icon) : ((type == 'bus') ? _bus_south_east_icon : _train_south_east_icon)))}),
					_lat_lng = new L.LatLng(parseFloat(list[_a][i].lat), parseFloat(((type == 'bus' || type == 'trolley') ? list[_a][i].lng : list[_a][i].lon)));
                    if (type == 'bus' || type == 'trolley') {
                    	(list[_a][i].Direction.toLowerCase() == 'northbound' || list[_a][i].Direction.toLowerCase() == 'westbound') ? _nw_layer.addLayer(_marker) : _se_layer.addLayer(_marker);
                    	_fullBounds.extend(_lat_lng);
                    	_marker.bindPopup('<table class="table"><thead><tr><th style="border-bottom: 2px solid #ccc;"><h4 style="margin: 0;">Route: #'+_current_route+'</h4></th><th style="border-bottom: 2px solid #ccc;">&nbsp;</th></tr></thead><tbody><tr><td style="padding-top: 5px;"><b>Direction:</b></td><td style="padding-top: 5px;">'+list[_a][i].Direction.replace('Bound', 'bound')+'</td></tr><tr><td><b>Bus #:</b></td><td>'+list[_a][i].VehicleID+'</td></tr>'+((list[_a][i].destination != '') ? '<tr><td><b>Destination:</b></td><td>'+list[_a][i].destination+'</td></tr>': '')+'<tr><td><b>Updated:</b></td><td><i style="color:#d9534f; font-weight: 300;">'+method.parse_data.calc_time(list[_a][i].Offset_sec)+'</i></td></tr></tbody></table>')
                    	_marker_list.push(_marker);
                    } else {
                    	if (list[_a][i].dest.toLowerCase().replace(/\s/g, '-') == _current_route){
                    		_nw_layer.addLayer(_marker);
                    		_fullBounds.extend(_lat_lng);
                    		_marker.bindPopup('<h4>Route: '+$('div[data-value="'+_current_route+'"]').html()+'</h4><table class="table"><tbody><tr><td><b>Train #:</b></td><td>'+list[_a][i].trainno+'</td></tr>'+((list[_a][i].nextstop != '') ? '<tr><td><b>Next Stop:</b>&nbsp;&nbsp;&nbsp;</td><td>'+list[_a][i].nextstop+'</td></tr>': '')+((list[_a][i].service != '') ? '<tr><td><b>Service:</b></td><td>'+list[_a][i].service+'</td></tr>': '')+'<tr><td><b>Late:</b></td><td><i style="'+((parseFloat(list[_a][i].late) == 0) ? 'color:#5cb85c' :'color:#d9534f')+'; font-weight: 300;">'+((parseFloat(list[_a][i].late) == 0) ? 'On time' : (list[_a][i].late + ' min'))+'</i></td></tr></tbody></table>')
                    		_marker_list.push(_marker);
                    	}
                    }
				}
				_nw_layer.addTo(_map);
				if (type == 'bus' || type == 'trolley') {
					_se_layer.addTo(_map);
				} else {
					_map.options.maxZoom = 13;
				}
				setTimeout(function() {
					if (_marker_list.length > 0) {
						_map.panTo(_map.fitBounds(_fullBounds).getCenter())
					} else {
						//alert('Sorry, no results found')
					}
				}, 100);
				jQuery('.preloaderWrapper').hide();
			},
			add_bus_lines: function(geojson, type){
				_bus_layer = L.geoJson(geojson, {
					style: function (feature, layer) {
                        if (feature.geometry.type != 'Point') {
                        	if (type == 'bus') {
	                    		return {weight: 3,color: "#999",opacity: .8,fillColor: '#999',fillOpacity: .5}
	                    	} else {
	                    		return {weight: 3,color: "#5cb85c",opacity: .8,fillColor: '#5cb85c',fillOpacity: .5}
	                    	}
	                    } 
                    },
                    pointToLayer: function (feature, latlng) {
                    	return L.circleMarker(latlng, {radius: 0})
                    }
				}).addTo(_map);
				_all_stops = [];
				if (typeof(_legend) == 'object') {
					_legend.removeFrom(_map);
				}
				_legend = L.control({position: 'topright'});
				_legend.onAdd = function (_map) {
    				var div = L.DomUtil.create('div', 'info legend');
        			div.innerHTML += '<table class="table"><tr class="nw_layer buttonItem" data-value="on"><td><img src="icons/bus_blue@2x.png" /></td><td class="nb"><span>North/West Bound</span</td></tr><tr class="se_layer buttonItem" data-value="on"><td><img src="icons/bus_orange@2x.png" /></td><td class="sb"><span>South/East Bound</span></td></tr><tr><td><input type="checkbox" id="show_stops"></td><td>Show all bus stops</td></tr></table>';
    				return div;
				};
				_legend.addTo(_map);
				jQuery('#show_stops').on('click', function(){
					if (jQuery(this).prop('checked')) {
						(_all_stops.length == 0) ? method.get_data.get_bus_stops(_current_route): method.map.add_all_stops();
					} else {
						method.map.remove_layer(_stops_layer);
					}
				});
				jQuery('.nw_layer').on('click', function(){
					if (jQuery(this).attr('data-value') == 'on') {
						method.map.remove_layer(_nw_layer);	
						jQuery(this).attr('data-value', 'off');
					} else {
						_nw_layer.addTo(_map);
						jQuery(this).attr('data-value', 'on');
					}
				});
				jQuery('.se_layer').on('click', function(){
					if (jQuery(this).attr('data-value') == 'on') {
						method.map.remove_layer(_se_layer);	
						jQuery(this).attr('data-value', 'off');
					} else {
						_se_layer.addTo(_map);
						jQuery(this).attr('data-value', 'on');
					}
				})
			},
			add_train_lines: function(geojson){
				_train_layer = L.geoJson(geojson, {
					style: function (feature, layer) {
                        if (feature.geometry.type != 'Point') {
                        	if (feature.properties.name == _current_route) {
	                    		return {weight: 3,color: "#f0ad4e",opacity: .8,fillColor: '#f0ad4e',fillOpacity: .5}
	                    	} else {
	                    		return {weight: 3,color: "#999",opacity: .5,fillColor: '#999',fillOpacity: 0}
	                    	}
	                    } 
                    },
                    pointToLayer: function (feature, latlng) {
                    	return L.circleMarker(latlng, {radius: 0})
                    }
				}).addTo(_map);
			},
			add_all_stops: function() {
				_stops_layer = new L.LayerGroup();
                _stops_layer.clearLayers();
				for (i in _all_stops) {
					var _circle = L.circle([_all_stops[i].lat, _all_stops[i].lng], 12, {
    					color: '#c9302c',
    					fillColor: '#d9534f',
    					fillOpacity: 0.85
					});
                    _stops_layer.addLayer(_circle);
					_circle.bindPopup(_all_stops[i].stopname)
				}
				_stops_layer.addTo(_map);
			},
			add_found_stops: function(list) {
				_nw_layer = new L.LayerGroup();
				var _icon = L.Icon.extend({
    				options: {
    					iconSize: [25, 41],
                        shadowSize: [41, 41],
                        iconAnchor: [12.5, 41],
                        shadowAnchor: [12.5, 41],
                        popupAnchor: [0, -33],
    					shadowUrl: 'icons/marker-shadow.png',
    					shadowRetinaUrl: 'icons/marker-shadow@2x.png',
    					shadowSize: [41, 41]
    				}
				}), 
				_bus_icon = new _icon({iconUrl: 'icons/bus_found_stop.png', iconRetinaUrl: 'icons/bus_found_stop@2x.png'}),
				_train_icon = new _icon({iconUrl: 'icons/train_found_stop.png', iconRetinaUrl: 'icons/train_found_stop@2x.png'}),
				_trolley_icon = new _icon({iconUrl: 'icons/trolley_found_stop.png', iconRetinaUrl: 'icons/trolley_found_stop@2x.png'}),
				_fullBounds = new L.LatLngBounds();
				for (i in list) {
					if ((list[i].location_type == 'bus_stops' || list[i].location_type == 'rail_stations' || list[i].location_type == 'trolley_stops') && (list[i].location_lat != '' && list[i].location_lon != '')) {
						var _marker = L.marker([list[i].location_lat, list[i].location_lon], {id: i, icon: ((list[i].location_type == 'bus_stops') ? _bus_icon : ((list[i].location_type == 'rail_stations') ? _train_icon : _trolley_icon))}),
						_lat_lng = new L.LatLng(list[i].location_lat, list[i].location_lon);
						_nw_layer.addLayer(_marker);
                    	_fullBounds.extend(_lat_lng);
                    	_marker.bindPopup('<h4>'+list[i].location_name+'</h4><table class="table"><tbody><tr><td style="padding-top: 5px;"><b>Type:</b></td><td style="padding-top: 5px;">'+list[i].location_type.replace('bus', 'Bus').replace('trolley', 'Trolley').replace('_stops', ' stop').replace('rail', 'Train').replace('_stations', ' station')+'</td></tr><tr><td><b>Distance:</b></td><td><i style="color:#d9534f; font-weight: 300;">'+list[i].distance+' miles</i></td></tr></tbody></table>');
						_marker_list.push(_marker);
					}
				}
				_nw_layer.addTo(_map);
				setTimeout(function() {_map.panTo(_map.fitBounds(_fullBounds).getCenter())}, 100);
				jQuery('.preloaderWrapper').hide();
			},
			remove_layer: function(_layer) {
				_map.removeLayer(_layer);
			},
			clear_all: function(){
				if (_current_route != null) {
					clearTimeout(_timer);
					if (typeof(_nw_layer) == 'object') {
						method.map.remove_layer(_nw_layer);
					}
					if (typeof(_se_layer) == 'object') {
						method.map.remove_layer(_se_layer);	
					}
					if (typeof(_bus_layer) == 'object') {
						method.map.remove_layer(_bus_layer);
					}
					if (typeof(_train_layer) == 'object') {
						method.map.remove_layer(_train_layer);
					}
					if (typeof(_stop_layer) == 'object') {
						method.map.remove_layer(_stops_layer);
					}
					if (typeof(_legend) == 'object') {
						_legend.removeFrom(_map);
					}
					_all_stops = [];
					_marker_list=[]
					_current_route = '';
					_legend = '';
				}
			}
		},
		get_data: {
			find_route_type: function(val){
				if (jQuery.inArray(val.toLowerCase(), _rail_routes) != -1) {
					method.map.clear_all();
					jQuery('#menu_wrapper').removeClass('menuWrapperActive');
					_current_route = val;
					method.get_data.get_rail_line();
					method.get_data.get_rail_data();
				} else if (jQuery.inArray(val.toLowerCase(), _bus_routes) != -1 || jQuery.inArray(val.toLowerCase(), _trolley_routes) != -1){
					method.map.clear_all();
					jQuery('#menu_wrapper').removeClass('menuWrapperActive');
					_current_route = val;
					method.get_data.get_bus_line(((jQuery.inArray(val.toLowerCase(), _bus_routes) != -1) ? 'bus' : 'trolley'));
					method.get_data.get_bus_data(((jQuery.inArray(val.toLowerCase(), _bus_routes) != -1) ? 'bus' : 'trolley'));
				} else {
					alert("Sorry, that route doesn't exist");
					_current_route = null;
				}
			},
			get_bus_data: function(type) {
				jQuery('.preloaderWrapper').show();
				jQuery('.searchWrapper').hide();
				jQuery('.ui-autocomplete').hide();
				var _dt = ((new Date).getTime());
				jQuery.ajax({
					url:"http://www3.septa.org/hackathon/TransitView/?route="+_current_route+"&ts="+_dt+"&callback=?",
					dataType:"json",
					success: function(d){
						method.map.add_points(d, type);
						method.timer.start();
						_timer = setTimeout(function(){
							method.map.remove_layer(_nw_layer);	
							method.map.remove_layer(_se_layer);	
							if (_current_route != null) {
								method.get_data.get_bus_data(type);
							}
						}, 60000)
					},
					error: function() {
						alert('Sorry, something went wrong')
					}
				});
			},
			get_bus_line: function(type){
				jQuery.ajax({
					url:"routes/routes_"+_current_route+".kml",
					dataType:"text",
					success: function(d){
						method.map.add_bus_lines(toGeoJSON.kml(jQuery.parseXML(d)), type);
					},
					error: function() {
						alert('Sorry, something went wrong')
					}
				});
			},
			get_bus_stops: function() {
				jQuery('.preloaderWrapper').show();
				jQuery.ajax({
					url:"http://www3.septa.org/hackathon/Stops/?req1="+_current_route+"&callback=?",
					dataType:"json",
					success: function(d){
						jQuery('.preloaderWrapper').hide();
						_all_stops = d;
						method.map.add_all_stops();
					},
					error: function() {
						alert('Sorry, something went wrong')
					}
				});
			},
			get_rail_data: function() {
				jQuery('.preloaderWrapper').show();
				jQuery('.searchWrapper').hide();
				jQuery('.ui-autocomplete').hide();
				var _dt = ((new Date).getTime());
				jQuery.ajax({
					url:"http://www3.septa.org/hackathon/TrainView/?dm="+_current_route+"&ts="+_dt+"&callback=?",
					dataType:"json",
					success: function(d){
						var _temp = {};
						_temp['train'] = d;
						method.map.add_points(_temp, 'train');
						method.timer.start();
						_timer = setTimeout(function(){
							method.map.remove_layer(_nw_layer);	
							if (_current_route != null) {
								method.get_data.get_rail_data();
							}
						}, 60000)
					},
					error: function() {
						alert('Sorry, something went wrong')
					}
				});
			},
			get_rail_line: function(){
				jQuery.ajax({
					url:"routes/regional_rail.kml",
					dataType:"text",
					success: function(d){
						method.map.add_train_lines(toGeoJSON.kml(jQuery.parseXML(d)));
					},
					error: function() {
						alert('Sorry, something went wrong')
					}
				});
			},
			find_stations: function(lat, lng) {
				jQuery('.preloaderWrapper').show();
				jQuery('.searchWrapper').hide();
				jQuery('.ui-autocomplete').hide();
				var _dt = ((new Date).getTime());
				jQuery.ajax({
					url: "http://www3.septa.org/hackathon/locations/get_locations.php?lon="+lng+"&lat="+lat+"&callback=?&radius=3",
					dataType: "jsonp",
  					success: function(d){
    					method.map.add_found_stops(d);
  					},
					error: function() {
						alert('Sorry, something went wrong')
					}
				});
			}
		},
		parse_data: {
			calc_time: function(num) {
				var _min = Math.floor(num / 60);
				if (_min == 0) {
					return 'Less than 1 min ago';
				}
				return _min + ' min ' + (Math.round(Math.floor(100 * (((num / 60) % 1) * 60)) / 100)).toString() + ' sec ago'
			}
		},
		geocode: {
			google: function(address) {
				jQuery('.preloaderWrapper').show();
				jQuery('.searchWrapper').hide();
				if(!_geocode_source) {
					var s = document.createElement("script");
                	s.type = "text/javascript";
                	s.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=gmap_draw";
                	window.gmap_draw = function () {
                		geocoder = new google.maps.Geocoder();
                    	geocoder.geocode({'address': (address + 'Philadelphia, Pa')}, function(results, status) {
    						if (status == google.maps.GeocoderStatus.OK) {
    							method.get_data.find_stations(results[0].geometry.location.A, results[0].geometry.location.F)
    						} else {
      							alert('Geocode was not successful for the following reason: ' + status);
    						}	
  						});  
                		_geocode_source = true;
                	}
                	jQuery("head").append(s);
                }
			}
		},
		timer: {
			start: function(){
				if (jQuery('#timer').data('pietimer')) {
					jQuery('#timer').pietimer('reset');
            		jQuery('#timer').pietimer('start');
				} else {
					jQuery('#timer').pietimer({
        				timerSeconds: 60,
        				fill: false,
        				showPercentage: false,
        				callback: function() {
            				jQuery('#timer').pietimer('reset');
            				jQuery('#timer').pietimer('start');
        				}
    				});
				}
			}
		}
	}
	return method;
})();


//https://github.com/chikamichi/jquery.pietimer
(function( $ ){

    $.fn.pietimer = function( method ) {
        // Method calling logic
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.pietimer' );
        }
    };

    var methods = {
        init : function( options ) {
            var state = {
                timer: null,
                timerSeconds: 10,
                callback: function () {},
                timerCurrent: 0,
                showPercentage: false,
                fill: false,
                color: '#337ab7'
            };

            state = $.extend(state, options);

            return this.each(function() {

                var $this = $(this);
                var data = $this.data('pietimer');
                if ( ! data ) {
                    $this.addClass('pietimer');
                    $this.css({fontSize: $this.width()});
                    $this.data('pietimer', state);
                    if (state.showPercentage) {
                        $this.find('.percent').show();
                    }
                    if (state.fill) {
                        $this.addClass('fill');
                    }
                    $this.pietimer('start');
                }
            });
        },

        stopWatch : function() {
            var data = $(this).data('pietimer');
            if ( data ) {
                var seconds = (data.timerFinish-(new Date().getTime()))/1000;
                if (seconds <= 0) {
                    clearInterval(data.timer);
                    $(this).pietimer('drawTimer', 100);
                    data.callback();
                } else {
                    var percent = 100-((seconds/(data.timerSeconds))*100);
                    $(this).pietimer('drawTimer', percent);
                }
            }
        },

        drawTimer : function (percent) {
            $this = $(this);
            var data = $this.data('pietimer');
            if (data) {
                $this.html('<div class="percent"></div><div class="slice'+(percent > 50?' gt50"':'"')+'><div class="pie"></div>'+(percent > 50?'<div class="pie fill"></div>':'')+'</div>');
                var deg = 360/100*percent;
                $this.find('.slice .pie').css({
                    '-moz-transform':'rotate('+deg+'deg)',
                    '-webkit-transform':'rotate('+deg+'deg)',
                    '-o-transform':'rotate('+deg+'deg)',
                    'transform':'rotate('+deg+'deg)'
                });
                $this.find('.percent').html(Math.round(percent)+'%');
                if (data.showPercentage) {
                    $this.find('.percent').show();
                }
                if ($this.hasClass('fill')) {
                    $this.find('.slice .pie').css({backgroundColor: data.color});
                }
                else {
                    $this.find('.slice .pie').css({borderColor: data.color});
                }
            }
        },
        
        start : function () {
            var data = $(this).data('pietimer');
            if (data) {
                data.timerFinish = new Date().getTime()+(data.timerSeconds*1000);
                $(this).pietimer('drawTimer', 0);
                data.timer = setInterval("$this.pietimer('stopWatch')", 50);
            }
        },

        reset : function () {
            var data = $(this).data('pietimer');
            if (data) {
                clearInterval(data.timer);
                $(this).pietimer('drawTimer', 0);
            }
        }

    };
})(jQuery);