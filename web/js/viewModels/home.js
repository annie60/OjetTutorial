/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * home module
 */
define(['ojs/ojcore', 'knockout','ojs/ojchart'
], function (oj, ko) {
    /**
     * The view model for the main content view template
     */
    function homeContentViewModel() {
        var self = this;
        self.myMessage=ko.observable('Hello world');
        /* chart data */
        var bubbleSeries = [{name : "Series 1", items : [{x:15, y:25, z:5}, {x:25, y:30, z:12}, {x:25, y:45, z:12}]},
                            {name : "Series 2", items : [{x:15, y:15, z:8}, {x:20, y:35, z:14}, {x:40, y:55, z:35}]},
                            {name : "Series 3", items : [{x:10, y:10, z:8}, {x:18, y:55, z:10}, {x:40, y:50, z:18}]},
                            {name : "Series 4", items : [{x: 8, y:20, z:6}, {x:11, y:30, z: 8}, {x:30, y:40, z:15}]}];
    
        var bubbleGroups = ["Group A", "Group B", "Group C"];
  
        
        self.bubbleSeriesValue = ko.observableArray(bubbleSeries);
        self.bubbleGroupsValue = ko.observableArray(bubbleGroups);
    }
    
    return homeContentViewModel;
});
