using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesIWowSoft
{
    public interface IConvert
    {
        decimal Celsius { get; set; }
        decimal Fahrenheit { get; set; }
        decimal CelsiusToFahrenheit();
        decimal FahrenheitToCelsius();
    }
}
