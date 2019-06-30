using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesIWowSoft
{
    public abstract class Shape : IShape
    {
        public abstract decimal Area();
        public abstract decimal Volume();
    }

    public class RectangleShape : Shape
    {
        public decimal Side1 { get; set; }
        public decimal Side2 { get; set; }
        public decimal Height { get; set; }
        public override decimal Area()
        {
            return Math.Round((Side1 * Side2), 3);
        }

        public override decimal Volume()
        {
            return Math.Round((Side1 * Side2 * Height), 3);
        }
    }

    public class Square : Shape
    {
        public decimal Side { get; set; }
        public override decimal Area()
        {
            return Math.Round((Side*Side),3);
        }

        public override decimal Volume()
        {
            return Math.Round((Side * Side * Side), 3);
        }
    }

    public class Circle : Shape
    {
        public decimal Radius { get; set; }
        public override decimal Area()
        {
          return (decimal)(Math.Round(Math.PI,3)) * Radius * Radius;
        }

        public override decimal Volume()
        {
            return (decimal)(Math.Round((Math.PI * (4/3)), 3)) * Radius * Radius * Radius;
        }
    }

}
