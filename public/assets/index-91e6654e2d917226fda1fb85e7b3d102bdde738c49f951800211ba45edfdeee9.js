(function() { this.JST || (this.JST = {}); this.JST["index"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div id="sidebar" class="col-md-4">\n  <h1>Hungry? Find Food Trucks Near You!</h1>\n\n  <!-- Location Input -->\n  <div id="search-buttons">\n    <input class="btn btn-md btn-success" id="search-current" type="submit" value="Search by Current Location">\n    <input class="btn btn-md btn-success" id="search-input" type="submit" value="Search!">\n  </div>\n\n  <!-- Map Loading Spinner -->\n  <div id="spinner" class="spinner" style="display:none;">\n    <img id="img-spinner" src="http://www.pjstar.com/Global/images/loading_big.gif" alt="Loading"/>\n  </div>\n\n  <ul id="truck-list" class="list-group scrollable"></ul>\n</div>\n\n<div id="full-map" class="col-md-8">\n  <form id="search-location-form">\n    <input class="form-control" id="search-location" type="text" name="address" placeholder="Enter a location... e.g. 534 4th Street">\n  </form>\n  <!-- Map Canvas -->\n  <div id="map-canvas">\n    <div id="map-not-load"  style="display:none;">\n    Map not loading? <a href="#index" id="refresh">Refresh</a>\n    </div>\n\n    <div id="map-spinner" class="spinner">\n      <img id="img-spinner" src="http://www.pjstar.com/Global/images/loading_big.gif" alt="Loading"/>\n    </div>\n  </div>\n\n  <!-- No Trucks Message -->\n  <div id="error-message" style="display:none;">\n    <h4>There are no trucks near you :(</h4>\n  </div>\n</div>\n');}return __p.join('');};
}).call(this);
