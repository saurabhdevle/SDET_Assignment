package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources\\Features\\BMIcalculator.feature", 
glue = {"stepDefinition" },
tags= {"@RegressionTest,@SmokeTest"},
plugin = { "pretty", "html:target/cucumber-pretty"}
)
public class TestRunner {

}
