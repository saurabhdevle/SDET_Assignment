$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/BMIcalculator.feature");
formatter.feature({
  "line": 1,
  "name": "calculate the BMI",
  "description": "",
  "id": "calculate-the-bmi",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test-the-bmi-calculator",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter \"\u003cAge\u003e\" and \"\u003cHeight\u003e\" and \"\u003cWeight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "calculate-the-bmi;test-the-bmi-calculator;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 14,
      "id": "calculate-the-bmi;test-the-bmi-calculator;;1"
    },
    {
      "cells": [
        "10",
        "125",
        "40"
      ],
      "line": 15,
      "id": "calculate-the-bmi;test-the-bmi-calculator;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 16,
      "id": "calculate-the-bmi;test-the-bmi-calculator;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 17,
      "id": "calculate-the-bmi;test-the-bmi-calculator;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 18,
      "id": "calculate-the-bmi;test-the-bmi-calculator;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 19,
      "id": "calculate-the-bmi;test-the-bmi-calculator;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Test the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test-the-bmi-calculator;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter \"10\" and \"125\" and \"40\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 7820649100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 18906800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1747736200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 2076906400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 7
    },
    {
      "val": "125",
      "offset": 16
    },
    {
      "val": "40",
      "offset": 26
    }
  ],
  "location": "BMICalculator.enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 3894120800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 864042400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 98531300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1329125400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Test the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test-the-bmi-calculator;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter \"30\" and \"156\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 6257536900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 13975700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1999022000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1845393700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 7
    },
    {
      "val": "156",
      "offset": 16
    },
    {
      "val": "70",
      "offset": 26
    }
  ],
  "location": "BMICalculator.enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 4297595800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 825058300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 115661300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1229017700,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test-the-bmi-calculator;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter \"25\" and \"152\" and \"55\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5900698000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 26947700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 2167101100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 2344323500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25",
      "offset": 7
    },
    {
      "val": "152",
      "offset": 16
    },
    {
      "val": "55",
      "offset": 26
    }
  ],
  "location": "BMICalculator.enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 4142844700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 759256000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 72848100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1364101400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Test the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test-the-bmi-calculator;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter \"20\" and \"160\" and \"45\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5362520500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 23470200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1854204500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1947522100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 7
    },
    {
      "val": "160",
      "offset": 16
    },
    {
      "val": "45",
      "offset": 26
    }
  ],
  "location": "BMICalculator.enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 3824712600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 793811500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 58271200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1101113500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Test the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test-the-bmi-calculator;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter \"35\" and \"160\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5777332000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 21008200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1617558900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1920069200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35",
      "offset": 7
    },
    {
      "val": "160",
      "offset": 16
    },
    {
      "val": "70",
      "offset": 26
    }
  ],
  "location": "BMICalculator.enter_and_and(String,String,String)"
});
formatter.result({
  "duration": 3691875900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 858246400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 68660100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1041901300,
  "status": "passed"
});
});