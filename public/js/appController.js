/**
 * Copyright (c) 2014, 2018, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojknockout', 'ojs/ojchart'],
  function(oj, ko) {
     function ControllerViewModel() {
       var self = this;

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("Visa Dashboard");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable("john.doe@example.com");
      
      /* chart data */
      var barSeries = [{name: "UK", items: [42]}, {name: "US", items: [55]}];
      var barGroups = ["Countries"];
      self.barSeriesValue = ko.observableArray(barSeries);
      self.barGroupsValue = ko.observableArray(barGroups);
      
      /* last submission data */
      self.name = ko.observable("John Doe");
      self.email = ko.observable("john.doe@example.com");
      
      var ev = new EventSource('/dashboardData');
      ev.onmessage = function (event) {
        self.barSeriesValue.removeAll();
        var json = JSON.parse(event.data);
        self.name(json.name);
        self.email(json.email);
        for (var i = 0; i < json.countries.length; i++) {
          self.barSeriesValue.push(json.countries[i]);
        }
      };
     }

     return new ControllerViewModel();
  }
);
