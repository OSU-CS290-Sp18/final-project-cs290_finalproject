(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['pictureFrame'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<article class=\"picture-frame\">\n    <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.photoSrc || (depth0 != null ? depth0.photoSrc : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"photoSrc","hash":{},"data":data}) : helper)))
    + "\" class=\"picture\">\n</article>";
},"useData":true});
})();