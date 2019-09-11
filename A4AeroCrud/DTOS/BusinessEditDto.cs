using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace A4AeroCrud.DTOS
{
    public class BusinessEditDto
    {
        public int BusinessId { get; set; }
        [MaxLength(50)]
        public string Code { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        [MaxLength(150)]
        public string City { get; set; }
        public string State { get; set; }
        [MaxLength(150)]
        public string Country { get; set; }
        [MaxLength(50)]
        public string Mobile { get; set; }
        [MaxLength(50)]
        public string Phone { get; set; }
        public string ContactPerson { get; set; }
        [MaxLength(50)]
        public string RefferedBy { get; set; }
        public string Logo { get; set; }
        public string LoginUrl { get; set; }
        public string SMTPServer { get; set; }
        [Required]
        public int SMTPPort { get; set; }
        public string SMTPUserName { get; set; }
        public string SMTPPassWord { get; set; }
        public DateTime CreatedOnUtc { get; set; }
    }
}
