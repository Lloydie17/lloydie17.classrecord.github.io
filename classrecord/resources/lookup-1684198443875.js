(function(window, undefined) {
  var dictionary = {
    "19f14e41-cc14-433b-a57a-a9c3713a5cbe": "Attendance",
    "37753e2c-f42b-4bc5-b4eb-8ba0ffd48990": "Settings",
    "f96ae2ea-0962-45a6-9b1b-5dd6e57d7cf7": "Transmutation",
    "71e2b356-3d5e-4df2-a4c4-1063f18684fa": "Forgot user and password",
    "845178af-e6eb-4a1c-adc6-4f1415145806": "Announcement in index",
    "1272a047-0577-41b2-83e4-6099cb784433": "Summary",
    "d641f32d-b33a-4970-9d60-b3d5cfd73e4c": "Performance",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Index",
    "f7cf9971-c252-4e49-8569-383253647265": "Statistics",
    "198b1664-ba5e-4077-9b01-583b25e00f80": "Dashboard",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);