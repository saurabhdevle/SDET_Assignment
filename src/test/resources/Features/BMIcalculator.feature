Feature: calculate the BMI

@RegressionTest
  Scenario Outline: Test1 the BMI Calculator
    Given Open the browser and Launch the URL
    Then Validate the Title of the current page
    Then Click on BMI Calculator
    And verify the title of the page
    And Enter "<Age>" and "<Height>" and "<Weight>"
    Then Click on Calculate BMI
    And Capture the Result
    Then close the browser

    Examples: 
      | Age | Height | Weight |
      |  10 |    125 |     40 |
      |  30 |    156 |     70 |
      |  25 |    152 |     55 |
      |  20 |    160 |     45 |
      |  35 |    160 |     70 |

      @RegressionTest
      Scenario Outline: Test2 the BMI Calculator
    Given Open the browser and Launch the URL
    Then Validate the Title of the current page
    Then Click on BMI Calculator
    And verify the title of the page
    And Enter "<Age>" and "<Height>" and "<Weight>"
    Then Click on Calculate BMI
    And Capture the Result
    Then close the browser

    Examples: 
      | Age | Height | Weight |
      |  10 |    125 |     40 |
      |  30 |    156 |     70 |
      |  25 |    152 |     55 |
      |  20 |    160 |     45 |
      |  35 |    160 |     70 |

@SmokeTest
Scenario Outline: Test3 the BMI Calculator
    Given Open the browser and Launch the URL
    Then Validate the Title of the current page
    Then Click on BMI Calculator
    And verify the title of the page
    And Enter "<Age>" and "<Height>" and "<Weight>"
    Then Click on Calculate BMI
    And Capture the Result
    Then close the browser

    Examples: 
      | Age | Height | Weight |
      |  10 |    125 |     40 |
      |  30 |    156 |     70 |
      |  25 |    152 |     55 |
      |  20 |    160 |     45 |
      |  35 |    160 |     70 |


Scenario Outline: Test the BMI Calculator
    Given Open the browser and Launch the URL
    Then Validate the Title of the current page
    Then Click on BMI Calculator
    And verify the title of the page
    And Enter "<Age>" and "<Height>" and "<Weight>"
    Then Click on Calculate BMI
    And Capture the Result
    Then close the browser

    Examples: 
      | Age | Height | Weight |
      |  10 |    125 |     40 |
      |  30 |    156 |     70 |
      |  25 |    152 |     55 |
      |  20 |    160 |     45 |
      |  35 |    160 |     70 |


Scenario Outline: Test the BMI Calculator
    Given Open the browser and Launch the URL
    Then Validate the Title of the current page
    Then Click on BMI Calculator
    And verify the title of the page
    And Enter "<Age>" and "<Height>" and "<Weight>"
    Then Click on Calculate BMI
    And Capture the Result
    Then close the browser

    Examples: 
      | Age | Height | Weight |
      |  10 |    125 |     40 |
      |  30 |    156 |     70 |
      |  25 |    152 |     55 |
      |  20 |    160 |     45 |
      |  35 |    160 |     70 |
      
      
      