using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesIWowSoft
{
    public class Convert : IConvert
    {
        public decimal Celsius { get; set; }
        public decimal Fahrenheit { get; set; }
        public decimal CelsiusToFahrenheit()
        {
            try
            {
                return Math.Round((Celsius * 9 / 5 + 32),3);
            }
            catch (Exception)
            {
                return 0;
            }
        }
        public decimal FahrenheitToCelsius()
        {
            try
            {
                return Math.Round(((Fahrenheit - 32) * 5 / 9),3);
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
