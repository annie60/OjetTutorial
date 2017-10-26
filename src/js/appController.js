/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * App controller to define and load the 
 * knockout requiredscripts
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojknockout'],
        function (oj, ko) {


            function ControllerViewModel() {
                var self = this; //This declaration helps identify the model properties without mixing DOM properties.

                // Header
                // Application Name used in Branding Area
                self.appName = ko.observable("BasicApp");
               

            }

            return new ControllerViewModel();
        }
);

