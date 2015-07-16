////////////////////////////////////////////////////||
// ROB KANDEL  										||
// kandelrob@gmail.com								||
// 													||
// created 07.09.15	| updated 07.14.15				||
// app.js											||
// version 0.0.1									||
////////////////////////////////////////////////////||
var _septa = (function(){
	var _all_routes = [{value:"1",label: "1"}, {value:"2",label: "2"}, {value:"3",label: "3"}, {value:"4",label: "4"}, {value:"5",label: "5"}, {value:"6",label: "6"}, {value:"7",label: "7"}, {value:"8",label: "8"}, {value:"9",label: "9"}, {value:"12",label: "12"}, {value:"14",label: "14"}, {value:"17",label: "17"}, {value:"18",label: "18"}, {value:"19",label: "19"}, {value:"20",label: "20"}, {value:"21",label: "21"}, {value:"22",label: "22"}, {value:"23",label: "23"}, {value:"24",label: "24"}, {value:"25",label: "25"}, {value:"26",label: "26"}, {value:"27",label: "27"}, {value:"28",label: "28"}, {value:"29",label: "29"}, {value:"30",label: "30"}, {value:"31",label: "31"}, {value:"32",label: "32"}, {value:"33",label: "33"}, {value:"35",label: "35"}, {value:"37",label: "37"}, {value:"38",label: "38"}, {value:"39",label: "39"}, {value:"40",label: "40"}, {value:"42",label: "42"}, {value:"43",label: "43"}, {value:"44",label: "44"}, {value:"46",label: "46"}, {value:"47",label: "47"}, {value:"48",label: "48"}, {value:"50",label: "50"}, {value:"52",label: "52"}, {value:"53",label: "53"}, {value:"54",label: "54"}, {value:"55",label: "55"}, {value:"56",label: "56"}, {value:"57",label: "57"}, {value:"58",label: "58"}, {value:"59",label: "59"}, {value:"60",label: "60"}, {value:"61",label: "61"}, {value:"62",label: "62"}, {value:"64",label: "64"}, {value:"65",label: "65"}, {value:"66",label: "66"}, {value:"67",label: "67"}, {value:"68",label: "68"}, {value:"70",label: "70"}, {value:"73",label: "73"}, {value:"75",label: "75"}, {value:"77",label: "77"}, {value:"78",label: "78"}, {value:"79",label: "79"}, {value:"80",label: "80"}, {value:"84",label: "84"}, {value:"88",label: "88"}, {value:"89",label: "89"}, {value:"C",label: "C"}, {value:"G",label: "G"}, {value:"HXH",label: "HXH"}, {value:"J",label: "J"}, {value:"K",label: "K"}, {value:"L",label: "L"}, {value:"R",label: "R"}, {value:"LUCY",label: "LUCY"}, {value:"90",label: "90"}, {value:"91",label: "91"}, {value:"92",label: "92"}, {value:"93",label: "93"}, {value:"94",label: "94"}, {value:"95",label: "95"}, {value:"96",label: "96"}, {value:"97",label: "97"}, {value:"98",label: "98"}, {value:"99",label: "99"}, {value:"103",label: "103"}, {value:"104",label: "104"}, {value:"105",label: "105"}, {value:"106",label: "106"}, {value:"107",label: "107"}, {value:"108",label: "108"}, {value:"109",label: "109"}, {value:"110",label: "110"}, {value:"111",label: "111"}, {value:"112",label: "112"}, {value:"113",label: "113"}, {value:"114",label: "114"}, {value:"115",label: "115"}, {value:"116",label: "116"}, {value:"117",label: "117"}, {value:"118",label: "118"}, {value:"119",label: "119"}, {value:"120",label: "120"}, {value:"123",label: "123"}, {value:"124",label: "124"}, {value:"125",label: "125"}, {value:"126",label: "126"}, {value:"127",label: "127"}, {value:"128",label: "128"}, {value:"129",label: "129"}, {value:"130",label: "130"}, {value:"131",label: "131"}, {value:"132",label: "132"}, {value:"133",label: "133"}, {value:"134",label: "134"}, {value:"139",label: "139"}, {value:"150",label: "150"}, {value:"201",label: "201"}, {value:"204",label: "204"}, {value:"205",label: "205"}, {value:"206",label: "206"}, {value:"310",label: "310"}, {value:"airport",label: "Airport"}, {value:"chestnut-h-east",label: "Chestnut Hill East"}, {value:"chestnut-h-west",label: "chestnut Hill West"}, {value:"doylestown",label: "Doylestown"}, {value:"elwyn",label: "Elwyn"}, {value:"fox-chase",label: "Fox Chase"}, {value:"malvern",label: "Malvern"}, {value:"marcus-hook",label: "Marcus Hook"}, {value:"norristown",label: "Norristown"}, {value:"paoli",label: "Paoli"}, {value:"temple-u",label: "Temple U"}, {value:"thorndale",label: "Thorndale"}, {value:"trenton",label: "Trenton"}, {value:"warminster",label: "Warminster"}, {value:"west-trenton",label: "West Trenton"}, {value:"wilmington",label: "Wilmington"}, {value:"10",label: "10"}, {value:"11",label: "11"}, {value:"13",label: "13"}, {value:"15",label: "15"}, {value:"34",label: "34"}, {value:"36",label: "36"}, {value:"101",label: "101"}, {value:"102",label: "102"}],
	_bus_routes = ["1","2","3","4","5","6","7","8","9","12","14","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","35","37","38","39","40","42","43","44","46","47","48","50","52","53","54","55","56","57","58","59","60","61","62","64","65","66","67","68","70","73","75","77","78","79","80","84","88","89","C","G","HXH","J","K","L","R","LUCY","90","91","92","93","94","95","96","97","98","99","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117","118","119","120","123","124","125","126","127","128","129","130","131","132","133","134","139","150","201","204","205","206","310"],
	_rail_routes = ["airport","chestnut-h-east","chestnut-h-west","doylestown","elwyn","fox-chase","malvern","marcus-hook","norristown","paoli","temple-u","thorndale","trenton","warminster","west-trenton","wilmington"],
	_trolley_routes = ["10","11","13","15","34","36","101","102"],
	_all_stops = [],
	_map, _marker_list=[],_stops_layer, _nw_layer, _se_layer, _bus_layer, _train_layer, _timer, _legend = '', _geocode_source = false, _current_route = null, _reset_pan = false;
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
					if (_current_route != null) {
						jQuery(this).removeClass('menuWrapperActive');
						jQuery('.preloaderWrapper').hide();
						jQuery('.searchWrapper').hide();
					}
				} else {
					jQuery(this).addClass('menuWrapperActive');
					jQuery('.preloaderWrapper').hide();
					jQuery('.searchWrapper').show();
				}
			});
			if (method.url_anchor('route') == '') {
				jQuery('.preloaderWrapper').hide();
				jQuery('.searchWrapper').show();
			} else {
				jQuery('#route_name').val(method.url_anchor('route'));
				_reset_pan = true;
				method.get_data.find_route_type(jQuery('#route_name').val(), false);
			}
			method.pick_location();
			method.map.start_map();
		},
		url_parameter: function(search){
			var _page_url = decodeURI(window.location.search.substring(1));
			var _url_variables = _page_url.split('&');
			for (var i = 0; i < _url_variables.length; i++) {
				if (search == _url_variables[i].split('=')[0]) {
					return _url_variables[i].split('=')[1]
				}
			}
			return ''
		},
		url_anchor: function(search){
			var _url = window.location.href;
			var _anchor = _url.indexOf("#");
			return _anchor != -1 ? _url.substring(_anchor+1).split(search+'=')[1] : "";		
		},
		update_anchor_tag: function(current_route){
			var _url = window.location.href;
			var _anchor = _url.indexOf("#");
			window.location.hash = (current_route != null) ? ('#route='+ current_route) : '';
		},
		pick_location: function(){
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
				source: _all_routes,
				minLength: 0,
				focus: function( event, ui ) {
        			jQuery('#route_name').val( ui.item.label );
        			return false;
      			},
      			select: function( event, ui ) {
        			jQuery('#route_name').val( ui.item.value );
        			jQuery('#route_search').find('button').prop('disabled', false);
        			jQuery('#route_search').click();
        			return false;
      			}
			}).on('input', function() {
				(jQuery('#route_name').val().length >= 1) ? jQuery('#route_search').find('button').prop('disabled', false) : jQuery('#route_search').find('button').prop('disabled', true);
			}).on('keydown', function(e){
				if (e.keyCode == 13) {
					if(jQuery('#route_name').val().length >= 1 && jQuery('#route_name').val() != _current_route){
						jQuery('#route_search').click()
					}
				}
			}).focus(function(){            
            	jQuery(this).trigger('keydown.autocomplete');
        	});
			jQuery('#route_search').on('click', function(){
				_reset_pan = true;
				method.get_data.find_route_type(jQuery('#route_name').val(), true);
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
				jQuery('#menu_wrapper').removeClass('menuWrapperActive');
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
				if(jQuery('#geocode_input').val().length >= 1){
					method.geocode.google(jQuery('#geocode_input').val())
				}
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
					_map.options.maxZoom = 19;
				} else if (type == 'train'){
					_map.options.maxZoom = 13;
				}
				setTimeout(function() {
					if (_marker_list.length > 0) {
						if (_reset_pan) {
							_map.panTo(_map.fitBounds(_fullBounds).getCenter())
							_reset_pan = false
						}
					} else {
						alert('Sorry, no results found');
						jQuery('.preloaderWrapper').hide();
						jQuery('.searchWrapper').show();
					}
					jQuery('.ui-autocomplete').hide();
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
					_map.removeControl(_legend);
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
				if (typeof(_legend) == 'object') {
					_map.removeControl(_legend);
				}
				_legend = L.control({position: 'topleft'});
				_legend.onAdd = function (_map) {
    				var div = L.DomUtil.create('div', 'info legend arrivalLegend');
        			div.innerHTML += '<div class="arrivalLegendWrapper"><div class="arrivalLegendBTN buttonItem transitionAll"><span><i class="fa fa-calendar"></i></span></div><div class="arrivalInfoWrapper transitionAll"><div class="arrivalTitle transitionAll">Arrival Schedule</div><form class="form-inline"><div class="form-group"><input type="text" class="form-control" id="next_arrival_start" placeholder="Origin"></div><div class="form-group"><input type="text" class="form-control" id="next_arrival_end" placeholder="Destination"></div><button id="arrival_search" class="btn btn-primary transitionAll" type="button">Search</button></form><div class="arrivalTableWrapper"><div class="spinnerWrapper"></div><table class="table arrivalTable"></table></div></div></div>';
    				return div;
				};
				_legend.addTo(_map);
				jQuery('.arrivalLegendBTN').unbind('click');
				jQuery('.arrivalLegendBTN').on('click', function(){
					method.map.train_schedule();
				});
				jQuery('#arrival_search').unbind('click').prop('disabled', true);
				jQuery('#arrival_search').on('click', function(){
					if (jQuery('#next_arrival_start').val() != '' && jQuery('#next_arrival_end').val() != '') {
						method.get_data.arrival_times(jQuery('#next_arrival_start').val(), jQuery('#next_arrival_end').val());
					} else {
						(jQuery('#next_arrival_start').val() != '') ? alert('Enter Origin') : alert('Enter Destination');
					}
				});
				jQuery('#next_arrival_end').unbind();
				jQuery('#next_arrival_end').on('input', function(){
					if (jQuery(this).val().length > 0) {
						jQuery('#arrival_search').prop('disabled', false);
					}
				}).on('keydown', function(e){
					if (e.keyCode == 13) {
						jQuery('#arrival_search').click();
					}
				});
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
				_map.options.maxZoom = 19;
				_nw_layer.addTo(_map);
				setTimeout(function() {_map.panTo(_map.fitBounds(_fullBounds).getCenter())}, 100);
				jQuery('.preloaderWrapper').hide();
			},
			train_schedule: function(){
				if (jQuery('.arrivalInfoWrapper').hasClass('arrivalInfoWrapperActive')) {
					jQuery('.arrivalInfoWrapper').removeClass('arrivalInfoWrapperActive').slideUp();
				} else {
					jQuery('.arrivalInfoWrapper').addClass('arrivalInfoWrapperActive').slideDown();
				}
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
					if (typeof(_stops_layer) == 'object') {
						method.map.remove_layer(_stops_layer);
					}
					if (typeof(_legend) == 'object') {
						_map.removeControl(_legend);
					}
					_all_stops = [];
					_marker_list=[]
					_current_route = '';
					_legend = '';
					_reset_pan = true;
				}
			}
		},
		get_data: {
			find_route_type: function(val, bool){
				jQuery('.ui-autocomplete').hide();
				if (jQuery.inArray(val.toLowerCase(), _rail_routes) != -1) {
					method.map.clear_all();
					jQuery('#menu_wrapper').removeClass('menuWrapperActive');
					_current_route = val;
					_reset_pan = true;
					method.update_anchor_tag(_current_route);
					method.get_data.get_rail_line();
					method.get_data.get_rail_data();
				} else if (jQuery.inArray(val.toLowerCase(), _bus_routes) != -1 || jQuery.inArray(val.toLowerCase(), _trolley_routes) != -1){
					method.map.clear_all();
					jQuery('#menu_wrapper').removeClass('menuWrapperActive');
					_current_route = val;
					_reset_pan = true;
					method.update_anchor_tag(_current_route);
					method.get_data.get_bus_line(((jQuery.inArray(val.toLowerCase(), _bus_routes) != -1) ? 'bus' : 'trolley'));
					method.get_data.get_bus_data(((jQuery.inArray(val.toLowerCase(), _bus_routes) != -1) ? 'bus' : 'trolley'));
				} else {
					_reset_pan = false;
					if (bool) {
						alert("Sorry, that route doesn't exist");
						_current_route = null;
						method.update_anchor_tag(_current_route);
					} else {
						jQuery('.preloaderWrapper').hide();
						jQuery('.searchWrapper').show();
						method.update_anchor_tag(null);
					}
				}
			},
			get_bus_data: function(type) {
				jQuery('.preloaderWrapper').show();
				jQuery('.searchWrapper').hide();
				jQuery('#menu_wrapper').removeClass('menuWrapperActive');
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
						alert('Sorry, something went wrong');
						jQuery('.preloaderWrapper').hide();
						jQuery('.searchWrapper').show();
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
				jQuery('#menu_wrapper').removeClass('menuWrapperActive');
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
						jQuery('.preloaderWrapper').hide();
						jQuery('.searchWrapper').show();
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
				jQuery('#menu_wrapper').removeClass('menuWrapperActive');
				method.map.clear_all();
				method.update_anchor_tag(null);
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
			},
			arrival_times: function(origin, destination) {
				jQuery('.arrivalTableWrapper').show();
				jQuery('.arrivalTable').empty();
				jQuery.ajax({
					url: "http://www3.septa.org/hackathon/NextToArrive/?req1="+origin+"&req2="+destination+"&req3=5&callback=?",
					dataType: "json",
  					success: function(d){
  						jQuery('.spinnerWrapper').slideUp(150);
  						jQuery('.arrivalTable').slideDown(150);
  						if (d.length == 0){
  							jQuery('.arrivalTable').html('No Results Found');
  						} else {
  							jQuery('.arrivalTable').html('<tr><th>Line</th><th>Departure</th><th>Arrival</th><th>Late</th></tr>');
    						for (var i in d) {
    							jQuery('.arrivalTable').append('<tr><td>'+d[i].orig_line+'</td><td>'+d[i].orig_departure_time+'</td><td>'+d[i].orig_arrival_time+'</td><td><span class="badge badge-'+((d[i].orig_delay.toLowerCase() == 'on time') ? 'success' : 'danger')+'">'+((d[i].orig_delay.toLowerCase() == 'on time') ? '0 min' : d[i].orig_delay)+'</span></td></tr>');
    						}
    					}
  					},
					error: function() {
						jQuery('.spinnerWrapper').slideUp(150);
  						jQuery('.arrivalTable').slideDown(150);
						jQuery('.arrivalTable').html('No Results Found');
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
				jQuery('#menu_wrapper').removeClass('menuWrapperActive');
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