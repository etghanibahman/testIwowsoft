using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesIWowSoft
{
    public sealed class Operands_Singleton
    {
        private static readonly Operands_Singleton instance = new Operands_Singleton();

        // Explicit static constructor to tell C# compiler
        // not to mark type as beforefieldinit
        static Operands_Singleton()
        {
        }

        private Operands_Singleton()
        {
        }

        public static Operands_Singleton Instance
        {
            get
            {
                return instance;
            }
        }

        public decimal operand1 { get; set; }
        public decimal operand2 { get; set; }
        public string currentOperator { get; set; }
    }
}
