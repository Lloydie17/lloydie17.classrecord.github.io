jQuery("#simulation")
  .on("click", ".s-71e2b356-3d5e-4df2-a4c4-1063f18684fa .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/845178af-e6eb-4a1c-adc6-4f1415145806"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/71e2b356-3d5e-4df2-a4c4-1063f18684fa"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-71e2b356-3d5e-4df2-a4c4-1063f18684fa .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Group_4" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimHide",
                    "parameter": {
                      "target": [ "#s-Group_4" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Button_6")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimHide",
                    "parameter": {
                      "target": [ "#s-Group_5" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  },
                  {
                    "action": "jimResize",
                    "parameter": {
                      "target": [ "#s-Image_2" ],
                      "width": {
                        "type": "exprvalue",
                        "value": "480.44"
                      },
                      "height": {
                        "type": "exprvalue",
                        "value": "401.79"
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": [ "#s-Image_2" ],
                      "top": {
                        "type": "movetoposition",
                        "value": "131.2"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "574.28"
                      },
                      "containment": false
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimResize",
                    "parameter": {
                      "target": [ "#s-Image" ],
                      "width": {
                        "type": "exprvalue",
                        "value": "1103.0"
                      },
                      "height": {
                        "type": "exprvalue",
                        "value": "698.13"
                      }
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimMove",
                    "parameter": {
                      "target": [ "#s-Image" ],
                      "top": {
                        "type": "movetoposition",
                        "value": "73.93"
                      },
                      "left": {
                        "type": "movetoposition",
                        "value": "263.0"
                      },
                      "containment": false
                    },
                    "exectype": "parallel",
                    "delay": 0
                  },
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Group_5" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  });