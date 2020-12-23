/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/gmaps/gmaps.js":
/*!*************************************!*\
  !*** ./node_modules/gmaps/gmaps.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

(function(root, factory) {
  if(true) {
    module.exports = factory();
  }
  else {}


}(this, function() {

/*!
 * GMaps.js v0.4.25
 * http://hpneo.github.com/gmaps/
 *
 * Copyright 2017, Gustavo Leon
 * Released under the MIT License.
 */

var extend_object = function(obj, new_obj) {
  var name;

  if (obj === new_obj) {
    return obj;
  }

  for (name in new_obj) {
    if (new_obj[name] !== undefined) {
      obj[name] = new_obj[name];
    }
  }

  return obj;
};

var replace_object = function(obj, replace) {
  var name;

  if (obj === replace) {
    return obj;
  }

  for (name in replace) {
    if (obj[name] != undefined) {
      obj[name] = replace[name];
    }
  }

  return obj;
};

var array_map = function(array, callback) {
  var original_callback_params = Array.prototype.slice.call(arguments, 2),
      array_return = [],
      array_length = array.length,
      i;

  if (Array.prototype.map && array.map === Array.prototype.map) {
    array_return = Array.prototype.map.call(array, function(item) {
      var callback_params = original_callback_params.slice(0);
      callback_params.splice(0, 0, item);

      return callback.apply(this, callback_params);
    });
  }
  else {
    for (i = 0; i < array_length; i++) {
      callback_params = original_callback_params;
      callback_params.splice(0, 0, array[i]);
      array_return.push(callback.apply(this, callback_params));
    }
  }

  return array_return;
};

var array_flat = function(array) {
  var new_array = [],
      i;

  for (i = 0; i < array.length; i++) {
    new_array = new_array.concat(array[i]);
  }

  return new_array;
};

var coordsToLatLngs = function(coords, useGeoJSON) {
  var first_coord = coords[0],
      second_coord = coords[1];

  if (useGeoJSON) {
    first_coord = coords[1];
    second_coord = coords[0];
  }

  return new google.maps.LatLng(first_coord, second_coord);
};

var arrayToLatLng = function(coords, useGeoJSON) {
  var i;

  for (i = 0; i < coords.length; i++) {
    if (!(coords[i] instanceof google.maps.LatLng)) {
      if (coords[i].length > 0 && typeof(coords[i][0]) === "object") {
        coords[i] = arrayToLatLng(coords[i], useGeoJSON);
      }
      else {
        coords[i] = coordsToLatLngs(coords[i], useGeoJSON);
      }
    }
  }

  return coords;
};

var getElementsByClassName = function (class_name, context) {
    var element,
        _class = class_name.replace('.', '');

    if ('jQuery' in this && context) {
        element = $("." + _class, context)[0];
    } else {
        element = document.getElementsByClassName(_class)[0];
    }
    return element;

};

var getElementById = function(id, context) {
  var element,
  id = id.replace('#', '');

  if ('jQuery' in window && context) {
    element = $('#' + id, context)[0];
  } else {
    element = document.getElementById(id);
  };

  return element;
};

var findAbsolutePosition = function(obj)  {
  var curleft = 0,
      curtop = 0;

  if (obj.getBoundingClientRect) {
      var rect = obj.getBoundingClientRect();
      var sx = -(window.scrollX ? window.scrollX : window.pageXOffset);
      var sy = -(window.scrollY ? window.scrollY : window.pageYOffset);

      return [(rect.left - sx), (rect.top - sy)];
  }

  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft;
      curtop += obj.offsetTop;
    } while (obj = obj.offsetParent);
  }

  return [curleft, curtop];
};

var GMaps = (function(global) {
  "use strict";

  var doc = document;
  /**
   * Creates a new GMaps instance, including a Google Maps map.
   * @class GMaps
   * @constructs
   * @param {object} options - `options` accepts all the [MapOptions](https://developers.google.com/maps/documentation/javascript/reference#MapOptions) and [events](https://developers.google.com/maps/documentation/javascript/reference#Map) listed in the Google Maps API. Also accepts:
   * * `lat` (number): Latitude of the map's center
   * * `lng` (number): Longitude of the map's center
   * * `el` (string or HTMLElement): container where the map will be rendered
   * * `markerClusterer` (function): A function to create a marker cluster. You can use MarkerClusterer or MarkerClustererPlus.
   */
  var GMaps = function(options) {

    if (!(typeof window.google === 'object' && window.google.maps)) {
      if (typeof window.console === 'object' && window.console.error) {
        console.error('Google Maps API is required. Please register the following JavaScript library https://maps.googleapis.com/maps/api/js.');
      }

      return function() {};
    }

    if (!this) return new GMaps(options);

    options.zoom = options.zoom || 15;
    options.mapType = options.mapType || 'roadmap';

    var valueOrDefault = function(value, defaultValue) {
      return value === undefined ? defaultValue : value;
    };

    var self = this,
        i,
        events_that_hide_context_menu = [
          'bounds_changed', 'center_changed', 'click', 'dblclick', 'drag',
          'dragend', 'dragstart', 'idle', 'maptypeid_changed', 'projection_changed',
          'resize', 'tilesloaded', 'zoom_changed'
        ],
        events_that_doesnt_hide_context_menu = ['mousemove', 'mouseout', 'mouseover'],
        options_to_be_deleted = ['el', 'lat', 'lng', 'mapType', 'width', 'height', 'markerClusterer', 'enableNewStyle'],
        identifier = options.el || options.div,
        markerClustererFunction = options.markerClusterer,
        mapType = google.maps.MapTypeId[options.mapType.toUpperCase()],
        map_center = new google.maps.LatLng(options.lat, options.lng),
        zoomControl = valueOrDefault(options.zoomControl, true),
        zoomControlOpt = options.zoomControlOpt || {
          style: 'DEFAULT',
          position: 'TOP_LEFT'
        },
        zoomControlStyle = zoomControlOpt.style || 'DEFAULT',
        zoomControlPosition = zoomControlOpt.position || 'TOP_LEFT',
        panControl = valueOrDefault(options.panControl, true),
        mapTypeControl = valueOrDefault(options.mapTypeControl, true),
        scaleControl = valueOrDefault(options.scaleControl, true),
        streetViewControl = valueOrDefault(options.streetViewControl, true),
        overviewMapControl = valueOrDefault(overviewMapControl, true),
        map_options = {},
        map_base_options = {
          zoom: this.zoom,
          center: map_center,
          mapTypeId: mapType
        },
        map_controls_options = {
          panControl: panControl,
          zoomControl: zoomControl,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle[zoomControlStyle],
            position: google.maps.ControlPosition[zoomControlPosition]
          },
          mapTypeControl: mapTypeControl,
          scaleControl: scaleControl,
          streetViewControl: streetViewControl,
          overviewMapControl: overviewMapControl
        };

      if (typeof(options.el) === 'string' || typeof(options.div) === 'string') {
        if (identifier.indexOf("#") > -1) {
            /**
             * Container element
             *
             * @type {HTMLElement}
             */
            this.el = getElementById(identifier, options.context);
        } else {
            this.el = getElementsByClassName.apply(this, [identifier, options.context]);
        }
      } else {
          this.el = identifier;
      }

    if (typeof(this.el) === 'undefined' || this.el === null) {
      throw 'No element defined.';
    }

    window.context_menu = window.context_menu || {};
    window.context_menu[self.el.id] = {};

    /**
     * Collection of custom controls in the map UI
     *
     * @type {array}
     */
    this.controls = [];
    /**
     * Collection of map's overlays
     *
     * @type {array}
     */
    this.overlays = [];
    /**
     * Collection of KML/GeoRSS and FusionTable layers
     *
     * @type {array}
     */
    this.layers = [];
    /**
     * Collection of data layers (See {@link GMaps#addLayer})
     *
     * @type {object}
     */
    this.singleLayers = {};
    /**
     * Collection of map's markers
     *
     * @type {array}
     */
    this.markers = [];
    /**
     * Collection of map's lines
     *
     * @type {array}
     */
    this.polylines = [];
    /**
     * Collection of map's routes requested by {@link GMaps#getRoutes}, {@link GMaps#renderRoute}, {@link GMaps#drawRoute}, {@link GMaps#travelRoute} or {@link GMaps#drawSteppedRoute}
     *
     * @type {array}
     */
    this.routes = [];
    /**
     * Collection of map's polygons
     *
     * @type {array}
     */
    this.polygons = [];
    this.infoWindow = null;
    this.overlay_el = null;
    /**
     * Current map's zoom
     *
     * @type {number}
     */
    this.zoom = options.zoom;
    this.registered_events = {};

    this.el.style.width = options.width || this.el.scrollWidth || this.el.offsetWidth;
    this.el.style.height = options.height || this.el.scrollHeight || this.el.offsetHeight;

    google.maps.visualRefresh = options.enableNewStyle;

    for (i = 0; i < options_to_be_deleted.length; i++) {
      delete options[options_to_be_deleted[i]];
    }

    if(options.disableDefaultUI != true) {
      map_base_options = extend_object(map_base_options, map_controls_options);
    }

    map_options = extend_object(map_base_options, options);

    for (i = 0; i < events_that_hide_context_menu.length; i++) {
      delete map_options[events_that_hide_context_menu[i]];
    }

    for (i = 0; i < events_that_doesnt_hide_context_menu.length; i++) {
      delete map_options[events_that_doesnt_hide_context_menu[i]];
    }

    /**
     * Google Maps map instance
     *
     * @type {google.maps.Map}
     */
    this.map = new google.maps.Map(this.el, map_options);

    if (markerClustererFunction) {
      /**
       * Marker Clusterer instance
       *
       * @type {object}
       */
      this.markerClusterer = markerClustererFunction.apply(this, [this.map]);
    }

    var buildContextMenuHTML = function(control, e) {
      var html = '',
          options = window.context_menu[self.el.id][control];

      for (var i in options){
        if (options.hasOwnProperty(i)) {
          var option = options[i];

          html += '<li><a id="' + control + '_' + i + '" href="#">' + option.title + '</a></li>';
        }
      }

      if (!getElementById('gmaps_context_menu')) return;

      var context_menu_element = getElementById('gmaps_context_menu');

      context_menu_element.innerHTML = html;

      var context_menu_items = context_menu_element.getElementsByTagName('a'),
          context_menu_items_count = context_menu_items.length,
          i;

      for (i = 0; i < context_menu_items_count; i++) {
        var context_menu_item = context_menu_items[i];

        var assign_menu_item_action = function(ev){
          ev.preventDefault();

          options[this.id.replace(control + '_', '')].action.apply(self, [e]);
          self.hideContextMenu();
        };

        google.maps.event.clearListeners(context_menu_item, 'click');
        google.maps.event.addDomListenerOnce(context_menu_item, 'click', assign_menu_item_action, false);
      }

      var position = findAbsolutePosition.apply(this, [self.el]),
          left = position[0] + e.pixel.x - 15,
          top = position[1] + e.pixel.y- 15;

      context_menu_element.style.left = left + "px";
      context_menu_element.style.top = top + "px";

      // context_menu_element.style.display = 'block';
    };

    this.buildContextMenu = function(control, e) {
      if (control === 'marker') {
        e.pixel = {};

        var overlay = new google.maps.OverlayView();
        overlay.setMap(self.map);

        overlay.draw = function() {
          var projection = overlay.getProjection(),
              position = e.marker.getPosition();

          e.pixel = projection.fromLatLngToContainerPixel(position);

          buildContextMenuHTML(control, e);
        };
      }
      else {
        buildContextMenuHTML(control, e);
      }

      var context_menu_element = getElementById('gmaps_context_menu');

      setTimeout(function() {
        context_menu_element.style.display = 'block';
      }, 0);
    };

    /**
     * Add a context menu for a map or a marker.
     *
     * @param {object} options - The `options` object should contain:
     * * `control` (string): Kind of control the context menu will be attached. Can be "map" or "marker".
     * * `options` (array): A collection of context menu items:
     *   * `title` (string): Item's title shown in the context menu.
     *   * `name` (string): Item's identifier.
     *   * `action` (function): Function triggered after selecting the context menu item.
     */
    this.setContextMenu = function(options) {
      window.context_menu[self.el.id][options.control] = {};

      var i,
          ul = doc.createElement('ul');

      for (i in options.options) {
        if (options.options.hasOwnProperty(i)) {
          var option = options.options[i];

          window.context_menu[self.el.id][options.control][option.name] = {
            title: option.title,
            action: option.action
          };
        }
      }

      ul.id = 'gmaps_context_menu';
      ul.style.display = 'none';
      ul.style.position = 'absolute';
      ul.style.minWidth = '100px';
      ul.style.background = 'white';
      ul.style.listStyle = 'none';
      ul.style.padding = '8px';
      ul.style.boxShadow = '2px 2px 6px #ccc';

      if (!getElementById('gmaps_context_menu')) {
        doc.body.appendChild(ul);
      }

      var context_menu_element = getElementById('gmaps_context_menu');

      google.maps.event.addDomListener(context_menu_element, 'mouseout', function(ev) {
        if (!ev.relatedTarget || !this.contains(ev.relatedTarget)) {
          window.setTimeout(function(){
            context_menu_element.style.display = 'none';
          }, 400);
        }
      }, false);
    };

    /**
     * Hide the current context menu
     */
    this.hideContextMenu = function() {
      var context_menu_element = getElementById('gmaps_context_menu');

      if (context_menu_element) {
        context_menu_element.style.display = 'none';
      }
    };

    var setupListener = function(object, name) {
      google.maps.event.addListener(object, name, function(e){
        if (e == undefined) {
          e = this;
        }

        options[name].apply(this, [e]);

        self.hideContextMenu();
      });
    };

    //google.maps.event.addListener(this.map, 'idle', this.hideContextMenu);
    google.maps.event.addListener(this.map, 'zoom_changed', this.hideContextMenu);

    for (var ev = 0; ev < events_that_hide_context_menu.length; ev++) {
      var name = events_that_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    for (var ev = 0; ev < events_that_doesnt_hide_context_menu.length; ev++) {
      var name = events_that_doesnt_hide_context_menu[ev];

      if (name in options) {
        setupListener(this.map, name);
      }
    }

    google.maps.event.addListener(this.map, 'rightclick', function(e) {
      if (options.rightclick) {
        options.rightclick.apply(this, [e]);
      }

      if(window.context_menu[self.el.id]['map'] != undefined) {
        self.buildContextMenu('map', e);
      }
    });

    /**
     * Trigger a `resize` event, useful if you need to repaint the current map (for changes in the viewport or display / hide actions).
     */
    this.refresh = function() {
      google.maps.event.trigger(this.map, 'resize');
    };

    /**
     * Adjust the map zoom to include all the markers added in the map.
     */
    this.fitZoom = function() {
      var latLngs = [],
          markers_length = this.markers.length,
          i;

      for (i = 0; i < markers_length; i++) {
        if(typeof(this.markers[i].visible) === 'boolean' && this.markers[i].visible) {
          latLngs.push(this.markers[i].getPosition());
        }
      }

      this.fitLatLngBounds(latLngs);
    };

    /**
     * Adjust the map zoom to include all the coordinates in the `latLngs` array.
     *
     * @param {array} latLngs - Collection of `google.maps.LatLng` objects.
     */
    this.fitLatLngBounds = function(latLngs) {
      var total = latLngs.length,
          bounds = new google.maps.LatLngBounds(),
          i;

      for(i = 0; i < total; i++) {
        bounds.extend(latLngs[i]);
      }

      this.map.fitBounds(bounds);
    };

    /**
     * Center the map using the `lat` and `lng` coordinates.
     *
     * @param {number} lat - Latitude of the coordinate.
     * @param {number} lng - Longitude of the coordinate.
     * @param {function} [callback] - Callback that will be executed after the map is centered.
     */
    this.setCenter = function(lat, lng, callback) {
      this.map.panTo(new google.maps.LatLng(lat, lng));

      if (callback) {
        callback();
      }
    };

    /**
     * Return the HTML element container of the map.
     *
     * @returns {HTMLElement} the element container.
     */
    this.getElement = function() {
      return this.el;
    };

    /**
     * Increase the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed in.
     */
    this.zoomIn = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() + value;
      this.map.setZoom(this.zoom);
    };

    /**
     * Decrease the map's zoom.
     *
     * @param {number} [magnitude] - The number of times the map will be zoomed out.
     */
    this.zoomOut = function(value) {
      value = value || 1;

      this.zoom = this.map.getZoom() - value;
      this.map.setZoom(this.zoom);
    };

    var native_methods = [],
        method;

    for (method in this.map) {
      if (typeof(this.map[method]) == 'function' && !this[method]) {
        native_methods.push(method);
      }
    }

    for (i = 0; i < native_methods.length; i++) {
      (function(gmaps, scope, method_name) {
        gmaps[method_name] = function(){
          return scope[method_name].apply(scope, arguments);
        };
      })(this, this.map, native_methods[i]);
    }
  };

  return GMaps;
})(this);

GMaps.prototype.createControl = function(options) {
  var control = document.createElement('div');

  control.style.cursor = 'pointer';

  if (options.disableDefaultStyles !== true) {
    control.style.fontFamily = 'Roboto, Arial, sans-serif';
    control.style.fontSize = '11px';
    control.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
  }

  for (var option in options.style) {
    control.style[option] = options.style[option];
  }

  if (options.id) {
    control.id = options.id;
  }

  if (options.title) {
    control.title = options.title;
  }

  if (options.classes) {
    control.className = options.classes;
  }

  if (options.content) {
    if (typeof options.content === 'string') {
      control.innerHTML = options.content;
    }
    else if (options.content instanceof HTMLElement) {
      control.appendChild(options.content);
    }
  }

  if (options.position) {
    control.position = google.maps.ControlPosition[options.position.toUpperCase()];
  }

  for (var ev in options.events) {
    (function(object, name) {
      google.maps.event.addDomListener(object, name, function(){
        options.events[name].apply(this, [this]);
      });
    })(control, ev);
  }

  control.index = 1;

  return control;
};

/**
 * Add a custom control to the map UI.
 *
 * @param {object} options - The `options` object should contain:
 * * `style` (object): The keys and values of this object should be valid CSS properties and values.
 * * `id` (string): The HTML id for the custom control.
 * * `classes` (string): A string containing all the HTML classes for the custom control.
 * * `content` (string or HTML element): The content of the custom control.
 * * `position` (string): Any valid [`google.maps.ControlPosition`](https://developers.google.com/maps/documentation/javascript/controls#ControlPositioning) value, in lower or upper case.
 * * `events` (object): The keys of this object should be valid DOM events. The values should be functions.
 * * `disableDefaultStyles` (boolean): If false, removes the default styles for the controls like font (family and size), and box shadow.
 * @returns {HTMLElement}
 */
GMaps.prototype.addControl = function(options) {
  var control = this.createControl(options);

  this.controls.push(control);
  this.map.controls[control.position].push(control);

  return control;
};

/**
 * Remove a control from the map. `control` should be a control returned by `addControl()`.
 *
 * @param {HTMLElement} control - One of the controls returned by `addControl()`.
 * @returns {HTMLElement} the removed control.
 */
GMaps.prototype.removeControl = function(control) {
  var position = null,
      i;

  for (i = 0; i < this.controls.length; i++) {
    if (this.controls[i] == control) {
      position = this.controls[i].position;
      this.controls.splice(i, 1);
    }
  }

  if (position) {
    for (i = 0; i < this.map.controls.length; i++) {
      var controlsForPosition = this.map.controls[control.position];

      if (controlsForPosition.getAt(i) == control) {
        controlsForPosition.removeAt(i);

        break;
      }
    }
  }

  return control;
};

GMaps.prototype.createMarker = function(options) {
  if (options.lat == undefined && options.lng == undefined && options.position == undefined) {
    throw 'No latitude or longitude defined.';
  }

  var self = this,
      details = options.details,
      fences = options.fences,
      outside = options.outside,
      base_options = {
        position: new google.maps.LatLng(options.lat, options.lng),
        map: null
      },
      marker_options = extend_object(base_options, options);

  delete marker_options.lat;
  delete marker_options.lng;
  delete marker_options.fences;
  delete marker_options.outside;

  var marker = new google.maps.Marker(marker_options);

  marker.fences = fences;

  if (options.infoWindow) {
    marker.infoWindow = new google.maps.InfoWindow(options.infoWindow);

    var info_window_events = ['closeclick', 'content_changed', 'domready', 'position_changed', 'zindex_changed'];

    for (var ev = 0; ev < info_window_events.length; ev++) {
      (function(object, name) {
        if (options.infoWindow[name]) {
          google.maps.event.addListener(object, name, function(e){
            options.infoWindow[name].apply(this, [e]);
          });
        }
      })(marker.infoWindow, info_window_events[ev]);
    }
  }

  var marker_events = ['animation_changed', 'clickable_changed', 'cursor_changed', 'draggable_changed', 'flat_changed', 'icon_changed', 'position_changed', 'shadow_changed', 'shape_changed', 'title_changed', 'visible_changed', 'zindex_changed'];

  var marker_events_with_mouse = ['dblclick', 'drag', 'dragend', 'dragstart', 'mousedown', 'mouseout', 'mouseover', 'mouseup'];

  for (var ev = 0; ev < marker_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this, [this]);
        });
      }
    })(marker, marker_events[ev]);
  }

  for (var ev = 0; ev < marker_events_with_mouse.length; ev++) {
    (function(map, object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(me){
          if(!me.pixel){
            me.pixel = map.getProjection().fromLatLngToPoint(me.latLng)
          }

          options[name].apply(this, [me]);
        });
      }
    })(this.map, marker, marker_events_with_mouse[ev]);
  }

  google.maps.event.addListener(marker, 'click', function() {
    this.details = details;

    if (options.click) {
      options.click.apply(this, [this]);
    }

    if (marker.infoWindow) {
      self.hideInfoWindows();
      marker.infoWindow.open(self.map, marker);
    }
  });

  google.maps.event.addListener(marker, 'rightclick', function(e) {
    e.marker = this;

    if (options.rightclick) {
      options.rightclick.apply(this, [e]);
    }

    if (window.context_menu[self.el.id]['marker'] != undefined) {
      self.buildContextMenu('marker', e);
    }
  });

  if (marker.fences) {
    google.maps.event.addListener(marker, 'dragend', function() {
      self.checkMarkerGeofence(marker, function(m, f) {
        outside(m, f);
      });
    });
  }

  return marker;
};

GMaps.prototype.addMarker = function(options) {
  var marker;
  if(options.hasOwnProperty('gm_accessors_')) {
    // Native google.maps.Marker object
    marker = options;
  }
  else {
    if ((options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) || options.position) {
      marker = this.createMarker(options);
    }
    else {
      throw 'No latitude or longitude defined.';
    }
  }

  marker.setMap(this.map);

  if(this.markerClusterer) {
    this.markerClusterer.addMarker(marker);
  }

  this.markers.push(marker);

  GMaps.fire('marker_added', marker, this);

  return marker;
};

GMaps.prototype.addMarkers = function(array) {
  for (var i = 0, marker; marker=array[i]; i++) {
    this.addMarker(marker);
  }

  return this.markers;
};

GMaps.prototype.hideInfoWindows = function() {
  for (var i = 0, marker; marker = this.markers[i]; i++){
    if (marker.infoWindow) {
      marker.infoWindow.close();
    }
  }
};

GMaps.prototype.removeMarker = function(marker) {
  for (var i = 0; i < this.markers.length; i++) {
    if (this.markers[i] === marker) {
      this.markers[i].setMap(null);
      this.markers.splice(i, 1);

      if(this.markerClusterer) {
        this.markerClusterer.removeMarker(marker);
      }

      GMaps.fire('marker_removed', marker, this);

      break;
    }
  }

  return marker;
};

GMaps.prototype.removeMarkers = function (collection) {
  var new_markers = [];

  if (typeof collection == 'undefined') {
    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      marker.setMap(null);

      GMaps.fire('marker_removed', marker, this);
    }

    if(this.markerClusterer && this.markerClusterer.clearMarkers) {
      this.markerClusterer.clearMarkers();
    }

    this.markers = new_markers;
  }
  else {
    for (var i = 0; i < collection.length; i++) {
      var index = this.markers.indexOf(collection[i]);

      if (index > -1) {
        var marker = this.markers[index];
        marker.setMap(null);

        if(this.markerClusterer) {
          this.markerClusterer.removeMarker(marker);
        }

        GMaps.fire('marker_removed', marker, this);
      }
    }

    for (var i = 0; i < this.markers.length; i++) {
      var marker = this.markers[i];
      if (marker.getMap() != null) {
        new_markers.push(marker);
      }
    }

    this.markers = new_markers;
  }
};

GMaps.prototype.drawOverlay = function(options) {
  var overlay = new google.maps.OverlayView(),
      auto_show = true;

  overlay.setMap(this.map);

  if (options.auto_show != null) {
    auto_show = options.auto_show;
  }

  overlay.onAdd = function() {
    var el = document.createElement('div');

    el.style.borderStyle = "none";
    el.style.borderWidth = "0px";
    el.style.position = "absolute";
    el.style.zIndex = 100;
    el.innerHTML = options.content;

    overlay.el = el;

    if (!options.layer) {
      options.layer = 'overlayLayer';
    }
    
    var panes = this.getPanes(),
        overlayLayer = panes[options.layer],
        stop_overlay_events = ['contextmenu', 'DOMMouseScroll', 'dblclick', 'mousedown'];

    overlayLayer.appendChild(el);

    for (var ev = 0; ev < stop_overlay_events.length; ev++) {
      (function(object, name) {
        google.maps.event.addDomListener(object, name, function(e){
          if (navigator.userAgent.toLowerCase().indexOf('msie') != -1 && document.all) {
            e.cancelBubble = true;
            e.returnValue = false;
          }
          else {
            e.stopPropagation();
          }
        });
      })(el, stop_overlay_events[ev]);
    }

    if (options.click) {
      panes.overlayMouseTarget.appendChild(overlay.el);
      google.maps.event.addDomListener(overlay.el, 'click', function() {
        options.click.apply(overlay, [overlay]);
      });
    }

    google.maps.event.trigger(this, 'ready');
  };

  overlay.draw = function() {
    var projection = this.getProjection(),
        pixel = projection.fromLatLngToDivPixel(new google.maps.LatLng(options.lat, options.lng));

    options.horizontalOffset = options.horizontalOffset || 0;
    options.verticalOffset = options.verticalOffset || 0;

    var el = overlay.el,
        content = el.children[0],
        content_height = content.clientHeight,
        content_width = content.clientWidth;

    switch (options.verticalAlign) {
      case 'top':
        el.style.top = (pixel.y - content_height + options.verticalOffset) + 'px';
        break;
      default:
      case 'middle':
        el.style.top = (pixel.y - (content_height / 2) + options.verticalOffset) + 'px';
        break;
      case 'bottom':
        el.style.top = (pixel.y + options.verticalOffset) + 'px';
        break;
    }

    switch (options.horizontalAlign) {
      case 'left':
        el.style.left = (pixel.x - content_width + options.horizontalOffset) + 'px';
        break;
      default:
      case 'center':
        el.style.left = (pixel.x - (content_width / 2) + options.horizontalOffset) + 'px';
        break;
      case 'right':
        el.style.left = (pixel.x + options.horizontalOffset) + 'px';
        break;
    }

    el.style.display = auto_show ? 'block' : 'none';

    if (!auto_show) {
      options.show.apply(this, [el]);
    }
  };

  overlay.onRemove = function() {
    var el = overlay.el;

    if (options.remove) {
      options.remove.apply(this, [el]);
    }
    else {
      overlay.el.parentNode.removeChild(overlay.el);
      overlay.el = null;
    }
  };

  this.overlays.push(overlay);
  return overlay;
};

GMaps.prototype.removeOverlay = function(overlay) {
  for (var i = 0; i < this.overlays.length; i++) {
    if (this.overlays[i] === overlay) {
      this.overlays[i].setMap(null);
      this.overlays.splice(i, 1);

      break;
    }
  }
};

GMaps.prototype.removeOverlays = function() {
  for (var i = 0, item; item = this.overlays[i]; i++) {
    item.setMap(null);
  }

  this.overlays = [];
};

GMaps.prototype.drawPolyline = function(options) {
  var path = [],
      points = options.path;

  if (points.length) {
    if (points[0][0] === undefined) {
      path = points;
    }
    else {
      for (var i = 0, latlng; latlng = points[i]; i++) {
        path.push(new google.maps.LatLng(latlng[0], latlng[1]));
      }
    }
  }

  var polyline_options = {
    map: this.map,
    path: path,
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight,
    geodesic: options.geodesic,
    clickable: true,
    editable: false,
    visible: true
  };

  if (options.hasOwnProperty("clickable")) {
    polyline_options.clickable = options.clickable;
  }

  if (options.hasOwnProperty("editable")) {
    polyline_options.editable = options.editable;
  }

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  if (options.hasOwnProperty("zIndex")) {
    polyline_options.zIndex = options.zIndex;
  }

  var polyline = new google.maps.Polyline(polyline_options);

  var polyline_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polyline_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polyline, polyline_events[ev]);
  }

  this.polylines.push(polyline);

  GMaps.fire('polyline_added', polyline, this);

  return polyline;
};

GMaps.prototype.removePolyline = function(polyline) {
  for (var i = 0; i < this.polylines.length; i++) {
    if (this.polylines[i] === polyline) {
      this.polylines[i].setMap(null);
      this.polylines.splice(i, 1);

      GMaps.fire('polyline_removed', polyline, this);

      break;
    }
  }
};

GMaps.prototype.removePolylines = function() {
  for (var i = 0, item; item = this.polylines[i]; i++) {
    item.setMap(null);
  }

  this.polylines = [];
};

GMaps.prototype.drawCircle = function(options) {
  options =  extend_object({
    map: this.map,
    center: new google.maps.LatLng(options.lat, options.lng)
  }, options);

  delete options.lat;
  delete options.lng;

  var polygon = new google.maps.Circle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawRectangle = function(options) {
  options = extend_object({
    map: this.map
  }, options);

  var latLngBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(options.bounds[0][0], options.bounds[0][1]),
    new google.maps.LatLng(options.bounds[1][0], options.bounds[1][1])
  );

  options.bounds = latLngBounds;

  var polygon = new google.maps.Rectangle(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  return polygon;
};

GMaps.prototype.drawPolygon = function(options) {
  var useGeoJSON = false;

  if(options.hasOwnProperty("useGeoJSON")) {
    useGeoJSON = options.useGeoJSON;
  }

  delete options.useGeoJSON;

  options = extend_object({
    map: this.map
  }, options);

  if (useGeoJSON == false) {
    options.paths = [options.paths.slice(0)];
  }

  if (options.paths.length > 0) {
    if (options.paths[0].length > 0) {
      options.paths = array_flat(array_map(options.paths, arrayToLatLng, useGeoJSON));
    }
  }

  var polygon = new google.maps.Polygon(options),
      polygon_events = ['click', 'dblclick', 'mousedown', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'rightclick'];

  for (var ev = 0; ev < polygon_events.length; ev++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(e){
          options[name].apply(this, [e]);
        });
      }
    })(polygon, polygon_events[ev]);
  }

  this.polygons.push(polygon);

  GMaps.fire('polygon_added', polygon, this);

  return polygon;
};

GMaps.prototype.removePolygon = function(polygon) {
  for (var i = 0; i < this.polygons.length; i++) {
    if (this.polygons[i] === polygon) {
      this.polygons[i].setMap(null);
      this.polygons.splice(i, 1);

      GMaps.fire('polygon_removed', polygon, this);

      break;
    }
  }
};

GMaps.prototype.removePolygons = function() {
  for (var i = 0, item; item = this.polygons[i]; i++) {
    item.setMap(null);
  }

  this.polygons = [];
};

GMaps.prototype.getFromFusionTables = function(options) {
  var events = options.events;

  delete options.events;

  var fusion_tables_options = options,
      layer = new google.maps.FusionTablesLayer(fusion_tables_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromFusionTables = function(options) {
  var layer = this.getFromFusionTables(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.getFromKML = function(options) {
  var url = options.url,
      events = options.events;

  delete options.url;
  delete options.events;

  var kml_options = options,
      layer = new google.maps.KmlLayer(url, kml_options);

  for (var ev in events) {
    (function(object, name) {
      google.maps.event.addListener(object, name, function(e) {
        events[name].apply(this, [e]);
      });
    })(layer, ev);
  }

  this.layers.push(layer);

  return layer;
};

GMaps.prototype.loadFromKML = function(options) {
  var layer = this.getFromKML(options);
  layer.setMap(this.map);

  return layer;
};

GMaps.prototype.addLayer = function(layerName, options) {
  //var default_layers = ['weather', 'clouds', 'traffic', 'transit', 'bicycling', 'panoramio', 'places'];
  options = options || {};
  var layer;

  switch(layerName) {
    case 'weather': this.singleLayers.weather = layer = new google.maps.weather.WeatherLayer();
      break;
    case 'clouds': this.singleLayers.clouds = layer = new google.maps.weather.CloudLayer();
      break;
    case 'traffic': this.singleLayers.traffic = layer = new google.maps.TrafficLayer();
      break;
    case 'transit': this.singleLayers.transit = layer = new google.maps.TransitLayer();
      break;
    case 'bicycling': this.singleLayers.bicycling = layer = new google.maps.BicyclingLayer();
      break;
    case 'panoramio':
        this.singleLayers.panoramio = layer = new google.maps.panoramio.PanoramioLayer();
        layer.setTag(options.filter);
        delete options.filter;

        //click event
        if (options.click) {
          google.maps.event.addListener(layer, 'click', function(event) {
            options.click(event);
            delete options.click;
          });
        }
      break;
      case 'places':
        this.singleLayers.places = layer = new google.maps.places.PlacesService(this.map);

        //search, nearbySearch, radarSearch callback, Both are the same
        if (options.search || options.nearbySearch || options.radarSearch) {
          var placeSearchRequest  = {
            bounds : options.bounds || null,
            keyword : options.keyword || null,
            location : options.location || null,
            name : options.name || null,
            radius : options.radius || null,
            rankBy : options.rankBy || null,
            types : options.types || null
          };

          if (options.radarSearch) {
            layer.radarSearch(placeSearchRequest, options.radarSearch);
          }

          if (options.search) {
            layer.search(placeSearchRequest, options.search);
          }

          if (options.nearbySearch) {
            layer.nearbySearch(placeSearchRequest, options.nearbySearch);
          }
        }

        //textSearch callback
        if (options.textSearch) {
          var textSearchRequest  = {
            bounds : options.bounds || null,
            location : options.location || null,
            query : options.query || null,
            radius : options.radius || null
          };

          layer.textSearch(textSearchRequest, options.textSearch);
        }
      break;
  }

  if (layer !== undefined) {
    if (typeof layer.setOptions == 'function') {
      layer.setOptions(options);
    }
    if (typeof layer.setMap == 'function') {
      layer.setMap(this.map);
    }

    return layer;
  }
};

GMaps.prototype.removeLayer = function(layer) {
  if (typeof(layer) == "string" && this.singleLayers[layer] !== undefined) {
     this.singleLayers[layer].setMap(null);

     delete this.singleLayers[layer];
  }
  else {
    for (var i = 0; i < this.layers.length; i++) {
      if (this.layers[i] === layer) {
        this.layers[i].setMap(null);
        this.layers.splice(i, 1);

        break;
      }
    }
  }
};

var travelMode, unitSystem;

GMaps.prototype.getRoutes = function(options) {
  switch (options.travelMode) {
    case 'bicycling':
      travelMode = google.maps.TravelMode.BICYCLING;
      break;
    case 'transit':
      travelMode = google.maps.TravelMode.TRANSIT;
      break;
    case 'driving':
      travelMode = google.maps.TravelMode.DRIVING;
      break;
    default:
      travelMode = google.maps.TravelMode.WALKING;
      break;
  }

  if (options.unitSystem === 'imperial') {
    unitSystem = google.maps.UnitSystem.IMPERIAL;
  }
  else {
    unitSystem = google.maps.UnitSystem.METRIC;
  }

  var base_options = {
        avoidHighways: false,
        avoidTolls: false,
        optimizeWaypoints: false,
        waypoints: []
      },
      request_options =  extend_object(base_options, options);

  request_options.origin = /string/.test(typeof options.origin) ? options.origin : new google.maps.LatLng(options.origin[0], options.origin[1]);
  request_options.destination = /string/.test(typeof options.destination) ? options.destination : new google.maps.LatLng(options.destination[0], options.destination[1]);
  request_options.travelMode = travelMode;
  request_options.unitSystem = unitSystem;

  delete request_options.callback;
  delete request_options.error;

  var self = this,
      routes = [],
      service = new google.maps.DirectionsService();

  service.route(request_options, function(result, status) {
    if (status === google.maps.DirectionsStatus.OK) {
      for (var r in result.routes) {
        if (result.routes.hasOwnProperty(r)) {
          routes.push(result.routes[r]);
        }
      }

      if (options.callback) {
        options.callback(routes, result, status);
      }
    }
    else {
      if (options.error) {
        options.error(result, status);
      }
    }
  });
};

GMaps.prototype.removeRoutes = function() {
  this.routes.length = 0;
};

GMaps.prototype.getElevations = function(options) {
  options = extend_object({
    locations: [],
    path : false,
    samples : 256
  }, options);

  if (options.locations.length > 0) {
    if (options.locations[0].length > 0) {
      options.locations = array_flat(array_map([options.locations], arrayToLatLng,  false));
    }
  }

  var callback = options.callback;
  delete options.callback;

  var service = new google.maps.ElevationService();

  //location request
  if (!options.path) {
    delete options.path;
    delete options.samples;

    service.getElevationForLocations(options, function(result, status) {
      if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  //path request
  } else {
    var pathRequest = {
      path : options.locations,
      samples : options.samples
    };

    service.getElevationAlongPath(pathRequest, function(result, status) {
     if (callback && typeof(callback) === "function") {
        callback(result, status);
      }
    });
  }
};

GMaps.prototype.cleanRoute = GMaps.prototype.removePolylines;

GMaps.prototype.renderRoute = function(options, renderOptions) {
  var self = this,
      panel = ((typeof renderOptions.panel === 'string') ? document.getElementById(renderOptions.panel.replace('#', '')) : renderOptions.panel),
      display;

  renderOptions.panel = panel;
  renderOptions = extend_object({
    map: this.map
  }, renderOptions);
  display = new google.maps.DirectionsRenderer(renderOptions);

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback: function(routes, response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        display.setDirections(response);
      }
    }
  });
};

GMaps.prototype.drawRoute = function(options) {
  var self = this;

  this.getRoutes({
    origin: options.origin,
    destination: options.destination,
    travelMode: options.travelMode,
    waypoints: options.waypoints,
    unitSystem: options.unitSystem,
    error: options.error,
    avoidHighways: options.avoidHighways,
    avoidTolls: options.avoidTolls,
    optimizeWaypoints: options.optimizeWaypoints,
    callback: function(routes) {
      if (routes.length > 0) {
        var polyline_options = {
          path: routes[routes.length - 1].overview_path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);

        if (options.callback) {
          options.callback(routes[routes.length - 1]);
        }
      }
    }
  });
};

GMaps.prototype.travelRoute = function(options) {
  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      unitSystem: options.unitSystem,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        options.step(step);
      }
    }
  }
};

GMaps.prototype.drawSteppedRoute = function(options) {
  var self = this;

  if (options.origin && options.destination) {
    this.getRoutes({
      origin: options.origin,
      destination: options.destination,
      travelMode: options.travelMode,
      waypoints : options.waypoints,
      error: options.error,
      callback: function(e) {
        //start callback
        if (e.length > 0 && options.start) {
          options.start(e[e.length - 1]);
        }

        //step callback
        if (e.length > 0 && options.step) {
          var route = e[e.length - 1];
          if (route.legs.length > 0) {
            var steps = route.legs[0].steps;
            for (var i = 0, step; step = steps[i]; i++) {
              step.step_number = i;
              var polyline_options = {
                path: step.path,
                strokeColor: options.strokeColor,
                strokeOpacity: options.strokeOpacity,
                strokeWeight: options.strokeWeight
              };

              if (options.hasOwnProperty("icons")) {
                polyline_options.icons = options.icons;
              }

              self.drawPolyline(polyline_options);
              options.step(step, (route.legs[0].steps.length - 1));
            }
          }
        }

        //end callback
        if (e.length > 0 && options.end) {
           options.end(e[e.length - 1]);
        }
      }
    });
  }
  else if (options.route) {
    if (options.route.legs.length > 0) {
      var steps = options.route.legs[0].steps;
      for (var i = 0, step; step = steps[i]; i++) {
        step.step_number = i;
        var polyline_options = {
          path: step.path,
          strokeColor: options.strokeColor,
          strokeOpacity: options.strokeOpacity,
          strokeWeight: options.strokeWeight
        };

        if (options.hasOwnProperty("icons")) {
          polyline_options.icons = options.icons;
        }

        self.drawPolyline(polyline_options);
        options.step(step);
      }
    }
  }
};

GMaps.Route = function(options) {
  this.origin = options.origin;
  this.destination = options.destination;
  this.waypoints = options.waypoints;

  this.map = options.map;
  this.route = options.route;
  this.step_count = 0;
  this.steps = this.route.legs[0].steps;
  this.steps_length = this.steps.length;

  var polyline_options = {
    path: new google.maps.MVCArray(),
    strokeColor: options.strokeColor,
    strokeOpacity: options.strokeOpacity,
    strokeWeight: options.strokeWeight
  };

  if (options.hasOwnProperty("icons")) {
    polyline_options.icons = options.icons;
  }

  this.polyline = this.map.drawPolyline(polyline_options).getPath();
};

GMaps.Route.prototype.getRoute = function(options) {
  var self = this;

  this.map.getRoutes({
    origin : this.origin,
    destination : this.destination,
    travelMode : options.travelMode,
    waypoints : this.waypoints || [],
    error: options.error,
    callback : function() {
      self.route = e[0];

      if (options.callback) {
        options.callback.call(self);
      }
    }
  });
};

GMaps.Route.prototype.back = function() {
  if (this.step_count > 0) {
    this.step_count--;
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.pop();
      }
    }
  }
};

GMaps.Route.prototype.forward = function() {
  if (this.step_count < this.steps_length) {
    var path = this.route.legs[0].steps[this.step_count].path;

    for (var p in path){
      if (path.hasOwnProperty(p)){
        this.polyline.push(path[p]);
      }
    }
    this.step_count++;
  }
};

GMaps.prototype.checkGeofence = function(lat, lng, fence) {
  return fence.containsLatLng(new google.maps.LatLng(lat, lng));
};

GMaps.prototype.checkMarkerGeofence = function(marker, outside_callback) {
  if (marker.fences) {
    for (var i = 0, fence; fence = marker.fences[i]; i++) {
      var pos = marker.getPosition();
      if (!this.checkGeofence(pos.lat(), pos.lng(), fence)) {
        outside_callback(marker, fence);
      }
    }
  }
};

GMaps.prototype.toImage = function(options) {
  var options = options || {},
      static_map_options = {};

  static_map_options['size'] = options['size'] || [this.el.clientWidth, this.el.clientHeight];
  static_map_options['lat'] = this.getCenter().lat();
  static_map_options['lng'] = this.getCenter().lng();

  if (this.markers.length > 0) {
    static_map_options['markers'] = [];
    
    for (var i = 0; i < this.markers.length; i++) {
      static_map_options['markers'].push({
        lat: this.markers[i].getPosition().lat(),
        lng: this.markers[i].getPosition().lng()
      });
    }
  }

  if (this.polylines.length > 0) {
    var polyline = this.polylines[0];
    
    static_map_options['polyline'] = {};
    static_map_options['polyline']['path'] = google.maps.geometry.encoding.encodePath(polyline.getPath());
    static_map_options['polyline']['strokeColor'] = polyline.strokeColor
    static_map_options['polyline']['strokeOpacity'] = polyline.strokeOpacity
    static_map_options['polyline']['strokeWeight'] = polyline.strokeWeight
  }

  return GMaps.staticMapURL(static_map_options);
};

GMaps.staticMapURL = function(options){
  var parameters = [],
      data,
      static_root = (location.protocol === 'file:' ? 'http:' : location.protocol ) + '//maps.googleapis.com/maps/api/staticmap';

  if (options.url) {
    static_root = options.url;
    delete options.url;
  }

  static_root += '?';

  var markers = options.markers;
  
  delete options.markers;

  if (!markers && options.marker) {
    markers = [options.marker];
    delete options.marker;
  }

  var styles = options.styles;

  delete options.styles;

  var polyline = options.polyline;
  delete options.polyline;

  /** Map options **/
  if (options.center) {
    parameters.push('center=' + options.center);
    delete options.center;
  }
  else if (options.address) {
    parameters.push('center=' + options.address);
    delete options.address;
  }
  else if (options.lat) {
    parameters.push(['center=', options.lat, ',', options.lng].join(''));
    delete options.lat;
    delete options.lng;
  }
  else if (options.visible) {
    var visible = encodeURI(options.visible.join('|'));
    parameters.push('visible=' + visible);
  }

  var size = options.size;
  if (size) {
    if (size.join) {
      size = size.join('x');
    }
    delete options.size;
  }
  else {
    size = '630x300';
  }
  parameters.push('size=' + size);

  if (!options.zoom && options.zoom !== false) {
    options.zoom = 15;
  }

  var sensor = options.hasOwnProperty('sensor') ? !!options.sensor : true;
  delete options.sensor;
  parameters.push('sensor=' + sensor);

  for (var param in options) {
    if (options.hasOwnProperty(param)) {
      parameters.push(param + '=' + options[param]);
    }
  }

  /** Markers **/
  if (markers) {
    var marker, loc;

    for (var i = 0; data = markers[i]; i++) {
      marker = [];

      if (data.size && data.size !== 'normal') {
        marker.push('size:' + data.size);
        delete data.size;
      }
      else if (data.icon) {
        marker.push('icon:' + encodeURI(data.icon));
        delete data.icon;
      }

      if (data.color) {
        marker.push('color:' + data.color.replace('#', '0x'));
        delete data.color;
      }

      if (data.label) {
        marker.push('label:' + data.label[0].toUpperCase());
        delete data.label;
      }

      loc = (data.address ? data.address : data.lat + ',' + data.lng);
      delete data.address;
      delete data.lat;
      delete data.lng;

      for(var param in data){
        if (data.hasOwnProperty(param)) {
          marker.push(param + ':' + data[param]);
        }
      }

      if (marker.length || i === 0) {
        marker.push(loc);
        marker = marker.join('|');
        parameters.push('markers=' + encodeURI(marker));
      }
      // New marker without styles
      else {
        marker = parameters.pop() + encodeURI('|' + loc);
        parameters.push(marker);
      }
    }
  }

  /** Map Styles **/
  if (styles) {
    for (var i = 0; i < styles.length; i++) {
      var styleRule = [];
      if (styles[i].featureType){
        styleRule.push('feature:' + styles[i].featureType.toLowerCase());
      }

      if (styles[i].elementType) {
        styleRule.push('element:' + styles[i].elementType.toLowerCase());
      }

      for (var j = 0; j < styles[i].stylers.length; j++) {
        for (var p in styles[i].stylers[j]) {
          var ruleArg = styles[i].stylers[j][p];
          if (p == 'hue' || p == 'color') {
            ruleArg = '0x' + ruleArg.substring(1);
          }
          styleRule.push(p + ':' + ruleArg);
        }
      }

      var rule = styleRule.join('|');
      if (rule != '') {
        parameters.push('style=' + rule);
      }
    }
  }

  /** Polylines **/
  function parseColor(color, opacity) {
    if (color[0] === '#'){
      color = color.replace('#', '0x');

      if (opacity) {
        opacity = parseFloat(opacity);
        opacity = Math.min(1, Math.max(opacity, 0));
        if (opacity === 0) {
          return '0x00000000';
        }
        opacity = (opacity * 255).toString(16);
        if (opacity.length === 1) {
          opacity += opacity;
        }

        color = color.slice(0,8) + opacity;
      }
    }
    return color;
  }

  if (polyline) {
    data = polyline;
    polyline = [];

    if (data.strokeWeight) {
      polyline.push('weight:' + parseInt(data.strokeWeight, 10));
    }

    if (data.strokeColor) {
      var color = parseColor(data.strokeColor, data.strokeOpacity);
      polyline.push('color:' + color);
    }

    if (data.fillColor) {
      var fillcolor = parseColor(data.fillColor, data.fillOpacity);
      polyline.push('fillcolor:' + fillcolor);
    }

    var path = data.path;
    if (path.join) {
      for (var j=0, pos; pos=path[j]; j++) {
        polyline.push(pos.join(','));
      }
    }
    else {
      polyline.push('enc:' + path);
    }

    polyline = polyline.join('|');
    parameters.push('path=' + encodeURI(polyline));
  }

  /** Retina support **/
  var dpi = window.devicePixelRatio || 1;
  parameters.push('scale=' + dpi);

  parameters = parameters.join('&');
  return static_root + parameters;
};

GMaps.prototype.addMapType = function(mapTypeId, options) {
  if (options.hasOwnProperty("getTileUrl") && typeof(options["getTileUrl"]) == "function") {
    options.tileSize = options.tileSize || new google.maps.Size(256, 256);

    var mapType = new google.maps.ImageMapType(options);

    this.map.mapTypes.set(mapTypeId, mapType);
  }
  else {
    throw "'getTileUrl' function required.";
  }
};

GMaps.prototype.addOverlayMapType = function(options) {
  if (options.hasOwnProperty("getTile") && typeof(options["getTile"]) == "function") {
    var overlayMapTypeIndex = options.index;

    delete options.index;

    this.map.overlayMapTypes.insertAt(overlayMapTypeIndex, options);
  }
  else {
    throw "'getTile' function required.";
  }
};

GMaps.prototype.removeOverlayMapType = function(overlayMapTypeIndex) {
  this.map.overlayMapTypes.removeAt(overlayMapTypeIndex);
};

GMaps.prototype.addStyle = function(options) {
  var styledMapType = new google.maps.StyledMapType(options.styles, { name: options.styledMapName });

  this.map.mapTypes.set(options.mapTypeId, styledMapType);
};

GMaps.prototype.setStyle = function(mapTypeId) {
  this.map.setMapTypeId(mapTypeId);
};

GMaps.prototype.createPanorama = function(streetview_options) {
  if (!streetview_options.hasOwnProperty('lat') || !streetview_options.hasOwnProperty('lng')) {
    streetview_options.lat = this.getCenter().lat();
    streetview_options.lng = this.getCenter().lng();
  }

  this.panorama = GMaps.createPanorama(streetview_options);

  this.map.setStreetView(this.panorama);

  return this.panorama;
};

GMaps.createPanorama = function(options) {
  var el = getElementById(options.el, options.context);

  options.position = new google.maps.LatLng(options.lat, options.lng);

  delete options.el;
  delete options.context;
  delete options.lat;
  delete options.lng;

  var streetview_events = ['closeclick', 'links_changed', 'pano_changed', 'position_changed', 'pov_changed', 'resize', 'visible_changed'],
      streetview_options = extend_object({visible : true}, options);

  for (var i = 0; i < streetview_events.length; i++) {
    delete streetview_options[streetview_events[i]];
  }

  var panorama = new google.maps.StreetViewPanorama(el, streetview_options);

  for (var i = 0; i < streetview_events.length; i++) {
    (function(object, name) {
      if (options[name]) {
        google.maps.event.addListener(object, name, function(){
          options[name].apply(this);
        });
      }
    })(panorama, streetview_events[i]);
  }

  return panorama;
};

GMaps.prototype.on = function(event_name, handler) {
  return GMaps.on(event_name, this, handler);
};

GMaps.prototype.off = function(event_name) {
  GMaps.off(event_name, this);
};

GMaps.prototype.once = function(event_name, handler) {
  return GMaps.once(event_name, this, handler);
};

GMaps.custom_events = ['marker_added', 'marker_removed', 'polyline_added', 'polyline_removed', 'polygon_added', 'polygon_removed', 'geolocated', 'geolocation_failed'];

GMaps.on = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    return google.maps.event.addListener(object, event_name, handler);
  }
  else {
    var registered_event = {
      handler : handler,
      eventName : event_name
    };

    object.registered_events[event_name] = object.registered_events[event_name] || [];
    object.registered_events[event_name].push(registered_event);

    return registered_event;
  }
};

GMaps.off = function(event_name, object) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map; 
    google.maps.event.clearListeners(object, event_name);
  }
  else {
    object.registered_events[event_name] = [];
  }
};

GMaps.once = function(event_name, object, handler) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    if(object instanceof GMaps) object = object.map;
    return google.maps.event.addListenerOnce(object, event_name, handler);
  }
};

GMaps.fire = function(event_name, object, scope) {
  if (GMaps.custom_events.indexOf(event_name) == -1) {
    google.maps.event.trigger(object, event_name, Array.prototype.slice.apply(arguments).slice(2));
  }
  else {
    if(event_name in scope.registered_events) {
      var firing_events = scope.registered_events[event_name];

      for(var i = 0; i < firing_events.length; i++) {
        (function(handler, scope, object) {
          handler.apply(scope, [object]);
        })(firing_events[i]['handler'], scope, object);
      }
    }
  }
};

GMaps.geolocate = function(options) {
  var complete_callback = options.always || options.complete;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      options.success(position);

      if (complete_callback) {
        complete_callback();
      }
    }, function(error) {
      options.error(error);

      if (complete_callback) {
        complete_callback();
      }
    }, options.options);
  }
  else {
    options.not_supported();

    if (complete_callback) {
      complete_callback();
    }
  }
};

GMaps.geocode = function(options) {
  this.geocoder = new google.maps.Geocoder();
  var callback = options.callback;
  if (options.hasOwnProperty('lat') && options.hasOwnProperty('lng')) {
    options.latLng = new google.maps.LatLng(options.lat, options.lng);
  }

  delete options.lat;
  delete options.lng;
  delete options.callback;
  
  this.geocoder.geocode(options, function(results, status) {
    callback(results, status);
  });
};

if (typeof window.google === 'object' && window.google.maps) {
  //==========================
  // Polygon containsLatLng
  // https://github.com/tparkin/Google-Maps-Point-in-Polygon
  // Poygon getBounds extension - google-maps-extensions
  // http://code.google.com/p/google-maps-extensions/source/browse/google.maps.Polygon.getBounds.js
  if (!google.maps.Polygon.prototype.getBounds) {
    google.maps.Polygon.prototype.getBounds = function(latLng) {
      var bounds = new google.maps.LatLngBounds();
      var paths = this.getPaths();
      var path;

      for (var p = 0; p < paths.getLength(); p++) {
        path = paths.getAt(p);
        for (var i = 0; i < path.getLength(); i++) {
          bounds.extend(path.getAt(i));
        }
      }

      return bounds;
    };
  }

  if (!google.maps.Polygon.prototype.containsLatLng) {
    // Polygon containsLatLng - method to determine if a latLng is within a polygon
    google.maps.Polygon.prototype.containsLatLng = function(latLng) {
      // Exclude points outside of bounds as there is no way they are in the poly
      var bounds = this.getBounds();

      if (bounds !== null && !bounds.contains(latLng)) {
        return false;
      }

      // Raycast point in polygon method
      var inPoly = false;

      var numPaths = this.getPaths().getLength();
      for (var p = 0; p < numPaths; p++) {
        var path = this.getPaths().getAt(p);
        var numPoints = path.getLength();
        var j = numPoints - 1;

        for (var i = 0; i < numPoints; i++) {
          var vertex1 = path.getAt(i);
          var vertex2 = path.getAt(j);

          if (vertex1.lng() < latLng.lng() && vertex2.lng() >= latLng.lng() || vertex2.lng() < latLng.lng() && vertex1.lng() >= latLng.lng()) {
            if (vertex1.lat() + (latLng.lng() - vertex1.lng()) / (vertex2.lng() - vertex1.lng()) * (vertex2.lat() - vertex1.lat()) < latLng.lat()) {
              inPoly = !inPoly;
            }
          }

          j = i;
        }
      }

      return inPoly;
    };
  }

  if (!google.maps.Circle.prototype.containsLatLng) {
    google.maps.Circle.prototype.containsLatLng = function(latLng) {
      if (google.maps.geometry) {
        return google.maps.geometry.spherical.computeDistanceBetween(this.getCenter(), latLng) <= this.getRadius();
      }
      else {
        return true;
      }
    };
  }

  google.maps.Rectangle.prototype.containsLatLng = function(latLng) {
    return this.getBounds().contains(latLng);
  };

  google.maps.LatLngBounds.prototype.containsLatLng = function(latLng) {
    return this.contains(latLng);
  };

  google.maps.Marker.prototype.setFences = function(fences) {
    this.fences = fences;
  };

  google.maps.Marker.prototype.addFence = function(fence) {
    this.fences.push(fence);
  };

  google.maps.Marker.prototype.getId = function() {
    return this['__gm_id'];
  };
}

//==========================
// Array indexOf
// https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
      "use strict";
      if (this == null) {
          throw new TypeError();
      }
      var t = Object(this);
      var len = t.length >>> 0;
      if (len === 0) {
          return -1;
      }
      var n = 0;
      if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) { // shortcut for verifying if it's NaN
              n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
              n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
      }
      if (n >= len) {
          return -1;
      }
      var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
      for (; k < len; k++) {
          if (k in t && t[k] === searchElement) {
              return k;
          }
      }
      return -1;
  }
}

return GMaps;
}));


/***/ }),

/***/ "./resources/plugins/custom/gmaps/gmaps.js":
/*!*************************************************!*\
  !*** ./resources/plugins/custom/gmaps/gmaps.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Gmaps.js - allows you to use the potential of Google Maps in a simple way. No more extensive documentation or large amount of code: https://hpneo.dev/gmaps/
window.GMaps = __webpack_require__(/*! gmaps/gmaps.js */ "./node_modules/gmaps/gmaps.js");

/***/ }),

/***/ 12:
/*!*******************************************************!*\
  !*** multi ./resources/plugins/custom/gmaps/gmaps.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/spreadci4/public/admin/themes/metronic/resources/plugins/custom/gmaps/gmaps.js */"./resources/plugins/custom/gmaps/gmaps.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dtYXBzL2dtYXBzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9wbHVnaW5zL2N1c3RvbS9nbWFwcy9nbWFwcy5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJHTWFwcyIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7QUFDYjtBQUNBLEtBQUssSUFBMkI7QUFDaEM7QUFDQTtBQUNBLE9BQU8sRUFLSjs7O0FBR0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxrQkFBa0I7QUFDL0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSxtQkFBbUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QjtBQUNoRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsd0JBQXdCO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlCQUFpQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGlCQUFpQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwwQkFBMEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUJBQW1CLHlCQUF5QjtBQUM1QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsbUJBQW1CO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztB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YXBzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4oZnVuY3Rpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgfVxuICBlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbJ2pxdWVyeScsICdnb29nbGVtYXBzISddLCBmYWN0b3J5KTtcbiAgfVxuICBlbHNlIHtcbiAgICByb290LkdNYXBzID0gZmFjdG9yeSgpO1xuICB9XG5cblxufSh0aGlzLCBmdW5jdGlvbigpIHtcblxuLyohXG4gKiBHTWFwcy5qcyB2MC40LjI1XG4gKiBodHRwOi8vaHBuZW8uZ2l0aHViLmNvbS9nbWFwcy9cbiAqXG4gKiBDb3B5cmlnaHQgMjAxNywgR3VzdGF2byBMZW9uXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKi9cblxudmFyIGV4dGVuZF9vYmplY3QgPSBmdW5jdGlvbihvYmosIG5ld19vYmopIHtcbiAgdmFyIG5hbWU7XG5cbiAgaWYgKG9iaiA9PT0gbmV3X29iaikge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBmb3IgKG5hbWUgaW4gbmV3X29iaikge1xuICAgIGlmIChuZXdfb2JqW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIG9ialtuYW1lXSA9IG5ld19vYmpbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciByZXBsYWNlX29iamVjdCA9IGZ1bmN0aW9uKG9iaiwgcmVwbGFjZSkge1xuICB2YXIgbmFtZTtcblxuICBpZiAob2JqID09PSByZXBsYWNlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGZvciAobmFtZSBpbiByZXBsYWNlKSB7XG4gICAgaWYgKG9ialtuYW1lXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIG9ialtuYW1lXSA9IHJlcGxhY2VbbmFtZV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn07XG5cbnZhciBhcnJheV9tYXAgPSBmdW5jdGlvbihhcnJheSwgY2FsbGJhY2spIHtcbiAgdmFyIG9yaWdpbmFsX2NhbGxiYWNrX3BhcmFtcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMiksXG4gICAgICBhcnJheV9yZXR1cm4gPSBbXSxcbiAgICAgIGFycmF5X2xlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIGk7XG5cbiAgaWYgKEFycmF5LnByb3RvdHlwZS5tYXAgJiYgYXJyYXkubWFwID09PSBBcnJheS5wcm90b3R5cGUubWFwKSB7XG4gICAgYXJyYXlfcmV0dXJuID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGFycmF5LCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIgY2FsbGJhY2tfcGFyYW1zID0gb3JpZ2luYWxfY2FsbGJhY2tfcGFyYW1zLnNsaWNlKDApO1xuICAgICAgY2FsbGJhY2tfcGFyYW1zLnNwbGljZSgwLCAwLCBpdGVtKTtcblxuICAgICAgcmV0dXJuIGNhbGxiYWNrLmFwcGx5KHRoaXMsIGNhbGxiYWNrX3BhcmFtcyk7XG4gICAgfSk7XG4gIH1cbiAgZWxzZSB7XG4gICAgZm9yIChpID0gMDsgaSA8IGFycmF5X2xlbmd0aDsgaSsrKSB7XG4gICAgICBjYWxsYmFja19wYXJhbXMgPSBvcmlnaW5hbF9jYWxsYmFja19wYXJhbXM7XG4gICAgICBjYWxsYmFja19wYXJhbXMuc3BsaWNlKDAsIDAsIGFycmF5W2ldKTtcbiAgICAgIGFycmF5X3JldHVybi5wdXNoKGNhbGxiYWNrLmFwcGx5KHRoaXMsIGNhbGxiYWNrX3BhcmFtcykpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhcnJheV9yZXR1cm47XG59O1xuXG52YXIgYXJyYXlfZmxhdCA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIHZhciBuZXdfYXJyYXkgPSBbXSxcbiAgICAgIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbmV3X2FycmF5ID0gbmV3X2FycmF5LmNvbmNhdChhcnJheVtpXSk7XG4gIH1cblxuICByZXR1cm4gbmV3X2FycmF5O1xufTtcblxudmFyIGNvb3Jkc1RvTGF0TG5ncyA9IGZ1bmN0aW9uKGNvb3JkcywgdXNlR2VvSlNPTikge1xuICB2YXIgZmlyc3RfY29vcmQgPSBjb29yZHNbMF0sXG4gICAgICBzZWNvbmRfY29vcmQgPSBjb29yZHNbMV07XG5cbiAgaWYgKHVzZUdlb0pTT04pIHtcbiAgICBmaXJzdF9jb29yZCA9IGNvb3Jkc1sxXTtcbiAgICBzZWNvbmRfY29vcmQgPSBjb29yZHNbMF07XG4gIH1cblxuICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhmaXJzdF9jb29yZCwgc2Vjb25kX2Nvb3JkKTtcbn07XG5cbnZhciBhcnJheVRvTGF0TG5nID0gZnVuY3Rpb24oY29vcmRzLCB1c2VHZW9KU09OKSB7XG4gIHZhciBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoIShjb29yZHNbaV0gaW5zdGFuY2VvZiBnb29nbGUubWFwcy5MYXRMbmcpKSB7XG4gICAgICBpZiAoY29vcmRzW2ldLmxlbmd0aCA+IDAgJiYgdHlwZW9mKGNvb3Jkc1tpXVswXSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgY29vcmRzW2ldID0gYXJyYXlUb0xhdExuZyhjb29yZHNbaV0sIHVzZUdlb0pTT04pO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvb3Jkc1tpXSA9IGNvb3Jkc1RvTGF0TG5ncyhjb29yZHNbaV0sIHVzZUdlb0pTT04pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjb29yZHM7XG59O1xuXG52YXIgZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IGZ1bmN0aW9uIChjbGFzc19uYW1lLCBjb250ZXh0KSB7XG4gICAgdmFyIGVsZW1lbnQsXG4gICAgICAgIF9jbGFzcyA9IGNsYXNzX25hbWUucmVwbGFjZSgnLicsICcnKTtcblxuICAgIGlmICgnalF1ZXJ5JyBpbiB0aGlzICYmIGNvbnRleHQpIHtcbiAgICAgICAgZWxlbWVudCA9ICQoXCIuXCIgKyBfY2xhc3MsIGNvbnRleHQpWzBdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKF9jbGFzcylbMF07XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuXG59O1xuXG52YXIgZ2V0RWxlbWVudEJ5SWQgPSBmdW5jdGlvbihpZCwgY29udGV4dCkge1xuICB2YXIgZWxlbWVudCxcbiAgaWQgPSBpZC5yZXBsYWNlKCcjJywgJycpO1xuXG4gIGlmICgnalF1ZXJ5JyBpbiB3aW5kb3cgJiYgY29udGV4dCkge1xuICAgIGVsZW1lbnQgPSAkKCcjJyArIGlkLCBjb250ZXh0KVswXTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICB9O1xuXG4gIHJldHVybiBlbGVtZW50O1xufTtcblxudmFyIGZpbmRBYnNvbHV0ZVBvc2l0aW9uID0gZnVuY3Rpb24ob2JqKSAge1xuICB2YXIgY3VybGVmdCA9IDAsXG4gICAgICBjdXJ0b3AgPSAwO1xuXG4gIGlmIChvYmouZ2V0Qm91bmRpbmdDbGllbnRSZWN0KSB7XG4gICAgICB2YXIgcmVjdCA9IG9iai5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBzeCA9IC0od2luZG93LnNjcm9sbFggPyB3aW5kb3cuc2Nyb2xsWCA6IHdpbmRvdy5wYWdlWE9mZnNldCk7XG4gICAgICB2YXIgc3kgPSAtKHdpbmRvdy5zY3JvbGxZID8gd2luZG93LnNjcm9sbFkgOiB3aW5kb3cucGFnZVlPZmZzZXQpO1xuXG4gICAgICByZXR1cm4gWyhyZWN0LmxlZnQgLSBzeCksIChyZWN0LnRvcCAtIHN5KV07XG4gIH1cblxuICBpZiAob2JqLm9mZnNldFBhcmVudCkge1xuICAgIGRvIHtcbiAgICAgIGN1cmxlZnQgKz0gb2JqLm9mZnNldExlZnQ7XG4gICAgICBjdXJ0b3AgKz0gb2JqLm9mZnNldFRvcDtcbiAgICB9IHdoaWxlIChvYmogPSBvYmoub2Zmc2V0UGFyZW50KTtcbiAgfVxuXG4gIHJldHVybiBbY3VybGVmdCwgY3VydG9wXTtcbn07XG5cbnZhciBHTWFwcyA9IChmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGRvYyA9IGRvY3VtZW50O1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBHTWFwcyBpbnN0YW5jZSwgaW5jbHVkaW5nIGEgR29vZ2xlIE1hcHMgbWFwLlxuICAgKiBAY2xhc3MgR01hcHNcbiAgICogQGNvbnN0cnVjdHNcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgLSBgb3B0aW9uc2AgYWNjZXB0cyBhbGwgdGhlIFtNYXBPcHRpb25zXShodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9yZWZlcmVuY2UjTWFwT3B0aW9ucykgYW5kIFtldmVudHNdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L3JlZmVyZW5jZSNNYXApIGxpc3RlZCBpbiB0aGUgR29vZ2xlIE1hcHMgQVBJLiBBbHNvIGFjY2VwdHM6XG4gICAqICogYGxhdGAgKG51bWJlcik6IExhdGl0dWRlIG9mIHRoZSBtYXAncyBjZW50ZXJcbiAgICogKiBgbG5nYCAobnVtYmVyKTogTG9uZ2l0dWRlIG9mIHRoZSBtYXAncyBjZW50ZXJcbiAgICogKiBgZWxgIChzdHJpbmcgb3IgSFRNTEVsZW1lbnQpOiBjb250YWluZXIgd2hlcmUgdGhlIG1hcCB3aWxsIGJlIHJlbmRlcmVkXG4gICAqICogYG1hcmtlckNsdXN0ZXJlcmAgKGZ1bmN0aW9uKTogQSBmdW5jdGlvbiB0byBjcmVhdGUgYSBtYXJrZXIgY2x1c3Rlci4gWW91IGNhbiB1c2UgTWFya2VyQ2x1c3RlcmVyIG9yIE1hcmtlckNsdXN0ZXJlclBsdXMuXG4gICAqL1xuICB2YXIgR01hcHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG5cbiAgICBpZiAoISh0eXBlb2Ygd2luZG93Lmdvb2dsZSA9PT0gJ29iamVjdCcgJiYgd2luZG93Lmdvb2dsZS5tYXBzKSkge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuY29uc29sZSA9PT0gJ29iamVjdCcgJiYgd2luZG93LmNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignR29vZ2xlIE1hcHMgQVBJIGlzIHJlcXVpcmVkLiBQbGVhc2UgcmVnaXN0ZXIgdGhlIGZvbGxvd2luZyBKYXZhU2NyaXB0IGxpYnJhcnkgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzLicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMpIHJldHVybiBuZXcgR01hcHMob3B0aW9ucyk7XG5cbiAgICBvcHRpb25zLnpvb20gPSBvcHRpb25zLnpvb20gfHwgMTU7XG4gICAgb3B0aW9ucy5tYXBUeXBlID0gb3B0aW9ucy5tYXBUeXBlIHx8ICdyb2FkbWFwJztcblxuICAgIHZhciB2YWx1ZU9yRGVmYXVsdCA9IGZ1bmN0aW9uKHZhbHVlLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID8gZGVmYXVsdFZhbHVlIDogdmFsdWU7XG4gICAgfTtcblxuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgaSxcbiAgICAgICAgZXZlbnRzX3RoYXRfaGlkZV9jb250ZXh0X21lbnUgPSBbXG4gICAgICAgICAgJ2JvdW5kc19jaGFuZ2VkJywgJ2NlbnRlcl9jaGFuZ2VkJywgJ2NsaWNrJywgJ2RibGNsaWNrJywgJ2RyYWcnLFxuICAgICAgICAgICdkcmFnZW5kJywgJ2RyYWdzdGFydCcsICdpZGxlJywgJ21hcHR5cGVpZF9jaGFuZ2VkJywgJ3Byb2plY3Rpb25fY2hhbmdlZCcsXG4gICAgICAgICAgJ3Jlc2l6ZScsICd0aWxlc2xvYWRlZCcsICd6b29tX2NoYW5nZWQnXG4gICAgICAgIF0sXG4gICAgICAgIGV2ZW50c190aGF0X2RvZXNudF9oaWRlX2NvbnRleHRfbWVudSA9IFsnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlciddLFxuICAgICAgICBvcHRpb25zX3RvX2JlX2RlbGV0ZWQgPSBbJ2VsJywgJ2xhdCcsICdsbmcnLCAnbWFwVHlwZScsICd3aWR0aCcsICdoZWlnaHQnLCAnbWFya2VyQ2x1c3RlcmVyJywgJ2VuYWJsZU5ld1N0eWxlJ10sXG4gICAgICAgIGlkZW50aWZpZXIgPSBvcHRpb25zLmVsIHx8IG9wdGlvbnMuZGl2LFxuICAgICAgICBtYXJrZXJDbHVzdGVyZXJGdW5jdGlvbiA9IG9wdGlvbnMubWFya2VyQ2x1c3RlcmVyLFxuICAgICAgICBtYXBUeXBlID0gZ29vZ2xlLm1hcHMuTWFwVHlwZUlkW29wdGlvbnMubWFwVHlwZS50b1VwcGVyQ2FzZSgpXSxcbiAgICAgICAgbWFwX2NlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcob3B0aW9ucy5sYXQsIG9wdGlvbnMubG5nKSxcbiAgICAgICAgem9vbUNvbnRyb2wgPSB2YWx1ZU9yRGVmYXVsdChvcHRpb25zLnpvb21Db250cm9sLCB0cnVlKSxcbiAgICAgICAgem9vbUNvbnRyb2xPcHQgPSBvcHRpb25zLnpvb21Db250cm9sT3B0IHx8IHtcbiAgICAgICAgICBzdHlsZTogJ0RFRkFVTFQnLFxuICAgICAgICAgIHBvc2l0aW9uOiAnVE9QX0xFRlQnXG4gICAgICAgIH0sXG4gICAgICAgIHpvb21Db250cm9sU3R5bGUgPSB6b29tQ29udHJvbE9wdC5zdHlsZSB8fCAnREVGQVVMVCcsXG4gICAgICAgIHpvb21Db250cm9sUG9zaXRpb24gPSB6b29tQ29udHJvbE9wdC5wb3NpdGlvbiB8fCAnVE9QX0xFRlQnLFxuICAgICAgICBwYW5Db250cm9sID0gdmFsdWVPckRlZmF1bHQob3B0aW9ucy5wYW5Db250cm9sLCB0cnVlKSxcbiAgICAgICAgbWFwVHlwZUNvbnRyb2wgPSB2YWx1ZU9yRGVmYXVsdChvcHRpb25zLm1hcFR5cGVDb250cm9sLCB0cnVlKSxcbiAgICAgICAgc2NhbGVDb250cm9sID0gdmFsdWVPckRlZmF1bHQob3B0aW9ucy5zY2FsZUNvbnRyb2wsIHRydWUpLFxuICAgICAgICBzdHJlZXRWaWV3Q29udHJvbCA9IHZhbHVlT3JEZWZhdWx0KG9wdGlvbnMuc3RyZWV0Vmlld0NvbnRyb2wsIHRydWUpLFxuICAgICAgICBvdmVydmlld01hcENvbnRyb2wgPSB2YWx1ZU9yRGVmYXVsdChvdmVydmlld01hcENvbnRyb2wsIHRydWUpLFxuICAgICAgICBtYXBfb3B0aW9ucyA9IHt9LFxuICAgICAgICBtYXBfYmFzZV9vcHRpb25zID0ge1xuICAgICAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgICAgICBjZW50ZXI6IG1hcF9jZW50ZXIsXG4gICAgICAgICAgbWFwVHlwZUlkOiBtYXBUeXBlXG4gICAgICAgIH0sXG4gICAgICAgIG1hcF9jb250cm9sc19vcHRpb25zID0ge1xuICAgICAgICAgIHBhbkNvbnRyb2w6IHBhbkNvbnRyb2wsXG4gICAgICAgICAgem9vbUNvbnRyb2w6IHpvb21Db250cm9sLFxuICAgICAgICAgIHpvb21Db250cm9sT3B0aW9uczoge1xuICAgICAgICAgICAgc3R5bGU6IGdvb2dsZS5tYXBzLlpvb21Db250cm9sU3R5bGVbem9vbUNvbnRyb2xTdHlsZV0sXG4gICAgICAgICAgICBwb3NpdGlvbjogZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uW3pvb21Db250cm9sUG9zaXRpb25dXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtYXBUeXBlQ29udHJvbDogbWFwVHlwZUNvbnRyb2wsXG4gICAgICAgICAgc2NhbGVDb250cm9sOiBzY2FsZUNvbnRyb2wsXG4gICAgICAgICAgc3RyZWV0Vmlld0NvbnRyb2w6IHN0cmVldFZpZXdDb250cm9sLFxuICAgICAgICAgIG92ZXJ2aWV3TWFwQ29udHJvbDogb3ZlcnZpZXdNYXBDb250cm9sXG4gICAgICAgIH07XG5cbiAgICAgIGlmICh0eXBlb2Yob3B0aW9ucy5lbCkgPT09ICdzdHJpbmcnIHx8IHR5cGVvZihvcHRpb25zLmRpdikgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmIChpZGVudGlmaWVyLmluZGV4T2YoXCIjXCIpID4gLTEpIHtcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQ29udGFpbmVyIGVsZW1lbnRcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiBAdHlwZSB7SFRNTEVsZW1lbnR9XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHRoaXMuZWwgPSBnZXRFbGVtZW50QnlJZChpZGVudGlmaWVyLCBvcHRpb25zLmNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5lbCA9IGdldEVsZW1lbnRzQnlDbGFzc05hbWUuYXBwbHkodGhpcywgW2lkZW50aWZpZXIsIG9wdGlvbnMuY29udGV4dF0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZWwgPSBpZGVudGlmaWVyO1xuICAgICAgfVxuXG4gICAgaWYgKHR5cGVvZih0aGlzLmVsKSA9PT0gJ3VuZGVmaW5lZCcgfHwgdGhpcy5lbCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgJ05vIGVsZW1lbnQgZGVmaW5lZC4nO1xuICAgIH1cblxuICAgIHdpbmRvdy5jb250ZXh0X21lbnUgPSB3aW5kb3cuY29udGV4dF9tZW51IHx8IHt9O1xuICAgIHdpbmRvdy5jb250ZXh0X21lbnVbc2VsZi5lbC5pZF0gPSB7fTtcblxuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgY3VzdG9tIGNvbnRyb2xzIGluIHRoZSBtYXAgVUlcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLmNvbnRyb2xzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBvdmVybGF5c1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMub3ZlcmxheXMgPSBbXTtcbiAgICAvKipcbiAgICAgKiBDb2xsZWN0aW9uIG9mIEtNTC9HZW9SU1MgYW5kIEZ1c2lvblRhYmxlIGxheWVyc1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBkYXRhIGxheWVycyAoU2VlIHtAbGluayBHTWFwcyNhZGRMYXllcn0pXG4gICAgICpcbiAgICAgKiBAdHlwZSB7b2JqZWN0fVxuICAgICAqL1xuICAgIHRoaXMuc2luZ2xlTGF5ZXJzID0ge307XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBtYXJrZXJzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7YXJyYXl9XG4gICAgICovXG4gICAgdGhpcy5tYXJrZXJzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyBsaW5lc1xuICAgICAqXG4gICAgICogQHR5cGUge2FycmF5fVxuICAgICAqL1xuICAgIHRoaXMucG9seWxpbmVzID0gW107XG4gICAgLyoqXG4gICAgICogQ29sbGVjdGlvbiBvZiBtYXAncyByb3V0ZXMgcmVxdWVzdGVkIGJ5IHtAbGluayBHTWFwcyNnZXRSb3V0ZXN9LCB7QGxpbmsgR01hcHMjcmVuZGVyUm91dGV9LCB7QGxpbmsgR01hcHMjZHJhd1JvdXRlfSwge0BsaW5rIEdNYXBzI3RyYXZlbFJvdXRlfSBvciB7QGxpbmsgR01hcHMjZHJhd1N0ZXBwZWRSb3V0ZX1cbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnJvdXRlcyA9IFtdO1xuICAgIC8qKlxuICAgICAqIENvbGxlY3Rpb24gb2YgbWFwJ3MgcG9seWdvbnNcbiAgICAgKlxuICAgICAqIEB0eXBlIHthcnJheX1cbiAgICAgKi9cbiAgICB0aGlzLnBvbHlnb25zID0gW107XG4gICAgdGhpcy5pbmZvV2luZG93ID0gbnVsbDtcbiAgICB0aGlzLm92ZXJsYXlfZWwgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEN1cnJlbnQgbWFwJ3Mgem9vbVxuICAgICAqXG4gICAgICogQHR5cGUge251bWJlcn1cbiAgICAgKi9cbiAgICB0aGlzLnpvb20gPSBvcHRpb25zLnpvb207XG4gICAgdGhpcy5yZWdpc3RlcmVkX2V2ZW50cyA9IHt9O1xuXG4gICAgdGhpcy5lbC5zdHlsZS53aWR0aCA9IG9wdGlvbnMud2lkdGggfHwgdGhpcy5lbC5zY3JvbGxXaWR0aCB8fCB0aGlzLmVsLm9mZnNldFdpZHRoO1xuICAgIHRoaXMuZWwuc3R5bGUuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgfHwgdGhpcy5lbC5zY3JvbGxIZWlnaHQgfHwgdGhpcy5lbC5vZmZzZXRIZWlnaHQ7XG5cbiAgICBnb29nbGUubWFwcy52aXN1YWxSZWZyZXNoID0gb3B0aW9ucy5lbmFibGVOZXdTdHlsZTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBvcHRpb25zX3RvX2JlX2RlbGV0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlbGV0ZSBvcHRpb25zW29wdGlvbnNfdG9fYmVfZGVsZXRlZFtpXV07XG4gICAgfVxuXG4gICAgaWYob3B0aW9ucy5kaXNhYmxlRGVmYXVsdFVJICE9IHRydWUpIHtcbiAgICAgIG1hcF9iYXNlX29wdGlvbnMgPSBleHRlbmRfb2JqZWN0KG1hcF9iYXNlX29wdGlvbnMsIG1hcF9jb250cm9sc19vcHRpb25zKTtcbiAgICB9XG5cbiAgICBtYXBfb3B0aW9ucyA9IGV4dGVuZF9vYmplY3QobWFwX2Jhc2Vfb3B0aW9ucywgb3B0aW9ucyk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzX3RoYXRfaGlkZV9jb250ZXh0X21lbnUubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRlbGV0ZSBtYXBfb3B0aW9uc1tldmVudHNfdGhhdF9oaWRlX2NvbnRleHRfbWVudVtpXV07XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IGV2ZW50c190aGF0X2RvZXNudF9oaWRlX2NvbnRleHRfbWVudS5sZW5ndGg7IGkrKykge1xuICAgICAgZGVsZXRlIG1hcF9vcHRpb25zW2V2ZW50c190aGF0X2RvZXNudF9oaWRlX2NvbnRleHRfbWVudVtpXV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogR29vZ2xlIE1hcHMgbWFwIGluc3RhbmNlXG4gICAgICpcbiAgICAgKiBAdHlwZSB7Z29vZ2xlLm1hcHMuTWFwfVxuICAgICAqL1xuICAgIHRoaXMubWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcCh0aGlzLmVsLCBtYXBfb3B0aW9ucyk7XG5cbiAgICBpZiAobWFya2VyQ2x1c3RlcmVyRnVuY3Rpb24pIHtcbiAgICAgIC8qKlxuICAgICAgICogTWFya2VyIENsdXN0ZXJlciBpbnN0YW5jZVxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtvYmplY3R9XG4gICAgICAgKi9cbiAgICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyID0gbWFya2VyQ2x1c3RlcmVyRnVuY3Rpb24uYXBwbHkodGhpcywgW3RoaXMubWFwXSk7XG4gICAgfVxuXG4gICAgdmFyIGJ1aWxkQ29udGV4dE1lbnVIVE1MID0gZnVuY3Rpb24oY29udHJvbCwgZSkge1xuICAgICAgdmFyIGh0bWwgPSAnJyxcbiAgICAgICAgICBvcHRpb25zID0gd2luZG93LmNvbnRleHRfbWVudVtzZWxmLmVsLmlkXVtjb250cm9sXTtcblxuICAgICAgZm9yICh2YXIgaSBpbiBvcHRpb25zKXtcbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICB2YXIgb3B0aW9uID0gb3B0aW9uc1tpXTtcblxuICAgICAgICAgIGh0bWwgKz0gJzxsaT48YSBpZD1cIicgKyBjb250cm9sICsgJ18nICsgaSArICdcIiBocmVmPVwiI1wiPicgKyBvcHRpb24udGl0bGUgKyAnPC9hPjwvbGk+JztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWdldEVsZW1lbnRCeUlkKCdnbWFwc19jb250ZXh0X21lbnUnKSkgcmV0dXJuO1xuXG4gICAgICB2YXIgY29udGV4dF9tZW51X2VsZW1lbnQgPSBnZXRFbGVtZW50QnlJZCgnZ21hcHNfY29udGV4dF9tZW51Jyk7XG5cbiAgICAgIGNvbnRleHRfbWVudV9lbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG5cbiAgICAgIHZhciBjb250ZXh0X21lbnVfaXRlbXMgPSBjb250ZXh0X21lbnVfZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpLFxuICAgICAgICAgIGNvbnRleHRfbWVudV9pdGVtc19jb3VudCA9IGNvbnRleHRfbWVudV9pdGVtcy5sZW5ndGgsXG4gICAgICAgICAgaTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnRleHRfbWVudV9pdGVtc19jb3VudDsgaSsrKSB7XG4gICAgICAgIHZhciBjb250ZXh0X21lbnVfaXRlbSA9IGNvbnRleHRfbWVudV9pdGVtc1tpXTtcblxuICAgICAgICB2YXIgYXNzaWduX21lbnVfaXRlbV9hY3Rpb24gPSBmdW5jdGlvbihldil7XG4gICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIG9wdGlvbnNbdGhpcy5pZC5yZXBsYWNlKGNvbnRyb2wgKyAnXycsICcnKV0uYWN0aW9uLmFwcGx5KHNlbGYsIFtlXSk7XG4gICAgICAgICAgc2VsZi5oaWRlQ29udGV4dE1lbnUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICBnb29nbGUubWFwcy5ldmVudC5jbGVhckxpc3RlbmVycyhjb250ZXh0X21lbnVfaXRlbSwgJ2NsaWNrJyk7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyT25jZShjb250ZXh0X21lbnVfaXRlbSwgJ2NsaWNrJywgYXNzaWduX21lbnVfaXRlbV9hY3Rpb24sIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBvc2l0aW9uID0gZmluZEFic29sdXRlUG9zaXRpb24uYXBwbHkodGhpcywgW3NlbGYuZWxdKSxcbiAgICAgICAgICBsZWZ0ID0gcG9zaXRpb25bMF0gKyBlLnBpeGVsLnggLSAxNSxcbiAgICAgICAgICB0b3AgPSBwb3NpdGlvblsxXSArIGUucGl4ZWwueS0gMTU7XG5cbiAgICAgIGNvbnRleHRfbWVudV9lbGVtZW50LnN0eWxlLmxlZnQgPSBsZWZ0ICsgXCJweFwiO1xuICAgICAgY29udGV4dF9tZW51X2VsZW1lbnQuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xuXG4gICAgICAvLyBjb250ZXh0X21lbnVfZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9O1xuXG4gICAgdGhpcy5idWlsZENvbnRleHRNZW51ID0gZnVuY3Rpb24oY29udHJvbCwgZSkge1xuICAgICAgaWYgKGNvbnRyb2wgPT09ICdtYXJrZXInKSB7XG4gICAgICAgIGUucGl4ZWwgPSB7fTtcblxuICAgICAgICB2YXIgb3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5PdmVybGF5VmlldygpO1xuICAgICAgICBvdmVybGF5LnNldE1hcChzZWxmLm1hcCk7XG5cbiAgICAgICAgb3ZlcmxheS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHByb2plY3Rpb24gPSBvdmVybGF5LmdldFByb2plY3Rpb24oKSxcbiAgICAgICAgICAgICAgcG9zaXRpb24gPSBlLm1hcmtlci5nZXRQb3NpdGlvbigpO1xuXG4gICAgICAgICAgZS5waXhlbCA9IHByb2plY3Rpb24uZnJvbUxhdExuZ1RvQ29udGFpbmVyUGl4ZWwocG9zaXRpb24pO1xuXG4gICAgICAgICAgYnVpbGRDb250ZXh0TWVudUhUTUwoY29udHJvbCwgZSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgYnVpbGRDb250ZXh0TWVudUhUTUwoY29udHJvbCwgZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0X21lbnVfZWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKCdnbWFwc19jb250ZXh0X21lbnUnKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY29udGV4dF9tZW51X2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICB9LCAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkIGEgY29udGV4dCBtZW51IGZvciBhIG1hcCBvciBhIG1hcmtlci5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gICAgICogKiBgY29udHJvbGAgKHN0cmluZyk6IEtpbmQgb2YgY29udHJvbCB0aGUgY29udGV4dCBtZW51IHdpbGwgYmUgYXR0YWNoZWQuIENhbiBiZSBcIm1hcFwiIG9yIFwibWFya2VyXCIuXG4gICAgICogKiBgb3B0aW9uc2AgKGFycmF5KTogQSBjb2xsZWN0aW9uIG9mIGNvbnRleHQgbWVudSBpdGVtczpcbiAgICAgKiAgICogYHRpdGxlYCAoc3RyaW5nKTogSXRlbSdzIHRpdGxlIHNob3duIGluIHRoZSBjb250ZXh0IG1lbnUuXG4gICAgICogICAqIGBuYW1lYCAoc3RyaW5nKTogSXRlbSdzIGlkZW50aWZpZXIuXG4gICAgICogICAqIGBhY3Rpb25gIChmdW5jdGlvbik6IEZ1bmN0aW9uIHRyaWdnZXJlZCBhZnRlciBzZWxlY3RpbmcgdGhlIGNvbnRleHQgbWVudSBpdGVtLlxuICAgICAqL1xuICAgIHRoaXMuc2V0Q29udGV4dE1lbnUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICB3aW5kb3cuY29udGV4dF9tZW51W3NlbGYuZWwuaWRdW29wdGlvbnMuY29udHJvbF0gPSB7fTtcblxuICAgICAgdmFyIGksXG4gICAgICAgICAgdWwgPSBkb2MuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgICAgZm9yIChpIGluIG9wdGlvbnMub3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy5vcHRpb25zLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgdmFyIG9wdGlvbiA9IG9wdGlvbnMub3B0aW9uc1tpXTtcblxuICAgICAgICAgIHdpbmRvdy5jb250ZXh0X21lbnVbc2VsZi5lbC5pZF1bb3B0aW9ucy5jb250cm9sXVtvcHRpb24ubmFtZV0gPSB7XG4gICAgICAgICAgICB0aXRsZTogb3B0aW9uLnRpdGxlLFxuICAgICAgICAgICAgYWN0aW9uOiBvcHRpb24uYWN0aW9uXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB1bC5pZCA9ICdnbWFwc19jb250ZXh0X21lbnUnO1xuICAgICAgdWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHVsLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgIHVsLnN0eWxlLm1pbldpZHRoID0gJzEwMHB4JztcbiAgICAgIHVsLnN0eWxlLmJhY2tncm91bmQgPSAnd2hpdGUnO1xuICAgICAgdWwuc3R5bGUubGlzdFN0eWxlID0gJ25vbmUnO1xuICAgICAgdWwuc3R5bGUucGFkZGluZyA9ICc4cHgnO1xuICAgICAgdWwuc3R5bGUuYm94U2hhZG93ID0gJzJweCAycHggNnB4ICNjY2MnO1xuXG4gICAgICBpZiAoIWdldEVsZW1lbnRCeUlkKCdnbWFwc19jb250ZXh0X21lbnUnKSkge1xuICAgICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZCh1bCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0X21lbnVfZWxlbWVudCA9IGdldEVsZW1lbnRCeUlkKCdnbWFwc19jb250ZXh0X21lbnUnKTtcblxuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIoY29udGV4dF9tZW51X2VsZW1lbnQsICdtb3VzZW91dCcsIGZ1bmN0aW9uKGV2KSB7XG4gICAgICAgIGlmICghZXYucmVsYXRlZFRhcmdldCB8fCAhdGhpcy5jb250YWlucyhldi5yZWxhdGVkVGFyZ2V0KSkge1xuICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjb250ZXh0X21lbnVfZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIH0sIDQwMCk7XG4gICAgICAgIH1cbiAgICAgIH0sIGZhbHNlKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSGlkZSB0aGUgY3VycmVudCBjb250ZXh0IG1lbnVcbiAgICAgKi9cbiAgICB0aGlzLmhpZGVDb250ZXh0TWVudSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbnRleHRfbWVudV9lbGVtZW50ID0gZ2V0RWxlbWVudEJ5SWQoJ2dtYXBzX2NvbnRleHRfbWVudScpO1xuXG4gICAgICBpZiAoY29udGV4dF9tZW51X2VsZW1lbnQpIHtcbiAgICAgICAgY29udGV4dF9tZW51X2VsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHNldHVwTGlzdGVuZXIgPSBmdW5jdGlvbihvYmplY3QsIG5hbWUpIHtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG9iamVjdCwgbmFtZSwgZnVuY3Rpb24oZSl7XG4gICAgICAgIGlmIChlID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGUgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9uc1tuYW1lXS5hcHBseSh0aGlzLCBbZV0pO1xuXG4gICAgICAgIHNlbGYuaGlkZUNvbnRleHRNZW51KCk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy9nb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcih0aGlzLm1hcCwgJ2lkbGUnLCB0aGlzLmhpZGVDb250ZXh0TWVudSk7XG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIodGhpcy5tYXAsICd6b29tX2NoYW5nZWQnLCB0aGlzLmhpZGVDb250ZXh0TWVudSk7XG5cbiAgICBmb3IgKHZhciBldiA9IDA7IGV2IDwgZXZlbnRzX3RoYXRfaGlkZV9jb250ZXh0X21lbnUubGVuZ3RoOyBldisrKSB7XG4gICAgICB2YXIgbmFtZSA9IGV2ZW50c190aGF0X2hpZGVfY29udGV4dF9tZW51W2V2XTtcblxuICAgICAgaWYgKG5hbWUgaW4gb3B0aW9ucykge1xuICAgICAgICBzZXR1cExpc3RlbmVyKHRoaXMubWFwLCBuYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBldiA9IDA7IGV2IDwgZXZlbnRzX3RoYXRfZG9lc250X2hpZGVfY29udGV4dF9tZW51Lmxlbmd0aDsgZXYrKykge1xuICAgICAgdmFyIG5hbWUgPSBldmVudHNfdGhhdF9kb2VzbnRfaGlkZV9jb250ZXh0X21lbnVbZXZdO1xuXG4gICAgICBpZiAobmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAgIHNldHVwTGlzdGVuZXIodGhpcy5tYXAsIG5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHRoaXMubWFwLCAncmlnaHRjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgIGlmIChvcHRpb25zLnJpZ2h0Y2xpY2spIHtcbiAgICAgICAgb3B0aW9ucy5yaWdodGNsaWNrLmFwcGx5KHRoaXMsIFtlXSk7XG4gICAgICB9XG5cbiAgICAgIGlmKHdpbmRvdy5jb250ZXh0X21lbnVbc2VsZi5lbC5pZF1bJ21hcCddICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBzZWxmLmJ1aWxkQ29udGV4dE1lbnUoJ21hcCcsIGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLyoqXG4gICAgICogVHJpZ2dlciBhIGByZXNpemVgIGV2ZW50LCB1c2VmdWwgaWYgeW91IG5lZWQgdG8gcmVwYWludCB0aGUgY3VycmVudCBtYXAgKGZvciBjaGFuZ2VzIGluIHRoZSB2aWV3cG9ydCBvciBkaXNwbGF5IC8gaGlkZSBhY3Rpb25zKS5cbiAgICAgKi9cbiAgICB0aGlzLnJlZnJlc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5tYXAsICdyZXNpemUnKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRqdXN0IHRoZSBtYXAgem9vbSB0byBpbmNsdWRlIGFsbCB0aGUgbWFya2VycyBhZGRlZCBpbiB0aGUgbWFwLlxuICAgICAqL1xuICAgIHRoaXMuZml0Wm9vbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGxhdExuZ3MgPSBbXSxcbiAgICAgICAgICBtYXJrZXJzX2xlbmd0aCA9IHRoaXMubWFya2Vycy5sZW5ndGgsXG4gICAgICAgICAgaTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IG1hcmtlcnNfbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYodHlwZW9mKHRoaXMubWFya2Vyc1tpXS52aXNpYmxlKSA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMubWFya2Vyc1tpXS52aXNpYmxlKSB7XG4gICAgICAgICAgbGF0TG5ncy5wdXNoKHRoaXMubWFya2Vyc1tpXS5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZpdExhdExuZ0JvdW5kcyhsYXRMbmdzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRqdXN0IHRoZSBtYXAgem9vbSB0byBpbmNsdWRlIGFsbCB0aGUgY29vcmRpbmF0ZXMgaW4gdGhlIGBsYXRMbmdzYCBhcnJheS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGxhdExuZ3MgLSBDb2xsZWN0aW9uIG9mIGBnb29nbGUubWFwcy5MYXRMbmdgIG9iamVjdHMuXG4gICAgICovXG4gICAgdGhpcy5maXRMYXRMbmdCb3VuZHMgPSBmdW5jdGlvbihsYXRMbmdzKSB7XG4gICAgICB2YXIgdG90YWwgPSBsYXRMbmdzLmxlbmd0aCxcbiAgICAgICAgICBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCksXG4gICAgICAgICAgaTtcblxuICAgICAgZm9yKGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICBib3VuZHMuZXh0ZW5kKGxhdExuZ3NbaV0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm1hcC5maXRCb3VuZHMoYm91bmRzKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2VudGVyIHRoZSBtYXAgdXNpbmcgdGhlIGBsYXRgIGFuZCBgbG5nYCBjb29yZGluYXRlcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBsYXQgLSBMYXRpdHVkZSBvZiB0aGUgY29vcmRpbmF0ZS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbG5nIC0gTG9uZ2l0dWRlIG9mIHRoZSBjb29yZGluYXRlLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IFtjYWxsYmFja10gLSBDYWxsYmFjayB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIG1hcCBpcyBjZW50ZXJlZC5cbiAgICAgKi9cbiAgICB0aGlzLnNldENlbnRlciA9IGZ1bmN0aW9uKGxhdCwgbG5nLCBjYWxsYmFjaykge1xuICAgICAgdGhpcy5tYXAucGFuVG8obmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZykpO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJuIHRoZSBIVE1MIGVsZW1lbnQgY29udGFpbmVyIG9mIHRoZSBtYXAuXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9IHRoZSBlbGVtZW50IGNvbnRhaW5lci5cbiAgICAgKi9cbiAgICB0aGlzLmdldEVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBJbmNyZWFzZSB0aGUgbWFwJ3Mgem9vbS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWFnbml0dWRlXSAtIFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIG1hcCB3aWxsIGJlIHpvb21lZCBpbi5cbiAgICAgKi9cbiAgICB0aGlzLnpvb21JbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlIHx8IDE7XG5cbiAgICAgIHRoaXMuem9vbSA9IHRoaXMubWFwLmdldFpvb20oKSArIHZhbHVlO1xuICAgICAgdGhpcy5tYXAuc2V0Wm9vbSh0aGlzLnpvb20pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZWNyZWFzZSB0aGUgbWFwJ3Mgem9vbS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWFnbml0dWRlXSAtIFRoZSBudW1iZXIgb2YgdGltZXMgdGhlIG1hcCB3aWxsIGJlIHpvb21lZCBvdXQuXG4gICAgICovXG4gICAgdGhpcy56b29tT3V0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgfHwgMTtcblxuICAgICAgdGhpcy56b29tID0gdGhpcy5tYXAuZ2V0Wm9vbSgpIC0gdmFsdWU7XG4gICAgICB0aGlzLm1hcC5zZXRab29tKHRoaXMuem9vbSk7XG4gICAgfTtcblxuICAgIHZhciBuYXRpdmVfbWV0aG9kcyA9IFtdLFxuICAgICAgICBtZXRob2Q7XG5cbiAgICBmb3IgKG1ldGhvZCBpbiB0aGlzLm1hcCkge1xuICAgICAgaWYgKHR5cGVvZih0aGlzLm1hcFttZXRob2RdKSA9PSAnZnVuY3Rpb24nICYmICF0aGlzW21ldGhvZF0pIHtcbiAgICAgICAgbmF0aXZlX21ldGhvZHMucHVzaChtZXRob2QpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBuYXRpdmVfbWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKGdtYXBzLCBzY29wZSwgbWV0aG9kX25hbWUpIHtcbiAgICAgICAgZ21hcHNbbWV0aG9kX25hbWVdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICByZXR1cm4gc2NvcGVbbWV0aG9kX25hbWVdLmFwcGx5KHNjb3BlLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcywgdGhpcy5tYXAsIG5hdGl2ZV9tZXRob2RzW2ldKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEdNYXBzO1xufSkodGhpcyk7XG5cbkdNYXBzLnByb3RvdHlwZS5jcmVhdGVDb250cm9sID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgY29udHJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGNvbnRyb2wuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXG4gIGlmIChvcHRpb25zLmRpc2FibGVEZWZhdWx0U3R5bGVzICE9PSB0cnVlKSB7XG4gICAgY29udHJvbC5zdHlsZS5mb250RmFtaWx5ID0gJ1JvYm90bywgQXJpYWwsIHNhbnMtc2VyaWYnO1xuICAgIGNvbnRyb2wuc3R5bGUuZm9udFNpemUgPSAnMTFweCc7XG4gICAgY29udHJvbC5zdHlsZS5ib3hTaGFkb3cgPSAncmdiYSgwLCAwLCAwLCAwLjI5ODAzOSkgMHB4IDFweCA0cHggLTFweCc7XG4gIH1cblxuICBmb3IgKHZhciBvcHRpb24gaW4gb3B0aW9ucy5zdHlsZSkge1xuICAgIGNvbnRyb2wuc3R5bGVbb3B0aW9uXSA9IG9wdGlvbnMuc3R5bGVbb3B0aW9uXTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmlkKSB7XG4gICAgY29udHJvbC5pZCA9IG9wdGlvbnMuaWQ7XG4gIH1cblxuICBpZiAob3B0aW9ucy50aXRsZSkge1xuICAgIGNvbnRyb2wudGl0bGUgPSBvcHRpb25zLnRpdGxlO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuY2xhc3Nlcykge1xuICAgIGNvbnRyb2wuY2xhc3NOYW1lID0gb3B0aW9ucy5jbGFzc2VzO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuY29udGVudCkge1xuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5jb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgY29udHJvbC5pbm5lckhUTUwgPSBvcHRpb25zLmNvbnRlbnQ7XG4gICAgfVxuICAgIGVsc2UgaWYgKG9wdGlvbnMuY29udGVudCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBjb250cm9sLmFwcGVuZENoaWxkKG9wdGlvbnMuY29udGVudCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKG9wdGlvbnMucG9zaXRpb24pIHtcbiAgICBjb250cm9sLnBvc2l0aW9uID0gZ29vZ2xlLm1hcHMuQ29udHJvbFBvc2l0aW9uW29wdGlvbnMucG9zaXRpb24udG9VcHBlckNhc2UoKV07XG4gIH1cblxuICBmb3IgKHZhciBldiBpbiBvcHRpb25zLmV2ZW50cykge1xuICAgIChmdW5jdGlvbihvYmplY3QsIG5hbWUpIHtcbiAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKG9iamVjdCwgbmFtZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgb3B0aW9ucy5ldmVudHNbbmFtZV0uYXBwbHkodGhpcywgW3RoaXNdKTtcbiAgICAgIH0pO1xuICAgIH0pKGNvbnRyb2wsIGV2KTtcbiAgfVxuXG4gIGNvbnRyb2wuaW5kZXggPSAxO1xuXG4gIHJldHVybiBjb250cm9sO1xufTtcblxuLyoqXG4gKiBBZGQgYSBjdXN0b20gY29udHJvbCB0byB0aGUgbWFwIFVJLlxuICpcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIC0gVGhlIGBvcHRpb25zYCBvYmplY3Qgc2hvdWxkIGNvbnRhaW46XG4gKiAqIGBzdHlsZWAgKG9iamVjdCk6IFRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgdGhpcyBvYmplY3Qgc2hvdWxkIGJlIHZhbGlkIENTUyBwcm9wZXJ0aWVzIGFuZCB2YWx1ZXMuXG4gKiAqIGBpZGAgKHN0cmluZyk6IFRoZSBIVE1MIGlkIGZvciB0aGUgY3VzdG9tIGNvbnRyb2wuXG4gKiAqIGBjbGFzc2VzYCAoc3RyaW5nKTogQSBzdHJpbmcgY29udGFpbmluZyBhbGwgdGhlIEhUTUwgY2xhc3NlcyBmb3IgdGhlIGN1c3RvbSBjb250cm9sLlxuICogKiBgY29udGVudGAgKHN0cmluZyBvciBIVE1MIGVsZW1lbnQpOiBUaGUgY29udGVudCBvZiB0aGUgY3VzdG9tIGNvbnRyb2wuXG4gKiAqIGBwb3NpdGlvbmAgKHN0cmluZyk6IEFueSB2YWxpZCBbYGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbmBdKGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2NvbnRyb2xzI0NvbnRyb2xQb3NpdGlvbmluZykgdmFsdWUsIGluIGxvd2VyIG9yIHVwcGVyIGNhc2UuXG4gKiAqIGBldmVudHNgIChvYmplY3QpOiBUaGUga2V5cyBvZiB0aGlzIG9iamVjdCBzaG91bGQgYmUgdmFsaWQgRE9NIGV2ZW50cy4gVGhlIHZhbHVlcyBzaG91bGQgYmUgZnVuY3Rpb25zLlxuICogKiBgZGlzYWJsZURlZmF1bHRTdHlsZXNgIChib29sZWFuKTogSWYgZmFsc2UsIHJlbW92ZXMgdGhlIGRlZmF1bHQgc3R5bGVzIGZvciB0aGUgY29udHJvbHMgbGlrZSBmb250IChmYW1pbHkgYW5kIHNpemUpLCBhbmQgYm94IHNoYWRvdy5cbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cbiAqL1xuR01hcHMucHJvdG90eXBlLmFkZENvbnRyb2wgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBjb250cm9sID0gdGhpcy5jcmVhdGVDb250cm9sKG9wdGlvbnMpO1xuXG4gIHRoaXMuY29udHJvbHMucHVzaChjb250cm9sKTtcbiAgdGhpcy5tYXAuY29udHJvbHNbY29udHJvbC5wb3NpdGlvbl0ucHVzaChjb250cm9sKTtcblxuICByZXR1cm4gY29udHJvbDtcbn07XG5cbi8qKlxuICogUmVtb3ZlIGEgY29udHJvbCBmcm9tIHRoZSBtYXAuIGBjb250cm9sYCBzaG91bGQgYmUgYSBjb250cm9sIHJldHVybmVkIGJ5IGBhZGRDb250cm9sKClgLlxuICpcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRyb2wgLSBPbmUgb2YgdGhlIGNvbnRyb2xzIHJldHVybmVkIGJ5IGBhZGRDb250cm9sKClgLlxuICogQHJldHVybnMge0hUTUxFbGVtZW50fSB0aGUgcmVtb3ZlZCBjb250cm9sLlxuICovXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlQ29udHJvbCA9IGZ1bmN0aW9uKGNvbnRyb2wpIHtcbiAgdmFyIHBvc2l0aW9uID0gbnVsbCxcbiAgICAgIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHRoaXMuY29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAodGhpcy5jb250cm9sc1tpXSA9PSBjb250cm9sKSB7XG4gICAgICBwb3NpdGlvbiA9IHRoaXMuY29udHJvbHNbaV0ucG9zaXRpb247XG4gICAgICB0aGlzLmNvbnRyb2xzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cblxuICBpZiAocG9zaXRpb24pIHtcbiAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5tYXAuY29udHJvbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjb250cm9sc0ZvclBvc2l0aW9uID0gdGhpcy5tYXAuY29udHJvbHNbY29udHJvbC5wb3NpdGlvbl07XG5cbiAgICAgIGlmIChjb250cm9sc0ZvclBvc2l0aW9uLmdldEF0KGkpID09IGNvbnRyb2wpIHtcbiAgICAgICAgY29udHJvbHNGb3JQb3NpdGlvbi5yZW1vdmVBdChpKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29udHJvbDtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5jcmVhdGVNYXJrZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmxhdCA9PSB1bmRlZmluZWQgJiYgb3B0aW9ucy5sbmcgPT0gdW5kZWZpbmVkICYmIG9wdGlvbnMucG9zaXRpb24gPT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgJ05vIGxhdGl0dWRlIG9yIGxvbmdpdHVkZSBkZWZpbmVkLic7XG4gIH1cblxuICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBkZXRhaWxzID0gb3B0aW9ucy5kZXRhaWxzLFxuICAgICAgZmVuY2VzID0gb3B0aW9ucy5mZW5jZXMsXG4gICAgICBvdXRzaWRlID0gb3B0aW9ucy5vdXRzaWRlLFxuICAgICAgYmFzZV9vcHRpb25zID0ge1xuICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhvcHRpb25zLmxhdCwgb3B0aW9ucy5sbmcpLFxuICAgICAgICBtYXA6IG51bGxcbiAgICAgIH0sXG4gICAgICBtYXJrZXJfb3B0aW9ucyA9IGV4dGVuZF9vYmplY3QoYmFzZV9vcHRpb25zLCBvcHRpb25zKTtcblxuICBkZWxldGUgbWFya2VyX29wdGlvbnMubGF0O1xuICBkZWxldGUgbWFya2VyX29wdGlvbnMubG5nO1xuICBkZWxldGUgbWFya2VyX29wdGlvbnMuZmVuY2VzO1xuICBkZWxldGUgbWFya2VyX29wdGlvbnMub3V0c2lkZTtcblxuICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcihtYXJrZXJfb3B0aW9ucyk7XG5cbiAgbWFya2VyLmZlbmNlcyA9IGZlbmNlcztcblxuICBpZiAob3B0aW9ucy5pbmZvV2luZG93KSB7XG4gICAgbWFya2VyLmluZm9XaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyhvcHRpb25zLmluZm9XaW5kb3cpO1xuXG4gICAgdmFyIGluZm9fd2luZG93X2V2ZW50cyA9IFsnY2xvc2VjbGljaycsICdjb250ZW50X2NoYW5nZWQnLCAnZG9tcmVhZHknLCAncG9zaXRpb25fY2hhbmdlZCcsICd6aW5kZXhfY2hhbmdlZCddO1xuXG4gICAgZm9yICh2YXIgZXYgPSAwOyBldiA8IGluZm9fd2luZG93X2V2ZW50cy5sZW5ndGg7IGV2KyspIHtcbiAgICAgIChmdW5jdGlvbihvYmplY3QsIG5hbWUpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaW5mb1dpbmRvd1tuYW1lXSkge1xuICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG9iamVjdCwgbmFtZSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICBvcHRpb25zLmluZm9XaW5kb3dbbmFtZV0uYXBwbHkodGhpcywgW2VdKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSkobWFya2VyLmluZm9XaW5kb3csIGluZm9fd2luZG93X2V2ZW50c1tldl0pO1xuICAgIH1cbiAgfVxuXG4gIHZhciBtYXJrZXJfZXZlbnRzID0gWydhbmltYXRpb25fY2hhbmdlZCcsICdjbGlja2FibGVfY2hhbmdlZCcsICdjdXJzb3JfY2hhbmdlZCcsICdkcmFnZ2FibGVfY2hhbmdlZCcsICdmbGF0X2NoYW5nZWQnLCAnaWNvbl9jaGFuZ2VkJywgJ3Bvc2l0aW9uX2NoYW5nZWQnLCAnc2hhZG93X2NoYW5nZWQnLCAnc2hhcGVfY2hhbmdlZCcsICd0aXRsZV9jaGFuZ2VkJywgJ3Zpc2libGVfY2hhbmdlZCcsICd6aW5kZXhfY2hhbmdlZCddO1xuXG4gIHZhciBtYXJrZXJfZXZlbnRzX3dpdGhfbW91c2UgPSBbJ2RibGNsaWNrJywgJ2RyYWcnLCAnZHJhZ2VuZCcsICdkcmFnc3RhcnQnLCAnbW91c2Vkb3duJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdtb3VzZXVwJ107XG5cbiAgZm9yICh2YXIgZXYgPSAwOyBldiA8IG1hcmtlcl9ldmVudHMubGVuZ3RoOyBldisrKSB7XG4gICAgKGZ1bmN0aW9uKG9iamVjdCwgbmFtZSkge1xuICAgICAgaWYgKG9wdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIob2JqZWN0LCBuYW1lLCBmdW5jdGlvbigpe1xuICAgICAgICAgIG9wdGlvbnNbbmFtZV0uYXBwbHkodGhpcywgW3RoaXNdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkobWFya2VyLCBtYXJrZXJfZXZlbnRzW2V2XSk7XG4gIH1cblxuICBmb3IgKHZhciBldiA9IDA7IGV2IDwgbWFya2VyX2V2ZW50c193aXRoX21vdXNlLmxlbmd0aDsgZXYrKykge1xuICAgIChmdW5jdGlvbihtYXAsIG9iamVjdCwgbmFtZSkge1xuICAgICAgaWYgKG9wdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIob2JqZWN0LCBuYW1lLCBmdW5jdGlvbihtZSl7XG4gICAgICAgICAgaWYoIW1lLnBpeGVsKXtcbiAgICAgICAgICAgIG1lLnBpeGVsID0gbWFwLmdldFByb2plY3Rpb24oKS5mcm9tTGF0TG5nVG9Qb2ludChtZS5sYXRMbmcpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgb3B0aW9uc1tuYW1lXS5hcHBseSh0aGlzLCBbbWVdKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSkodGhpcy5tYXAsIG1hcmtlciwgbWFya2VyX2V2ZW50c193aXRoX21vdXNlW2V2XSk7XG4gIH1cblxuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZGV0YWlscyA9IGRldGFpbHM7XG5cbiAgICBpZiAob3B0aW9ucy5jbGljaykge1xuICAgICAgb3B0aW9ucy5jbGljay5hcHBseSh0aGlzLCBbdGhpc10pO1xuICAgIH1cblxuICAgIGlmIChtYXJrZXIuaW5mb1dpbmRvdykge1xuICAgICAgc2VsZi5oaWRlSW5mb1dpbmRvd3MoKTtcbiAgICAgIG1hcmtlci5pbmZvV2luZG93Lm9wZW4oc2VsZi5tYXAsIG1hcmtlcik7XG4gICAgfVxuICB9KTtcblxuICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihtYXJrZXIsICdyaWdodGNsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUubWFya2VyID0gdGhpcztcblxuICAgIGlmIChvcHRpb25zLnJpZ2h0Y2xpY2spIHtcbiAgICAgIG9wdGlvbnMucmlnaHRjbGljay5hcHBseSh0aGlzLCBbZV0pO1xuICAgIH1cblxuICAgIGlmICh3aW5kb3cuY29udGV4dF9tZW51W3NlbGYuZWwuaWRdWydtYXJrZXInXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHNlbGYuYnVpbGRDb250ZXh0TWVudSgnbWFya2VyJywgZSk7XG4gICAgfVxuICB9KTtcblxuICBpZiAobWFya2VyLmZlbmNlcykge1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2RyYWdlbmQnLCBmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuY2hlY2tNYXJrZXJHZW9mZW5jZShtYXJrZXIsIGZ1bmN0aW9uKG0sIGYpIHtcbiAgICAgICAgb3V0c2lkZShtLCBmKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5hZGRNYXJrZXIgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBtYXJrZXI7XG4gIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2dtX2FjY2Vzc29yc18nKSkge1xuICAgIC8vIE5hdGl2ZSBnb29nbGUubWFwcy5NYXJrZXIgb2JqZWN0XG4gICAgbWFya2VyID0gb3B0aW9ucztcbiAgfVxuICBlbHNlIHtcbiAgICBpZiAoKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2xhdCcpICYmIG9wdGlvbnMuaGFzT3duUHJvcGVydHkoJ2xuZycpKSB8fCBvcHRpb25zLnBvc2l0aW9uKSB7XG4gICAgICBtYXJrZXIgPSB0aGlzLmNyZWF0ZU1hcmtlcihvcHRpb25zKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyAnTm8gbGF0aXR1ZGUgb3IgbG9uZ2l0dWRlIGRlZmluZWQuJztcbiAgICB9XG4gIH1cblxuICBtYXJrZXIuc2V0TWFwKHRoaXMubWFwKTtcblxuICBpZih0aGlzLm1hcmtlckNsdXN0ZXJlcikge1xuICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLmFkZE1hcmtlcihtYXJrZXIpO1xuICB9XG5cbiAgdGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcblxuICBHTWFwcy5maXJlKCdtYXJrZXJfYWRkZWQnLCBtYXJrZXIsIHRoaXMpO1xuXG4gIHJldHVybiBtYXJrZXI7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUuYWRkTWFya2VycyA9IGZ1bmN0aW9uKGFycmF5KSB7XG4gIGZvciAodmFyIGkgPSAwLCBtYXJrZXI7IG1hcmtlcj1hcnJheVtpXTsgaSsrKSB7XG4gICAgdGhpcy5hZGRNYXJrZXIobWFya2VyKTtcbiAgfVxuXG4gIHJldHVybiB0aGlzLm1hcmtlcnM7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUuaGlkZUluZm9XaW5kb3dzID0gZnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIGkgPSAwLCBtYXJrZXI7IG1hcmtlciA9IHRoaXMubWFya2Vyc1tpXTsgaSsrKXtcbiAgICBpZiAobWFya2VyLmluZm9XaW5kb3cpIHtcbiAgICAgIG1hcmtlci5pbmZvV2luZG93LmNsb3NlKCk7XG4gICAgfVxuICB9XG59O1xuXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlTWFya2VyID0gZnVuY3Rpb24obWFya2VyKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMubWFya2Vyc1tpXSA9PT0gbWFya2VyKSB7XG4gICAgICB0aGlzLm1hcmtlcnNbaV0uc2V0TWFwKG51bGwpO1xuICAgICAgdGhpcy5tYXJrZXJzLnNwbGljZShpLCAxKTtcblxuICAgICAgaWYodGhpcy5tYXJrZXJDbHVzdGVyZXIpIHtcbiAgICAgICAgdGhpcy5tYXJrZXJDbHVzdGVyZXIucmVtb3ZlTWFya2VyKG1hcmtlcik7XG4gICAgICB9XG5cbiAgICAgIEdNYXBzLmZpcmUoJ21hcmtlcl9yZW1vdmVkJywgbWFya2VyLCB0aGlzKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1hcmtlcjtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVNYXJrZXJzID0gZnVuY3Rpb24gKGNvbGxlY3Rpb24pIHtcbiAgdmFyIG5ld19tYXJrZXJzID0gW107XG5cbiAgaWYgKHR5cGVvZiBjb2xsZWN0aW9uID09ICd1bmRlZmluZWQnKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBtYXJrZXIgPSB0aGlzLm1hcmtlcnNbaV07XG4gICAgICBtYXJrZXIuc2V0TWFwKG51bGwpO1xuXG4gICAgICBHTWFwcy5maXJlKCdtYXJrZXJfcmVtb3ZlZCcsIG1hcmtlciwgdGhpcyk7XG4gICAgfVxuXG4gICAgaWYodGhpcy5tYXJrZXJDbHVzdGVyZXIgJiYgdGhpcy5tYXJrZXJDbHVzdGVyZXIuY2xlYXJNYXJrZXJzKSB7XG4gICAgICB0aGlzLm1hcmtlckNsdXN0ZXJlci5jbGVhck1hcmtlcnMoKTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcmtlcnMgPSBuZXdfbWFya2VycztcbiAgfVxuICBlbHNlIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMubWFya2Vycy5pbmRleE9mKGNvbGxlY3Rpb25baV0pO1xuXG4gICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICB2YXIgbWFya2VyID0gdGhpcy5tYXJrZXJzW2luZGV4XTtcbiAgICAgICAgbWFya2VyLnNldE1hcChudWxsKTtcblxuICAgICAgICBpZih0aGlzLm1hcmtlckNsdXN0ZXJlcikge1xuICAgICAgICAgIHRoaXMubWFya2VyQ2x1c3RlcmVyLnJlbW92ZU1hcmtlcihtYXJrZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgR01hcHMuZmlyZSgnbWFya2VyX3JlbW92ZWQnLCBtYXJrZXIsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5tYXJrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbWFya2VyID0gdGhpcy5tYXJrZXJzW2ldO1xuICAgICAgaWYgKG1hcmtlci5nZXRNYXAoKSAhPSBudWxsKSB7XG4gICAgICAgIG5ld19tYXJrZXJzLnB1c2gobWFya2VyKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1hcmtlcnMgPSBuZXdfbWFya2VycztcbiAgfVxufTtcblxuR01hcHMucHJvdG90eXBlLmRyYXdPdmVybGF5ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgb3ZlcmxheSA9IG5ldyBnb29nbGUubWFwcy5PdmVybGF5VmlldygpLFxuICAgICAgYXV0b19zaG93ID0gdHJ1ZTtcblxuICBvdmVybGF5LnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgaWYgKG9wdGlvbnMuYXV0b19zaG93ICE9IG51bGwpIHtcbiAgICBhdXRvX3Nob3cgPSBvcHRpb25zLmF1dG9fc2hvdztcbiAgfVxuXG4gIG92ZXJsYXkub25BZGQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGVsLnN0eWxlLmJvcmRlclN0eWxlID0gXCJub25lXCI7XG4gICAgZWwuc3R5bGUuYm9yZGVyV2lkdGggPSBcIjBweFwiO1xuICAgIGVsLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIGVsLnN0eWxlLnpJbmRleCA9IDEwMDtcbiAgICBlbC5pbm5lckhUTUwgPSBvcHRpb25zLmNvbnRlbnQ7XG5cbiAgICBvdmVybGF5LmVsID0gZWw7XG5cbiAgICBpZiAoIW9wdGlvbnMubGF5ZXIpIHtcbiAgICAgIG9wdGlvbnMubGF5ZXIgPSAnb3ZlcmxheUxheWVyJztcbiAgICB9XG4gICAgXG4gICAgdmFyIHBhbmVzID0gdGhpcy5nZXRQYW5lcygpLFxuICAgICAgICBvdmVybGF5TGF5ZXIgPSBwYW5lc1tvcHRpb25zLmxheWVyXSxcbiAgICAgICAgc3RvcF9vdmVybGF5X2V2ZW50cyA9IFsnY29udGV4dG1lbnUnLCAnRE9NTW91c2VTY3JvbGwnLCAnZGJsY2xpY2snLCAnbW91c2Vkb3duJ107XG5cbiAgICBvdmVybGF5TGF5ZXIuYXBwZW5kQ2hpbGQoZWwpO1xuXG4gICAgZm9yICh2YXIgZXYgPSAwOyBldiA8IHN0b3Bfb3ZlcmxheV9ldmVudHMubGVuZ3RoOyBldisrKSB7XG4gICAgICAoZnVuY3Rpb24ob2JqZWN0LCBuYW1lKSB7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZERvbUxpc3RlbmVyKG9iamVjdCwgbmFtZSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtc2llJykgIT0gLTEgJiYgZG9jdW1lbnQuYWxsKSB7XG4gICAgICAgICAgICBlLmNhbmNlbEJ1YmJsZSA9IHRydWU7XG4gICAgICAgICAgICBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSkoZWwsIHN0b3Bfb3ZlcmxheV9ldmVudHNbZXZdKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jbGljaykge1xuICAgICAgcGFuZXMub3ZlcmxheU1vdXNlVGFyZ2V0LmFwcGVuZENoaWxkKG92ZXJsYXkuZWwpO1xuICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkRG9tTGlzdGVuZXIob3ZlcmxheS5lbCwgJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIG9wdGlvbnMuY2xpY2suYXBwbHkob3ZlcmxheSwgW292ZXJsYXldKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcywgJ3JlYWR5Jyk7XG4gIH07XG5cbiAgb3ZlcmxheS5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByb2plY3Rpb24gPSB0aGlzLmdldFByb2plY3Rpb24oKSxcbiAgICAgICAgcGl4ZWwgPSBwcm9qZWN0aW9uLmZyb21MYXRMbmdUb0RpdlBpeGVsKG5ldyBnb29nbGUubWFwcy5MYXRMbmcob3B0aW9ucy5sYXQsIG9wdGlvbnMubG5nKSk7XG5cbiAgICBvcHRpb25zLmhvcml6b250YWxPZmZzZXQgPSBvcHRpb25zLmhvcml6b250YWxPZmZzZXQgfHwgMDtcbiAgICBvcHRpb25zLnZlcnRpY2FsT2Zmc2V0ID0gb3B0aW9ucy52ZXJ0aWNhbE9mZnNldCB8fCAwO1xuXG4gICAgdmFyIGVsID0gb3ZlcmxheS5lbCxcbiAgICAgICAgY29udGVudCA9IGVsLmNoaWxkcmVuWzBdLFxuICAgICAgICBjb250ZW50X2hlaWdodCA9IGNvbnRlbnQuY2xpZW50SGVpZ2h0LFxuICAgICAgICBjb250ZW50X3dpZHRoID0gY29udGVudC5jbGllbnRXaWR0aDtcblxuICAgIHN3aXRjaCAob3B0aW9ucy52ZXJ0aWNhbEFsaWduKSB7XG4gICAgICBjYXNlICd0b3AnOlxuICAgICAgICBlbC5zdHlsZS50b3AgPSAocGl4ZWwueSAtIGNvbnRlbnRfaGVpZ2h0ICsgb3B0aW9ucy52ZXJ0aWNhbE9mZnNldCkgKyAncHgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlICdtaWRkbGUnOlxuICAgICAgICBlbC5zdHlsZS50b3AgPSAocGl4ZWwueSAtIChjb250ZW50X2hlaWdodCAvIDIpICsgb3B0aW9ucy52ZXJ0aWNhbE9mZnNldCkgKyAncHgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGVsLnN0eWxlLnRvcCA9IChwaXhlbC55ICsgb3B0aW9ucy52ZXJ0aWNhbE9mZnNldCkgKyAncHgnO1xuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKG9wdGlvbnMuaG9yaXpvbnRhbEFsaWduKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgZWwuc3R5bGUubGVmdCA9IChwaXhlbC54IC0gY29udGVudF93aWR0aCArIG9wdGlvbnMuaG9yaXpvbnRhbE9mZnNldCkgKyAncHgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICBjYXNlICdjZW50ZXInOlxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gKHBpeGVsLnggLSAoY29udGVudF93aWR0aCAvIDIpICsgb3B0aW9ucy5ob3Jpem9udGFsT2Zmc2V0KSArICdweCc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBlbC5zdHlsZS5sZWZ0ID0gKHBpeGVsLnggKyBvcHRpb25zLmhvcml6b250YWxPZmZzZXQpICsgJ3B4JztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgZWwuc3R5bGUuZGlzcGxheSA9IGF1dG9fc2hvdyA/ICdibG9jaycgOiAnbm9uZSc7XG5cbiAgICBpZiAoIWF1dG9fc2hvdykge1xuICAgICAgb3B0aW9ucy5zaG93LmFwcGx5KHRoaXMsIFtlbF0pO1xuICAgIH1cbiAgfTtcblxuICBvdmVybGF5Lm9uUmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsID0gb3ZlcmxheS5lbDtcblxuICAgIGlmIChvcHRpb25zLnJlbW92ZSkge1xuICAgICAgb3B0aW9ucy5yZW1vdmUuYXBwbHkodGhpcywgW2VsXSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgb3ZlcmxheS5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG92ZXJsYXkuZWwpO1xuICAgICAgb3ZlcmxheS5lbCA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIHRoaXMub3ZlcmxheXMucHVzaChvdmVybGF5KTtcbiAgcmV0dXJuIG92ZXJsYXk7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlT3ZlcmxheSA9IGZ1bmN0aW9uKG92ZXJsYXkpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm92ZXJsYXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMub3ZlcmxheXNbaV0gPT09IG92ZXJsYXkpIHtcbiAgICAgIHRoaXMub3ZlcmxheXNbaV0uc2V0TWFwKG51bGwpO1xuICAgICAgdGhpcy5vdmVybGF5cy5zcGxpY2UoaSwgMSk7XG5cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufTtcblxuR01hcHMucHJvdG90eXBlLnJlbW92ZU92ZXJsYXlzID0gZnVuY3Rpb24oKSB7XG4gIGZvciAodmFyIGkgPSAwLCBpdGVtOyBpdGVtID0gdGhpcy5vdmVybGF5c1tpXTsgaSsrKSB7XG4gICAgaXRlbS5zZXRNYXAobnVsbCk7XG4gIH1cblxuICB0aGlzLm92ZXJsYXlzID0gW107XG59O1xuXG5HTWFwcy5wcm90b3R5cGUuZHJhd1BvbHlsaW5lID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgcGF0aCA9IFtdLFxuICAgICAgcG9pbnRzID0gb3B0aW9ucy5wYXRoO1xuXG4gIGlmIChwb2ludHMubGVuZ3RoKSB7XG4gICAgaWYgKHBvaW50c1swXVswXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXRoID0gcG9pbnRzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsYXRsbmc7IGxhdGxuZyA9IHBvaW50c1tpXTsgaSsrKSB7XG4gICAgICAgIHBhdGgucHVzaChuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKGxhdGxuZ1swXSwgbGF0bG5nWzFdKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIHBvbHlsaW5lX29wdGlvbnMgPSB7XG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgICBwYXRoOiBwYXRoLFxuICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0LFxuICAgIGdlb2Rlc2ljOiBvcHRpb25zLmdlb2Rlc2ljLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBlZGl0YWJsZTogZmFsc2UsXG4gICAgdmlzaWJsZTogdHJ1ZVxuICB9O1xuXG4gIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KFwiY2xpY2thYmxlXCIpKSB7XG4gICAgcG9seWxpbmVfb3B0aW9ucy5jbGlja2FibGUgPSBvcHRpb25zLmNsaWNrYWJsZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KFwiZWRpdGFibGVcIikpIHtcbiAgICBwb2x5bGluZV9vcHRpb25zLmVkaXRhYmxlID0gb3B0aW9ucy5lZGl0YWJsZTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KFwiaWNvbnNcIikpIHtcbiAgICBwb2x5bGluZV9vcHRpb25zLmljb25zID0gb3B0aW9ucy5pY29ucztcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KFwiekluZGV4XCIpKSB7XG4gICAgcG9seWxpbmVfb3B0aW9ucy56SW5kZXggPSBvcHRpb25zLnpJbmRleDtcbiAgfVxuXG4gIHZhciBwb2x5bGluZSA9IG5ldyBnb29nbGUubWFwcy5Qb2x5bGluZShwb2x5bGluZV9vcHRpb25zKTtcblxuICB2YXIgcG9seWxpbmVfZXZlbnRzID0gWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdtb3VzZXVwJywgJ3JpZ2h0Y2xpY2snXTtcblxuICBmb3IgKHZhciBldiA9IDA7IGV2IDwgcG9seWxpbmVfZXZlbnRzLmxlbmd0aDsgZXYrKykge1xuICAgIChmdW5jdGlvbihvYmplY3QsIG5hbWUpIHtcbiAgICAgIGlmIChvcHRpb25zW25hbWVdKSB7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG9iamVjdCwgbmFtZSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgb3B0aW9uc1tuYW1lXS5hcHBseSh0aGlzLCBbZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KShwb2x5bGluZSwgcG9seWxpbmVfZXZlbnRzW2V2XSk7XG4gIH1cblxuICB0aGlzLnBvbHlsaW5lcy5wdXNoKHBvbHlsaW5lKTtcblxuICBHTWFwcy5maXJlKCdwb2x5bGluZV9hZGRlZCcsIHBvbHlsaW5lLCB0aGlzKTtcblxuICByZXR1cm4gcG9seWxpbmU7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWxpbmUgPSBmdW5jdGlvbihwb2x5bGluZSkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucG9seWxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRoaXMucG9seWxpbmVzW2ldID09PSBwb2x5bGluZSkge1xuICAgICAgdGhpcy5wb2x5bGluZXNbaV0uc2V0TWFwKG51bGwpO1xuICAgICAgdGhpcy5wb2x5bGluZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICBHTWFwcy5maXJlKCdwb2x5bGluZV9yZW1vdmVkJywgcG9seWxpbmUsIHRoaXMpO1xuXG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbn07XG5cbkdNYXBzLnByb3RvdHlwZS5yZW1vdmVQb2x5bGluZXMgPSBmdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGl0ZW07IGl0ZW0gPSB0aGlzLnBvbHlsaW5lc1tpXTsgaSsrKSB7XG4gICAgaXRlbS5zZXRNYXAobnVsbCk7XG4gIH1cblxuICB0aGlzLnBvbHlsaW5lcyA9IFtdO1xufTtcblxuR01hcHMucHJvdG90eXBlLmRyYXdDaXJjbGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSAgZXh0ZW5kX29iamVjdCh7XG4gICAgbWFwOiB0aGlzLm1hcCxcbiAgICBjZW50ZXI6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcob3B0aW9ucy5sYXQsIG9wdGlvbnMubG5nKVxuICB9LCBvcHRpb25zKTtcblxuICBkZWxldGUgb3B0aW9ucy5sYXQ7XG4gIGRlbGV0ZSBvcHRpb25zLmxuZztcblxuICB2YXIgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5DaXJjbGUob3B0aW9ucyksXG4gICAgICBwb2x5Z29uX2V2ZW50cyA9IFsnY2xpY2snLCAnZGJsY2xpY2snLCAnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZW91dCcsICdtb3VzZW92ZXInLCAnbW91c2V1cCcsICdyaWdodGNsaWNrJ107XG5cbiAgZm9yICh2YXIgZXYgPSAwOyBldiA8IHBvbHlnb25fZXZlbnRzLmxlbmd0aDsgZXYrKykge1xuICAgIChmdW5jdGlvbihvYmplY3QsIG5hbWUpIHtcbiAgICAgIGlmIChvcHRpb25zW25hbWVdKSB7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG9iamVjdCwgbmFtZSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgb3B0aW9uc1tuYW1lXS5hcHBseSh0aGlzLCBbZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KShwb2x5Z29uLCBwb2x5Z29uX2V2ZW50c1tldl0pO1xuICB9XG5cbiAgdGhpcy5wb2x5Z29ucy5wdXNoKHBvbHlnb24pO1xuXG4gIHJldHVybiBwb2x5Z29uO1xufTtcblxuR01hcHMucHJvdG90eXBlLmRyYXdSZWN0YW5nbGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBleHRlbmRfb2JqZWN0KHtcbiAgICBtYXA6IHRoaXMubWFwXG4gIH0sIG9wdGlvbnMpO1xuXG4gIHZhciBsYXRMbmdCb3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKFxuICAgIG5ldyBnb29nbGUubWFwcy5MYXRMbmcob3B0aW9ucy5ib3VuZHNbMF1bMF0sIG9wdGlvbnMuYm91bmRzWzBdWzFdKSxcbiAgICBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG9wdGlvbnMuYm91bmRzWzFdWzBdLCBvcHRpb25zLmJvdW5kc1sxXVsxXSlcbiAgKTtcblxuICBvcHRpb25zLmJvdW5kcyA9IGxhdExuZ0JvdW5kcztcblxuICB2YXIgcG9seWdvbiA9IG5ldyBnb29nbGUubWFwcy5SZWN0YW5nbGUob3B0aW9ucyksXG4gICAgICBwb2x5Z29uX2V2ZW50cyA9IFsnY2xpY2snLCAnZGJsY2xpY2snLCAnbW91c2Vkb3duJywgJ21vdXNlbW92ZScsICdtb3VzZW91dCcsICdtb3VzZW92ZXInLCAnbW91c2V1cCcsICdyaWdodGNsaWNrJ107XG5cbiAgZm9yICh2YXIgZXYgPSAwOyBldiA8IHBvbHlnb25fZXZlbnRzLmxlbmd0aDsgZXYrKykge1xuICAgIChmdW5jdGlvbihvYmplY3QsIG5hbWUpIHtcbiAgICAgIGlmIChvcHRpb25zW25hbWVdKSB7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG9iamVjdCwgbmFtZSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgb3B0aW9uc1tuYW1lXS5hcHBseSh0aGlzLCBbZV0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KShwb2x5Z29uLCBwb2x5Z29uX2V2ZW50c1tldl0pO1xuICB9XG5cbiAgdGhpcy5wb2x5Z29ucy5wdXNoKHBvbHlnb24pO1xuXG4gIHJldHVybiBwb2x5Z29uO1xufTtcblxuR01hcHMucHJvdG90eXBlLmRyYXdQb2x5Z29uID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgdXNlR2VvSlNPTiA9IGZhbHNlO1xuXG4gIGlmKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoXCJ1c2VHZW9KU09OXCIpKSB7XG4gICAgdXNlR2VvSlNPTiA9IG9wdGlvbnMudXNlR2VvSlNPTjtcbiAgfVxuXG4gIGRlbGV0ZSBvcHRpb25zLnVzZUdlb0pTT047XG5cbiAgb3B0aW9ucyA9IGV4dGVuZF9vYmplY3Qoe1xuICAgIG1hcDogdGhpcy5tYXBcbiAgfSwgb3B0aW9ucyk7XG5cbiAgaWYgKHVzZUdlb0pTT04gPT0gZmFsc2UpIHtcbiAgICBvcHRpb25zLnBhdGhzID0gW29wdGlvbnMucGF0aHMuc2xpY2UoMCldO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMucGF0aHMubGVuZ3RoID4gMCkge1xuICAgIGlmIChvcHRpb25zLnBhdGhzWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgIG9wdGlvbnMucGF0aHMgPSBhcnJheV9mbGF0KGFycmF5X21hcChvcHRpb25zLnBhdGhzLCBhcnJheVRvTGF0TG5nLCB1c2VHZW9KU09OKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHBvbHlnb24gPSBuZXcgZ29vZ2xlLm1hcHMuUG9seWdvbihvcHRpb25zKSxcbiAgICAgIHBvbHlnb25fZXZlbnRzID0gWydjbGljaycsICdkYmxjbGljaycsICdtb3VzZWRvd24nLCAnbW91c2Vtb3ZlJywgJ21vdXNlb3V0JywgJ21vdXNlb3ZlcicsICdtb3VzZXVwJywgJ3JpZ2h0Y2xpY2snXTtcblxuICBmb3IgKHZhciBldiA9IDA7IGV2IDwgcG9seWdvbl9ldmVudHMubGVuZ3RoOyBldisrKSB7XG4gICAgKGZ1bmN0aW9uKG9iamVjdCwgbmFtZSkge1xuICAgICAgaWYgKG9wdGlvbnNbbmFtZV0pIHtcbiAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIob2JqZWN0LCBuYW1lLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICBvcHRpb25zW25hbWVdLmFwcGx5KHRoaXMsIFtlXSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKHBvbHlnb24sIHBvbHlnb25fZXZlbnRzW2V2XSk7XG4gIH1cblxuICB0aGlzLnBvbHlnb25zLnB1c2gocG9seWdvbik7XG5cbiAgR01hcHMuZmlyZSgncG9seWdvbl9hZGRlZCcsIHBvbHlnb24sIHRoaXMpO1xuXG4gIHJldHVybiBwb2x5Z29uO1xufTtcblxuR01hcHMucHJvdG90eXBlLnJlbW92ZVBvbHlnb24gPSBmdW5jdGlvbihwb2x5Z29uKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wb2x5Z29ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0aGlzLnBvbHlnb25zW2ldID09PSBwb2x5Z29uKSB7XG4gICAgICB0aGlzLnBvbHlnb25zW2ldLnNldE1hcChudWxsKTtcbiAgICAgIHRoaXMucG9seWdvbnMuc3BsaWNlKGksIDEpO1xuXG4gICAgICBHTWFwcy5maXJlKCdwb2x5Z29uX3JlbW92ZWQnLCBwb2x5Z29uLCB0aGlzKTtcblxuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59O1xuXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWdvbnMgPSBmdW5jdGlvbigpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGl0ZW07IGl0ZW0gPSB0aGlzLnBvbHlnb25zW2ldOyBpKyspIHtcbiAgICBpdGVtLnNldE1hcChudWxsKTtcbiAgfVxuXG4gIHRoaXMucG9seWdvbnMgPSBbXTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5nZXRGcm9tRnVzaW9uVGFibGVzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgZXZlbnRzID0gb3B0aW9ucy5ldmVudHM7XG5cbiAgZGVsZXRlIG9wdGlvbnMuZXZlbnRzO1xuXG4gIHZhciBmdXNpb25fdGFibGVzX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMuRnVzaW9uVGFibGVzTGF5ZXIoZnVzaW9uX3RhYmxlc19vcHRpb25zKTtcblxuICBmb3IgKHZhciBldiBpbiBldmVudHMpIHtcbiAgICAoZnVuY3Rpb24ob2JqZWN0LCBuYW1lKSB7XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihvYmplY3QsIG5hbWUsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZXZlbnRzW25hbWVdLmFwcGx5KHRoaXMsIFtlXSk7XG4gICAgICB9KTtcbiAgICB9KShsYXllciwgZXYpO1xuICB9XG5cbiAgdGhpcy5sYXllcnMucHVzaChsYXllcik7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuR01hcHMucHJvdG90eXBlLmxvYWRGcm9tRnVzaW9uVGFibGVzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgbGF5ZXIgPSB0aGlzLmdldEZyb21GdXNpb25UYWJsZXMob3B0aW9ucyk7XG4gIGxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuR01hcHMucHJvdG90eXBlLmdldEZyb21LTUwgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciB1cmwgPSBvcHRpb25zLnVybCxcbiAgICAgIGV2ZW50cyA9IG9wdGlvbnMuZXZlbnRzO1xuXG4gIGRlbGV0ZSBvcHRpb25zLnVybDtcbiAgZGVsZXRlIG9wdGlvbnMuZXZlbnRzO1xuXG4gIHZhciBrbWxfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBsYXllciA9IG5ldyBnb29nbGUubWFwcy5LbWxMYXllcih1cmwsIGttbF9vcHRpb25zKTtcblxuICBmb3IgKHZhciBldiBpbiBldmVudHMpIHtcbiAgICAoZnVuY3Rpb24ob2JqZWN0LCBuYW1lKSB7XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihvYmplY3QsIG5hbWUsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZXZlbnRzW25hbWVdLmFwcGx5KHRoaXMsIFtlXSk7XG4gICAgICB9KTtcbiAgICB9KShsYXllciwgZXYpO1xuICB9XG5cbiAgdGhpcy5sYXllcnMucHVzaChsYXllcik7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuR01hcHMucHJvdG90eXBlLmxvYWRGcm9tS01MID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgbGF5ZXIgPSB0aGlzLmdldEZyb21LTUwob3B0aW9ucyk7XG4gIGxheWVyLnNldE1hcCh0aGlzLm1hcCk7XG5cbiAgcmV0dXJuIGxheWVyO1xufTtcblxuR01hcHMucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24obGF5ZXJOYW1lLCBvcHRpb25zKSB7XG4gIC8vdmFyIGRlZmF1bHRfbGF5ZXJzID0gWyd3ZWF0aGVyJywgJ2Nsb3VkcycsICd0cmFmZmljJywgJ3RyYW5zaXQnLCAnYmljeWNsaW5nJywgJ3Bhbm9yYW1pbycsICdwbGFjZXMnXTtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciBsYXllcjtcblxuICBzd2l0Y2gobGF5ZXJOYW1lKSB7XG4gICAgY2FzZSAnd2VhdGhlcic6IHRoaXMuc2luZ2xlTGF5ZXJzLndlYXRoZXIgPSBsYXllciA9IG5ldyBnb29nbGUubWFwcy53ZWF0aGVyLldlYXRoZXJMYXllcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY2xvdWRzJzogdGhpcy5zaW5nbGVMYXllcnMuY2xvdWRzID0gbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMud2VhdGhlci5DbG91ZExheWVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0cmFmZmljJzogdGhpcy5zaW5nbGVMYXllcnMudHJhZmZpYyA9IGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLlRyYWZmaWNMYXllcigpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAndHJhbnNpdCc6IHRoaXMuc2luZ2xlTGF5ZXJzLnRyYW5zaXQgPSBsYXllciA9IG5ldyBnb29nbGUubWFwcy5UcmFuc2l0TGF5ZXIoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ2JpY3ljbGluZyc6IHRoaXMuc2luZ2xlTGF5ZXJzLmJpY3ljbGluZyA9IGxheWVyID0gbmV3IGdvb2dsZS5tYXBzLkJpY3ljbGluZ0xheWVyKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdwYW5vcmFtaW8nOlxuICAgICAgICB0aGlzLnNpbmdsZUxheWVycy5wYW5vcmFtaW8gPSBsYXllciA9IG5ldyBnb29nbGUubWFwcy5wYW5vcmFtaW8uUGFub3JhbWlvTGF5ZXIoKTtcbiAgICAgICAgbGF5ZXIuc2V0VGFnKG9wdGlvbnMuZmlsdGVyKTtcbiAgICAgICAgZGVsZXRlIG9wdGlvbnMuZmlsdGVyO1xuXG4gICAgICAgIC8vY2xpY2sgZXZlbnRcbiAgICAgICAgaWYgKG9wdGlvbnMuY2xpY2spIHtcbiAgICAgICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihsYXllciwgJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIG9wdGlvbnMuY2xpY2soZXZlbnQpO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuY2xpY2s7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGxhY2VzJzpcbiAgICAgICAgdGhpcy5zaW5nbGVMYXllcnMucGxhY2VzID0gbGF5ZXIgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLlBsYWNlc1NlcnZpY2UodGhpcy5tYXApO1xuXG4gICAgICAgIC8vc2VhcmNoLCBuZWFyYnlTZWFyY2gsIHJhZGFyU2VhcmNoIGNhbGxiYWNrLCBCb3RoIGFyZSB0aGUgc2FtZVxuICAgICAgICBpZiAob3B0aW9ucy5zZWFyY2ggfHwgb3B0aW9ucy5uZWFyYnlTZWFyY2ggfHwgb3B0aW9ucy5yYWRhclNlYXJjaCkge1xuICAgICAgICAgIHZhciBwbGFjZVNlYXJjaFJlcXVlc3QgID0ge1xuICAgICAgICAgICAgYm91bmRzIDogb3B0aW9ucy5ib3VuZHMgfHwgbnVsbCxcbiAgICAgICAgICAgIGtleXdvcmQgOiBvcHRpb25zLmtleXdvcmQgfHwgbnVsbCxcbiAgICAgICAgICAgIGxvY2F0aW9uIDogb3B0aW9ucy5sb2NhdGlvbiB8fCBudWxsLFxuICAgICAgICAgICAgbmFtZSA6IG9wdGlvbnMubmFtZSB8fCBudWxsLFxuICAgICAgICAgICAgcmFkaXVzIDogb3B0aW9ucy5yYWRpdXMgfHwgbnVsbCxcbiAgICAgICAgICAgIHJhbmtCeSA6IG9wdGlvbnMucmFua0J5IHx8IG51bGwsXG4gICAgICAgICAgICB0eXBlcyA6IG9wdGlvbnMudHlwZXMgfHwgbnVsbFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5yYWRhclNlYXJjaCkge1xuICAgICAgICAgICAgbGF5ZXIucmFkYXJTZWFyY2gocGxhY2VTZWFyY2hSZXF1ZXN0LCBvcHRpb25zLnJhZGFyU2VhcmNoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5zZWFyY2gpIHtcbiAgICAgICAgICAgIGxheWVyLnNlYXJjaChwbGFjZVNlYXJjaFJlcXVlc3QsIG9wdGlvbnMuc2VhcmNoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5uZWFyYnlTZWFyY2gpIHtcbiAgICAgICAgICAgIGxheWVyLm5lYXJieVNlYXJjaChwbGFjZVNlYXJjaFJlcXVlc3QsIG9wdGlvbnMubmVhcmJ5U2VhcmNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL3RleHRTZWFyY2ggY2FsbGJhY2tcbiAgICAgICAgaWYgKG9wdGlvbnMudGV4dFNlYXJjaCkge1xuICAgICAgICAgIHZhciB0ZXh0U2VhcmNoUmVxdWVzdCAgPSB7XG4gICAgICAgICAgICBib3VuZHMgOiBvcHRpb25zLmJvdW5kcyB8fCBudWxsLFxuICAgICAgICAgICAgbG9jYXRpb24gOiBvcHRpb25zLmxvY2F0aW9uIHx8IG51bGwsXG4gICAgICAgICAgICBxdWVyeSA6IG9wdGlvbnMucXVlcnkgfHwgbnVsbCxcbiAgICAgICAgICAgIHJhZGl1cyA6IG9wdGlvbnMucmFkaXVzIHx8IG51bGxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgbGF5ZXIudGV4dFNlYXJjaCh0ZXh0U2VhcmNoUmVxdWVzdCwgb3B0aW9ucy50ZXh0U2VhcmNoKTtcbiAgICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxuICBpZiAobGF5ZXIgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0eXBlb2YgbGF5ZXIuc2V0T3B0aW9ucyA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsYXllci5zZXRPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGxheWVyLnNldE1hcCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICBsYXllci5zZXRNYXAodGhpcy5tYXApO1xuICAgIH1cblxuICAgIHJldHVybiBsYXllcjtcbiAgfVxufTtcblxuR01hcHMucHJvdG90eXBlLnJlbW92ZUxheWVyID0gZnVuY3Rpb24obGF5ZXIpIHtcbiAgaWYgKHR5cGVvZihsYXllcikgPT0gXCJzdHJpbmdcIiAmJiB0aGlzLnNpbmdsZUxheWVyc1tsYXllcl0gIT09IHVuZGVmaW5lZCkge1xuICAgICB0aGlzLnNpbmdsZUxheWVyc1tsYXllcl0uc2V0TWFwKG51bGwpO1xuXG4gICAgIGRlbGV0ZSB0aGlzLnNpbmdsZUxheWVyc1tsYXllcl07XG4gIH1cbiAgZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxheWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMubGF5ZXJzW2ldID09PSBsYXllcikge1xuICAgICAgICB0aGlzLmxheWVyc1tpXS5zZXRNYXAobnVsbCk7XG4gICAgICAgIHRoaXMubGF5ZXJzLnNwbGljZShpLCAxKTtcblxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciB0cmF2ZWxNb2RlLCB1bml0U3lzdGVtO1xuXG5HTWFwcy5wcm90b3R5cGUuZ2V0Um91dGVzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBzd2l0Y2ggKG9wdGlvbnMudHJhdmVsTW9kZSkge1xuICAgIGNhc2UgJ2JpY3ljbGluZyc6XG4gICAgICB0cmF2ZWxNb2RlID0gZ29vZ2xlLm1hcHMuVHJhdmVsTW9kZS5CSUNZQ0xJTkc7XG4gICAgICBicmVhaztcbiAgICBjYXNlICd0cmFuc2l0JzpcbiAgICAgIHRyYXZlbE1vZGUgPSBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLlRSQU5TSVQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdkcml2aW5nJzpcbiAgICAgIHRyYXZlbE1vZGUgPSBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLkRSSVZJTkc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdHJhdmVsTW9kZSA9IGdvb2dsZS5tYXBzLlRyYXZlbE1vZGUuV0FMS0lORztcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMudW5pdFN5c3RlbSA9PT0gJ2ltcGVyaWFsJykge1xuICAgIHVuaXRTeXN0ZW0gPSBnb29nbGUubWFwcy5Vbml0U3lzdGVtLklNUEVSSUFMO1xuICB9XG4gIGVsc2Uge1xuICAgIHVuaXRTeXN0ZW0gPSBnb29nbGUubWFwcy5Vbml0U3lzdGVtLk1FVFJJQztcbiAgfVxuXG4gIHZhciBiYXNlX29wdGlvbnMgPSB7XG4gICAgICAgIGF2b2lkSGlnaHdheXM6IGZhbHNlLFxuICAgICAgICBhdm9pZFRvbGxzOiBmYWxzZSxcbiAgICAgICAgb3B0aW1pemVXYXlwb2ludHM6IGZhbHNlLFxuICAgICAgICB3YXlwb2ludHM6IFtdXG4gICAgICB9LFxuICAgICAgcmVxdWVzdF9vcHRpb25zID0gIGV4dGVuZF9vYmplY3QoYmFzZV9vcHRpb25zLCBvcHRpb25zKTtcblxuICByZXF1ZXN0X29wdGlvbnMub3JpZ2luID0gL3N0cmluZy8udGVzdCh0eXBlb2Ygb3B0aW9ucy5vcmlnaW4pID8gb3B0aW9ucy5vcmlnaW4gOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKG9wdGlvbnMub3JpZ2luWzBdLCBvcHRpb25zLm9yaWdpblsxXSk7XG4gIHJlcXVlc3Rfb3B0aW9ucy5kZXN0aW5hdGlvbiA9IC9zdHJpbmcvLnRlc3QodHlwZW9mIG9wdGlvbnMuZGVzdGluYXRpb24pID8gb3B0aW9ucy5kZXN0aW5hdGlvbiA6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcob3B0aW9ucy5kZXN0aW5hdGlvblswXSwgb3B0aW9ucy5kZXN0aW5hdGlvblsxXSk7XG4gIHJlcXVlc3Rfb3B0aW9ucy50cmF2ZWxNb2RlID0gdHJhdmVsTW9kZTtcbiAgcmVxdWVzdF9vcHRpb25zLnVuaXRTeXN0ZW0gPSB1bml0U3lzdGVtO1xuXG4gIGRlbGV0ZSByZXF1ZXN0X29wdGlvbnMuY2FsbGJhY2s7XG4gIGRlbGV0ZSByZXF1ZXN0X29wdGlvbnMuZXJyb3I7XG5cbiAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgcm91dGVzID0gW10sXG4gICAgICBzZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlKCk7XG5cbiAgc2VydmljZS5yb3V0ZShyZXF1ZXN0X29wdGlvbnMsIGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzKSB7XG4gICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1N0YXR1cy5PSykge1xuICAgICAgZm9yICh2YXIgciBpbiByZXN1bHQucm91dGVzKSB7XG4gICAgICAgIGlmIChyZXN1bHQucm91dGVzLmhhc093blByb3BlcnR5KHIpKSB7XG4gICAgICAgICAgcm91dGVzLnB1c2gocmVzdWx0LnJvdXRlc1tyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIHtcbiAgICAgICAgb3B0aW9ucy5jYWxsYmFjayhyb3V0ZXMsIHJlc3VsdCwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICBvcHRpb25zLmVycm9yKHJlc3VsdCwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuR01hcHMucHJvdG90eXBlLnJlbW92ZVJvdXRlcyA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnJvdXRlcy5sZW5ndGggPSAwO1xufTtcblxuR01hcHMucHJvdG90eXBlLmdldEVsZXZhdGlvbnMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBleHRlbmRfb2JqZWN0KHtcbiAgICBsb2NhdGlvbnM6IFtdLFxuICAgIHBhdGggOiBmYWxzZSxcbiAgICBzYW1wbGVzIDogMjU2XG4gIH0sIG9wdGlvbnMpO1xuXG4gIGlmIChvcHRpb25zLmxvY2F0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKG9wdGlvbnMubG9jYXRpb25zWzBdLmxlbmd0aCA+IDApIHtcbiAgICAgIG9wdGlvbnMubG9jYXRpb25zID0gYXJyYXlfZmxhdChhcnJheV9tYXAoW29wdGlvbnMubG9jYXRpb25zXSwgYXJyYXlUb0xhdExuZywgIGZhbHNlKSk7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjaztcbiAgZGVsZXRlIG9wdGlvbnMuY2FsbGJhY2s7XG5cbiAgdmFyIHNlcnZpY2UgPSBuZXcgZ29vZ2xlLm1hcHMuRWxldmF0aW9uU2VydmljZSgpO1xuXG4gIC8vbG9jYXRpb24gcmVxdWVzdFxuICBpZiAoIW9wdGlvbnMucGF0aCkge1xuICAgIGRlbGV0ZSBvcHRpb25zLnBhdGg7XG4gICAgZGVsZXRlIG9wdGlvbnMuc2FtcGxlcztcblxuICAgIHNlcnZpY2UuZ2V0RWxldmF0aW9uRm9yTG9jYXRpb25zKG9wdGlvbnMsIGZ1bmN0aW9uKHJlc3VsdCwgc3RhdHVzKSB7XG4gICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mKGNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgLy9wYXRoIHJlcXVlc3RcbiAgfSBlbHNlIHtcbiAgICB2YXIgcGF0aFJlcXVlc3QgPSB7XG4gICAgICBwYXRoIDogb3B0aW9ucy5sb2NhdGlvbnMsXG4gICAgICBzYW1wbGVzIDogb3B0aW9ucy5zYW1wbGVzXG4gICAgfTtcblxuICAgIHNlcnZpY2UuZ2V0RWxldmF0aW9uQWxvbmdQYXRoKHBhdGhSZXF1ZXN0LCBmdW5jdGlvbihyZXN1bHQsIHN0YXR1cykge1xuICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mKGNhbGxiYWNrKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlc3VsdCwgc3RhdHVzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuR01hcHMucHJvdG90eXBlLmNsZWFuUm91dGUgPSBHTWFwcy5wcm90b3R5cGUucmVtb3ZlUG9seWxpbmVzO1xuXG5HTWFwcy5wcm90b3R5cGUucmVuZGVyUm91dGUgPSBmdW5jdGlvbihvcHRpb25zLCByZW5kZXJPcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIHBhbmVsID0gKCh0eXBlb2YgcmVuZGVyT3B0aW9ucy5wYW5lbCA9PT0gJ3N0cmluZycpID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocmVuZGVyT3B0aW9ucy5wYW5lbC5yZXBsYWNlKCcjJywgJycpKSA6IHJlbmRlck9wdGlvbnMucGFuZWwpLFxuICAgICAgZGlzcGxheTtcblxuICByZW5kZXJPcHRpb25zLnBhbmVsID0gcGFuZWw7XG4gIHJlbmRlck9wdGlvbnMgPSBleHRlbmRfb2JqZWN0KHtcbiAgICBtYXA6IHRoaXMubWFwXG4gIH0sIHJlbmRlck9wdGlvbnMpO1xuICBkaXNwbGF5ID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNSZW5kZXJlcihyZW5kZXJPcHRpb25zKTtcblxuICB0aGlzLmdldFJvdXRlcyh7XG4gICAgb3JpZ2luOiBvcHRpb25zLm9yaWdpbixcbiAgICBkZXN0aW5hdGlvbjogb3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgd2F5cG9pbnRzOiBvcHRpb25zLndheXBvaW50cyxcbiAgICB1bml0U3lzdGVtOiBvcHRpb25zLnVuaXRTeXN0ZW0sXG4gICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgYXZvaWRIaWdod2F5czogb3B0aW9ucy5hdm9pZEhpZ2h3YXlzLFxuICAgIGF2b2lkVG9sbHM6IG9wdGlvbnMuYXZvaWRUb2xscyxcbiAgICBvcHRpbWl6ZVdheXBvaW50czogb3B0aW9ucy5vcHRpbWl6ZVdheXBvaW50cyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24ocm91dGVzLCByZXNwb25zZSwgc3RhdHVzKSB7XG4gICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5EaXJlY3Rpb25zU3RhdHVzLk9LKSB7XG4gICAgICAgIGRpc3BsYXkuc2V0RGlyZWN0aW9ucyhyZXNwb25zZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5kcmF3Um91dGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0aGlzLmdldFJvdXRlcyh7XG4gICAgb3JpZ2luOiBvcHRpb25zLm9yaWdpbixcbiAgICBkZXN0aW5hdGlvbjogb3B0aW9ucy5kZXN0aW5hdGlvbixcbiAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgd2F5cG9pbnRzOiBvcHRpb25zLndheXBvaW50cyxcbiAgICB1bml0U3lzdGVtOiBvcHRpb25zLnVuaXRTeXN0ZW0sXG4gICAgZXJyb3I6IG9wdGlvbnMuZXJyb3IsXG4gICAgYXZvaWRIaWdod2F5czogb3B0aW9ucy5hdm9pZEhpZ2h3YXlzLFxuICAgIGF2b2lkVG9sbHM6IG9wdGlvbnMuYXZvaWRUb2xscyxcbiAgICBvcHRpbWl6ZVdheXBvaW50czogb3B0aW9ucy5vcHRpbWl6ZVdheXBvaW50cyxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24ocm91dGVzKSB7XG4gICAgICBpZiAocm91dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIHBvbHlsaW5lX29wdGlvbnMgPSB7XG4gICAgICAgICAgcGF0aDogcm91dGVzW3JvdXRlcy5sZW5ndGggLSAxXS5vdmVydmlld19wYXRoLFxuICAgICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoXCJpY29uc1wiKSkge1xuICAgICAgICAgIHBvbHlsaW5lX29wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5kcmF3UG9seWxpbmUocG9seWxpbmVfb3B0aW9ucyk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIHtcbiAgICAgICAgICBvcHRpb25zLmNhbGxiYWNrKHJvdXRlc1tyb3V0ZXMubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS50cmF2ZWxSb3V0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMub3JpZ2luICYmIG9wdGlvbnMuZGVzdGluYXRpb24pIHtcbiAgICB0aGlzLmdldFJvdXRlcyh7XG4gICAgICBvcmlnaW46IG9wdGlvbnMub3JpZ2luLFxuICAgICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgICB3YXlwb2ludHMgOiBvcHRpb25zLndheXBvaW50cyxcbiAgICAgIHVuaXRTeXN0ZW06IG9wdGlvbnMudW5pdFN5c3RlbSxcbiAgICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy9zdGFydCBjYWxsYmFja1xuICAgICAgICBpZiAoZS5sZW5ndGggPiAwICYmIG9wdGlvbnMuc3RhcnQpIHtcbiAgICAgICAgICBvcHRpb25zLnN0YXJ0KGVbZS5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3N0ZXAgY2FsbGJhY2tcbiAgICAgICAgaWYgKGUubGVuZ3RoID4gMCAmJiBvcHRpb25zLnN0ZXApIHtcbiAgICAgICAgICB2YXIgcm91dGUgPSBlW2UubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKHJvdXRlLmxlZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBzID0gcm91dGUubGVnc1swXS5zdGVwcztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBzdGVwOyBzdGVwID0gc3RlcHNbaV07IGkrKykge1xuICAgICAgICAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaTtcbiAgICAgICAgICAgICAgb3B0aW9ucy5zdGVwKHN0ZXAsIChyb3V0ZS5sZWdzWzBdLnN0ZXBzLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL2VuZCBjYWxsYmFja1xuICAgICAgICBpZiAoZS5sZW5ndGggPiAwICYmIG9wdGlvbnMuZW5kKSB7XG4gICAgICAgICAgIG9wdGlvbnMuZW5kKGVbZS5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICBlbHNlIGlmIChvcHRpb25zLnJvdXRlKSB7XG4gICAgaWYgKG9wdGlvbnMucm91dGUubGVncy5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgc3RlcHMgPSBvcHRpb25zLnJvdXRlLmxlZ3NbMF0uc3RlcHM7XG4gICAgICBmb3IgKHZhciBpID0gMCwgc3RlcDsgc3RlcCA9IHN0ZXBzW2ldOyBpKyspIHtcbiAgICAgICAgc3RlcC5zdGVwX251bWJlciA9IGk7XG4gICAgICAgIG9wdGlvbnMuc3RlcChzdGVwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbkdNYXBzLnByb3RvdHlwZS5kcmF3U3RlcHBlZFJvdXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgaWYgKG9wdGlvbnMub3JpZ2luICYmIG9wdGlvbnMuZGVzdGluYXRpb24pIHtcbiAgICB0aGlzLmdldFJvdXRlcyh7XG4gICAgICBvcmlnaW46IG9wdGlvbnMub3JpZ2luLFxuICAgICAgZGVzdGluYXRpb246IG9wdGlvbnMuZGVzdGluYXRpb24sXG4gICAgICB0cmF2ZWxNb2RlOiBvcHRpb25zLnRyYXZlbE1vZGUsXG4gICAgICB3YXlwb2ludHMgOiBvcHRpb25zLndheXBvaW50cyxcbiAgICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgLy9zdGFydCBjYWxsYmFja1xuICAgICAgICBpZiAoZS5sZW5ndGggPiAwICYmIG9wdGlvbnMuc3RhcnQpIHtcbiAgICAgICAgICBvcHRpb25zLnN0YXJ0KGVbZS5sZW5ndGggLSAxXSk7XG4gICAgICAgIH1cblxuICAgICAgICAvL3N0ZXAgY2FsbGJhY2tcbiAgICAgICAgaWYgKGUubGVuZ3RoID4gMCAmJiBvcHRpb25zLnN0ZXApIHtcbiAgICAgICAgICB2YXIgcm91dGUgPSBlW2UubGVuZ3RoIC0gMV07XG4gICAgICAgICAgaWYgKHJvdXRlLmxlZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdmFyIHN0ZXBzID0gcm91dGUubGVnc1swXS5zdGVwcztcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBzdGVwOyBzdGVwID0gc3RlcHNbaV07IGkrKykge1xuICAgICAgICAgICAgICBzdGVwLnN0ZXBfbnVtYmVyID0gaTtcbiAgICAgICAgICAgICAgdmFyIHBvbHlsaW5lX29wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgcGF0aDogc3RlcC5wYXRoLFxuICAgICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAgICAgICAgICAgICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgICAgICAgICAgICAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0XG4gICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoXCJpY29uc1wiKSkge1xuICAgICAgICAgICAgICAgIHBvbHlsaW5lX29wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgc2VsZi5kcmF3UG9seWxpbmUocG9seWxpbmVfb3B0aW9ucyk7XG4gICAgICAgICAgICAgIG9wdGlvbnMuc3RlcChzdGVwLCAocm91dGUubGVnc1swXS5zdGVwcy5sZW5ndGggLSAxKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9lbmQgY2FsbGJhY2tcbiAgICAgICAgaWYgKGUubGVuZ3RoID4gMCAmJiBvcHRpb25zLmVuZCkge1xuICAgICAgICAgICBvcHRpb25zLmVuZChlW2UubGVuZ3RoIC0gMV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgZWxzZSBpZiAob3B0aW9ucy5yb3V0ZSkge1xuICAgIGlmIChvcHRpb25zLnJvdXRlLmxlZ3MubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIHN0ZXBzID0gb3B0aW9ucy5yb3V0ZS5sZWdzWzBdLnN0ZXBzO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIHN0ZXA7IHN0ZXAgPSBzdGVwc1tpXTsgaSsrKSB7XG4gICAgICAgIHN0ZXAuc3RlcF9udW1iZXIgPSBpO1xuICAgICAgICB2YXIgcG9seWxpbmVfb3B0aW9ucyA9IHtcbiAgICAgICAgICBwYXRoOiBzdGVwLnBhdGgsXG4gICAgICAgICAgc3Ryb2tlQ29sb3I6IG9wdGlvbnMuc3Ryb2tlQ29sb3IsXG4gICAgICAgICAgc3Ryb2tlT3BhY2l0eTogb3B0aW9ucy5zdHJva2VPcGFjaXR5LFxuICAgICAgICAgIHN0cm9rZVdlaWdodDogb3B0aW9ucy5zdHJva2VXZWlnaHRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShcImljb25zXCIpKSB7XG4gICAgICAgICAgcG9seWxpbmVfb3B0aW9ucy5pY29ucyA9IG9wdGlvbnMuaWNvbnM7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLmRyYXdQb2x5bGluZShwb2x5bGluZV9vcHRpb25zKTtcbiAgICAgICAgb3B0aW9ucy5zdGVwKHN0ZXApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuR01hcHMuUm91dGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHRoaXMub3JpZ2luID0gb3B0aW9ucy5vcmlnaW47XG4gIHRoaXMuZGVzdGluYXRpb24gPSBvcHRpb25zLmRlc3RpbmF0aW9uO1xuICB0aGlzLndheXBvaW50cyA9IG9wdGlvbnMud2F5cG9pbnRzO1xuXG4gIHRoaXMubWFwID0gb3B0aW9ucy5tYXA7XG4gIHRoaXMucm91dGUgPSBvcHRpb25zLnJvdXRlO1xuICB0aGlzLnN0ZXBfY291bnQgPSAwO1xuICB0aGlzLnN0ZXBzID0gdGhpcy5yb3V0ZS5sZWdzWzBdLnN0ZXBzO1xuICB0aGlzLnN0ZXBzX2xlbmd0aCA9IHRoaXMuc3RlcHMubGVuZ3RoO1xuXG4gIHZhciBwb2x5bGluZV9vcHRpb25zID0ge1xuICAgIHBhdGg6IG5ldyBnb29nbGUubWFwcy5NVkNBcnJheSgpLFxuICAgIHN0cm9rZUNvbG9yOiBvcHRpb25zLnN0cm9rZUNvbG9yLFxuICAgIHN0cm9rZU9wYWNpdHk6IG9wdGlvbnMuc3Ryb2tlT3BhY2l0eSxcbiAgICBzdHJva2VXZWlnaHQ6IG9wdGlvbnMuc3Ryb2tlV2VpZ2h0XG4gIH07XG5cbiAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkoXCJpY29uc1wiKSkge1xuICAgIHBvbHlsaW5lX29wdGlvbnMuaWNvbnMgPSBvcHRpb25zLmljb25zO1xuICB9XG5cbiAgdGhpcy5wb2x5bGluZSA9IHRoaXMubWFwLmRyYXdQb2x5bGluZShwb2x5bGluZV9vcHRpb25zKS5nZXRQYXRoKCk7XG59O1xuXG5HTWFwcy5Sb3V0ZS5wcm90b3R5cGUuZ2V0Um91dGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICB0aGlzLm1hcC5nZXRSb3V0ZXMoe1xuICAgIG9yaWdpbiA6IHRoaXMub3JpZ2luLFxuICAgIGRlc3RpbmF0aW9uIDogdGhpcy5kZXN0aW5hdGlvbixcbiAgICB0cmF2ZWxNb2RlIDogb3B0aW9ucy50cmF2ZWxNb2RlLFxuICAgIHdheXBvaW50cyA6IHRoaXMud2F5cG9pbnRzIHx8IFtdLFxuICAgIGVycm9yOiBvcHRpb25zLmVycm9yLFxuICAgIGNhbGxiYWNrIDogZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLnJvdXRlID0gZVswXTtcblxuICAgICAgaWYgKG9wdGlvbnMuY2FsbGJhY2spIHtcbiAgICAgICAgb3B0aW9ucy5jYWxsYmFjay5jYWxsKHNlbGYpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5HTWFwcy5Sb3V0ZS5wcm90b3R5cGUuYmFjayA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zdGVwX2NvdW50ID4gMCkge1xuICAgIHRoaXMuc3RlcF9jb3VudC0tO1xuICAgIHZhciBwYXRoID0gdGhpcy5yb3V0ZS5sZWdzWzBdLnN0ZXBzW3RoaXMuc3RlcF9jb3VudF0ucGF0aDtcblxuICAgIGZvciAodmFyIHAgaW4gcGF0aCl7XG4gICAgICBpZiAocGF0aC5oYXNPd25Qcm9wZXJ0eShwKSl7XG4gICAgICAgIHRoaXMucG9seWxpbmUucG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5HTWFwcy5Sb3V0ZS5wcm90b3R5cGUuZm9yd2FyZCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5zdGVwX2NvdW50IDwgdGhpcy5zdGVwc19sZW5ndGgpIHtcbiAgICB2YXIgcGF0aCA9IHRoaXMucm91dGUubGVnc1swXS5zdGVwc1t0aGlzLnN0ZXBfY291bnRdLnBhdGg7XG5cbiAgICBmb3IgKHZhciBwIGluIHBhdGgpe1xuICAgICAgaWYgKHBhdGguaGFzT3duUHJvcGVydHkocCkpe1xuICAgICAgICB0aGlzLnBvbHlsaW5lLnB1c2gocGF0aFtwXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc3RlcF9jb3VudCsrO1xuICB9XG59O1xuXG5HTWFwcy5wcm90b3R5cGUuY2hlY2tHZW9mZW5jZSA9IGZ1bmN0aW9uKGxhdCwgbG5nLCBmZW5jZSkge1xuICByZXR1cm4gZmVuY2UuY29udGFpbnNMYXRMbmcobmV3IGdvb2dsZS5tYXBzLkxhdExuZyhsYXQsIGxuZykpO1xufTtcblxuR01hcHMucHJvdG90eXBlLmNoZWNrTWFya2VyR2VvZmVuY2UgPSBmdW5jdGlvbihtYXJrZXIsIG91dHNpZGVfY2FsbGJhY2spIHtcbiAgaWYgKG1hcmtlci5mZW5jZXMpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgZmVuY2U7IGZlbmNlID0gbWFya2VyLmZlbmNlc1tpXTsgaSsrKSB7XG4gICAgICB2YXIgcG9zID0gbWFya2VyLmdldFBvc2l0aW9uKCk7XG4gICAgICBpZiAoIXRoaXMuY2hlY2tHZW9mZW5jZShwb3MubGF0KCksIHBvcy5sbmcoKSwgZmVuY2UpKSB7XG4gICAgICAgIG91dHNpZGVfY2FsbGJhY2sobWFya2VyLCBmZW5jZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5HTWFwcy5wcm90b3R5cGUudG9JbWFnZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9LFxuICAgICAgc3RhdGljX21hcF9vcHRpb25zID0ge307XG5cbiAgc3RhdGljX21hcF9vcHRpb25zWydzaXplJ10gPSBvcHRpb25zWydzaXplJ10gfHwgW3RoaXMuZWwuY2xpZW50V2lkdGgsIHRoaXMuZWwuY2xpZW50SGVpZ2h0XTtcbiAgc3RhdGljX21hcF9vcHRpb25zWydsYXQnXSA9IHRoaXMuZ2V0Q2VudGVyKCkubGF0KCk7XG4gIHN0YXRpY19tYXBfb3B0aW9uc1snbG5nJ10gPSB0aGlzLmdldENlbnRlcigpLmxuZygpO1xuXG4gIGlmICh0aGlzLm1hcmtlcnMubGVuZ3RoID4gMCkge1xuICAgIHN0YXRpY19tYXBfb3B0aW9uc1snbWFya2VycyddID0gW107XG4gICAgXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1hcmtlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHN0YXRpY19tYXBfb3B0aW9uc1snbWFya2VycyddLnB1c2goe1xuICAgICAgICBsYXQ6IHRoaXMubWFya2Vyc1tpXS5nZXRQb3NpdGlvbigpLmxhdCgpLFxuICAgICAgICBsbmc6IHRoaXMubWFya2Vyc1tpXS5nZXRQb3NpdGlvbigpLmxuZygpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5wb2x5bGluZXMubGVuZ3RoID4gMCkge1xuICAgIHZhciBwb2x5bGluZSA9IHRoaXMucG9seWxpbmVzWzBdO1xuICAgIFxuICAgIHN0YXRpY19tYXBfb3B0aW9uc1sncG9seWxpbmUnXSA9IHt9O1xuICAgIHN0YXRpY19tYXBfb3B0aW9uc1sncG9seWxpbmUnXVsncGF0aCddID0gZ29vZ2xlLm1hcHMuZ2VvbWV0cnkuZW5jb2RpbmcuZW5jb2RlUGF0aChwb2x5bGluZS5nZXRQYXRoKCkpO1xuICAgIHN0YXRpY19tYXBfb3B0aW9uc1sncG9seWxpbmUnXVsnc3Ryb2tlQ29sb3InXSA9IHBvbHlsaW5lLnN0cm9rZUNvbG9yXG4gICAgc3RhdGljX21hcF9vcHRpb25zWydwb2x5bGluZSddWydzdHJva2VPcGFjaXR5J10gPSBwb2x5bGluZS5zdHJva2VPcGFjaXR5XG4gICAgc3RhdGljX21hcF9vcHRpb25zWydwb2x5bGluZSddWydzdHJva2VXZWlnaHQnXSA9IHBvbHlsaW5lLnN0cm9rZVdlaWdodFxuICB9XG5cbiAgcmV0dXJuIEdNYXBzLnN0YXRpY01hcFVSTChzdGF0aWNfbWFwX29wdGlvbnMpO1xufTtcblxuR01hcHMuc3RhdGljTWFwVVJMID0gZnVuY3Rpb24ob3B0aW9ucyl7XG4gIHZhciBwYXJhbWV0ZXJzID0gW10sXG4gICAgICBkYXRhLFxuICAgICAgc3RhdGljX3Jvb3QgPSAobG9jYXRpb24ucHJvdG9jb2wgPT09ICdmaWxlOicgPyAnaHR0cDonIDogbG9jYXRpb24ucHJvdG9jb2wgKSArICcvL21hcHMuZ29vZ2xlYXBpcy5jb20vbWFwcy9hcGkvc3RhdGljbWFwJztcblxuICBpZiAob3B0aW9ucy51cmwpIHtcbiAgICBzdGF0aWNfcm9vdCA9IG9wdGlvbnMudXJsO1xuICAgIGRlbGV0ZSBvcHRpb25zLnVybDtcbiAgfVxuXG4gIHN0YXRpY19yb290ICs9ICc/JztcblxuICB2YXIgbWFya2VycyA9IG9wdGlvbnMubWFya2VycztcbiAgXG4gIGRlbGV0ZSBvcHRpb25zLm1hcmtlcnM7XG5cbiAgaWYgKCFtYXJrZXJzICYmIG9wdGlvbnMubWFya2VyKSB7XG4gICAgbWFya2VycyA9IFtvcHRpb25zLm1hcmtlcl07XG4gICAgZGVsZXRlIG9wdGlvbnMubWFya2VyO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IG9wdGlvbnMuc3R5bGVzO1xuXG4gIGRlbGV0ZSBvcHRpb25zLnN0eWxlcztcblxuICB2YXIgcG9seWxpbmUgPSBvcHRpb25zLnBvbHlsaW5lO1xuICBkZWxldGUgb3B0aW9ucy5wb2x5bGluZTtcblxuICAvKiogTWFwIG9wdGlvbnMgKiovXG4gIGlmIChvcHRpb25zLmNlbnRlcikge1xuICAgIHBhcmFtZXRlcnMucHVzaCgnY2VudGVyPScgKyBvcHRpb25zLmNlbnRlcik7XG4gICAgZGVsZXRlIG9wdGlvbnMuY2VudGVyO1xuICB9XG4gIGVsc2UgaWYgKG9wdGlvbnMuYWRkcmVzcykge1xuICAgIHBhcmFtZXRlcnMucHVzaCgnY2VudGVyPScgKyBvcHRpb25zLmFkZHJlc3MpO1xuICAgIGRlbGV0ZSBvcHRpb25zLmFkZHJlc3M7XG4gIH1cbiAgZWxzZSBpZiAob3B0aW9ucy5sYXQpIHtcbiAgICBwYXJhbWV0ZXJzLnB1c2goWydjZW50ZXI9Jywgb3B0aW9ucy5sYXQsICcsJywgb3B0aW9ucy5sbmddLmpvaW4oJycpKTtcbiAgICBkZWxldGUgb3B0aW9ucy5sYXQ7XG4gICAgZGVsZXRlIG9wdGlvbnMubG5nO1xuICB9XG4gIGVsc2UgaWYgKG9wdGlvbnMudmlzaWJsZSkge1xuICAgIHZhciB2aXNpYmxlID0gZW5jb2RlVVJJKG9wdGlvbnMudmlzaWJsZS5qb2luKCd8JykpO1xuICAgIHBhcmFtZXRlcnMucHVzaCgndmlzaWJsZT0nICsgdmlzaWJsZSk7XG4gIH1cblxuICB2YXIgc2l6ZSA9IG9wdGlvbnMuc2l6ZTtcbiAgaWYgKHNpemUpIHtcbiAgICBpZiAoc2l6ZS5qb2luKSB7XG4gICAgICBzaXplID0gc2l6ZS5qb2luKCd4Jyk7XG4gICAgfVxuICAgIGRlbGV0ZSBvcHRpb25zLnNpemU7XG4gIH1cbiAgZWxzZSB7XG4gICAgc2l6ZSA9ICc2MzB4MzAwJztcbiAgfVxuICBwYXJhbWV0ZXJzLnB1c2goJ3NpemU9JyArIHNpemUpO1xuXG4gIGlmICghb3B0aW9ucy56b29tICYmIG9wdGlvbnMuem9vbSAhPT0gZmFsc2UpIHtcbiAgICBvcHRpb25zLnpvb20gPSAxNTtcbiAgfVxuXG4gIHZhciBzZW5zb3IgPSBvcHRpb25zLmhhc093blByb3BlcnR5KCdzZW5zb3InKSA/ICEhb3B0aW9ucy5zZW5zb3IgOiB0cnVlO1xuICBkZWxldGUgb3B0aW9ucy5zZW5zb3I7XG4gIHBhcmFtZXRlcnMucHVzaCgnc2Vuc29yPScgKyBzZW5zb3IpO1xuXG4gIGZvciAodmFyIHBhcmFtIGluIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgIHBhcmFtZXRlcnMucHVzaChwYXJhbSArICc9JyArIG9wdGlvbnNbcGFyYW1dKTtcbiAgICB9XG4gIH1cblxuICAvKiogTWFya2VycyAqKi9cbiAgaWYgKG1hcmtlcnMpIHtcbiAgICB2YXIgbWFya2VyLCBsb2M7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgZGF0YSA9IG1hcmtlcnNbaV07IGkrKykge1xuICAgICAgbWFya2VyID0gW107XG5cbiAgICAgIGlmIChkYXRhLnNpemUgJiYgZGF0YS5zaXplICE9PSAnbm9ybWFsJykge1xuICAgICAgICBtYXJrZXIucHVzaCgnc2l6ZTonICsgZGF0YS5zaXplKTtcbiAgICAgICAgZGVsZXRlIGRhdGEuc2l6ZTtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGRhdGEuaWNvbikge1xuICAgICAgICBtYXJrZXIucHVzaCgnaWNvbjonICsgZW5jb2RlVVJJKGRhdGEuaWNvbikpO1xuICAgICAgICBkZWxldGUgZGF0YS5pY29uO1xuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YS5jb2xvcikge1xuICAgICAgICBtYXJrZXIucHVzaCgnY29sb3I6JyArIGRhdGEuY29sb3IucmVwbGFjZSgnIycsICcweCcpKTtcbiAgICAgICAgZGVsZXRlIGRhdGEuY29sb3I7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhLmxhYmVsKSB7XG4gICAgICAgIG1hcmtlci5wdXNoKCdsYWJlbDonICsgZGF0YS5sYWJlbFswXS50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgZGVsZXRlIGRhdGEubGFiZWw7XG4gICAgICB9XG5cbiAgICAgIGxvYyA9IChkYXRhLmFkZHJlc3MgPyBkYXRhLmFkZHJlc3MgOiBkYXRhLmxhdCArICcsJyArIGRhdGEubG5nKTtcbiAgICAgIGRlbGV0ZSBkYXRhLmFkZHJlc3M7XG4gICAgICBkZWxldGUgZGF0YS5sYXQ7XG4gICAgICBkZWxldGUgZGF0YS5sbmc7XG5cbiAgICAgIGZvcih2YXIgcGFyYW0gaW4gZGF0YSl7XG4gICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgIG1hcmtlci5wdXNoKHBhcmFtICsgJzonICsgZGF0YVtwYXJhbV0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXJrZXIubGVuZ3RoIHx8IGkgPT09IDApIHtcbiAgICAgICAgbWFya2VyLnB1c2gobG9jKTtcbiAgICAgICAgbWFya2VyID0gbWFya2VyLmpvaW4oJ3wnKTtcbiAgICAgICAgcGFyYW1ldGVycy5wdXNoKCdtYXJrZXJzPScgKyBlbmNvZGVVUkkobWFya2VyKSk7XG4gICAgICB9XG4gICAgICAvLyBOZXcgbWFya2VyIHdpdGhvdXQgc3R5bGVzXG4gICAgICBlbHNlIHtcbiAgICAgICAgbWFya2VyID0gcGFyYW1ldGVycy5wb3AoKSArIGVuY29kZVVSSSgnfCcgKyBsb2MpO1xuICAgICAgICBwYXJhbWV0ZXJzLnB1c2gobWFya2VyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogTWFwIFN0eWxlcyAqKi9cbiAgaWYgKHN0eWxlcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3R5bGVSdWxlID0gW107XG4gICAgICBpZiAoc3R5bGVzW2ldLmZlYXR1cmVUeXBlKXtcbiAgICAgICAgc3R5bGVSdWxlLnB1c2goJ2ZlYXR1cmU6JyArIHN0eWxlc1tpXS5mZWF0dXJlVHlwZS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0eWxlc1tpXS5lbGVtZW50VHlwZSkge1xuICAgICAgICBzdHlsZVJ1bGUucHVzaCgnZWxlbWVudDonICsgc3R5bGVzW2ldLmVsZW1lbnRUeXBlLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHN0eWxlc1tpXS5zdHlsZXJzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gc3R5bGVzW2ldLnN0eWxlcnNbal0pIHtcbiAgICAgICAgICB2YXIgcnVsZUFyZyA9IHN0eWxlc1tpXS5zdHlsZXJzW2pdW3BdO1xuICAgICAgICAgIGlmIChwID09ICdodWUnIHx8IHAgPT0gJ2NvbG9yJykge1xuICAgICAgICAgICAgcnVsZUFyZyA9ICcweCcgKyBydWxlQXJnLnN1YnN0cmluZygxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3R5bGVSdWxlLnB1c2gocCArICc6JyArIHJ1bGVBcmcpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBydWxlID0gc3R5bGVSdWxlLmpvaW4oJ3wnKTtcbiAgICAgIGlmIChydWxlICE9ICcnKSB7XG4gICAgICAgIHBhcmFtZXRlcnMucHVzaCgnc3R5bGU9JyArIHJ1bGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKiBQb2x5bGluZXMgKiovXG4gIGZ1bmN0aW9uIHBhcnNlQ29sb3IoY29sb3IsIG9wYWNpdHkpIHtcbiAgICBpZiAoY29sb3JbMF0gPT09ICcjJyl7XG4gICAgICBjb2xvciA9IGNvbG9yLnJlcGxhY2UoJyMnLCAnMHgnKTtcblxuICAgICAgaWYgKG9wYWNpdHkpIHtcbiAgICAgICAgb3BhY2l0eSA9IHBhcnNlRmxvYXQob3BhY2l0eSk7XG4gICAgICAgIG9wYWNpdHkgPSBNYXRoLm1pbigxLCBNYXRoLm1heChvcGFjaXR5LCAwKSk7XG4gICAgICAgIGlmIChvcGFjaXR5ID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuICcweDAwMDAwMDAwJztcbiAgICAgICAgfVxuICAgICAgICBvcGFjaXR5ID0gKG9wYWNpdHkgKiAyNTUpLnRvU3RyaW5nKDE2KTtcbiAgICAgICAgaWYgKG9wYWNpdHkubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgb3BhY2l0eSArPSBvcGFjaXR5O1xuICAgICAgICB9XG5cbiAgICAgICAgY29sb3IgPSBjb2xvci5zbGljZSgwLDgpICsgb3BhY2l0eTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbG9yO1xuICB9XG5cbiAgaWYgKHBvbHlsaW5lKSB7XG4gICAgZGF0YSA9IHBvbHlsaW5lO1xuICAgIHBvbHlsaW5lID0gW107XG5cbiAgICBpZiAoZGF0YS5zdHJva2VXZWlnaHQpIHtcbiAgICAgIHBvbHlsaW5lLnB1c2goJ3dlaWdodDonICsgcGFyc2VJbnQoZGF0YS5zdHJva2VXZWlnaHQsIDEwKSk7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuc3Ryb2tlQ29sb3IpIHtcbiAgICAgIHZhciBjb2xvciA9IHBhcnNlQ29sb3IoZGF0YS5zdHJva2VDb2xvciwgZGF0YS5zdHJva2VPcGFjaXR5KTtcbiAgICAgIHBvbHlsaW5lLnB1c2goJ2NvbG9yOicgKyBjb2xvcik7XG4gICAgfVxuXG4gICAgaWYgKGRhdGEuZmlsbENvbG9yKSB7XG4gICAgICB2YXIgZmlsbGNvbG9yID0gcGFyc2VDb2xvcihkYXRhLmZpbGxDb2xvciwgZGF0YS5maWxsT3BhY2l0eSk7XG4gICAgICBwb2x5bGluZS5wdXNoKCdmaWxsY29sb3I6JyArIGZpbGxjb2xvcik7XG4gICAgfVxuXG4gICAgdmFyIHBhdGggPSBkYXRhLnBhdGg7XG4gICAgaWYgKHBhdGguam9pbikge1xuICAgICAgZm9yICh2YXIgaj0wLCBwb3M7IHBvcz1wYXRoW2pdOyBqKyspIHtcbiAgICAgICAgcG9seWxpbmUucHVzaChwb3Muam9pbignLCcpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBwb2x5bGluZS5wdXNoKCdlbmM6JyArIHBhdGgpO1xuICAgIH1cblxuICAgIHBvbHlsaW5lID0gcG9seWxpbmUuam9pbignfCcpO1xuICAgIHBhcmFtZXRlcnMucHVzaCgncGF0aD0nICsgZW5jb2RlVVJJKHBvbHlsaW5lKSk7XG4gIH1cblxuICAvKiogUmV0aW5hIHN1cHBvcnQgKiovXG4gIHZhciBkcGkgPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICBwYXJhbWV0ZXJzLnB1c2goJ3NjYWxlPScgKyBkcGkpO1xuXG4gIHBhcmFtZXRlcnMgPSBwYXJhbWV0ZXJzLmpvaW4oJyYnKTtcbiAgcmV0dXJuIHN0YXRpY19yb290ICsgcGFyYW1ldGVycztcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5hZGRNYXBUeXBlID0gZnVuY3Rpb24obWFwVHlwZUlkLCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KFwiZ2V0VGlsZVVybFwiKSAmJiB0eXBlb2Yob3B0aW9uc1tcImdldFRpbGVVcmxcIl0pID09IFwiZnVuY3Rpb25cIikge1xuICAgIG9wdGlvbnMudGlsZVNpemUgPSBvcHRpb25zLnRpbGVTaXplIHx8IG5ldyBnb29nbGUubWFwcy5TaXplKDI1NiwgMjU2KTtcblxuICAgIHZhciBtYXBUeXBlID0gbmV3IGdvb2dsZS5tYXBzLkltYWdlTWFwVHlwZShvcHRpb25zKTtcblxuICAgIHRoaXMubWFwLm1hcFR5cGVzLnNldChtYXBUeXBlSWQsIG1hcFR5cGUpO1xuICB9XG4gIGVsc2Uge1xuICAgIHRocm93IFwiJ2dldFRpbGVVcmwnIGZ1bmN0aW9uIHJlcXVpcmVkLlwiO1xuICB9XG59O1xuXG5HTWFwcy5wcm90b3R5cGUuYWRkT3ZlcmxheU1hcFR5cGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KFwiZ2V0VGlsZVwiKSAmJiB0eXBlb2Yob3B0aW9uc1tcImdldFRpbGVcIl0pID09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBvdmVybGF5TWFwVHlwZUluZGV4ID0gb3B0aW9ucy5pbmRleDtcblxuICAgIGRlbGV0ZSBvcHRpb25zLmluZGV4O1xuXG4gICAgdGhpcy5tYXAub3ZlcmxheU1hcFR5cGVzLmluc2VydEF0KG92ZXJsYXlNYXBUeXBlSW5kZXgsIG9wdGlvbnMpO1xuICB9XG4gIGVsc2Uge1xuICAgIHRocm93IFwiJ2dldFRpbGUnIGZ1bmN0aW9uIHJlcXVpcmVkLlwiO1xuICB9XG59O1xuXG5HTWFwcy5wcm90b3R5cGUucmVtb3ZlT3ZlcmxheU1hcFR5cGUgPSBmdW5jdGlvbihvdmVybGF5TWFwVHlwZUluZGV4KSB7XG4gIHRoaXMubWFwLm92ZXJsYXlNYXBUeXBlcy5yZW1vdmVBdChvdmVybGF5TWFwVHlwZUluZGV4KTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5hZGRTdHlsZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlZE1hcFR5cGUgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShvcHRpb25zLnN0eWxlcywgeyBuYW1lOiBvcHRpb25zLnN0eWxlZE1hcE5hbWUgfSk7XG5cbiAgdGhpcy5tYXAubWFwVHlwZXMuc2V0KG9wdGlvbnMubWFwVHlwZUlkLCBzdHlsZWRNYXBUeXBlKTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5zZXRTdHlsZSA9IGZ1bmN0aW9uKG1hcFR5cGVJZCkge1xuICB0aGlzLm1hcC5zZXRNYXBUeXBlSWQobWFwVHlwZUlkKTtcbn07XG5cbkdNYXBzLnByb3RvdHlwZS5jcmVhdGVQYW5vcmFtYSA9IGZ1bmN0aW9uKHN0cmVldHZpZXdfb3B0aW9ucykge1xuICBpZiAoIXN0cmVldHZpZXdfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbGF0JykgfHwgIXN0cmVldHZpZXdfb3B0aW9ucy5oYXNPd25Qcm9wZXJ0eSgnbG5nJykpIHtcbiAgICBzdHJlZXR2aWV3X29wdGlvbnMubGF0ID0gdGhpcy5nZXRDZW50ZXIoKS5sYXQoKTtcbiAgICBzdHJlZXR2aWV3X29wdGlvbnMubG5nID0gdGhpcy5nZXRDZW50ZXIoKS5sbmcoKTtcbiAgfVxuXG4gIHRoaXMucGFub3JhbWEgPSBHTWFwcy5jcmVhdGVQYW5vcmFtYShzdHJlZXR2aWV3X29wdGlvbnMpO1xuXG4gIHRoaXMubWFwLnNldFN0cmVldFZpZXcodGhpcy5wYW5vcmFtYSk7XG5cbiAgcmV0dXJuIHRoaXMucGFub3JhbWE7XG59O1xuXG5HTWFwcy5jcmVhdGVQYW5vcmFtYSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgdmFyIGVsID0gZ2V0RWxlbWVudEJ5SWQob3B0aW9ucy5lbCwgb3B0aW9ucy5jb250ZXh0KTtcblxuICBvcHRpb25zLnBvc2l0aW9uID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhvcHRpb25zLmxhdCwgb3B0aW9ucy5sbmcpO1xuXG4gIGRlbGV0ZSBvcHRpb25zLmVsO1xuICBkZWxldGUgb3B0aW9ucy5jb250ZXh0O1xuICBkZWxldGUgb3B0aW9ucy5sYXQ7XG4gIGRlbGV0ZSBvcHRpb25zLmxuZztcblxuICB2YXIgc3RyZWV0dmlld19ldmVudHMgPSBbJ2Nsb3NlY2xpY2snLCAnbGlua3NfY2hhbmdlZCcsICdwYW5vX2NoYW5nZWQnLCAncG9zaXRpb25fY2hhbmdlZCcsICdwb3ZfY2hhbmdlZCcsICdyZXNpemUnLCAndmlzaWJsZV9jaGFuZ2VkJ10sXG4gICAgICBzdHJlZXR2aWV3X29wdGlvbnMgPSBleHRlbmRfb2JqZWN0KHt2aXNpYmxlIDogdHJ1ZX0sIG9wdGlvbnMpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyZWV0dmlld19ldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBkZWxldGUgc3RyZWV0dmlld19vcHRpb25zW3N0cmVldHZpZXdfZXZlbnRzW2ldXTtcbiAgfVxuXG4gIHZhciBwYW5vcmFtYSA9IG5ldyBnb29nbGUubWFwcy5TdHJlZXRWaWV3UGFub3JhbWEoZWwsIHN0cmVldHZpZXdfb3B0aW9ucyk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJlZXR2aWV3X2V2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgIChmdW5jdGlvbihvYmplY3QsIG5hbWUpIHtcbiAgICAgIGlmIChvcHRpb25zW25hbWVdKSB7XG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG9iamVjdCwgbmFtZSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICBvcHRpb25zW25hbWVdLmFwcGx5KHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KShwYW5vcmFtYSwgc3RyZWV0dmlld19ldmVudHNbaV0pO1xuICB9XG5cbiAgcmV0dXJuIHBhbm9yYW1hO1xufTtcblxuR01hcHMucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oZXZlbnRfbmFtZSwgaGFuZGxlcikge1xuICByZXR1cm4gR01hcHMub24oZXZlbnRfbmFtZSwgdGhpcywgaGFuZGxlcik7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUub2ZmID0gZnVuY3Rpb24oZXZlbnRfbmFtZSkge1xuICBHTWFwcy5vZmYoZXZlbnRfbmFtZSwgdGhpcyk7XG59O1xuXG5HTWFwcy5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50X25hbWUsIGhhbmRsZXIpIHtcbiAgcmV0dXJuIEdNYXBzLm9uY2UoZXZlbnRfbmFtZSwgdGhpcywgaGFuZGxlcik7XG59O1xuXG5HTWFwcy5jdXN0b21fZXZlbnRzID0gWydtYXJrZXJfYWRkZWQnLCAnbWFya2VyX3JlbW92ZWQnLCAncG9seWxpbmVfYWRkZWQnLCAncG9seWxpbmVfcmVtb3ZlZCcsICdwb2x5Z29uX2FkZGVkJywgJ3BvbHlnb25fcmVtb3ZlZCcsICdnZW9sb2NhdGVkJywgJ2dlb2xvY2F0aW9uX2ZhaWxlZCddO1xuXG5HTWFwcy5vbiA9IGZ1bmN0aW9uKGV2ZW50X25hbWUsIG9iamVjdCwgaGFuZGxlcikge1xuICBpZiAoR01hcHMuY3VzdG9tX2V2ZW50cy5pbmRleE9mKGV2ZW50X25hbWUpID09IC0xKSB7XG4gICAgaWYob2JqZWN0IGluc3RhbmNlb2YgR01hcHMpIG9iamVjdCA9IG9iamVjdC5tYXA7IFxuICAgIHJldHVybiBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihvYmplY3QsIGV2ZW50X25hbWUsIGhhbmRsZXIpO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciByZWdpc3RlcmVkX2V2ZW50ID0ge1xuICAgICAgaGFuZGxlciA6IGhhbmRsZXIsXG4gICAgICBldmVudE5hbWUgOiBldmVudF9uYW1lXG4gICAgfTtcblxuICAgIG9iamVjdC5yZWdpc3RlcmVkX2V2ZW50c1tldmVudF9uYW1lXSA9IG9iamVjdC5yZWdpc3RlcmVkX2V2ZW50c1tldmVudF9uYW1lXSB8fCBbXTtcbiAgICBvYmplY3QucmVnaXN0ZXJlZF9ldmVudHNbZXZlbnRfbmFtZV0ucHVzaChyZWdpc3RlcmVkX2V2ZW50KTtcblxuICAgIHJldHVybiByZWdpc3RlcmVkX2V2ZW50O1xuICB9XG59O1xuXG5HTWFwcy5vZmYgPSBmdW5jdGlvbihldmVudF9uYW1lLCBvYmplY3QpIHtcbiAgaWYgKEdNYXBzLmN1c3RvbV9ldmVudHMuaW5kZXhPZihldmVudF9uYW1lKSA9PSAtMSkge1xuICAgIGlmKG9iamVjdCBpbnN0YW5jZW9mIEdNYXBzKSBvYmplY3QgPSBvYmplY3QubWFwOyBcbiAgICBnb29nbGUubWFwcy5ldmVudC5jbGVhckxpc3RlbmVycyhvYmplY3QsIGV2ZW50X25hbWUpO1xuICB9XG4gIGVsc2Uge1xuICAgIG9iamVjdC5yZWdpc3RlcmVkX2V2ZW50c1tldmVudF9uYW1lXSA9IFtdO1xuICB9XG59O1xuXG5HTWFwcy5vbmNlID0gZnVuY3Rpb24oZXZlbnRfbmFtZSwgb2JqZWN0LCBoYW5kbGVyKSB7XG4gIGlmIChHTWFwcy5jdXN0b21fZXZlbnRzLmluZGV4T2YoZXZlbnRfbmFtZSkgPT0gLTEpIHtcbiAgICBpZihvYmplY3QgaW5zdGFuY2VvZiBHTWFwcykgb2JqZWN0ID0gb2JqZWN0Lm1hcDtcbiAgICByZXR1cm4gZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXJPbmNlKG9iamVjdCwgZXZlbnRfbmFtZSwgaGFuZGxlcik7XG4gIH1cbn07XG5cbkdNYXBzLmZpcmUgPSBmdW5jdGlvbihldmVudF9uYW1lLCBvYmplY3QsIHNjb3BlKSB7XG4gIGlmIChHTWFwcy5jdXN0b21fZXZlbnRzLmluZGV4T2YoZXZlbnRfbmFtZSkgPT0gLTEpIHtcbiAgICBnb29nbGUubWFwcy5ldmVudC50cmlnZ2VyKG9iamVjdCwgZXZlbnRfbmFtZSwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGFyZ3VtZW50cykuc2xpY2UoMikpO1xuICB9XG4gIGVsc2Uge1xuICAgIGlmKGV2ZW50X25hbWUgaW4gc2NvcGUucmVnaXN0ZXJlZF9ldmVudHMpIHtcbiAgICAgIHZhciBmaXJpbmdfZXZlbnRzID0gc2NvcGUucmVnaXN0ZXJlZF9ldmVudHNbZXZlbnRfbmFtZV07XG5cbiAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmaXJpbmdfZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIChmdW5jdGlvbihoYW5kbGVyLCBzY29wZSwgb2JqZWN0KSB7XG4gICAgICAgICAgaGFuZGxlci5hcHBseShzY29wZSwgW29iamVjdF0pO1xuICAgICAgICB9KShmaXJpbmdfZXZlbnRzW2ldWydoYW5kbGVyJ10sIHNjb3BlLCBvYmplY3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuR01hcHMuZ2VvbG9jYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB2YXIgY29tcGxldGVfY2FsbGJhY2sgPSBvcHRpb25zLmFsd2F5cyB8fCBvcHRpb25zLmNvbXBsZXRlO1xuXG4gIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKHBvc2l0aW9uKSB7XG4gICAgICBvcHRpb25zLnN1Y2Nlc3MocG9zaXRpb24pO1xuXG4gICAgICBpZiAoY29tcGxldGVfY2FsbGJhY2spIHtcbiAgICAgICAgY29tcGxldGVfY2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgb3B0aW9ucy5lcnJvcihlcnJvcik7XG5cbiAgICAgIGlmIChjb21wbGV0ZV9jYWxsYmFjaykge1xuICAgICAgICBjb21wbGV0ZV9jYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH0sIG9wdGlvbnMub3B0aW9ucyk7XG4gIH1cbiAgZWxzZSB7XG4gICAgb3B0aW9ucy5ub3Rfc3VwcG9ydGVkKCk7XG5cbiAgICBpZiAoY29tcGxldGVfY2FsbGJhY2spIHtcbiAgICAgIGNvbXBsZXRlX2NhbGxiYWNrKCk7XG4gICAgfVxuICB9XG59O1xuXG5HTWFwcy5nZW9jb2RlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICB0aGlzLmdlb2NvZGVyID0gbmV3IGdvb2dsZS5tYXBzLkdlb2NvZGVyKCk7XG4gIHZhciBjYWxsYmFjayA9IG9wdGlvbnMuY2FsbGJhY2s7XG4gIGlmIChvcHRpb25zLmhhc093blByb3BlcnR5KCdsYXQnKSAmJiBvcHRpb25zLmhhc093blByb3BlcnR5KCdsbmcnKSkge1xuICAgIG9wdGlvbnMubGF0TG5nID0gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhvcHRpb25zLmxhdCwgb3B0aW9ucy5sbmcpO1xuICB9XG5cbiAgZGVsZXRlIG9wdGlvbnMubGF0O1xuICBkZWxldGUgb3B0aW9ucy5sbmc7XG4gIGRlbGV0ZSBvcHRpb25zLmNhbGxiYWNrO1xuICBcbiAgdGhpcy5nZW9jb2Rlci5nZW9jb2RlKG9wdGlvbnMsIGZ1bmN0aW9uKHJlc3VsdHMsIHN0YXR1cykge1xuICAgIGNhbGxiYWNrKHJlc3VsdHMsIHN0YXR1cyk7XG4gIH0pO1xufTtcblxuaWYgKHR5cGVvZiB3aW5kb3cuZ29vZ2xlID09PSAnb2JqZWN0JyAmJiB3aW5kb3cuZ29vZ2xlLm1hcHMpIHtcbiAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyBQb2x5Z29uIGNvbnRhaW5zTGF0TG5nXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS90cGFya2luL0dvb2dsZS1NYXBzLVBvaW50LWluLVBvbHlnb25cbiAgLy8gUG95Z29uIGdldEJvdW5kcyBleHRlbnNpb24gLSBnb29nbGUtbWFwcy1leHRlbnNpb25zXG4gIC8vIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9nb29nbGUtbWFwcy1leHRlbnNpb25zL3NvdXJjZS9icm93c2UvZ29vZ2xlLm1hcHMuUG9seWdvbi5nZXRCb3VuZHMuanNcbiAgaWYgKCFnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5nZXRCb3VuZHMpIHtcbiAgICBnb29nbGUubWFwcy5Qb2x5Z29uLnByb3RvdHlwZS5nZXRCb3VuZHMgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICAgIHZhciBib3VuZHMgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nQm91bmRzKCk7XG4gICAgICB2YXIgcGF0aHMgPSB0aGlzLmdldFBhdGhzKCk7XG4gICAgICB2YXIgcGF0aDtcblxuICAgICAgZm9yICh2YXIgcCA9IDA7IHAgPCBwYXRocy5nZXRMZW5ndGgoKTsgcCsrKSB7XG4gICAgICAgIHBhdGggPSBwYXRocy5nZXRBdChwKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXRoLmdldExlbmd0aCgpOyBpKyspIHtcbiAgICAgICAgICBib3VuZHMuZXh0ZW5kKHBhdGguZ2V0QXQoaSkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfTtcbiAgfVxuXG4gIGlmICghZ29vZ2xlLm1hcHMuUG9seWdvbi5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcpIHtcbiAgICAvLyBQb2x5Z29uIGNvbnRhaW5zTGF0TG5nIC0gbWV0aG9kIHRvIGRldGVybWluZSBpZiBhIGxhdExuZyBpcyB3aXRoaW4gYSBwb2x5Z29uXG4gICAgZ29vZ2xlLm1hcHMuUG9seWdvbi5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICAgIC8vIEV4Y2x1ZGUgcG9pbnRzIG91dHNpZGUgb2YgYm91bmRzIGFzIHRoZXJlIGlzIG5vIHdheSB0aGV5IGFyZSBpbiB0aGUgcG9seVxuICAgICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG5cbiAgICAgIGlmIChib3VuZHMgIT09IG51bGwgJiYgIWJvdW5kcy5jb250YWlucyhsYXRMbmcpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gUmF5Y2FzdCBwb2ludCBpbiBwb2x5Z29uIG1ldGhvZFxuICAgICAgdmFyIGluUG9seSA9IGZhbHNlO1xuXG4gICAgICB2YXIgbnVtUGF0aHMgPSB0aGlzLmdldFBhdGhzKCkuZ2V0TGVuZ3RoKCk7XG4gICAgICBmb3IgKHZhciBwID0gMDsgcCA8IG51bVBhdGhzOyBwKyspIHtcbiAgICAgICAgdmFyIHBhdGggPSB0aGlzLmdldFBhdGhzKCkuZ2V0QXQocCk7XG4gICAgICAgIHZhciBudW1Qb2ludHMgPSBwYXRoLmdldExlbmd0aCgpO1xuICAgICAgICB2YXIgaiA9IG51bVBvaW50cyAtIDE7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Qb2ludHM7IGkrKykge1xuICAgICAgICAgIHZhciB2ZXJ0ZXgxID0gcGF0aC5nZXRBdChpKTtcbiAgICAgICAgICB2YXIgdmVydGV4MiA9IHBhdGguZ2V0QXQoaik7XG5cbiAgICAgICAgICBpZiAodmVydGV4MS5sbmcoKSA8IGxhdExuZy5sbmcoKSAmJiB2ZXJ0ZXgyLmxuZygpID49IGxhdExuZy5sbmcoKSB8fCB2ZXJ0ZXgyLmxuZygpIDwgbGF0TG5nLmxuZygpICYmIHZlcnRleDEubG5nKCkgPj0gbGF0TG5nLmxuZygpKSB7XG4gICAgICAgICAgICBpZiAodmVydGV4MS5sYXQoKSArIChsYXRMbmcubG5nKCkgLSB2ZXJ0ZXgxLmxuZygpKSAvICh2ZXJ0ZXgyLmxuZygpIC0gdmVydGV4MS5sbmcoKSkgKiAodmVydGV4Mi5sYXQoKSAtIHZlcnRleDEubGF0KCkpIDwgbGF0TG5nLmxhdCgpKSB7XG4gICAgICAgICAgICAgIGluUG9seSA9ICFpblBvbHk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaiA9IGk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGluUG9seTtcbiAgICB9O1xuICB9XG5cbiAgaWYgKCFnb29nbGUubWFwcy5DaXJjbGUucHJvdG90eXBlLmNvbnRhaW5zTGF0TG5nKSB7XG4gICAgZ29vZ2xlLm1hcHMuQ2lyY2xlLnByb3RvdHlwZS5jb250YWluc0xhdExuZyA9IGZ1bmN0aW9uKGxhdExuZykge1xuICAgICAgaWYgKGdvb2dsZS5tYXBzLmdlb21ldHJ5KSB7XG4gICAgICAgIHJldHVybiBnb29nbGUubWFwcy5nZW9tZXRyeS5zcGhlcmljYWwuY29tcHV0ZURpc3RhbmNlQmV0d2Vlbih0aGlzLmdldENlbnRlcigpLCBsYXRMbmcpIDw9IHRoaXMuZ2V0UmFkaXVzKCk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGdvb2dsZS5tYXBzLlJlY3RhbmdsZS5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb3VuZHMoKS5jb250YWlucyhsYXRMbmcpO1xuICB9O1xuXG4gIGdvb2dsZS5tYXBzLkxhdExuZ0JvdW5kcy5wcm90b3R5cGUuY29udGFpbnNMYXRMbmcgPSBmdW5jdGlvbihsYXRMbmcpIHtcbiAgICByZXR1cm4gdGhpcy5jb250YWlucyhsYXRMbmcpO1xuICB9O1xuXG4gIGdvb2dsZS5tYXBzLk1hcmtlci5wcm90b3R5cGUuc2V0RmVuY2VzID0gZnVuY3Rpb24oZmVuY2VzKSB7XG4gICAgdGhpcy5mZW5jZXMgPSBmZW5jZXM7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5hZGRGZW5jZSA9IGZ1bmN0aW9uKGZlbmNlKSB7XG4gICAgdGhpcy5mZW5jZXMucHVzaChmZW5jZSk7XG4gIH07XG5cbiAgZ29vZ2xlLm1hcHMuTWFya2VyLnByb3RvdHlwZS5nZXRJZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzWydfX2dtX2lkJ107XG4gIH07XG59XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEFycmF5IGluZGV4T2Zcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvaW5kZXhPZlxuaWYgKCFBcnJheS5wcm90b3R5cGUuaW5kZXhPZikge1xuICBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiA9IGZ1bmN0aW9uIChzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXggKi8gKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgIGlmICh0aGlzID09IG51bGwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICB9XG4gICAgICB2YXIgdCA9IE9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBsZW4gPSB0Lmxlbmd0aCA+Pj4gMDtcbiAgICAgIGlmIChsZW4gPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICB2YXIgbiA9IDA7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBuID0gTnVtYmVyKGFyZ3VtZW50c1sxXSk7XG4gICAgICAgICAgaWYgKG4gIT0gbikgeyAvLyBzaG9ydGN1dCBmb3IgdmVyaWZ5aW5nIGlmIGl0J3MgTmFOXG4gICAgICAgICAgICAgIG4gPSAwO1xuICAgICAgICAgIH0gZWxzZSBpZiAobiAhPSAwICYmIG4gIT0gSW5maW5pdHkgJiYgbiAhPSAtSW5maW5pdHkpIHtcbiAgICAgICAgICAgICAgbiA9IChuID4gMCB8fCAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG4pKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobiA+PSBsZW4pIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICB2YXIgayA9IG4gPj0gMCA/IG4gOiBNYXRoLm1heChsZW4gLSBNYXRoLmFicyhuKSwgMCk7XG4gICAgICBmb3IgKDsgayA8IGxlbjsgaysrKSB7XG4gICAgICAgICAgaWYgKGsgaW4gdCAmJiB0W2tdID09PSBzZWFyY2hFbGVtZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBrO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiAtMTtcbiAgfVxufVxuXG5yZXR1cm4gR01hcHM7XG59KSk7XG4iLCIvLyBHbWFwcy5qcyAtIGFsbG93cyB5b3UgdG8gdXNlIHRoZSBwb3RlbnRpYWwgb2YgR29vZ2xlIE1hcHMgaW4gYSBzaW1wbGUgd2F5LiBObyBtb3JlIGV4dGVuc2l2ZSBkb2N1bWVudGF0aW9uIG9yIGxhcmdlIGFtb3VudCBvZiBjb2RlOiBodHRwczovL2hwbmVvLmRldi9nbWFwcy9cclxuXHJcbndpbmRvdy5HTWFwcyA9IHJlcXVpcmUoJ2dtYXBzL2dtYXBzLmpzJyk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=