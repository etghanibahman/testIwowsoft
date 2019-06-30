using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ServicesIWowSoft;

namespace testIwowsoft.Controllers
{
    [Route("api/[controller]")]
    public class SampleDataController : Controller
    {
        IShape _shape = new Square();
        IOperation _operation = new Operation();
        IConvert _convert = new ServicesIWowSoft.Convert();
        public SampleDataController(IOperation operation, IShape shape, IConvert convert)
        {
            _operation = operation;
            _shape = shape;
            _convert = convert;
        }

        [HttpGet("[action]")]
        public string Calculator(string opration)
        {
            try
            {
                _operation.InterpretInput(opration);
                switch (Operands_Singleton.Instance.currentOperator)
                {
                    case "a":
                        _operation = new Add();
                        break;
                    case "s":
                        _operation = new Subtraction();
                        break;
                    case "d":
                        _operation = new Division();
                        break;
                    case "m":
                        _operation = new Multiplication();
                        break;
                    default:
                        break;
                }
                _operation.op1 = Operands_Singleton.Instance.operand1;
                _operation.op2 = Operands_Singleton.Instance.operand2;
                var res = _operation.CalculateResult().ToString();
                return res;
            }
            catch (Exception ex)
            {
                return "";
            }

        }

        [HttpGet("[action]")]
        public string CalculateAV(string radius, string side, string side1, string side2, string height, string currentShape, string currentOperation)
        {
            try
            {
                switch (currentShape)
                {
                    case "Circle":
                        _shape = new Circle() { Radius=decimal.Parse(radius)};
                        break;
                    case "Square":
                        _shape = new Square() { Side = decimal.Parse(side) };
                        break;
                    case "Rectangle":
                        _shape = new RectangleShape() { Side1= decimal.Parse(side1) ,Side2= decimal.Parse(side2) ,Height= decimal.Parse(height) };
                        break;
                    default:
                        break;
                }
                decimal res=0m;
                switch (currentOperation)
                {
                    case "Area":
                        res = _shape.Area();
                        break;
                    case "Volume":
                        res = _shape.Volume();
                        break;
                    default:
                        break;
                }

                return res.ToString();
            }
            catch (Exception ex)
            {
                return "-1";
            }

        }


        
        [HttpGet("[action]")]
        public string convertTemperature(string Celsius, string Fahrenheit, string convert)
        {
            try
            {
                decimal num = 0;
                decimal res = 0;
                _convert.Fahrenheit = 0;
                _convert.Celsius = 0;
                if (decimal.TryParse(Celsius, out num))
                {
                    _convert.Celsius = decimal.Parse(Celsius);
                }
                if (decimal.TryParse(Fahrenheit, out num))
                {
                    _convert.Fahrenheit = num;
                }
                if (convert=="ctof")
                {
                    res = _convert.CelsiusToFahrenheit();
                }
                else
                {
                    res = _convert.FahrenheitToCelsius();
                }
                return res.ToString();
            }
            catch (Exception ex)
            {
                return "Problem in conversion...";
            }

        }

    }
}
