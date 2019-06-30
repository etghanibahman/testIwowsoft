using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace TestPartIWowSoft
{
    [TestClass]
    public class TestConversion
    {
        
        [TestMethod]
        public void Convert_CelsiusToFahrenheit_CheckResult()
        {
            //Arrange
            decimal a = 100m;
            decimal expectedResult = 212m;
            ServicesIWowSoft.Convert op = new ServicesIWowSoft.Convert() {  Celsius= a };

            //Act
            decimal response = op.CelsiusToFahrenheit();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }

        [TestMethod]
        public void Convert_FahrenheitToCelsius_CheckResult()
        {
            //Arrange
            decimal a = 212m;
            decimal expectedResult = 100m;
            ServicesIWowSoft.Convert op = new ServicesIWowSoft.Convert() { Fahrenheit = a };

            //Act
            decimal response = op.FahrenheitToCelsius();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }
    }
}
