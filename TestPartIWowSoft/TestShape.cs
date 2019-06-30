using Microsoft.VisualStudio.TestTools.UnitTesting;
using ServicesIWowSoft;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestPartIWowSoft
{
    [TestClass]
    public class TestShape
    {
        [TestMethod]
        public void Rectangle_Area_CheckResult()
        {
            //Arrange
            decimal a = 4m;
            decimal b = 2m;
            decimal c = 2m;
            decimal expectedResult = 8m;
            RectangleShape op = new RectangleShape() { Side1 = a, Side2 = b ,Height=c};

            //Act
            decimal response = op.Area();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }

        [TestMethod]
        public void Rectangle_Volume_CheckResult()
        {
            //Arrange
            decimal a = 4m;
            decimal b = 2m;
            decimal c = 2m;
            decimal expectedResult = 16m;
            RectangleShape op = new RectangleShape() { Side1 = a, Side2 = b, Height = c };

            //Act
            decimal response = op.Volume();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }

        [TestMethod]
        public void Square_Area_CheckResult()
        {
            //Arrange
            decimal a = 2m;
            decimal expectedResult = 4m;
            Square op = new Square() { Side = a };

            //Act
            decimal response = op.Area();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }

        [TestMethod]
        public void Square_Volume_CheckResult()
        {
            //Arrange
            decimal a = 2m;
            decimal expectedResult = 8m;
            Square op = new Square() { Side = a };

            //Act
            decimal response = op.Volume();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }

        [TestMethod]
        public void Circle_Area_CheckResult()
        {
            //Arrange
            decimal a = 10m;
            decimal expectedResult = 314.200m;
            Circle op = new Circle() { Radius = a };

            //Act
            decimal response = op.Area();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }

        [TestMethod]
        public void Circle_Volume_CheckResult()
        {
            //Arrange
            decimal a = 10m;
            decimal expectedResult = 3142.000m;
            Circle op = new Circle() { Radius = a };

            //Act
            decimal response = op.Volume();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }
    }
}
