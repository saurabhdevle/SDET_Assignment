package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class BMICalculator {

	WebDriver driver;

	@Given("^Open the browser and Launch the URL$")
	public void open_the_browser_and_Launch_the_URL() throws Throwable {

		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		// driver.manage().window().maximize();
		driver.get("https://www.calculator.net/");

	}

	@Then("^Validate the Title of the current page$")
	public void validate_the_Title_of_the_current_page() throws Throwable {

		String ExpectedTitle = "Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science";

		String ActualTitle = driver.getTitle();
		if(ActualTitle.equals(ExpectedTitle))
		{
			System.out.println("Title is same");
		}
		else
		{
			System.out.println("Title is not same");
		}
		
		System.out.println(ActualTitle);
	}

	@Then("^Click on BMI Calculator$")
	public void click_on_BMI_Calculator() throws Throwable {

		driver.findElement(By.xpath("//*[@id=\"hl2\"]/li[1]/a")).click();
	}

	@Then("^verify the title of the page$")
	public void verify_the_title_of_the_page() throws Throwable {

		String ExpectedBMIValue = "BMI Calculator";
		String ActualBMITitle = driver.getTitle();
	
		if(ActualBMITitle.equals(ExpectedBMIValue))
		{
			System.out.println("Title is same");
		}
		else
		{
			System.out.println("Title is not same");
		}
		
		System.out.println(ActualBMITitle);
		
		
		driver.findElement(By.xpath("//a[contains(text(),'Metric Units')]")).click();
		Thread.sleep(1000);
		
	}

	@Then("^Enter \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_and_and(String Age, String Height, String Weight) throws Throwable {

		WebElement Age_vale = driver.findElement(By.xpath("//input[@name=\"cage\"]"));
		Age_vale.clear();
		Age_vale.sendKeys(Age);
		Thread.sleep(1000);
		
		driver.findElement(By.xpath("//tbody/tr[2]/td[2]/label[1]/span[1]")).click();
		
		WebElement Height_value=driver.findElement(By.xpath("//input[@id='cheightmeter']"));
		Height_value.clear();
		Height_value.sendKeys(Height);
		Thread.sleep(1000);
		
		WebElement Weight_value = driver.findElement(By.xpath("//input[@id='ckg']"));
		Weight_value.clear();
		Weight_value.sendKeys(Weight);
		Thread.sleep(1000);
	}

	@Then("^Click on Calculate BMI$")
	public void click_on_Calculate_BMI() throws Throwable {
	driver.findElement(By.xpath("//Input[@value=\"Calculate\"]")).click();
	
	}

	@Then("^Capture the Result$")
	public void capture_the_Result() throws Throwable {
	
 WebElement Result = driver.findElement(By.xpath("//body/div[@id='contentout']/div[@id='content']/div[4]/div[1]/b[1]"));
 System.out.println( Result.getText());

 

	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
driver.quit();
		
	}

}
