$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/BMIcalculator.feature");
formatter.feature({
  "line": 1,
  "name": "calculate the BMI",
  "description": "",
  "id": "calculate-the-bmi",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test1 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test1-the-bmi-calculator",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"\u003cAge\u003e\" and \"\u003cHeight\u003e\" and \"\u003cWeight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "calculate-the-bmi;test1-the-bmi-calculator;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 15,
      "id": "calculate-the-bmi;test1-the-bmi-calculator;;1"
    },
    {
      "cells": [
        "10",
        "125",
        "40"
      ],
      "line": 16,
      "id": "calculate-the-bmi;test1-the-bmi-calculator;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 17,
      "id": "calculate-the-bmi;test1-the-bmi-calculator;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 18,
      "id": "calculate-the-bmi;test1-the-bmi-calculator;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 19,
      "id": "calculate-the-bmi;test1-the-bmi-calculator;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 20,
      "id": "calculate-the-bmi;test1-the-bmi-calculator;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "Test1 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test1-the-bmi-calculator;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"10\" and \"125\" and \"40\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 7515789100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 21808200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1885427400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1968225600,
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
  "duration": 4045661300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 858709200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 65053200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1191365400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test1 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test1-the-bmi-calculator;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"30\" and \"156\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5193316600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 26172000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1598854100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1671531500,
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
  "duration": 3847945000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 802724800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 61095600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1061927400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Test1 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test1-the-bmi-calculator;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"25\" and \"152\" and \"55\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5044698600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 15300600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1312573300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1643007900,
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
  "duration": 4277030200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 610394600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 59532700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1061348800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Test1 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test1-the-bmi-calculator;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"20\" and \"160\" and \"45\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 6060612700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 27587900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1636463500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1817690300,
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
  "duration": 4411355700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 1423731000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 61180400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1003028900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Test1 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test1-the-bmi-calculator;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter \"35\" and \"160\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5218091700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 23871500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1602723400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1663543200,
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
  "duration": 3661301100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 797521100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 56633800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1001782700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Test2 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test2-the-bmi-calculator",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \"\u003cAge\u003e\" and \"\u003cHeight\u003e\" and \"\u003cWeight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 33,
  "name": "",
  "description": "",
  "id": "calculate-the-bmi;test2-the-bmi-calculator;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 34,
      "id": "calculate-the-bmi;test2-the-bmi-calculator;;1"
    },
    {
      "cells": [
        "10",
        "125",
        "40"
      ],
      "line": 35,
      "id": "calculate-the-bmi;test2-the-bmi-calculator;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 36,
      "id": "calculate-the-bmi;test2-the-bmi-calculator;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 37,
      "id": "calculate-the-bmi;test2-the-bmi-calculator;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 38,
      "id": "calculate-the-bmi;test2-the-bmi-calculator;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 39,
      "id": "calculate-the-bmi;test2-the-bmi-calculator;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 35,
  "name": "Test2 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test2-the-bmi-calculator;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \"10\" and \"125\" and \"40\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 6476367800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 14641200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1309500500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1614333100,
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
  "duration": 3732410000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 736695700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 65384100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1086068200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Test2 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test2-the-bmi-calculator;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \"30\" and \"156\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5901886700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 27961000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1956186600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 2257156800,
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
  "duration": 3854906000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 648036100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 58431200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1201492000,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Test2 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test2-the-bmi-calculator;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \"25\" and \"152\" and \"55\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5548428400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 25166700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1582084700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1906698100,
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
  "duration": 3954546600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 627941000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 55083500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1100356000,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Test2 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test2-the-bmi-calculator;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \"20\" and \"160\" and \"45\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 7114557800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 39339300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1828741200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 2084222300,
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
  "duration": 4136444400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 1513394500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 97597200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1338926200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Test2 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test2-the-bmi-calculator;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 22,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "Enter \"35\" and \"160\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5251881200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 12001500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 2011527600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1930035400,
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
  "duration": 3792346200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 885417400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 90999200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1087332200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 42,
  "name": "Test3 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test3-the-bmi-calculator",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter \"\u003cAge\u003e\" and \"\u003cHeight\u003e\" and \"\u003cWeight\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 52,
  "name": "",
  "description": "",
  "id": "calculate-the-bmi;test3-the-bmi-calculator;",
  "rows": [
    {
      "cells": [
        "Age",
        "Height",
        "Weight"
      ],
      "line": 53,
      "id": "calculate-the-bmi;test3-the-bmi-calculator;;1"
    },
    {
      "cells": [
        "10",
        "125",
        "40"
      ],
      "line": 54,
      "id": "calculate-the-bmi;test3-the-bmi-calculator;;2"
    },
    {
      "cells": [
        "30",
        "156",
        "70"
      ],
      "line": 55,
      "id": "calculate-the-bmi;test3-the-bmi-calculator;;3"
    },
    {
      "cells": [
        "25",
        "152",
        "55"
      ],
      "line": 56,
      "id": "calculate-the-bmi;test3-the-bmi-calculator;;4"
    },
    {
      "cells": [
        "20",
        "160",
        "45"
      ],
      "line": 57,
      "id": "calculate-the-bmi;test3-the-bmi-calculator;;5"
    },
    {
      "cells": [
        "35",
        "160",
        "70"
      ],
      "line": 58,
      "id": "calculate-the-bmi;test3-the-bmi-calculator;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 54,
  "name": "Test3 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test3-the-bmi-calculator;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter \"10\" and \"125\" and \"40\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5583728100,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 24216800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1651597500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1784008700,
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
  "duration": 4321469900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 929865400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 88421700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1336736700,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Test3 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test3-the-bmi-calculator;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter \"30\" and \"156\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 6434496400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 13305500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1758229000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 2095827500,
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
  "duration": 3703069400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 563427900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 60934600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1101978300,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Test3 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test3-the-bmi-calculator;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter \"25\" and \"152\" and \"55\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5702558300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 12696900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1756079300,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 2076875000,
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
  "duration": 3996400500,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 1330873900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 54046200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1346994300,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Test3 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test3-the-bmi-calculator;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter \"20\" and \"160\" and \"45\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5820196700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 14035000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1440609600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 1865889800,
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
  "duration": 4016608600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 658067400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 126306900,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1630807700,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Test3 the BMI Calculator",
  "description": "",
  "id": "calculate-the-bmi;test3-the-bmi-calculator;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 41,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "Open the browser and Launch the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "Validate the Title of the current page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "Click on BMI Calculator",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "verify the title of the page",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "Enter \"35\" and \"160\" and \"70\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "Click on Calculate BMI",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "Capture the Result",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "BMICalculator.open_the_browser_and_Launch_the_URL()"
});
formatter.result({
  "duration": 5336981200,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.validate_the_Title_of_the_current_page()"
});
formatter.result({
  "duration": 13563600,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_BMI_Calculator()"
});
formatter.result({
  "duration": 1651070000,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.verify_the_title_of_the_page()"
});
formatter.result({
  "duration": 2089979400,
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
  "duration": 3944158400,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.click_on_Calculate_BMI()"
});
formatter.result({
  "duration": 920188800,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.capture_the_Result()"
});
formatter.result({
  "duration": 175361700,
  "status": "passed"
});
formatter.match({
  "location": "BMICalculator.close_the_browser()"
});
formatter.result({
  "duration": 1130803300,
  "status": "passed"
});
});