using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ServicesIWowSoft;

namespace TestPartIWowSoft
{
    /// <summary>
    /// test operation class functionality
    /// </summary>
    [TestClass]
    public class TestCalculatorOperation
    {
        [TestMethod]
        public void Add_CheckResult()
        {
            //Arrange
            decimal a = 1.5m;
            decimal b = 2.2m;
            decimal expectedResult = 3.7m;
            Add op = new Add() { op1 = a,op2=b};

            //Act
            decimal response = op.CalculateResult();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }


        [TestMethod]
        public void Subtraction_CheckResult()
        {
            //Arrange
            decimal a = 4m;
            decimal b = 2m;
            decimal expectedResult = 2m;
            Subtraction op = new Subtraction() { op1 = a, op2 = b };

            //Act
            decimal response = op.CalculateResult();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }

        [TestMethod]
        public void Division_CheckResult()
        {
            //Arrange
            decimal a = 4m;
            decimal b = 2m;
            decimal expectedResult = 2m;
            Division op = new Division() { op1 = a, op2 = b };

            //Act
            decimal response = op.CalculateResult();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }

        [TestMethod]
        public void Multiplication_CheckResult()
        {
            //Arrange
            decimal a = 4m;
            decimal b = 2m;
            decimal expectedResult = 8m;
            Multiplication op = new Multiplication() { op1 = a, op2 = b };

            //Act
            decimal response = op.CalculateResult();

            //Assert
            Assert.AreEqual(expectedResult, response);
        }

    }
}
