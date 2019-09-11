using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Models
{
    public class BusinessEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int BusinessId { get; set; }
        [MaxLength(50)]
        public string Code { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Street { get; set; }
        [MaxLength(150)]
        public string City { get; set; }
        public string State { get; set; }
        [MaxLength(50)]
        public string Zip { get; set; }
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
        [Required]
        public int Status { get; set; }
        [Required]
        public float Balance { get; set; }
        public string LoginUrl { get; set; }
        public string SecurityCode { get; set; }
        public string SMTPServer { get; set; }
        [Required]
        public int SMTPPort { get; set; }
        public string SMTPUserName { get; set; }
        public string SMTPPassWord { get; set; }
        [Required]
        public bool Deleted { get; set; }
        [Required, DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime CreatedOnUtc { get; set; }
        [Required, DatabaseGenerated(DatabaseGeneratedOption.Computed)]
        public DateTime UpdatedOnUtc { get; set; }
        [Required]
        public float CurrentBalance { get; set; }

    }
}
