using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesIWowSoft
{
    public interface IOperation
    {
        decimal CalculateResult();
        decimal op1 { get; set; }
        decimal op2 { get; set; }
        void InterpretInput(string input);
    }
}
