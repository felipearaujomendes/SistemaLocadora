using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Marechal_System.Models
{
    public class Entrada
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        
        [Required]
        public string Codigo { get; set; }
        
        [Required]
        public string Nome { get; set; }
        
        [Required]
        public string Caixa { get; set; }
        
        [Required]
        public string Quantidade { get; set; }
       
        [Required]
        public DateTime DataCadastro { get; set; }
    }
}