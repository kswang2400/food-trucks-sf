(function() { this.JST || (this.JST = {}); this.JST["index"] = function(obj){var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<h1>Hungry? Find Food Trucks Near You!</h1>\n\n<input class="btn btn-lg btn-success" id="search-current" type="submit" value="Search by Current Location">\n\n<div id="spinner" class="spinner" style="display:none;">\n  <img id="img-spinner" src="http://www.pjstar.com/Global/images/loading_big.gif" alt="Loading"/>\n</div>\n\n<div id="map-canvas">\n  <div id="map-spinner" class="spinner" style="display:visible;">\n    <img id="img-spinner" src="http://www.pjstar.com/Global/images/loading_big.gif" alt="Loading"/>\n  </div>\n\n  <div id="map-not-load"  style="display:none;">\n  Map not loading? <a href="#index" id="refresh">Refresh</a>\n  </div>\n</div>\n\n<div id="error-message" style="display:none;">\n  <h4>There are no trucks near you :(</h4>\n</div>\n');}return __p.join('');};
}).call(this);
