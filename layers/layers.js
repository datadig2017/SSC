var wms_layers = [];
var format_BaseMap_0 = new ol.format.GeoJSON();
var features_BaseMap_0 = format_BaseMap_0.readFeatures(json_BaseMap_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BaseMap_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BaseMap_0.addFeatures(features_BaseMap_0);var lyr_BaseMap_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BaseMap_0, 
                style: style_BaseMap_0,
                title: '<img src="styles/legend/BaseMap_0.png" /> Base Map'
            });var format_Solution6ProjectLocation_1 = new ol.format.GeoJSON();
var features_Solution6ProjectLocation_1 = format_Solution6ProjectLocation_1.readFeatures(json_Solution6ProjectLocation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution6ProjectLocation_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution6ProjectLocation_1.addFeatures(features_Solution6ProjectLocation_1);var lyr_Solution6ProjectLocation_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution6ProjectLocation_1, 
                style: style_Solution6ProjectLocation_1,
    title: 'Solution 6 - Project Location<br />\
    <img src="styles/legend/Solution6ProjectLocation_1_0.png" /> Capacity builder<br />'
        });var format_Solution6Connection_2 = new ol.format.GeoJSON();
var features_Solution6Connection_2 = format_Solution6Connection_2.readFeatures(json_Solution6Connection_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution6Connection_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution6Connection_2.addFeatures(features_Solution6Connection_2);var lyr_Solution6Connection_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution6Connection_2, 
                style: style_Solution6Connection_2,
    title: 'Solution 6 - Connection<br />\
    <img src="styles/legend/Solution6Connection_2_0.png" /> Capacity builder<br />'
        });var format_Solution5ProjectLocation_3 = new ol.format.GeoJSON();
var features_Solution5ProjectLocation_3 = format_Solution5ProjectLocation_3.readFeatures(json_Solution5ProjectLocation_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution5ProjectLocation_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution5ProjectLocation_3.addFeatures(features_Solution5ProjectLocation_3);var lyr_Solution5ProjectLocation_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution5ProjectLocation_3, 
                style: style_Solution5ProjectLocation_3,
    title: 'Solution 5 - Project Location<br />\
    <img src="styles/legend/Solution5ProjectLocation_3_0.png" /> Capacity builder<br />'
        });var format_Solution5Connection_4 = new ol.format.GeoJSON();
var features_Solution5Connection_4 = format_Solution5Connection_4.readFeatures(json_Solution5Connection_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution5Connection_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution5Connection_4.addFeatures(features_Solution5Connection_4);var lyr_Solution5Connection_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution5Connection_4, 
                style: style_Solution5Connection_4,
    title: 'Solution 5 - Connection<br />\
    <img src="styles/legend/Solution5Connection_4_0.png" /> Capacity builder<br />'
        });var format_Solution4ProjectLocation_5 = new ol.format.GeoJSON();
var features_Solution4ProjectLocation_5 = format_Solution4ProjectLocation_5.readFeatures(json_Solution4ProjectLocation_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution4ProjectLocation_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution4ProjectLocation_5.addFeatures(features_Solution4ProjectLocation_5);var lyr_Solution4ProjectLocation_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution4ProjectLocation_5, 
                style: style_Solution4ProjectLocation_5,
    title: 'Solution 4 - Project Location<br />\
    <img src="styles/legend/Solution4ProjectLocation_5_0.png" /> Capacity builder<br />'
        });var format_Solution4Connection_6 = new ol.format.GeoJSON();
var features_Solution4Connection_6 = format_Solution4Connection_6.readFeatures(json_Solution4Connection_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution4Connection_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution4Connection_6.addFeatures(features_Solution4Connection_6);var lyr_Solution4Connection_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution4Connection_6, 
                style: style_Solution4Connection_6,
    title: 'Solution 4 - Connection<br />\
    <img src="styles/legend/Solution4Connection_6_0.png" /> Capacity builder<br />'
        });var format_Solution3ProjectLocation_7 = new ol.format.GeoJSON();
var features_Solution3ProjectLocation_7 = format_Solution3ProjectLocation_7.readFeatures(json_Solution3ProjectLocation_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution3ProjectLocation_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution3ProjectLocation_7.addFeatures(features_Solution3ProjectLocation_7);var lyr_Solution3ProjectLocation_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution3ProjectLocation_7, 
                style: style_Solution3ProjectLocation_7,
    title: 'Solution 3 - Project Location<br />\
    <img src="styles/legend/Solution3ProjectLocation_7_0.png" /> Capacity builder<br />'
        });var format_Solution3Connection_8 = new ol.format.GeoJSON();
var features_Solution3Connection_8 = format_Solution3Connection_8.readFeatures(json_Solution3Connection_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution3Connection_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution3Connection_8.addFeatures(features_Solution3Connection_8);var lyr_Solution3Connection_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution3Connection_8, 
                style: style_Solution3Connection_8,
    title: 'Solution 3 - Connection<br />\
    <img src="styles/legend/Solution3Connection_8_0.png" /> Capacity builder<br />'
        });var format_Solution2ProjectLocation_9 = new ol.format.GeoJSON();
var features_Solution2ProjectLocation_9 = format_Solution2ProjectLocation_9.readFeatures(json_Solution2ProjectLocation_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution2ProjectLocation_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution2ProjectLocation_9.addFeatures(features_Solution2ProjectLocation_9);var lyr_Solution2ProjectLocation_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution2ProjectLocation_9, 
                style: style_Solution2ProjectLocation_9,
    title: 'Solution 2 - Project Location<br />\
    <img src="styles/legend/Solution2ProjectLocation_9_0.png" /> Capacity builder<br />'
        });var format_Solution2Connection_10 = new ol.format.GeoJSON();
var features_Solution2Connection_10 = format_Solution2Connection_10.readFeatures(json_Solution2Connection_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution2Connection_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution2Connection_10.addFeatures(features_Solution2Connection_10);var lyr_Solution2Connection_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution2Connection_10, 
                style: style_Solution2Connection_10,
    title: 'Solution 2 - Connection<br />\
    <img src="styles/legend/Solution2Connection_10_0.png" /> Capacity builder<br />'
        });var format_Solution1ProjectLocation_11 = new ol.format.GeoJSON();
var features_Solution1ProjectLocation_11 = format_Solution1ProjectLocation_11.readFeatures(json_Solution1ProjectLocation_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution1ProjectLocation_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution1ProjectLocation_11.addFeatures(features_Solution1ProjectLocation_11);var lyr_Solution1ProjectLocation_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution1ProjectLocation_11, 
                style: style_Solution1ProjectLocation_11,
    title: 'Solution 1 - Project Location<br />\
    <img src="styles/legend/Solution1ProjectLocation_11_0.png" /> Capacity builder<br />'
        });var format_Solution1Connection_12 = new ol.format.GeoJSON();
var features_Solution1Connection_12 = format_Solution1Connection_12.readFeatures(json_Solution1Connection_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solution1Connection_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Solution1Connection_12.addFeatures(features_Solution1Connection_12);var lyr_Solution1Connection_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Solution1Connection_12, 
                style: style_Solution1Connection_12,
    title: 'Solution 1 - Connection<br />\
    <img src="styles/legend/Solution1Connection_12_0.png" /> Capacity builder<br />'
        });

lyr_Solution6ProjectLocation_1.setVisible(true);lyr_Solution6Connection_2.setVisible(true);lyr_Solution5ProjectLocation_3.setVisible(true);lyr_Solution5Connection_4.setVisible(true);lyr_Solution4ProjectLocation_5.setVisible(true);lyr_Solution4Connection_6.setVisible(true);lyr_Solution3ProjectLocation_7.setVisible(true);lyr_Solution3Connection_8.setVisible(true);lyr_Solution2ProjectLocation_9.setVisible(true);lyr_Solution2Connection_10.setVisible(true);lyr_Solution1ProjectLocation_11.setVisible(true);lyr_Solution1Connection_12.setVisible(true);
var layersList = [lyr_BaseMap_0,lyr_Solution6ProjectLocation_1,lyr_Solution6Connection_2,lyr_Solution5ProjectLocation_3,lyr_Solution5Connection_4,lyr_Solution4ProjectLocation_5,lyr_Solution4Connection_6,lyr_Solution3ProjectLocation_7,lyr_Solution3Connection_8,lyr_Solution2ProjectLocation_9,lyr_Solution2Connection_10,lyr_Solution1ProjectLocation_11,lyr_Solution1Connection_12];
lyr_BaseMap_0.set('fieldAliases', {'admin': 'admin', 'adm0_a3': 'adm0_a3', 'name': 'name', 'pop_est': 'pop_est', });
lyr_Solution6ProjectLocation_1.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution6Connection_2.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution5ProjectLocation_3.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution5Connection_4.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution4ProjectLocation_5.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution4Connection_6.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution3ProjectLocation_7.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution3Connection_8.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution2ProjectLocation_9.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution2Connection_10.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution1ProjectLocation_11.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_Solution1Connection_12.set('fieldAliases', {'orig': 'orig', 'orgin2': 'orgin2', 'start.lat': 'start.lat', 'start.lon': 'start.lon', 'sscmarkers': 'sscmarkers', 'dest': 'dest', 'dest3': 'dest3', 'dest2': 'dest2', 'end.lat': 'end.lat', 'end.lon': 'end.lon', 'popup': 'popup', });
lyr_BaseMap_0.set('fieldImages', {'admin': 'Hidden', 'adm0_a3': 'Hidden', 'name': 'Hidden', 'pop_est': 'Hidden', });
lyr_Solution6ProjectLocation_1.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution6Connection_2.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution5ProjectLocation_3.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution5Connection_4.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution4ProjectLocation_5.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution4Connection_6.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution3ProjectLocation_7.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution3Connection_8.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution2ProjectLocation_9.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution2Connection_10.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution1ProjectLocation_11.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_Solution1Connection_12.set('fieldImages', {'orig': 'Hidden', 'orgin2': 'Hidden', 'start.lat': 'Hidden', 'start.lon': 'Hidden', 'sscmarkers': 'Hidden', 'dest': 'Hidden', 'dest3': 'Hidden', 'dest2': 'Hidden', 'end.lat': 'Hidden', 'end.lon': 'Hidden', 'popup': 'TextEdit', });
lyr_BaseMap_0.set('fieldLabels', {});
lyr_Solution6ProjectLocation_1.set('fieldLabels', {'popup': 'no label', });
lyr_Solution6Connection_2.set('fieldLabels', {'popup': 'no label', });
lyr_Solution5ProjectLocation_3.set('fieldLabels', {'popup': 'no label', });
lyr_Solution5Connection_4.set('fieldLabels', {'popup': 'no label', });
lyr_Solution4ProjectLocation_5.set('fieldLabels', {'popup': 'no label', });
lyr_Solution4Connection_6.set('fieldLabels', {'popup': 'no label', });
lyr_Solution3ProjectLocation_7.set('fieldLabels', {'popup': 'no label', });
lyr_Solution3Connection_8.set('fieldLabels', {'popup': 'no label', });
lyr_Solution2ProjectLocation_9.set('fieldLabels', {'popup': 'no label', });
lyr_Solution2Connection_10.set('fieldLabels', {'popup': 'no label', });
lyr_Solution1ProjectLocation_11.set('fieldLabels', {'popup': 'no label', });
lyr_Solution1Connection_12.set('fieldLabels', {'popup': 'no label', });
lyr_Solution1Connection_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});