var gridView;
var dataProvider;

$(document).ready( function(){
    RealGridJS.setRootContext("./script");

    dataProvider = new RealGridJS.LocalDataProvider();
    gridView = new RealGridJS.GridView("realgrid");
    gridView.setDataSource(dataProvider);
});