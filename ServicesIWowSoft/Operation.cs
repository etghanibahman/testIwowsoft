using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesIWowSoft
{
    public class Operation : IOperation
    {
        public decimal op1 { get; set; }
        public decimal op2 { get; set; }

        public virtual decimal CalculateResult()
        {
            throw new NotImplementedException();
        }

        public void InterpretInput(string input) {
            try
            {
                input = input.Replace("dot", ".");
                int pivotalPoint = 0;
                int counter = 0;
                foreach (char c in input)
                {
                    if (!Char.IsNumber(c) && c != '.')
                    {
                        pivotalPoint = counter;
                        break;
                    }
                    counter++;
                }
                Operands_Singleton.Instance.operand1 = decimal.Parse(input.Substring(0, pivotalPoint));
                input = input.Remove(0, pivotalPoint);
                Operands_Singleton.Instance.currentOperator = input.Substring(0, 1);
                input = input.Replace(input.Substring(0, 1), "");
                Operands_Singleton.Instance.operand2 = decimal.Parse(input);
            }
            catch (Exception ex)
            {
                string error = ex.Message;   
            }
        }
    }

    public class Add : Operation
    {
        public override decimal CalculateResult()
        {
            try
            {
                return (op1 + op2);
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
    public class Subtraction : Operation
    {
        public override decimal CalculateResult()
        {
            try
            {
                return (op1 - op2);
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
    public class Division : Operation
    {
        public override decimal CalculateResult()
        {
            try
            {
                return Math.Round((op1 / op2), 3);
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
    public class Multiplication : Operation
    {
        public override decimal CalculateResult()
        {
            try
            {
                return Math.Round((op1 * op2), 3);
            }
            catch (Exception)
            {
                return 0;
            }
        }
    }
}
